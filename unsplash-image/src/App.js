import logo from './logo.svg';
import './App.css';
import UnsplashImage from './conponents/Unsplash';

function App() {
  return (
    <div className="App">
      <UnsplashImage filter='audi' size={{w:1500,h:600}}>
      <h11>Audi celebrating </h11>
      </UnsplashImage>
      
    </div>
  );
}

export default App;
