import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route index element={Dashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
