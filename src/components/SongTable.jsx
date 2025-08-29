export default function SongTable({ songs, onSelect, onPublic }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên bài hát</th>
            <th scope="col">Ca sĩ</th>
            <th scope="col">Thời gian</th>
            <th scope="col">Lượt thích</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr 
              key={song.id} 
              style={{ cursor: 'pointer' }}
              onClick={() => onSelect(song)}
            >
              <td>{index + 1}</td>
              <td>{song.title}</td>
              <td>{song.singer}</td>
              <td>{song.duration}</td>
              <td>{song.likes}</td>
              <td>
                <span className={`badge ${song.status === 'Công khai' ? 'bg-success' : 'bg-secondary'}`}>
                  {song.status}
                </span>
              </td>
              <td>
                {song.status === "Lưu trữ" && (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPublic(song);
                    }}
                  >
                    Công khai
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
