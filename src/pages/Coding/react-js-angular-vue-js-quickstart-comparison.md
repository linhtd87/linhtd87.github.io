---

# This is the title of the article

title: React JS, Angular & Vue JS - Quickstart & Comparison

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

- course
- React JS, Angular & Vue JS - Quickstart & Comparison

# this page is sticky in article list

sticky: true

# this page will appear in starred articles

star: true

# You can customize copyright content

copyright: No Copyright
---

# [Course] React JS, Angular & Vue.js - Quickstart & Comparison

## Section 1: Getting Started

### Introduction

### The goal of the course

Mục tiêu của khóa học này là gì?

Vậy đây là bạn hay tôi?

Khi tôi bắt đầu làm việc với JavaScript và khi tôi đi sâu vào thế giới đó, bạn có thể có một nền tảng JavaScript vững
chắc.

hiểu biết, bạn có thể biết JavaScript.

Đó là điều kiện tiên quyết cơ bản bạn phải đáp ứng.

Bạn không cần phải là chuyên gia, nhưng bạn nên biết JavaScript nên biết những điều cơ bản.

Bạn có thể là người dùng JavaScript nâng cao và thậm chí biết framework là gì và vai trò của chúng.

Hoặc thậm chí bạn có thể biết một framework cụ thể như Angular.

Vì vậy, hãy thực sự là một nhà phát triển nâng cao nhưng vẫn có cả thế giới JavaScript và tất cả các gói này

và các công cụ chúng tôi có ở đó có thể khiến bạn bối rối.

Vì vậy, nếu bất kỳ vai trò nào trong ba vai trò này phù hợp với bạn thì điều mà khóa học này sẽ mang lại cho bạn là bạn
sẽ hiểu được

vai trò của JavaScript trong thế giới ngày nay và cả thế giới, hệ sinh thái của JavaScript.

Bạn sẽ hiểu những thuật ngữ này có ý nghĩa gì và chúng phối hợp với nhau như thế nào.

Cách Webpack hoạt động cùng với TypeScript, ES6, JavaScript vanilla, jQuery, Vue.js hoặc bất cứ thứ gì như thế. Tuy
nhiên, chúng tôi sẽ không dừng lại ở đó.

Bạn cũng sẽ tìm hiểu lý do tại sao chúng ta có thể muốn sử dụng các thư viện như jQuery hoặc Lodash, vai trò của các thư
viện này chơi, sau đó bạn sẽ tìm hiểu xem khung vai trò nào đóng vai trò gì và tại sao bạn có thể muốn chọn một khung và
có thể thay thế jQuery bằng một framework như Angular Vue hoặc React.

Bên cạnh những framework này, chúng ta cũng sẽ xem ES6, TypeScript và Webpack là gì và tại sao chúng ta có thể muốn sử
dụng điều đó, tại sao một số framework có thể cần các gói này. Và nói về các framework, tất nhiên bạn sẽ được giới thiệu
về ba khung này,

Tất nhiên là phần giới thiệu cơ bản nhưng phần giới thiệu này sẽ cho phép bạn sau đó chọn một hoặc nhiều các khuôn khổ
mà bạn có thể tìm hiểu sâu hơn trong các khóa học khác hoặc các tài nguyên trực tuyến khác mà bạn chọn để bạn có thể cảm
nhận được bạn thích framework nào?

Khung nào cung cấp một khái niệm mà bạn cảm thấy có ý nghĩa?

Bạn thích loại khung nào?

Đó là điều bạn sẽ có thể biết vào cuối khóa học để có thể đưa ra lựa chọn.

Chọn một khuôn khổ mà bạn muốn tìm hiểu sâu hơn.

Và như đã đề cập trước đó, bạn không chỉ có thể đưa ra lựa chọn mà còn hiểu được vai trò của chúng và vai trò của những
thứ khác trong thế giới JavaScript.

### Understanding of the role of JavaScript

Vai trò của JavaScript trong thế giới ngày nay là gì?

Bây giờ, xin lưu ý thêm, JavaScript có thể chạy trên máy chủ bằng JS.
Đó là một vai trò khác của JavaScript, một vai trò mà tôi sẽ không xem xét trong khóa học này vì khóa học này sẽ tập
trung vào phát triển JavaScript giao diện người dùng, trường hợp sử dụng JavaScript điển hình nhất và cũng là trường hợp
sử dụng mà chúng tôi có tất cả các khung và thư viện này.

Vì vậy, hãy hiểu cách JavaScript hoạt động hoặc lý do tại sao chúng ta sử dụng nó ngay từ đầu.
Chúng tôi đang ngồi trước máy của chúng tôi.
Chúng tôi là client.

Chúng tôi đang truy cập một trang web và chúng tôi làm như vậy bằng cách nhập một số URL vào trình duyệt của mình và sau
đó gửi yêu cầu đến máy chủ. Bây giờ, máy chủ có nghĩa là bất kỳ loại máy chủ nào đang chạy, bất kỳ loại ngôn ngữ phía
máy chủ nào, ví dụ: PHP, ASP.Net NodeJS hoặc Ruby on Rails, Python, v.v.

Điều đó không quan trọng đối với khóa học này.

Ngôn ngữ phía máy chủ hoàn toàn không thành vấn đề. Chúng ta sẽ xem xét giao diện người dùng của JavaScript. Nói về điều
đó, hiện tại chúng tôi chỉ gửi yêu cầu, nhưng tất nhiên chúng tôi muốn nhận được phản hồi. Vì vậy, chúng tôi có thể nhận
được phản hồi như vậy từ máy chủ. Và thông thường phản hồi này chứa một tài liệu HTML, một số mã HTML mà trình duyệt của
chúng tôi hiện có thể chuyển để tạo Dom, mô hình đối tượng tài liệu, về cơ bản là mã HTML được phân tích cú pháp được
trình duyệt hiển thị. Bây giờ, thông thường chúng tôi không chỉ lấy lại mã HTML mà mã này có thể bao gồm một số kiểu
dáng hoặc JavaScript hoặc có thể tham chiếu một số tệp JavaScript bên ngoài mà sau đó cũng được tải xuống.

Và đó là phần thú vị.

Nó bao gồm nó có thể bao gồm một số loại JavaScript và JavaScript chạy trên máy khách.

Vì vậy, ngôn ngữ phía máy chủ của chúng tôi ở đây chạy trên máy chủ ở đâu và do đó được thực hiện tại thời điểm đó chúng
tôi nhận được phản hồi, JavaScript vẫn có thể chạy khi chúng tôi ở trên trang đó và đó là lý do JavaScript rất phổ biến
ngày nay.

Vì nó chạy trên máy khách nên nó có thể thực thi mã mà không cần chúng tôi gửi yêu cầu mới, không cần chúng tôi tải lại
trang để có thể thay đổi trang sau khi tải xong.

Và điều đó cho phép chúng tôi tạo ra trải nghiệm người dùng tuyệt vời.

Bất cứ khi nào bạn thấy một phương thức mở ra trên một trang hoặc bất cứ khi nào có nội dung nào đó động, bất cứ khi nào
trang đó thay đổi trong thời gian chạy, có khả năng cao là JavaScript chịu trách nhiệm cho việc này, rằng bạn thực sự
máy chủ không nhận được trang mới mà thay vào đó các phần của trang đó đã được thay đổi bởi JavaScript.

Một số lớp CSS có thể đã được thay đổi hoặc các `component` hoàn toàn mới đã được thêm vào hoặc xóa khỏi `Dom`.

Đây là những gì JavaScript làm và nó được sử dụng như thế này khi chúng tôi có thiết lập phía máy chủ gửi lại cho chúng
tôi các trang nơi chúng tôi sử dụng JavaScript để nâng cao trải nghiệm người dùng hoặc và chúng tôi sẽ xem xét ở phần
sau của khóa học, thậm chí còn có một mô hình ngày càng trở nên phổ biến hơn trong đó JavaScript

chạy toàn bộ giao diện người dùng của chúng tôi để tạo một ứng dụng trang duy nhất trong đó chúng tôi chỉ lấy lại một
trang từ máy chủ và sau đó JavaScript thực hiện mọi thứ ở giao diện người dùng và chúng tôi chỉ thỉnh thoảng gửi những
thông tin hậu trường yêu cầu tới máy chủ, nhưng sẽ nói nhiều hơn về điều đó sau.

Nhưng đó chính là vai trò của JavaScript. Nó cho phép chúng ta thay đổi điều gì đó về trang sau khi nó được tải và do đó
nó rất quan trọng.
góp phần xây dựng trải nghiệm người dùng tuyệt vời vì nó phản ứng rất nhanh, rất nhanh và tức thời.
Bây giờ đó là vai trò của JavaScript.

Tiếp theo chúng ta hãy nhìn vào thế giới JavaScript.

### The world of Javascript

Chúng tôi đã tìm hiểu vai trò của JavaScript là gì.

Bây giờ chúng ta hãy nhìn vào thế giới JavaScript.

Chúng ta có JavaScript nguyên gốc ở trung tâm thế giới này và với JavaScript nguyên chất, ý tôi là JavaScript không có
bất kỳ thư viện nào, không có bất kỳ khuôn khổ hay công cụ nào khác mà chúng ta có thể biết và chúng ta sẽ tìm hiểu về
sau đó.

Tôi đang đề cập đến Es5. JavaScript. JavaScript có nhiều phiên bản khác nhau và Es5 đơn giản là phiên bản được hầu hết
các trình duyệt hỗ trợ. Có một phiên bản mới hơn có sẵn ES6. Tôi cũng sẽ quay lại vấn đề này sau. Và ES6 không được tất
cả các trình duyệt hỗ trợ, vì vậy bạn thường không viết mã ES6 và chạy nó như thế này trong các trình duyệt ngày nay.

Nhưng một lần nữa, sẽ nói thêm về điều này sau.

Hãy xây dựng một ứng dụng cơ bản với JavaScript nguyên bản để tìm hiểu những hạn chế có thể là gì và tại sao lại như vậy
có thể không phải là tất cả những gì chúng tôi cần để xây dựng ứng dụng này.

Tôi đang sử dụng Jsfiddle.net và Jsfiddle.net đơn giản chỉ là một trình soạn thảo trên web, có thể nói như vậy. Bạn
thường không sử dụng để xây dựng các ứng dụng thực tế, nhưng đó là một sân chơi thú vị.

Ở đây chúng ta có thể viết mã HTML JavaScript và CSS và do đó chúng ta có thể mô phỏng trường hợp chúng ta có một máy
chủ sẽ gửi lại cho chúng tôi một trang, một trang duy nhất ở đây và hãy viết một số mã HTML.

Câu hỏi đặt ra là chúng ta muốn xây dựng ứng dụng nào?

Và tôi sẽ bắt đầu tạo một ứng dụng đơn giản một cách cơ bản.

Tôi muốn tạo một ứng dụng rất cơ bản để làm.

Vì vậy, hãy bắt đầu tạo ứng dụng này trong bài giảng tiếp theo và sau đó chúng ta sẽ dần dần nâng cao nó.

### Using vanilla JavaScript & Understanding Its limitation (1/3)

Vì vậy, trong trình soạn thảo jsfiddle này, tôi muốn tạo một ứng dụng Todo cơ bản.
Vì vậy, hãy thêm đầu vào.

Và điều thú vị về jsfiddle là chúng ta có thể chỉ cần nhập dữ liệu đầu vào rồi nhấn enter để tạo `element` đầu vào gõ
văn
bản là được.

Chúng tôi cũng cần một nút để có thể gửi nút này để thêm vào việc cần làm.

```html
<input type="text">
<button>Add Todo</button>
```

Hoặc có thể hãy đặt chú thích là thêm việc cần làm và sau đó chúng ta cần một nơi nào đó có thể hiển thị tất cả những
thứ này

việc cần làm có lẽ là trong một danh sách không có thứ tự.

Đó là tất cả mã HTML tôi cần bây giờ.

Bây giờ, trong JavaScript, chúng ta cần có quyền truy cập vào tất cả các `element` này, tạo các mục danh sách mới và
thêm
chúng vào danh sách.

Vì vậy chúng ta hãy làm như vậy.

Bây giờ tôi sẽ tạo một biến ở đây mà tôi sẽ đặt tên là inputEl Tên tùy thuộc vào bạn. Tôi sẽ sử dụng
Document.queryselector một phương thức tích hợp mà JavaScript cung cấp cho phép tôi chọn một `element` bằng bộ chọn CSS
của nó và tôi chỉ có thể sử dụng đầu vào ở đây để chọn `element` này `element` đầu vào.

```javascript
var inputEl = document.querySelector('input');
```

Lưu ý phụ nếu đây là điều hoàn toàn mới đối với bạn, hãy nhớ tham gia một số khóa học dành riêng cho việc giảng dạy bạn
JavaScript.

Đây không phải là mục tiêu của khóa học này. Bạn sẽ không học JavaScript trong khóa học này. Tôi thực sự hy vọng bạn đã
biết về nó hoặc, như tôi vừa đề cập, có một khóa học nào đó mà bạn có thể theo dõi.

Dọc theo.
Khóa học này nhằm giúp bạn thực hiện bước tiếp theo, chọn khuôn khổ phù hợp cho công việc phát triển giao diện người
dùng.

Vì vậy, điều này chọn phần tử đầu vào.

Bây giờ chúng ta hãy thêm một nút vào nút Document.queryselector để có quyền truy cập vào nút đó trong dom. Cuối cùng,
tôi sẽ thêm Ul để có quyền truy cập vào danh sách không có thứ tự này. Vì vậy `querySelector('url')` sẽ cấp cho chúng ta
quyền truy cập vào nó.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');
```

Chúng tôi có quyền truy cập vào tất cả các yếu tố này.

Bây giờ chúng ta cần thêm trình xử lý sự kiện vào nút để bất cứ khi nào chúng ta nhấp vào nó, chúng ta sẽ thêm một việc
cần làm mới. Vì vậy, hãy lấy phần tử nút này, biến này ở đây và sử dụng trình nghe sự kiện bổ sung như trình nghe này để
thêm người nghe mới một sự kiện nhấp chuột. Và ở đây tôi muốn thực thi một chức năng mà tôi sẽ tạo ở đây.

Tôi sẽ đặt tên cho hàm này là `addTodo()` như thế này là một hàm JavaScript bình thường ở đây và bây giờ chúng ta có thể
chuyển một tham chiếu hàm này tới trình xử lý sự kiện dưới dạng đối số thứ hai.

`addTodo()` và đảm bảo không thêm dấu ngoặc đơn sau đó.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', addTodo);

function addTodo() {

}
```

Tôi chỉ muốn lưu trữ liên kết đến chức năng này nên có thể nói rằng tôi không muốn thực thi nó ở đây.

Vì vậy, ngoài việc bây giờ chúng ta có muốn tạo một mục danh sách mới không?

Vì vậy, tôi sẽ chỉ đặt tên `todoLi` để làm tên tùy thuộc vào bạn và ở đây tôi sẽ sử dụng `document.createElement`để tạo
ra một phần tử mới như vậy. Và ở đây chúng ta chỉ đơn giản chuyển tag, thẻ HTML của phần tử mà chúng ta muốn tạo.
Trong trường hợp này `li`.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var todoLi = document.createElement('LI');
}
```

Tất nhiên, bây giờ chúng ta cũng nên thêm bất cứ thứ gì người dùng đã nhập.

Vì vậy, chúng tôi cần tìm nạp nó và sẽ thực sự tìm nạp nó trước khi tạo mục danh sách này vì có thể người dùng đã không
nhập bất cứ điều gì.

Và trong trường hợp này mình không muốn tạo mục danh sách mới nên sẽ kiểm tra hoặc sẽ truy xuất người dùng nhập dữ liệu
đầu vào của người dùng từ phần tử đầu vào của chúng tôi và ở đó chúng tôi có thể truy cập thuộc tính giá trị.

Rất tiếc, `property` không phải `method`, là `property` mặc định được cung cấp bởi JavaScript trên các phần tử HTML đầu
vào.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    var todoLi = document.createElement('LI');
}
```

Bây giờ điều này mang lại cho chúng tôi giá trị tốt mà người dùng đã nhập.

Bây giờ tôi muốn kiểm tra xem cái này có trống không để tôi có thể kiểm tra dữ liệu nhập của người dùng và sau đó có thể
cắt bớt JavaScript tích hợp chức năng xóa tất cả khoảng trắng ở đầu hoặc cuối để chúng tôi loại trừ trường hợp người
dùng đã nhập chỉ có một vài khoảng trắng.

Vì vậy, sau đó tôi sẽ so sánh giá trị đã cắt bớt với một chuỗi trống. Và nếu chuỗi trống. Vì vậy, nếu người dùng không
nhập bất cứ thứ gì, tôi muốn `return`. Tôi không muốn tiếp tục thưc hiện.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var todoLi = document.createElement('LI');
}
```

Tuy nhiên, nếu chúng tôi có đầu vào hợp lệ, tôi muốn tạo mục danh sách này và sau đó tôi có thể nói danh sách việc cần
làm nội dung văn bản mục bây giờ đặt nội dung văn bản của mục danh sách mới được tạo này bằng với dữ liệu đầu vào của
người dùng.

Bây giờ, cuối cùng, với mục danh sách đã được tạo, chúng ta chỉ cần thêm nó vào Dom vào `unordered list` của mình, vì
vậy tôi có thể sử dụng biến `ulEl` chứa tham chiếu đến `unordered list` này trong Dom.

Và ở đó tôi có thể gọi `appendChild` để thêm mục danh sách việc cần làm này.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    ulEl.appendChild(todoLi);
}
```

Bây giờ đó là ứng dụng cơ bản của chúng tôi.

Bằng cách nhấn điều khiển, nhập vào `jsfiddle`.

Chúng tôi mở `console log` nó để chúng tôi thấy phần tử đầu vào đó ở đây.

Nếu tôi bấm thêm để làm như thế này, không có gì xảy ra. Nếu chúng tôi mở nhật ký bảng điều khiển, chúng tôi không thấy
lỗi nào ngoài lỗi này mà chúng tôi có thể bỏ qua.

Nhưng nếu bây giờ tôi nói `Buy milk`, thì nếu tôi nhập nội dung nào đó hợp lệ, nó sẽ được thêm vào.

Nếu tôi nhập một vài khoảng trắng, không có gì xảy ra.

Nhưng nếu tôi vào, trả lời câu hỏi ở đây, chúng tôi cũng nhận được điều này.

Vì vậy, đó là cơ bản, rất cơ bản của chúng tôi để làm việc với ứng dụng.

Tuy nhiên, tôi muốn thêm nhiều chức năng hơn cho nó trước khi chúng ta đi sâu vào các thư viện để xem tại sao lại có
vanilla.

JavaScript có thể không phải là tất cả những gì chúng ta cần ở đây.

### Using vanilla JavaScript & Understanding Its limitation (2/3)

Trong bài giảng trước, chúng ta đã tạo ra ứng dụng cơ bản cho phép chúng ta thêm các phần tử mới. Điều này thật tuyệt,
nhưng tôi cũng muốn có thể loại bỏ chúng.

Vì vậy, điều tôi cần làm là thêm trình xử lý sự kiện vào mục danh sách mà khi nhấp vào nó, chúng tôi sẽ về cơ bản
hãy `remove` nó.

Vì vậy, những gì tôi sẽ làm ở đây, nơi tôi tạo mục danh sách việc cần làm, tôi sẽ lấy nó ở đây và thêm trình xử lý sự
kiện như chúng tôi đã làm trước đây. Tôi muốn nghe sự kiện nhấp chuột.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click');
    ulEl.appendChild(todoLi);
}
```

Vì vậy, trên mục danh sách mới được tạo này và sau đó tôi muốn thực thi một chức năng mà tôi sẽ thêm vào đây tại dưới
cùng, việc xóa tên sẽ được thực hiện.

Cứ như vậy đi.

Và tôi sẽ chuyển một tham chiếu đến hàm này ở đây làm đối số thứ hai để loại bỏ trình xử lý sự kiện của tôi việc cần làm
bây giờ trong phần `remove` việc cần làm.

Tất nhiên tôi cần phải tìm ra phần tử nào chúng tôi đã nhấp vào. Vì vậy, ở đây tôi sẽ chỉ lấy đối tượng sự kiện. Chúng
tôi luôn nhận được điều này theo mặc định được thông qua bởi JavaScript.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', remoteTodo);
    ulEl.appendChild(todoLi);
}

function removeTodo(event) {
    var clickedLi = event.target;
    clickedLi.parentNode.removeChild(clickedLi);
}
```

Nếu chúng tôi sử dụng trình xử lý sự kiện và ở đó tôi có thể truy xuất mục danh sách mà chúng tôi đã nhấp vào.
Vì vậy tôi sẽ tạo một biến mới. Tôi sẽ đặt tên cho nó là tôi `clickedLi` và đó đơn giản là sự kiện của tôi.

Mục tiêu.
Mục tiêu là thuộc tính chúng tôi có trên đối tượng sự kiện này theo mặc định.
Một lần nữa, nếu điều đó mới đối với bạn, hãy xem một số hướng dẫn tập trung vào JavaScript để tìm hiểu tất cả những
điều này những điều về sự kiện truy cập Dom, v.v.

Vì vậy, đây là phần tử chúng tôi đã nhấp vào.
Bây giờ chúng tôi muốn xóa nó và để xóa nó, tôi thực sự phải liên hệ với `parentNode` của danh sách item vì trên nút đó
chúng ta có thể gọi `removeChild` và loại bỏ được nhấp như thế này.

Bây giờ nếu tôi nhấn điều khiển, hãy mở bảng điều khiển để xem chúng tôi có gặp lỗi nào không.
Nếu tôi thêm `Buy milk` và sau đó nếu tôi cũng có thể thêm câu hỏi trả lời và tôi nhấp vào loại bỏ `Buy milk`, nó được
gỡ bỏ và ở đây cũng vậy.
Vậy là nó đang hoạt động.

Nhưng tôi vẫn không vui 100% vì chúng tôi có thể cải thiện ứng dụng này thêm một chút.

### Using vanilla JavaScript & Understanding Its limitation (3/3)

Trong bài giảng trước chúng ta đã thêm một chức năng để có thể loại bỏ các mục trong danh sách.

Điều đó thật tuyệt, nhưng trong trường hợp sử dụng thông thường, có lẽ chúng ta cũng muốn lưu trữ một mảng việc cần làm
trong JavaScript để chúng tôi không chỉ thay đổi Dom, thêm và xóa các mục mà còn có một mảng với tất cả những việc cần
làm của chúng ta là bởi vì có lẽ chúng ta muốn làm điều gì đó với việc cần làm của mình trong JavaScript.

Vì vậy, một trường hợp sử dụng thông thường sẽ là có một mảng việc cần làm trong JavaScript, mảng này ban đầu trống.
Và bất cứ khi nào chúng tôi thêm một `todo` mới để làm ở đây sau khi chúng tôi kiểm tra xem người dùng đã nhập nội dung
nào đó hợp lệ hay không, thì trong phần này trong trường hợp tôi có thể tạo một `newTodo` ở đây, hãy đặt cho nó bất kỳ
cái tên nào bạn thích.

Tất nhiên rồi.
Và đó có thể là một đối tượng JavaScript nơi chúng tôi có giá trị mà người dùng đã nhập.

Vì vậy, người dùng nhập vào đây, nhưng cũng có thể là một số ID duy nhất để chúng tôi có thứ gì đó để xác định việc cần
làm. Vì vậy, chúng tôi có thể có thuộc tính ID và bây giờ tôi sẽ sử dụng `math.random` và đây không thực sự là một ID
duy nhất.
Tôi biết điều này.

Đây chỉ là một con số ngẫu nhiên và có khả năng cao là nó sẽ khác với số trước đó, nhưng nó là không nhất thiết là duy
nhất.
Tuy nhiên, bây giờ nó sẽ ổn ở đây.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

var todos = [];

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value: userInput};
    todos.push(newTodo);
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', remoteTodo);
    ulEl.appendChild(todoLi);
}

function removeTodo(event) {
    var clickedLi = event.target;
    clickedLi.parentNode.removeChild(clickedLi);
}
```

Vì vậy, đó là điều mới của chúng tôi để làm.
Bây giờ chúng ta có thể đẩy việc cần làm mới này vào danh sách việc cần làm của chúng ta trong mảng `todos` của chúng
ta.

Vấn đề hiện tại chúng tôi gặp phải là nếu chúng tôi loại bỏ một việc cần làm thì việc loại bỏ phần tử trong mục danh
sách sẽ dễ dàng.
Nhưng làm cách nào để chúng tôi tìm ra mục danh sách này có `id` nào? Chúng tôi không lưu trữ thông tin này trong Dom
nhưng Dom là thứ duy nhất chúng tôi truy cập ở đây. Chúng tôi chỉ lấy phần tử chúng tôi muốn loại bỏ.
Vì vậy chúng ta cũng cần lưu ID vào Dom tại đây.
Đó sẽ là một cách khả thi.

Vì vậy, những gì tôi có thể làm là trước khi thêm mục danh sách việc cần làm này, tôi sẽ liên hệ với nó và sử
dụng `dataset`tài sản. Để sử dụng thuộc tính dữ liệu này, chúng tôi có thể điền, chúng tôi có thể điền dữ liệu của riêng
mình, với các thuộc tính tùy chỉnh của riêng mình, có thể nói như vậy.

Và sau đó tôi muốn lưu trữ `id`, đặt dữ liệu `id`, thuộc tính hoặc thuộc tính mà tôi nên nói và đặt nó bằng mới để
làm `id`, vậy để làm `id` chúng ta đã tạo ở đây.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

var todos = [];

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value: userInput};
    todos.push(newTodo);
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', remoteTodo);
    todoLi.dataset.id = newTodo.id;
    ulEl.appendChild(todoLi);
}

function removeTodo(event) {
    var clickedLi = event.target;
    clickedLi.parentNode.removeChild(clickedLi);
}
```

Bây giờ cái này được lưu trữ trong Dom và tôi có thể cho bạn xem cái này. Nếu chúng ta tải lại phần này và
nói `Buy milk` rồi chọn phần tử tạo này, thì nó có thuộc tính ID dữ liệu này ở đây bây giờ. Bây giờ chúng ta có thể sử
dụng mã đó ở đây trong mã xóa để thực hiện trước khi chúng ta thực sự xóa mã đó để lấy ID mục. Bằng cách truy cập vào
nhấp chuột. Và sau đó là `id` tập dữ liệu để chúng tôi lưu trữ nó ở đây.

Giờ đây, với `id` đó đã được tìm nạp, giờ đây chúng tôi có thể lặp qua tất cả việc cần làm trong mảng việc cần làm của
mình.

Vì vậy, hãy bắt đầu từ phần tử đầu tiên có chỉ số bằng 0.

Hãy lặp lại.

