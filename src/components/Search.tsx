import React, { FC, useContext, useState } from 'react'
import { UserContext, UserContextProps } from '../contexts/user'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export const Search: FC = () => {
  const { getUser } = useContext<UserContextProps>(UserContext)
  const [userName, setUserName] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<any>) => {
    setUserName(e.target.value)
  }

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    userName.length > 0 && getUser(userName)
  }

  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control type="name" placeholder="Search for user" onChange={handleChange} />
        </Col>
        <Col>
          <Button variant="primary" type="submit" onClick={handleSubmitClick}>
            Search
        </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}