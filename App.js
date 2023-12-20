
import './App.css'
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Footer from  "./Components/Footer"
import SignUp from "./Components/SignUp";
import PrivateCopmonent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct'; 
import Productlist from './Components/Productlist';
import UpdateProduct from './Components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route element={<PrivateCopmonent/>}>
      <Route path='/'element={<Productlist />}/>
      <Route path='/add'element={<AddProduct/>}/>
      <Route path='/update/:id'element={<UpdateProduct/>}/>
      <Route path='/logout'element={<h1>logout</h1>}/>
      <Route path='/profile'element={<h1>My profile</h1>}/>
      </Route>
      <Route path='/signup'element= {<SignUp/>}/>
      <Route path="/login" element={<Login/>} />
      </Routes>
       </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
