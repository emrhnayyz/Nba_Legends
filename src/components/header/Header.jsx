import React from 'react'
import { Container } from 'react-bootstrap'
import nbaLogo from "../../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>
      <img src={nbaLogo} alt='' width="200px" />
      <h1 className='my-2 font-monoscape display-4 fw-bold'>NBA Legends</h1>


    </Container>
  )
}

export default Header;