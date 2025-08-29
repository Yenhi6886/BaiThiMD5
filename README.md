# 🎵 Spotify Music Management System

Ứng dụng quản lý bài hát được xây dựng bằng React + Vite với đầy đủ chức năng CRUD và giao diện Bootstrap.

## 🚀 Tính năng chính

- ✅ Hiển thị danh sách bài hát với bảng Bootstrap responsive
- ✅ Tìm kiếm bài hát theo tên (real-time search)
- ✅ Thêm bài hát mới với validation đầy đủ
- ✅ Công khai bài hát từ trạng thái "Lưu trữ"
- ✅ Chọn bài hát hiển thị trên header
- ✅ Kiểm tra trùng lặp bài hát

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 19, React Router DOM
- **Styling**: Bootstrap 5
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Database**: JSON Server (db.json)

## 📁 Cấu trúc dự án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Header.jsx      # Hiển thị bài hát đang được chọn
│   ├── SongForm.jsx    # Form thêm bài hát mới
│   └── SongTable.jsx   # Bảng hiển thị danh sách bài hát
├── pages/              # Các trang chính
│   ├── SongList.jsx    # Trang danh sách bài hát
│   └── AddSong.jsx     # Trang thêm bài hát
├── services/           # API services
│   └── api.js          # Các hàm gọi API
├── App.jsx             # Component gốc và routing
└── main.jsx            # Entry point
```

## 📊 Chức năng từng file:

### 🗄️ **db.json** (Database giả)

- **Chức năng**: Lưu trữ dữ liệu bài hát dưới dạng JSON
- **Cấu trúc**: Mảng `songs` chứa các bài hát
- **Thông tin mỗi bài hát**:
  - `id`: Định danh duy nhất
  - `title`: Tên bài hát
  - `singer`: Ca sĩ thể hiện (không giới hạn ký tự)
  - `composer`: Nhạc sĩ sáng tác (không giới hạn ký tự)
  - `duration`: Thời lượng (format: hh:mm)
  - `likes`: Số lượt yêu thích (mặc định: 0)
  - `status`: Trạng thái ("Công khai" hoặc "Lưu trữ")

### 📄 **src/services/api.js**

```javascript
// Chức năng: Xử lý các API calls
-getSongs() - // Lấy danh sách bài hát từ db.json
  addSong() - // Thêm bài hát mới vào db.json
  updateSong(); // Cập nhật thông tin bài hát (như status)
```

### 🎵 **src/pages/SongList.jsx**

```javascript
// Chức năng: Trang chính hiển thị danh sách bài hát
- Hiển thị bảng danh sách bài hát
- Tìm kiếm bài hát theo tên (real-time)
- Chọn bài hát để hiển thị lên header
- Quản lý state selectedSong
- Render SongTable và Header components
```

### ➕ **src/pages/AddSong.jsx**

```javascript
// Chức năng: Trang thêm bài hát mới
- Render component SongForm
- Điều hướng đến form đăng ký bài hát
```

### 📝 **src/components/SongForm.jsx**

```javascript
// Chức năng: Form đăng ký bài hát mới
- Form input: title, singer, composer, duration
- Validation: required fields, pattern cho duration (hh:mm)
- Check trùng lặp bài hát (title + singer)
- Submit thêm bài hát mới với status "Lưu trữ"
- Error handling và navigation
- Nút "Kho nhạc" để quay về trang chính
```

### 📊 **src/components/SongTable.jsx**

```javascript
// Chức năng: Bảng hiển thị danh sách bài hát
- Render table với columns: STT, Tên, Ca sĩ, Thời gian, Likes, Status, Action
- Nút "Công khai" cho bài hát có status "Lưu trữ"
- Xử lý click chọn bài hát
- Cập nhật status từ "Lưu trữ" → "Công khai" (không có modal xác nhận)
- Bootstrap responsive table
```

### 🎧 **src/components/Header.jsx**

```javascript
// Chức năng: Header hiển thị bài hát đang được chọn
- Hiển thị tên bài hát và ca sĩ đang được chọn
- Giao diện như trình phát nhạc
- Nhận props selectedSong từ parent component
```

### 🛣️ **src/App.jsx**

```javascript
// Chức năng: Component gốc và routing
- Setup React Router với các routes:
  - "/" → SongList (trang chính)
  - "/add" → AddSong (trang thêm bài hát)
- Layout chính của ứng dụng
```

### 🚀 **src/main.jsx**

```javascript
// Chức năng: Entry point của ứng dụng
- Render App component vào DOM
- Setup React StrictMode
- Import CSS Bootstrap
```

## 🔄 Luồng hoạt động:

1. **Hiển thị**: `main.jsx` → `App.jsx` → `SongList.jsx` → `SongTable.jsx` + `Header.jsx`
2. **Thêm bài hát**: `AddSong.jsx` → `SongForm.jsx` → `api.js` → `db.json`
3. **Công khai bài hát**: `SongTable.jsx` → `api.js` → `db.json` → reload data
4. **Tìm kiếm**: `SongList.jsx` filter songs array (real-time)
5. **Chọn bài hát**: `SongTable.jsx` → `SongList.jsx` → `Header.jsx`

## 🎯 Validation Rules:

- **Tất cả trường**: Bắt buộc nhập (`required`)
- **Ca sĩ & Nhạc sĩ**: Không giới hạn ký tự
- **Thời gian**: Đúng format `hh:mm` (pattern validation)
- **Trùng lặp**: Kiểm tra title + singer trùng nhau
- **Mặc định**: `likes = 0`, `status = "Lưu trữ"`

## 🚀 Cách chạy dự án:

```bash
# Cài đặt dependencies
npm install

# Chạy frontend (React)
npm run dev

# Chạy backend (JSON Server)
npx json-server --watch db.json --port 3001
```

## 🌐 URLs:

- **Frontend**: http://localhost:5173
- **API**: http://localhost:3001/songs

## 📝 Ghi chú:

- Sử dụng Bootstrap 5 cho giao diện responsive
- Real-time search không cần nút tìm kiếm
- Công khai bài hát không có modal xác nhận
- Clean code với component-based architecture
- Đầy đủ CRUD operations (Create, Read, Update)
