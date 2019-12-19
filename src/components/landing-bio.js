import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import './global.css'

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  // height: 78vh;
  height: 50vh;
`

const Description = styled.p`
  font-family: 'DM Sans', sans-serif;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-align: center;
`

const NameHeader = styled.h1`
  // font-size: 3.5rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 4.3rem;
  margin-bottom: 10px;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          {/*<NameHeader>{data.site.siteMetadata.title}</NameHeader>*/}
          <NameHeader>Jeongwon Moon</NameHeader>
          <Description>lookdeceline</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

export default LandingBio
