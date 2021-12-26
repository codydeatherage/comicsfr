import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ComicsInput = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" placeholder="Title"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="publisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" placeholder="Publisher" style={{ width: '60%' }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="publishYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Year" style={{ width: '30%' }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="issueNumber">
                    <Form.Label>Issue #</Form.Label>
                    <Form.Control type="number" placeholder="#" style={{ width: '20%' }} />
                </Form.Group>
                <h1>Creators</h1>
                <Row className="g-2">
                    <Col md>
                        <Form.Group className="mb-3" controlId="creator">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                    </Col>
                    <Col sm>
                        <Form.Label>Role</Form.Label>
                        <Form.Select aria-label="Floating label select example">
                            <option>Role</option>
                            <option value="1">Writer</option>
                            <option value="2">Artist</option>
                            <option value="3">Letterer</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/*             <Row>
                <Label for="title" >Title</Label>
                <Input id="title" />
            </Row>

            <Row>
                <Label style={{fontSize: '15px'}} for="issues"> # Of Issues</Label>
                <Input type="number" id="issues" />
            </Row>

            <Row>
                <Label for="writer">Writer</Label>
                <Input id="writer" />
            </Row>
            <Row>
                <Label for="artist">Artist</Label>
                <Input id="artist" />
            </Row>
            <Row>
                <Label for="cover_artist">Cover Artist</Label>
                <Input id="cover_artist" />
            </Row>

            <Row>
                <Label for="publisher">Publisher</Label>
                <Input id="publisher" />
            </Row>

            <Row>
                <Label for="year">Year</Label>
                <Input id="year" />
            </Row>

            <Row>
                <button type="submit">Submit</button>
            </Row>
            <Row>
                <input
                    type="file"
                    accept="image/*"
                    id="button-file"
                ></input>
            </Row> */}


        </Container>
    )
}

export default ComicsInput

const Container = styled.div`
    padding: 5%;
    width: 50vw;
    height: auto;
    min-height: 60vh;
    margin-left: 25vw;
    margin-top: 10vh;
    color: white;
    background-color: #112b5c;
    border-radius: 10%;
`
/* const Row = styled.div`
    display: block;
    width: 100%;
    height: 5%;
    padding-left: 15%;
    border: 1px solid black;
    margin-top: 2%;
` */
const Input = styled.input`
    width: 60%;
    margin-left: 20%;
    height: 100%;
`

const Label = styled.label`
    color: black;
    width: 25px;
    font-size: 36px;
    line-height: 25px;
`