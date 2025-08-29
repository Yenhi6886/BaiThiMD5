import { useState, useEffect } from "react";
import { addSong, getSongs } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function SongForm() {
  const [form, setForm] = useState({
    title: "",
    singer: "",
    composer: "",
    duration: "",
    likes: 0,
    status: "Lưu trữ",
  });
  const [existingSongs, setExistingSongs] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      const res = await getSongs();
      setExistingSongs(res.data);
    };
    fetchSongs();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check for duplicates
    const isDuplicate = existingSongs.some(song => 
      song.title.toLowerCase() === form.title.toLowerCase() && 
      song.singer.toLowerCase() === form.singer.toLowerCase()
    );
    
    if (isDuplicate) {
      setError("Bài hát này đã tồn tại trong hệ thống!");
      return;
    }
    
    await addSong(form);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Đăng ký bài hát mới</h2>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="title"
                    placeholder="Tên bài hát"
                    value={form.title}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="singer"
                    placeholder="Ca sĩ"
                    value={form.singer}
                    onChange={handleChange}
                    maxLength={30}
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="composer"
                    placeholder="Nhạc sĩ"
                    value={form.composer}
                    onChange={handleChange}
                    maxLength={30}
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="duration"
                    placeholder="Thời gian (hh:mm)"
                    pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
                    value={form.duration}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Lưu bài hát
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
