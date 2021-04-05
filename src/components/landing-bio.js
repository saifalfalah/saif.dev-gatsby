import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const FollowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const FollowItem = styled.a`
text-decoration: none;
position: relative;
color: #737373;

::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #737373;
  transform-origin: bottom right;
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const ProjectDeclaration = styled.p`
  font-size: .8rem;
  margin-bottom: 0;
`

// const ProjectLink = styled.a`

// `


const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>Saif Al Falah</NameHeader>
          <Description>react developer</Description>
          <FollowContainer>
            <FollowItem href="mailto:hey@saif.dev" target="_blank">
              Email
            </FollowItem>
            <FollowItem href="https://github.com/saifalfalah" target="_blank">
              Github
            </FollowItem>
            <FollowItem href="https://twitter.com/saifalfalah" target="_blank">
              Twitter
            </FollowItem>
            <FollowItem href="https://instagram.com/saif.dev" target="_blank">
              Instagram
            </FollowItem>
            <FollowItem href="https://linkedin.com/in/saifalfalah" target="_blank">
              LinkedIn
            </FollowItem>
          </FollowContainer>
          <ProjectContainer>
            <ProjectDeclaration>Pssst... Check out my latest project:</ProjectDeclaration>
            <FollowItem href="https://www.tvdl.app/?ref=saifdev" target="_blank">
              Twitter Video Downloader for Siri Shortcuts
          </FollowItem>
          </ProjectContainer>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
