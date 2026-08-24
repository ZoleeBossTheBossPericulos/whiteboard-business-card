"use client";

import { useState } from "react";

import { useCustomization } from "@/context/CustomizationContext";
import { fontOptions, textSizeOptions } from "@/lib/fonts";
import { themes } from "@/lib/themes";

export function CustomizationPanel() {
  const { themeId, fontId, textSize, setThemeId, setFontId, setTextSize } =
    useCustomization();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      aria-label="Appearance settings"
      className="fixed bottom-4 right-4 z-50 w-[min(100vw-2rem,22rem)]"
    >
      <div className="overflow-hidden rounded-2xl border border-theme shadow-2xl backdrop-blur-md bg-theme-surface/95">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-theme-bg/80"
          aria-expanded={isOpen}
        >
          <span className="text-sm font-semibold text-theme">Customize</span>
          <span className="text-xs text-theme-muted" aria-hidden="true">
            {isOpen ? "Hide" : "Show"}
          </span>
        </button>

        {isOpen && (
          <div className="space-y-5 border-t border-theme px-4 py-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-theme-muted">
                Color theme
              </p>
              <div className="grid grid-cols-6 gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    type="button"
                    title={theme.name}
                    aria-label={`${theme.name} theme`}
                    aria-pressed={themeId === theme.id}
                    onClick={() => setThemeId(theme.id)}
                    className={`h-8 w-full rounded-lg border-2 transition-transform hover:scale-105 ${
                      themeId === theme.id
                        ? "border-theme scale-105 ring-2 ring-theme-primary/40"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: theme.swatch }}
                  />
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="font-select"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-theme-muted"
              >
                Font family
              </label>
              <select
                id="font-select"
                value={fontId}
                onChange={(event) =>
                  setFontId(event.target.value as typeof fontId)
                }
                className="w-full rounded-xl border border-theme bg-theme-bg px-3 py-2 text-sm text-theme outline-none transition focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20"
              >
                {fontOptions.map((font) => (
                  <option key={font.id} value={font.id}>
                    {font.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-theme-muted">
                Text size
              </p>
              <div className="grid grid-cols-3 gap-2">
                {textSizeOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={textSize === option.id}
                    onClick={() => setTextSize(option.id)}
                    className={`rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                      textSize === option.id
                        ? "border-theme-primary bg-theme-primary text-white"
                        : "border-theme bg-theme-bg text-theme hover:border-theme-primary/40"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
