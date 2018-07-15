# Redux Basic React Native Training

# Mục tiêu bài học
- Biết cài đặt các thư viện để triển khai Redux trong dự án React Native
- Biết cấu trúc thư mục dự án sử dụng Redux
- Hiểu được các thành phần quan trọng trong Redux : action, reducer, store
- Hiểu được cơ chế làm việc của Redux

# Nội dung bài tập
- Tạo 1 app hiển thị danh sách các bước làm món thịt kho tàu
- Sử dụng thư viện Redux, tự cấu trúc thư mục dự án
- Giao diện như bên dưới

![redux_thitkhotau]()

# Hướng dẫn

Bước 1: Cài 3 thư viện sau trong thư mục gốc của dự án

```npm install --save redux```

```npm install --save react-redux```

```npm install --save redux-thunk```

Bước 2: Tạo cấu trúc thư mục như sau

src
  -action
    index.js
  -components
    home.js
  -reducers
    index.js
   store.js
   actionTypes.js
   introductions.json

Bước 3: Tạo 1 action

Redux action là 1 pure object định nghĩa 2 thuộc tính: type và payload
Trong đó :

- type: kiểu mô tả action
- payload: giá trị tham số truyền lên

```
{
  type: "KIEU_ACTION",
  payload: //tham số
}
```
Bước 4: Tạo 1 reducer

Reducer nhận đầu vào 2 tham số: 1 state cũ và 1 action được gửi lên 
Nhiệm vụ của reducer: Trả về 1 state mới, không làm thay đổi state cũ

```
(previousState, action) => newState
```

Bước 5: Tạo store

Store là 1 object lưu trữ state của toàn bộ ứng dụng có 3 phương thức sau:

- getState(): Giúp lấy ra state hiện tại
- dispatch(action): Thực hiện gọi 1 action
- le(listener): Nó có vai trò cực quan trọng, luôn luôn lắng nghe xem có thay đổi gì ko rồi ngay lập tức cập nhật ra View

Bước 5: Tạo 1 file introductions.json chứa các bước thực hiện món
thịt kho tàu. ở Action ta settimeOut cho hàm load dữ liệu từ file josn này, việc làm này
mô tả việc mock dữ liệu từ API.

Bước 6: Tạo 1 component, sử dụng data từ Store (global state), load các bước làm món thịt kho tàu ra màn hình
, sử dụng listView