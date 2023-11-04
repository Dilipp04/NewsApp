import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
function App() {

const [progress, setprogress] = useState(100)
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setprogress} key="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={setprogress} key="business" category={"business"} />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setprogress} key="entertainment" category={"entertainment"} />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={setprogress} key="health" category={"health"} />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={setprogress} key="science" category={"science"} />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={setprogress} key="sports" category={"sports"} />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setprogress} key="technology" category={"technology"} />}
          />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
