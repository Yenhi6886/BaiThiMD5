import { useState } from "react";

export default function SongTable({ songs, onSelect, onPublic }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedSongToPublic, setSelectedSongToPublic] = useState(null);

  const handleShowModal = (song) => {
    setSelectedSongToPublic(song);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSongToPublic(null);
  };

  const handleConfirmPublic = () => {
    if (selectedSongToPublic) {
      onPublic(selectedSongToPublic);
    }
    handleCloseModal();
  };
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
                      handleShowModal(song);
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

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Xác nhận công khai</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Bạn có chắc chắn muốn công khai bài hát <strong>"{selectedSongToPublic?.title}"</strong> của ca sĩ <strong>{selectedSongToPublic?.singer}</strong> không?</p>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={handleCloseModal}
                >
                  Hủy
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={handleConfirmPublic}
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
