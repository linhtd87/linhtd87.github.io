---
# This is the title of the article
title: AWS là gì?
# You can customize cover image
cover: /assets/images/cover-coding-aws.png
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
  - Amazon AWS là gì?
  - Điện toán đám mây
  - Cơ sở dữ liệu
  - Amazon RDS
  - Amazon Aurora
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# AWS

## Cơ sở dữ liệu

### RDS

#### AWS RDS so với AWS Aurora: Cái nào phù hợp với bạn?

Khi nói đến cơ sở dữ liệu đám mây, Amazon Web Services (AWS) cung cấp hai tùy chọn phổ biến: AWS RDS và AWS Aurora. Cả hai đều là những dịch vụ cực kỳ mạnh mẽ cung cấp nhiều tính năng và có thể mở rộng quy mô kinh doanh của bạn. Nhưng quyết định chọn cái nào có thể gây nhầm lẫn. Let chia nhỏ sự khác biệt giữa chúng, để bạn có thể đưa ra quyết định sáng suốt cho doanh nghiệp của mình.

##### AWS RDS so với AWS Aurora: Cơ sở hạ tầng và kiến trúc

|                                                | RDS                                                                                                                   | Aurora                                                                       |
|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| overlay technology based on existing databases | Oracle, MySQL, and Microsoft SQL Server                                                                               | separate option that has been built from the ground up by AWS                |
| -                                              | cung cấp quy trình thiết lập nhanh chóng và dễ dàng với cài đặt thông số được định cấu hình sẵn                       | có thể tạo các cơ sở dữ liệu rất khác nhau cho các trường hợp sử dụng cụ thể |
| infrastructure                                 | chạy trên các cụm phần cứng chuyên dụng trong các trung tâm dữ liệu của AWS với một số hạn chế nhất định về phần cứng | có khả năng thay đổi quy mô điện toán và lưu trữ gần như không giới hạn      |
| -                                              | có thể được di chuyển dễ dàng giữa các khu vực hoặc Vùng sẵn sàng trong một khu vực mà không cần thay đổi cấu hình    | có những rủi ro liên quan đến truyền dữ liệu trực tiếp                       |

##### AWS RDS so với AWS Aurora: So sánh tính năng

| Tính năng         | RDS                                                                                                                                                      | Aurora                                                                                                                                                          |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| terms of features | là một dịch vụ cơ sở dữ liệu quan hệ được quản lý hoàn toàn hỗ trợ sáu công cụ cơ sở dữ liệu phổ biến, bao gồm hai phiên bản MySQL, PostgreSQL và Oracle | là một dịch vụ cơ sở dữ liệu quan hệ hiệu suất cao độc quyền được thiết kế để mang lại hiệu suất cao với chi phí thấp hơn                                       |
| -                 | -                                                                                                                                                        | có khả năng chịu lỗi tích hợp và khả năng chuyển đổi dự phòng tự động                                                                                           |
| Về hiệu suất      | -                                                                                                                                                        | cung cấp độ trễ tốt hơn tới năm lần so với RDS và có thể thay đổi quy mô hoạt động được đóng gói mỗi giây nhiều hơn tới mười lần so với công cụ MySQL trong RDS |

##### AWS RDS so với Aurora: So sánh hiệu năng

| Hiệu năng           | RDS                                                                                                                                                                                                                                                                                                                                                    | Aurora                                                                                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -                   | Amazon RDS có một vài lợi thế khác biệt. Nó cung cấp một loạt các loại phiên bản từ nhiều thế hệ công nghệ bộ xử lý, bao gồm bộ xử lý Intel Xeon E5 và bộ xử lý Intel Xeon Scalable (Skylake). Nó cũng cho phép bạn linh hoạt thiết lập bản sao chỉ có quyền đọc để tăng thông lượng đọc, cũng như điều chỉ4nh các thông số khác để nâng cao hiệu suất | -                                                                                                                                                                   |
| SSD                 | Amazon RDS cũng cung cấp các tùy chọn lưu trữ sử dụng SSD có thể nâng cao hiệu năng                                                                                                                                                                                                                                                                    | cung cấp dung lượng lưu trữ lớn hơn với ổ SSD riêng                                                                                                                 |
| -                   | cung cấp nhiều loại phiên bản từ nhiều thế hệ công nghệ bộ xử lý                                                                                                                                                                                                                                                                                       | cung cấp các tính năng như bộ nhớ đệm truy vấn, thực thi truy vấn song song, phân vùng bảng, bộ nhớ đệm và tối ưu hóa chỉ mục để giúp tối ưu hóa hiệu năng truy vấn |
| tối ưu hóa truy vấn | -                                                                                                                                                                                                                                                                                                                                                      | cung cấp hiệu năng tốt hơn RDS khi nói đến xử lý dữ liệu và tối ưu hóa truy vấn                                                                                     |

##### AWS RDS so với AWS Aurora: Những lưu ý về bảo mật

