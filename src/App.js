import "./App.css"
import SearchFriend from '././pages/SearchFriend/SearchFriend'
import { Routes,Route } from "react-router-dom";
import ViewProfile from "./pages/ViewProfile/ViewProfile"
import Login from "./pages/Login/Login"
// import MyProfile from "./pages/MyProfile/MyProfile"

import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
    

      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/search" element={<SearchFriend/>}/>
        <Route path="/viewprofile" element={<ViewProfile/>}/>
       
            


       

      </Routes>
      
       
       
    </div>
  );
}

export default App;
