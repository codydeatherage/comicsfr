import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { X } from 'react-bootstrap-icons'
import './inputs.css'

const CreatorInput = ({ changeCreatorName, index, removeCreator, name, role }) => {

    return (
        <Row className="g-2">
            <Col md>
                <Form.Group className="mb-3" controlId="creator">
                    <Form.Label style={{ color: 'black', fontSize: '15px' }}>Creator Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => { changeCreatorName(e.target.value, index) }}
                    />
                </Form.Group>
            </Col>
            <Col sm>
                {index > 0
                    ?
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Form.Label style={{ color: 'black' }} >Role</Form.Label>
                        <X style={{ color: 'red', fontSize: '30px', }}
                            onClick={() => removeCreator(index)}
                        />
                    </div>
                    :
                    <Form.Label style={{ color: 'black' }} >Role</Form.Label>
                }

                <Form.Select aria-label="Floating label select example">
                    <option>Role</option>
                    <option style={{ border: '2px solid red' }} value="1">Writer</option>
                    <option style={{ border: '2px solid red', color: 'red' }} value="2">Artist</option>
                    <option value="3">Letterer</option>
                </Form.Select>
            </Col>
        </Row>
    )
}

export default CreatorInput