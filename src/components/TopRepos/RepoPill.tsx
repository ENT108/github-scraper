import React, { FC } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

type RepoPillProps = {
  name: string
  url: string
}

export const RepoPill: FC<RepoPillProps> = ({ name, url }) => {

  return (
    <Row>
      <Col>
        <a className="repoPill" href={url}>
          {name}
        </a>
      </Col>
    </Row>
  )
}