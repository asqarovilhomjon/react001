import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Categories from './components/categories/categories';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Main/>
    </div>
  );
}

export default App;
