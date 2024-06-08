---
# This is the title of the article
title: Sự khác biệt giữa MySQL DATETIME và TIMESTAMP DataTypes
# You can customize cover image
cover: /assets/images/cover-coding.webp
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
  - Database design data types
  - Sự khác biệt giữa MySQL DATETIME và TIMESTAMP DataTypes
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# Sự khác biệt giữa MySQL DATETIME và TIMESTAMP DataTypes

## Giới thiệu

Một câu hỏi đơn giản có thể xuất hiện trong đầu một người khi làm việc với MySQL là "Nên gán kiểu dữ liệu DATETIME hay TIMESTAMP cho một cột vì cả hai dường như đều lưu trữ cùng một dữ liệu?". Mặc dù chúng lưu trữ cùng một dữ liệu, nhưng chúng khác nhau theo một số cách; Hãy kiểm tra những điều đó với sự giúp đỡ của một ví dụ nhỏ.

## Điểm tương đồng giữa DATETIME và TIMESTAMP

1. Cả hai đều lưu trữ dữ liệu ở định dạng "YYYY-MM-DD HH:MM: SS".
2. Cả hai đều bao gồm một ngày cũng như một phần thời gian.
3. Khởi tạo tự động có thể xảy ra cho cả hai.
4. Cả hai đều thay đổi dữ liệu trong khi cập nhật bản ghi với thời gian ngày hiện tại theo ràng buộc.
5. Cả hai đều có thể có các phần giây phân đoạn với độ chính xác lên đến 6 chữ số micro giây.

## Sự khác biệt giữa DATETIME và TIMESTAMP

|   | DATETIME                                                                            | TIMESTAMP                                                                                  |
|---|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| 1 | Phạm vi được hỗ trợ cho DATETIME là '1000-01-01 00:00:00' đến '9999-12-31 23:59:59' | trong khi đối với TIMESTAMP, nó là '1970-01-01 00:00:01' UTC đến '2038-01-09 03:14:07' UTC |
| 2 | Trước MySQL 5.6.4, DATETIME yêu cầu 8 byte (+3 byte cho giây phân số)               | trong khi TIMESTAMP yêu cầu 4 byte (+3 byte cho giây phân số) để lưu trữ dữ liệu           |
| 3 | Trước MySQL 5.6.4, DATETIME yêu cầu 8 byte (+3 byte cho giây phân số)               | trong khi TIMESTAMP yêu cầu 4 byte (+3 byte cho giây phân số) để lưu trữ dữ liệu           |
| 4 | Trước MySQL5+, DATETIME không thực hiện bất kỳ chuyển đổi nào                       | trong khi giá trị TIMESTAMP chuyển đổi từ thời gian hiện tại sang UTC và ngược lại         |
| 5 | DATETIME giống với cài đặt múi giờ hiện tại                                         | trong khi TIMESTAMP khác với cài đặt múi giờ hiện tại                                      |
| 6 | DATETIME không thể được lập chỉ mục                                                 | trong khi TIMESTAMP có thể được lập chỉ mục                                                |
| 7 | Các truy vấn có DATETIME sẽ không được lưu vào bộ nhớ đệm                           | nhưng các truy vấn có TIMESTAMP sẽ được lưu vào bộ nhớ đệm                                 |

## Ví dụ

(NGÀY GIỜ)
Múi giờ hệ thống của tôi là IST, vì vậy theo mặc định, MySQL sử dụng múi giờ IST.

```sql
CREATE TABLE `employee`
(
    `entry_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
    ENGINE = InnoDB
    DEFAULT CHARSET = latin1;

INSERT INTO `employee` (`entry_time`)
VALUES (CURRENT_TIMESTAMP);

SELECT *
FROM `employee`;
```

**Output**
![Output](/assets/images/su-khac-biet-giua-mysql-datime-va-timestamp-data-types-01.jfif)

Bây giờ, hãy thay đổi múi giờ hệ thống từ IST sang EST, tức là UTC - 05:00 trong những tháng lạnh của Giờ tiết kiệm ánh sáng ban ngày.

```sql
-- Set the session time zone to '-05:00'
SET @@session.time_zone = '-05:00';

-- Insert a new record into the `employee` table with the current timestamp in the `entry_time` column
INSERT INTO `employee` (`entry_time`)
VALUES (CURRENT_TIMESTAMP);

-- Retrieve all records from the `employee` table and display the contents
SELECT *
FROM `employee`;
```

**Output**
![Output](/assets/images/su-khac-biet-giua-mysql-datime-va-timestamp-data-types-02.jfif)

## Ví dụ

(DẤU THỜI GIAN)
Kết quả là như nhau mặc dù chúng tôi đã thay đổi múi giờ.

```sql
CREATE TABLE `employee`
(
    `entry_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
    ENGINE = InnoDB
    DEFAULT CHARSET = latin1;

INSERT INTO `employee` (`entry_time`)
VALUES (CURRENT_TIMESTAMP);

SELECT *
FROM `employee`;
```

**Output**
![Output](/assets/images/su-khac-biet-giua-mysql-datime-va-timestamp-data-types-03.jfif)

Bây giờ, hãy thay đổi múi giờ hệ thống từ IST sang EST, tức là UTC - 05:00 trong những tháng lạnh của Giờ tiết kiệm ánh sáng ban ngày.

```mysql
SET @@session.time_zone = '-05:00';
SELECT *
FROM `employee`;
```

**Output**
![Output](/assets/images/su-khac-biet-giua-mysql-datime-va-timestamp-data-types-04.jfif)

## Kết thúc

Kết quả trên có thể thay đổi theo múi giờ đã đặt, tức là EST, là -5 giờ so với giờ UTC.

Mặc dù cả hai kiểu dữ liệu trông giống nhau, nhưng chúng khác với những gì chúng ta có thể nghĩ đến. Hy vọng mẹo nhỏ này sẽ giúp ai đó theo một cách nào đó để phân biệt 2 loại dữ liệu khó hiểu này. Vui lòng chia sẻ phản hồi của bạn nếu bạn thấy mẹo này hữu ích cho mình.

## Tham khảo

https://dev.mysql.com/doc/refman/5.7/en/datetime.html