import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
// import CreateExercises from "./components/create-exercise.component";
import CreateAppdetails from "./components/create-appdetails.component";
import CreateUser from "./components/create-user.component";
import Uploadcomponent from "./components/upload";
import CreateWorkspace from "./components/clear";
import CreateSyftWorkspace from './components/clearSyft';
import CreateMsSbomWorkspace from './components/clearMsSbom';
import UploadMsSbomcomponent from './components/uploadMsSbom';
import UploadSyftcomponent from './components/uploadsyft';
import Uploadexcelcomponent from "./components/uploadexcel";
import CreateSoupWorkspace from './components/clearSoup';
import Internalcomponent from './components/Masterlist';

function App() {
  return (
    // <Router>
    //   <div className="container">
    //   <Navbar />
    //   <br/>
    //   <Routes path="/" exact element={ExercisesList} />
    //   <Routes path="/edit/:id" element={EditExercise} />
    //   <Routes path="/create" element={CreateExercise} />
    //   <Routes path="/user" element={CreateUser} />
    //   </div>
    // </Router>
    <Router>
      <div className="container">
      <Routes>
        <Route index element={< Navbar/>} />
        <Route path="/" element={<ExercisesList />} />
        <Route path="/createapp" element={<CreateAppdetails />} />
        <Route path="/create" element={<CreateWorkspace />} />
        <Route path="/user" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/upload" element={<Uploadcomponent />} />
        <Route path="/uploadexcel" element={<Uploadexcelcomponent />} />
        <Route path="/createSoup" element={<CreateSoupWorkspace />} />
        <Route path="/uploadMsSbom" element={<UploadMsSbomcomponent />} />
        <Route path="/uploadSyft" element={<UploadSyftcomponent />} />
        <Route path="/createSyft" element={<CreateSyftWorkspace />} />
        <Route path="/createMsSbom" element={<CreateMsSbomWorkspace />} />
        <Route path="/Internal" element={<Internalcomponent />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;