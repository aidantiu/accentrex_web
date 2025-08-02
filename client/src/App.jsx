// Import React and necessary hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages 
import Homepage from './pages/homepage.jsx'
import Health from './pages/health.jsx';
import AboutUs from './pages/aboutuspage.jsx';
import AccountPage from "./pages/accountpage";
import Services from './pages/servicespages.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/health" element={<Health />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
