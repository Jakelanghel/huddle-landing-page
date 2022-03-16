import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import content from "./Content";

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },

    mobile: "768px",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    {content.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </Container>
                <Footer />
            </>
        </ThemeProvider>
    );
}

export default App;
