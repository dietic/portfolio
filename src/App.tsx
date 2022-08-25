import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeComponent } from "./components/Home/HomeComponent";
import { Navbar } from "./elements/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
