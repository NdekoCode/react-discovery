import {
  createContext,
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { TThemeContext } from "@/lib/types/generics/theme";

export const ThemeContext = createContext<TThemeContext>({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeContextProvider: FC<PropsWithChildren<{}>> = memo(
  ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = useCallback(() => {
      setTheme((t) => (t === "light" ? "dark" : "light"));
    }, [theme]);
    const value = useMemo(() => {
      return {
        theme,
        toggleTheme,
      };
    }, [theme]);
    return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
  }
);
export const ThemeContextConsumer = () => useContext(ThemeContext);