Miễn là chúng ta ở trong phạm vi này, trong độ dài của mảng việc cần làm này và hãy tăng dần `i` sau mỗi lần lặp và sau
đó chúng ta có thể chỉ cần kiểm tra xem `todos i`.
Xin lưu ý rằng các phần tử trong `todos` ở đây chỉ là các phần tử thuộc loại này. Đối tượng thuộc loại này. Như vậy
chúng ta sẽ có một thuộc tính `id`. Nếu `id` bằng `itemId`.

Nếu đúng như vậy thì tôi muốn.
Gọi `splice` trên todos để loại bỏ một phần tử về cơ bản. Và sau đó tôi muốn ghép bắt đầu ghép ở vị trí `i` và ghép một
phần tử và sau đó tôi sẽ gọi `break` để truy cập thoát ra khỏi vòng lặp của tôi ở đây.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

var todos = [];

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value: userInput};
    todos.push(newTodo);
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', remoteTodo);
    todoLi.dataset.id = newTodo.id;
    ulEl.appendChild(todoLi);

    console.log(todos);
}

function removeTodo(event) {
    var clickedLi = event.target;
    var itemId = clickedLi.dataset.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === itemId) {
            todos.slice(i, 1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);

    console.log(todos);
}
```

Vì vậy, bây giờ để xem liệu nó có hoạt động hay không, hãy `console` ghi lại mảng việc cần làm của chúng ta ở
cuối `addToDo` và ở cuối loại bỏ việc cần làm ở đây. Và nếu bây giờ chúng ta nhấn nút điều khiển, hãy nhập và
mở `console.log` để xem chúng ta có gặp lỗi nào không. Nếu tôi thêm `Buy milk` và trả lời các câu hỏi, bạn thấy đấy,
dường như chúng ta đang thêm các đối tượng vào mảng. Trông tôt đây. Nếu bây giờ tôi nhấp vào `Buy milk`, chỉ còn lại một
mục và đó thực sự là câu trả lời cho các câu hỏi. Và bây giờ mảng trống.

Vậy là nó đã hoạt động và đó là mã JavaScript đã hoàn thành.

Bây giờ.

Thế là ứng dụng đã hoàn thành với rất nhiều code rồi.

Vì vậy, hãy phân tích điều này và tìm ra cách chúng ta có thể cải thiện nó.

### Analyzing the Vanilla JavaScript Solution

Trong các bài giảng trước, chúng tôi đã tạo ra ứng dụng cơ bản để làm.

Chúng tôi có rất ít mã HTML nhưng lại có khá nhiều mã JavaScript, điều này hợp lý vì chúng tôi có ở đây một ứng dụng rất
năng động và chúng tôi tạo và xóa các phần tử thông qua JavaScript. Chúng ta cần có quyền truy cập vào các yếu tố này.
Sau đó chúng ta cần tạo mới ở đây.

Một vấn đề là `id`. Nó không thực sự độc đáo. Chúng tôi có thể khắc phục điều này bằng cách sử dụng dấu thời gian,
nhưng. Nhưng vẫn không phải là cách tuyệt vời nhất để làm điều đó ở đây. Sau đó, chúng tôi tạo một phần tử theo cách thủ
công trong JavaScript.

Chúng tôi nối thêm nó.

Chúng tôi lưu trữ `id` trong Dom gắn liền với phần tử này và sau đó chúng tôi xóa phần tử `to do` như thế này. Đồng thời
có quyền truy cập vào mục tiêu sự kiện, xóa nó theo cách thủ công. Và trong khi tất cả đều hoạt động thì chúng tôi đã
viết rất nhiều mã ở đó và quản lý trạng thái.

Ví dụ: việc tìm ra những gì cần làm mà chúng tôi đã xóa đã hơi phức tạp một chút và tôi đoán bạn có thể tưởng tượng việc
này ngày càng phức tạp hơn nếu bạn thêm nhiều chức năng hơn như có thể tải một công việc cần làm để chỉnh sửa hoặc những
việc tương tự.

Vì vậy, đó là lý do tại sao JavaScript thuần có thể không phải là tất cả những gì chúng ta cần.

Nếu JavaScript thuần không phải là tất cả những gì chúng ta cần thì làm cách nào chúng ta có thể cải thiện mã bằng một
số thư viện, một số thư viện JavaScript, ví dụ: jQuery hoặc Lodash?

#### Bây giờ thư viện JavaScript là gì?

Thư viện JavaScript chỉ đơn giản là gói mã JavaScript của bên thứ ba cung cấp cho bạn nhiều tính năng thông thường các
đối tượng chức năng mà bạn có thể sử dụng để làm cho cuộc sống của bạn dễ dàng hơn.

Vì vậy, các biên tập viên của thư viện đã viết và tối ưu hóa rất nhiều mã. Bạn sẽ phải viết khác để có thể sử dụng chức
năng đơn giản hóa để đạt được kết quả tương tự như bạn đã làm trước đây nhưng giờ đây với ít mã hơn, cho phép bạn tập
trung vào logic kinh doanh của mình.

Và vì bạn sử dụng ít mã hơn nên cũng viết ít mã dễ xảy ra lỗi hơn, đó là công việc của một thư viện. Và ở đây tôi chỉ đề
cập đến hai. Tất nhiên là có rất nhiều, rất nhiều thư viện JavaScript dành cho các loại công việc khác nhau và các mục
đích khác nhau. các loại sự vật.

Và chúng ta sẽ xem xét các thư viện này.

![Jquery and Lodash](/assets/images/react-js-angular-vue-js-quickstart-comparison-01.jpg)

Vì vậy, hãy cải thiện ứng dụng hiện có của chúng tôi bằng hai thư viện mà chúng tôi thấy ở đây để biết lý do sử dụng
những thư viện như thế này có thể có ích cho chúng ta.

### Improving the App with jQuery

Tôi quay lại ứng dụng chúng tôi đã tạo và tôi muốn cải thiện nó bằng cách thêm jQuery và Lodash. Hãy bắt đầu với jQuery
và đơn giản là tìm kiếm jQuery trên Google tại đây. Hãy truy cập jquery.com và nếu bạn nhấp vào tải xuống, bạn có thể
tải xuống, lưu trữ cục bộ. Nếu bạn đang làm việc tại địa phương, điều đó có ý nghĩa. Nhưng chúng tôi đang sử dụng
Jsfiddle. Và ở đó tôi muốn sử dụng CDN, về cơ bản là một liên kết trỏ đến một số máy chủ khác không thuộc sở hữu của
chúng tôi, nơi mã này được tải xuống từ đó. Chúng tôi có thể tìm thấy các liên kết nếu chúng tôi cuộn xuống đây bằng
cách sử dụng jQuery với CDN.

```html

<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
<input type="text">
<button>Add Todo</button>
```

Nếu chúng ta nhấp vào mã jquery.com ở đây, chúng ta có thể tìm thấy các liên kết đến CDN. Tôi sẽ sử dụng phiên bản ba.
Tất nhiên bạn có thể sử dụng một cái khác. One và tôi sẽ sử dụng mã không nén, sao chép địa chỉ liên kết và quay lại
jsfiddle, tôi sẽ chỉ đơn giản là thêm mục nhập này. Vì vậy, hãy thêm thẻ tập lệnh ở đây vào mã HTML và thêm lệnh nhập
tập lệnh vào jQuery. Mã khác không thay đổi.

Bây giờ chúng ta có thể sử dụng jQuery và nếu bạn chưa bao giờ sử dụng jQuery, đoạn mã tôi sắp viết có thể trông lạ cho
bạn. Tuy nhiên, tôi vẫn sẽ không đi sâu vào jQuery vì đây không phải là một khóa học về jQuery và jQuery cung cấp đủ nội
dung cho toàn bộ khóa học. Vì vậy, đây chỉ đơn giản là sử dụng nó để cho bạn thấy cách chúng tôi có thể cải thiện mã
này. Nếu bạn muốn tìm hiểu thêm về jQuery, hãy xem các khóa học tập trung vào đó.

Vì vậy, hãy sử dụng jQuery.

#### Chúng ta có thể sử dụng jQuery để dễ dàng chọn các phần tử trong Dom.

Ví dụ.

Thay vì sử dụng `document.querySelector`, chúng ta chỉ cần sử dụng ký hiệu `$`, đây là chức năng phổ biến nhất được giới
thiệu bởi jQuery.

```javascript
var inputEl = $('input');
var buttonEl = $('input');
var ulEl = $('input');

var todos = [];

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value: userInput};
    todos.push(newTodo);
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', remoteTodo);
    todoLi.dataset.id = newTodo.id;
    ulEl.appendChild(todoLi);

    console.log(todos);
}

function removeTodo(event) {
    var clickedLi = event.target;
    var itemId = clickedLi.dataset.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === itemId) {
            todos.slice(i, 1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);

    console.log(todos);
}
```

Ký hiệu `$` chỉ cần chọn các `component` trong Dom bằng cách sử dụng bộ chọn CSS như `document.querySelector` đã làm.
Tuy
nhiên, nếu chúng ta sử dụng ký hiệu `$` thì thứ chúng ta lưu trữ trong `buttonEl`, v.v., không còn là thông thường nữa.
Phần tử HTML JavaScript để mã khác không hoạt động nữa. Hiện nay. Bạn có thể nói rằng thay vào đó nó là một đối tượng
jQuery với một số thông tin siêu dữ liệu bổ sung. Vì vậy, chúng tôi đã có quyền truy cập ở đây. Như tôi đã nói, đoạn mã
kia sẽ không hoạt động, nhưng điều đó không thành vấn đề vì thực ra chúng ta có thể cải thiện đoạn mã kia. mã cũng vậy.

Ví dụ: để thêm trình xử lý sự kiện, cụ thể là trình xử lý lượt nhấp, chúng ta chỉ cần sử dụng hàm nhấp chuột phương thức
và loại bỏ đối số đầu tiên.

```javascript
var inputEl = $('input');
var buttonEl = $('input');
var ulEl = $('input');

var todos = [];

buttonEl.click(addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value: userInput};
    todos.push(newTodo);
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', remoteTodo);
    todoLi.dataset.id = newTodo.id;
    ulEl.appendChild(todoLi);

    console.log(todos);
}

function removeTodo(event) {
    var clickedLi = event.target;
    var itemId = clickedLi.dataset.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === itemId) {
            todos.slice(i, 1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);

    console.log(todos);
}
```

Bây giờ, nhấp chuột có sẵn trên `buttonEL` vì hãy nhớ rằng `buttonEL` là một đối tượng jQuery vì chúng tôi đã có truy
cập vào nó bằng phương pháp ký hiệu đô la. Vì vậy click là một hàm hữu ích được jQuery giới thiệu.

Và như một lưu ý phụ, nếu bạn muốn xem tất cả các hàm được jQuery giới thiệu, hãy quay lại tới jquery.com. Tại đây và đi
tới tài liệu API và ở đó bạn sẽ tìm thấy danh sách tất cả các phương thức được jQuery giới thiệu. Và nếu bạn nhấp vào
chúng, bạn sẽ nhận được thông tin về cách thức hoạt động của nó.

Vì vậy, hãy quay lại mã của chúng tôi.

Chúng tôi có trình xử lý lượt nhấp chuột và vẫn yêu cầu jQuery thực thi việc cần làm ngay bây giờ. Bây giờ trong đó
chúng ta vẫn trích xuất giá trị tuy nhiên không phải bằng `value` mà bằng `val()`, một phương thức có tên `val` ở đây và
chúng tôi phải sử dụng nó vì `inputEl` cũng được tìm nạp thông qua ký hiệu `$`.

Vì vậy, chúng tôi cũng có một đối tượng jQuery ở đó.

```javascript
var inputEl = $('input');
var buttonEl = $('button');
var ulEl = $('ul');

var todos = [];

buttonEl.click(addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value: userInput};
    todos.push(newTodo);
    var todoLi = document.createElement('LI');
    todoLi.textContent = userInput;
    todoLi.addEventListener('click', remoteTodo);
    todoLi.dataset.id = newTodo.id;
    ulEl.appendChild(todoLi);

    console.log(todos);
}

function removeTodo(event) {
    var clickedLi = event.target;
    var itemId = clickedLi.dataset.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === itemId) {
            todos.slice(i, 1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);

    console.log(todos);
}
```

Chúng ta vẫn có thể sử dụng tính năng `trim` vì đầu vào của người dùng vẫn chỉ là một chuỗi. Và việc mới cần làm chỉ là
một đối tượng mới là được. Chúng tôi đẩy đối tượng mới đó vào mảng, nhưng ở đây khi chúng tôi tạo phần tử mới, điều này
hoạt động khác. Khi sử dụng jQuery, chúng ta có thể viết ít mã hơn ở đây để có thể tạo mục danh sách `Todo` mới này bằng
cách đơn giản nói ký hiệu `$` và sau đó thực sự không chọn một phần tử bằng bộ chọn CSS.

Nhưng đó là một trường hợp sử dụng khác của phương thức jQuery ở đây để tạo mã HTML. Vì vậy, các thẻ thông thường ở đây
và ở giữa là `userInput`. Vì vậy, hãy nối chuỗi này ở đây như thế và thêm `userInput` vào giữa. Bây giờ, chỉ riêng điều
này sẽ không tạo ra phần tử mà bây giờ chúng ta có thể gọi nối thêm vào, để nối thêm phần tử mới được tạo này bây giờ
đến `Dom`.

Vì vậy, ở đây tôi muốn thêm một phần tử vào phần tử `ul` và điều này đã cho phép chúng tôi xóa dòng này, dòng này dòng
và dòng này. Tuy nhiên, chúng tôi vẫn cần đảm bảo rằng chúng tôi thêm tập dữ liệu và trình xử lý sự kiện. Vì vậy tôi sẽ
đưa phần bổ sung vào dòng mới.

```javascript
var inputEl = $('input');
var buttonEl = $('button');
var ulEl = $('ul');

var todos = [];

buttonEl.click(addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value: userInput};
    todos.push(newTodo);
    $('<li>' + userInput + '</li>').appendTo(ulEl);
    todoLi.addEventListener('click', remoteTodo);
    todoLi.dataset.id = newTodo.id;
    console.log(todos);
}

function removeTodo(event) {
    var clickedLi = event.target;
    var itemId = clickedLi.dataset.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === itemId) {
            todos.slice(i, 1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);

    console.log(todos);
}
```

Nó vẫn được thêm vào dòng đầu tiên ở đây.

Tôi chỉ chia nó thành nhiều dòng để dễ đọc hơn và do đó bây giờ tôi cũng sẽ thêm phương thức `attribute` cho phép chúng
ta thêm các thuộc tính của riêng mình ở đây, tôi sẽ đặt `dataset-id`, tức là đúng như những gì chúng tôi đã đặt
với `dataset`. `dataset-id` ở đây trước đó và đặt giá trị này bằng `id` mới để thực hiện. Với điều đó chúng ta có thể
loại bỏ dòng này.

Cuối cùng, tôi muốn thêm một trình nghe nhấp chuột. Vì vậy mình sẽ thêm phương thức `click` và mình muốn thực thi
lệnh `removeTodo` ở đây và chúng ta có thể xóa dòng này nhiều đã ngắn hơn với jQuery. Bây giờ, thao tác đó sẽ tạo phần
tử mới và thêm thuộc tính cũng như trình nghe lượt nhấp.

```javascript
var inputEl = $('input');
var buttonEl = $('button');
var ulEl = $('ul');

var todos = [];

buttonEl.click(addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: Math.random(), value: userInput};
    todos.push(newTodo);
    $('<li>' + userInput + '</li>')
        .appendTo(ulEl)
        .attribute('dataset-id', newTodo.id)
        .click(removeTodo);
    console.log(todos);
}

function removeTodo(event) {
    var clickedLi = event.target;
    var itemId = clickedLi.attr('dataset-id');
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === itemId) {
            todos.slice(i, 1);
            break;
        }
    }
    clickedLi.parentNode.removeChild(clickedLi);

    console.log(todos);
}
```

Chúng ta hãy có một cái nhìn.
Nếu chúng ta nhấn nút điều khiển, hãy vào đây, xóa bảng điều khiển và nói lý do tại sao sữa dường như vẫn hoạt động.
Chúng tôi cũng thêm nó vào mảng. Tuy nhiên, nhấp vào nó sẽ không hoạt động. Hoặc nó sẽ hoạt động. Nhưng thực ra như bạn
thấy, nó sẽ không xóa mảng vì ở đó chúng ta vẫn cần thực hiện một số công việc để xóa để làm chúng tôi nhận được sự kiện
này. Nhưng thực ra chúng ta không cần nó ở đây như thế này.

Thay vào đó, chúng ta có thể truy cập vào phần tử mà chúng ta đã nhấp vào bằng cách sử dụng ký hiệu `$`. Và sau đó, như
một đối số, `this` một từ khóa dành riêng trong JavaScript, nhưng khi được sử dụng trong jQuery như ở đây, nó sẽ cấp cho
chúng ta quyền truy cập lại vào mục tiêu sự kiện dưới dạng đối tượng jQuery.

Thế là xong.

```javascript
function removeTodo(event) {
    var clickedLi = $(this);
    var itemId = clickedLi.attr('dataset-id');
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === itemId) {
            todos.slice(i, 1);
            break;
        }
    }
    clickedLi.remove();
    console.log(todos);
}
```

Và vì chúng tôi có được điều này nên chúng tôi có thể truy xuất `itemId` bằng cách truy cập `attr()`. Một lần nữa, hàm
chúng tôi sử dụng ở đây để thiết lập dữ liệu này. Đặt `id` ngay bây giờ nếu tôi chỉ chuyển `dataset-id` mà không có đối
số thứ hai, thì tôi chỉ cần truy xuất nó.

Vì vậy, bây giờ điều này mang lại cho tôi `id` mặt hàng một lần nữa và do đó mã khác cũng sẽ hoạt động.

Nhưng chúng ta có thể cải thiện mã ở đây thay vì `parentNode` và sau đó `removeChild`, chúng ta có thể chỉ cần
gọi `remove()` khi nhấp vào chính nó.

Bây giờ hãy mở lại bảng điều khiển.
Hãy thêm mua sữa.
Và trả lời các câu hỏi.
Và bây giờ nếu tôi bấm vào nó, bạn thấy đấy, bây giờ chúng ta chỉ có bằng cách bấm vào mảng và bây giờ chúng ta có một
khoảng trống mảng.
Vì vậy, bây giờ ứng dụng hoạt động giống như trước đây, nhưng bạn ơi, có phải là ít mã hơn nhiều, mã gọn gàng hơn nhiều
không, dễ dàng hơn nhiều với jQuery.

Bây giờ chúng ta hãy thêm Lodash vào bài giảng tiếp theo trước khi xem chúng ta có thể cải thiện những gì khác.

### More JavaScript Libraries: Adding Lodash

Trong bài giảng trước, chúng tôi đã thêm jQuery để làm cho mã của chúng tôi gọn gàng và dễ dàng hơn và điều đó thật
tuyệt. Nhưng jQuery chỉ là một thư viện có sẵn. Một thư viện tập trung vào việc truy cập `Dom` làm việc với `Dom`.

Bây giờ chúng ta cũng có thể sử dụng Lodash, vì vậy chỉ cần tìm kiếm Lodash để truy cập lodash.com và Lodash là một
JavaScript thư viện, cung cấp rất nhiều chức năng tiện ích.

Bạn có thể tìm hiểu thêm về tất cả các chức năng tiện ích này. Nếu bạn truy cập tài liệu. Nó cung cấp cho bạn rất nhiều
hàm để làm việc với array, collection, string và tất cả những thứ này.

ví dụ: Và bạn chỉ cần tải xuống tại đây để phát triển tại local. Hoặc vì tôi muốn sử dụng CDN ở đây để truy cập CDN và
sau đó chọn gói `core` có tên chẳng hạn `min.js` sao chép cái đó.

Đi tới mã HTML của bạn và thêm phần nhập này.

```html

<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
<script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.core.min.js"></script>
<input type="text">
<button>Add Todo</button>
```

Thứ tự không quan trọng ở đây, nhưng sẽ quan trọng nếu bạn muốn ghi đè một số hàm mà jQuery cung cấp, mà thông thường
các thư viện không nên ghi đè lên các chức năng khác. Nhưng vâng, về mặt lý thuyết thì thứ tự có vấn đề.

Bây giờ với Lodash được thêm vào, chúng ta thực sự có thể xem tài liệu và đây là một tài liệu cụ thể chức năng tiện ích
mà tôi quan tâm. Và đó là ở đây dưới util.

`uniqueId`, Nó tạo ra một ID duy nhất, đúng như tên gọi.

Vì vậy, bây giờ chúng ta có thể sử dụng thông tin đó để tạo ID thực sự độc đáo này tại đây. Bạn sử dụng Lodash bằng cách
sử dụng dấu `_`. Đó là nơi tên đến từ. Vì vậy, mặc dù tên này có vẻ lạ nhưng thực tế đây là tên hàm JavaScript hợp lệ.
Vì vậy, giống như ký hiệu `$` dành cho jQuery Lodash. Có thể nói, dấu `_` này hiện đang truy cập vào đối tượng Lodash.

```javascript
function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var newTodo = {id: _.uniqueId(), value: userInput};
    todos.push(newTodo);
    $('<li>' + userInput + '</li>')
        .appendTo(ulEl)
        .attribute('dataset-id', newTodo.id)
        .click(removeTodo);
    console.log(todos);
}
```

Và ở đó, như bạn thấy ở đây, chúng tôi có thể thực thi ID duy nhất, ID duy nhất và chúng tôi có thể cung cấp cho nó tiền
tố của riêng mình.

Tuy nhiên, chúng tôi không cần phải làm vậy.

Nếu bây giờ chúng ta nhấn control, hãy nhập và mở bảng điều khiển. Hãy thêm `Buy milk` một lần nữa và thêm câu trả lời.
Câu hỏi lần cuối. Nếu chúng ta nhìn vào những vật thể mà chúng ta thấy, chúng ta có những ID duy nhất ở đây. Số tăng
dần.

Và do đó, tất nhiên, tôi vẫn có thể loại bỏ những mục này. Cái này vẫn hoạt động như trước, nhưng bây giờ sử dụng thư
viện khác, lodash để có được chức năng tiện ích này. Và hy vọng điều đó sẽ cho bạn thấy cách chúng tôi có thể cải thiện
ứng dụng này bằng cách không chỉ sử dụng JavaScript cơ bản hoặc cuối cùng, tất nhiên chúng tôi sử dụng JavaScript thuần
nhưng cũng thêm một số thư viện của bên thứ ba để cải thiện cuộc sống của chúng tôi ở đây và làm cho mã của chúng tôi
gọn gàng hơn và do đó dễ quản lý hơn.

### The Role of JavaScript Libraries

Trước khi chúng ta xem xét cách chúng ta có thể cải thiện ứng dụng của mình hơn nữa, hãy để tôi nói về những thư viện
này một chút xíu nữa. Chúng tôi thấy có hai thư viện ở đây và còn có nhiều thư viện hơn cho tất cả mọi thứ bạn có thể
làm với JavaScript.

Vậy làm thế nào để bạn tìm thấy những thư viện này? Làm thế nào để bạn biết bạn nên sử dụng cái nào? Vâng, không có câu
trả lời đơn giản cho điều này. Thông thường, nó hoạt động như thế này. Bạn biết đấy, bạn muốn thêm một chức năng nhất
định.

Ví dụ: bạn muốn làm việc nhiều với ngày tháng và bạn không muốn viết mã để định dạng hoặc tự mình chuyển đổi ngày tháng.
Chà, vậy thì bạn chỉ cần tìm kiếm ngày tháng JavaScript hoặc ngày tháng JavaScript, thư viện và sau đó bạn nên tìm một
thư viện như Moment.js, một thư viện tập trung vào các hàm tiện ích cụ thể về ngày tháng. Đó là cách nó hoạt động.

Và như tôi vừa đề cập, có các thư viện dành cho tất cả mọi thứ bạn có thể tạo trong JavaScript và thư viện là một phần
không thể thiếu của JavaScript vì chúng giúp cuộc sống của bạn dễ dàng hơn rất nhiều và cho phép bạn có thể tập trung
vào logic kinh doanh của mình thay vì phải liên tục phát minh lại cái bánh xe.

Và sau đó có thể cũng làm sai. Bạn có thể không viết mã tối ưu ở đó. Đó là lý do tại sao các thư viện tồn tại và tại sao
chúng lại cực kỳ quan trọng.

### Libraries vs Frameworks

Quay lại và đuổi theo fiddle.
Đây.
Chúng tôi cải thiện ứng dụng bằng cách thêm jQuery và Lodash và tôi nghĩ bạn đã có thể hiểu lý do tại sao thêm thư viện
vào ứng dụng của bạn có thể là một điều tốt đẹp. Thay vì chỉ bám vào JavaScript thuần túy và tự mình viết mọi thứ.

Tuy nhiên, khóa học này chủ yếu nói về các framework, ưu đãi JavaScript khác nhau và chúng tôi chưa có hãy nhìn vào
những thứ này.

Chúng tôi chỉ sử dụng thư viện và thư viện là khung. Tôi sẽ quay lại với sự khác biệt trong giây lát. Chúng tôi vẫn có
thể cải thiện ứng dụng của mình ở đây vì mặc dù nó gọn gàng hơn và chúng tôi sử dụng ít mã hơn ở đây nhưng chúng tôi vẫn
phải viết khá nhiều mã để chỉ cần thêm và xóa một số `component` vào và ra khỏi Dom và quản lý trạng thái lưu trữ `id`
này trong Dom. Và điều này hoàn toàn phù hợp với các ứng dụng nhỏ hơn hoặc nếu bạn chỉ muốn nâng cao những điều nhỏ nhặt
về các ứng dụng hiện có Các trang HTML, nhưng đối với các ứng dụng lớn hơn, bạn vẫn có thể chạm vào đường viền khiến
việc này trở nên quá cồng kềnh và việc quản lý nhà nước của chúng ta trở nên rất khó khăn. Đó là một trong những vấn đề
quan trọng mà framework có thể giải quyết cho bạn. Vì vậy, chúng ta hãy xem xét kỹ hơn về điều này. Chúng tôi đã xem xét
các thư viện và trong video trước, chúng tôi nhận ra rằng chúng tôi vẫn có thể cải thiện ứng dụng của mình. Đó là điều
mà các framework cố gắng làm cho bạn. Chúng tôi thường có Angular React và Vue. Tất nhiên cũng có các framework
JavaScript khác, nhưng ba framework này có lẽ là phổ biến nhất những cái tốt nhất và những cái hiện đại nhất hiện nay.

#### Sự khác biệt giữa khung như Angular và thư viện như Lodash hoặc jQuery là gì?

Thư viện thường khắc phục một số vấn đề nhất định. jQuery chủ yếu nói về cách làm việc với Dom. Lodash cung cấp cho bạn
rất nhiều chức năng tiện ích để làm việc với mảng hoặc tạo ID duy nhất đó, nhưng tuy nhiên, tổng thể cách bạn tạo ứng
dụng của mình là điều bạn phải quyết định.

Một khung làm được nhiều việc hơn là chỉ cung cấp cho bạn một số chức năng tiện ích hoặc tập trung vào một lĩnh vực. Một
khung thường cung cấp cho bạn cấu trúc về cách bạn nên viết ứng dụng của mình và quan tâm đến một rất nhiều chi tiết
thực tế ở mức độ thấp mà bạn sẽ phải làm theo cách khác.

Ví dụ: thêm hoặc xóa các mục vào và ra khỏi Dom.

Đó là một nhiệm vụ thường được khung thực hiện tự động để bạn vẫn có JavaScript cơ bản làm cơ sở mã mà là một cấu trúc
nhất định về cách viết mã của bạn để dễ dàng nhận được các tính năng như thêm và loại bỏ các `component` để bạn có thể
tập trung hơn nữa vào logic kinh doanh của mình. Hãy xem nó hoạt động như thế nào và bạn sẽ nhanh chóng hiểu được những
lợi ích mà khung này mang lại cho bạn.

### Using Vue.js (A JavaScript Framework)

Tôi sẽ thêm Vue.js vào ứng dụng này tại đây. Vue.js là một trong những framework dễ bắt đầu nhất, đó là lý do tại sao
tôi chọn nó ở đây. Nhưng ở phần sau của khóa học, chúng ta sẽ xem xét React và Angular 2 cũng như nhiều nội dung khác về
Vue.js. Ở đây chúng ta sẽ nhanh chóng đi sâu vào nó. Sau này chúng ta sẽ có phần xem xét kỹ hơn về Vue.js. Hãy truy cập
Vuejs.org và tại đây chúng ta có thể nhấp vào Bắt đầu để bắt đầu, nhưng sau đó chúng ta có thể chọn cài đặt để cài đặt
nó.

Và tôi vẫn muốn sử dụng CDN ở đây. Vì vậy, những gì chúng ta có thể làm là chỉ cần nhấp chuột phải vào liên kết này ở
đây và sao chép địa chỉ liên kết để lấy CDN từ giải nén ở đây, đưa cho chúng tôi liên kết này, phiên bản mới nhất của
Vue tự động và tôi sẽ thay thế.

Jake, cậu có đồng ý với nó không? Không phải Lodash.
Tôi vẫn muốn ID duy nhất đó, nhưng tôi sẽ thay thế jQuery và tôi sẽ nói điều gì đó về sự thay thế đó của jQuery chứ
không phải Lodash sau này.
Ối.
Hãy biến điều này thành một thẻ `script` hợp lệ một lần nữa.

Vì vậy, bây giờ việc nhập Vue.js và liên kết Lodash ở đây đã được sửa.

Bây giờ hãy sử dụng Vue.js.

Việc sử dụng những chiếc ghế hoạt động hoàn toàn khác so với việc sử dụng jQuery chỉ với lý do tại sao tôi thay thế nó.
Lodash không can thiệp vào lãnh thổ của chúng tôi, đó là lý do tại sao tôi vẫn sử dụng Lodash. Nhưng tất cả thao tác
trên Dom giờ đây sẽ được Vue.js xử lý, đó là lý do tại sao tôi đã xóa jQuery. Chúng ta không nên có nhiều thư viện hoặc
framework làm cùng một việc. Vì vậy, nếu jQuery tương tác với Dom và Vue.js như bạn sẽ thấy sau đây, thì điều tương tự
cũng xảy ra. Rất có thể chúng ta sẽ làm mọi chuyện rối tung lên. Vì vậy, theo nguyên tắc chung, nếu bạn đang sử dụng một
framework như Angular, React hoặc Vue, thì đừng sử dụng jQuery. Có thể khó khăn lúc đầu, nhưng hãy thực sự nắm bắt cấu
trúc mà khuôn khổ mang lại cho bạn và sau đó gắn bó đến nó. Và đừng sử dụng các thư viện khác, không chỉ jQuery, mà đó
là thư viện nổi bật nhất thao túng Dom đến các thư viện khác thực hiện những việc khác giống như Lodash làm ở đây. Chỉ
cung cấp cho tôi các chức năng tiện ích bằng JavaScript. Sử dụng hoàn toàn ổn, nhưng việc truy cập vào Dom chỉ nên được
thực hiện bởi một thứ, bởi một `framework`.

Nói đủ rồi.

Hãy quay lại Vue.js và tìm hiểu cách nó hoạt động.

Vue.js hoạt động với `templates`. Điều đó có nghĩa là về cơ bản nó cần một mẫu cho mã HTML thực tế mà nó sẽ tạo sau đó.
Chúng tôi đã có mã HTML và chúng tôi có thể yêu cầu Vue.js sử dụng mã này làm mẫu bằng cách gói nó trong `div` đó

```html

