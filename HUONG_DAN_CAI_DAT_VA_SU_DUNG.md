# HƯỚNG DẪN CÀI ĐẶT VÀ SỬ DỤNG SOURCE CODE (DÀNH CHO LẬP TRÌNH VIÊN)

Tài liệu này cung cấp hướng dẫn chi tiết dành cho các lập trình viên (Developer) hoặc đội ngũ IT để thiết lập môi trường, chạy thử, tùy biến và đóng gói (build) dự án Landing Page Green.

---

## 1. TỔNG QUAN CÔNG NGHỆ (TECH STACK)

Dự án được xây dựng dựa trên các công nghệ và thư viện hiện đại để đảm bảo hiệu suất và UI/UX tốt nhất:

- **Core:** React 18, TypeScript, Vite.
- **Styling:** Tailwind CSS (v3), PostCSS.
- **UI Components:** Shadcn UI, Radix UI (dành cho các logic UI phức tạp như Accordion, Dialog, Carousel...).
- **Animation:** Framer Motion (chịu trách nhiệm cho các hiệu ứng xuất hiện, hover mượt mà).
- **Routing:** React Router DOM.
- **Package Manager:** Dự án đang sử dụng **Bun** (có file `bun.lockb`) hoặc **NPM**.

---

## 2. YÊU CẦU HỆ THỐNG (PREREQUISITES)

