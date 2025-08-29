Chức năng từng file:
🗄️ db.json (Database giả)
Chức năng: Lưu trữ dữ liệu bài hát dưới dạng JSON
Cấu trúc: Mảng songs chứa 20 bài hát
Thông tin mỗi bài hát:
id: Định danh duy nhất
title: Tên bài hát
singer: Ca sĩ thể hiện
composer: Nhạc sĩ sáng tác
duration: Thời lượng (format: mm:ss)
likes: Số lượt yêu thích
status: Trạng thái ("Công khai" hoặc "Lưu trữ")
📄 api.js
// Chức năng: Xử lý các API calls

- getSongs() // Lấy danh sách bài hát từ db.json
- addSong() // Thêm bài hát mới vào db.json
- updateSong() // Cập nhật thông tin bài hát (như status)
  🎵 SongList.jsx
  // Chức năng: Trang chính hiển thị danh sách bài hát
- Hiển thị bảng danh sách bài hát
- Tìm kiếm bài hát theo tên
- Chọn bài hát để hiển thị lên header
- Quản lý state selectedSong
- Render SongTable và Header components
  ➕ AddSong.jsx
  // Chức năng: Trang thêm bài hát mới
- Render component SongForm
- Điều hướng đến form đăng ký bài hát
  📝 SongForm.jsx
  // Chức năng: Form đăng ký bài hát mới
- Form input: title, singer, composer, duration
- Validation: required fields, maxLength, pattern
- Check trùng lặp bài hát
- Submit thêm bài hát mới với status "Lưu trữ"
- Error handling và navigation
  📊 SongTable.jsx
  // Chức năng: Bảng hiển thị danh sách bài hát
- Render table với columns: STT, Tên, Ca sĩ, Thời gian, Likes, Status, Action
- Nút "Công khai" cho bài hát có status "Lưu trữ"
- Xử lý click chọn bài hát
- Cập nhật status từ "Lưu trữ" → "Công khai"
- Modal xác nhận công khai
  🎧 Header.jsx
  // Chức năng: Header hiển thị bài hát đang được chọn
- Hiển thị tên bài hát và ca sĩ đang được chọn
- Giao diện như trình phát nhạc
- Nhận props selectedSong từ parent component
  🛣️ App.jsx
  // Chức năng: Component gốc và routing
- Setup React Router với các routes:
  - "/" → SongList (trang chính)
  - "/add" → AddSong (trang thêm bài hát)
- Layout chính của ứng dụng
  🚀 main.jsx
  // Chức năng: Entry point của ứng dụng
- Render App component vào DOM
- Setup React StrictMode
- Import CSS Bootstrap

🔄 Luồng hoạt động:
Hiển thị: main.jsx → App.jsx → SongList.jsx → SongTable.jsx + Header.jsx
Thêm bài hát: AddSong.jsx → SongForm.jsx → api.js → db.json
Công khai bài hát: SongTable.jsx → api.js → db.json → reload data
Tìm kiếm: SongList.jsx filter songs array
Chọn bài hát: SongTable.jsx → SongList.jsx → Header.jsx
