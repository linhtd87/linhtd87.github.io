---

# This is the title of the article

title: Change risk anti-patterns

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

- crap
- Change risk anti-patterns

# this page is sticky in article list

sticky: true

# this page will appear in starred articles

star: true

# You can customize copyright content

copyright: No Copyright
---

# Change Risk Anti Patterns



## CRAP

Cách chơi chữ "Crap" nghĩa là Cứt, Your code is Crap có nghĩa là Mã của bạn như Cứt.

## Code, Complexity & Risk
Chỉ số **change risk anti-patterns** là thước đo "rủi ro" liên quan đến mã của bạn. Hiểu được các mô hình chống rủi ro
thay đổi và mối tương quan giữa độ phức tạp của mã (code complexity) và độ bao phủ của mã (code coverage) là rất quan
trọng đối với các nhóm phát triển muốn duy trì sức khỏe tổng thể và chất lượng của cơ sở mã của họ.

## Code, Complexity & Risk

## Số liệu CRAP

Đo lường C.R.A.P. (Thay đổi rủi ro chống mô hình) điểm. Nó được thiết kế để phân tích và dự đoán lượng nỗ lực, nỗi đau
và thời gian cần thiết để duy trì một phần mã hiện có.

Một method có điểm CRAP trên 30 được coi là CRAPpy (tức là không thể chấp nhận được).

## Công thức CRAP

Cho một method m, C.R.A.P. cho m được tính như sau:

```
C.R.A.P.(m) = comp(m)^2 * (1 – cov(m)/100)^3 + comp(m)
```

Trong đó **comp(m)** là độ phức tạp cyclomatic của phương pháp m và **cov(m)** là kiểm thử code coverage được cung cấp
bởi
các bài kiểm tra tự động.