Môi trường máy tính của bạn cần được cài đặt sẵn:
- **Node.js**: Phiên bản 18 LTS trở lên.
- **Package Manager**: Khuyến khích sử dụng [Bun](https://bun.sh/) (nhanh hơn rất nhiều) hoặc bạn vẫn có thể dùng `npm` / `yarn` truyền thống.

---

## 3. CÁC BƯỚC CÀI ĐẶT (INSTALLATION)

**Bước 1:** Clone hoặc giải nén thư mục mã nguồn vào máy tính của bạn. Mở Terminal (Command Prompt / PowerShell / Git Bash) tại thư mục gốc của dự án `landing_page_green`.

**Bước 2:** Cài đặt các gói thư viện (Dependencies). Chạy 1 trong 2 lệnh sau:
```bash
# Nếu dùng Bun (Khuyên dùng vì có sẵn file bun.lockb)
bun install

# Hoặc nếu dùng NPM
npm install
```

**Bước 3:** Chạy môi trường phát triển (Development Server):
```bash
# Nếu dùng Bun
bun run dev

# Hoặc nếu dùng NPM
npm run dev
```

Sau khi chạy lệnh, Vite sẽ khởi động server tại cổng mặc định. Truy cập vào đường dẫn: `http://localhost:5173/` (hoặc cổng được hiển thị trên console) để xem trang web chạy thực tế. Hỗ trợ Hot-Module Replacement (HMR) - sửa code sẽ tự động reload trình duyệt.

---

## 4. CẤU TRÚC THƯ MỤC DỰ ÁN

Đây là kiến trúc thư mục chính để bạn dễ dàng tìm file cần sửa:

```text
landing_page_green/
├── public/                 # Các tài nguyên tĩnh nguyên bản (favicon, file txt tĩnh)
├── src/                    # Thư mục mã nguồn chính (Bạn sẽ code ở đây)
│   ├── assets/             # Chứa hình ảnh (images, banners, logos)
│   ├── components/         # Các mảnh giao diện (Hero, Header, Footer, Slider...)
│   │   ├── css/            # Các file CSS thuần (nếu có sử dụng ngoài Tailwind)
│   │   └── ui/             # Các UI Components cơ bản tải từ Shadcn (Button, Card...)
│   ├── data/               # Nơi lưu trữ Data cố định (Sản phẩm, thông tin...) dưới dạng Object TS
│   ├── hooks/              # Custom React hooks (nếu có)
│   ├── pages/              # Các trang chính của hệ thống (VD: Index.tsx ghép từ các Component)
│   ├── lib/                # (Hoặc utils/) Các hàm tiện ích (VD: hàm merge class của tailwind...)
│   ├── App.tsx             # Nơi quản lý Routing chính
│   ├── main.tsx            # Entry point của React (Gắn vào thẻ root id trong HTML)
│   └── index.css           # Cấu hình Tailwind global và biến CSS (phong cách)
├── components.json         # File cấu hình của Shadcn UI
├── tailwind.config.ts      # Chứa cấu hình màu sắc, animation, theme của Tailwind
├── tsconfig.json           # Cấu hình Typescript strict mode
└── vite.config.ts          # Cấu hình cho công cụ build Vite
```

---

## 5. QUY TRÌNH QUẢN LÝ VÀ CHỈNH SỬA

### 5.1. Chỉnh sửa dữ liệu, text, cấu hình sản phẩm
Thay vì phải lướt qua hàng trăm dòng HTML/React, mọi dữ liệu tĩnh đã được tách riêng vào thư mục `src/data/`. Bạn chỉ cần mở file `products.ts` để sửa giá tiền, thông tin, nội dung sản phẩm.

### 5.2. Chỉnh sửa kiến trúc UI
Các file đuôi `.tsx` nằm ở `src/components/` cấu thành giao diện. Giao diện ưu tiên sử dụng **Tailwind CSS classes** viết trực tiếp trong thuộc tính `className`. Nếu cần sửa class phức tạp, chúng được xử lý qua hàm `cn()` trong thư mục utils/lib (chuẩn của Shadcn UI).

### 5.3. Định style toàn cục (Global Styles & Theming)
- Toàn bộ màu sắc chủ đạo của Green Corporation được định nghĩa bằng các biến CSS trong file `src/index.css` (VD: `--primary`, `--background`).
- File `tailwind.config.ts` đọc các biến CSS này để tạo ra các class Tailwind tương ứng. Để đổi màu nhận diện thương hiệu toàn trang, chỉ cần đổi mã HEX ở file `index.css`.

---

## 6. LỆNH DÀNH CHO QUY TRÌNH TRIỂN KHAI (SCRIPTS)

Các lệnh (Scripts) có sẵn trong `package.json`:

1. **Check lỗi Typing và Linting:**
```bash
npm run lint 
# Check lỗi syntax, unused variables bằng ESLint
```

2. **Dựng bản Production (Build đóng gói):**
```bash
npm run build
```
- Quá trình này dùng Vite để biên dịch toàn bộ Typescript, tối ưu hóa (Minify) CSS, JS và hình ảnh.
- File cuối cùng xuất ra nằm trong thư mục **`dist/`**. 

3. **Xem trước bản Production ở máy tính (Preview):**
```bash
npm run preview
```
Khởi động server tĩnh chạy thử nội dung từ thư mục `dist` để xem có lỗi gì khi lên thực tế không.

---

## 7. HƯỚNG DẪN DEPLOY TRUYỀN THỐNG LÊN HOSTING/VPS

1. Chạy lệnh `npm run build` (hoặc `bun run build`).
2. Mở thư mục **`dist`** vừa được sinh ra (Nó chứa `index.html` và folder `assets`).
3. Zip tất cả các file bên **TRONG** thư mục `dist` mang tải lên thư mục `public_html` (hoặc thư mục gốc domain) trên Hosting Apache/Nginx.
4. (Lưu ý Nginx/Apache): Ví dụ đây là ứng dụng Single Page App (React Router Component), nếu bạn có sử dụng Router với nhiều đường dẫn (như `/about`, `/products/...`), hãy cấu hình Nginx/Apache hoặc file `.htaccess` tự động Rewrite Rule trỏ mọi Request về `index.html` để tránh lỗi `404 Not Found` khi F5 trình duyệt.

Chúc bạn code vui vẻ! Mọi vướng mắc về logic UI hãy ưu tiên đọc tài liệu của TailwindCSS và Shadcn UI.
