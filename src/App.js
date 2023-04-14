import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Header from './components/Header';
import List from './components/List'
// import data from './data.js';
// import {useState} from 'react';



function App() {
  // const [people, setPeople] = useState(data);

  return (
    <>
      <Header />
      <List />
    </>
  );
}

export default App;
