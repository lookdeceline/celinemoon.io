import React from "react"

import Header from "./header"
import Container from "./container"
import Footer from "./footer"



export default function Layout ({ children }) {
    return (
        <div>
            <Header />
            <Container>
                {children}      
            </Container>
            <Footer />
        </div>
    )
}