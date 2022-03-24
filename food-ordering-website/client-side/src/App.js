
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home';
import AllFood from './Components/AllFood/AllFood';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Gallery from './Components/Gallery/Gallery';
import Reservation from './Components/Reservation/Reservation';
import Account from './Components/Account/Account';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Notification from './Components/Notification/Notification';
import Chat from './Components/Chat/Chat';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Shared/Footer/Footer';
import PizzaBuilder from './Components/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allFood" element={<AllFood />} />
          <Route path="/pizzaBuilder" element={<PizzaBuilder />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/register" element={<Register />} />   
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
