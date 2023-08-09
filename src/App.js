import './App.css';
import { MainPage } from './pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
