import './App.css';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
function App() {
  return (
    <BrowserRouter>
    {/* header eller navbar  */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<LoginForm />} />
      </Routes>
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;

// Arbeta även med usenavigate när du vill redirecta till en annan sida via kod