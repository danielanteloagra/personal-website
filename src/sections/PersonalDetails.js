import React from "react"
import styled from "styled-components"
import Section from "../components/Section"
import HideInPrint from "../components/HideInPrint"

const PersonaDetails = styled(Section)`
  @media print {
    h2 {
      font-size: 0;
      border: none;
      max-width: 400px;
      height: 65px;
      margin-bottom: 0.5rem;

      &::before {
        font-family: Georgia;
        content: "Daniel Antelo";
        color: black;
        font-size: 2.6rem;
        position: absolute;
        left: 25%;
      }

      &::after {
        font-family: Georgia;
        content: "www.danielantelo.com \\A 07368 318 778 ";
        white-space: pre;
        color: black;
        font-size: 1rem;
        position: absolute;
        left: 33%;
        bottom: 0;
      }
    }
  }
`

const Block = styled.div`
  width: 100%;
  display: inline-block;
  padding: 0 15px;
  vertical-align: top;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }
`

const Heading = styled.h3`
  margin: 0;
`

const Profile = styled(Block)`
  @media (min-width: 900px) {
    width: 70%;
  }

  @media print {
    width: 100%;
  }
`

const Details = styled(Block)`
  @media (min-width: 900px) {
    width: 30%;
  }
`

const Detail = styled.div`
  display: inline-block;
  margin: 0;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`

const DL = styled.dl`
  margin: 0;
`;

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
    <PersonaDetails
      title="Personal Details"
      description="Who I am"
      className="personalDetails"
    >
      <Details>
        <HideInPrint>
          <DL>
            <DT>Name:</DT>
            <DD>Daniel Antelo</DD>
            <DT>Nationality:</DT>
            <DD>British / Spanish</DD>
            <DT>DOB:</DT>
            <DD>15/09/1984</DD>
            <DT>Location:</DT>
            <DD>London, UK</DD>
            <DT>Email:</DT>
            <DD>
              <a href="danielantelo@live.com">danielantelo@live.com</a>
            </DD>
          </DL>
        </HideInPrint>
      </Details>
      <Profile>
        <HideInPrint>
          <Heading>Professional Profile</Heading>
        </HideInPrint>
        <p>
          Product and delivery focused, I make it my responsibility to be aware
          of the bigger picture in order to implement balanced and effective
          solutions and deliver outstanding user experiences. With this focus,
          over the past decade, I have impacted a wide range of engineering
          teams in both startup and corporate settings resulting in great
          successes for a variety of projects.
        </p>
        <p>
          Leading teams comes naturally, I enjoy improving team dynamics and
          processes in order to find balance between productivity and quality. I
          have a full understanding of incremental and continuous delivery, know
          the importance of having high code confidence and am a firm believer
          in automated processes. I enjoy working in a challenging and fast
          paced environment where people matter just as much as cutting-edge
          technology.
        </p>
      </Profile>
    </PersonaDetails>
  )
}
