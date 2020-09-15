import React from "react"
import styled from "styled-components"
import Section from "../components/Section"

const Highlight = styled.div`
  @media (min-width: 900px) {
    display: inline-block;
    margin-right: 10px;
    width: calc(33.33% - 10px);
  }

  @media print {
    display: inline-block;
    margin-right: 10px;
    width: calc(33.33% - 10px);
  }
`

const Tech = styled.div`
  padding: 10px 0;
`

const SkillList = styled.ul`
  list-style: none;
  padding: 10px 0 0;
  @media (min-width: 900px) {
    display: inline-block;
    width: 25%;
  }
  @media print {
    display: inline-block;
    width: 25%;
  }
`

const Skill = styled.li`
  margin: 0;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`

export default function Skills() {
  return (
    <Section grey title="Skills & Knowledge" description="What I'm best at">
      <Highlight>
        <h3>Project Direction</h3>
        <p>
          Proven ability to lead and manage development teams using agile
          methodologies and continuous integration principles.
        </p>
      </Highlight>
      <Highlight>
        <h3>Software Delivery</h3>
        <p>
          Highly focused on continuous delivery via the right tooling, with a
          soft spot for automated testing and the testing pyramid.
        </p>
      </Highlight>
      <Highlight>
        <h3>Software Development</h3>
        <p>
          Experience in requirements capture and software design. Passion for
          maintainable, extensible, reusable and readable code.
        </p>
      </Highlight>
      <Tech>
        <h3>Technical Knowledge</h3>
        <SkillList>
          <Skill>Typescript</Skill>
          <Skill>Javascript</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
        </SkillList>
        <SkillList>
          <Skill>React</Skill>
          <Skill>NextJS</Skill>
          <Skill>Styled Components</Skill>
          <Skill>SCSS</Skill>
        </SkillList>
        <SkillList>
          <Skill>Micro Frontends</Skill>
          <Skill>Lerna &amp; Yarn</Skill>
          <Skill>Jest</Skill>
          <Skill>Cypress</Skill>
        </SkillList>
        <SkillList>
          <Skill>Node</Skill>
          <Skill>Apollo GraphQL</Skill>
          <Skill>RESTful Apis</Skill>
          <Skill>SQL / Mongo</Skill>
        </SkillList>
      </Tech>
    </Section>
  )
}
