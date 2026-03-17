# HƯỚNG DẪN BÀN GIAO SOURCE CODE WEBSITE (Dành cho người không chuyên IT)

Xin chào! Tài liệu này được viết ra nhằm mục đích giúp bạn (người có thể không có nền tảng lập trình) vẫn có thể tiếp quản, hiểu cách hoạt động cơ bản và chỉnh sửa được nội dung, hình ảnh của trang web (Landing Page) này khi cần thiết.

## 1. TỔNG QUAN VỀ TRANG WEB

- **Tên dự án:** Landing Page Green / PHYCO
- **Mục đích:** Giới thiệu sản phẩm, công nghệ, cơ chế và lý do khách hàng nên chọn sản phẩm.
- **Công nghệ cốt lõi:** Trang web được dựng bằng **ReactJS** (công nghệ rất phổ biến để làm web hiện nay).

## 2. NHỮNG THƯ MỤC BẠN CẦN QUAN TÂM NHẤT

Bạn không cần hiểu toàn bộ hàng ngàn file trong code, chỉ cần chú ý 2 thư mục chính nằm trong thư mục **`src`** (viết tắt của source) chứa toàn bộ "linh hồn" của website:

1. **Thư mục Hình ảnh (`src/assets`):** Chứa tất cả logo, banner, icon, hình ảnh minh hoạ... 
2. **Thư mục Thông tin (`src/data`):** Chứa các file chứa nội dung chữ (text), ví dụ như giá tiền, thông tin sản phẩm, câu từ trên trang web...
3. **Thư mục Giao diện (`src/components`):** Nơi chứa cấu trúc các khối giao diện (Hero, Sản phẩm, Công nghệ...). _Chỉ sửa mục này nếu bạn muốn đổi cấu trúc website, còn chỉ sửa chữ và ảnh thì ít khi đụng tới._

*(Lưu ý: Các thư mục như `node_modules`, `dist`, hay các file `.json`, `.ts` bên ngoài hãy **khoan đụng tới** vì nó liên quan đến cài đặt hệ thống).*

---

## 3. HƯỚNG DẪN THAY ĐỔI NỘI DUNG CHỮ (DỄ NHẤT)

Ví dụ nếu bạn muốn sửa lỗi chính tả, đổi giá sản phẩm, đổi câu slogan:

1. Bạn hãy mở thư mục **`src/data`**.
2. Tìm đến file **`products.ts`** (hoặc các file tương tự). Bạn có thể mở nó bằng phần mềm Notepad (có sẵn trên máy tính) hoặc tốt nhất là tải phần mềm **Visual Studio Code** (Miễn phí trên mạng).
3. Trong file này, bạn sẽ thấy các đoạn chữ được bọc trong cặp ngoặc nháy kép `"Nội dung chữ"` hoặc phẩy bẹt `'Nội dung'`.
4. **Lưu ý CỰC KỲ QUAN TRỌNG:** Bạn chỉ được phép sửa nội dung **bên trong** dấu ngoặc nháy `" "`. Tuyệt đối không xóa dấu ngoặc nháy hay các dấu phẩy `,` xung quanh, nếu không web sẽ bị lỗi.
   - *Ví dụ:* `tagline: "Bác sĩ cây trồng"` -> Bạn có thể xoá chữ Bác sĩ đi và đánh chữ khác vào giữa 2 dấu nháy thành `tagline: "Chuyên gia cây trồng"`.
5. Sau khi đổi, nhớ bấm **File > Save** (hoặc phím tắt Ctrl+S) để lưu lại.

---

## 4. HƯỚNG DẪN THAY ĐỔI HÌNH ẢNH (BANNER, LOGO, SẢN PHẨM)

Nếu có một chiến dịch mới và Marketing/Designer gửi cho bạn banner hình ảnh mới, bạn làm theo các bước sau:

1. Đảm bảo tên file ảnh mới phải viết liền, không dấu hoặc tiếng Việt (Ví dụ đúng: `banner_moi.png`, Ví dụ Sai: `Banner mới .png`).
2. Copy ảnh đó dán vào thư mục **`src/assets`** (hoặc các thư mục con bên trong nó như `banner`, `products`).
3. Mở file phụ trách vùng giao diện đó trong thư mục **`src/components`** (Bằng Notepad hoặc Visual Studio Code).
   - Ví dụ: Muốn đổi banner Công nghệ -> Mở file `TechnologySection.tsx`.
   - Muốn đổi banner Cơ chế -> Mở file `MechanismSection.tsx`.
   - Muốn đổi banner Lý do chọn -> Mở file `WhyChooseSection.tsx`.
   - Cần thay Banner đầu trang -> Mở file `BrandSection.tsx`.
