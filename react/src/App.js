import "./App.css";
import Homepage from "./homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login_page from "./loginpage";
import Create_Account from "./createAccount";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Homepage />]} />
          <Route path="/loginpage" element={[<Login_page />]} />
          <Route path="/createAccount" element={[<Create_Account />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
