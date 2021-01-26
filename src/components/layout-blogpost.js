import React from "react"
// import { MDXProvider } from "@mdx-js/react"

import Header from "./header"
import ContainerBlogpost from "./container-blogpost"
import Container from "./container"



export default function Layout ({ children }) {
    return (
        <div>
            <Header />
            {/* <ContainerBlogpost> */}
            <Container>
             {children}
                {/* <MDXProvider
                    components={{
                        // Map HTML element tag to React component
                        h1: props => <h1 {...props} style={{ 
                            fontSize: '64px',
                            fontWeight: 600,
                            letterSpacing: '-.05em',
                            marginBottom: '29px',
                        }}/>,
                        h5: props => <h5 {...props} style={{ 
                            fontSize: '18px',
                            fontWeight: 600,
                            letterSpacing: '-.05em',
                            color: '#088BEE',
                            marginBottom: 0,
                        }}/>,
                        // h3: DesignSystem.H3,
                        // // Or define component inline
                        // p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
                    }}
                    >
                    {children}
                </MDXProvider>     */}
            </Container>
            {/* </ContainerBlogpost> */}
            
        </div>
    )
}