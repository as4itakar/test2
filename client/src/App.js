import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/Home.js";
import Profile from "./components/Profile";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
