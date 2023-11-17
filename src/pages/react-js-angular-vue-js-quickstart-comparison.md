---
# This is the title of the article
title: [Course] React JS, Angular & Vue JS - Quickstart & Comparison
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
  - course
  - React JS, Angular & Vue JS - Quickstart & Comparison
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# [Course] React JS, Angular & Vue JS - Quickstart & Comparison

## Section 1: Geting

### Introduction

### The goal of the course

Mục tiêu của khóa học này là gì?

Vậy đây là bạn hay tôi?

Khi tôi bắt đầu làm việc với JavaScript và khi tôi đi sâu vào thế giới đó, bạn có thể có một nền tảng JavaScript vững chắc.

hiểu biết, bạn có thể biết JavaScript.

Đó là điều kiện tiên quyết cơ bản bạn phải đáp ứng.

Bạn không cần phải là chuyên gia, nhưng bạn nên biết JavaScript nên biết những điều cơ bản.

Bạn có thể là người dùng JavaScript nâng cao và thậm chí biết framework là gì và vai trò của chúng.

Hoặc thậm chí bạn có thể biết một framework cụ thể như Angular.

Vì vậy, hãy thực sự là một nhà phát triển nâng cao nhưng vẫn có cả thế giới JavaScript và tất cả các gói này

và các công cụ chúng tôi có ở đó có thể khiến bạn bối rối.

Vì vậy, nếu bất kỳ vai trò nào trong ba vai trò này phù hợp với bạn thì điều mà khóa học này sẽ mang lại cho bạn là bạn sẽ hiểu được

vai trò của JavaScript trong thế giới ngày nay và cả thế giới, hệ sinh thái của JavaScript.

Bạn sẽ hiểu những thuật ngữ này có ý nghĩa gì và chúng phối hợp với nhau như thế nào.

Cách Webpack hoạt động cùng với TypeScript, ES6, JavaScript vanilla, jQuery, Vue.js hoặc bất cứ thứ gì như thế. Tuy nhiên, chúng tôi sẽ không dừng lại ở đó.

Bạn cũng sẽ tìm hiểu lý do tại sao chúng ta có thể muốn sử dụng các thư viện như jQuery hoặc Lodash, vai trò của các thư viện này chơi, sau đó bạn sẽ tìm hiểu xem khung vai trò nào đóng vai trò gì và tại sao bạn có thể muốn chọn một khung và có thể thay thế jQuery bằng một framework như Angular Vue hoặc React.

Bên cạnh những framework này, chúng ta cũng sẽ xem ES6, TypeScript và Webpack là gì và tại sao chúng ta có thể muốn sử dụng điều đó, tại sao một số framework có thể cần các gói này. Và nói về các framework, tất nhiên bạn sẽ được giới thiệu về ba khung này,

Tất nhiên là phần giới thiệu cơ bản nhưng phần giới thiệu này sẽ cho phép bạn sau đó chọn một hoặc nhiều các khuôn khổ mà bạn có thể tìm hiểu sâu hơn trong các khóa học khác hoặc các tài nguyên trực tuyến khác mà bạn chọn để bạn có thể cảm nhận được bạn thích framework nào?

Khung nào cung cấp một khái niệm mà bạn cảm thấy có ý nghĩa?

Bạn thích loại khung nào?

Đó là điều bạn sẽ có thể biết vào cuối khóa học để có thể đưa ra lựa chọn.

Chọn một khuôn khổ mà bạn muốn tìm hiểu sâu hơn.

Và như đã đề cập trước đó, bạn không chỉ có thể đưa ra lựa chọn mà còn hiểu được vai trò của chúng và vai trò của những thứ khác trong thế giới JavaScript.

### Understanding of the role of JavaScript

Vai trò của JavaScript trong thế giới ngày nay là gì?