<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
<script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.core.min.js"></script>
<div id="app">
    <input type="text">
    <button>Add Todo</button>
    <ul></ul>
</div>
```

ví dụ.
Lấy tất cả mã đó và đặt nó vào `div` đó.

Vì vậy, như thế này.
Hãy để tôi dọn dẹp cái này và sau đó tôi sẽ cung cấp cho `div` này `id="app"`. Bạn có thể chọn bất kỳ ID nào khác hoàn
toàn tùy thuộc vào bạn. Tuy nhiên, chúng tôi sẽ cần nó trong giây lát. Vậy là bây giờ chúng ta có mã HTML gần giống như
trước đây.

Bây giờ trong JavaScript.

Tôi sẽ xóa mã đó sau, nhưng tôi sẽ bắt đầu đơn giản bằng cách sử dụng Vue. Và hãy nhớ rằng chúng tôi đã thêm phần nhập
nên điều tôi có thể làm ở đây là tôi có thể nói `new Vue()` để tạo một Vue mới

ví dụ.

Đó là cách Vue.js hoạt động và ở đó chúng tôi chuyển một đối tượng JavaScript để định cấu hình nó.

Vì vậy, về cơ bản, điều này khởi tạo Vue.js và bây giờ chúng ta có thể làm việc với nó ở đó. Đối tượng đó chúng ta có
thể thiết lập một vài thuộc tính. Điều quan trọng đầu tiên là thuộc tính nơi chúng ta nói với Vue.js, này, phần nào
trong HTML của chúng ta mã bạn nên kiểm soát?

Vậy bạn nên lấy phần nào làm mẫu để chúng tôi có thể làm việc cùng. Và ở đây chúng tôi sử dụng bộ chọn CSS thông thường,
ví dụ như ứng dụng `#` để chọn toàn bộ div này ở đây. `div` này, bây giờ điều này nằm dưới sự kiểm soát của Vue.js.

```javascript
new Vue({
    el: '#app'
});
```

Bây giờ bạn có thể nói và bây giờ chúng tôi muốn thêm chức năng tương tự mà chúng tôi đã có trước khi làm cho nút này có
thể nhấp được và thêm và bớt các phần tử. Bây giờ, vì chúng ta sử dụng một khung và kiểm soát phần HTML này nên chúng ta
có thể sử dụng các lệnh đặc biệt trong HTML. Bởi vì một lần nữa, hãy nhớ rằng phần này được kiểm soát bởi Vue.js. Vì
vậy, trong khi HTML, trong khi trình duyệt không hiểu các lệnh của chúng ta, thì Vue.js sẽ hiểu và về cơ bản nó sẽ hiểu
thay thế các lệnh bằng mã mà trình duyệt hiểu được trước khi mã truy cập vào trình duyệt.

Vì vậy, ví dụ: chúng ta có thể thêm trình nghe lượt nhấp chuột.

```html

<div id="app">
    <input type="text">
    <button v-on:click="">Add Todo</button>
    <ul></ul>
</div>
```

Và chúng ta có thể làm điều này bằng cách sử dụng `v-on:click`.
Bây giờ `v-on` là một chỉ thị, một lệnh được Vue.js hiểu và thứ sau dấu hai chấm `:` là sự kiện chúng tôi muốn nghe vì
chữ `v-on` lệnh báo cho Vue.js biết, vui lòng phản ứng với một sự kiện và sự kiện đó sau đó được chuyển làm đối số ở đây
sau dấu hai chấm.

Vì vậy, về cơ bản, điều này sẽ thiết lập một trình nghe lượt nhấp mà bạn có thể nói và ở đây tôi muốn thực hiện thao tác
thêm để làm. Tuy nhiên, điều này sẽ không nhắm mục tiêu chức năng của chúng tôi ở đây. Thay vào đó, chúng ta phải ở
trong thế giới Vue.js đó.

```javascript
new Vue({
    el: '#app',
    method: {}
});
```

Đối tượng khung nhìn này mà chúng ta chuyển đến thể hiện khung nhìn có một `property` khác. Vue.js hiểu và chúng tôi
không thể thêm bất kỳ thuộc tính nào vào đây. Nó phải là `properties`. Vue.js biết thêm về điều này trong phần Vue.js ở
phần sau của khóa học. Ví dụ: thuộc tính phương thức.

Bây giờ các `mothods` ở đây cho phép chúng ta thêm các phương thức của riêng mình như `addToDo`, khi đó chỉ là một hàm.

Vì vậy, đó là một đối tượng JavaScript bình thường mà chúng ta có ở đây với một chức năng hiện là một thuộc tính bổ sung
để thực hiện và điều này bây giờ là những gì người nghe nhấp chuột này sẽ đề cập đến.

```javascript
new Vue({
    el: '#app',
    method: {
        addTodo: function () {

        }
    }
});
```

Bây giờ đây là cách chúng ta có thể thêm một `todo`. Và để quản lý danh sách `todos`, tôi cần thêm một `property` khác
vào `view instance`, thuộc tính dữ liệu.

Vì vậy, khi các phương thức cho phép chúng ta đăng ký các phương thức của riêng mình, chúng ta có thể gọi từ Dom hoặc
bất kỳ phương thức nào khác đặt mã xem ở đây. `Data` cho phép chúng tôi thiết lập một số dữ liệu mà chúng tôi muốn làm
việc trong ứng dụng của mình. Vì vậy ở đây tôi sẽ thêm một đối tượng JavaScript làm `data`.

Và ở đó tôi sẽ thêm `todos` làm thuộc tính là một mảng trống.

```javascript
new Vue({
    el: '#app',
    data: {
        todos: [],
        userInput: ''
    },
    method: {
        addTodo: function () {
            var newTodo = {
                id: _.uniqueId(),
                value: userInput
            };
        }
    }
});
```

Vì vậy, điều này tương tự như `todo` ở dưới đó, nhưng bây giờ không phải là một biến, chỉ là một `property`. Trong đối
tượng này, chúng tôi thiết lập làm dữ liệu của `view instance` của chúng tôi, chỉ cần đưa nó trở lại bộ nhớ là xong
chúng tôi hiện đang làm việc vì `Vue` hiện đang nắm quyền kiểm soát mã HTML của chúng tôi.
Vì vậy, ở đây trong `todos` của chúng ta, bây giờ chúng ta có thể tạo một việc cần làm mới để chúng ta vẫn có thể
nói `var newTodo`.

Về cơ bản chúng ta chỉ có thể sao chép mã chúng ta có ở đây. Và thêm nó vào đây để thêm Todo mới. Có lẽ chúng tôi vẫn
muốn xác thực xem người dùng đã nhập nội dung nào hợp lệ hay chưa.

Vì vậy, để làm được điều này, chúng ta cần kiểm tra xem phần tử đầu vào của chúng ta ở đây có giữ mã hợp lệ hay không và
chúng ta có thể truy cập vào `input` này, nội dung người dùng đã nhập với `v-model` của chúng tôi.

Bây giờ với việc `remodel`, chúng ta có thể `bind` điều này với một số `data property` ở đây.

Vì vậy, đây có thể là `userInput`, ban đầu là một chuỗi trống.

```javascript
new Vue({
    el: '#app',
    data: {
        todos: [],
        userInput: ''
    },
    method: {
        addTodo: function () {
            var newTodo = {
                id: _.uniqueId(),
                value: userInput
            };
        }
    }
});
```

Và ở đây bây giờ tôi sẽ chuyển thông tin `userInput`.

```html
<input type="text" v-model="userInput">
```

Và điều này làm đối với các phần tử `input`, mô hình sẽ tự động tìm nạp bất cứ thứ gì người dùng đã nhập dưới dạng một
giá trị và chuyển nó đến một số thuộc tính trong thuộc tính `data` ở đây mà chúng tôi xác định giữa dấu ngoặc kép. Vì
vậy chúng tôi thiết lập liên kết này ở đây.

Vì vậy, vì chúng tôi tự động nhận được giá trị này trong hàm này nên về cơ bản chúng tôi có thể kiểm tra kỹ điều tương
tự chúng tôi đã làm đối với dữ liệu đầu vào của người dùng nếu người dùng nhập và `return`.

Tuy nhiên, nếu điều này không hợp lệ thì dữ liệu nhập của người dùng như thế này sẽ không hoạt động vì chúng ta không có
biến có tên đầu vào của người dùng tại thời điểm này.

Nhưng với thông tin đầu vào của người dùng này, Vuejs sẽ tự động cấp cho chúng tôi quyền truy cập vào phiên bản chế độ
xem này và `this` có thể trông có vẻ hơi kỳ diệu nếu bạn là nhà phát triển JavaScript có kinh nghiệm vì điều này có thể
phức tạp trong JavaScript,

```javascript
new Vue({
    el: '#app',
    data: {
        todos: [],
        userInput: ''
    },
    method: {
        addTodo: function () {
            if (this.userInput.trim() == '') {
                return;
            }
            var newTodo = {
                id: _.uniqueId(),
                value: userInput
            };
        }
    }
});
```

nhưng Vue.js sẽ đảm bảo rằng `this` thực sự sẽ luôn đề cập đến `view instance` và cấp cho chúng tôi quyền truy cập cho
tất cả các `method` và `property` hoặc tất cả `data` mà chúng tôi đã thêm vào phiên bản này bằng dữ liệu hoặc các đối
tượng phương thức.

Vì vậy, có một chút phép thuật ở đây, nhưng đó chính là nội dung của các `framework` như Vue. Vì vậy, bây giờ điều này
cho phép chúng tôi truy cập vào thông tin đầu vào của người dùng, cho phép chúng tôi kiểm tra xem nó có cho phép chúng
tôi tạo một công việc mới để làm và do đó cho phép chúng tôi sử dụng điều này để làm những `todo`, để truy cập
những `todo` của chúng tôi ở đây và sau đó đẩy để đẩy cái mới đó sang làm trên mảng `todos` này.

```javascript
new Vue({
    el: '#app',
    data: {
        todos: [],
        userInput: ''
    },
    method: {
        addTodo: function () {
            if (this.userInput.trim() == '') {
                return;
            }
            var newTodo = {
                id: _.uniqueId(),
                value: this.userInput
            };
            this.todos.push(newTodo);
            console.log(this.todos);
        }
    }
});
```

Bây giờ điều này thêm một `todo` mới. Bây giờ chúng ta hãy hiển thị `todo` trong danh sách `unordered` của chúng ta. Và
ở đây chúng ta lại làm việc với mã HTML vì nó lại nằm dưới sự kiểm soát của Vue.js và ở đó chúng ta có thể thêm một mục
list mà cuối cùng chúng ta muốn kết thúc. Và bây giờ là một lệnh khác, một lệnh khác Vue.js sẽ hiểu `v-for` cho phép
chúng ta lặp qua một số mục. Và ở đây tôi muốn lặp lại những `todo` của mình để tôi có thể nói `todo` trong
những `todos`.

```html

<div id="app">
    <input type="text">
    <button v-on:click="">Add Todo</button>
    <ul>
        <li v-for="todo in todos"></li>
    </ul>
</div>
```

Điều này sẽ làm là làm điều này sẽ tự động tham chiếu đến thuộc tính `data` của chúng tôi giống như người
dùng `ViewModel`đầu vào đề cập đến input của người dùng và việc cần làm chỉ là một biến sẽ lấy `todo` hiện tại để thực
hiện cho mỗi lần lặp.

Và bây giờ chúng ta có thể sử dụng một cú pháp khác là `{{}}`, Vue.js cũng hiểu như vậy. cho phép chúng ta xuất ra văn
bản riêng lẻ `todo`. Vì Todo là một đối tượng JavaScript nên đây sẽ là `value`. Việc cần làm sẽ đề cập đến từng đối
tượng trong mảng của chúng ta và các đối tượng có định dạng và giá trị này.

```html

<div id="app">
    <input type="text">
    <button v-on:click="">Add Todo</button>
    <ul>
        <li v-for="todo in todos">
            {{ todo.value }}
        </li>
    </ul>
</div>
```

Vì vậy, bất cứ điều gì chúng ta đã nhập, mã này sẽ xuất ra mã mới `todos`. Vì vậy, bây giờ chúng ta hãy loại bỏ tất cả
các mã JavaScript khác. Mọi thứ.

Và ở phần cuối của `addTodo`. Tuy nhiên, hãy cùng `console.log` điều này vào, chúng ta phải có một số giá trị trong đó
nếu chúng ta thấy điều gì đó ở đây. Bởi vì nếu không, vì chúng ta lặp qua các việc cần làm nên chúng ta sẽ không thấy gì
cả.

Nếu bây giờ tôi nhấn điều khiển, hãy mở bảng điều khiển và xóa nó để xem có lỗi nào không. Hãy thêm `Buy milk` và nhấp
vào thêm `todo` và chúng tôi gặp lỗi vì tất nhiên nếu tôi đóng bảng điều khiển ở đây khi chúng ta gán giá trị, đây cũng
phải là thông tin đầu vào của người dùng.

Giống như khi kiểm tra ở đây, chúng tôi phải tham khảo thông tin đầu vào của người dùng mà chúng tôi đã tạo trong dữ
liệu và do đó tự động được thêm vào phiên bản chế độ xem tổng thể được tạo. Vì vậy, nếu điều này xảy ra nếu bây giờ
chúng ta nhấn nút điều khiển, hãy nhập và mở bảng điều khiển, hãy xóa điều này và giả sử `Buy milk`. Hiện nay. Và bây
giờ bạn thấy `Buy milk` đã được thêm vào.
Và nếu chúng ta nói `Answer question`.

Câu hỏi ở đây. Bạn thấy đấy, cách này hiệu quả và chúng tôi đã có được mảng của mình.

Bạn có thể bỏ qua đối tượng quan sát này trong mảng được Vue.js thêm vào để thực hiện một số phép thuật đó. Nhưng chủ
yếu bạn sẽ thấy rằng `todo` của chúng tôi ở đây đã được thêm `ID` và tất nhiên là các giá trị ban đầu của chúng. Đó là
những gì Vue.js làm.

Và bạn đã thấy rằng mảng trông hơi khác một chút, rằng chúng tôi có một số phép thuật xem này trong đó. Và đây là cách
quản lý mã của chúng tôi dễ dàng hơn nhiều, dễ hiểu hơn nhiều. Và chúng ta không phải tạo tất cả các phần tử này một
cách thủ công. Thay vào đó, giờ đây chúng ta có Vue.js làm tất cả những việc đó cho chúng tôi.

#### Sẽ đặc biệt dễ dàng nếu bây giờ chúng ta cũng thêm chức năng loại bỏ các phần tử.

Tất cả những gì chúng ta phải làm cho việc này là thêm một trình nghe nhấp chuột khác vào mục danh sách và Vue.js sẽ tự
động thêm nó cho mỗi mục danh sách mới mà nó tự động tạo ra. `v-on:click` đây nơi tôi nói `removeTodo` . Cứ như vậy đi.

```html

<div id="app">
    <input type="text">
    <button v-on:click="">Add Todo</button>
    <ul>
        <li
                v-for="todo in todos"
                v-on:click="removeTodo(todo)">
            {{ todo.value }}
        </li>
    </ul>
</div>
```

Và điều duy nhất tôi phải làm ở đây là tôi phải chuyển `todo` làm đối số để loại bỏ.

Bây giờ chúng ta có thể thêm một phương thức `removeTodo`. Và tôi biết rằng tôi sẽ nhận được việc cần làm mà cần được
loại bỏ như một đối số khi tôi chuyển nó ở đây. Và với điều đó, điều chúng ta có thể làm là tôi có thể trích xuất ID
thành `todo.id` vì một lần nữa, việc cần làm chỉ đơn giản là một đối tượng thuộc loại này. Và bây giờ tôi có thể tiếp
cận mảng việc cần làm của mình bằng vòng lặp `for` để loại bỏ nó. Vì vậy, ở đây tôi có thể sử dụng lại vòng
lặp `var i=0` cho đến khi chúng ta kết thúc việc cần làm. Vì vậy, miễn là chúng ta ở trong độ dài của nó sẽ tăng lên ở
đây. Và sau đó chỉ cần kiểm tra xem việc cần làm có bị lỗi không.`ID` bằng `ID` chúng tôi đã truy xuất ở đây. Và sau đó
nếu chúng tôi tìm thấy một cái, hãy sử dụng `this.todos.splice(i, 1)` để loại bỏ phần tử này bằng mã giống như trước,
chỉ cần với điều này trước todos. Và sau đó cũng thoát ra khỏi vòng lặp này.

```javascript
new Vue({
    el: '#app',
    data: {
        todos: [],
        userInput: ''
    },
    method: {
        addTodo: function () {
            if (this.userInput.trim() == '') {
                return;
            }
            var newTodo = {
                id: _.uniqueId(),
                value: this.userInput
            };
            this.todos.push(newTodo);
            console.log(this.todos);
        },
        remoteTodo: function (todo) {
            var id = todo.id;
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id == id) {
                    this.todos.splice(i, 1);
                    break;
                }
            }
        }
    }
});
```

Bây giờ chúng ta không cần thêm bất kỳ mã nào khác để loại bỏ phần tử vì bây giờ hãy tự mình xem. Nếu chúng ta mở công
cụ dành cho nhà phát triển ở đây và tôi vào, `Buy Milk` rồi `Answer question`. Nếu tôi nhấp vào câu trả lời, nó sẽ bị
xóa. Và đó là bởi vì bây giờ bạn chỉ làm việc với dữ liệu, với logic và cách biểu diễn của mình.

Và Dom được Vue.js xử lý tự động. Vì chúng tôi lặp lại tất cả các việc cần làm ở đây và sao chép mục danh sách này
thường xuyên nếu cần để có `todo` được xuất ra Dom, Vue.js cũng sẽ nhận ra nếu chúng tôi xóa các phần tử khỏi mảng mà
chúng tôi sử dụng này ở đây và sau đó tự động xóa các phần tử khỏi dom.

Và đó chính là ưu điểm lớn của framework. Bạn không cần phải thực hiện việc quản lý chi tiết các phần tử trong Dom. Bạn
không cần phải viết quyền truy cập Dom. Vue.js sẽ làm điều này cho bạn. Chúng tôi thậm chí sẽ thực hiện việc đó theo
cách rất hiệu quả cho bạn để bạn có cơ hội đạt được hiệu suất tốt hơn là với mã của bạn và bạn thực sự có thể tập trung
vào logic kinh doanh của mình.

Và đây tôi nghĩ là mã rất rõ ràng, rất dễ hiểu. Và tất nhiên chúng ta sẽ tìm hiểu sâu hơn một chút về Vue.js và cách nó
hoạt động trong phần sau. Chúng tôi tập trung hoàn toàn vào Vue.js và sau đó chúng tôi cũng sẽ làm điều tương tự với
Angular và React để bạn có được một cảm giác tuyệt vời về khuôn khổ nào bạn có thể thích nhất. Nhưng tôi hy vọng rằng ví
dụ này đã cho thấy lý do tại sao sử dụng một framework như Vue có thể là một ý tưởng tuyệt vời.

### Understand other Parts of the JavaScript World

Vì vậy, trong bài giảng trước chúng ta đã tìm hiểu về JavaScript cơ bản. Chúng tôi đã thêm jQuery để cải thiện nó. Chúng
tôi đã thêm Lodash để cải thiện ứng dụng của mình và sau đó thay thế jQuery bằng Vue.js. Và bạn tìm hiểu cách một
framework như Vue.js có thể làm nhiều việc dễ dàng hơn, cách nó tự động xử lý về một số việc bạn phải làm thủ công trước
đây.

Vì vậy, trong thế giới JavaScript có một số thứ jQuery, angular, v.v. mà bây giờ chúng ta đã hiểu tốt hơn một chút

Chúng tôi đã biết rằng đây là những thư viện hoặc `framework` thực hiện một số nhiệm vụ nhất định và đôi khi có thể thay
thế nhau. Bạn thường sử dụng Angular hoặc React hoặc Vue hoặc bạn có thể thay thế jQuery bằng bất kỳ framework nào trong
số này hoặc bổ sung cho nhau.

Lodash chỉ đơn giản cung cấp một số chức năng tiện ích để bạn có thể sử dụng nó tốt với một trong các khung công tác
khác hoặc các gói.

Điều đó thật tuyệt, nhưng thế giới JavaScript còn có nhiều thứ hơn là chỉ các thư viện và `framework`.

Bây giờ chúng tôi đã hiểu.

Về cơ bản, chúng tôi cũng có những thứ như ES6, phiên bản JavaScript tiếp theo.

TypeScript, Webpack và Babel.

Và bạn có thể đã nghe nói về những điều này, nhưng chúng có ý nghĩa gì?

#### Họ đóng vai trò gì?

Vâng, như đã đề cập, chúng tôi hiểu thư viện là gì và khung vai trò nào.

Nhưng còn những thứ khác thì sao?

Chà, đối với Webpack và Babel, về cơ bản đây là những công cụ xây dựng, các gói chúng tôi sử dụng trong quá trình phát
triển, và điều đó quan trọng, không có vai trò gì khi ứng dụng đang chạy trên máy chủ nhưng chúng tôi sử dụng trong phát
triển để làm cho cuộc sống của các nhà phát triển của chúng tôi dễ dàng hơn một chút.

Chúng cho phép chúng tôi sử dụng các tính năng mà chúng tôi không thể sử dụng khi kết hợp với các `framework`. Chúng có
thể cho phép chúng tôi sử dụng một số tính năng nhất định dễ dàng hơn để phân chia mã của chúng tôi thành nhiều tệp và
sau đó `bundle` nó gộp lại thành một `bundle` mà chúng tôi gửi đến đầu cuối hoặc để tối ưu hóa `minify` mã của chúng
tôi.

Nhưng cũng có những thứ được kết nối với những thứ như ES6 và TypeScript. Về cơ bản, đây chỉ là những phiên bản khác của
JavaScript mà bạn có thể nói.

