import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styled/Container.styled";
import content from "./Content";
import Card from "./components/Card";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styled/Global";

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
        darkCyan: "hsl(192, 100%, 9%)",
        paleCyan: "hsl(193, 100%, 96%)",
        grayishBlue: "hsl(208, 11%, 55%)",
        pink: "hsl(322, 100%, 66%) ",
    },

    desktop: "700px",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container mg='10rem'>
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
