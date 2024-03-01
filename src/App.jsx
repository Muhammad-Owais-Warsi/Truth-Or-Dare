import { BrowserRouter, Routes, Route } from "react-router-dom";
import Players from "./components/players.jsx"
import Game from "./components/games.jsx";

function App() {
  

  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Players></Players>}></Route>
          <Route path="/game" element={<Game></Game>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
