import './App.scss';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
