import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FileDrop } from 'react-file-drop'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import firebase from '../firebase-config'
import 'firebase/compat/storage'
import './filedrop.css'

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

    const allCreators = [];
    for (let i = 0; i < creators.length; i++) {
        /* pass index as a prop so that we can tell
           which instance of CreatorInput belongs to which index */
        allCreators.push(<CreatorInput style={{ color: 'black' }} index={i} changeName={changeName} changeRole={changeRole} />);
    }
    return (
        <div style={{ backgroundColor: '#4d91ff', position: 'absolute', height: '100%', width: '100%', /* padding: 'auto auto' */ }}>
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

                    {/*Year Input*/}
                    <Row>
                        <Form.Group className="mb-3" controlId='year'>
                            <Form.Floating>
                                <Form.Control id='year' min='1940' max='2022' type='number' placeholder='Year' style={{ width: '100%', height: '20px' }} />
                                <label style={{ color: 'black', lineHeight: '0' }} htmlFor='year'>Year</label>
                            </Form.Floating>
                        </Form.Group>

                        {/*Issue Number Input*/}
                        <Form.Group className="mb-3" controlId='issue' style={{ display: 'flex' }}>
                            <label style={{ color: 'black', marginLeft: '10%', marginTop: '5px' }} htmlFor='issue'>Issue #</label>
                            <Form.Control id='issue' type='number' style={{ width: `30%`, height: '35px', marginLeft: '5%' }} />
                        </Form.Group>
                    </Row>

                    {allCreators.map((c, index) => c)}
                    <Button className="mb-3" variant="primary" type="button" onClick={addCreator} style={{ width: '100%' }}>+ Add Creator</Button>



                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label style={{ color: 'black' }}>Upload cover image</Form.Label>
                        <Form.Control type="file" onChange={(e) => setUpload(e.target.files[0])} />
                    </Form.Group>

                    {downloadURL ? <img src={downloadURL} alt=""></img> : null}

                    <Button variant="primary" type="button" onClick={uploadImage}>
                        Submit
                    </Button>
                </Form>
                <ImgPreview>
                    <div style={{ height: '80%', width: '80%' }}>
                        <FileDrop
                            onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
                            onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
                            onFrameDrop={(event) => console.log('onFrameDrop', event)}
                            onDragOver={(event) => console.log('onDragOver', event)}
                            onDragLeave={(event) => console.log('onDragLeave', event)}
                            onDrop={(files, event) => console.log('dropped', files, event)}

                        >Drop Files Here</FileDrop>

                    </div>
                </ImgPreview>
            </Container >
        </div>
    )
}

export default ComicsInput

const ImgPreview = styled.div`
    width: 50%;
    height: auto;
    background-color: #d2e2fc;
    border: 2px solid red;
    border-radius: 0 10% 10% 0;
`
const Row = styled.div`
    display: flex;
    gap: 5px;
    align-content: flex-end;
    margin-right: 10%;
`
const Container = styled.div`
    display: flex;
    width: 50vw;
    min-width: 665px;
    height: max-content;
    margin: 5% auto 0 auto;
    color: white;
    background-color: #f2fcfb;
    border-radius: 10%;
`