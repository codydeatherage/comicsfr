import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ComicCarousel from '../components/ComicCarousel'
import img1 from '../assets/sample.jpg'
import img2 from '../assets/sample2.jpg'
import img3 from '../assets/sample3.jpg'
const Home = () => {
    const currentItems = [
        {
            title: 'Shang Chi',
            img: img1
        },
        {
            title: 'Moon Knight',
            img: img2
        },
        {
            title: 'Superman and the Authority',
            img: img3
        }
    ]
    return (
        <>
            <Current>
                <ComicCarousel items={currentItems} />
            </Current>
            <Ongoing>
                <Link to="/comics">Input Data</Link>
            </Ongoing>

            <Selection>

            </Selection>
        </>
    )
}

export default Home

const Current = styled.div`
  height: 50vh;
  width: 60vw;
  background-color: rgb(24,24,24);
  margin-bottom: 25px;
`

const Ongoing = styled.div`
  height: 40vh;
  width: 100vw;
  background-color: rgb(124,124,124);
`

const Selection = styled.div`
  height: 40vh;
  width: 100vw;
  background-color: rgb(224,224,224);
`
