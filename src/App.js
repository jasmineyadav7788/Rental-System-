import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Products from './components/Products/Products';
import Error from './components/Error';
import ProfilePage from './components/ProfilePage/ProfilePage';
import AddItem from './components/AddItem/AddItem';
import EditProfile from './components/EditProfile/EditProfile';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/signin' element={<SignIn/>}></Route>
      
      <Route exact path='/' element={<><NavBar/><Products/></>}></Route>
      <Route exact path='/profile' element={<><NavBar/><ProfilePage/></>}></Route>
      <Route exact path='/add-item' element={<AddItem/>}></Route>
      <Route exact path='/edit-profile' element={<EditProfile/>}></Route>
      <Route exact path='*' element={<Error/>}></Route>

    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;