Bây giờ chúng tôi chỉ có một phiên bản chạy được trên hầu hết các trình duyệt và đó là JavaScript. Hay nói chính xác hơn
là Es5. Có thể bạn không biết nhưng JavaScript được lập phiên bản và chúng tôi thường xuyên nhận được các phiên bản mới
của JavaScript.

Bây giờ, vì JavaScript chạy trong trình duyệt nên một phiên bản mới có thể có sẵn sẽ không tự động được đưa ra được tất
cả các trình duyệt hỗ trợ vì các trình duyệt cũ thường không được cập nhật nên chúng sẽ không hỗ trợ trình duyệt mới
phiên bản của JavaScript.

Ví dụ: ES6 là phiên bản tiếp theo của JavaScript và nó thường có sẵn. Bạn có thể sử dụng nó, bạn có thể viết mã của mình
bằng ES6, nhưng nếu bạn gửi mã của mình như thế, nó sẽ không chạy trong tất cả các trình duyệt.

Đó là lý do tại sao chúng tôi có Webpack, một công cụ xây dựng và cụ thể là Babel, một Transpiler cho phép chúng tôi sử
dụng ES6 trong quá trình phát triển để có thể tận dụng tất cả các tính năng hay này. Nhưng sau đó Babel đã tích hợp vào
Webpack, nơi quản lý toàn bộ quy trình xây dựng của chúng tôi.

Bạn có thể nói rằng chúng tôi sẽ dịch ES6 sang Es5. Vì vậy, về cơ bản nó nghĩ ra các cách viết lại mã ES6 của chúng tôi
bằng mã Es5 để chúng tôi có thể sử dụng các tính năng mới. Nhưng giao hàng mã hoạt động (JS ES5).

Và TypeScript gần tương tự. Tuy nhiên, đây không phải là phiên bản tiếp theo. Đó là một ngôn ngữ riêng do Microsoft phát
triển, dựa trên JavaScript và bổ sung thêm các tính năng mới và tất nhiên cũng không chạy trên trình duyệt. Vì vậy, cái
này cũng phải được biên dịch bằng một trình biên dịch khác ở đây, nhưng nó cũng có thể được tích hợp vào quy trình làm
việc được quản lý bởi Webpack.

Và đó là cách chúng hoạt động cùng nhau, cách chúng tôi có những phần khác nhau, những ngôn ngữ khác nhau, xây dựng các
công cụ cho phép chúng tôi sử dụng nhiều tính năng hơn, các tính năng khác nhau trong quá trình phát triển và tối ưu hóa
mã của chúng tôi và sau đó là các thư viện và framework mà chúng ta đã tìm hiểu.

![Understand other Parts of the JavaScript World](/assets/images/react-js-angular-vue-js-quickstart-comparison-02.png)

### JavaScript Versions and Languages - ES6 and TypeScript

Vậy là chúng ta đã xem xét thế giới JavaScript và tôi đã giải thích ES6, TypeScript, v.v. là gì. Nhưng một lần nữa, để
làm rõ điều này, chúng ta hãy xem xét kỹ hơn.

Như đã đề cập, ES6 đơn giản là phiên bản tiếp theo của JavaScript và bạn có thể sử dụng nó ngay hôm nay, nhưng sẽ không
chạy trong tất cả các trình duyệt. Nó bổ sung thêm các tính năng mới, chẳng hạn như các lớp hoặc hàm mũi tên, những tính
năng này đã được cải tiến. Các chức năng hoạt động hầu hết thời gian, giống như các chức năng cũ, nhưng thêm một số tính
năng bổ sung và nó rất tuyệt để sử dụng các tính năng này nhưng lại không được hỗ trợ trong tất cả các trình duyệt. Vì
vậy, chúng tôi chỉ có thể viết các ứng dụng đang chạy trên các trình duyệt tiên tiến. Và tất nhiên chúng tôi không thể
dựa vào việc người dùng trang web của chúng tôi có những trình duyệt như vậy.

TypeScript là một ví dụ khác. Đây không phải là phiên bản tiếp theo nhưng nó là ngôn ngữ được phát triển bởi Microsoft
và nó cũng bổ sung thêm nhiều tính năng mới. Nhưng nó là một `superset` của JavaScript. Điều đó có nghĩa là nó luôn phải
được biên dịch sang JavaScript.

Cuối cùng, nó không chạy trình duyệt, nó chỉ mở rộng JavaScript, thay đổi cú pháp một chút và thêm nhiều tính năng mới.
Quan trọng nhất là các loại.

JavaScript theo mặc định là ngôn ngữ được có kiểu dữ liệu động và bạn không chỉ định kiểu dữ liệu. Khi bạn tạo một biến
mới, biến đó có thể chứa bất kỳ loại và dữ liệu nào. Vì vậy, bạn có thể giữ một chuỗi rồi gán một số và JavaScript sẽ
không phàn nàn. Đó có thể là một lợi thế, nhưng nó cũng có thể làm cho mã của bạn trở nên khó đoán hơn một chút.
TypeScript, Ví dụ, thêm các loại để bạn phải rõ ràng về loại biến nào sẽ giữ cuối cùng. Tuy nhiên, đó chỉ là một trong
những tính năng và bạn không cần phải sử dụng nó dưới bất kỳ hình thức nào nhưng nó có thể cung cấp một số lợi thế.
Nhưng một lần nữa, nó luôn cần được biên dịch sang JavaScript, nếu không nó sẽ không chạy trên trình duyệt.

Đây là lúc Babel phát huy tác dụng. Nó dịch ES6, không phải TypeScript. Trên thực tế, TypeScript có trình biên dịch
riêng.

Nhưng nếu ngày nay chúng ta sử dụng các tính năng của ES6 trong quá trình phát triển, chúng ta sẽ cần Babel, một trình
biên dịch chuyển mã ES6 của chúng tôi sang mã Es5, mã này cuối cùng sẽ chạy trong trình duyệt để chúng tôi có thể sử
dụng các tính năng trong quá trình phát triển và vẫn gửi `working code`.

Còn Webpack thì sao? Nó có phải là sự thay thế cho Babel không? Không, trên hết Webpack là một gói, có nghĩa là chúng ta
có thể chia mã của mình thành nhiều tệp, nhiều tệp JavaScript. Chỉ cần đặt một câu lệnh cho Webpack biết cuối cùng tệp
nào chúng tôi muốn nhập vào tệp khác và sau đó nó sẽ quét tất cả các lần nhập này và tạo một gói. Cuối cùng, điều này
cho phép chúng tôi tạo mã dễ bảo trì hơn vì chia nó thành nhiều tệp dễ dàng hơn để làm việc với chúng tôi. Nhưng cuối
cùng, chúng tôi lại có một tệp mà chúng tôi triển khai và gửi tới trình duyệt.

Trong quá trình đóng gói này, chúng tôi có thể tích hợp nhiều trình cắm hoặc trình tải khi chúng được gọi vào quy trình
làm việc của Webpack để chúng tôi không chỉ đóng gói các tệp mà còn có thể chuyển đổi nếu muốn họ.

Ví dụ: chúng tôi có thể tích hợp Babel vào quy trình đóng gói Webpack của mình và kiểm tra xem tệp có sử dụng ES6 không
và liệu nó có biên dịch nó thành Es5 trước khi gói mọi thứ hay không. Và điều tương tự đối với TypeScript. Bạn có thể
tích hợp trình biên dịch TypeScript vào quy trình làm việc Webpack của mình. Bạn cũng có thể tối ưu hóa mã của mình
và `minify` nó.

Vì vậy, đó là vai trò của Webpack.

Và có những lựa chọn thay thế như gulp hoặc grunt. Nhưng Webpack là phổ biến nhất và bạn có thể đã nghe nói về nó trong
khóa học này.

Một phần nơi chúng tôi phân tích dự án Vue.js sử dụng Webpack để chúng tôi có thể hiểu Webpack là gì thực hiện chi tiết
hơn một chút.

Vậy đó chính là ES6, TypeScript và Webpack và hy vọng điều đó sẽ xóa tan một số nhầm lẫn bạn có thể đã có.

Hy vọng điều này sẽ giải thích được vai trò của các gói và công cụ này.

![JavaScript Versions and Languages - ES6 and TypeScript](/assets/images/react-js-angular-vue-js-quickstart-comparison-03.png)

### Course Structure

Chúng ta vẫn đang ở phần bắt đầu nhưng chúng ta đã học được rất nhiều điều. Chúng tôi đã tìm hiểu ý nghĩa của các thuật
ngữ cơ bản, ý nghĩa của tất cả những điều này trong thế giới JavaScript, thư viện là gì và tại sao chúng ta có thể muốn
sử dụng một số `framework` là gì và tại sao chúng ta có thể muốn thay thế một số thư viện với các `framework`.

Bây giờ đã đến lúc phải tiếp tục.

Chúng ta sẽ xem xét kỹ hơn các `framework` JavaScript và hiểu cách chúng ta có thể thêm chúng vào các ứng dụng. Bởi vì
có nhiều hơn một cách để làm như vậy. Chúng tôi sẽ hiểu điều gì tạo nên những `framework` như vậy, cách chúng hoạt động
cũng như những tính năng chúng cung cấp cho chúng tôi. Sau khi tìm hiểu điều đó, chúng ta sẽ đi sâu vào từng `framework`
một, ba khung phổ biến nhất.

Chúng ta sẽ bắt đầu với Vue.js.

Chúng ta đã xem qua phần bắt đầu ở đây, nhưng ở đó chúng ta sẽ đi sâu hơn và tìm hiểu cú pháp cơ bản, khái niệm đằng sau
nó, cách thức hoạt động và cách chúng ta có thể tạo ra các loại ứng dụng khác nhau với nó sau đó trước khi đi sâu vào
các khuôn khổ khác, tôi sẽ dừng lại một giây và xem xét tại Webpack và quy trình xây dựng khi sử dụng Vue.js.

Đến cuối mô-đun đó, chúng ta sẽ có một thiết lập cục bộ sử dụng Webpack để gói mã của chúng ta, biên dịch nó hoặc biến
đổi nó một chút và cũng tối ưu hóa nó.

Chúng ta sẽ xem xét quy trình làm việc này trong phần này tại đây và hiểu Webpack làm gì ở đây cho chúng ta và lý do tại
sao chúng tôi sử dụng nó.

Sau đó, chúng ta sẽ quay lại các framework. Chúng ta sẽ xem xét React JS Một framework rất phổ biến và tuyệt vời và
chúng ta sẽ hiểu framework này hoạt động như thế nào. Bạn sẽ thấy khá khác với Vue.js, nhưng rất thú vị khi đi sâu vào
vấn đề đó để bạn có thể có được ấn tượng về việc điều đó có thú vị với bạn hay không.

Chà, sau React chúng ta sẽ xem xét Angular trong phiên bản mới nhất của nó, Angular 4 vào thời điểm này. Tuy nhiên, bây
giờ chúng tôi cũng sẽ có hiệu lực cho các phiên bản sau này.

Chúng ta sẽ tìm hiểu cách Angular hoạt động, cách chúng ta tạo các dự án góc và cách chúng ta làm việc với Angular, khái
niệm `framework` này sử dụng.

Sau đó, chúng ta đã xem xét ba framework quan trọng nhất.

Chúng tôi đã xem xét những thứ khác như Webpack và sau đó bạn sẽ có ấn tượng rõ ràng về thế giới JavaScript, vai trò của
từng bộ phận và cách chúng ta có thể sử dụng chúng.

Và đặc biệt là bạn sẽ có ấn tượng về cách hoạt động của các framework này và bạn thích cái nào nhất.

Dù vậy tôi vẫn chưa xong việc.

Tôi sẽ có một mô-đun để so sánh các khung này. Tôi sẽ có một vài chủ đề hoặc tiêu chí mà tôi sẽ so sánh các framework
với nhau để bạn cũng có thể có thêm ý tưởng về framework nào có thể phù hợp cho nhiệm vụ nào.

Chà, sau đó, bạn thực sự nên chuẩn bị chọn khung yêu thích của mình và tìm hiểu sâu hơn vào đó nếu bạn muốn.

![Course Structure](/assets/images/react-js-angular-vue-js-quickstart-comparison-04.png)

### Module resource

Mã nguồn của mô-đun này có thể được tìm thấy trên JSFiddle:

Vanilla JS App: https://jsfiddle.net/smax/23pxksab/

jQuery + Lodash App: https://jsfiddle.net/smax/q5wLaodv/

Vue.js App: https://jsfiddle.net/smax/g7hc05vu/

## Section 2: Understanding JavaScript Frameworks in General

### Module Introduction

Chào mừng bạn đến với mô-đun khóa học này.

Chúng tôi mới bắt đầu và đã hiểu tại sao Vue.js trong ví dụ chúng tôi sử dụng có thể tốt hơn jQuery cho một số tác vụ.

Bây giờ trong mô-đun này, chúng ta sẽ xem xét kỹ hơn các khung JavaScript này và bạn sẽ biết rằng có thực tế là hai cách
khác nhau để sử dụng chúng.

Bạn sẽ tìm hiểu hai cách này trông như thế nào và khi nào bạn có thể chọn cách nào cũng như cách các khung có thể hoạt
động chung giúp bạn trong ứng dụng của bạn.

Vậy hãy bắt đầu.

### JS Frameworks in Fullstack Applications

Đây là cách đầu tiên chúng ta có thể sử dụng `framework` JavaScript.

Chúng tôi có một ứng dụng web điển hình, một ứng dụng `full stack` nơi chúng tôi có một số chương trình phụ trợ sử dụng
PHP với có thể một số framework như Laravel hoặc ASP.Net hoặc NodeJS, có thể với một framework như Express.

Bây giờ chúng tôi gửi yêu cầu đến đó và thông thường chúng tôi sẽ nhận lại một trang.

Tuy nhiên, trong hầu hết các ứng dụng, chúng tôi có một số `route` được đăng ký trên máy chủ để khi chúng tôi gửi ở đó
có một yêu cầu dành cho các yêu cầu khác nhau, vì vậy về cơ bản các URL khác nhau như `/blog` hoặc `/about` chúng tôi,
chúng tôi lấy lại các trang khác nhau như thế, vì vậy cuối cùng chúng tôi lấy lại các trang HTML khác nhau, khác nhau Mã
HTML.

Thông thường điều này được gọi là `views`.

![JS Frameworks in Fullstack Applications](/assets/images/react-js-angular-vue-js-quickstart-comparison-05.png)

Vì vậy, backend `PHP` hoặc `node` hoặc bất cứ thứ gì render `view` cho chúng tôi, cho máy khách.

Vì vậy, chế độ xem này thường bao gồm HTML, JavaScript và CSS và nó trình bày hoặc tạo nên trang web. Sau đó, chúng tôi
sẽ xem và có thể làm việc với nơi chúng tôi có thể nhấp vào liên kết để tải trang mới.

Có lẽ bây giờ theo cách tiếp cận này, tất nhiên chúng ta có thể sử dụng JavaScript để làm điều gì đó trên các trang
riêng lẻ này và chúng ta cũng có thể sử dụng một số framework ở đó. Chúng tôi có thể thêm một khung như `Vue.js` để nâng
cao từng trang riêng lẻ ở đây và điều đó cực kỳ quan trọng. Tất nhiên, chúng tôi sẽ thêm mã nhập `JavaScript` khung vào
mỗi trang này vì chúng tôi cần khuôn khổ trên mỗi trang, ít nhất là trên mỗi trang mà chúng tôi muốn sử dụng nó. Vì vậy,
hãy quay lại ví dụ Jsfiddle từ ứng dụng đầu tiên, từ mô-đun đầu tiên trong khóa học này rõ ràng là chúng tôi chỉ có một
trang mà chúng tôi đang làm việc, nhưng bạn có thể nghĩ đến trang đó mà JS fiddle trình soạn thảo mà chúng tôi đã làm
việc với phần HTML, CSS và JavaScript đó dưới dạng một trang trong nhiều trang theo cách tiếp cận như vậy, trong một ứng
dụng web điển hình như vậy.

Bây giờ, theo cách tiếp cận này, như đã đề cập, chúng tôi có các phiên bản khác nhau và bạn có thể nói các `app` được
xây dựng với chúng tôi đối với các trang khác nhau và một số trang có thể không sử dụng `framework` của chúng tôi.

Nếu họ không cần nó thì tại sao họ lại sử dụng nó?

Vì vậy, chúng tôi tạo một ứng dụng với `framework` đó cho các trang khác nhau còn được gọi là `multi-page application`
vì chúng tôi lấy lại nhiều trang từ máy chủ cho các yêu cầu khác nhau. Đó là cách đầu tiên để sử dụng một `framework`
như vậy. Và như bạn sẽ học trong suốt khóa học này, không phải mọi `framework` đều phù hợp với phương pháp này.

Chà, nếu đúng như vậy thì giải pháp thay thế là gì?

### JS Frameworks in Single-Page-Applications

Trong bài giảng trước, chúng ta đã biết rằng một cách sử dụng khung JavaScript như Vue.js là sử dụng nó trong các trang
khác nhau của `full-stack application` của chúng tôi, ở các chế độ xem khác nhau. Chúng tôi nhận được phản hồi từ máy
chủ và một số `views` có thể không sử dụng nó. Điều đó hoàn toàn ổn.

Bây giờ, giải pháp thay thế khá hiện đại và là xu hướng lớn hiện nay là tạo một `single-page application`. Máy chủ của
chúng tôi chỉ trả về một trang HTML cho tất cả các URL mà chúng tôi có thể gửi tới trang đó. Điều đó nghe có vẻ lạ vì rõ
ràng chúng ta cần các trang khác nhau. Nếu tôi truy cập `/blog`, tôi chắc chắn muốn nhận về một trang khác so với khi
tôi truy cập `/about-us`.

Bí quyết là trang chúng tôi lấy lại thực sự sẽ không chứa bất kỳ nội dung nào, nhưng nó sẽ chứa JavaScript của `app` và
tất nhiên đó sẽ là một `app` lớn hơn nhiều so với `app` nhỏ mà chúng ta có thể thêm vào các trang riêng lẻ của
một `multi-page application`.

Sau đó, ứng dụng này thực sự sẽ nắm bắt URL của chúng tôi, phân tích cú pháp và hiển thị các trang khác nhau, nhưng nó
sẽ chỉ trông như thế này với người dùng để JavaScript của họ sẽ tiếp quản và kiểm soát toàn bộ giao diện người dùng.

Nó sẽ đảm bảo với chúng ta rằng, chúng có vẻ như các trang khác nhau. Trang này sẽ thay đổi nhưng mọi thứ sẽ được xử lý
bằng JavaScript và chúng tôi sẽ không bao giờ tải lại trang. Chúng tôi sẽ không bao giờ nhận được một trang mới từ máy
chủ. Thay vào đó, mã HTML sẽ được thay đổi khi chạy bằng JavaScript.

Tại sao chúng ta lại sử dụng nó?

* Bởi vì nó nhanh hơn nhiều.
* Chúng tôi không phải gửi yêu cầu và chờ phản hồi.
* Chúng tôi không phải tải xuống mã mà chúng tôi có thể đã sử dụng trước đây.
* Thay vào đó, mọi thứ diễn ra ở `front-end`. Mọi thứ xảy ra ngay lập tức, rất phản ứng.

Và ví dụ: nếu chúng tôi cần liên hệ với máy chủ vì chúng tôi muốn lưu trữ một số dữ liệu trong cơ sở dữ liệu, vậy thì
JavaScript có thể thực hiện điều đó một cách bí mật để chúng ta vẫn không phải rời khỏi `single page` của mình.

Một điều quan trọng chúng ta phải lưu ý ở đây là khi tạo một `single-page application`, chúng ta sẽ có một số `server`
chứa logic nghiệp vụ mà chúng tôi kết nối ở `back-screen`. Nhưng máy chủ phục vụ `single page` này, tệp index.html đơn
này và các tệp JavaScript có thể là một máy `static server`. Chúng tôi không cần `Apache` hoặc bất kỳ `intepreter` (
trình thông dịch) `PHP` nào ở đó. Chúng tôi không cần `NodeJS` cho việc đó. Đó có thể là bất kỳ `server` nào bạn chọn có
mục đích duy nhất là cung cấp lại cho chúng tôi tệp HTML này và một vài tệp JavaScript và CSS.

Bây giờ chúng ta hãy xem các ví dụ cho cả hai cách tiếp cận.
Một số ví dụ thực tế để điều đó trở nên rõ ràng hoặc dễ hiểu hơn một chút.

![JS Frameworks in Single-Page-Applications](/assets/images/react-js-angular-vue-js-quickstart-comparison-06.png)

### An Example for a Framework in a Fullstack Application

Hãy lấy `Udemy.com` làm ví dụ. Nếu chúng ta truy cập trang này ở đây, `Udemy.com`, và tôi được chuyển tiếp để `/courses`
, thì đây thực chất là một`multi-page application` bởi vì nếu bây giờ tôi tìm kiếm `angular` ở đây và nhấn enter, bạn
xem trang được làm mới và chúng tôi đã tải một trang mới. Bạn có thể thấy điều đó bằng icon refresh spin trên đó. Vì
vậy, bây giờ đây là trang mới mà chúng tôi đã quay lại.

Và nếu bây giờ tôi nhấp vào `Development` > `Web development`, hãy xem lại `icon` này. Một lần nữa, chúng tôi đã tải một
trang mới và chúng tôi có thể xác nhận điều này bằng cách mở các công cụ dành cho nhà phát triển trong trình duyệt của
mình đi tới tab `network`.

Và bây giờ nếu tôi nhấp vào `Development` > `Mobile Apps` chẳng hạn, bạn sẽ thấy chúng tôi gửi một vài yêu cầu và về cơ
bản chúng tôi đã lấy lại được một trang web mới với rất nhiều nội dung trong đó. Bây giờ nếu tôi tìm kiếm lại `angular`
và nhấn enter lần nữa, chúng tôi sẽ tải xuống một trang hoàn toàn mới và trang này là điều luôn xảy ra nếu chúng ta
chuyển trang ở đây.

Ví dụ: đó là trang chúng tôi đã tải xuống. Đó là mã HTML chúng tôi đã lấy lại được.

Đó là một trang khác với trang chúng ta đã ở trước đây. Bây giờ đây là một ứng dụng web bình thường.

Làm thế nào để tôi biết rằng nó sử dụng một số `framework`? Bởi vì đó chính là điểm tôi đang cố gắng thực hiện, rằng
chúng ta có thể sử dụng một `framework` như `Vue`, chẳng hạn như một `multi-page application` .

Chà, rõ ràng là tất cả các trang này đều có một số thành phần được kiểm soát bởi JavaScript. Vì vậy, ví dụ: ở đây trên
trang tìm kiếm nơi tôi đã tìm kiếm `Angular`, tôi có thể đặt bộ lọc như cấp độ tôi muốn đặt nó ở mức độ `beginer`. Bây
giờ nếu tôi nhấp vào đây, nó sẽ cập nhật trang mà không cần tải lại. Bạn có thể nhận biết bằng biểu tượng đó ở đây nếu
tôi bỏ chọn nó, bạn nhìn thấy nó, cập nhật nó, nhưng chúng tôi không nhận được trang mới được thực hiện bằng JavaScript,
vì JavaScript là thứ duy nhất có thể chỉnh sửa trang của chúng tôi trong thời gian chạy.

Chúng tôi có thể xác nhận rằng họ sử dụng `framework` cho việc này bằng cách quay lại tab `network` và tải lại một lần
nữa trang này ngay bây giờ để tôi tải lại hoặc tải xuống lại tất cả nội dung.

Vì vậy, bạn có thể muốn tắt `cache` ở đây để buộc trình duyệt tải xuống lại tất cả nội dung.

Tại sao tôi muốn tải lại mọi thứ? Bởi vì nếu chúng ta cuộn lên đây trong tab `network`, chúng ta sẽ thấy điều gì đó
tương đối thú vị ở trên cùng đây. Tệp `vendor.entry....` này, bạn thấy đó là tệp JavaScript và nó có tên tệp lạ này,
nhưng đó chỉ là cách họ đặt tên cho nó trong quá trình xây dựng.

Nhân tiện, nếu chúng ta nhấp vào nhà cung cấp này, luôn ngụ ý rằng đó là một `framework` nào đó, một `library` nào đó,
không phải mã do họ viết. Nếu chúng ta nhấp vào đây, chúng ta sẽ thấy điều gì đó thú vị trong tệp này. Ngay trên đầu
chúng ta thấy thỏa thuận cấp phép Angular 1.5.

Vì vậy, về cơ bản, Angular là một. Chà, điều đó có nghĩa là họ đang sử dụng Angular làm `framework` trên trang này. Và
nó có ý nghĩa vì việc cập nhật danh sách kết quả này và tất cả những việc khác bạn có thể làm trên này trang được điều
khiển bằng JavaScript sẽ rất cồng kềnh nếu được viết bằng tay với vanilla JavaScript.

Nhưng ở đây một lần nữa, ứng dụng Angular này chỉ là một phần của trang tìm kiếm này. Nếu chuyển sang đây, các khóa
học `financial` chẳng hạn, tôi không có bộ lọc ở đây. Có thể chúng ta có một số ứng dụng Angular khác ở đây, có thể có
một số chức năng được chia sẻ với ứng dụng trước đó, nhưng chúng tôi có ứng dụng Angular mới trên trang này. Chúng tôi
có một tệp khác ở đây hoặc một mã khác sẽ chạy cuối cùng. Và đó chính là điều tôi muốn nói.

Chúng tôi có Angular đang được thêm vào ứng dụng nhiều trang của chúng tôi. Với mỗi trang mới tôi nhận được ở đây, tôi
tải lại `angular code` hoặc trình duyệt của tôi có thể lưu nó vào `cache` để cải thiện hiệu suất, nhưng nhìn chung nó
được phục vụ bởi mỗi trang mới và do đó đây không phải là một `single-page application`.

Vậy `single-page application` là gì?

Chà, nếu tôi chuyển sang các `my-courses` và có thể bạn cũng có ít nhất một khóa học, khóa học bạn đang xem ngay bây
giờ, bạn có thể thấy đây là một số khóa học tôi đã đăng ký. Bây giờ nếu tôi tham gia một trong những khóa học này, có
thể là khóa học Ruby ở đây và tôi nhấp vào nó bây giờ về cơ bản chúng ta sẽ nhập một loại ứng dụng khác.

Hãy xem ứng dụng nào trong bài giảng tiếp theo.

### Fullstack Approach - Pros and Cons

Bây giờ chúng ta đã thấy các ví dụ cho cả `multi-page application` tích hợp `framework` JavaScript vào
các `views` khác nhau và một `single-page application` trong đó chúng tôi có một `app` JavaScript điều khiển toàn bộ
trang,
Chúng ta hãy xem những ưu điểm hoặc nhược điểm mà mỗi phương pháp này có thể có.

Hãy bắt đầu với cách tiếp cận `multi-page fullstack`.

#### Tại sao chúng ta có thể sử dụng nó? Tại sao chúng ta có thể không làm như vậy?

