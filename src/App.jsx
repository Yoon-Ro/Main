import Homepage from "./pages/Homepage";
import Newton from "./pages/Newton";
import Me from "./pages/Me";
import Urdesign from "./pages/Urdesign";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer} from "./components/index";
import ScrollToTop from "./components/ScrollToTop";




function App() {


  return (
    <Router>
      <ScrollToTop/>
           <div className=" font-Inter bg-white">
           
       <Routes>
        
       <Route exact path="/" element={<Homepage />} />
       <Route exact path="/newton" element={<Newton />} />
       <Route exact path="/urdesign" element={<Urdesign />} />
       <Route exact path="/me" element={<Me />} />
    
    </Routes>
    {/* <Footer/> */}
    </div>
    </Router>
  )
}

export default App
