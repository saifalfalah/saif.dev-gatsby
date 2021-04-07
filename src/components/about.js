import React from 'react'
import styled from "@emotion/styled"

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 78vh;
`
const Container = styled.div`
  text-align: center;
`

const PageHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 12px;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`

const About = () => (
  <OuterContainer>
    <Container>
      <PageHeader>About Me</PageHeader>
      <Description>I am a React Developer focusing on making performant, modern web applications with clients in over 7 countries in the world. With over 4 years of experience as a freelance developer, I have had the experience and the privilege of working with companies ranging from as big as Fortune 100 to micro-startups around the world.</Description>
      <Description>I primarily work on the MERN stack: React, Redux, Node, Firebase, Serverless, Express, Cloudflare Workers, Next.js, Vercel, Gatsby, GraphQL, MongoDB.</Description>
      <Description>I love learning and working on Side Projects such as <a href="https://www.tvdl.app" target="_blank" rel="noreferrer">TVDL</a> and I am currently working on <a href="https://github.com/saifalfalah/ssyd-api" target="_blank" rel="noreferrer">SSYD</a> combining Web Assembly and React.</Description>
      <Description>I'm open for challenging projects or paid consulting. To reach out to me, please email me at hey@saif.dev and I'll get back to you within 24 hours.

</Description>
    </Container>
  </OuterContainer>
)

export default About;