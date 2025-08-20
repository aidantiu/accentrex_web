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
import PointSystem from './pages/pointsystempage.jsx';
import PointSystemPart2 from './pages/pointsystempage2.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/health" element={<Health />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/enroll" element={<PointSystem />} />
        <Route path="/enroll/part2" element={<PointSystemPart2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
