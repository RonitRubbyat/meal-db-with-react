import './App.css';
import DisplayMeals from './components/display-meals/DisplayMeals';
import Header from './components/header/Header';
import Search from './components/search-bar/Search';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <DisplayMeals></DisplayMeals>
    </div>
  );
}

export default App;
