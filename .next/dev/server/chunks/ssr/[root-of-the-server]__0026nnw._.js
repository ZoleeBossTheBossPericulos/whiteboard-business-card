module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/context/CustomizationContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomizationProvider",
    ()=>CustomizationProvider,
    "useCustomization",
    ()=>useCustomization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fonts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/themes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CustomizationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const STORAGE_KEY = "spa-base-preferences";
const PREFS_EVENT = "spa-base-preferences-change";
const defaultPreferences = {
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultThemeId"],
    fontId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultFontId"],
    textSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTextSize"]
};
let cachedRawValue = null;
let cachedPreferences = defaultPreferences;
function readPreferences() {
    if ("TURBOPACK compile-time truthy", 1) {
        return defaultPreferences;
    }
    //TURBOPACK unreachable
    ;
}
function writePreferences(preferences) {
    cachedPreferences = preferences;
    cachedRawValue = JSON.stringify(preferences);
    window.localStorage.setItem(STORAGE_KEY, cachedRawValue);
    window.dispatchEvent(new Event(PREFS_EVENT));
}
function subscribeToPreferences(onStoreChange) {
    const handleChange = ()=>onStoreChange();
    window.addEventListener(PREFS_EVENT, handleChange);
    window.addEventListener("storage", handleChange);
    return ()=>{
        window.removeEventListener(PREFS_EVENT, handleChange);
        window.removeEventListener("storage", handleChange);
    };
}
function applyDocumentAttributes(preferences) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTheme"])(preferences.themeId);
    const root = document.documentElement;
    root.dataset.theme = preferences.themeId;
    root.dataset.font = preferences.fontId;
    root.dataset.textSize = preferences.textSize;
    Object.entries(theme.vars).forEach(([key, value])=>{
        root.style.setProperty(key, value);
    });
}
function CustomizationProvider({ children }) {
    const preferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToPreferences, readPreferences, ()=>defaultPreferences);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        applyDocumentAttributes(preferences);
    }, [
        preferences
    ]);
    const setThemeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((themeId)=>{
        writePreferences({
            ...readPreferences(),
            themeId
        });
    }, []);
    const setFontId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fontId)=>{
        writePreferences({
            ...readPreferences(),
            fontId
        });
    }, []);
    const setTextSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((textSize)=>{
        writePreferences({
            ...readPreferences(),
            textSize
        });
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...preferences,
            setThemeId,
            setFontId,
            setTextSize
        }), [
        preferences,
        setThemeId,
        setFontId,
        setTextSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomizationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CustomizationContext.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
function useCustomization() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CustomizationContext);
    if (!context) {
        throw new Error("useCustomization must be used within CustomizationProvider");
    }
    return context;
}
}),
"[project]/src/lib/fonts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultFontId",
    ()=>defaultFontId,
    "defaultTextSize",
    ()=>defaultTextSize,
    "fontOptions",
    ()=>fontOptions,
    "getFontFamily",
    ()=>getFontFamily,
    "textSizeOptions",
    ()=>textSizeOptions
]);
const fontOptions = [
    {
        id: "inter",
        name: "Inter",
        variable: "--font-inter"
    },
    {
        id: "roboto",
        name: "Roboto",
        variable: "--font-roboto"
    },
    {
        id: "open-sans",
        name: "Open Sans",
        variable: "--font-open-sans"
    },
    {
        id: "poppins",
        name: "Poppins",
        variable: "--font-poppins"
    },
    {
        id: "lato",
        name: "Lato",
        variable: "--font-lato"
    }
];
const defaultFontId = "inter";
const textSizeOptions = [
    {
        id: "small",
        label: "S"
    },
    {
        id: "medium",
        label: "M"
    },
    {
        id: "large",
        label: "L"
    }
];
const defaultTextSize = "medium";
function getFontFamily(fontId) {
    const font = fontOptions.find((option)=>option.id === fontId);
    return font ? `var(${font.variable}), system-ui, sans-serif` : "system-ui, sans-serif";
}
}),
"[project]/src/lib/themes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultThemeId",
    ()=>defaultThemeId,
    "getTheme",
    ()=>getTheme,
    "themes",
    ()=>themes
]);
const themes = [
    {
        id: "ocean",
        name: "Ocean Blue",
        swatch: "#2563eb",
        vars: {
            "--theme-primary": "#2563eb",
            "--theme-primary-hover": "#1d4ed8",
            "--theme-secondary": "#0ea5e9",
            "--theme-accent": "#38bdf8",
            "--theme-bg": "#f8fafc",
            "--theme-surface": "#ffffff",
            "--theme-text": "#0f172a",
            "--theme-text-muted": "#64748b",
            "--theme-border": "#e2e8f0",
            "--theme-hero-overlay": "rgba(15, 23, 42, 0.55)"
        }
    },
    {
        id: "emerald",
        name: "Emerald Forest",
        swatch: "#059669",
        vars: {
            "--theme-primary": "#059669",
            "--theme-primary-hover": "#047857",
            "--theme-secondary": "#14b8a6",
            "--theme-accent": "#34d399",
            "--theme-bg": "#f0fdf4",
            "--theme-surface": "#ffffff",
            "--theme-text": "#14532d",
            "--theme-text-muted": "#4b7c5f",
            "--theme-border": "#bbf7d0",
            "--theme-hero-overlay": "rgba(20, 83, 45, 0.55)"
        }
    },
    {
        id: "sunset",
        name: "Sunset Coral",
        swatch: "#ea580c",
        vars: {
            "--theme-primary": "#ea580c",
            "--theme-primary-hover": "#c2410c",
            "--theme-secondary": "#f97316",
            "--theme-accent": "#fb923c",
            "--theme-bg": "#fff7ed",
            "--theme-surface": "#ffffff",
            "--theme-text": "#431407",
            "--theme-text-muted": "#9a3412",
            "--theme-border": "#fed7aa",
            "--theme-hero-overlay": "rgba(67, 20, 7, 0.55)"
        }
    },
    {
        id: "royal",
        name: "Royal Purple",
        swatch: "#7c3aed",
        vars: {
            "--theme-primary": "#7c3aed",
            "--theme-primary-hover": "#6d28d9",
            "--theme-secondary": "#a855f7",
            "--theme-accent": "#c084fc",
            "--theme-bg": "#faf5ff",
            "--theme-surface": "#ffffff",
            "--theme-text": "#3b0764",
            "--theme-text-muted": "#7e22ce",
            "--theme-border": "#e9d5ff",
            "--theme-hero-overlay": "rgba(59, 7, 100, 0.55)"
        }
    },
    {
        id: "midnight",
        name: "Midnight",
        swatch: "#6366f1",
        vars: {
            "--theme-primary": "#818cf8",
            "--theme-primary-hover": "#6366f1",
            "--theme-secondary": "#a5b4fc",
            "--theme-accent": "#c7d2fe",
            "--theme-bg": "#0f172a",
            "--theme-surface": "#1e293b",
            "--theme-text": "#f1f5f9",
            "--theme-text-muted": "#94a3b8",
            "--theme-border": "#334155",
            "--theme-hero-overlay": "rgba(15, 23, 42, 0.65)"
        }
    },
    {
        id: "rose",
        name: "Rose Blush",
        swatch: "#e11d48",
        vars: {
            "--theme-primary": "#e11d48",
            "--theme-primary-hover": "#be123c",
            "--theme-secondary": "#f43f5e",
            "--theme-accent": "#fb7185",
            "--theme-bg": "#fff1f2",
            "--theme-surface": "#ffffff",
            "--theme-text": "#4c0519",
            "--theme-text-muted": "#9f1239",
            "--theme-border": "#fecdd3",
            "--theme-hero-overlay": "rgba(76, 5, 25, 0.55)"
        }
    },
    {
        id: "slate",
        name: "Slate Minimal",
        swatch: "#475569",
        vars: {
            "--theme-primary": "#475569",
            "--theme-primary-hover": "#334155",
            "--theme-secondary": "#64748b",
            "--theme-accent": "#94a3b8",
            "--theme-bg": "#f8fafc",
            "--theme-surface": "#ffffff",
            "--theme-text": "#0f172a",
            "--theme-text-muted": "#64748b",
            "--theme-border": "#e2e8f0",
            "--theme-hero-overlay": "rgba(15, 23, 42, 0.5)"
        }
    },
    {
        id: "amber",
        name: "Amber Gold",
        swatch: "#d97706",
        vars: {
            "--theme-primary": "#d97706",
            "--theme-primary-hover": "#b45309",
            "--theme-secondary": "#f59e0b",
            "--theme-accent": "#fbbf24",
            "--theme-bg": "#fffbeb",
            "--theme-surface": "#ffffff",
            "--theme-text": "#451a03",
            "--theme-text-muted": "#92400e",
            "--theme-border": "#fde68a",
            "--theme-hero-overlay": "rgba(69, 26, 3, 0.55)"
        }
    },
    {
        id: "cyan",
        name: "Cyber Cyan",
        swatch: "#0891b2",
        vars: {
            "--theme-primary": "#0891b2",
            "--theme-primary-hover": "#0e7490",
            "--theme-secondary": "#06b6d4",
            "--theme-accent": "#22d3ee",
            "--theme-bg": "#ecfeff",
            "--theme-surface": "#ffffff",
            "--theme-text": "#164e63",
            "--theme-text-muted": "#0e7490",
            "--theme-border": "#a5f3fc",
            "--theme-hero-overlay": "rgba(22, 78, 99, 0.55)"
        }
    },
    {
        id: "lavender",
        name: "Lavender Dream",
        swatch: "#8b5cf6",
        vars: {
            "--theme-primary": "#8b5cf6",
            "--theme-primary-hover": "#7c3aed",
            "--theme-secondary": "#a78bfa",
            "--theme-accent": "#c4b5fd",
            "--theme-bg": "#f5f3ff",
            "--theme-surface": "#ffffff",
            "--theme-text": "#2e1065",
            "--theme-text-muted": "#6d28d9",
            "--theme-border": "#ddd6fe",
            "--theme-hero-overlay": "rgba(46, 16, 101, 0.55)"
        }
    },
    {
        id: "cherry",
        name: "Cherry Bold",
        swatch: "#dc2626",
        vars: {
            "--theme-primary": "#dc2626",
            "--theme-primary-hover": "#b91c1c",
            "--theme-secondary": "#ef4444",
            "--theme-accent": "#f87171",
            "--theme-bg": "#fef2f2",
            "--theme-surface": "#ffffff",
            "--theme-text": "#450a0a",
            "--theme-text-muted": "#991b1b",
            "--theme-border": "#fecaca",
            "--theme-hero-overlay": "rgba(69, 10, 10, 0.55)"
        }
    },
    {
        id: "nordic",
        name: "Nordic",
        swatch: "#0284c7",
        vars: {
            "--theme-primary": "#0284c7",
            "--theme-primary-hover": "#0369a1",
            "--theme-secondary": "#64748b",
            "--theme-accent": "#38bdf8",
            "--theme-bg": "#f1f5f9",
            "--theme-surface": "#ffffff",
            "--theme-text": "#1e293b",
            "--theme-text-muted": "#64748b",
            "--theme-border": "#cbd5e1",
            "--theme-hero-overlay": "rgba(30, 41, 59, 0.5)"
        }
    }
];
const defaultThemeId = "ocean";
function getTheme(id) {
    return themes.find((theme)=>theme.id === id) ?? themes[0];
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0026nnw._.js.map