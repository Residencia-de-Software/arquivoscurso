import React, { Component } from "react";
import {Form, Col,Row} from "react-bootstrap";

export default class Input extends Component {
  render() {
    return (
      <>
        <Form.Group controlId="nome" as={Row}>
          <Col sm="1">
            <Form.Label>{this.props.titulo}</Form.Label>
          </Col>
          <Col sm="11">
            <Form.Control
              type={this.props.tipo}
              value={this.props.valor}
              placeholder={this.props.titulo}
              onChange={this.props.alterarCampo}
            />
          </Col>
        </Form.Group>
      </>
    );
  }
}