Bây giờ, xin lưu ý thêm, JavaScript có thể chạy trên máy chủ bằng JS.
Đó là một vai trò khác của JavaScript, một vai trò mà tôi sẽ không xem xét trong khóa học này vì khóa học này sẽ tập trung vào phát triển JavaScript giao diện người dùng, trường hợp sử dụng JavaScript điển hình nhất và cũng là trường hợp sử dụng mà chúng tôi có tất cả các khung và thư viện này.

Vì vậy, hãy hiểu cách JavaScript hoạt động hoặc lý do tại sao chúng ta sử dụng nó ngay từ đầu.
Chúng tôi đang ngồi trước máy của chúng tôi.
Chúng tôi là client.

Chúng tôi đang truy cập một trang web và chúng tôi làm như vậy bằng cách nhập một số URL vào trình duyệt của mình và sau đó gửi yêu cầu đến máy chủ. Bây giờ, máy chủ có nghĩa là bất kỳ loại máy chủ nào đang chạy, bất kỳ loại ngôn ngữ phía máy chủ nào, ví dụ: PHP, ASP.Net NodeJS hoặc Ruby on Rails, Python, v.v.

Điều đó không quan trọng đối với khóa học này.

Ngôn ngữ phía máy chủ hoàn toàn không thành vấn đề. Chúng ta sẽ xem xét giao diện người dùng của JavaScript. Nói về điều đó, hiện tại chúng tôi chỉ gửi yêu cầu, nhưng tất nhiên chúng tôi muốn nhận được phản hồi. Vì vậy, chúng tôi có thể nhận được phản hồi như vậy từ máy chủ. Và thông thường phản hồi này chứa một tài liệu HTML, một số mã HTML mà trình duyệt của chúng tôi hiện có thể chuyển để tạo Dom, mô hình đối tượng tài liệu, về cơ bản là mã HTML được phân tích cú pháp được trình duyệt hiển thị. Bây giờ, thông thường chúng tôi không chỉ lấy lại mã HTML mà mã này có thể bao gồm một số kiểu dáng hoặc JavaScript hoặc có thể tham chiếu một số tệp JavaScript bên ngoài mà sau đó cũng được tải xuống.

Và đó là phần thú vị.

Nó bao gồm nó có thể bao gồm một số loại JavaScript và JavaScript chạy trên máy khách.

Vì vậy, ngôn ngữ phía máy chủ của chúng tôi ở đây chạy trên máy chủ ở đâu và do đó được thực hiện tại thời điểm đó chúng tôi nhận được phản hồi, JavaScript vẫn có thể chạy khi chúng tôi ở trên trang đó và đó là lý do JavaScript rất phổ biến ngày nay.

Vì nó chạy trên máy khách nên nó có thể thực thi mã mà không cần chúng tôi gửi yêu cầu mới, không cần chúng tôi tải lại trang để có thể thay đổi trang sau khi tải xong.

Và điều đó cho phép chúng tôi tạo ra trải nghiệm người dùng tuyệt vời.

Bất cứ khi nào bạn thấy một phương thức mở ra trên một trang hoặc bất cứ khi nào có nội dung nào đó động, bất cứ khi nào trang đó thay đổi trong thời gian chạy, có khả năng cao là JavaScript chịu trách nhiệm cho việc này, rằng bạn thực sự máy chủ không nhận được trang mới mà thay vào đó các phần của trang đó đã được thay đổi bởi JavaScript.

Một số lớp CSS có thể đã được thay đổi hoặc các thành phần hoàn toàn mới đã được thêm vào hoặc xóa khỏi Dom.

Đây là những gì JavaScript làm và nó được sử dụng như thế này khi chúng tôi có thiết lập phía máy chủ gửi lại cho chúng tôi các trang nơi chúng tôi sử dụng JavaScript để nâng cao trải nghiệm người dùng hoặc và chúng tôi sẽ xem xét ở phần sau của khóa học, thậm chí còn có một mô hình ngày càng trở nên phổ biến hơn trong đó JavaScript

