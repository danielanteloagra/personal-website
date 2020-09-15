import React from "react"
import PersonalDetails from "../sections/PersonalDetails"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import Education from "../sections/Education"

export default function Home() {
  return (
    <>
      <main>
        <PersonalDetails />
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  )
}
