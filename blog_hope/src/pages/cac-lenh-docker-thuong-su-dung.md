---
# This is the title of the article
title: Các lệnh docker thường sử dung - Docker CLI
# You can customize cover image
cover: /assets/images/cover-coding.jpg
# This is the icon of the page
icon: file
# This control sidebar order
order: 1
# Set author
author: Mr.Linh
# Set writing time
date: 2020-01-01
# A page can have multiple categories
category:
  - coding
# A page can have multiple tags
tag:
  - docker
  - lệnh linux
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# Các lệnh docker thường sử dung - Docker CLI

## 1. kiểm tra version

```
docker --version
```

## 2. kiểm tra thông tin các image có trên docker hub

```
docker search
```

ví dụ: docker search ubuntu

## 3. tải các image trên docker hub về

```
docker pull
```

ví dụ: docker pull ubuntu

## 4. liệt kê các images có trên máy tính

```
docker images
docker image rm <image>
```

## 5. tạo 1 container với images của bạn

```
docker run
```

ví dụ: docker run -it ubuntu (tạo 1 container với image ubuntu, tham số -it vào ternimal của container ngay)

## 6. liệt kê các container đang chạy

```
docker ps
```

## 7. dừng 1 container đang chạy

```
docker stop
```

ví dụ: docker stop 03a1

## 8. start 1 container đã dừng

```
docker start
```

ví dụ: docker start 03a1

## 9. xóa một container đã tạo

```
docker rm
```

## 10. chạy 1 lệnh trong container

```
docker exec
```

## 11. docker compose

### 11.1 khởi động các container

```
docker-compose up
```

### 11.2 dừng và xóa các container

```
docker-compose down
```

### 11.3 khởi động lại các container

```
docker-compose restart
```

### 11.4 dừng các container

```
docker-compose stop
```

### 11.5 xóa các container không sử dụng

```
docker-compose rm
```

### 11.6 thực hiện các lệnh trên một container

```
docker-compose exec
```

### 11.7 xem logs

```
docker-compose logs <services>
```

ví dụ:

```
docker exec d8593 ls -la /root
docker exec -it app composer install
docker exec -it app php artisan migrate:fresh
docker exec -it app bash
docker exec -it app sh
```