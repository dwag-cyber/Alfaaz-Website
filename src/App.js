import './App.css';
import Video from './containers/video';
import Navbar from './containers/navbar';
import About from './containers/About';
import Footer from './containers/Footer';
import Timeline from './containers/timeline';
import Event from './containers/event';
import Gallery from './containers/Gallery';
import Team from './containers/team';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Video/>
      <About/>
      <Event/>
      <Gallery/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;