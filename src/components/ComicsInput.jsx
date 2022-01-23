import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import firebase from '../firebase-config'
import 'firebase/compat/storage'

import CreatorInput from './forms/CreatorInput'
const ComicsInput = () => {
    //information about comic creators
    const [creators, changeCreators] = useState([{ name: "", role: "" }])
    const [upload, setUpload] = useState();
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState();

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

    const uploadImage = () => {
        const file = upload;
        console.log(file);
        const storage = firebase.storage();
        storage.ref(`/images/${file.name}`).put(file);
    }

    const fields = [
        { id: "title", label: "Title", placeholder: "Title", width: "100%", type: "text" },
        { id: "publisher", label: "Publisher", placeholder: "Publisher", width: "100%", type: "text" },
        { id: "publishYear", label: "Year", placeholder: "Year", width: "30%", type: "text" },
        { id: "issueNumber", label: "Issue #", placeholder: "#", width: "20%", type: "number" },
    ]

    const allCreators = [];
    for (let i = 0; i < creators.length; i++) {
        /* pass index as a prop so that we can tell
           which instance of CreatorInput belongs to which index */

        allCreators.push(<CreatorInput index={i} changeName={changeName} changeRole={changeRole} />);
    }
    return (
        <Container>
            <Form style={{ width: '50%', padding: '5%' }}>

                {/*Title Input*/}
                <Form.Group className='mb-3' controlId='title'>
                    <Form.Floating>
                        <Form.Control id='title' type='text' placeholder='Title' style={{ width: '100%', height: '20px' }} />
                        <label style={{ color: 'black', lineHeight: '0' }} htmlFor='title'>Title</label>
                    </Form.Floating>
                </Form.Group>

                {/*Publisher Input*/}
                <Form.Group className="mb-3" controlId='publisher'>
                    <Form.Floating>
                        <Form.Control id='publisher' type='text' placeholder='Placeholder' style={{ width: '100%', height: '20px' }} />
                        <label style={{ color: 'black', lineHeight: '0' }} htmlFor='publisher'>Publisher</label>
                    </Form.Floating>
                </Form.Group>

                <h1>Creators</h1>
                {allCreators.map((c, index) => c)}
                <Button className="mb-3" variant="primary" type="button" onClick={addCreator} style={{ width: '100%' }}>+ Add Creator</Button>

                {/*Year Input*/}
                <Row>
                    <Form.Group className="mb-3" controlId='year'>
                        <Form.Floating>
                            <Form.Control id='year' min='1940' max='2022' type='number' placeholder='Year' style={{ width: '100%', height: '20px' }} />
                            <label style={{ color: 'black', lineHeight: '0' }} htmlFor='year'>Year</label>
                        </Form.Floating>
                    </Form.Group>

                    {/*Issue Number Input*/}
                    <Form.Group className="mb-3" controlId='issue'>
                        <Form.Floating>
                            <Form.Control id='issue' type='number' placeholder='Issue #' style={{ width: `60%`, height: '20px' }} />
                            <label style={{ color: 'black', lineHeight: '0' }} htmlFor='issue'>Issue #</label>
                        </Form.Floating>
                    </Form.Group>
                </Row>




                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" onChange={(e) => setUpload(e.target.files[0])} />
                </Form.Group>

                {downloadURL ? <img src={downloadURL} alt=""></img> : null}

                <Button variant="primary" type="button" onClick={uploadImage}>
                    Submit
                </Button>
                {progress}
            </Form>
            <ImgPreview></ImgPreview>
        </Container>
    )
}

export default ComicsInput

const ImgPreview = styled.div`
    width: 50%;
    height: auto;
    background-color: black;
    border: 2px solid red;
    border-radius: 0 10% 10% 0;
`
const Row = styled.div`
    display: flex;
    gap: 5px;
    align-content: flex-end;
    margin-right: 30%;
`
const Container = styled.div`
    display: flex;
    width: 50vw;
    height: auto;
    min-height: 60vh;
    margin-left: 25vw;
    margin-top: 10vh;
    color: white;
    background-color: #112b5c;
    border-radius: 10%;
`