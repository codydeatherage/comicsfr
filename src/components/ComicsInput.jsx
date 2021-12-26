import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import CreatorInput from './forms/CreatorInput'
const ComicsInput = () => {
    //information about comic creators
    const [creators, changeCreators] = useState([{ name: "", role: "" }])

    const addCreator = () => {
        changeCreators(arr => [...arr, { name: "", role: "" }])
    }

    const changeName = (name, index) => {
        let newArr = [...creators];//copy creators info to newArr
        newArr[index].name = name;//modify the chosen index
        changeCreators(newArr);//set state = modified newArr
    }

    const changeRole = () => {
        console.log('role changed');
    }

    const fields = [
        { id: "title", label: "Title", placeholder: "Title", width: "100%", type: "text" },
        { id: "publisher", label: "Publisher", placeholder: "Publisher", width: "60%", type: "text" },
        { id: "publishYear", label: "Year", placeholder: "Year", width: "30%", type: "text" },
        { id: "issueNumber", label: "Issue #", placeholder: "#", width: "20%", type: "number" },
    ]

    const allCreators = [];
    for (let i = 0; i < creators.length; i++) {
        /* pass index as a prop so that we can tell
           which instance of CreatorInput belongs to which index */
        
        allCreators.push(<CreatorInput index={i}  changeName={changeName} changeRole={changeRole} />);
    }
    return (
        <Container>
            <Form>
                {fields.map((field, index) => {
                    return (
                        <Form.Group key={index} className="mb-3" controlId={field.id}>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control type={field.type} placeholder={field.placeholder} style={{ width: `${field.width}` }} />
                        </Form.Group>
                    )
                })}
                <h1>Creators</h1>
                {allCreators.map((c, index) => c)}
                <Button variant="primary" type="button" onClick={addCreator}>+ Add Creator</Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/*
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