| Bảo mật | RDS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Aurora                                                                                                                                                                                                                                                                                                                                                                                                                           |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -       | RDS là cơ sở dữ liệu quan hệ truyền thống, vì vậy AWS RDS cung cấp một số biện pháp bảo mật có thể được triển khai để giữ an toàn cho dữ liệu của bạn. Nó hỗ trợ kiểm soát truy cập với Xác thực đa yếu tố (MFA), xác thực bởi người dùng Quản lý danh tính và truy cập (IAM). Dịch vụ này cũng hỗ trợ mã hóa để lưu trữ và sao lưu thông qua các khóa do Amazon Key Management Service (KMS) quản lý. Hơn nữa, nó có hỗ trợ cho các nhóm bảo mật VPC có thể giới hạn những người có quyền truy cập vào phiên bản cơ sở dữ liệu của bạn. | Aurora là dịch vụ cung cấp cơ sở dữ liệu đám mây được quản lý toàn phần, cung cấp một số tính năng bảo mật như: * Mã hóa dữ liệu đang truyền qua SSL/TLS để kết nối với phiên bản cơ sở dữ liệu của bạn * Mã hóa dữ liệu lưu trữ bằng khóa mã hóa được quản lý bởi AWS Key Management Service (KMS) * Xác thực bằng thông tin xác thực người dùng IAM hoặc MFA * Nó cũng hỗ trợ các nhóm bảo mật VPC để kiểm soát truy cập mạng. |

Cả hai dịch vụ đều cung cấp các tùy chọn mã hóa và xác thực dữ liệu mạnh mẽ, nhưng chúng có một số khác biệt rõ rệt.

##### AWS RDS so với AWS Aurora: Ưu điểm và nhược điểm

| AWS RDS | Ưu điểm                                                                             | Nhược điểm                                                                                                                |
|---------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| -       | Cung cấp một loạt các tính năng và sao lưu được quản lý để khôi phục theo thời điểm | Khả năng mở rộng hạn chế và khả năng mở rộng theo chiều ngang vì RDS không hỗ trợ phân mảnh                               |
| -       | Cung cấp các chỉ số và báo cáo hiệu suất để giám sát cơ sở hạ tầng chặt chẽ         | Tính khả dụng hạn chế do một điểm lỗi duy nhất, mặc dù triển khai Multi-AZ có thể giảm thiểu điều này với chi phí bổ sung |
| -       | -                                                                                   | Chi phí cao hơn, đặc biệt là đối với các tính năng nâng cao như bản sao chỉ có quyền đọc                                  |

Việc lựa chọn giữa AWS RDS và Aurora có thể phụ thuộc vào nhu cầu và sở thích chính của bạn. Cả hai đều là dịch vụ cơ sở dữ liệu mạnh mẽ, nhưng mỗi dịch vụ đều có ưu và nhược điểm riêng.

| AWS Aurora | Ưu điểm                                                                                                            | Nhược điểm                                                                                                                          |
|------------|--------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| -          | Cung cấp hiệu suất tốt hơn tới 5 lần so với cơ sở dữ liệu truyền thống                                             | Tùy chỉnh hạn chế do công cụ cơ sở dữ liệu độc quyền                                                                                |
| -          | Cung cấp tối đa 15 bản sao chỉ có quyền đọc có độ trễ thấp trên nhiều Vùng sẵn sàng                                | Dụng cụ hạn chế do tính mới tương đối của công nghệ                                                                                 |
| -          | Hỗ trợ cả công cụ cơ sở dữ liệu MySQL và PostgreSQL                                                                | Nhà cung cấp tiềm năng bị khóa do công nghệ độc quyền, điều này có thể khiến việc di chuyển ra khỏi tương lai trở nên khó khăn hơn. |
| -          | Cung cấp các bản sao lưu được quản lý với các điều khoản để khôi phục hoặc khôi phục cơ sở dữ liệu trong tương lai | -                                                                                                                                   |

##### Kết thúc

Tóm lại, khi lựa chọn giữa AWS RDS và AWS Aurora, điều quan trọng là phải xem xét nhu cầu của ứng dụng và ngân sách của bạn. AWS RDS là lựa chọn tuyệt vời cho những ai đang tìm kiếm các phiên bản cơ sở dữ liệu được quản lý nhiều hơn. Ngược lại, Aurora tốt hơn cho những người đang tìm kiếm một giải pháp hiệu quả về chi phí và hiệu quả. Cả hai đều cung cấp khả năng mở rộng và tính khả dụng tuyệt vời cho các trường hợp sử dụng tương ứng của chúng. Hơn nữa, cả hai đều được hỗ trợ bởi độ tin cậy của cơ sở hạ tầng đám mây của Amazon.

Cho dù bạn chọn cái nào, điều quan trọng là phải hiểu các phương pháp hay nhất liên quan đến hiệu suất và khả năng mở rộng. Với sự trợ giúp của các công cụ phù hợp, chẳng hạn như Amazon CloudWatch, bạn có thể đảm bảo phiên bản AWS RDS hoặc Aurora của mình luôn chạy ở hiệu năng cao nhất.

