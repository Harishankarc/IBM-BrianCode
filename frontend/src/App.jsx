import HomePage from "./components/Homepage"
import Timetable from "./components/timetable";
import Csa from "./components/classes/Csa";
import Csb from "./components/classes/Csb";
import Ece from "./components/classes/Ece";
import Eee from "./components/classes/Eee";
import It from "./components/classes/It";
import Ce from "./components/classes/Ce";
import De from "./components/subjects/De";
import Oops from "./components/subjects/Oops";
import Latt from "./components/subjects/Latt";
import Els from "./components/subjects/Els";
import Che from "./components/subjects/Che";
import Icps from "./components/subjects/Icps";
import Lab from "./components/subjects/BeDelab";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  )
}

function Main(){
  return(
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/csa" element={<Csa />} />
        <Route path="/csb" element={<Csb />} />
        <Route path="/it" element={<It />} />
        <Route path="/ece" element={<Ece />} />
        <Route path="/eee" element={<Eee />} />
        <Route path="/ce" element={<Ce />} />
        <Route path="/de" element={<De />} />
        <Route path="/oops" element={<Oops />} />
        <Route path="/latt" element={<Latt />} />
        <Route path="/els" element={<Els />} />
        <Route path="/che" element={<Che />} />
        <Route path="/icps" element={<Icps />} />
        <Route path="/lab" element={<Lab />} />
      </Routes>
    </>
  );
}


export default App
