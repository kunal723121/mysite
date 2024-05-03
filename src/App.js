import Caro from "./CARO/Caro";
import Nav from "./Navbar/Nav"
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import About from "./About/About"; 
import Cal from "./Calorie/Cal";
import Diet from "./Diet/Diet";
import Workout from "./WORKOUT/Workout";
import User from "./Userapi/User";
function App() {
  return <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/Caro" element={<Caro/>} />
      <Route path="/About" element={<About/>}/>
      <Route path="/Cal" element={<Cal/>} />
      <Route path="/Diet" element={<Diet/>}/>
      <Route path="/Workout" element={<Workout/>} />
      <Route path="/User" element={<User/>}/>
    </Routes>
    </BrowserRouter>
    
  </div>
}

export default App;
