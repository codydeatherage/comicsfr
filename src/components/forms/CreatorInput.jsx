import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { X } from 'react-bootstrap-icons'
import './inputs.css'

const CreatorInput = ({ changeCreatorName, index, removeCreator, name, setCreatorName, setCreatorRole }) => {

    return (
        <Row className="g-2">
            <Col md>
                <Form.Group className="mb-3" controlId="creator">
                    <Form.Label style={{ color: 'black', fontSize: '15px' }}>Creator Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => { setCreatorName(e.target.value);}}
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
                    <Form.Label style={{ color: 'black' }}  >Role</Form.Label>
                }

                <Form.Select onChange={(e) => setCreatorRole(e.target.value)} aria-label="Floating label select example">
                    <option>Role</option>
                    <option style={{ border: '2px solid red' }} value="writer">Writer</option>
                    <option style={{ border: '2px solid red', color: 'red' }} value="artist">Artist</option>
                    <option value="letterer">Letterer</option>
                </Form.Select>
            </Col>
        </Row>
    )
}

export default CreatorInput