---
# This is the title of the article
title: Lệnh tail trong linux
# You can customize cover image
cover: /assets/images/cover-cli.webp
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
  - tail
  - lệnh linux
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# Lệnh tail trong linux

## Là gì?

Tail là phần bổ sung của lệnh head. Đúng như tên gọi của nó, lệnh tail xuất ra N số dữ liệu cuối cùng của đầu vào đã
cho. Theo mặc định, lệnh tail in 10 dòng cuối cùng của các file được chỉ định. Nếu có nhiều tên file được cung cấp thì
tên file sẽ được đặt trước dữ liệu từ mỗi file đó.

## Cú pháp

```
tail [option] [file]
```

### Ví dụ 1:

Hãy xem xét hai file có tên `state.txt`, chứa tất cả tên của các tiểu bang của Ấn Độ.
Nếu không có bất kỳ tùy chọn nào, chỉ 10 dòng cuối cùng của file đã chỉ định được hiển thị.

```
$ tail state.txt
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
```

## Các tùy chọn

### 1. -n 'num'

hiển thị số dòng cuối, thay vì 10 dòng
'num' là thứ bắt buộc phải chỉ định, nếu không nó sẽ hiển thị lỗi

#### Ví dụ 2:

```
$ tail -n 3 state.txt
Uttar Pradesh
Uttarakhand
West Bengal
```

hoặc

```
$ tail -3 state.txt
Uttar Pradesh
Uttarakhand
West Bengal
```

Lệnh tail cũng đi kèm với tùy chọn ‘+’ không có trong lệnh head. Với tùy chọn này, lệnh tail sẽ in dữ liệu bắt đầu từ số
dòng được chỉ định của file thay vì những dòng cuối cùng trong file. Đối với lệnh: tail + n tên_file, dữ liệu sẽ bắt đầu
in từ dòng số ‘n’ cho đến cuối file được chỉ định.

```
$ tail +25 state.txt
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
```

### 2. -c 'num'

In các byte ‘num’ cuối cùng từ file được chỉ định. Dòng mới được tính là một ký tự duy nhất, vì vậy nếu tail in ra
một dòng mới, nó sẽ được tính là một byte. Trong tùy chọn này, bắt buộc phải viết -c theo sau là num dương hoặc âm
tùy thuộc vào yêu cầu. Với +num, nó hiển thị tất cả dữ liệu sau khi bỏ qua num byte từ phần bắt đầu của file được chỉ
định và với -num, nó hiển thị num byte cuối cùng từ file được chỉ định.

Lưu ý: Không có dấu dương hoặc âm trước num, lệnh sẽ hiển thị num byte cuối cùng từ file được chỉ định.

#### Ví dụ 3:

```
With negative num
$ tail -c -6 state.txt
Bengal

OR

$ tail -c 6 state.txt
Bengal
```

```
With positive num
$ tail -c +263 state.txt
Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
```

### 3. -q

Nó được sử dụng nếu có nhiều hơn 1 file. Do lệnh này, tên file không được đặt trước dữ liệu từ mỗi file nữa.

#### Ví dụ 4:

```
Without using -q option
$ tail state.txt capital.txt
  state.txt
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
  capital.txt
Dispur
Patna
Raipur
Panaji
Gandhinagar
Chandigarh
Shimla
Srinagar
Ranchi
```

```
With using -q option
$ tail -q state.txt capital.txt
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West BengalDispur
Patna
Raipur
Panaji
Gandhinagar
Chandigarh
Shimla
Srinagar
Ranchi
Bengaluru
```

### 4. -f

Tùy chọn này chủ yếu được quản trị viên hệ thống sử dụng để theo dõi sự phát triển của các file nhật ký được viết bởi
nhiều chương trình Unix khi chúng đang chạy. Tùy chọn này hiển thị 10 dòng cuối cùng của file và sẽ cập nhật khi các
dòng mới được thêm vào.

Khi các dòng mới được ghi vào nhật ký, bảng điều khiển sẽ cập nhật các dòng mới. Lời nhắc không trả lại ngay cả sau khi
công việc kết thúc, vì vậy, phải sử dụng phím ngắt (interrupt key) để hủy bỏ lệnh này. Nói chung, các ứng dụng ghi thông
báo lỗi vào các file nhật ký. Bạn có thể sử dụng tùy chọn -f để kiểm tra những thông báo lỗi khi chúng xuất hiện trong
file nhật ký.

```
$ tail -f [logfile]
```

### 5. -v

Bằng cách sử dụng tùy chọn này, tên file luôn được đặt trước dữ liệu từ file được chỉ định.

```
$ tail -v state.txt
==> state.txt <==
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
```

### 6. –version

Tùy chọn này được sử dụng để hiển thị phiên bản tail hiện đang chạy trên hệ thống của bạn.

```
$ tail --version
tail (GNU coreutils) 8.26
Packaged by Cygwin (8.26-1)
Copyright (C) 2016 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later .
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Paul Rubin, David MacKenzie, Ian Lance Taylor,
and Jim Meyering.
```

## Các ứng dụng của lệnh tail

### 1. Cách sử dụng tail với pipe (|)

Lệnh tail có thể kết hợp với nhiều lệnh khác của Unix.

#### Ví dụ 5:

Trong ví dụ sau, đầu ra của lệnh tail được đưa ra làm đầu vào cho lệnh sort với tùy chọn -r để sắp xếp 7 tên bang cuối
cùng đến từ file state.txt theo thứ tự ngược lại.

```
$ tail -n 7 state.txt
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal

$ tail -n 7 state.txt | sort -r
West Bengal
Uttarakhand
Uttar Pradesh
Tripura
Telangana
Tamil Nadu
Sikkim
```

Nó cũng có thể được nối với một hoặc nhiều bộ lọc để xử lý bổ sung.

#### Ví dụ 6:

Giống như trong ví dụ sau, chúng ta đang sử dụng
lệnh cat, head, tail và đầu ra của nó được lưu trữ trong tên file list.txt bằng >.

```
$ cat state.txt | head -n 20 | tail -n 5  > list.txt

$ cat list.txt
Manipur
Meghalaya
Mizoram
Nagaland
Odisha
```

Điều gì đang xảy ra trong lệnh này, hãy thử khám phá nó. Lệnh cat đầu tiên cung cấp tất cả dữ liệu có trong file
state.txt và sau đó, pipe chuyển tất cả đầu ra từ lệnh cat sang lệnh head. Lệnh head cung cấp tất cả dữ liệu từ đầu (
dòng số 1) đến dòng số 20 và chuyển tất cả đầu ra từ lệnh head sang lệnh tail. Bây giờ, lệnh tail đưa ra 5 dòng cuối
cùng của dữ liệu và đầu ra chuyển đến tên file list.txt thông qua toán tử chỉ thị.

### 2. In các dòng nằm giữa dòng M và N

Với mục đích này, bạn sẽ phải sử dụng các lệnh head, tail và pipe (|). Lệnh là: head -M file_name | tail - (M-N), vì
dòng đầu tiên là M và lệnh tail cắt các dòng trong khoảng từ M đến N, bắt đầu từ cuối. Giả sử từ file state.txt, bạn
phải in các dòng từ 10 đến 20.

```
$ head -n 20 state.txt | tail -10
Jharkhand
Karnataka
Kerala
Madhya Pradesh
Maharashtra
Manipur
Meghalaya
Mizoram
Nagaland
Odisha
```