Hãy bắt đầu với những ưu điểm ở đây.

![Fullstack Approach - Pros and Cons](/assets/images/react-js-angular-vue-js-quickstart-comparison-07.png)

Về mặt ưu điểm, có thể nói nó rất thân thiện với việc tối ưu hóa công cụ tìm kiếm SEO.
Đây cũng là lý do tại sao Udemy chọn cách tiếp cận này cho trang tìm kiếm khóa học của mình, v.v.
Tất nhiên họ muốn Google tìm thấy những trang này.
Họ muốn Google lập chỉ mục các trang này.

Tại sao lại thân thiện hơn thế?
Bởi vì trình thu thập thông tin đang gặp khó khăn khi đọc JavaScript và đặc biệt là mã JavaScript tải
mọi thứ `asynchronously`.
Nếu chúng tôi chuyển trang trên một `single-page application` và do đó URL thay đổi và hiển thị lại JavaScript
các phần của trang đó mà không cần tải trang mới.

Chà, trình thu thập thông tin sẽ làm điều đó như thế nào?
Đó là điều mà hiện tại trình thu thập thông tin không thể thực hiện được, đó là tạo một trang mới.
Hiện tại thân thiện hơn với SEO.

Ngoài ra, một lợi thế khác là chúng tôi có rất nhiều `frameworks` cho hướng tiếp cận này.
Nếu bạn đang làm việc với `PHP Laravel`, có rất nhiều hướng dẫn.
Nếu bạn đang làm việc với `NodeJS Express`, sẽ có rất nhiều hướng dẫn vì hầu hết các ứng dụng, hầu hết các trang web đều
hoạt động như thế này vì đây là cách duy nhất để tạo ứng dụng hoặc tạo trang web cho đến tận 3 hoặc 4 năm trước kia.
Hiện tại nó đang thay đổi, nhưng chúng tôi vẫn có những ứng dụng này hỗ trợ phần lớn tất cả các trang Web.

Bây giờ, một lý do khác là chúng tôi có các giải pháp bảo mật đơn giản hơn.
Với điều đó, ý tôi không có nghĩa là bảo mật sẽ dễ dàng hơn nhưng vì lần trước chúng tôi đã sử dụng loại ứng dụng này 10
năm, 20 năm, rất nhiều vấn đề đã được giải quyết và rất nhiều `framework` bạn thường sử dụng
có tính năng bảo mật được tích hợp vào chúng.
Vì vậy, đó là một lợi thế ở đây.

Một ưu điểm khác là bạn có cơ hội nhận được ứng dụng hoạt động cao hơn nếu người dùng chuyển sang
tắt JavaScript vì tất nhiên là trong một ứng dụng một trang hoàn toàn được điều khiển bởi JavaScript,
nếu người dùng tắt tính năng đó, bạn sẽ gặp khó khăn với một `fullstack application` nơi bạn thêm một số chức năng
với JavaScript, ít nhất một phần trang của bạn vẫn có thể hoạt động mà không cần đến nó.

Hiện nay có một số nhược điểm, nếu không chúng tôi sẽ không có xu hướng chuyển sang các ứng dụng một trang,

Phải?

Một nhược điểm lớn là thời gian phản hồi bị chậm và nó có vẻ không phải là một vấn đề vì nó tương đối
nhanh, nhưng việc phải tải lại trang cho mọi thứ chúng ta nhấp vào thực sự không lý tưởng.
Ví dụ, đó không phải là những gì chúng ta đã quen với điện thoại di động của mình.

Trên ứng dụng dành cho thiết bị di động, chúng ta chạm vào thứ gì đó và ngay lập tức thứ gì đó sẽ thay đổi.
Và một lần nữa, nếu chúng ta cần tải dữ liệu hoặc lưu trữ dữ liệu diễn ra ở hậu trường và điều đó sẽ thật tuyệt
để có các ứng dụng web hoạt động theo cách tương tự.

Một điều nữa là rất dễ kết hợp giữa trình bày và logic nghiệp vụ trong các phương pháp tiếp cận ngăn xếp đầy đủ này,
đặc biệt là khi sử dụng PHP, chẳng hạn, thật dễ dàng để nhúng quá nhiều logic nghiệp vụ chạy trên
server vào mã `front end` của bạn vào `views` của bạn.

Điều đó không hẳn là một vấn đề, nhưng nó có thể trở thành một vấn đề và có thể dẫn đến mã có vấn đề trong đó
bạn có rất nhiều logic xảy ra trong mã `front end` của mình.

Trên thực tế, một nhược điểm khác là bạn có thể phải học nhiều trang.
Nếu bạn đang làm việc với tư cách là một nhà phát triển `full stack`, bạn có thể phải học PHP.
Nếu bạn đang sử dụng nó trên máy chủ, bạn sẽ cần `HTML`, `CSS` và `JavaScript`.
Có thể là cái khác.
Không nhất thiết là một bất lợi lớn, nhưng nó có thể là một vấn đề.
Bạn có thể tập trung hơn khi chỉ phát triển các `single-page application` hoặc chỉ làm việc ở `front-end`.

### Single-Page-Application - Pros and Cons

Vì vậy, bây giờ trong bài giảng trước chúng ta đã xem xét những ưu và nhược điểm của cách tiếp cận `full stack`, trong
đó chúng ta
thêm `framework` vào từng trang riêng lẻ và tạo các ứng dụng nhỏ cho các trang này.

Bây giờ, còn cách tiếp cận một trang thì sao?
Chúng ta có những ưu và nhược điểm nào ở đó?

![Single-Page-Application - Pros and Cons](/assets/images/react-js-angular-vue-js-quickstart-comparison-08.png)

Hãy bắt đầu lại với những ưu điểm.
Nó giống như mặt trái của nhược điểm của phương pháp kia.

Nó có thời gian phản ứng rất nhanh.
Rõ ràng, vì chúng ta chỉ sử dụng JavaScript và JavaScript chạy trên trình duyệt nên khi chúng ta nhấp vào đâu đó
và chúng tôi thay đổi điều gì đó, điều đó xảy ra gần như ngay lập tức và điều đó mang lại trải nghiệm tuyệt vời cho
người dùng vì
mọi thứ sẽ cập nhật nếu bạn cần tải một số dữ liệu, hiển thị một công cụ quay vòng, nhưng nó sẽ có cảm giác phản ứng
nhanh hơn nhiều
và tương tác với người dùng và điều đó thực sự quan trọng và điều đó thực sự quan trọng.

Các ưu điểm khác là chúng tôi có sự tách biệt tốt hơn giữa logic kinh doanh và logic trình bày vì tính chất quan trọng
của chúng tôi
logic nghiệp vụ phải chạy trên máy chủ.
JavaScript luôn mở cho tất cả mọi người.
Chúng ta phải khác biệt, chúng ta sẽ phải tập trung vào những điều quan trọng đối với trải nghiệm người dùng
trong mã `front end` của chúng tôi và chúng tôi sẽ phải tập trung vào các mục logic nghiệp vụ quan trọng trên `server`
và
trộn nó khó hơn và đó là một điều tốt.

Ngoài ra, chúng tôi có thể cung cấp trải nghiệm người dùng tuyệt vời vì mọi thứ đều có tính phản hồi, vì mọi thứ
diễn ra rất nhanh và bởi vì nếu chúng ta tạo một `single-page application`, chúng ta vẫn phải thay đổi
URL.

Vì vậy, nó có cảm giác giống như một trang web truyền thống đối với người dùng.
Nhưng một lần nữa, mọi thứ diễn ra nhanh hơn và chúng tôi có thể phản ứng tốt hơn với những gì người dùng đang thực hiện
trên trang của chúng tôi.
Chúng tôi có thể theo dõi người dùng tốt hơn và cung cấp trải nghiệm người dùng tốt

và chúng tôi cũng có thể cung cấp hỗ trợ ngoại tuyến
một lần nữa, vì chúng tôi đang sử dụng JavaScript và nó chạy trong máy khách.
Về mặt lý thuyết, chúng tôi không cần kết nối Internet mọi lúc, vì vậy nếu chúng tôi cung cấp đúng mã
chúng tôi có thể đảm bảo rằng ứng dụng của chúng tôi vẫn hoạt động khi người dùng ngoại tuyến hoặc nếu họ tạm thời sử
dụng Internet
sự liên quan.

Một lần nữa, bên cạnh trải nghiệm người dùng tuyệt vời này, chúng tôi cũng có những nhược điểm.

Nhược điểm lớn nhất là việc tối ưu hóa công cụ tìm kiếm rất khó khăn.
Nếu bạn muốn các trang của mình được Google lập chỉ mục thì việc sử dụng một ứng dụng một trang là điều khó khăn.
Hiện nay có các công cụ và cách thức mới giúp việc này trở nên dễ dàng hơn, hoạt động với các phần kết xuất trước của
ứng dụng của bạn trên máy chủ để Google nhìn thấy những gì người dùng nhìn thấy.

Nhưng điều này vẫn đang nổi lên và có thể thực hiện được nhưng khó hơn so với cách tiếp cận khác.
Vì vậy, nếu `SEO` rất quan trọng đối với trang của bạn, bạn thậm chí có thể tìm hiểu những cách mới nổi này hoặc bám sát
ứng dụng nhiều trang trong đó bạn vẫn có thể sử dụng các `framework`, chỉ dành cho ứng dụng một trang
phép cộng.

Cuối cùng, bảo mật cần được suy nghĩ nhiều hơn và với điều đó, ý tôi không phải là nó không an toàn, nhưng vì điều này
Cách tạo ứng dụng tương đối mới, nhiều vấn đề bảo mật điển hình được giải quyết một phần, nhưng
bạn sẽ phải tìm hiểu thêm nhiều hướng dẫn hơn, nhiều bài đăng trên blog hơn để đọc về các phương pháp hay nhất, để tìm
hiểu cách
để giải quyết các vấn đề bảo mật cụ thể.
Vì vậy, tất cả đều có thể thực hiện được, nhưng khó hơn một chút so với thế giới cũ.

Trong các `multi-page application`, nơi có nhiều `framework` được tích hợp sâu vào chúng.
Và một điểm nữa là nó sẽ không hoạt động nếu không có JavaScript.
Nếu người dùng tắt JavaScript, ứng dụng của bạn sẽ không hoạt động.
Tuy nhiên, hãy nhớ rằng chỉ có khoảng 2% tổng số người dùng Internet tắt tính năng này, vì vậy điều đó có thể
không quan trọng với bạn.
Nhưng nếu điều đó quan trọng thì `single-page application` không phải là lựa chọn dành cho bạn.

Đó là những ưu điểm và nhược điểm của việc tạo một `single-page application`.
Và với điều đó, hy vọng bạn có được cái nhìn tổng quan tốt về hai cách tiếp cận mà bạn có thể sử dụng, trong đó
Khóa học này chúng ta sẽ đi sâu vào các `framework` theo cách cho phép bạn tạo hoặc sử dụng chúng trong
dù thế nào đi nữa.
Nhưng tất nhiên, như mọi khi, bạn sẽ phải tham gia một số khóa học dành riêng cho các `framework` này để học
thêm về họ sau đó.
Nhưng trước khi đi đến điểm này, hãy tiếp tục trước.

### Prerequisites for the Different JS Frameworks

Bây giờ, trước khi đi sâu vào `framework` đầu tiên, chúng ta sẽ làm việc với `Vue.js` trong khóa học này.
Hãy hiểu những điều kiện tiên quyết mà các `framework` này có từ góc độ `JavaScript`.

Chúng tôi có `Vue`, `React` và `Angular` và như chúng tôi đã tìm hiểu, chúng tôi có nhiều phiên bản `JavaScript` mà
chúng tôi có thể sử dụng
có thể dùng.
Chúng tôi có `Es5`, `ES6` và `TypeScript` và chúng tôi cũng có những thứ khác như `Coffeescript`, đây cũng là một
superset
nhưng ngày nay không phổ biến lắm.

Vì vậy, tôi sẽ bám vào ba điều này.
`ES6` và `TypeScript` cần một quy trình làm việc cục bộ nên chúng ta cần một số công cụ như `Babel` kết hợp
với `Webpack` để
dịch nó sang `Es5` vì một lần nữa, nó sẽ không chạy trong tất cả hoặc trong trường hợp `TypeScript` trong bất kỳ trình
duyệt nào.
Vậy `framework` nào hỗ trợ ngôn ngữ nào hoặc cần ngôn ngữ nào?

#### Hãy bắt đầu với `Vue`.

Nó hoạt động hoàn toàn tốt với `Es5`, vì vậy bạn có thể viết tất cả mã bằng ngôn ngữ hoạt động như
cái này trong trình duyệt, vì vậy bạn không cần phải dịch mã, biên dịch hoặc làm bất cứ điều gì với nó.
Bạn vẫn có thể thiết lập quy trình làm việc để tối ưu hóa mã của mình, gói nó lại nếu bạn muốn chia nó thành nhiều phần.
các tập tin hoặc tối ưu hóa nó, thu nhỏ nó nhưng bạn sẽ không cần phải dịch mã nó.

`Vue.js` cũng hoạt động tốt với `ES6`.
Nó hỗ trợ cả hai ngôn ngữ và nếu bạn muốn sử dụng một số tính năng `ES6` mới, hãy thoải mái thực hiện
Vì thế.
Bạn sẽ cần quy trình làm việc cục bộ đó.

Tất nhiên, nó cũng hoạt động với `TypeScript`, nhưng việc thiết lập khó khăn hơn.
Không có hỗ trợ chính thức, nhưng bạn có thể thêm một số gói.
Không phải là siêu tầm thường nhưng về mặt lý thuyết có thể thực hiện được.
Nếu bạn đã biết `TypeScript` và là một người hâm mộ lớn, bạn có thể tìm kiếm các bài viết giải thích điều đó và
nó có thể thực hiện được.

#### Còn `React` thì sao?

`React` sẽ hoạt động với `Es5`, nhưng đó không thực sự là cách bạn tạo ứng dụng `React`.
Nó không được hỗ trợ hoặc ghi chép tốt và đó không phải là cách bạn viết ứng dụng `React` ngày nay.
Bạn có thể bắt đầu với điều đó nếu bạn thực sự phải làm vậy.
Bạn có thể dính vào nó.
Nhưng thay vào đó, chúng tôi thực sự khuyên bạn nên sử dụng `ES6` và do đó, tất nhiên bạn sẽ cần một quy trình làm việc
dịch mã để nó chạy trong tất cả các trình duyệt.
Mặt khác, `TypeScript`, vâng, bạn có thể thiết lập nó giống như với `Vue.js`, nhưng không có chính thức
ủng hộ.
Nó khó hơn một chút.
Tuy nhiên, bạn có thể đào sâu vào nó nếu muốn.

#### Angular

Bây giờ ở đây chúng tôi không thể sử dụng `Es5`. Về mặt lý thuyết là có cách, nhưng không, cách đó chẳng vui chút nào.
Và điều tương tự với `ES6`. Nó sẽ không hoạt động tốt với bất kỳ ngôn ngữ nào trong hai ngôn ngữ. Thay vào đó, bạn
thường viết các ứng dụng góc của mình bằng `TypeScript` và bạn sẽ thấy điều đó đối với `Angular`, việc thiết lập quy
trình làm việc `TypeScript` hoặc quy trình làm việc bằng `TypeScript` cuối cùng thực sự khá dễ dàng vì nó cung cấp một
công cụ cho việc đó.
Vì vậy, đó cũng là những gì chúng ta sẽ làm việc trong khóa học này, với `TypeScript` khi chúng ta tiếp cận `Angular`.
Đừng lo lắng. Bạn không cần biết `ES6` hoặc `TypeScript` để theo dõi khóa học này. Những thứ chúng tôi sử dụng ở đây sẽ
khá dễ tiếp thu và dễ hiểu. Tuy nhiên, nếu bạn có kế hoạch tìm hiểu sâu hơn về một trong những `framework` này, thì có
thể đáng để bạn suy nghĩ. thu thập thêm kiến thức về điều đó.

Tuy nhiên, các khóa học dạy các `framework` này cũng có thể bổ sung hoặc cung cấp phần giới thiệu cơ bản.

Ví dụ: hướng dẫn đầy đủ của tôi về `Angular` có một phần giải thích những điều cơ bản về `TypeScript` để là những điều
kiện tiên quyết mà các `framework` này có hoặc ngôn ngữ mà chúng sử dụng.

Một lần nữa, đối với khóa học này, kiến thức `JavaScript` cơ bản là tất cả những gì bạn cần.

### Module Resources

Đính kèm với bài giảng này, bạn sẽ tìm thấy các slide mô-đun.

Tài nguyên cho bài giảng này
Nội dung khóa học

## Vue.JS - an introduction

### Module Introduction

Chào mừng bạn đến với phần này, nói về `Vue.js`.
`Framework` đầu tiên tôi muốn xem xét kỹ hơn.
Chúng tôi thực sự đã sử dụng nó trong phần bắt đầu.
Bây giờ tôi muốn tìm hiểu sâu hơn một chút và giải thích kỹ hơn những gì chúng tôi thực sự đã làm trong phần bắt đầu và
những tính năng mà Vue.js của chúng tôi coi trọng hiện nay.

Vue.js có một tài liệu tuyệt vời nếu bạn nhấp vào `Get Started`, vì vậy đó là nơi tốt để tìm hiểu sâu hơn vì tất nhiên
tôi sẽ chỉ đề cập đến những điều cơ bản ở đây.

Đây không phải là khóa học `Vue.js` hoàn chỉnh và đó chỉ là thứ tôi muốn thêm vào đây.
Tôi có một khóa học hoàn chỉnh về `Vue.js` trên Udemy trong trường hợp bạn quan tâm.

Nhưng bỏ chuyện đó sang một bên, hãy quay lại cài đặt và lấy lại liên kết này, giống như chúng ta đã làm trong phần bắt
đầu.

Tôi sẽ tiếp tục sử dụng `Jsfiddle` ở đây, nhưng chúng tôi sẽ để điều đó trong suốt phần này để hoạt động cục bộ, đặc
biệt là khi chúng tôi đi sâu vào các `single-page application`. Nhưng để bắt đầu, điều này thật tuyệt nếu bạn bắt đầu
nhanh chóng. Tất nhiên, bạn có thể thoải mái tạo tệp HTML cục bộ và tệp tập lệnh của mình. Nhập tệp tập lệnh vào tệp chỉ
mục trong tệp HTML.

Xin lỗi.

Và bạn có thể sao chép tương tự tại địa phương.
Vì vậy, ở đây tôi đã chuẩn bị một `jsfiddle`.

Và như trước đây, chúng ta chỉ cần nhập script import vào đây và import `vue.js` để chúng ta có thể sử dụng nó.
Đó là tất cả những gì chúng ta cần để bắt đầu.

### Creating a Basic Vue.js Application

Như bạn đã thấy trong phần bắt đầu, `Vue.js` cần một vị trí nào đó trong `HTML`, một số mã `HTML` có thể nắm quyền kiểm
soát.

```html

<script src="https://unpkg.com/vue"></script>
```

Vì vậy, hãy thêm mã như vậy vào đây và bằng hashtag `app`, sau đó nhấn để bạn nhanh chóng tạo một `div` bằng ứng
dụng `id`.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app"></div>
```

Và `app` không phải là `id` bạn phải sử dụng. Bạn có thể sử dụng bất kỳ `id` nào ở đây.
Đó chỉ là thứ bạn nhìn thấy khá nhiều.
Đó là lý do tại sao tôi cũng bám vào điều đó.
Giờ đây, ứng dụng `Vue.js` đơn giản nhất mà chúng ta có thể xây dựng là có `app` `div` này ở đây và sau đó.

Đi tới phần JavaScript và tạo một `new Vue()` mới và đó thường là cách bạn khởi tạo `Vue.js`.

```javascript
new Vue();
```

Bạn tạo các phiên bản như vậy trong đó mỗi phiên bản và bạn có thể có nhiều phiên bản kiểm soát một số phiên bản một
phần mã `HTML` của bạn.
Bạn chuyển một đối tượng `JavaScript` tới phiên bản này để định cấu hình nó và sau đó bạn yêu cầu nó kiểm soát
phần nào trong mã của bạn có thuộc tính.

```javascript
new Vue({
    el: '#app'
});
```

Tất nhiên, hãy đặt trước từ mà `Vue.js` sẽ nhận ra. Ở đây bạn chuyển một bộ chọn CSS, vì vậy đây là hashtag `app` để
chọn `div` này.
Và bây giờ bạn đã có quyền kiểm soát phần HTML này, bạn thực sự có thể thay đổi nó bằng `Vue.js`.

Bây giờ ý tôi là gì khi nắm quyền kiểm soát ở đây?
Hãy xem nó hoạt động như thế nào bằng cách thêm một thuộc tính khác.

Vue.js sẽ nhận ra thuộc tính `data` cho đối tượng mà chúng ta chuyển sang `view instance`.
Thuộc tính `data` lấy một đối tượng JavaScript làm đối số và ở đây chúng tôi có thể xác định bất kỳ dữ liệu nào chúng
tôi muốn để làm việc trong `view instance` này.

```javascript
new Vue({
    el: '#app',
    data: {}
});
```

Vì vậy, đây có thể đơn giản là `name` của chúng tôi.
Tất nhiên bạn có thể chọn bất kỳ tên nào cho thuộc tính này mà bạn muốn.

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max'
    }
});
```

Có thể là `age`, có thể là bất cứ điều gì.
Tôi sẽ bám vào `name`.
Tôi sẽ chỉ định một giá trị ở đây.
Một chuỗi có tên `Max`.
Và đây là cú pháp `JavaScript` bình thường phải không?
Không có gì đặc biệt.
Đây là một đối tượng JavaScript bình thường có cặp giá trị khóa.

Bây giờ chúng ta đã đăng ký trường `data` này, thuộc tính `name` này, chúng ta có thể sử dụng nó trong mã `HTML`.
Trong `div` mà chúng ta đang điều khiển bằng cách thêm một số cú pháp, `Vue.js` sẽ nhận ra dấu ngoặc nhọn đôi `{{ }}`,
mở
và đóng cửa.

Về cơ bản, đây được gọi là `interpolation` (nội suy chuỗi) và điều đó có nghĩa là `Vue.js` sẽ tự động xuất ra một số
văn bản ở nơi này.
Văn bản ở đây chỉ đơn giản là giá trị của `name`.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    {{name}}
</div>
```

Vì vậy, bất cứ điều gì chúng ta nhập vào giữa các dấu ngoặc nhọn đều phải có, cuối cùng hãy cho chúng ta một chuỗi hoặc
thứ gì đó
có thể được chuyển đổi thành một chuỗi như số hoặc boolean.

Vì vậy, đây cũng có thể là một lệnh gọi hàm ở đây.

Vì vậy, chúng ta có thể gọi một số `method` mà chúng ta đã đăng ký trên `view object`, quay lại vấn đề này sau hoặc bất
cứ điều gì khác, cuối cùng sẽ cho chúng ta một số văn bản.

Nếu bây giờ chúng ta nhấn control enter, chúng ta sẽ thấy `Max` và không thấy tên dấu ngoặc nhọn (`{{ }}`).

```text
Max
```

Vì vậy `Vue.js` đã thay thế tên dấu ngoặc nhọn bằng giá trị của tên `Max`.
Đó là một ứng dụng Vue JS rất đơn giản.
Trong bài giảng tiếp theo tôi muốn giải thích điều kỳ diệu này xảy ra như thế nào.

### In a Nutshell: How Vue.js Works

Trong bài giảng trước chúng ta đã tạo ra ứng dụng `Vue.js` rất cơ bản này.
Chúng tôi đã kiểm soát `div` này và xuất một số dữ liệu của mình.

Bây giờ, khi tôi nói hãy kiểm soát, bạn có thể tin rằng trong Dom thực tế, được trình duyệt phân tích cú pháp,
chúng tôi vẫn có mã `HTML` này và `Vue.js` tự động trao đổi mã này.

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max'
    }
});
```

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    {{name}}
</div>
```

Đây không phải là trường hợp.
Nếu chúng tôi mở công cụ dành cho nhà phát triển và kiểm tra tên này ở đây, bạn sẽ thấy rằng chúng tôi có `div` với
`id="app"` nhưng phần dấu ngoặc nhọn đã biến mất hoàn toàn.

Bây giờ điều quan trọng là phải hiểu.
`Vue.js` kiểm soát phần này nhưng sau đó nó chuyển đổi nó thành `JavaScript`.
Vì vậy, điều xảy ra là trang này, trang `HTML` này với mã `JavaScript` này là một phần của nó sẽ được phục vụ cho máy
khách trên máy khách `JavaScript` hiện đang chạy.
Và điều đầu tiên chạy là mã `Vue.js` của chúng tôi được thực thi trong mã này.
`Vue.js` nhận ra rằng chúng tôi muốn lấy phần mã `HTML` này làm `template`.
Vì vậy, những gì nó làm là đọc phần này của trang `HTML` và biến nó thành `JavaScript`.
Bạn có thể nói rằng nó tạo ra `virtual dom` của riêng nó, do đó, `dom` không thực sự tồn tại trong trình duyệt
nhưng bằng `JavaScript`.
Lý do cho điều này là vì `JavaScript` được truy cập nhanh hơn nhiều so với `Dom` thực sự.
bước chân.
`Vue.js` phân tích cú pháp `virtual dom` này để tìm lệnh.
Nó nhận dạng giống như cú pháp dấu ngoặc nhọn đôi, đơn giản là cú pháp được tích hợp trong `Vue.js` và thay thế
nó một cách thích hợp.
Vì vậy, ở đây nó phân tích cú pháp này và thấy rằng `name` đó là thuộc tính `data` hợp lệ và do đó xuất ra `name` thực.
Sau đó, nó hiển thị `virtual dom` được cập nhật này thành `dom` thực của chúng tôi.
Tóm lại đây là những gì xảy ra tại thời điểm ứng dụng này khởi động, đó là lý do tại sao chúng ta chỉ thấy
văn bản ở đây.
`Vue.js` đã làm mọi thứ ở hậu trường.

### Handling Events and Updating the DOM

Vì vậy, chúng tôi đã xây dựng một ứng dụng cơ bản và xuất dữ liệu trong `div` điều khiển của mình tại đây.
Cũng như một lưu ý phụ, nếu bạn thêm tên dấu ngoặc nhọn bên ngoài `div` này, bạn sẽ chỉ thấy tên dấu ngoặc nhọn
ở đây vì phần này ở đây không được `Vue.js` kiểm soát.

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max'
    }
});
```

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    {{name}}
</div>
{{name}}
```

```text
Max
{{name}}
```

Tất nhiên, chúng ta không chỉ muốn đầu ra mà còn muốn phản ứng với đầu vào.
Vì vậy, chúng ta có thể gói tên này thành một đoạn văn.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <button v-on:click="">Change Name</button>
</div>
```

