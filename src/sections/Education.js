import React from "react"
import Section from "../components/Section"
import HistoricalListItem from "../components/HistoricalListItem"

export default function Education() {
  return (
    <Section grey title="Education" description="What I've studied">
      <HistoricalListItem
        title="Design Patterns & Architect Enterprise Applications With JEE"
        location="Oracle University Certification"
        dates="2012"
      />
      <HistoricalListItem
        title="MSc Advanced Methods of Computer Science"
        location="Queen Mary University of London"
        dates="2005-2007"
      />
      <HistoricalListItem
        title="BSc Computing"
        location="Queen Mary University of London"
        dates="2002-2005"
      />
      <HistoricalListItem
        title="A-Level in Maths, Computer Science, Physics & Spanish"
        location="St Charles Catholic Sixth Form College"
        dates="2000-2002"
      />
    </Section>
  )
}
