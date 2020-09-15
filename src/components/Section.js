import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  background: ${props => (props.grey ? "#f6f6f6" : "#fff")};
  padding: 3rem 1rem;
  @media (min-width: 900px) {
    padding: 4rem;
  }
  @media print {
    background: #fff;
    padding: 1rem 2rem;
  }
`

const Title = styled.h2`
  border: 1px solid #252525;
  margin: 0 auto 1em;
  padding: 0.5em;
  position: relative;
  text-align: center;
  font-size: 1.8rem;

  @media (min-width: 900px) {
    margin: 0 auto 2em;
    max-width: 300px;
  }

  @media print {
    font-size: 1.6rem;
    margin: 0 auto 1em;
    max-width: 230px;
  }
`

const Description = styled.small`
  background: ${props => (props.grey ? "#f6f6f6" : "#fff")};
  font-size: 0.5em;
  left: 0;
  letter-spacing: 1px;
  padding: 0 0.8em;
  position: absolute;
  text-transform: uppercase;
  top: -8px;
  @media print {
    background: #fff;
  }
`

export default function Section({
  children,
  title,
  description,
  grey,
  className,
}) {
  return (
    <Wrapper grey={grey} className={className}>
      <Title>
        {title}
        {description && <Description grey={grey}>{description}</Description>}
      </Title>
      {children}
    </Wrapper>
  )
}
