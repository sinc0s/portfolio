import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import UXDesign from './pages/UXDesignPage';
import Error from './pages/ErrorPage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/uxdesign" element={<UXDesign />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}