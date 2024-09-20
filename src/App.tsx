import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./layouts/navbar"
import Footer from "./layouts/footer"
import Home from "./pages/home"
import { useState } from "react"

function App() {
  const [homeLoadingComplete, setHomeLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setHomeLoadingComplete(true);
  }
  return (
    <BrowserRouter>
      {homeLoadingComplete && <Navbar />}
      <Routes>
        <Route path="/" element={<Home onLoadingComplete={handleLoadingComplete}/>} />
      </Routes>
      {homeLoadingComplete && <Footer />}
    </BrowserRouter>
  )
}

export default App
