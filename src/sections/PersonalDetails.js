import React from "react"
import styled from "styled-components"
import Section from "../components/Section"

const Block = styled.div`
  display: inline-block;
  vertical-align: top;

  @media (min-width: 900px) {
    padding: 0 20px;
  }

  @media print {
    padding: 0;
  }
`

const Heading = styled.h3`
  margin: 0;

  @media print {
    display: none;
  }
`

const Image = styled(Block)`
  display: none;

  @media (min-width: 900px) {
    display: inline-block;
    width: 20%;
  }

  @media print {
    display: none;
  }

  img {
    max-width: 200px;
  }
`

const Profile = styled(Block)`
  @media (min-width: 900px) {
    width: 50%;
  }

  @media print {
    width: 100%;
  }
`

const Details = styled(Block)`
  @media (min-width: 900px) {
    width: 30%;
  }

  @media print {
    display: none;
  }
`

const Detail = styled.div`
  display: inline-block;
  margin: 0;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
`

const DT = styled(Detail).attrs({
  as: "dt",
})`
  width: 30%;
`

const DD = styled(Detail).attrs({
  as: "dd",
})`
  width: 70%;
`

export default function PersonalDetails() {
  return (
    <Section
      title="Personal Details"
      description="Who I am"
      className="personalDetails"
    >
      <Image>
        <img src="pic.png" />
      </Image>
      <Details>
        <dl>
          <DT>Name:</DT>
          <DD>Daniel Antelo</DD>
          <DT>Nationality:</DT>
          <DD>British-Spanish</DD>
          <DT>DOB:</DT>
          <DD>15/09/1984</DD>
          <DT>Email:</DT>
          <DD>
            <a href="danielantelo@live.com">danielantelo@live.com</a>
          </DD>
        </dl>
      </Details>
      <Profile>
        <Heading>Professional Profile</Heading>
        <p>
          I'm an experienced and professional Web Developer with over 10 years
          experience. Over this time I've built a career with a proven track
          record in both startup and corporate settings working on a wide range
          of frontend and backend projects. Motivated and hard working, I use my
          own initiative, making it my aim to implement effective solutions,
          produce quality work and meet deadlines.
        </p>
        <p>
          I am very product and delivery focused, and make it my responsibility
          to be aware of the bigger picture. Leading teams comes naturally, and
          I enjoy working as a collective to deliver the best possible user
          experience. I have a full understanding of continuous integration and
          the importance of having high code confidence. I like to automate as
          much as possible and I'm always looking for ways to improve processes.
        </p>
      </Profile>
    </Section>
  )
}
