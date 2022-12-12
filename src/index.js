import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";

const container = document.getElementById('root');
const root = createRoot(container);

const getDesignTokens = () => ({
    
    // Default Palette
    palette: {
        primary: { main: "#26305F", inverted: "#fff" },
        secondary: { main: "#862633" },
        error: { main: "#d32f2f" },
        warning: { main: "#C40233" },
        info: { main: "#C8D3E6" },
        success: { main: "#648FCC" },
        background: { main: "#f0f9ff"},
        authenticated: {main: "rgb(46, 125, 50)"}
    }
});

const authTheme = createTheme(getDesignTokens());

root.render(
    <ThemeProvider theme={authTheme}>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ThemeProvider>
);
