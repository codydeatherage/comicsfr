import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CreatorInput = ({ changeName, changeRole, index }) => {
    return (
        <Row className="g-2">
            <Col md>
                <Form.Group className="mb-3" controlId="creator">
                    <Form.Label style={{color: 'black'}}>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={(e)=>{ changeName(e.target.value, index)}}
                    />
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Label style={{color: 'black'}} >Role</Form.Label>
                <Form.Select aria-label="Floating label select example">
                    <option>Role</option>
                    <option value="1">Writer</option>
                    <option value="2">Artist</option>
                    <option value="3">Letterer</option>
                </Form.Select>
            </Col>
        </Row>
    )
}

export default CreatorInput