chạy toàn bộ giao diện người dùng của chúng tôi để tạo một ứng dụng trang duy nhất trong đó chúng tôi chỉ lấy lại một trang từ máy chủ và sau đó JavaScript thực hiện mọi thứ ở giao diện người dùng và chúng tôi chỉ thỉnh thoảng gửi những thông tin hậu trường yêu cầu tới máy chủ, nhưng sẽ nói nhiều hơn về điều đó sau.

Nhưng đó chính là vai trò của JavaScript. Nó cho phép chúng ta thay đổi điều gì đó về trang sau khi nó được tải và do đó nó rất quan trọng.
góp phần xây dựng trải nghiệm người dùng tuyệt vời vì nó phản ứng rất nhanh, rất nhanh và tức thời.
Bây giờ đó là vai trò của JavaScript.

Tiếp theo chúng ta hãy nhìn vào thế giới JavaScript.

### The world of Javascript

Chúng tôi đã tìm hiểu vai trò của JavaScript là gì.

Bây giờ chúng ta hãy nhìn vào thế giới JavaScript.

Chúng ta có JavaScript nguyên gốc ở trung tâm thế giới này và với JavaScript nguyên chất, ý tôi là JavaScript không có bất kỳ thư viện nào, không có bất kỳ khuôn khổ hay công cụ nào khác mà chúng ta có thể biết và chúng ta sẽ tìm hiểu về sau đó.

Tôi đang đề cập đến Es5. JavaScript. JavaScript có nhiều phiên bản khác nhau và Es5 đơn giản là phiên bản được hầu hết các trình duyệt hỗ trợ. Có một phiên bản mới hơn có sẵn ES6. Tôi cũng sẽ quay lại vấn đề này sau. Và ES6 không được tất cả các trình duyệt hỗ trợ, vì vậy bạn thường không viết mã ES6 và chạy nó như thế này trong các trình duyệt ngày nay.

Nhưng một lần nữa, sẽ nói thêm về điều này sau.

Hãy xây dựng một ứng dụng cơ bản với JavaScript nguyên bản để tìm hiểu những hạn chế có thể là gì và tại sao lại như vậy có thể không phải là tất cả những gì chúng tôi cần để xây dựng ứng dụng này.

Tôi đang sử dụng Jsfiddle.net và Jsfiddle.net đơn giản chỉ là một trình soạn thảo trên web, có thể nói như vậy. Bạn thường không sử dụng để xây dựng các ứng dụng thực tế, nhưng đó là một sân chơi thú vị.

Ở đây chúng ta có thể viết mã HTML JavaScript và CSS và do đó chúng ta có thể mô phỏng trường hợp chúng ta có một máy chủ sẽ gửi lại cho chúng tôi một trang, một trang duy nhất ở đây và hãy viết một số mã HTML.

Câu hỏi đặt ra là chúng ta muốn xây dựng ứng dụng nào?

Và tôi sẽ bắt đầu tạo một ứng dụng đơn giản một cách cơ bản.

Tôi muốn tạo một ứng dụng rất cơ bản để làm.

Vì vậy, hãy bắt đầu tạo ứng dụng này trong bài giảng tiếp theo và sau đó chúng ta sẽ dần dần nâng cao nó.

### Using vanilla JavaScript & Understanding Its limitation (1/3)

Vì vậy, trong trình soạn thảo jsfiddle này, tôi muốn tạo một ứng dụng Todo cơ bản.
Vì vậy, hãy thêm đầu vào.

Và điều thú vị về jsfiddle là chúng ta có thể chỉ cần nhập dữ liệu đầu vào rồi nhấn enter để tạo phần tử đầu vào gõ văn bản là được.

Chúng tôi cũng cần một nút để có thể gửi nút này để thêm vào việc cần làm.

```html
<input type="text">
<button>Add Todo</button>
```

Hoặc có thể hãy đặt chú thích là thêm việc cần làm và sau đó chúng ta cần một nơi nào đó có thể hiển thị tất cả những thứ này

việc cần làm có lẽ là trong một danh sách không có thứ tự.

Đó là tất cả mã HTML tôi cần bây giờ.

