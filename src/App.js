import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const apikey = "f23dcae29a964b7ea596639533a5a523"
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <LoadingBar
          color='red'
          progress={progress}
        />

        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="science" pagesize={5} category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pagesize={5} category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pagesize={5} category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pagesize={5} category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pagesize={5} category="science" />} />
          <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={5} category="general" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pagesize={5} category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pagesize={5} category="technology" />} />
        </Routes>
      </BrowserRouter>



    </div>
  )

}

export default App