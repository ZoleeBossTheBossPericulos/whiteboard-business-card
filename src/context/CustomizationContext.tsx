"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  defaultFontId,
  defaultTextSize,
  type FontId,
  type TextSize,
} from "@/lib/fonts";
import { defaultThemeId, getTheme, type ThemeId } from "@/lib/themes";

type Preferences = {
  themeId: ThemeId;
  fontId: FontId;
  textSize: TextSize;
};

type CustomizationContextValue = Preferences & {
  setThemeId: (id: ThemeId) => void;
  setFontId: (id: FontId) => void;
  setTextSize: (size: TextSize) => void;
};

const CustomizationContext = createContext<CustomizationContextValue | null>(
  null,
);

const STORAGE_KEY = "spa-base-preferences";
const PREFS_EVENT = "spa-base-preferences-change";

const defaultPreferences: Preferences = {
  themeId: defaultThemeId,
  fontId: defaultFontId,
  textSize: defaultTextSize,
};

let cachedRawValue: string | null = null;
let cachedPreferences: Preferences = defaultPreferences;

function readPreferences(): Preferences {
  if (typeof window === "undefined") {
    return defaultPreferences;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (raw === cachedRawValue) {
      return cachedPreferences;
    }

    cachedRawValue = raw;

    if (!raw) {
      cachedPreferences = defaultPreferences;
      return cachedPreferences;
    }

    const stored = JSON.parse(raw) as Partial<Preferences>;
    cachedPreferences = {
      themeId: stored.themeId ?? defaultThemeId,
      fontId: stored.fontId ?? defaultFontId,
      textSize: stored.textSize ?? defaultTextSize,
    };

    return cachedPreferences;
  } catch {
    cachedPreferences = defaultPreferences;
    return cachedPreferences;
  }
}

function writePreferences(preferences: Preferences) {
  cachedPreferences = preferences;
  cachedRawValue = JSON.stringify(preferences);
  window.localStorage.setItem(STORAGE_KEY, cachedRawValue);
  window.dispatchEvent(new Event(PREFS_EVENT));
}

function subscribeToPreferences(onStoreChange: () => void) {
  const handleChange = () => onStoreChange();

  window.addEventListener(PREFS_EVENT, handleChange);
  window.addEventListener("storage", handleChange);

  return () => {
    window.removeEventListener(PREFS_EVENT, handleChange);
    window.removeEventListener("storage", handleChange);
  };
}

function applyDocumentAttributes(preferences: Preferences) {
  const theme = getTheme(preferences.themeId);
  const root = document.documentElement;

  root.dataset.theme = preferences.themeId;
  root.dataset.font = preferences.fontId;
  root.dataset.textSize = preferences.textSize;

  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function CustomizationProvider({ children }: { children: ReactNode }) {
  const preferences = useSyncExternalStore(
    subscribeToPreferences,
    readPreferences,
    () => defaultPreferences,
  );

  useEffect(() => {
    applyDocumentAttributes(preferences);
  }, [preferences]);

  const setThemeId = useCallback(
    (themeId: ThemeId) => {
      writePreferences({ ...readPreferences(), themeId });
    },
    [],
  );

  const setFontId = useCallback((fontId: FontId) => {
    writePreferences({ ...readPreferences(), fontId });
  }, []);

  const setTextSize = useCallback((textSize: TextSize) => {
    writePreferences({ ...readPreferences(), textSize });
  }, []);

  const value = useMemo(
    () => ({
      ...preferences,
      setThemeId,
      setFontId,
      setTextSize,
    }),
    [preferences, setThemeId, setFontId, setTextSize],
  );

  return (
    <CustomizationContext.Provider value={value}>
      {children}
    </CustomizationContext.Provider>
  );
}

export function useCustomization() {
  const context = useContext(CustomizationContext);

  if (!context) {
    throw new Error("useCustomization must be used within CustomizationProvider");
  }

  return context;
}
