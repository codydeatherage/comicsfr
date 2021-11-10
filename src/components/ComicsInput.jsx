import React from 'react'
import styled from 'styled-components'

const ComicsInput = () => {
    return (
        <Container>

            <Row>
                <Label for="title" >Title</Label>
                <Input id="title" />
            </Row>

            <Row>
                <Label for="issue">Issue</Label>
                <Input id="issue" />
            </Row>

            <Row>
                <Label for="writer">Writer</Label>
                <Input id="writer" />
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


        </Container>
    )
}

export default ComicsInput

const Container = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 50vw;
    height: 80vh;
    margin-left: 25vw;
    background-color: beige;
`
const Row = styled.div`
    display: block;
    width: 100%;
    height: 5%;
    padding-left: 15%;
    border: 1px solid black;
    margin-top: 2%;
`
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