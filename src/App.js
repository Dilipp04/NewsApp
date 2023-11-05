import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
function App() {

const [progress, setprogress] = useState(100)
const [country, setCountry] = useState('us')
  return (
    <>
      <Router>
        <Navbar setCountry={setCountry} country={country}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setprogress} country={country} key="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={setprogress} country={country} key="business" category={"business"} />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setprogress} country={country} key="entertainment" category={"entertainment"} />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={setprogress} country={country} key="health" category={"health"} />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={setprogress} country={country} key="science" category={"science"} />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={setprogress} country={country} key="sports" category={"sports"} />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setprogress} country={country} key="technology" category={"technology"} />}
          />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
