import { useState } from 'react';
import './App.css';
import DisplayMeals from './components/display-meals/DisplayMeals';
import Header from './components/header/Header';
import Search from './components/search-bar/Search';

function App() {
  const [search, setSearch] = useState('')
  const searchItem = val => {
    setSearch(val);
  }
  return (
    <div className="App">
      <Header></Header>
      <Search searchItem={searchItem}></Search>
      <DisplayMeals search ={search}></DisplayMeals>
    </div>
  );
}

export default App;
