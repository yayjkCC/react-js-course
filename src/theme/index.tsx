import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactFCProps } from "../sharedTypes";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FF3B3F"
        },
        secondary: {
            main: "#A239CA"
        },
        background: {
            default: "#EFEFEF",
            paper: "#CAEBF2"
        },
        text: {
            primary: "#000000",
            secondary: "#a9a9a9"
        }
    }
})

export default function RCThemeProvider({children}: ReactFCProps) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}