import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/login/LoginPage';
import AccountPage from './pages/account/AccountPage';
import MainPage from './pages/main/mainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
