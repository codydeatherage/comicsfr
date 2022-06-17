import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import api from '../api'
import firebase from '../firebase-config'
import 'firebase/compat/storage'
import './filedrop.css'

import CreatorInput from './forms/CreatorInput'
const ComicsInput = () => {
    //information about comic creators
    const [creators, changeCreators] = useState([{ name: "", role: "" }]);
    const [creatorName, setCreatorName] = useState('');
    const [creatorRole, setCreatorRole] = useState('')
    const [creatorsToDisplay, setCreatorsToDisplay] = useState();
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState();
    const [imageLoading, setImageLoading] = useState(false);

    const addCreator = () => {
        console.log(`creator: ${creatorName}  ${creatorRole}`)
        creatorName && creatorRole && changeCreators(prev => [...prev, { name: creatorName, role: creatorRole }])
    }

    const removeCreator = (index) => {
        changeCreators(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    }

    const changeCreatorName = (name, index) => {
        changeCreators(prev =>
            prev.map((creator, creatorIndex) => {
                if (creatorIndex === index) {
                    const creatorCopy = { ...creator };
                    creatorCopy.name = name;
                    return creatorCopy;
                } else {
                    return creator;
                }
            }
            )
        )
    }

    const changeRole = () => {
        console.log('role changed');
    }

    const uploadImage = (file) => {
        setImageLoading(true);
        firebase.storage().ref(`/images/${file.name}`).put(file)
            .then((snapshot) => {
                snapshot.ref.getDownloadURL()
                    .then((url) => {
                        setImageLoading(false);
                        setDownloadURL(url);
                    })
            }
            );
        //from https://stackoverflow.com/questions/71697954/firebase-storage-ref-getdownloadurl-wont-run
    }

    const submit = async (event) => {
        event.preventDefault();
        const payload = {
            title: event.target.title.value,
            publisher: event.target.publisher.value,
            year: event.target.year.value,
            creators: creators.slice(1),
            coverImageURL: downloadURL
        }
        console.log('uploading payload...');
        await api.uploadIssue(payload);
        console.log('done');

    }
    /*     useEffect(() => {
            setCreatorsToDisplay(creators);
        }, [creators]) */

    return (
        <div style={{ backgroundColor: '#4d91ff', position: 'absolute', height: '100%', width: '100%', /* padding: 'auto auto' */ }}>
            <Container>
                <Form style={{ width: '50%', padding: '5%' }} onSubmit={submit}>

                    {/*Title Input*/}
                    <Form.Group className='mb-3' >
                        <Form.Floating>
                            <Form.Control id='title' type='text' placeholder='Title' style={{ width: '100%', height: '20px' }} />
                            <label style={{ color: 'black', lineHeight: '0' }} htmlFor='title'>Title</label>
                        </Form.Floating>
                    </Form.Group>

                    {/*Publisher Input*/}
                    <Form.Group className="mb-3" >
                        <Form.Floating>
                            <Form.Control id='publisher' type='text' placeholder='Placeholder' style={{ width: '100%', height: '20px' }} />
                            <label style={{ color: 'black', lineHeight: '0' }} htmlFor='publisher'>Publisher</label>
                        </Form.Floating>
                    </Form.Group>

                    {/*Year Input*/}
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Floating>
                                <Form.Control id='year' min='1940' max='2022' type='number' placeholder='Year' style={{ width: '100%', height: '20px' }} />
                                <label style={{ color: 'black', lineHeight: '0' }} htmlFor='year'>Year</label>
                            </Form.Floating>
                        </Form.Group>

                        {/*Issue Number Input*/}
                        <Form.Group className="mb-3" style={{ display: 'flex' }}>
                            <label style={{ color: 'black', marginLeft: '10%', marginTop: '5px' }} htmlFor='issue'>Issue #</label>
                            <Form.Control id='issue' type='number' style={{ width: `30%`, height: '35px', marginLeft: '5%' }} />
                        </Form.Group>
                    </Row>

                    <Row style={{ width: '100%' }}>
                        <CreatorInput setCreatorName={setCreatorName} setCreatorRole={setCreatorRole} />
                        <Button className="mb-3" variant="primary" type="button" onClick={() => addCreator()} style={{ height: '20%', alignSelf: 'end', marginLeft: '15px' }}>Add</Button>

                    </Row>
                    <div style={{ overflow: 'scroll', overflowX: 'hidden', maxHeight: '200px' }}>
                        {creators.length > 1 ?
                            creators.map(
                                (c, index) => {
                                    console.log(c);
                                    return (
                                        <div style={{ color: 'black' }} key={c.role + c.name}>
                                            {c.role && c.name &&
                                                <>
                                                    <div>

                                                    </div>
                                                    <p>{`${c.role}: ${c.name}`}</p>
                                                </>

                                            }
                                        </div>
                                    )
                                }

                            )
                            :
                            <div style={{ color: 'black' }}>
                                No contributors have been added yet
                            </div>
                        }
                    </div>
                    {/*        <Button className="mb-3" variant="primary" type="button" onClick={addCreator} style={{ width: '100%' }}>+ Add Creator</Button> */}
                    <Form.Group className="mb-3">
                        <Form.Label style={{ color: 'black' }}>Upload cover image</Form.Label>
                        <Form.Control type="file" onChange={(e) => uploadImage(e.target.files[0])} />
                    </Form.Group>

                    <Button variant="primary" disabled={imageLoading ? true: false} type="submit" >
                        Submit
                    </Button>
                </Form>
                <ImgPreview>
                    {
                        downloadURL ?
                            <img style={{ height: 'auto', width: '100%', position: 'relative' }} src={downloadURL} alt=""></img>
                            :
                            <div>
                                {imageLoading ? <Spinner animation="border" role="status" /> : <h1>Upload Cover Image</h1>}
                            </div>
                    }
                </ImgPreview>
            </Container >
        </div>
    )
}

export default ComicsInput

const ImgPreview = styled.div`
    width: 50%;
    height: auto;
    margin: 'auto';
    align-item:'center';
    text-align:'center';
    background-color: #d2e2fc;
    border: 2px solid red;
`
const Row = styled.div`
    display: flex;
    gap: 5px;
    align-content: flex-end;
    margin-right: 10%;
`
const Container = styled.div`
    display: flex;
  /*   width: 50vw; */
    min-width: 665px;
    max-width: 1000px;
    height: max-content;
    margin: 5% auto 0 auto;
    color: white;
    background-color: #f2fcfb;
`