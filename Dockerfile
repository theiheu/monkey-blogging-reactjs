# Sử dụng hình ảnh node có sẵn trên Docker Hub
FROM node:14

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép tất cả các tệp từ thư mục gốc vào thư mục làm việc trong container
COPY . .

# Cài đặt các phụ thuộc và khởi động ứng dụng React
RUN npm install
CMD ["bun", "run dev"]
