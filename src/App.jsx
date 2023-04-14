import Homepage from "./pages/Homepage";
import Newton from "./pages/Newton";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer} from "./components/index";
import ScrollToTop from "./components/ScrollToTop";




function App() {


  return (
    <Router>
      <ScrollToTop/>
           <div className=" font-Inter bg-white">
            <Navbar />
       <Routes>
        
       <Route exact path="/" element={<Homepage />} />
       <Route exact path="/newton" element={<Newton />} />
    
    </Routes>
    <Footer/>
    </div>
    </Router>
  )
}

export default App
