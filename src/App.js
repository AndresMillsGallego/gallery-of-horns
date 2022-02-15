import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json'

function App() {
  return (
    <>
    <Header />
    <Main data={data}/>
    <Footer />
    </>
  );
}

export default App;
