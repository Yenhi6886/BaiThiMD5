import { useEffect, useState } from "react";
import { getSongs, updateSong } from "../services/api";
import SongTable from "../components/SongTable";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function SongList() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);

  const fetchSongs = async () => {
    const res = await getSongs();
    setSongs(res.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const handlePublic = async (song) => {
    await updateSong(song.id, { ...song, status: "Công khai" });
    fetchSongs();
  };

  return (
    <div className="container mt-4">
      <Header selectedSong={selectedSong} />

      <div className="row mb-3">
        <div className="col-md-8">
          <input
            type="text"
            placeholder="Tìm kiếm tên bài hát..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-4 text-end">
          <Link to="/add">
            <button className="btn btn-success">+ Thêm bài hát</button>
          </Link>
        </div>
      </div>

      <SongTable
        songs={songs.filter((s) => s.title.toLowerCase().includes(search.toLowerCase()))}
        onSelect={setSelectedSong}
        onPublic={handlePublic}
      />
    </div>
  );
}
