import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <body>
        <br/><br/><br/><br/><br/><br/>
        <Body/>
      </body>
      <footer>
         <Footer/>
      </footer>
    </div>
  );
}
export default App; 