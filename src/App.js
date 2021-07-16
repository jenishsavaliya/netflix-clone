import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hello react learner!</h1>
      <Row title="NETFLIX_ORIGIANL" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;
