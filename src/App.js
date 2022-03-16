import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styled/Container.styled";
import Header from "./components/Header";
import "./App.css";
import GlobalStyles from "./components/styled/Global";

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    <p>Clean React App</p>
                </Container>
            </>
        </ThemeProvider>
    );
}

export default App;