4. Tìm đến đoạn code trên cùng có chữ giống như vầy: `import ten_gi_do from '@/assets/tên_file_cũ.png';`
5. Hãy thay chữ `tên_file_cũ.png` thành tên file ảnh mới của bạn.
6. Lưu file lại (Ctrl+S).

---

## 5. HƯỚNG DẪN XEM THỮ SỰ THAY ĐỔI (CHẠY THỬ TRÊN MÁY TÍNH)

Để xem những thay đổi nội dung/hình ảnh của bạn hiển thị thực tế ra sao trước khi công bố cho khách hàng, bạn cần cài phần mềm và chạy trang web lên. Hơi kỹ thuật một chút nhưng cứ làm y hệt các bước là được:

**Bước 1: Cài đặt công cụ nền tảng (Chỉ làm 1 lần đầu tiên duy nhất)**
Để máy tính của bạn hiểu được mã code này, bạn cần cài đặt **Node.js**:
1. Lên Google gõ "Download NodeJS" hoặc vào link: `https://nodejs.org/`
2. Tải bản **LTS** (bản ổn định) và cài đặt y hệt như các phần mềm bình thường (Cứ bấm Next liên tục).

**Bước 2: Mở Terminal (Cửa sổ gõ lệnh)**
1. Mở thư mục code của bạn (ví dụ: `landing_page_green`).
2. Nếu dùng Windows: Nháy chuột phải vào một vùng trống bất kỳ trong thư mục nền trắng, chọn **"Open in Terminal"**. 
   - (Mẹo: Có thể gõ chữ `cmd` vào khoảng trắng trên thanh địa chỉ đường dẫn của thư mục rồi nhấn Enter).
3. Một màn hình đen (cửa sổ lệnh) sẽ hiện ra.

**Bước 3: Gõ lệnh chạy thử**
1. Lần đầu mở code trên máy tính của bạn (chưa chạy bao giờ), hãy gõ dòng chữ này và nhấn Enter: 
   > **`npm install`**
   *(Nếu bạn không dùng Node bình thường mà dùng Bun, hãy gõ `bun install`)*
   Chờ máy tải tài nguyên về (tầm 1 phút). (Chỉ cần làm bước này ở lần đầu mở dự án).
2. Sau khi xong ở trên, gõ tiếp lệnh này để bật web: 
   > **`npm run dev`**
3. Kế tiếp, trên màn hình đen sẽ hiện ra dòng chữ chứa cái link (Thường là: `http://localhost:5173/`).
4. Bạn bôi đen copy cái link đó, mở trình duyệt Chrome lên dán vào là xem được trang web. Từ lúc này mỗi lần bạn sửa file và bấm lưu (Ctrl+S), trang web trên Chrome sẽ **tự động cập nhật** luôn mà không cần tải lại!

---

## 6. HƯỚNG DẪN XUẤT FILE ĐỂ GỬI CHO ĐỘI KỸ THUẬT (HOSTING)

Khi bạn đã sửa xong mọi thứ và ưng ý chữ và hình ảnh, bạn sẽ KHÔNG gửi nguyên cục thư mục code 100MB này cho bên kỹ thuật, mà phải "đóng gói" (Build) nó lại.

1. Bật màn hình Terminal màu đen lúc nãy lên (Nếu web vẫn đang chạy chữ loằng ngoằng, bạn bấm **Ctrl + C** rồi gõ **Y** và Enter để tắt chế độ chạy thử).
2. Gõ lệnh đóng gói: 
   > **`npm run build`** 
   Và nhấn Enter.
3. Đợi vài chục giây, máy tính sẽ tự động sinh ra một thư mục mới có tên là **`dist`** (viết tắt của distribution - bản phân phối). 
4. Thư mục `dist` này chính là bản web cuối cùng, siêu nhẹ và được tối ưu. Bạn chỉ cần nén CẢ CÁI THƯ MỤC `dist` này lại (thành file `.zip` hoặc `.rar`) rồi gửi cho đội kỹ thuật (IT / Quản trị Domain Web) để họ Update lên tên miền chính thức.

---
**Tóm tắt "Thần chú" làm việc với code:**
- Đừng bao giờ lỡ tay xoá các dấu `{`, `}`, `<`, `>`, `"`, `,` ở xung quanh đoạn chữ mà bạn muốn sửa. Nếu lỡ tay xóa, nhớ bấm Ctrl + Z để lùi lại thao tác dại dột đó.
- Cứ sửa xong thì phải bấm Ctrl+S để lưu file.
- Cài Node.js > Dùng lệnh `npm run dev` để xem thử > Dùng lệnh `npm run build` để xuất file nén cho anh em IT.

Chúc bạn có một ngày làm việc tuyệt vời và tiếp quản hệ thống thành công!
