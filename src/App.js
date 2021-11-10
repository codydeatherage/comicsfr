import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ComicsInput from './components/ComicsInput'
import './App.css';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home/>}
          
        />
        <Route
          exact
          path="/comics"
          element={<ComicsInput/>}
        />
      </Routes>
    </Router>
  );
}
/*TODO FOR CAROUSEL CARDS:
  Writer
  Artist
  Series
  Volume/Issue #
  
*/



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
