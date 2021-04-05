import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} description="Saif Al Falah is a Freelance React Developer working on React, Redux, Node, Serverless and PWAs. Hire Him!" />
    <LandingBio />
  </Layout>
)

export default IndexPage
