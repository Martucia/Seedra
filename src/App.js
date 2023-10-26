import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;




