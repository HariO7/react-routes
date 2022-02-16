import React, { useState } from "react";
import About from "./Components/About";
import Profile from "./Components/Profile";
import { BrowserRouter, Route, Routes, Link,useNavigate} from "react-router-dom";
import {AppContext} from './AppContext'

function App() {
  const [state, setState] = useState(700);
  const navigate = useNavigate()
  return (
    <div className="App">
      <button onClick={()=> navigate('/about')}>about</button>
      <button onClick={()=> navigate('/profile')}>profile</button>
          <AppContext.Provider value={{data:state}}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile data={state} />}></Route>
          </Routes>
          </AppContext.Provider>
    </div>
  );
}

export default App;