Như thế này và cũng có một nút bấm.
Và ở đây chúng ta có thể nói `Change Name`.
Và bây giờ chúng tôi muốn phản ứng với sự thay đổi tên.
Để làm được điều này, chúng ta cần lắng nghe một sự kiện và `Vue.js` đưa ra một chỉ thị cho chúng ta.
Hướng dẫn chúng ta có thể đặt trong mẫu ở đây có tên là `v-on`.

Đó chỉ là một mệnh lệnh.
`Vue.js` nhận ra điều này sẽ báo cho `Vue.js`.
Được rồi, tôi muốn nghe một số sự kiện.
Sự kiện chúng ta muốn nghe sau đó phải được chuyển dưới dạng đối số, được thực hiện bằng cách thêm dấu hai chấm
và sau đó là tên của sự kiện.
Và ở đây tất cả các sự kiện JavaScript mặc định đều được hỗ trợ như `mouse enter`, `mouse leave` và tất nhiên
cũng `click`.

Sau đó giữa các dấu ngoặc kép, chúng ta gán một giá trị.
Ở đây chúng tôi phải cho chúng tôi biết tên của `method` bạn muốn thực thi là gì?
Và chúng tôi không có bất kỳ `method` nào ở đây.

Bây giờ, phương thức quan trọng không có nghĩa là bất kỳ hàm `JavaScript` nào ở đây, chẳng hạn như `changeName`.

```javascript
function changeName() {

}
```

Chức năng này không thể được nhắm mục tiêu từ bên trong `Vue.js` hoặc ít nhất là từ bên trong mẫu.
Thay vào đó, chúng ta phải ở trong thế giới `Vue.js`.
Chúng ta phải ở trong phiên bản `Vue.js` đó.

Và bên cạnh việc có `data` mà chúng ta có thể xuất hoặc thao tác, tôi cũng muốn có một đối tượng `methods` trong đó
chúng tôi đăng ký tất cả các chức năng mà về cơ bản chúng tôi muốn thực thi từ bên trong thế giới `Vue.js` của mình.
Vì vậy, ở đây chúng ta có thể đổi tên và đó là mã `JavaScript` bình thường.

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max'
    },
    methods: {
        changeName: function () {
            this.name = 'Anna';
        }
    }
});
```

Một lần nữa, chỉ là một thuộc tính trong đối tượng `methods` của chúng ta, nó là hoặc chứa một hàm làm giá trị.

Và trong chức năng này bây giờ chúng tôi muốn thay đổi tên này.
Và như tôi đã đề cập trong phần `Get started`, `Vue.js` cung cấp cho chúng ta một cách kỳ diệu để truy cập bất kỳ dữ
liệu nào
hoặc phương thức hoặc bất cứ thứ gì chúng ta có trong phiên bản khung nhìn của mình.
Thông thường, nếu bạn viết `this.name`, điều này sẽ fail vì nó không refer đến `view instance` của chúng ta,
vào `view object` của chúng tôi.

Và ngay cả khi có, tên đó vẫn là một phần của đối tượng `data` này.

Nhưng khi tạo, `Vue.js` hợp nhất tất cả thuộc tính `data`, tất cả `methods` và một số thứ khác thành một
`global view instance object`.

Và nó giúp chúng ta dễ dàng truy cập vào đối tượng này bằng `this`.
Vì vậy, tên này thực sự sẽ refer đến data > name ở đây và chúng ta chỉ cần đổi name thành `Anna` ở đây.
Và nếu chúng tôi làm như vậy và nhấn nút điều khiển, hãy tham gia.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <button v-on:click="changeName">Change Name</button>
</div>
```

Nếu tôi bấm `Change Name` thì tất nhiên sẽ không có gì xảy ra vì bây giờ chúng ta phải kết nối `method` đã tạo ở đây cho
người nghe nhấp chuột của chúng tôi.
Vì vậy, ở đây chúng tôi chỉ đơn giản chuyển `changeName` mà không có dấu ngoặc đơn.
Chỉ reference đến `method` này.

Và nếu tôi nhấn điều khiển, hãy nhập ngay và bây giờ tôi nhấp vào `Change Name`.
Bạn thấy sự thay đổi này ở `Anna`.
Và điều đó xảy ra vì `Vue.js` đã thực thi `method` này.
`Method` đã đổi tên.
`Vue.js` nhận ra rằng `name` đã được thay đổi và nó nhận ra rằng chúng tôi output `name`.
Vì vậy, nó đã thay đổi phần này của `dom`.

```text
Anna
```

Chỉ phần này không phải toàn bộ `dom`, chỉ phần này và cập nhật nó lên đó là cách chúng tôi có thể lắng nghe người dùng
đầu vào và cách `Vue.js` phản ứng với những thay đổi như thế này.

### Rendering Content Conditionally

Trong các bài giảng trước, chúng ta đã bắt đầu với những kiến thức cơ bản về `Vue.js` cũng như cách chúng ta có thể xuất
dữ liệu và phản ứng với
thay đổi và tất cả đều lắng nghe các sự kiện.

Có hai trường hợp sử dụng phổ biến khác mà tôi muốn đề cập ngay bây giờ.
Danh sách và đầu ra có điều kiện.

Ý tôi là gì với điều đó?

Hãy bắt đầu với đầu ra có điều kiện.
Nhiệm vụ phổ biến là bạn có một số phần trong trang của mình mà bạn không muốn hiển thị mọi lúc.
Ví dụ: một thông báo cảnh báo nếu người dùng nhập sai giá trị hoặc điều gì đó tương tự.
Trong trường hợp này, bạn không muốn hiển thị thông báo cảnh báo đó mọi lúc mà chỉ khi nhập sai
đã được nhập vào.
Trong trường hợp này, chúng tôi có thể nói rằng chúng tôi muốn hiển thị một đoạn khác bên dưới tên mà chúng tôi nói
đã cập nhật tên.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
</div>
```

Nhưng tất nhiên chỉ khi trước đây chúng ta đã nhấp vào `Change Name` để đảm bảo rằng tên này chỉ được hiển thị một lần
chúng tôi đã thay đổi tên, tôi sẽ sử dụng một lệnh `directive` khác `Vue.js` hiểu `v-if` bây giờ, như tên
gợi ý, điều này cho phép chúng tôi hiển thị có điều kiện hoặc không hiển thị phần này của `dom` ở đây.
Vì vậy, giữa các dấu ngoặc kép trong giá trị chúng ta gán cho `v-if`, nếu chúng ta xác định điều kiện và ở đây chúng ta
có thể viết một số mã `JavaScript` cơ bản.
Hoặc chúng ta có thể gọi một `method` trả về `true` hoặc `false`, bất kể chúng ta làm gì.
Điều quan trọng duy nhất là bất cứ điều gì chúng ta viết giữa các dấu ngoặc kép này cuối cùng đều phải trả về `true`
hoặc `false`.

Vì vậy, những gì chúng ta có thể làm ở đây, chẳng hạn, là chúng ta có thể kiểm tra xem `name` có bằng và sau đó dưới
dạng một chuỗi có một
dấu ngoặc kép tối đa, đó sẽ là giá trị bắt đầu của chúng tôi.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
</div>
```

Nếu đúng như vậy thì chúng ta biết rằng tên đó vẫn chưa được thay đổi.
Vì vậy, trong trường hợp này, đó chỉ là một biểu thức bậc ba ở đây vì chúng ta không thể viết câu lệnh if
trong đó.
Nhưng nếu đúng như vậy, tôi sẽ trả về `false`. Nếu không, tôi sẽ trả về `true`

vì tôi chỉ muốn hiển thị `Name updated!` nếu `name` không phải là `Max`.

```text
Anna
```

Nếu chúng ta nhấn vào đây và nhấn enter, thì chúng ta vẫn thấy `Max`.

```text
Anna
Name updated!
```

Nhưng nếu tôi bấm `Change Name` thì chúng tôi cũng thấy `Name updated!`.
Và đây là cách chúng ta có thể sử dụng câu lệnh điều kiện hoặc cách chúng ta có thể sử dụng `v-if` để đính kèm hoặc gỡ
bỏ các phần tử đến hoặc khỏi Dom một cách có điều kiện.

Và điều đó quan trọng nếu chúng tôi kiểm tra phần `Name updated!` này ở đây và tôi sẽ nhanh chóng tải lại trang với điều
khiển đi vào.

Vì vậy, nếu chúng ta kiểm tra, giả sử `Max`, chúng ta thấy điều đó ở đây, chúng ta có được đoạn văn bên dưới, chúng ta
có
được nút
và sau đó chúng ta có điểm đánh dấu này ở giữa.
Nhưng chúng ta không thấy phần `Name updated!` này ở đây.

Đoạn này không hiển thị vì nó quan trọng.
`Vue.js` không làm cho nó vô hình hoặc bất cứ điều gì tương tự.
Nó chỉ không được thêm vào `Dom`.
Ngay sau khi tôi nhấp vào `Change Name`, bây giờ bạn sẽ thấy nó đã được `Name updated!` của họ.
Vì vậy, `v-if` thực sự thêm các phần tử vào `Dom` hoặc nếu bằng cách nào đó chúng ta đưa điều kiện này trở lại
thành `false` gỡ bỏ chúng khỏi đó.

Và tất nhiên đó là điều rất quan trọng cần biết và ghi nhớ cũng như một tính năng thực sự tuyệt vời của `JS`.

### Outputting Lists

Vì vậy, trong bài giảng trước, chúng ta đã học về câu điều kiện, về việc liệu và cách chúng ta có thể sử dụng nó để điều
kiện
hiển thị một cái gì đó trong Dom.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max'
    },
    methods: {
        changeName: function () {
            this.name = 'Anna';
        }
    }
});
```

Một trường hợp sử dụng phổ biến khác là xuất danh sách.
Và chúng tôi đã làm điều này trong phần `Get started`.

Hãy làm lại lần nữa.
Giả sử chúng ta có một `unordered list` và chúng ta có một `button` ở đây.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li>A Element</li>
    </ul>
</div>
```

Vì vậy, khi chúng ta nhấp vào nút này ở đây, tôi chỉ muốn xuất ra một phần tử danh sách mới.
Vì vậy, tôi sẽ nói `New Element` trên nút và trong danh sách không có thứ tự.
Sau đó tôi muốn xuất ra một mục danh sách trong đó tôi nói `A Element`.
Đây là mã hóa cứng trong phần tử này.
Bây giờ tôi sẽ thêm `v-on:click` vào nút để làm điều gì đó.
Khi chúng tôi nhấp vào nó và tôi sẽ đặt tên cho phần tử bổ sung này.
Tất nhiên đây là một phương pháp chúng ta phải thêm vào.

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max'
    },
    methods: {
        changeName: function () {
            this.name = 'Anna';
        },
        addElement: function () {

        }
    }
});
```

Vì vậy, hãy đi đến thuộc tính `methods` của chúng tôi và thêm `addElement` vào đây.
Đây là một `function` và trong hàm này ở đây, bây giờ tôi muốn thêm các phần tử mới vào một mảng các phần tử.

Vì vậy tôi sẽ tạo mảng các phần tử ở đây.
Tên tùy thuộc vào bạn và ban đầu nó là một mảng trống, nhưng bất cứ khi nào tôi nhấp vào nút này, tôi muốn
để tiếp cận phần tử này và đẩy phần tử mới lên đó.

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max',
        elements: [],
    },
    methods: {
        changeName: function () {
            this.name = 'Anna';
        },
        addElement: function () {
            this.elements.push(this.elements.length + 1);
        }
    }
});
```

Và bây giờ đây có thể là bất cứ thứ gì, có thể là một `string`, có thể là một `JavaScript object`, có thể là một mảng
khác, bất cứ điều gì bạn thích.
Ở đây tôi sẽ chỉ đẩy chiều dài của phần tử này cộng thêm một.
Vì vậy, một số vào mảng này.

Bây giờ, nếu tôi làm điều này và quay lại mẫu của mình trên mục danh sách, phần tử tôi muốn lặp lại.
Tôi sẽ thêm `v-for` một `directive` khác được `Vue.js` công nhận, về cơ bản `directive` này sẽ cho `Vue.js` biết, Này,
làm ơn
tạo lại phần tử này mà bạn ngồi lên.

Vì vậy, hãy liệt kê mục thường xuyên theo yêu cầu và xác định mức độ thường xuyên được yêu cầu giữa các báo giá
đánh dấu, chúng tôi cho nó biết thông qua phần tử nào cần lặp.
Hiện tại có một số cú pháp vòng lặp khác nhau được `Vue.js` hỗ trợ và bạn có thể xem bản chính thức
tài liệu để tìm hiểu thêm về điều đó.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements">Element {{element}}</li>
    </ul>
</div>
```

Cú pháp cơ bản và phổ biến nhất là nói bất kỳ tên biến nào bạn thích như `el in elements`.
Và một lần nữa, phần này ở đây có thể được đặt tên theo cách bạn muốn, có thể là `element`, bất kỳ tên nào khác cũng có
thể.

Nhưng tất nhiên, `elements` ở đây đề cập đến thuộc tính `data` của chúng ta và bây giờ mục danh sách sẽ được lặp lại cho
mỗi
phần tử trong mảng.

Vì vậy, nếu chúng ta nhấn control enter, hãy mở bảng điều khiển để xem có gặp lỗi nào không.

Nếu bây giờ tôi nhấp vào `New Element`, bạn sẽ thấy tôi thêm các phần tử mới vào đây và đó là điều tuyệt vời.
Tất nhiên, chúng tôi thậm chí có thể cập nhật mục danh sách của mình và nói `Element `, sau đó sử dụng
lại `string interpolation`.
Hãy nhớ rằng tất nhiên chúng ta vẫn đang ở trong một `view template` ở đây để output ra `element`, đây sẽ chỉ là một
số như chúng ta định nghĩa nó là một ở dưới đây.

Vì vậy, bây giờ nếu tôi nhấn control enter, bạn sẽ thấy phần tử một, hai, ba, v.v.
Điều đó thực sự tuyệt vời.
Và đó là cách chúng ta có thể xuất danh sách bằng `Vue.js`.
Siêu đơn giản.

Và nếu bạn nhìn vào mã `HTML` chúng tôi có ở đây và mã `JavaScript` cũng như những gì chúng tôi có thể làm với điều đó,
hãy tưởng tượng bạn viết cái này bằng `JavaScript` thuần hoặc chỉ bằng `JavaScript` mà không có `Vue.js`.
Vui vẻ với điều đó.

### Binding HTML Attributes & Properties to Data

Trong các bài giảng trước, chúng ta đã học được rất nhiều điều về các tính năng cốt lõi của `Vue.js` và điều đó thật
tuyệt vời.
Nhưng có một trường hợp sử dụng mà chúng tôi chưa đề cập đến.
Chúng ta sẽ tìm hiểu cách có thể xuất ra thứ gì đó ở đây bằng dấu ngoặc nhọn cho phần tử.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements">Element {{element}}</li>
    </ul>
</div>
```

Ví dụ, hãy để tôi làm điều này rộng hơn một chút.
Vì vậy, ở đây chúng ta đã học được cú pháp này, nhưng điều gì sẽ xảy ra nếu chúng ta thực sự không muốn xuất ra một số
văn bản nhưng lại muốn để tự động đặt một số thuộc tính hoặc thuộc tính HTML nói chung?

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            id="el{{element}}">Element {{element}}
        </li>
    </ul>
</div>
```

Vì vậy, đây là mục danh sách và tôi chỉ chia nó thành nhiều dòng để dễ đọc hơn.
Tôi vẫn còn tên trong danh sách ở đây.

Vì vậy, trong mục danh sách này, giả sử tôi muốn thêm `id` vào nó.
Và tất nhiên `id` này cũng phải động.
Bây giờ chúng ta có thể có một `id`, giống như `element` và sau đó có thể có `{{element}}` ở đây.
Và hãy đặt tên là `el` này để tránh nhầm lẫn nhé.

Vì vậy, phần tử giữa các dấu ngoặc nhọn sẽ đề cập đến số, số lượng tăng dần mà chúng tôi đang lưu trữ
trong mảng này.
Tuy nhiên, nếu tôi nhấn control, hãy nhập.
Bạn thấy đấy, cách này hiệu quả nhưng chúng tôi gặp lỗi nếu mở bảng điều khiển.

Lý do cho điều này là với cú pháp dấu ngoặc nhọn, chúng ta thực sự có thể xuất văn bản và không thể
xuất văn bản ở đây khi chúng tôi `bind` với một thuộc tính.

Tuy nhiên, có một cách dễ dàng để khắc phục điều này.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="el1">Element {{element}}
        </li>
    </ul>
</div>
```

Thay vì đặt giá trị phần tử như thế này, chúng ta có thể sử dụng một `directive` khác `v-bind` để thông báo cho `Vue.js`
,
Xin chào, tôi muốn liên kết một số thuộc tính hoặc thuộc tính của phần tử `HTML` này với một giá trị động.
Không động sẽ được `hardcoded` giống như `id` hiện có, chẳng hạn như `el1`.
Đây là mã hóa cứng không thay đổi động với `v-bind` hoạt động như thế này.
Chúng tôi có `dỉrective` và cũng giống như `v-on`, bây giờ chúng tôi phải thông báo cho `Vue.js`.
Được rồi, bạn muốn liên kết thành phần hoặc thuộc tính nào?
Chúng tôi thực hiện việc này bằng dấu hai chấm và sau đó là tên của thuộc tính.
Vì vậy, ở đây `id` đây là một ý nghĩa quan trọng.
Bất cứ điều gì chúng ta có giữa các dấu ngoặc kép ở đây hiện đều được `Vue.js` phân tích và nó sẽ cố gắng tìm ra
một `method` hoặc thuộc tính `data` trong `view instance` của chúng tôi khớp với bất kỳ nội dung nào chúng tôi
viết giữa đó hoặc về cơ bản nó sẽ cố gắng giải quyết vấn đề này.

Nếu chúng ta có một số mã `JavaScript` giữa các dấu ngoặc kép thì điều đó cũng có tác dụng.
`el1` sẽ không hoạt động vì đó không phải là thuộc tính `data`, `method` hay mã `JavaScript` hợp lệ.
Nhưng điều tôi có thể làm bây giờ là tôi có thể thêm một chuỗi có dấu ngoặc đơn vì một chuỗi lại hợp lệ

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element">Element {{element}}
        </li>
    </ul>
</div>
```

Mã JavaScript có thể là `el` rồi cộng để nối chuỗi này và sau đó `element`.
Bây giờ một `element` sẽ tham chiếu đến biến này trong vòng lặp của chúng ta ở đây vì một lần nữa nó được giải quyết một
cách linh hoạt bởi `Vue.js`.

Và nếu chúng tôi làm điều này và mở công cụ dành cho nhà phát triển và nhấn `Ctrl`, hãy nhập xóa bảng điều khiển để
thoát
khỏi lỗi cũ và đánh vào `New Element` thì không thấy lỗi nữa.

Và nếu chúng tôi kiểm tra phần tử, chúng tôi thực sự thấy rằng chúng tôi có `id` động ở đây.
Vì vậy, với `v-bind` chúng ta có thể liên kết hai thuộc tính của các phần tử `HTML` mà không thể thực hiện được
với cú pháp dấu ngoặc nhọn.

### Styling Elements Dynamically

Bây giờ chúng ta đã tìm hiểu về `bind` trong bài giảng trước, bây giờ chúng ta cũng có thể xem xét cách thiết lập động
và thay đổi kiểu cũng như lớp CSS cho các elements của chúng tôi.

Giả sử chúng ta muốn cung cấp cho mỗi element ở đây trong mục danh sách một kiểu tùy thuộc vào `number`.
Vậy `number` ở đây là số lẻ hay số chẵn.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="">Element {{element}}
        </li>
    </ul>
</div>
```

Chà, chúng ta có thể làm điều này bằng cách sử dụng `v-bind` một lần nữa và liên kết với `style`.
Vì vậy, thuộc tính `style` bình thường này, mỗi phần tử HTML đều hỗ trợ điều này.

Bây giờ mong đợi nhận được một đối tượng `JavaScript` vì nó không còn là `component` `style` mặc định nữa.
Hiện tại nó được kiểm soát bởi `vuejs` và để thiết lập `style`, `Vuejs` hiện mong đợi có được một đối tượng JavaScript
trong đó `key` của thuộc tính xác định `style` nào sẽ được đặt, như `width`, `height`, `background color` và
`value` là `style` thực tế.

Vì đây hiện là một đối tượng JavaScript nên tất nhiên bây giờ chúng ta có thể thiết lập nó một cách linh hoạt để có thể
đặt `background color`.
Và ở đây điều quan trọng là phải sử dụng ký hiệu `camelCase`.
Vì vậy, `backgroundColor` JavaScript này.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="{backgroundColor}">Element {{element}}
        </li>
    </ul>
</div>
```

Ngoài ra, hãy sử dụng dấu ngoặc đơn `'` để đặt `background color` trong dấu gạch ngang vì dấu gạch ngang
không phải là ký tự được hỗ trợ trong tên thuộc tính,

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="{'background-color'}">Element {{element}}
        </li>
    </ul>
</div>
```

vì vậy bạn phải chọn một trong hai cách tiếp cận.

Vì vậy, chúng ta đã đặt màu nền và bây giờ chúng ta muốn đặt màu này một cách linh hoạt, phải không?
Vì vậy, điều chúng ta có thể làm là thêm một `method` mới, `getColor`, có thể `getColor` là một hàm, do đó,
và tất cả những gì chúng tôi làm ở đây là trả về màu mà chúng tôi muốn đặt.

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max',
        elements: [],
    },
    methods: {
        changeName: function () {
            this.name = 'Anna';
        },
        addElement: function () {
            this.elements.push(this.elements.length + 1);
        },
        getColor: function (number) {
            return number % 2 == 0 ? 'green' : 'red';
        }
    }
});
```

Vì vậy, ở đây tôi mong đợi lấy `number` làm đối số và sau đó tôi chỉ cần kiểm tra xem số đó là số lẻ hay số chẵn
vì vậy tôi có thể chỉ cần nói số trả về, sau đó là modulus (toán tử chia lấy dư) `% 2`.

Và nếu điều đó mang lại cho chúng ta thứ gì đó, chúng ta biết là số lẻ vì chúng ta còn dư.
Nếu nó bằng 0, những gì chúng ta nhận được thì điều đó `true` vì khi đó phép chia có thể được thực hiện mà không cần
phần nào còn lại.

Vì vậy, nếu số trả về `== 0` thì chúng ta biết đó là số chẵn.
Vậy chúng ta có thể thì đó chỉ là một biểu thức bậc ba `? :`.
Một lần nữa, sau đó chúng ta có thể `return`, giả sử `green` cho các số chẵn hoặc `red` cho tất cả các số còn lại.

