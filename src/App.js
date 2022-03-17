import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styled/Container.styled";
import content from "./Content";
import Card from "./components/Card";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styled/Global";

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
                {/* <Cta /> */}
                <Footer />
            </>
        </ThemeProvider>
    );
}

export default App;
