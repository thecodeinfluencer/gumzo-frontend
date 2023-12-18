import {
  Container,
  createTheme,
  ThemeProvider as MUIThemeProvider,
  Paper,
} from "@mui/material";

export default function ThemeProvider({ children }) {
  const appTheme = createTheme({
    palette: {
      primary: { main: "#008b8b" },
      mode: "dark",
    },
    shape: { borderRadius: 10 },
    typography: { fontFamily: "Nunito" },
    components: {
      MuiButton: {
        styleOverrides: { root: { textTransform: "none", borderRadius: 70 } },
      },
    },
  });

  return (
    <MUIThemeProvider theme={appTheme}>
      <Paper square elevation={0}>
        <Container maxWidth="sm">{children}</Container>
      </Paper>
    </MUIThemeProvider>
  );
}
