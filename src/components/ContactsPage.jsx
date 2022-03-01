import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'

const Container = styled.div`
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    background-color: #292d2d;
    box-shadow: 1px 1px 3px 0px rgba(115,105,102,0.75);
`

const ContactsPage = () => {
  return (
      <Container>
        <Contact/>
      </Container>
    
  )
}

export default ContactsPage