Vì vậy, các số lẻ, một lần nữa, chỉ là một biểu thức bậc ba có điều kiện.
Sau đó, nếu điều kiện `true`, trả về giá trị và nếu điều kiện `false`, giá trị trả về,

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p>{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="{backgroundColor: getColor(element)}">Element {{element}}
        </li>
    </ul>
</div>
```

Bây giờ chúng ta có thể sử dụng `getColor` ở đây trong binding style, lấy màu và chỉ cần chuyển `element`, điều này chỉ
là
một số làm đối số.

Nếu chúng ta làm điều này và nhấn nút điều khiển, nhập và thêm các phần tử mới, bạn sẽ thấy màu đỏ với số lẻ, thậm chí
là màu xanh lá cây với số chẵn và
sớm. Và tôi đoán điều đó thật tuyệt vời vì việc thiết lập kiểu động có dễ dàng không?
Và tất nhiên, bạn có thể sử dụng bất kỳ logic nào bạn muốn để thiết lập kiểu động.

### Setting CSS Classes Dynamically

Trong bài giảng trước, chúng ta đã học cách có thể thiết lập kiểu động ở đây bằng `v-bind:style`.
Chúng ta cũng có thể thiết lập các lớp `CSS` một cách linh hoạt.

```css
.updated {
    color: white;
    background: yellow;
}
```

Vì vậy, những gì chúng ta có thể làm ở đây là định nghĩa một `class` CSS mới ở đây và nó có thể `updated`.
Và tôi muốn gắn kèm `class` này với tên của tôi ở đây.

Nếu chúng ta thay đổi nó.
Vì vậy, đó là định nghĩa `class` CSS bình thường.
Và ở đây tôi chỉ muốn đặt `color` thành `white`.

Và lại là `background`, mã CSS bình thường ở đây, có thể chuyển sang `yellow`.
Bây giờ tôi muốn đính kèm lớp `updated` này vào đoạn này, nhưng chỉ khi chúng tôi đã cập nhật nó.
Vì vậy, tôi có thể sử dụng lại `v-bind` và bây giờ là `class`.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <p v-bind:class="{'updated': name == 'Max' ? false : true}">{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="{backgroundColor: getColor(element)}">Element {{element}}
        </li>
    </ul>
</div>
```

Và ở đây, giống như cách chúng ta liên kết `style`, cái này cần một đối tượng JavaScript.
Trên đối tượng này bây giờ chúng ta định nghĩa là tên thuộc tính, lớp CSS nào chúng ta muốn thêm vào.
Vì vậy, `updated`.
Trong trường hợp này, bạn cũng có thể đặt nó trong dấu ngoặc đơn.
Nếu bạn đang sử dụng các ký tự bị cấm như dấu gạch ngang trong tên CSS.
Và sau đó, dưới dạng giá trị, chúng ta có điều kiện `true` hoặc `false` để quyết định xem điều này có đúng không được
thêm vào hay không.

Vì vậy, ở đây tôi sẽ chỉ sử dụng điều kiện tương tự như ở đây khi tôi hiển thị đoạn này để kiểm tra xem tên có
Đã được thay đổi.
Vì vậy, điều này trả lại cho tôi `false` hoặc `true`.

Nếu tôi có thể nhấn điều khiển, hãy nhập và tôi nhấp vào `Change Name`.
Bây giờ nó có màu vàng và trắng, nên tôi đoán là không dễ đọc lắm, nhưng bạn có thể thấy rõ rằng nó đã thay đổi
điều này chỉ vì chúng tôi đã cập nhật tên.

### Using Shorthands for v-bind and v-on

Cho đến nay (và cả phần còn lại của khóa học này), chúng ta đã sử dụng v-bind để liên kết với các thuộc tính và thuộc
tính HTML và v-on để liên kết với các sự kiện.

Tuy nhiên, có **tốc ký** bạn có thể sử dụng cho các chỉ thị phổ biến này.

`v-bind:PROPERTY` => `:PROPERTY`

Example: `v-bind:style="..."`  => `:style="..."`

`v-on:EVENT`  => `@EVENT`

Example: `v-on:click="..."`  => `@click="..."`

### Using Multiple Vue Instances

Bạn sẽ học được rất nhiều về cú pháp cơ bản `Vue.js` cung cấp.
Tất nhiên còn nhiều điều hơn nữa, nhưng đây chỉ là phần giới thiệu về nó.
Để giúp bạn hiểu rõ hơn về cách hoạt động của `Vue.js` và liệu bạn có thấy thú vị khi tìm hiểu sâu hơn không vào đó.
Một điều quan trọng tôi muốn lưu ý ngay bây giờ là chúng tôi luôn sử dụng `div` duy nhất này để chứa `app` của chúng tôi
ở đây
và chúng tôi có `view instance` duy nhất này.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <!--...-->
</div>
```

Bạn không bị giới hạn ở một `view instance`.
Bạn có thể có `div` thứ hai ở đây với `id="app"` thứ hai hoặc bất kỳ `ID` nào bạn thích và ở đó chúng ta có thể có một
đoạn
`second view instance` thứ hai và sau đó có thể sẽ có một đoạn khác bên dưới nó, nơi chúng tôi xuất ra một số `message`.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <!--...-->
</div>
<div id="app2">
    <p>Second vue instance</p>
    <p>{{message}}</p>
</div>
```

Và để điều này hoạt động, tất nhiên tôi sẽ thêm một phiên bản chế độ xem mới.

```javascript
new Vue({
    el: '#app2'
});
```

Vì vậy, đây là bên ngoài cái đầu tiên.
Truyền bộ đối tượng JavaScript của tôi `el`.
Tất nhiên tôi muốn kiểm soát `app2`.
Xin lưu ý thêm, nếu bạn cố gắng kiểm soát ứng dụng ở đây, thì chỉ một trong hai ứng dụng sẽ hoạt động.
Bạn không thể kiểm soát cùng một phần mã với hai `view instance` khác nhau.

Vì vậy, hãy kiểm soát ứng dụng thứ hai bằng thẻ bắt đầu bằng `#`.
Vì vậy, để chọn nó theo `id`
và sau đó trong `data`, tôi sẽ đặt `message` vì đây là nội dung tôi sẽ cố gắng xuất ở đây.
`Hello there`.
Và nếu bây giờ chúng ta nhấn control enter, bạn sẽ thấy.

```javascript
new Vue({
    el: '#app2',
    data: {
        message: 'Hello there'
    }
});
```

Xin chào.
Nhưng đó thực sự là một phần của `view instance` thứ hai của chúng tôi.
Vì vậy, không có gì sai với điều đó.
Thực tế không có gì lạ khi bạn kiểm soát các phần khác nhau trong ứng dụng của mình bằng các `view instance` khác nhau.

### Limitations of Multiple Vue Instances

Trong bài giảng trước, tôi đã nói với bạn rằng bạn có thể tạo nhiều phiên bản khung nhìn và kiểm soát các phần khác nhau
trên trang của bạn.
Và điều đó đúng và điều đó hoàn toàn ổn.
Tuy nhiên, cách tiếp cận này có một nhược điểm tiềm ẩn.

Điều gì sẽ xảy ra nếu bạn muốn sử dụng lại `view instance` của mình?
Hiện tại chúng tôi đang kiểm soát phần này và thế là xong, phải không?
Chúng tôi kiểm soát nó bằng `id` và do đó chúng tôi chỉ kiểm soát phần này.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <!--...-->
</div>
<div id="app2">
    <p>Second vue instance</p>
    <p>{{message}}</p>
</div>
<div class="username">{{ username }}</div>
<div class="username">{{ username }}</div>
```

Bây giờ chúng ta có thể cố gắng tỏ ra thông minh.
Chúng ta có thể tạo một `div` mới trong đó chúng ta có một `class` là tên `username`.
Và sau đó giả sử tôi sẽ thử xuất `username` ở đây và bây giờ tôi sẽ sao chép mã này, thêm nó lần thứ hai
và tôi sẽ thêm phiên bản thứ ba ở dưới đó.

```javascript
new Vue({
    el: '.username',
    data: {
        username: 'Max'
    }
});
```

Và trong trường hợp khung nhìn này, tôi sẽ truyền một đối tượng.
Tôi sẽ kiểm soát `el`.
Bây giờ được chọn với `.username`.
Vì vậy, theo lớp không phải theo `id` và trong thuộc tính `data`.
Bây giờ tôi cố gắng đặt `username` bằng `Max`.
Bây giờ hy vọng sẽ được gặp `Max` hai lần ở cuối trang của chúng tôi.
Nhưng nếu tôi nhấn control enter, chúng tôi chỉ nhìn thấy nó một lần và lần thứ hai chúng tôi thấy `{{usrename}}`.

```text
Max
{{username}}
```

Vì vậy, `div` thứ hai ở đây rõ ràng không được `Vue.js` kiểm soát và đó là hành vi mặc định và có chủ đích.
Nó sẽ chỉ chọn và kiểm soát lần xuất hiện đầu tiên của bộ chọn này mà nó tìm thấy nên `div` đầu tiên có
lớp này, do đó lớp thứ hai bị bỏ qua.
Một `Vue instance` chỉ có thể kiểm soát một phần mã của bạn chứ không thể kiểm soát nhiều phần.
Nhưng có một giải pháp thực sự cho phép chúng tôi đạt được những gì chúng tôi muốn bằng cách sử dụng các `components`.
Vì vậy chúng ta hãy xem xét các `components` trong bài giảng tiếp theo.

### Creating and Using Components

https://www.udemy.com/course/angular-reactjs-vuejs-quickstart-comparison/learn/lecture/7036670#notes

Trong bài giảng trước, chúng ta đã thấy rằng mình sẽ gặp khó khăn nếu cố gắng tạo các đoạn mã có thể tái sử dụng
bằng `Vue.js`.
Nhưng tất nhiên nếu có một tính năng như vậy thì sẽ rất tuyệt và do đó `Vue.js` cung cấp các `components`.
Và đó không chỉ là một phần thưởng nhỏ.

Đây thực sự là một phần rất lớn của `Vue.js` và nó sẽ càng trở nên quan trọng hơn khi chúng ta đi sâu vào phần này.
cách tiếp cận `single-page application`.

Vì vậy, giả sử tôi muốn có một `component` về cơ bản xuất ra `username` của tôi, `component` này có thể sử dụng lại
được,
vì vậy
Tôi sẽ loại bỏ `view instance` thứ ba này và `div` này tại đây.

Thay vào đó, tôi muốn xác định một `component` `Vue` mà tôi có thể sử dụng trong các `template` hiện có của mình,
trong `Vue`
hiện có của tôi.
trường hợp.

```javascript
Vue.component('app-username', {})
```

Vì vậy, tôi sẽ làm điều đó ở đầu tệp của mình để tôi có thể sử dụng nó trong tất cả các mã bên dưới nó.
Chúng tôi xác định một `component` mới bằng cách truy cập phiên bản `Vue` mà không có `new` và không có dấu ngoặc
đơn `{}`.

Nhưng ở đó chúng tôi gọi phương thức `component` tĩnh.
Phương thức này có hai đối số.
Cái đầu tiên là bộ chọn của `component` và cái này lại là bộ chọn CSS.
Nhưng thông thường ở đây bạn chọn kiểu thẻ.
Vì vậy, ví dụ: `app-username`.

```javascript
Vue.component('app-username', {})
```

Điều này cho phép bạn bây giờ sử dụng `component` này, giả sử ngay ở đây, ở đầu phần đầu của chúng tôi
phiên bản `Vue` đầu tiên bằng cách thêm `<app-username></app-username>`, rõ ràng không phải là `element HTML` mà bạn có
thể tùy ý sử
dụng bằng cách mặc định
nhưng hiện được `Vue.js` công nhận.
Vì chúng tôi đăng ký đây là `component` của riêng chúng tôi ở đây.

Bây giờ đối số thứ hai là một đối tượng JavaScript nơi chúng ta định cấu hình `component` giống như chúng ta định cấu
hình một phiên bản `Vue` bình thường có hai điểm khác biệt quan trọng.
Sự khác biệt quan trọng đầu tiên là chúng tôi không thiết lập, chúng tôi không cần phải làm điều đó vì ở đây chúng tôi
không kiểm soát các bộ phận của `Dom`.
Thay vào đó, ở đây chúng ta đã có một bộ chọn.

Chúng tôi đã cho `Vuejs` biết nơi chúng tôi muốn chèn `component` này.

```javascript
Vue.component('app-username', {
    data: function () {
        return {
            username: 'Max'
        }
    }
})

// ...
```

Phần quan trọng thứ hai là `data`.
Ở đây, `data` không phải là một `object` mà là một `function`.
Trả về `object`, giữ dữ liệu thực tế.
Vì vậy hãy quay lại và sau đó giả sử tên `username: Max`.

Đây là điều liên quan đến nội bộ về cách hoạt động của `Vue.js`.
Nếu chúng ta có một `object` ở đây, nó thực sự sẽ ghi đè lên đối tượng của các cách sử dụng khác tương tự `component`.
Vì vậy, chúng ta phải gói gọn `object` của mình trong một `function`, điều đó quan trọng.
Nhưng bạn có thể nhận ra một điều tất cả đều tốt đẹp.
Chúng ta có thể sử dụng `component` của mình, nhưng chúng ta xác định mã HTML của `component` này ở đâu?
Chà, để làm được điều đó, chúng ta có một thuộc tính khác mà chúng ta có thể sử dụng và đó là `template`.
Mẫu thường dành cho phiên bản Vue bình thường được `Vue.js` tạo tự động.
Như tôi đã nói với bạn, bằng cách chọn nó với `element` này và sau đó tự động biên dịch `element` này thành JavaScript.

Bây giờ, vì các `component` hoạt động theo cách khác nên chúng ta phải xác định `template` của mình ở đây và `template`
là một chuỗi.
Và điều này tất nhiên có nghĩa là chúng ta có một số điều tốt cần chú ý.
Ví dụ: không dễ tạo chuỗi nhiều dòng, đặc biệt là với các tính năng `ES6` như các biểu thức chuỗi.
Nhưng ở đây, không phải là siêu dễ dàng.

Tuy nhiên, chúng ta sẽ sớm tìm hiểu cách tạo `component` dễ dàng hơn nhiều.
Hãy sử dụng cách đơn giản này ở đây.

```javascript
Vue.component('app-username', {
    data: function () {
        return {
            username: 'Max'
        }
    },
    template: '<p>{{username}}</p>'
})

// ...
```

Giả sử chúng ta muốn có một đoạn văn.
Vì vậy, hãy tạo đoạn văn của chúng tôi ở đây, nơi chúng tôi xuất `username`.
Vậy hãy sử dụng phép nội suy chuỗi `{{}}`, các tính năng bạn tìm hiểu về `event listener`, nội suy `v-bind`, `v-if`
, `v-for`.
cũng làm việc ở đây trong `template` này.

Vì vậy ở đây tôi muốn xuất `username` đề cập đến tên người dùng của `component` này.
Nếu bây giờ tôi nhấn control enter.
Do đó chúng tôi thấy `Max` ở đây.
Đó là `component` của chúng tôi.

Hãy đổi tên nó thành `Chris` để thấy điều đó rõ ràng hơn.
`Chris`

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <app-username></app-username>
    <app-username></app-username>
    <p v-bind:class="{'updated': name == 'Max' ? false : true}">{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="{backgroundColor: getColor(element)}">Element {{element}}
        </li>
    </ul>
</div>
```

Và điều tuyệt vời bây giờ là nếu chúng ta sử dụng lại cái này, thì ngay khi tôi nhấn control enter, chúng ta có
hai `Chris` ở đây.
Bây giờ chúng ta có một `component` có thể tái sử dụng mà chúng ta có thể sử dụng trong bất kỳ `Vue instance` nào của
mình.

### Passing Data into Components

Ở bài giảng trước các bạn đã được giới thiệu cơ bản về các `component` và các `component` hoạt động khá giống nhau
để xem các trường hợp.
Bạn cũng có thể xác định các `method` ở đó và những thứ khác mà `Vue.js` hỗ trợ, nhưng bạn có thể sử dụng lại chúng.

Bây giờ, cũng sẽ rất thú vị khi có thể truyền dữ liệu đến các `component` của chính chúng ta phải không?
Và chúng ta có thể làm điều này bằng cách thêm một thuộc tính đặc biệt khác vào `view component` của mình.
Tôi sẽ thêm nó vào đây ở trên cùng, nhưng vị trí không quan trọng, đó gọi là `props`.

```javascript

Vue.component('app-username', {
    props: ['username']
    data: function () {
        return {
            // username: 'Max'
        }
    },
    template: '<p>{{username}}</p>'
})

// ...
```

Bây giờ `props` là một mảng các thuộc tính.
Ví dụ: chúng tôi muốn tạo liên kết từ bên ngoài.
Đó có thể là `username` chuỗi.
Điều này hiện cho phép tôi nhận xét tên người dùng của mình ở đây để chúng tôi cũng có thể xóa toàn bộ chức năng dữ
liệu.
Và bây giờ chúng tôi vẫn có tên người dùng.

Bạn có thể truy cập nó giống như một thuộc tính được định nghĩa trong đối tượng `data` của bạn hoặc ở đây trong đối
tượng hàm `data` của bạn.

Nhưng bây giờ bạn có thể thiết lập nó từ bên ngoài.
Làm thế nào để bạn thiết lập nó?
Rất dễ dàng, chỉ với `v-bind` và sau đó là thuộc tính `username`.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <app-username v-bind:username="'Chris'"></app-username>
    <app-username v-bind:username="'Anna'"></app-username>
    <p v-bind:class="{'updated': name == 'Max' ? false : true}">{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="{backgroundColor: getColor(element)}">Element {{element}}
        </li>
    </ul>
</div>
```

Điều này cho phép tôi chuyển `Chris` dưới dạng chuỗi sang lần sử dụng đầu tiên của `component` này.
Và ở cái thứ hai, tôi sẽ chỉ buộc `Anna` vào đây bằng một `string` nếu bây giờ tôi nhấn nút điều khiển.

```text
Chris
Anna
```

Bạn thấy `Chris` và `Anna` ở đây nhưng bây giờ và điều đó thật lớn lao.
Chúng tôi có thể tự động đặt giá trị này từ bên ngoài.

### Emitting Custom Events in Components

Trong bài giảng trước, chúng ta đã học cách truyền dữ liệu vào `component` của bạn, chúng ta không bị giới hạn ở điều
đó.

Chúng ta cũng có thể phát ra `event` của riêng mình ra thế giới bên ngoài.
Vì vậy, giả sử rằng nếu chúng ta nhấp vào đoạn này ở đây, chúng ta thực sự muốn phát ra một `event` mà chúng ta có thể
xử lý trong trường hợp khác khi chúng ta sử dụng `component` này,

```javascript

Vue.component('app-username', {
    props: ['username']
    data: function () {
        return {
            // username: 'Max'
        }
    },
    template: '<p v-on:click="usernameClicked">{{username}}</p>',
})

// ...
```

à, chúng ta có thể chỉ cần sử dụng `v-on:click`, tôi đã nói với bạn, bạn cũng có thể sử dụng tất cả các tính năng,
bạn biết đấy, và ở đó bạn có thể chỉ cần gọi bất kỳ `method`.
Vì vậy, giả sử `usernameClicked`.

```javascript

Vue.component('app-username', {
    props: ['username']
    data: function () {
        return {
            // username: 'Max'
        }
    },
    template: '<p v-on:click="usernameClicked">{{username}}</p>',
    methods: {
        usernameClicked() { // es6
            this.$
        }
    }
})

// ...
```

Và tất nhiên, `method` này phải được thêm vào `component` của bạn.
Vì vậy, hãy thêm đối tượng `methods` của chúng ta giống như trong một thể hiện `view` thông thường,
chúng ta nên đặt tên tên người dùng cho phương thức này
được nhấp vào vì đó là những gì chúng tôi cố gắng gọi.
Và ở đây chúng ta có thể sử dụng `this`.
Và bây giờ là một chức năng đặc biệt.
`Beukes` đưa cho bạn một ký hiệu `$`.

Bạn có thể biết rằng một chức năng được cung cấp bởi `Vue.js`, bởi thực tế là nó có ký hiệu `$` nếu bạn sử dụng
nó bên trong một `component` hoặc một thể hiện.

`$emit()`.

Điều này đưa ra hai tham số.
Đầu tiên là tên mà bạn có thể nghe `event` này.
Vì vậy, chúng tôi có thể đặt tên là `usrClicked` vào như thế này.
Tên hoàn toàn tùy thuộc vào bạn.

```javascript

Vue.component('app-username', {
    props: ['username']
    data: function () {
        return {
            // username: 'Max'
        }
    },
    template: '<p v-on:click="usernameClicked">{{username}}</p>',
    methods: {
        usernameClicked() { // es6
            this.$emit('usrClicked', this.username)
        }
    }
})

// ...
```

Đối số thứ hai có thể là bất kỳ dữ liệu nào, `object`, một `string` bạn muốn truyền.
Vì vậy, ở đây chúng ta có thể chuyển `this.username`.

Bây giờ với điều đó, chúng ta có thể `listen event` này, giả sử ở đây là `component` đầu tiên.
Tất nhiên, chúng ta có thể nghe nó trên cả hai `component`.
Tôi chỉ chia phần này thành nhiều dòng ở đây để dễ đọc hơn một chút.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <app-username
            v-bind:username="'Chris'"
            v-on:usrClicked=""></app-username>
    <app-username v-bind:username="'Anna'"></app-username>
    <p v-bind:class="{'updated': name == 'Max' ? false : true}">{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="{backgroundColor: getColor(element)}">Element {{element}}
        </li>
    </ul>
</div>
```

Bằng cách thêm `v-on` vào `component` của chính chúng tôi và hiện đang lắng nghe `event` của chính chúng tôi,
vì vậy người dùng đã nhấp và vào đây
bây giờ chúng ta có thể thực thi mã của mình.
Vì vậy, ở đây tôi muốn thực hiện `userWasClicked`.

Và tôi sẽ thông qua một đối số `$event`, tôi bảo lưu biến mà chúng ta có thể sử dụng ở đây, biến này sẽ
luôn giữ dữ liệu `event` đã được gửi.
Vì vậy, tương lai sẽ cung cấp cho chúng ta dữ liệu `event` này thông qua tên biến dự trữ này.

Bây giờ, `userWasClicked` là một `method` nên tất nhiên tôi phải thêm.
Vì vậy, tôi sẽ thêm nó vào `view instance` đầu tiên của tôi ở đây, có thể bên dưới sẽ `getColor` ở đây.

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Max',
        elements: [],
    },
    methods: {
        changeName: function () {
            this.name = 'Anna';
        },
        addElement: function () {
            this.elements.push(this.elements.length + 1);
        },
        getColor: function (number) {
            return number % 2 == 0 ? 'green' : 'red';
        },
        userWasClicked: function (name) {

        }
    }
});
```

Tôi biết rằng tôi nhận được dữ liệu `event` và chúng tôi biết rằng dữ liệu `event` sẽ chỉ là một `string`, đúng không.
`this.username`, những gì chúng tôi phát ra ở đây.
Vì vậy, tôi biết rằng đây sẽ chỉ là `name` và tôi có thể chỉ cần, chẳng hạn,
sau đó `alert(name)` nếu bây giờ tôi có quyền kiểm soát,

hãy nhập và tôi nhấp vào đây.
Chẳng có gì xảy ra.
Tại sao?
Chà, đó là thứ chúng ta sẽ xem xét sau một giây để làm cho nó hoạt động.
Chúng tôi chỉ cần đảm bảo rằng chúng tôi đổi tên `event` của mình ở đây thành Chữ thường `usrclicked` và thêm
vào bản mẫu.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <app-username
            v-bind:username="'Chris'"
            v-on:usrclicked=""></app-username>
    <app-username v-bind:username="'Anna'"></app-username>
    <p v-bind:class="{'updated': name == 'Max' ? false : true}">{{name}}</p>
    <p v-if="name == 'Max' ? false : true">Name updated!</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="addElement">New Element</button>
    <ul>
        <li v-for="element in elements"
            v-bind:id="'el1' + element"
            v-bind:style="{backgroundColor: getColor(element)}">Element {{element}}
        </li>
    </ul>
</div>
```

```javascript

Vue.component('app-username', {
    props: ['username']
    data: function () {
        return {
            // username: 'Max'
        }
    },
    template: '<p v-on:click="usernameClicked">{{username}}</p>',
    methods: {
        usernameClicked() { // es6
            this.$emit('usrclicked', this.username)
        }
    }
})

// ...
```

Chúng tôi cũng lắng nghe người dùng nhấp vào.
Bây giờ nếu điều khiển nhập và nhấp vào,

`Chris`, chúng ta sẽ thấy điều đó.

Nhưng tại sao chúng ta phải thực hiện sự thay đổi đó?

### Template Restrictions

Trong bài giảng trước, chúng ta đã phát ra một `event` thành công,
nhưng chỉ sau khi chúng ta chắc chắn rằng `event` đó
chúng tôi phát ra và lắng nghe đều là chữ thường.
Lý do cho điều này là cách bạn làm việc với các mẫu, cách `HTML` hoạt động.
Dom theo mặc định không phân biệt chữ hoa chữ thường.

```html

<app-username
        v-bind:username="'Chris'"
        v-on:usrClicked=""></app-username>
```

Vì vậy, người dùng đã nhấp vào như thế này không hoạt động vì ở đây chúng tôi phát ra người dùng đã nhấp vào bằng
chữ `C`
viết hoa,
nhưng trong `Dom`,
chúng tôi thực sự chỉ có thể nghe những cái tên không phân biệt chữ hoa chữ thường.
Vì vậy,
người dùng nhấp vào đã được tạo ra bằng chữ `C` viết hoa vì chúng tôi đã thực hiện điều này trong `JavaScript`,
tất nhiên là phân biệt chữ hoa chữ thường,
nhưng trong `template` ở đây điều này không tồn tại.
Vì vậy, chúng tôi không thể nghe nó và đó thực sự là một hạn chế mà chúng tôi sẽ loại bỏ sau này trong
khi chúng ta đi sâu vào một cách khác để làm việc với điều này.

Khi chúng tôi rời khỏi.
`JSfiddle` và làm việc với một quy trình làm việc khác.
Nhưng hiện tại đó chỉ là một hạn chế, loại mẫu này ở đây và có một loại khác mà chúng tôi sẽ
có một cái nhìn vào sau đó có.
Vì vậy, chỉ cần đảm bảo rằng các `event` bạn đang phát ra ở đây và đang lắng nghe không phân biệt chữ hoa chữ thường
hoặc tất cả đều là chữ thường.
Vì vậy cuối cùng.

Nhưng với điều đó,
chúng tôi có thể lắng nghe các `event` của chính mình, gửi dữ liệu của riêng mình đến các `component`
và sử dụng các `component`.
Một lần nữa, một cách tốt hơn và dễ dàng hơn để sử dụng chúng sẽ sớm được trình bày.

### Two-Way-Binding to Input Fields

Chúng ta gần như đã hoàn thành phần đầu tiên của phần này
và tôi có thể tưởng tượng rằng đầu bạn gần như muốn nổ tung
trước khi đến phần luyện tập để các bạn có thể luyện tập những điều đã học.

Có một điều chúng tôi chưa đề cập đến và đó là cách chúng tôi thực sự có thể tìm nạp thông tin đầu vào của người dùng.
Chúng tôi có thể nghe các sự kiện, nhưng có một số việc chúng tôi đã làm trong `Get started`.
chúng tôi chưa xem xét phần này.

Và đó là điều gì sẽ xảy ra nếu chúng ta có một trường nhập liệu và muốn phản ứng với những gì người dùng nhập vào?
Hãy làm điều đó.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <!--...-->
</div>
<div id="app2">
    <p>Second vue instance</p>
    <input type="text"/>
    <p>{{message}}</p>
</div>
```

Trong `view instance` thứ hai của chúng tôi ở đây,
giả sử chúng tôi có đầu vào và chúng tôi muốn cho phép người dùng tự động
thay đổi tin nhắn ở đây.
Chà, điều đó cực kỳ dễ làm.
Chúng ta có thể sử dụng một chỉ thị khác `v-model`
và `v-model` cho phép chúng tôi thiết lập liên kết hai chiều và điều đó đơn giản có nghĩa là nó xuất ra bất cứ thứ gì
chúng tôi liên kết ở đây có giá trị bằng giá trị của đầu vào này.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <!--...-->
</div>
<div id="app2">
    <p>Second vue instance</p>
    <input type="text" v-model="message"/>
    <p>{{message}}</p>
</div>
```

```javascript
new Vue({
    el: '#app2',
    data: {
        message: 'Hello there'
    }
});
```

Nhưng bất cứ khi nào chúng tôi thay đổi nó,
nó cũng sẽ cập nhật nó trong dữ liệu của chúng tôi.
Vì vậy, ở đây chúng tôi có `message`.
Nếu tôi liên kết mô hình với v và tôi nhấn control enter.
Bạn thấy đấy.

```text
Hello there
```

Ở đây cũng vậy trong trường đầu vào này.
Đó là một hướng ràng buộc.
Nhưng nếu tôi thay đổi điều này, bạn sẽ thấy nó cũng cập nhật bên dưới trường nhập liệu.
Đó là hướng ràng buộc khác.
Nó nhận ra sự thay đổi này và sau đó tự động cập nhật thuộc tính dữ liệu cũng như mọi nơi trong này
mẫu nơi chúng tôi sử dụng thuộc tính này, nơi chúng tôi xuất thuộc tính này như ở đây với dấu ngoặc nhọn.
Vì vậy, liên kết dữ liệu hai chiều của `ViewModel`.
Tuyệt vời.

Nếu bạn có các trường nhập mà bạn muốn phản ứng với bất kỳ thay đổi nào của người dùng hoặc những gì người dùng nhập vào
rồi cập nhật động thuộc tính dữ liệu của bạn thành.

### Time to Practice - Vue.js - Problem

Đã đến lúc thực hành tất cả những điều bạn học về `Vue.js`
để những điều cơ bản về `Vue.js` thực sự `set`.

Dưới đây là một số bài tập tôi đã chuẩn bị cho bạn.
Chỉ những điều bạn đã học được cho đến nay.

Tôi muốn bạn bắt đầu dễ dàng và tạo một `div` mà sau đó bạn có thể kiểm soát bằng một `Vue instance`.
Bạn sẽ tìm hiểu tất cả về điều đó.

Bước thứ hai,
tôi muốn bạn xuất ra một loạt `hobby` dưới dạng danh sách,
một danh sách không có thứ tự có thể ở dạng
`div` này và bạn có thể muốn điền trước mảng `hobby` của mình bằng một số giá trị bắt đầu.

