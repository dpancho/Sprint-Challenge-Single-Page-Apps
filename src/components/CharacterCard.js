import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button"

export default function CharacterCard(props) {
  return (
    <div>
      <Card.Img src={props.image}/>
      <Card.Title>{props.name}</Card.Title>
      <Card.Body>
        <Card.Text>
          <span>Status: {props.status}</span>
          <span>Gender: {props.gender}</span>
          <span>Species: {props.species}</span>
        </Card.Text>
      </Card.Body>
      <button>WHAAAAAT?</button>
    </div>
  )
}

