export default function Header({ selectedSong }) {
  return (
    <div className="alert alert-success mb-4" role="alert">
      {selectedSong ? (
        <h4 className="alert-heading">
          🎵 Đang chọn: <strong>{selectedSong.title}</strong> - {selectedSong.singer}
        </h4>
      ) : (
        <h4 className="alert-heading">🎶 Chọn một bài hát để hiển thị</h4>
      )}
    </div>
  );
}