Bây giờ, trong JavaScript, chúng ta cần có quyền truy cập vào tất cả các phần tử này, tạo các mục danh sách mới và thêm chúng vào danh sách.

Vì vậy chúng ta hãy làm như vậy.

Bây giờ tôi sẽ tạo một biến ở đây mà tôi sẽ đặt tên là inputEl Tên tùy thuộc vào bạn. Tôi sẽ sử dụng Document.queryselector một phương thức tích hợp mà JavaScript cung cấp cho phép tôi chọn một phần tử bằng bộ chọn CSS của nó và tôi chỉ có thể sử dụng đầu vào ở đây để chọn phần tử này phần tử đầu vào.

```javascript
var inputEl = document.querySelector('input');
```

Lưu ý phụ nếu đây là điều hoàn toàn mới đối với bạn, hãy nhớ tham gia một số khóa học dành riêng cho việc giảng dạy bạn JavaScript.

Đây không phải là mục tiêu của khóa học này. Bạn sẽ không học JavaScript trong khóa học này. Tôi thực sự hy vọng bạn đã biết về nó hoặc, như tôi vừa đề cập, có một khóa học nào đó mà bạn có thể theo dõi.

Dọc theo.
Khóa học này nhằm giúp bạn thực hiện bước tiếp theo, chọn khuôn khổ phù hợp cho công việc phát triển giao diện người dùng.

Vì vậy, điều này chọn phần tử đầu vào.

Bây giờ chúng ta hãy thêm một nút vào nút Document.queryselector để có quyền truy cập vào nút đó trong dom. Cuối cùng, tôi sẽ thêm Ul để có quyền truy cập vào danh sách không có thứ tự này. Vì vậy `querySelector('url')` sẽ cấp cho chúng ta quyền truy cập vào nó.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');
```

Chúng tôi có quyền truy cập vào tất cả các yếu tố này.

Bây giờ chúng ta cần thêm trình xử lý sự kiện vào nút để bất cứ khi nào chúng ta nhấp vào nó, chúng ta sẽ thêm một việc cần làm mới. Vì vậy, hãy lấy phần tử nút này, biến này ở đây và sử dụng trình nghe sự kiện bổ sung như trình nghe này để thêm người nghe mới một sự kiện nhấp chuột. Và ở đây tôi muốn thực thi một chức năng mà tôi sẽ tạo ở đây.

Tôi sẽ đặt tên cho hàm này là `addTodo()` như thế này là một hàm JavaScript bình thường ở đây và bây giờ chúng ta có thể chuyển một tham chiếu hàm này tới trình xử lý sự kiện dưới dạng đối số thứ hai.

`addTodo()` và đảm bảo không thêm dấu ngoặc đơn sau đó.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

buttonEl.addEventListener('click', addTodo);

function addTodo() {

}
```

Tôi chỉ muốn lưu trữ liên kết đến chức năng này nên có thể nói rằng tôi không muốn thực thi nó ở đây.

Vì vậy, ngoài việc bây giờ chúng ta có muốn tạo một mục danh sách mới không?

Vì vậy, tôi sẽ chỉ đặt tên `todoLi` để làm tên tùy thuộc vào bạn và ở đây tôi sẽ sử dụng `document.createElement`để tạo ra một phần tử mới như vậy. Và ở đây chúng ta chỉ đơn giản chuyển tag, thẻ HTML của phần tử mà chúng ta muốn tạo.
Trong trường hợp này `li`.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var todoLi = document.createElement('LI');
}
```

Tất nhiên, bây giờ chúng ta cũng nên thêm bất cứ thứ gì người dùng đã nhập.

Vì vậy, chúng tôi cần tìm nạp nó và sẽ thực sự tìm nạp nó trước khi tạo mục danh sách này vì có thể người dùng đã không nhập bất cứ điều gì.

Và trong trường hợp này mình không muốn tạo mục danh sách mới nên sẽ kiểm tra hoặc sẽ truy xuất người dùng nhập dữ liệu đầu vào của người dùng từ phần tử đầu vào của chúng tôi và ở đó chúng tôi có thể truy cập thuộc tính giá trị.

Rất tiếc, `property` không phải `method`, là `property` mặc định được cung cấp bởi JavaScript trên các phần tử HTML đầu vào.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    var todoLi = document.createElement('LI');
}
```

