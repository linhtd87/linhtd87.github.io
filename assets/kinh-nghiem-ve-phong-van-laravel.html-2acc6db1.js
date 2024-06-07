import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as h,f as c}from"./app-0b92410d.js";const i={},e=c(`<h1 id="kinh-nghiem-ve-phong-van-laravel" tabindex="-1"><a class="header-anchor" href="#kinh-nghiem-ve-phong-van-laravel" aria-hidden="true">#</a> Kinh nghiệm về phỏng vấn Laravel</h1><h2 id="kinh-nghiem-lam-viec" tabindex="-1"><a class="header-anchor" href="#kinh-nghiem-lam-viec" aria-hidden="true">#</a> Kinh nghiệm làm việc</h2><table><thead><tr><th>Q</th><th>A</th></tr></thead><tbody><tr><td>Bạn đã sử dụng Laravel mấy?</td><td>-</td></tr><tr><td>Bạn đã làm việc với Laravel bao nhiêu năm?</td><td>-</td></tr><tr><td>Bạn sử dụng được những ngôn ngữ nào ?</td><td>-</td></tr></tbody></table><h2 id="co-ban-ve-lap-trinh-php" tabindex="-1"><a class="header-anchor" href="#co-ban-ve-lap-trinh-php" aria-hidden="true">#</a> Cơ bản về lập trình PHP</h2><table><thead><tr><th>Q</th><th>A</th></tr></thead><tbody><tr><td>Session là gì? Cookie là gì ? So sánh sự khác nhau giữa Session và Cookie.</td><td>Session là một phiên làm việc của người dùng. Nó được dùng để lưu trữ thông tin được sử dụng xuyên suốt trong nhiều trang web.được lưu trên server. Cookie là khái niệm/cách lưu thông tin tạm thời ở máy người dùng, được gửi lên server khi người dùng truy cập web.</td></tr><tr><td>PHPUnit là gì? Unit Test là gì? Integration Testing là gì ?</td><td>- PHPUnit là một gói thư viện mã nguồn mở sử dụng trong Unit testing với ngôn ngữ PHP - Unit Test là kiểm thử ở mức đơn vị, mà mỗi đơn vị ở đây chính là các Method, function, class - Integration Test là Kiểm thử tích hợp các thành phần một ứng dụng, được thực hiện sau Unit test</td></tr><tr><td>Hàm serialize() trong PHP</td><td>Hàm serialize() trong PHP sẽ mã hóa giá trị biến truyền vào thành một chuỗi đặc biệt, hàm trả về kết quả là chuỗi được mã hóa.</td></tr></tbody></table><pre><code>sự khác nhau giữa serialize và json_encode	&quot;json_encode: là phương thức dùng để chuyển đổi một mảng(Array) hoặc Object thành string(chuỗi) dữ liệu JSON để sử dụng khi lưu trữ trong database, và để chuyển đổi ngược lại ta dùng json_decode để chuyển đổi một chuỗi dữ liệu JSON sang dạng mảng(Array) hoặc object để sử dụng trong code PHP.
</code></pre><p>&quot;<br> serialize(array): là phương thức dùng để chuyển một mảng(Array) hoặc Object thành string(chuỗi) dữ liệu theo chuẩn của PHP để ta có thể lưu trữ hoặc truyền tải, khi muốn chuyển nó lại thành lại một mảng hoặc phương thức ta dùng phương thức unserialize().</p><p>Laravel cơ bản</p><pre><code>Có bao nhiêu cách query trong Laravel?	Có hai cách query trong Laravel bao gồm: Query builder và Eloquent.
Middleware là gì?	Trong Laravel thì Middleware như người trung gian giữa: request và response. Middleware là loại cơ chế lọc HTTP request. 
Queue là gì ?	Một hàng đợi (queue) là một danh sách những việc cần làm (job) được quản lý theo thứ tự 
Khi nào sử dung Queue?	công việc đòi hỏi thời gian nhiều
Bạn hãy giải thích cách Queue Job hoạt động.	
Sự khác nhau của toán tử &amp; và &amp;&amp; trong PHP là gì?	Toán tử &amp; và &amp;&amp; trong PHP đều là phép toán AND. 
	Tuy nhiên toán tử một dấu &amp; áp dụng theo kiểu bit, nói dễ hiểu hơn một dấu &amp; là phép AND thao tác trên các bit. 
	Phép toán &amp;&amp; chỉ áp dụng cho kiểu boolean True và False. 
Hàm lambda trong PHP là gì?	Hàm lambda, là một anonymous function (hàm ẩn danh) nó có thể khai báo,định nghĩa ở bất kỳ đâu và không có khả năng tái sử dụng.
	chỉ tồn tại trong phạm vi mà nó định nghĩa, vì vậy nếu như sử dụng nó ngoài phạm vì thì hàm này sẽ không còn tác dụng nữa
	có thể gán vào 1 biến để sử dụng
Closure là gì	giống một lambda
	nhưng closure có thêm chức năng là có thể sử dụng các biến bên ngoài phạm vi mà nó được tạo ra
	có từ khoá use phía sau tên của hàm
	&quot;function (argument) use (scope) {
//code
</code></pre><p>}&quot;</p><pre><code>Rate Limiting/Throttle là gì?	hạn chế (limit) số lượng request gửi/nhận (rate) đến hệ thống
Lazy Collection là gì?	Lazy Collection là một tính năng mới được thêm vào phiên bản Laravel 6.0 cho phép ta làm việc với bộ dữ liệu lớn và duy trì bộ nhớ sử dụng lợi dụng PHP Generators.
Tác dụng Lazy COllection	
Soft Delete là gì?	
</code></pre><p>Lập trình OOP trong PHP PHP có phải là ngôn ngữ lập trình hướng đối tượng không? Có<br> Liệt kê tính chất của Lập trình hướng đối tương Trừu tượng hóa (Abstraction)<br> Đóng gói (Encapsulation)<br> Kế thừa (Inheritance)<br> Đa hình (Polymorphism)<br> override là gì ? Overide là việc lớp con ghi đè phương thức của lớp cha<br> Có thể override 1 static method không Không.</p><pre><code>Từ khóa final trong PHP là gì?	Từ khóa final được giới thiệu trong phiên bản PHP 5. Từ khóa final (có nghĩa là cuối cùng) trong PHP được sử dụng để đánh dấu một lớp hoặc một hàm là cuối cùng. Nếu một lớp được đánh dấu là final, nó không thể được mở rộng (extends) để sử dụng các thuộc tính hoặc phương thức của nó
Từ khóa static trong PHP là gì?	Static trong lập trình hướng đối tượng là một thành phần tĩnh (có thể là thuộc tính hoặc phương thức) mà nó hoạt động như một biến toàn cục, dù cho nó có được xử lý ở trong bất kỳ một file nào đi nữa
Interface trong PHP là gì?	Interface là một cách để cung cấp việc thực hiện các chức năng khác nhau theo yêu cầu của người dùng. Interface cũng có thể được hiểu như là bản thiết kế của các cấu trúc cần thiết
Khi nào dùng $this→ và self::	
	
Có thể tạo bao nhiêu thể hiện cho một lớp trừu tượng?	Không.  Không thể tạo một thể hiện với một lớp trừu tượng
</code></pre><p>Các nguyên tắc lập trình Nguyên tắc DRY &quot;DRY = Don’t Repeat Yourself</p><p>Nguyên tắc này có nghĩa là đừng có viết lặp bất kỳ lại một đoạn mã nào mà hãy đóng gói nó thành phương thức riêng&quot;</p><pre><code>Nguyên tắc SOLID	S – Single Responsibility Principle (Nguyên tắc trách nhiệm duy nhất)​
	O – Open closed design principle (Thiết kế Đóng, Mở)
	L – Liskov substitution principle (Nguyên tắc thay thế Liskov)
	I –  Interface segregation principle (Nguyên tắc chia nhỏ interface)
	D – Dependency inversion principle (Nguyên tắc đảo ngược phụ thuộc)
</code></pre><p>Javascript <br> &quot;let number = 0;<br> console.log(number++);<br> console.log(++number);<br> console.log(number);&quot; 1 1 2<br> Dữ liệu được lưu trữ trong sessionStorage bị xóa khi nào? Khi người dùng đóng tab.<br> &quot;var a = 0;<br> let b = 0;<br> const c = 0;<br> if (true) {<br> var a = 1;<br> let b = 1;<br> const c = 1;<br> }<br> console.log(a);<br> console.log(b);<br> console.log(c);&quot; &quot;console.log(a); // 1<br> console.log(b); // 0<br> console.log(c); // 0<br> &quot;<br> Kể tên 1 số method built-in của class Array <br> Sự khác biệt giữa map và forEach Sự khác biệt ở đây là map tạo ra một mảng mới trong khi forEach thì không<br> Làm cách nào để kiểm tra xem một chuỗi có chứa một chuỗi con hay không? includes hoặc indexOf</p><p>DB Phân biệt Inner join, Outer join, left join, right join, full join INNER JOIN: Trả về các bản ghi có những giá trị phù hợp trong cả hai bảng.<br> LEFT (OUTER) JOIN: Trả về tất cả bản ghi từ bảng bên trái và bản ghi trùng với bảng bên phải<br> RIGHT (OUTER) JOIN: Trả về tất cả bản ghi từ bảng bên phải và bản ghi trùng với bản bên trái<br> FULL (OUTER) JOIN: Trả về tất cả bản ghi khi có một kết quả phù hợp trong bảng bên trái hoặc bên phải.</p><pre><code>Giải thích UNION	toán tử UNION và UNION ALL được dùng để gộp tập kết quả của hai hay nhiều câu lệnh truy vấn dữ liệu (SELECT) lại với nhau.
Stored procedure là cái gì?	Là đoạn chương trình kịch bản (programming scripts) với các câu lệnh SQL nhúng (embedded SQL) được lưu dưới dạng đã được biên dịch và thi hành thực tiếp bởi MySQL server,
	SP cho phép lưu trữ các logic ứng dụng trên CSDL. Khi gọi SP lần đầu tiên, MySQL sẽ tạo một lịch thực thi và lưu trữ nó trong bộ nhớ đệm. Ở những lần gọi hàm tiếp theo, MySQL sử dụng sử dựng lại lịch thực thi được lưu rất nhanh với hiệu xuất đáng tin cậy.
Vì sao nên dùng Stored procedure	Giảm dư thừa mã chương trình (PHP/JAVA,..)
	Cải thiện tốc độ thực thi câu lệnh SQL
	An ninh CSDL tốt hơn
Nhược điểm của Stored procedure	Thiếu tính khả chuyển (khó chuyển qua DB khác)
	gây quá tải DB server
	Hạn chế ngôn ngữ lập trình
Giải thích HAVING	câu lệnh Having trong SQL  được dùng để áp dụng một bộ lọc trên kết quả của GROUP BY dựa trên điều kiện cụ thể
</code></pre><p>Security Tấn công XSS là gì? nhúng mã đọc Javacsript, VBScript, ActiveX, HTML, hoặc Flash vào một trang<br> tấn công trực tiếp từ phía người dùng bằng cách xâm nhập hệ thống bằng các đoạn mã đơn giản để lấy cắp cookies và session<br> Cách ngăn chặn XSS filter input và escape output<br> dùng filter HTML Purifier</p><pre><code>Lỗi SQL Injection là gì?	SQL Injection là một kỹ thuật lợi dụng những lỗ hổng về câu truy vấn của các ứng dụng. Được thực hiện bằng cách chèn thêm một đoạn SQL để làm sai lệnh đi câu truy vấn ban đầu, từ đó có thể khai thác dữ liệu từ database
	
	
Liệt kệ vài biện pháp giảm thiểu hoặc phòng tránh SQL Injection	
CSRF là gì ?	CSRF là kỹ thuật tấn công “Cross-site Request Forgery“, nghĩa là kỹ thuật tấn công giả mạo chính chủ thể của nó
Liệt kê vài biện pháp ngăn chặn tấn công CSRF	Dùng CSRF token cho mỗi Form
	Dùng đúng method GET/POST
	Dùng captcha
	Kiểm tra Referer
	Kiểm tra IP
</code></pre><p>Các tình huống xử lý Khi website bị chậm bạn phải làm gì Code không tối ưu<br> sql chưa tối ưu<br> Nếu có nhiều task chạy đồng thời , thì giải quyết làm sao? Queue<br> Exec command</p><pre><code>Redis là gì ? Khi nào cần sử dụng Redis ?	
	
&quot;Bài toán 1: cần truyền 1 tham số là mảng 1 triệu số nguyên lên server thông qua 1 request.
</code></pre><p>Cách 1: chọn upload file CSV chứa 1 cột là 1 triệu số nguyên đó.<br> Cách 2: chọn truyền thông qua request API JSON, phương thức POST, tham số là mảng số nguyên nằm trong body của request.<br> Bạn chọn cách nào và giải thích.&quot; &quot;Cách 1: chọn uploads file CSV (FormData)<br> &quot;<br> Cách 2: chọn request API JSON<br> Cách khác...<br> &quot;Bài toán 2: cần import 1 file CSV có 10 cột và 1 triệu dòng vô DB với yêu cầu sau đây:</p><ol><li>Mỗi dòng của CSV, có 1 cột member_id, tham chiếu đến bảng &quot;&quot;members&quot;&quot; trong DB, lấy cột &quot;&quot;name&quot;&quot;, và cũng đc import vô bảng &quot;&quot;answers&quot;&quot; trong DB.</li></ol><p>Bạn làm như thế nào và giải thích cách làm.&quot; Cách 1: chuyển đổi file CSV và import<br> Cách 2: import vô bảng &quot;answers_temp&quot; , rồi viết truy vấn INSERT..SELECT..<br> Cách 3: khác...</p><p>Deployment &amp; AWS</p>`,27),r=[e];function g(o,a){return t(),h("div",null,r)}const d=n(i,[["render",g],["__file","kinh-nghiem-ve-phong-van-laravel.html.vue"]]);export{d as default};