Sau đó,
tôi muốn bạn thêm nút `hobby` mới và trường nhập phía trên danh sách này,
nơi bạn tìm nạp giá trị
của danh sách đầu vào và thêm `hobby` mới với giá trị đó bất cứ khi nào nút này được nhấp vào.

Bạn có thể thêm xác thực để kiểm tra xem đầu vào có trống hay không,
nhưng đó hoàn toàn là tùy chọn.

Sau đó,
tôi muốn bạn làm cho những `hobby` này có thể nhấp vào được để sau khi bạn nhấp vào một `hobby`,
`hobby` đó thực sự là bị loại bỏ khỏi mảng.

Và sau đó tôi muốn bạn thêm một đoạn văn `hobby`, có thể xóa nó bên dưới danh sách, nó chỉ được hiển thị
một lần.
Ít nhất một `hobby` đã bị xóa.

Hãy sáng tạo về cách bạn có thể theo dõi điều này.
Có thể với một số `hobby` boolean đã bị xóa, điều này ban đầu là sai và sau đó bạn đặt thành đúng ở một số điểm
thời điểm sau đó.

Thêm bộ đếm `hobby` phía trên danh sách `hobby`.
Đây chỉ đơn giản là một đoạn văn trong đó bạn sử dụng phép nội suy chuỗi để đưa ra số lượng `hobby` mà bạn có
trong mảng của bạn.

Và bước tiếp theo,
tôi muốn bạn tạo kiểu linh hoạt cho bộ đếm này.
Ví dụ:
với kiểu dáng động và hoặc các tệp đính kèm lớp CSS động,
chẳng hạn như
thay đổi vẻ bề ngoài đoạn này,
bất cứ khi nào bạn có nhiều hơn hoặc ít hơn ba `hobby`.

Cuối cùng,
lấy mã `hobby` đó và đặt nó vào thành phần riêng của nó.
Vì vậy,
chỉ những mục trong danh sách riêng lẻ mà bạn lặp qua và đảm bảo rằng mọi thứ vẫn hoạt động.
Đó có lẽ là bước khó khăn nhất nhưng bạn có thể thực hiện nó trong giải pháp cùng mình.
Tôi sẽ chỉ cho bạn cách tiếp cận của tôi và hy vọng sau đó sẽ giải quyết được một số nhầm lẫn nếu bạn gặp khó khăn ở một
số điểm.
của những điểm này.
hobby

### Time to Practice - Vue.js - Solution

Vậy bạn đã thành công chưa?
Chúng ta hãy cùng nhau giải quyết nhiệm vụ này.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app"></div>
```

Tôi sẽ để lại hướng dẫn ở đây và tôi sẽ bắt đầu với `div`, tôi sẽ chỉ định `id="app"`.
Xin nhắc lại,
ứng dụng không nhất thiết phải là tên bạn chọn ở đây.

```javascript
new Vue({
    el: '#app'
});
```

Sau đó hãy sử dụng `new Vue`.
`Vue.js` đã được nhập vào đây và đặt `el` thành `#app`.
Hãy kiểm soát `div` này và nhiệm vụ thứ nhất đã được giải quyết.

Bây giờ, hãy thêm một danh sách các `hobby` và để làm được điều đó,
tôi cần thuộc tính `data` của mình,
một đối tượng JavaScript.

```javascript
new Vue({
    el: '#app',
    data: {
        hobbies: ['Sport', 'Cooking'],
    }
});
```

Và vì chúng ta không ở trong một `component` nên giờ đây đây không phải là một `function` mà chỉ là một `object`.
Ở đây tôi sẽ có `hobby` của mình.
Đó là một mảng.

Và tôi sẽ thêm môn `'Sport'` và `'Cooking'` vào đây.

Và tôi muốn xuất mảng này.
Vì vậy, tôi sẽ thêm một danh sách không có thứ tự với một mục danh sách và chúng ta đã học được nó.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <ul>
        <li
                v-for="hobby in hobbies">
            {{hobby}}
        </li>
    </ul>
</div>
```

Chúng ta có thể sử dụng `v-for` để lặp qua các phần tử trong danh sách.
Vì vậy, ở đây tôi có thể lặp qua tất cả các `hobby` của mình trong mảng `hobbies` đề cập đến mảng này và tôi có thể xuất
ra
`hobby` cá nhân bây giờ là thế này.
Nếu tôi nhấn điều khiển, chúng tôi thấy hai `hobby` ở đó bây giờ thật tuyệt.
Và đó cũng là phần hai đã được giải quyết.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <input type="text"/>
    <button>New hobby</button>
    <ul>
        <li
                v-for="hobby in hobbies">
            {{hobby}}
        </li>
    </ul>

</div>
```

Phần ba là thêm nút `New hobby`.
Vì vậy, phía trên danh sách không có thứ tự của tôi, tôi sẽ thêm một `<input>` để người dùng có thể nhập nội dung nào
đó
và một nút nơi tôi sẽ nói `New hobby` mới như thế.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <input type="text"/>
    <button v-on:click="addHobby">New hobby</button>
    <ul>
        <li
                v-for="hobby in hobbies">
            {{hobby}}
        </li>
    </ul>

</div>
```

Sau đó, tôi muốn thêm trình nghe lượt nhấp chuột và tôi thực hiện việc này bằng cách bật rồi nhấp vào.
Vì vậy bây giờ ở đây tôi sẽ đặt tên cho `hobby` này.

Và tôi sẽ thêm thuộc tính `methods` của mình vào `view instance`
vì bạn sẽ tìm hiểu nó để đăng ký các `method` mà chúng ta có thể gọi từ `template`.

```javascript
new Vue({
    el: '#app',
    data: {
        hobbies: ['Sport', 'Cooking'],
        userHobby: ''
    },
    methods: {
        addHobby: function () {
            this.hobbies.push(this.userHobby);
        }
    }
});
```

Vì thế ở đây `addHobby` là tên của hàm vì đó là những gì tôi thiết lập ở đây.
Thêm chức năng `hobby` và tôi muốn thêm `hobby` mới của mình vào đây.
Để làm được điều đó,
tôi cần thêm một thuộc tính khác `userHobby`,
bất kỳ tên nào bạn thích,
ban đầu là một chuỗi trống,
nhưng quan trọng hơn,
điều mà bây giờ tôi liên kết thông qua `v-model` mà bạn đã học.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <input type="text" v-model="userHobby"/>
    <button v-on:click="addHobby">New hobby</button>
    <ul>
        <li
                v-for="hobby in hobbies">
            {{hobby}}
        </li>
    </ul>

</div>
```

Bây giờ `hobby` của người dùng sẽ được cập nhật bất cứ khi nào tôi gõ nội dung nào đó vào đây.
Vì vậy,
khi tôi nhấp vào nút,
bây giờ tôi có thể tìm nạp giá trị mà người dùng đã nhập lần cuối để tôi có thể liên hệ
với `hobby`
và đẩy một mục mới vào mảng này
và về cơ bản thúc đẩy `hobby` của người dùng này.

Và bạn có thể thêm một số mã để kiểm tra xem đây có phải là chuỗi rỗng hay không.
Tôi sẽ chỉ đi theo cách tiếp cận đơn giản này.

Bây giờ,
nếu tôi nhấn điều khiển,
hãy nhập và tôi nhập `Reading` ở đây và nhấn `New hobby` , điều đó được thêm vào.
Tất nhiên tôi có thể thêm nó nhiều lần, nhưng điều đó không thành vấn đề ở đây.
Đây là nhiệm vụ thứ ba đã được giải quyết.

Nhiệm vụ thứ tư có chút khó khăn.
Chúng tôi muốn làm cho những `hobby` này có thể nhấp vào được và để có thể tháo bỏ được.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <input type="text" v-model="userHobby"/>
    <button v-on:click="addHobby">New hobby</button>
    <ul>
        <li
                v-for="hobby in hobbies"
                v-on:click="removeHobby(hobby)">
            {{hobby}}
        </li>
    </ul>

</div>
```

Tôi sẽ thêm dòng này vào một dòng mới để dễ đọc hơn ở đây, tôi sẽ thêm nút bật và nhấp vào vì
Tôi muốn phản ứng với một cú nhấp chuột vào `hobby` này và tôi muốn thực hiện `removeHobby` trong trường hợp này.
Bây giờ ở đây tôi cần chuyển `hobby` mà tôi muốn loại bỏ làm đối số
và sau đó tôi có thể chuyển sang các `methods` của mình và
thêm `removeHobby` ở đây vào một `function`.

```javascript
new Vue({
    el: '#app',
    data: {
        hobbies: ['Sport', 'Cooking'],
        userHobby: ''
    },
    methods: {
        addHobby: function () {
            this.hobbies.push(this.userHobby);
        },
        removeHobby: function (hobby) {
            var position = this.hobbies.indexOf(hobby);
            this.hobbies.splice(position, 1);
        }
    }
});
```

Tôi biết rằng tôi sẽ lấy `hobby` mà tôi muốn loại bỏ làm tham số, và bây giờ tôi có thể tìm thấy `hobby` này
bằng cách giành được vị trí.
Vì vậy,
`var position`
Bằng cách tiếp cận chỉ số `hobby` này.
Đó là một hàm dựng sẵn mà JavaScript cung cấp để nó có thể tìm kiếm một phần tử trong mảng này.
Và vì tôi lặp qua mảng này nên các phần tử tôi lưu trữ ở đây trong `hobby` sẽ được lấy từ
mảng đó và do đó tôi có thể tìm thấy chúng trong mảng.
Vậy là bây giờ,
với vị trí đã tìm được,
tôi lại có thể tiếp cận với `hobbies` gọi `splice` và `splice` phần tử ở vị trí này và chỉ phần tử này.
Vì vậy `Splice` bây giờ sẽ loại bỏ phần tử này khỏi mảng.
Nếu chúng ta nhấn enter lần nữa và tôi thêm việc `Reading` và có thể tổ chức `Party` gì đó,
và tôi nhấp vào `Cooking`,
thì đó là bị xóa,
`Reading` bị xóa.
Và nếu mở bảng điều khiển ra, chúng tôi không thấy có lỗi nào ở đây.
Vậy là mọi thứ đã ổn.

Vì vậy,
tôi nên nói rằng đó là một yếu tố khác bị loại bỏ hoặc một nhiệm vụ khác đã được giải quyết.
Làm cho các `hobby` có thể nhấp vào được và loại bỏ chúng.
Bây giờ phần tiếp theo là hiển thị có điều kiện `hobby` đã bị xóa ngay khi `hobby` bị xóa.
Vâng,
điều kiện chúng tôi đã học về điều đó.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <input type="text" v-model="userHobby"/>
    <button v-on:click="addHobby">New hobby</button>
    <p v-if="hobbyWasDeleted">Hobby was deleted!</p>
    <ul>
        <li
                v-for="hobby in hobbies"
                v-on:click="removeHobby(hobby)">
            {{hobby}}
        </li>
    </ul>

</div>
```

Hãy thêm một đoạn khác phía trên danh sách không có thứ tự.
`Hobby was deleted!`, đại loại như vậy.

Và bây giờ chúng tôi muốn sử dụng `v-if` bạn đã tìm hiểu về điều đó, `v-if` cho phép bạn kiểm soát liệu điều gì đó
có nên được hiển thị hay không, thực tế là liệu có nên thêm thứ gì đó vào `Dom` hay không.
Vậy hãy thiết lập `v-if` ở đây và tôi sẽ đề cập đến `hobbyWasDeleted`.
Bây giờ đó là gì?
Đó là thuộc tính mà tôi chưa phải xác định và tôi sẽ thực hiện điều này trong thuộc tính `data` nơi chúng tôi lưu trữ
tất cả dữ liệu chúng tôi muốn sử dụng.

```javascript
new Vue({
    el: '#app',
    data: {
        hobbies: ['Sport', 'Cooking'],
        userHobby: '',
        hobbyWasDeleted: false,
    },
    methods: {
        addHobby: function () {
            this.hobbies.push(this.userHobby);
        },
        removeHobby: function (hobby) {
            var position = this.hobbies.indexOf(hobby);
            this.hobbies.splice(position, 1);
            this.hobbyWasDeleted = true;
        }
    }
});
```

`hobbyWasDeleted` và ban đầu điều này là `false` vì ban đầu chúng tôi không xóa bất kỳ `hobby` nào.
Nhưng trong việc `removeHobby` được gọi là,
ngay khi tôi muốn loại bỏ một `hobby`,
bây giờ tôi có thể thực hiện hoặc
tôi có thể bây giờ được thiết lập `this.hobbyWasDeleted`
Vì vậy, tài sản này ở đây.
Bây giờ tôi có thể đặt nó thành `true`.

Và do đó nếu tôi nhấn control, hãy nhập.
Chúng tôi không thấy văn bản này,
nhưng nếu tôi thêm thứ gì đó và thậm chí tôi không cần phải thêm thứ gì đó để nó hoạt động
và tôi loại bỏ bất kỳ `hobby` nào.
Bây giờ chúng tôi thấy `hobby` đã bị xóa và bây giờ `hobby` này sẽ ở lại đây vì chúng tôi không có cách nào biến nó
thành trở lại `false`.
Sở thích này đã bị xóa tài sản.

Nếu chúng ta biến nó trở lại `hobby` đã bị xóa sai lầm, cũng sẽ biến mất.

Nhưng bây giờ nhiệm vụ tiếp theo đã được giải quyết.
Hiển thị `hobby` đã bị xóa hoặc `hobby` đã bị xóa ở đây.
Hãy thêm một bộ đếm không quá khó.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <input type="text" v-model="userHobby"/>
    <button v-on:click="addHobby">New hobby</button>
    <p v-if="hobbyWasDeleted">Hobby was deleted!</p>
    <p>Hobbies: {{ hobbies.length }}</p>
    <ul>
        <li
                v-for="hobby in hobbies"
                v-on:click="removeHobby(hobby)">
            {{hobby}}
        </li>
    </ul>

</div>
```

Nếu chúng ta thêm một đoạn văn khác phía trên danh sách không có thứ tự và bây giờ chúng ta có `hobby`,
chúng ta có thể sử dụng chuỗi nội suy để xuất ra một số hoặc một văn bản ở đây.
Câu hỏi đặt ra là làm sao chúng ta biết được mình có bao nhiêu `hobby` trong mảng đó?
Chà,
JavaScript cung cấp cho chúng ta một số công cụ tích hợp sẵn.
Chúng ta chỉ có thể sử dụng mảng `hobby` của mình, mảng chúng ta cũng sử dụng ở đây trong vòng lặp và sau đó là `length`
được xây dựng sẵn thuộc tính để lấy số lượng phần tử trong mảng này.

Nếu tôi nhấn điều khiển, hãy nhập.
Chúng tôi đã thấy hai ở đây và nếu tôi bổ sung thêm.
Chà, điều này rõ ràng đang phát triển vì một lần nữa `Vue.js` lại tự động theo dõi điều này và cập nhật
Hãy ở vị trí này bất cứ khi nào được yêu cầu khi nội dung chúng tôi xuất ở đây thay đổi.
Vậy là nhiệm vụ tiếp theo đã được giải quyết, đó là thêm bộ đếm `hobby`.

Bây giờ chúng tôi muốn tạo kiểu cho bộ đếm này một cách linh hoạt và hoàn toàn tùy thuộc vào bạn kiểu nào và cách tiếp
cận nào bạn chọn ở đây.
Tôi sẽ chỉ cho bạn cả ràng buộc `style` và ràng buộc `class`.

Hãy bắt đầu với `style` ràng buộc.
Tôi sẽ sử dụng kiểu `v-style` ở đây.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <input type="text" v-model="userHobby"/>
    <button v-on:click="addHobby">New hobby</button>
    <p v-if="hobbyWasDeleted">Hobby was deleted!</p>
    <p v-bind:style="{color: hobbies.length > 3 ? 'red' : 'black'}">Hobbies: {{ hobbies.length }}</p>
    <ul>
        <li
                v-for="hobby in hobbies"
                v-on:click="removeHobby(hobby)">
            {{hobby}}
        </li>
    </ul>

</div>
```

Để thiết lập phong cách riêng của tôi.
Vì vậy,
ở đây tôi sẽ truyền một đối tượng `JavaScript` mà chúng ta phải làm để `Vue.js` có thể hiểu được điều này.
Và tôi muốn thiết lập một phong cách.

Giả sử tôi muốn đặt màu của văn bản và chọn lại bất kỳ thứ gì bạn muốn tạo kiểu.
Ở đây,
tôi sẽ đặt màu của văn bản và tôi muốn đặt nó thành màu đỏ nếu chúng ta có nhiều hơn ba `hobby`.
Vì vậy,
ở đây tôi có thể kiểm tra xem độ dài `hobbies.length` có lớn hơn `3` hay không và bạn có thể thuê ngoài phương pháp này
bạn gọi tới đây.

Như bạn đã thấy ở bài giảng trước,
tôi sẽ sử dụng cách diễn đạt ba ngôi.
Vì vậy,
nếu `hobbies.length` lớn hơn `3` thì màu sắc và đây phải là một chuỗi.
Nếu không,
Vue.js sẽ tìm thuộc tính dữ liệu phù hợp với bất kỳ thứ gì bạn nhập ở đây.
Vì vậy,
nếu nó lớn hơn ba thì tôi muốn đặt màu thành chẳng hạn như rất tiếc, `red` và các màu khác
Tôi muốn đặt nó thành `black`.

Vì vậy, hãy để mặc định và tôi sẽ làm cho nó rộng hơn một chút để chúng ta có thể thấy điều này.
Nếu tôi nhấn Ctrl enter now và tôi nhập `Reading` thêm hai lần thì `hobby` sẽ chuyển sang màu đỏ.
Vậy thì tốt quá.
Và nếu tôi loại bỏ một cái thì nó có màu đen, nên kiểu dáng năng động sẽ hoạt động.

Bây giờ tôi cũng sẽ thêm một lớp ở đây và tôi sẽ đặt tên cho lớp này.

```css
.multiple-hobbies {
    border: 1px solid red;
}
```

Và ở đây tôi muốn tạo đường viền cho cái này.

Vì vậy, đường viền có một pixel đồng nhất và cũng có màu đỏ nếu chúng ta có nhiều hơn ba `hobby`.

Vì vậy, ở đây tôi sẽ đưa dòng này vào một dòng mới một lần nữa để dễ đọc hơn một chút.
Tuy nhiên, nó vẫn ở trên cùng một đoạn.

```html

<script src="https://unpkg.com/vue"></script>
<div id="app">
    <input type="text" v-model="userHobby"/>
    <button v-on:click="addHobby">New hobby</button>
    <p v-if="hobbyWasDeleted">Hobby was deleted!</p>
    <p 
        v-bind:style="{color: hobbies.length > 3 ? 'red' : 'black'}"
        v-bind:class="{'multiple-hobbies': hobbies.length > 3}"
        >Hobbies: {{ hobbies.length }}</p>
    <ul>
        <li
                v-for="hobby in hobbies"
                v-on:click="removeHobby(hobby)">
            {{hobby}}
        </li>
    </ul>

</div>
```

Tôi sẽ thêm một câu lệnh `v-bind` khác hiện đang ràng buộc với một `class` ở đây khi bạn đã học nó.
Chúng ta cũng truyền một đối tượng JavaScript và bây giờ chúng ta cần xác định tên `class` làm thuộc tính.
Vì vậy, ở đây sẽ có `multiple-hobbies`.
Và trong lớp học đa `multiple-hobbies` này, tôi cần sử dụng dấu ngoặc đơn do ký tự không hợp lệ này.
Dấu gạch ngang.
Điều này nên được đính kèm.
Bây giờ nếu tốt, nếu `hobbies.length > 3` và tôi không cần phải `return`.
`true` hay `false` vì đây đã là một kiểm tra ở đây.
Phải?
Vì vậy, bạn có thể nói nếu số đó lớn hơn ba thì điều này `true`.
Nếu không thì điều này là `false`.
Nhưng bạn không cần phải làm điều đó.
Đây đã là một điều kiện sẽ `return`.
`true` hay `false`?

Nếu tôi nhấn enter control, 
hãy nhập ngay và tôi lại thêm phần đọc.
Không có gì xảy ra nếu tôi thêm lại.
Bạn thấy đấy, 
bây giờ chúng ta có đường viền này bắt nguồn từ lớp `CSS` này.
Vì vậy, 
đây là cách chúng ta có thể sử dụng kiểu dáng động và các lớp mà bạn đã học.
Bây giờ chúng tôi đã đạt được nhiệm vụ cuối cùng.

Gia công các mục danh sách này ở đây thành thành phần riêng của chúng.
Và tất nhiên, điều đó cũng có nghĩa là chúng tôi sẽ phải đảm bảo rằng trình nghe nhấp chuột, v.v. vẫn
làm.
Vì vậy tôi sẽ thêm một thành phần mới với thành phần view như bạn đã học.
Bây giờ chúng ta nên sử dụng bộ chọn và tất nhiên bộ chọn phải là thứ không gây cản trở
với một phần tử HTML hiện có.
Do đó, bạn nên chọn thứ gì đó được đảm bảo 100% hoặc đảm bảo 99% là duy nhất
như `hobby` ứng dụng thêm tiền tố vào dấu gạch ngang ứng dụng là một cách tuyệt vời để đảm bảo rằng bạn không ghi đè
Ví dụ: phần tử HTML có thể tồn tại trong tương lai.
Và ở đó chúng tôi vượt qua đối tượng của chúng tôi.
Bây giờ chúng tôi muốn lấy `hobby` từ bên ngoài vì chúng tôi sẽ lặp qua thành phần này và nhân rộng
nó thường xuyên khi cần thiết và hàng loạt `hobby` nằm ngoài thành phần này.
Vì vậy, tôi sẽ thêm đạo cụ và tôi biết rằng tôi sẽ có được `hobby` cá nhân của mình ở đây và bây giờ bằng cái này, chúng
ta có thể thay thế
mục danh sách này ở đây.
Với `hobby` ứng dụng như thế và vượt qua `hobby`.
Nhưng trước hết chúng ta cần thiết lập V4 để vẫn lặp lại những `hobby` của mình như vậy.
Và sau đó.
Hãy để tôi tóm tắt điều này thành một dòng, sau đó tôi sẽ kết nối chúng ta với `hobby`.
Vì vậy, `hobby` chúng tôi xác định ở đây.
Có lẽ chúng ta hãy làm điều này dễ dàng hơn.
Hãy đổi tên nó thành HB.
HB.
Vì vậy, HP sau đó được chuyển sang `hobby` hoặc tài sản mà chúng ta ràng buộc trong thành phần này.
Nếu chúng ta làm tốt điều này thì ứng dụng của chúng ta sẽ bị hỏng.
Tất nhiên, lý do cho điều này là vì chúng ta cần xác định một mẫu, phải không?
Vì vậy, hãy thêm một mẫu vào co của chúng tôisố.
Mẫu này là một chuỗi.
Tất nhiên, nó sẽ chứa mục danh sách của chúng tôi.
Và trong mục danh sách, tôi sẽ sử dụng phép nội suy chuỗi để xuất ra `hobby`, một lần nữa được đặt từ bên ngoài.
Bây giờ, nếu chúng ta nhấn nút điều khiển, chúng ta sẽ thấy thể thao và nấu ăn và chúng ta có thể thêm lại việc đọc.
Tất cả đều hiệu quả, nhưng chúng tôi cần làm cho trình nghe nhấp chuột đó hoạt động vì hiện tại không có gì xảy ra vì
không còn trình nghe nhấp chuột vào mục danh sách này nữa.
Hãy giới thiệu lại điều đó.
Vì vậy, với nhấp chuột, chúng ta có thể nghe các nhấp chuột trong thành phần này và tôi muốn thực hiện xóa `hobby`
sau đó và do đó bây giờ tôi cần phải có một phương pháp.
Vì vậy, trong thuộc tính phương thức, tôi sẽ thêm loại bỏ `hobby` làm một hàm.
Và nhân tiện, đó là cú pháp ES6.
Dạng dài es5 sẽ là dạng bạn đã thấy trước khi loại bỏ `hobby` như vậy.
Vì vậy hãy loại bỏ `hobby`.
Và bây giờ, như bạn đã học, chúng ta cần phát ra sự kiện của riêng mình.
Chúng ta có thể nghe trong thành phần gốc hoặc trong mẫu gốc.
Vì vậy, nơi chúng tôi sử dụng `hobby` này ở đây.
Vì vậy, ở đây tôi sẽ gọi đây là phát ra.
Bây giờ hãy đặt cho nó bất kỳ tên sự kiện nào bạn muốn, chẳng hạn như xóa `hobby`.
Và hãy nhớ rằng điều này phải phân biệt chữ hoa chữ thường, vì vậy đừng thử loại bỏ `hobby` ngay bây giờ.
Và ở đây tôi phải vượt qua `hobby` đã bị loại bỏ.
Vì vậy, tôi sẽ chỉ chuyển `hobby` sang chỗ dựa ở đây.
Sở thích này do đó bây giờ đề cập đến chỗ dựa của chúng tôi.
Bây giờ với điều đó, chúng ta có thể nghe sự kiện này trên thành phần của chính chúng ta ở đây.
Vì vậy, hãy sử dụng trên và lắng nghe `hobby`.
Xóa sự kiện chúng tôi đã xác định ở đây.
Và ở đó chúng tôi biết rằng chúng tôi lấy `hobby` này làm lý lẽ.
Vì vậy bây giờ chúng ta có thể gọi là loại bỏ `hobby`.
Hàm chúng tôi đã xác định trong phiên bản chế độ xem này để điều khiển lệnh gọi mẫu này, loại bỏ `hobby` và vượt qua
sự kiện ký hiệu đô la, chỉ để đưa điều này trở lại bộ nhớ của bạn sẽ luôn tự động được điền
với dữ liệu sự kiện bạn phát ra ở đây dữ liệu sự kiện này.
Bây giờ với điều đó, mã của chúng tôi sẽ hoạt động trở lại.
Nếu tôi thêm tính năng đọc ở đây hoạt động và nếu tôi xóa nó, nó thực sự bị xóa và chúng tôi không thấy bất kỳ lỗi nào ở
đây.
Vì vậy, đó là thiết lập cơ bản ở đây.
Bây giờ có những thứ chúng tôi có thể cải thiện.
Có rất nhiều thứ chúng ta có thể tìm hiểu sâu hơn.
Nhưng để có cái nhìn tổng quan đầu tiên, điều này thực sự tuyệt vời.
Bây giờ chúng tôi đã giải quyết được tất cả các nhiệm vụ.
Đã đến lúc xem xét cách chúng ta có thể sử dụng Vue.js trong một ứng dụng một trang vì mã này có thể có
trước đây cũng bị bỏ trong bất kỳ ứng dụng nhiều trang nào vào các trang riêng lẻ của ứng dụng đó
sau đó chúng tôi rời Vue.js sau khi xem qua ứng dụng một trang để xem ứng dụng khác
khuôn khổ.