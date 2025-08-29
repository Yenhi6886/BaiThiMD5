import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongList from "./pages/SongList";
import AddSong from "./pages/AddSong";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/add" element={<AddSong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
