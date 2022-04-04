import "./App.css";
import { DataProvider } from "./Components/context/Data";
import List from "./Components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./Components/AddData";
import './Components/Style.css'
import Search from "./Components/Search";



function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<AddData />} />
            <Route path="/search" element={<Search />} />

          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
