import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/HomeComponent/Homepage';
import PopupComponent from './components/StartupComponent/PopupComponent';

function App() {
  return (
    <div className='container con'>
      <PopupComponent />
      <Homepage />
    </div>
  );
}

export default App;
