import { CssBaseline, ThemeProvider } from "@mui/material";
import { render, RenderOptions } from "@testing-library/react";
import { FC, ReactElement } from "react";
import theme from "../../styles/theme";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const AllTheProviders: FC<{ children: ReactElement }> = ({ children }) => {
    /*
      The wrappers that are added here should mimic what is in _app
    */
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
