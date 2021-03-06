import React from 'react'
import { Row, Col, Card, CardImg, CardTitle, Progress } from 'reactstrap'

import './CardPokedex.css'

const CardPokedex = ({ card, action, textAction }) => {
  return (
    <Card body className="card-my-pokedex">
      <Row>
        <Col sm="4">
          <CardImg top src={card.imageUrl} />
        </Col>
        <Col sm="6">
          <CardTitle>{card.name}</CardTitle>
          <Row>
            <Col sm="4">HP</Col>
            <Col sm="8">
              <Progress value={card.hp} />
            </Col>
          </Row>
          <Row>
            <Col sm="4">STR</Col>
            <Col sm="8">
              <Progress value={card.atk} />
            </Col>
          </Row>
          <Row>
            <Col sm="4">WEAK</Col>
            <Col sm="8">
              <Progress value={card.weak} />
            </Col>
          </Row>
          <Row>
            <Col sm="4">HAPPY</Col>
            <Col sm="8">{card.level}</Col>
          </Row>
        </Col>
        <Col sm="2">
          <h2 onClick={action(card)} className="action">
            {textAction}
          </h2>
        </Col>
      </Row>
    </Card>
  )
}

export default CardPokedex
