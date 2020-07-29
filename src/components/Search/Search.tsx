import React, { FC, useContext, useState, useEffect } from 'react'
import { UserContext, UserContextProps } from '../../contexts/user'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import loupe from './loupe.svg'

export const Search: FC = () => {
  const { getUserData } = useContext<UserContextProps>(UserContext)
  const [userName, setUserName] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<any>) => {
    setUserName(e.target.value)
  }

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    userName.length > 0 && getUserData(userName)
  }

  useEffect(() => {
    getUserData('grenade')
  }, [])

  return (
    <header>
      <Container>
        <Form>
          <Form.Row>
            <Col xs={8}>
              <img className="loupe" src={loupe} alt="search-loupe" />
              <Form.Control type="name" placeholder="Search for user" onChange={handleChange} />
            </Col>
            <Col xs={4}>
              <Button variant="primary" type="submit" onClick={handleSubmitClick}>
                Search
            </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </header>
  )
}