---
# This is the title of the article
title: Kinh nghiệm về phỏng vấn Laravel
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
  - laravel
  - interview
  - Kinh nghiệm về phỏng vấn Laravel
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: Mr.Linh
---

# Kinh nghiệm về phỏng vấn Laravel

## Kinh nghiệm làm việc

| Q                                          | A |
|--------------------------------------------|---|
| Bạn đã sử dụng Laravel mấy?                | - |
| Bạn đã làm việc với Laravel bao nhiêu năm? | - |
| Bạn sử dụng được những ngôn ngữ nào ?      | - |

## Cơ bản về lập trình PHP

| Q                                                                          | A                                                                                                                                                                                                                                                                                      |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Session là gì? Cookie là gì ? So sánh sự khác nhau giữa Session và Cookie. | Session là một phiên làm việc của người dùng. Nó được dùng để lưu trữ thông tin được sử dụng xuyên suốt trong nhiều trang web.được lưu trên server. Cookie là khái niệm/cách lưu thông tin tạm thời ở máy người dùng, được gửi lên server khi người dùng truy cập web.                 |
| PHPUnit là gì? Unit Test là gì? Integration Testing là gì ?                | - PHPUnit là một gói thư viện mã nguồn mở sử dụng trong Unit testing với ngôn ngữ PHP - Unit Test là kiểm thử ở mức đơn vị, mà mỗi đơn vị ở đây chính là các Method, function, class - Integration Test là Kiểm thử tích hợp các thành phần một ứng dụng, được thực hiện sau Unit test |
| Hàm serialize() trong PHP                                                  | Hàm serialize() trong PHP sẽ mã hóa giá trị biến truyền vào thành một chuỗi đặc biệt, hàm trả về kết quả là chuỗi được mã hóa.                                                                                                                                                         |


	sự khác nhau giữa serialize và json_encode	"json_encode: là phương thức dùng để chuyển đổi một mảng(Array) hoặc Object thành string(chuỗi) dữ liệu JSON để sử dụng khi lưu trữ trong database, và để chuyển đổi ngược lại ta dùng json_decode để chuyển đổi một chuỗi dữ liệu JSON sang dạng mảng(Array) hoặc object để sử dụng trong code PHP.
"
		serialize(array): là phương thức dùng để chuyển một mảng(Array) hoặc Object thành string(chuỗi) dữ liệu theo chuẩn của PHP để ta có thể lưu trữ hoặc truyền tải, khi muốn chuyển nó lại thành lại một mảng hoặc phương thức ta dùng phương thức unserialize().
		
		
Laravel cơ bản		
		
		
	Có bao nhiêu cách query trong Laravel?	Có hai cách query trong Laravel bao gồm: Query builder và Eloquent.
	Middleware là gì?	Trong Laravel thì Middleware như người trung gian giữa: request và response. Middleware là loại cơ chế lọc HTTP request. 
	Queue là gì ?	Một hàng đợi (queue) là một danh sách những việc cần làm (job) được quản lý theo thứ tự 
	Khi nào sử dung Queue?	công việc đòi hỏi thời gian nhiều
	Bạn hãy giải thích cách Queue Job hoạt động.	
	Sự khác nhau của toán tử & và && trong PHP là gì?	Toán tử & và && trong PHP đều là phép toán AND. 
		Tuy nhiên toán tử một dấu & áp dụng theo kiểu bit, nói dễ hiểu hơn một dấu & là phép AND thao tác trên các bit. 
		Phép toán && chỉ áp dụng cho kiểu boolean True và False. 
	Hàm lambda trong PHP là gì?	Hàm lambda, là một anonymous function (hàm ẩn danh) nó có thể khai báo,định nghĩa ở bất kỳ đâu và không có khả năng tái sử dụng.
		chỉ tồn tại trong phạm vi mà nó định nghĩa, vì vậy nếu như sử dụng nó ngoài phạm vì thì hàm này sẽ không còn tác dụng nữa
		có thể gán vào 1 biến để sử dụng
	Closure là gì	giống một lambda
		nhưng closure có thêm chức năng là có thể sử dụng các biến bên ngoài phạm vi mà nó được tạo ra
		có từ khoá use phía sau tên của hàm
		"function (argument) use (scope) {
    //code
}"
		
		
		
	Rate Limiting/Throttle là gì?	hạn chế (limit) số lượng request gửi/nhận (rate) đến hệ thống
	Lazy Collection là gì?	Lazy Collection là một tính năng mới được thêm vào phiên bản Laravel 6.0 cho phép ta làm việc với bộ dữ liệu lớn và duy trì bộ nhớ sử dụng lợi dụng PHP Generators.
	Tác dụng Lazy COllection	
	Soft Delete là gì?	
		
