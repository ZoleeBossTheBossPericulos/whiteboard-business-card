export type FontId = "inter" | "roboto" | "open-sans" | "poppins" | "lato";

export type FontOption = {
  id: FontId;
  name: string;
  variable: string;
};

export const fontOptions: FontOption[] = [
  { id: "inter", name: "Inter", variable: "--font-inter" },
  { id: "roboto", name: "Roboto", variable: "--font-roboto" },
  { id: "open-sans", name: "Open Sans", variable: "--font-open-sans" },
  { id: "poppins", name: "Poppins", variable: "--font-poppins" },
  { id: "lato", name: "Lato", variable: "--font-lato" },
];

export const defaultFontId: FontId = "inter";

export type TextSize = "small" | "medium" | "large";

export const textSizeOptions: { id: TextSize; label: string }[] = [
  { id: "small", label: "S" },
  { id: "medium", label: "M" },
  { id: "large", label: "L" },
];

export const defaultTextSize: TextSize = "medium";

export function getFontFamily(fontId: FontId): string {
  const font = fontOptions.find((option) => option.id === fontId);
  return font ? `var(${font.variable}), system-ui, sans-serif` : "system-ui, sans-serif";
}
