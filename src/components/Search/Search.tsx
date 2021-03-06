import React, { FC, useContext, useState } from 'react'
import { UserContext, UserContextProps } from '../../contexts/user'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import loupe from './loupe.svg'
import Row from 'react-bootstrap/Row'

export const Search: FC = () => {
  const { getUserData } = useContext<UserContextProps>(UserContext)
  const [userName, setUserName] = useState<string>('')
  const btnDisabled: boolean = !userName.length

  const handleChange = (e: React.ChangeEvent<any>) => {
    setUserName(e.target.value.replace(/ /g, ''))
  }

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    userName.length > 0 && getUserData(userName)
  }

  return (
    <header>
      <Container>
        <Row>
          <Col>
            <Form>
              <img className="loupe" src={loupe} alt="search-loupe" />
              <Form.Control type="name" placeholder="Search for user" onChange={handleChange} />
              <Button variant="primary" type="submit" onClick={handleSubmitClick} disabled={btnDisabled} >
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </header>
  )
}