Lập trình OOP trong PHP	PHP có phải là ngôn ngữ lập trình hướng đối tượng không?	Có
	Liệt kê tính chất của Lập trình hướng đối tương	Trừu tượng hóa (Abstraction)
		Đóng gói (Encapsulation)
		Kế thừa (Inheritance)
		Đa hình (Polymorphism)
	override là gì ?	Overide là việc lớp con ghi đè phương thức của lớp cha
	Có thể override 1 static method không	Không.
		
		
		
		
	Từ khóa final trong PHP là gì?	Từ khóa final được giới thiệu trong phiên bản PHP 5. Từ khóa final (có nghĩa là cuối cùng) trong PHP được sử dụng để đánh dấu một lớp hoặc một hàm là cuối cùng. Nếu một lớp được đánh dấu là final, nó không thể được mở rộng (extends) để sử dụng các thuộc tính hoặc phương thức của nó
	Từ khóa static trong PHP là gì?	Static trong lập trình hướng đối tượng là một thành phần tĩnh (có thể là thuộc tính hoặc phương thức) mà nó hoạt động như một biến toàn cục, dù cho nó có được xử lý ở trong bất kỳ một file nào đi nữa
	Interface trong PHP là gì?	Interface là một cách để cung cấp việc thực hiện các chức năng khác nhau theo yêu cầu của người dùng. Interface cũng có thể được hiểu như là bản thiết kế của các cấu trúc cần thiết
	Khi nào dùng $this→ và self::	
		
	Có thể tạo bao nhiêu thể hiện cho một lớp trừu tượng?	Không.  Không thể tạo một thể hiện với một lớp trừu tượng
		
		
		
		
		
		
Các nguyên tắc lập trình	Nguyên tắc DRY	"DRY = Don’t Repeat Yourself

Nguyên tắc này có nghĩa là đừng có viết lặp bất kỳ lại một đoạn mã nào mà hãy đóng gói nó thành phương thức riêng"
		
	Nguyên tắc SOLID	S – Single Responsibility Principle (Nguyên tắc trách nhiệm duy nhất)​
		O – Open closed design principle (Thiết kế Đóng, Mở)
		L – Liskov substitution principle (Nguyên tắc thay thế Liskov)
		I –  Interface segregation principle (Nguyên tắc chia nhỏ interface)
		D – Dependency inversion principle (Nguyên tắc đảo ngược phụ thuộc)
Javascript		
	"let number = 0;
console.log(number++);
console.log(++number);
console.log(number);"	1 1 2
	Dữ liệu được lưu trữ trong sessionStorage bị xóa khi nào?	Khi người dùng đóng tab.
	"var a = 0; 
let b = 0;
const c = 0;
if (true) {
  var a = 1;
  let b = 1; 
  const c = 1;
}
console.log(a);
console.log(b);
console.log(c);"	"console.log(a); // 1
console.log(b); // 0
console.log(c); // 0
"
	Kể tên 1 số method built-in của class Array	
	Sự khác biệt giữa map và forEach	Sự khác biệt ở đây là map tạo ra một mảng mới trong khi forEach thì không
	Làm cách nào để  kiểm tra xem một chuỗi có chứa một chuỗi con hay không?	includes hoặc indexOf
		
		
