import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

const ComicCarousel = ({items}) => {

    return (
        <Carousel>
            {items.map((item, index) => {
                return (
                    <Carousel.Item style={{height: '50vh'}}>
                         <InfoPanel/>
                        <img style={{height: '48vh', width: '20vw', minWidth: '300px' , zIndex: '5', position: 'relative', marginLeft: '2%', marginTop: '1vh'}}
                            
                            src={item.img}
                            alt={`Slide ${index}`}
                        />
                        
                        <Carousel.Caption>
                            <h5>{item.title}</h5>
                        </Carousel.Caption>
                      
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ComicCarousel;

const InfoPanel = styled.div`
    position: absolute; 
    top: 7.5vh;
    width: 100%;
    height: 35vh;
    margin: auto auto;
    background-color: orange;
    border: 2px solid green;
    z-index: 1;
 
`