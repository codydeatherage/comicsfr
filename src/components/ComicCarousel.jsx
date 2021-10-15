import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const ComicCarousel = ({items}) => {

    return (
        <Carousel>
            {items.map((item, index) => {
                return (
                    <Carousel.Item style={{border: '2px solid red', height: '40vh'}}>
                        <img style={{height: '40vh', width: '30vw'}}
                            
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