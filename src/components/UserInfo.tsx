import React, { FC, useContext } from 'react'
import { UserContext } from '../contexts/user'
import { UserContextState } from '../contexts/user.type'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/esm/Container'

export const UserInfo: FC = () => {
  const { getState } = useContext(UserContext)
  const { details }: UserContextState = getState()

  return (
    <section className="user">
      <Container>
        {details?.login?.length ?
          <>
            <Row>
              <Col>
                <Image src={details.avatar_url} fluid />
                <span className="name">{details.name || details.login}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="bio">{details.bio}</span>
              </Col>
            </Row>
          </>
          : <><h3>None found</h3></>
        }
      </Container>
    </section>
  )
}