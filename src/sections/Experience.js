import React from "react"
import styled from "styled-components"
import Section from "../components/Section"
import HistoricalListItem from "../components/HistoricalListItem"

const MostRecent = styled.div`
  @media print {
    page-break-after: always;
  }
`

const Rest = styled.div`
  padding-top: 30px;
`

export default function Experience() {
  return (
    <Section title="Work Experience" description="Where I've worked">
      <MostRecent>
        <HistoricalListItem
          title="Senior Frontend Engineer"
          location="OakNorth, London"
          dates="September 2019 - Present"
        >
          <p>
            Technical lead, line manager and frontend engineer at this FinTech
            startup. Highlights include:
          </p>
          <ul>
            <li>
              Lead of the case analysis mission:
              <ul>
                <li>
                  solving case data normalisation and visualisation as well as
                  analysis and monitoring workflows with Python and React
                </li>
                <li>
                  coordinate 2-3 cross functional squads of ~6 to meet their
                  quarterly goals
                </li>
                <li>
                  optimise team processes for incremental delivery following
                  lean-agile methodologies, always evolving with the team's
                  feedback
                </li>
              </ul>
            </li>
            <li>
              Manager of managers:
              <ul>
                <li>
                  line manager of ten engineers, two of which are also managers
                </li>
                <li>developed the employee feedback and development process</li>
              </ul>
            </li>
            <li>
              Frontend chapter/guild lead and project manager:
              <ul>
                <li>
                  designed and led the migration to micro-frontends using Lerna
                  and github packages and workflows
                </li>
                <li>
                  designed and led the move to workflow driven e2e testing with
                  visual regression in Cypress with Cucumber
                </li>
                <li>set up a bespoke interview process and exercises</li>
              </ul>
            </li>
          </ul>
        </HistoricalListItem>
        <HistoricalListItem
          title="Senior Software Developer"
          location="NET-A-PORTER, London"
          dates="May 2017 - September 2019"
        >
          <p>
            Technical lead and javascript/node full stack engineer. Highlights
            include:
          </p>

          <ul>
            <li>
              led the development of the greenfield project Porter Digital (team
              of 6 engineers)
            </li>
            <li>
              helped change the ways of working and improve productivity for the
              whole content department (4 teams): move to a monolith lerna repo,
              improved CI and more testing focus
            </li>
            <li>
              ran a cross team steering group to up our coding and testing
              standards and ensure we were all in sync.
            </li>
            <li>ran a code club to help upskill engineers with focus on TDD</li>
          </ul>
        </HistoricalListItem>
      </MostRecent>
      <Rest>
        <HistoricalListItem
          title="Lead Web Developer"
          location="Student.com, London"
          dates="December 2014 - January 2017"
        >
          <p>
            I was the second developer to join this incredibly fast paced
            startup and witnessed it grow from a small room of people to over
            150 employees. I was a key contributor to the stack and evolution of
            the product. As we grew I earnt the role of Lead Developer of the
            web team (up to 13 developers) focused on the student experience.
            Content and mobile first full stack fun, ensuring test driven
            reusable code in both PHP (Symfony2) and Javascript
            (ES6/Redux/React) technologies, as well as accessible HTML, living
            style guides (Sass/Sussy) and performance optimisation.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Software Engineer II"
          location="Indra Software Labs, A Coruña (Spain)"
          dates="June 2011 - October 2014"
        >
          <p>
            Responsible for various stages of the software life cycle of
            corporate desktop application and web portal development. Worked on
            the desktop application for Gas Natural operations management and
            then became a core member of the Vodafone Spain online store
            project, helping to lead the front-end development. Full stack
            development with Java, Spring MVC, Oracle SQL, JSP, HTML, CSS and
            Javascript.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Lead Developer"
          location="Cambur, A Coruña (Spain)"
          dates="July 2010 - November 2011"
        >
          <p>
            Hired as project lead of a newly formed web development company with
            a queue of clientele expecting websites. I was responsible for
            establishing an organised method of work for the team, setting up a
            library of reusable code, and developing an in-house content and
            commerce management system. Full stack LAMP development with PHP,
            MySQL, HTML, CSS and Javascript.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Web Developer"
          location="Wide Area Communications, London"
          dates="February 2008 - February 2010"
        >
          <p>
            Providing content, community and commerce solutions. Hired as part
            of a team designing and developing a one stop generic and secure
            basket/checkout and subscription module, for the existing wide area
            management system, meeting the requirements of several clients
            wanting e-commerce solutions
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Web Developer"
          location="MoneySavingExpert.com, London"
          dates="June 2006 - February 2008"
        >
          <p>
            Part of a four man team responsible for the development, maintenance
            and optimisation of the moneysavingexpert.com website, forums and
            tools, ensuring the best user experience possible for the circa 4.5
            million unique monthly visitors
          </p>
        </HistoricalListItem>
      </Rest>
    </Section>
  )
}
