import {
  createContext,
  FC,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";
export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});
export const ThemeContextProvider: FC<PropsWithChildren<{}>> = memo(
  ({ children }) => {
    const [theme, setTheme] = useState<Theme>("dark");
    const toggleTheme = () => {
      setTheme((t) => (t === "dark" ? "light" : "dark"));
    };
    const value = useMemo(
      () => ({
        theme,
        toggleTheme,
      }),
      [theme]
    );
    return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
  }
);

export const useTheme = () => useContext(ThemeContext);