Bây giờ điều này mang lại cho chúng tôi giá trị tốt mà người dùng đã nhập.

Bây giờ tôi muốn kiểm tra xem cái này có trống không để tôi có thể kiểm tra dữ liệu nhập của người dùng và sau đó có thể cắt bớt JavaScript tích hợp chức năng xóa tất cả khoảng trắng ở đầu hoặc cuối để chúng tôi loại trừ trường hợp người dùng đã nhập chỉ có một vài khoảng trắng.

Vì vậy, sau đó tôi sẽ so sánh giá trị đã cắt bớt với một chuỗi trống. Và nếu chuỗi trống. Vì vậy, nếu người dùng không nhập bất cứ thứ gì, tôi muốn `return`. Tôi không muốn tiếp tục thưc hiện.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    var todoLi = document.createElement('LI');
}
```

Tuy nhiên, nếu chúng tôi có đầu vào hợp lệ, tôi muốn tạo mục danh sách này và sau đó tôi có thể nói danh sách việc cần làm nội dung văn bản mục bây giờ đặt nội dung văn bản của mục danh sách mới được tạo này bằng với dữ liệu đầu vào của người dùng.

Bây giờ, cuối cùng, với mục danh sách đã được tạo, chúng ta chỉ cần thêm nó vào Dom vào `unordered list` của mình, vì vậy tôi có thể sử dụng biến `ulEl` chứa tham chiếu đến `unordered list` này trong Dom.

Và ở đó tôi có thể gọi `appendChild` để thêm mục danh sách việc cần làm này.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

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

Nếu tôi bấm thêm để làm như thế này, không có gì xảy ra. Nếu chúng tôi mở nhật ký bảng điều khiển, chúng tôi không thấy lỗi nào ngoài lỗi này mà chúng tôi có thể bỏ qua.

Nhưng nếu bây giờ tôi nói `Buy milk`, thì nếu tôi nhập nội dung nào đó hợp lệ, nó sẽ được thêm vào.

Nếu tôi nhập một vài khoảng trắng, không có gì xảy ra.

Nhưng nếu tôi vào, trả lời câu hỏi ở đây, chúng tôi cũng nhận được điều này.

Vì vậy, đó là cơ bản, rất cơ bản của chúng tôi để làm việc với ứng dụng.

Tuy nhiên, tôi muốn thêm nhiều chức năng hơn cho nó trước khi chúng ta đi sâu vào các thư viện để xem tại sao lại có vanilla.

JavaScript có thể không phải là tất cả những gì chúng ta cần ở đây.

### Using vanilla JavaScript & Understanding Its limitation (2/3)

Trong bài giảng trước, chúng ta đã tạo ra ứng dụng cơ bản cho phép chúng ta thêm các phần tử mới. Điều này thật tuyệt, nhưng tôi cũng muốn có thể loại bỏ chúng.

Vì vậy, điều tôi cần làm là thêm trình xử lý sự kiện vào mục danh sách mà khi nhấp vào nó, chúng tôi sẽ về cơ bản hãy `remove` nó.

Vì vậy, những gì tôi sẽ làm ở đây, nơi tôi tạo mục danh sách việc cần làm, tôi sẽ lấy nó ở đây và thêm trình xử lý sự kiện như chúng tôi đã làm trước đây. Tôi muốn nghe sự kiện nhấp chuột.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

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

Vì vậy, trên mục danh sách mới được tạo này và sau đó tôi muốn thực thi một chức năng mà tôi sẽ thêm vào đây tại dưới cùng, việc xóa tên sẽ được thực hiện.

Cứ như vậy đi.

Và tôi sẽ chuyển một tham chiếu đến hàm này ở đây làm đối số thứ hai để loại bỏ trình xử lý sự kiện của tôi việc cần làm bây giờ trong phần `remove` việc cần làm.

Tất nhiên tôi cần phải tìm ra phần tử nào chúng tôi đã nhấp vào. Vì vậy, ở đây tôi sẽ chỉ lấy đối tượng sự kiện. Chúng tôi luôn nhận được điều này theo mặc định được thông qua bởi JavaScript.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

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
Một lần nữa, nếu điều đó mới đối với bạn, hãy xem một số hướng dẫn tập trung vào JavaScript để tìm hiểu tất cả những điều này những điều về sự kiện truy cập Dom, v.v.

Vì vậy, đây là phần tử chúng tôi đã nhấp vào.
Bây giờ chúng tôi muốn xóa nó và để xóa nó, tôi thực sự phải liên hệ với `parentNode` của danh sách item vì trên nút đó chúng ta có thể gọi `removeChild` và loại bỏ được nhấp như thế này.

Bây giờ nếu tôi nhấn điều khiển, hãy mở bảng điều khiển để xem chúng tôi có gặp lỗi nào không.
Nếu tôi thêm `Buy milk` và sau đó nếu tôi cũng có thể thêm câu hỏi trả lời và tôi nhấp vào loại bỏ `Buy milk`, nó được gỡ bỏ và ở đây cũng vậy.
Vậy là nó đang hoạt động.

Nhưng tôi vẫn không vui 100% vì chúng tôi có thể cải thiện ứng dụng này thêm một chút.

### Using vanilla JavaScript & Understanding Its limitation (3/3)

Trong bài giảng trước chúng ta đã thêm một chức năng để có thể loại bỏ các mục trong danh sách.

Điều đó thật tuyệt, nhưng trong trường hợp sử dụng thông thường, có lẽ chúng ta cũng muốn lưu trữ một mảng việc cần làm trong JavaScript để chúng tôi không chỉ thay đổi Dom, thêm và xóa các mục mà còn có một mảng với tất cả những việc cần làm của chúng ta là bởi vì có lẽ chúng ta muốn làm điều gì đó với việc cần làm của mình trong JavaScript.

Vì vậy, một trường hợp sử dụng thông thường sẽ là có một mảng việc cần làm trong JavaScript, mảng này ban đầu trống.
Và bất cứ khi nào chúng tôi thêm một `todo` mới để làm ở đây sau khi chúng tôi kiểm tra xem người dùng đã nhập nội dung nào đó hợp lệ hay không, thì trong phần này trong trường hợp tôi có thể tạo một `newTodo` ở đây, hãy đặt cho nó bất kỳ cái tên nào bạn thích.

Tất nhiên rồi.
Và đó có thể là một đối tượng JavaScript nơi chúng tôi có giá trị mà người dùng đã nhập.

Vì vậy, người dùng nhập vào đây, nhưng cũng có thể là một số ID duy nhất để chúng tôi có thứ gì đó để xác định việc cần làm. Vì vậy, chúng tôi có thể có thuộc tính ID và bây giờ tôi sẽ sử dụng `math.random` và đây không thực sự là một ID duy nhất.
Tôi biết điều này.

Đây chỉ là một con số ngẫu nhiên và có khả năng cao là nó sẽ khác với số trước đó, nhưng nó là không nhất thiết là duy nhất.
Tuy nhiên, bây giờ nó sẽ ổn ở đây.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

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
Bây giờ chúng ta có thể đẩy việc cần làm mới này vào danh sách việc cần làm của chúng ta trong mảng `todos` của chúng ta.

Vấn đề hiện tại chúng tôi gặp phải là nếu chúng tôi loại bỏ một việc cần làm thì việc loại bỏ phần tử trong mục danh sách sẽ dễ dàng.
Nhưng làm cách nào để chúng tôi tìm ra mục danh sách này có `id` nào? Chúng tôi không lưu trữ thông tin này trong Dom nhưng Dom là thứ duy nhất chúng tôi truy cập ở đây. Chúng tôi chỉ lấy phần tử chúng tôi muốn loại bỏ.
Vì vậy chúng ta cũng cần lưu ID vào Dom tại đây.
Đó sẽ là một cách khả thi.

Vì vậy, những gì tôi có thể làm là trước khi thêm mục danh sách việc cần làm này, tôi sẽ liên hệ với nó và sử dụng `dataset`tài sản. Để sử dụng thuộc tính dữ liệu này, chúng tôi có thể điền, chúng tôi có thể điền dữ liệu của riêng mình, với các thuộc tính tùy chỉnh của riêng mình, có thể nói như vậy.

Và sau đó tôi muốn lưu trữ `ID`, đặt dữ liệu `ID`, thuộc tính hoặc thuộc tính mà tôi nên nói và đặt nó bằng mới để làm `ID`, vậy để làm `ID` chúng ta đã tạo ở đây.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

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

Bây giờ cái này được lưu trữ trong Dom và tôi có thể cho bạn xem cái này. Nếu chúng ta tải lại phần này và nói `mua sữa` rồi chọn phần tử tạo này, thì nó có thuộc tính ID dữ liệu này ở đây bây giờ. Bây giờ chúng ta có thể sử dụng mã đó ở đây trong mã xóa để thực hiện trước khi chúng ta thực sự xóa mã đó để lấy ID mục. Bằng cách truy cập vào nhấp chuột. Và sau đó là `ID` tập dữ liệu để chúng tôi lưu trữ nó ở đây.

Giờ đây, với `ID` đó đã được tìm nạp, giờ đây chúng tôi có thể lặp qua tất cả việc cần làm trong mảng việc cần làm của mình.

Vì vậy, hãy bắt đầu từ phần tử đầu tiên có chỉ số bằng 0.

Hãy lặp lại.

Miễn là chúng ta ở trong phạm vi này, trong độ dài của mảng việc cần làm này và hãy tăng dần `i` sau mỗi lần lặp và sau đó chúng ta có thể chỉ cần kiểm tra xem `todos i`.
Xin lưu ý rằng các phần tử trong `todos` ở đây chỉ là các phần tử thuộc loại này. Đối tượng thuộc loại này. Như vậy chúng ta sẽ có một thuộc tính `id`. Nếu `id` bằng `itemId`.

Nếu đúng như vậy thì tôi muốn.
Gọi `splice` trên todos để loại bỏ một phần tử về cơ bản. Và sau đó tôi muốn ghép bắt đầu ghép ở vị trí `i` và ghép một phần tử và sau đó tôi sẽ gọi `break` để truy cập thoát ra khỏi vòng lặp của tôi ở đây.

```javascript
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('input');
var ulEl = document.querySelector('input');

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
    clickedLi.parentNode.removeChild(clickedLi);
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === itemId) {
            todos.slice(i, 1);
            break;
        }
    }

    console.log(todos);
}
```

Vì vậy, bây giờ để xem liệu nó có hoạt động hay không, hãy `console` ghi lại mảng việc cần làm của chúng ta ở cuối `addToDo` và ở cuối loại bỏ việc cần làm ở đây.

Và nếu bây giờ chúng ta nhấn nút điều khiển, hãy nhập và mở `console.log` để xem chúng ta có gặp lỗi nào không.

Nếu tôi thêm `mua sữa` và trả lời các câu hỏi, bạn thấy đấy, dường như chúng ta đang thêm các đối tượng vào mảng.

Trông tôt đây.

Nếu bây giờ tôi nhấp vào `Mua Sữa`, chỉ còn lại một mục và đó thực sự là câu trả lời cho các câu hỏi.

Và bây giờ mảng trống.

Vậy là nó đã hoạt động và đó là mã JavaScript đã hoàn thành.

Bây giờ.

Thế là ứng dụng đã hoàn thành với rất nhiều code rồi.

Vì vậy, hãy phân tích điều này và tìm ra cách chúng ta có thể cải thiện nó.