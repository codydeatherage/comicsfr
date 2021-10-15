import styled from 'styled-components'
import img1 from './assets/sample.jpg'
import img2 from './assets/sample2.jpg'
import img3 from './assets/sample3.jpg'
import ComicCarousel from './components/ComicCarousel'
import './App.css';


const App = () => {
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
        <ComicCarousel items={currentItems}/>
      </Current>
      <Ongoing>

      </Ongoing>

      <Selection>

      </Selection>
    </>
  );
}
/*TODO FOR CAROUSEL CARDS:
  Writer
  Artist
  Series
  Volume/Issue #
  
*/
const Current = styled.div`
  height: 40vh;
  width: 100vw;
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


// const Carousel = styled.div.attrs({
//   className: 'carousel slide',
//   dataRide: 'carousel',
//   id: 'example'
// })`

// height: 30vh;
// width: 25vw;
// background-color: rgb(24,24,24);
// margin: auto;

// `
export default App;
