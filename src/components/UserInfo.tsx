import React, { FC, useContext } from 'react'
import { UserContext, UserContextState } from '../contexts/user'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export const UserInfo: FC = () => {
  const { getState } = useContext(UserContext)
  const userInfo: UserContextState = getState()

  return (
    <>
      {userInfo.login.length ?
        <>
          <Row>
            <Col>
              <Image src={userInfo.avatar_url} rounded fluid thumbnail />
            </Col>
            <Col>
              {userInfo.login}
            </Col>
          </Row>
          <Row>
            <Col>
              {userInfo.bio}
            </Col>
          </Row>
        </>
        : <><h3>None found</h3></>
      }
    </>
  )
}