DB	Phân biệt Inner join, Outer join, left join, right join, full join	INNER JOIN: Trả về các bản ghi có những giá trị phù hợp trong cả hai bảng.
		LEFT (OUTER) JOIN: Trả về tất cả bản ghi từ bảng bên trái và bản ghi trùng với bảng bên phải
		RIGHT (OUTER) JOIN: Trả về tất cả bản ghi từ bảng bên phải và bản ghi trùng với bản bên trái
		FULL (OUTER) JOIN: Trả về tất cả bản ghi khi có một kết quả phù hợp trong bảng bên trái hoặc bên phải.
		
	Giải thích UNION	toán tử UNION và UNION ALL được dùng để gộp tập kết quả của hai hay nhiều câu lệnh truy vấn dữ liệu (SELECT) lại với nhau.
	Stored procedure là cái gì?	Là đoạn chương trình kịch bản (programming scripts) với các câu lệnh SQL nhúng (embedded SQL) được lưu dưới dạng đã được biên dịch và thi hành thực tiếp bởi MySQL server,
		SP cho phép lưu trữ các logic ứng dụng trên CSDL. Khi gọi SP lần đầu tiên, MySQL sẽ tạo một lịch thực thi và lưu trữ nó trong bộ nhớ đệm. Ở những lần gọi hàm tiếp theo, MySQL sử dụng sử dựng lại lịch thực thi được lưu rất nhanh với hiệu xuất đáng tin cậy.
	Vì sao nên dùng Stored procedure	Giảm dư thừa mã chương trình (PHP/JAVA,..)
		Cải thiện tốc độ thực thi câu lệnh SQL
		An ninh CSDL tốt hơn
	Nhược điểm của Stored procedure	Thiếu tính khả chuyển (khó chuyển qua DB khác)
		gây quá tải DB server
		Hạn chế ngôn ngữ lập trình
	Giải thích HAVING	câu lệnh Having trong SQL  được dùng để áp dụng một bộ lọc trên kết quả của GROUP BY dựa trên điều kiện cụ thể
		
Security	Tấn công XSS là gì?	nhúng mã đọc Javacsript, VBScript, ActiveX, HTML, hoặc Flash vào một trang
		tấn công trực tiếp từ phía người dùng bằng cách xâm nhập hệ thống bằng các đoạn mã đơn giản để lấy cắp cookies và session
	Cách ngăn chặn XSS	filter input và escape output
		dùng filter HTML Purifier
		
	Lỗi SQL Injection là gì?	SQL Injection là một kỹ thuật lợi dụng những lỗ hổng về câu truy vấn của các ứng dụng. Được thực hiện bằng cách chèn thêm một đoạn SQL để làm sai lệnh đi câu truy vấn ban đầu, từ đó có thể khai thác dữ liệu từ database
		
		
	Liệt kệ vài biện pháp giảm thiểu hoặc phòng tránh SQL Injection	
	CSRF là gì ?	CSRF là kỹ thuật tấn công “Cross-site Request Forgery“, nghĩa là kỹ thuật tấn công giả mạo chính chủ thể của nó
	Liệt kê vài biện pháp ngăn chặn tấn công CSRF	Dùng CSRF token cho mỗi Form
		Dùng đúng method GET/POST
		Dùng captcha
		Kiểm tra Referer
		Kiểm tra IP
		
Các tình huống xử lý	Khi website bị chậm bạn phải làm gì	Code không tối ưu
		sql chưa tối ưu
	Nếu có nhiều task chạy đồng thời , thì giải quyết làm sao?	Queue
		Exec command
		
	Redis là gì ? Khi nào cần sử dụng Redis ?	
		
	"Bài toán 1: cần truyền 1 tham số là mảng 1 triệu số nguyên lên server thông qua 1 request.
Cách 1: chọn upload file CSV chứa 1 cột là 1 triệu số nguyên đó.
Cách 2: chọn truyền thông qua request API JSON, phương thức POST, tham số là mảng số nguyên nằm trong body của request.
Bạn chọn cách nào và giải thích."	"Cách 1: chọn uploads file CSV (FormData)
"
		Cách 2: chọn request API JSON
		Cách khác...
	"Bài toán 2: cần import 1 file CSV có 10 cột và 1 triệu dòng vô DB với yêu cầu sau đây:

1. Mỗi dòng của CSV, có 1 cột member_id, tham chiếu đến bảng ""members"" trong DB, lấy cột ""name"", và cũng đc import vô bảng ""answers"" trong DB.

Bạn làm như thế nào và giải thích cách làm."	Cách 1: chuyển đổi file CSV và import
		Cách 2: import vô bảng "answers_temp" , rồi viết truy vấn INSERT..SELECT..
		Cách 3: khác...
		
Deployment  & AWS		
		
