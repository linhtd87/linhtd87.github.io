---
# This is the title of the article
title: Các phương pháp hay nhất để thiết kế API REST
# You can customize cover image
cover: /assets/images/cover-coding-laravel.webp
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
  - Những thực hành tốt của Laravel
  - Laravel best practices
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# Các phương pháp hay nhất để thiết kế API REST

Trong bài viết này, chúng ta sẽ xem xét cách thiết kế `API REST` sao cho dễ hiểu đối với bất kỳ ai sử dụng chúng, phù hợp với tương lai, an toàn và nhanh chóng vì chúng phân phát dữ liệu có thể bí mật cho khách hàng.

`API REST` là một trong những loại giao diện web phổ biến nhất hiện nay.
Chúng cho phép nhiều ứng dụng khách khác nhau, bao gồm cả ứng dụng trình duyệt, giao tiếp với các dịch vụ thông qua `API REST`.
Do đó, điều rất quan trọng là phải thiết kế API REST đúng cách để chúng ta không gặp phải vấn đề gì sau này.
Chúng tôi phải tính đến tính bảo mật, hiệu suất và tính dễ sử dụng của người tiêu dùng API.

Nếu không,
chúng tôi sẽ gây ra sự cố cho khách hàng sử dụng API của chúng tôi,
điều này không hề dễ chịu và khiến mọi người không muốn sử dụng API của chúng tôi.
Nếu chúng tôi không tuân theo các quy ước được chấp nhận rộng rãi thì chúng tôi sẽ gây nhầm lẫn cho người duy trì API và khách hàng sử dụng chúng vì nó khác với những gì mọi người mong đợi.

Trong bài viết này,
chúng ta sẽ xem xét cách thiết kế `API REST` sao cho dễ hiểu đối với bất kỳ ai sử dụng chúng,
phù hợp với tương lai,
an toàn và nhanh chóng vì chúng phân phát dữ liệu có thể bí mật cho khách hàng.

* Chấp nhận và phản hồi bằng JSON
* Sử dụng danh từ thay vì động từ trong đường dẫn điểm cuối
* Bộ sưu tập tên với danh từ số nhiều
* Tài nguyên lồng nhau cho các đối tượng phân cấp
* Xử lý lỗi một cách duyên dáng và trả về mã lỗi tiêu chuẩn
* Cho phép lọc, sắp xếp và phân trang
* Duy trì thực hành bảo mật tốt
* Dữ liệu bộ nhớ đệm để cải thiện hiệu suất
* Phiên bản API của chúng tôi

## API REST là gì?

`API REST` là kiểu kiến trúc giao diện lập trình ứng dụng phù hợp với các ràng buộc kiến trúc cụ thể,
như giao tiếp `stateless` và dữ liệu có thể lưu trong bộ nhớ đệm.
Nó không phải là một giao thức hoặc tiêu chuẩn.
Mặc dù API REST có thể được truy cập thông qua một số giao thức truyền thông, nhưng phổ biến nhất là chúng được gọi qua `https`, vì vậy các nguyên tắc bên dưới áp dụng cho các điểm cuối API REST sẽ được gọi qua internet.

Lưu ý: Đối với các API REST được gọi qua internet, bạn sẽ muốn làm theo các phương pháp hay nhất để xác thực API REST.

## Chấp nhận và phản hồi bằng JSON

Mặc dù một số người cho rằng REST chỉ nên trả về siêu văn bản (bao gồm cả Roy Fielding, người đã tạo ra thuật ngữ này),
API REST nên chấp nhận JSON cho tải trọng yêu cầu và cũng gửi phản hồi tới JSON.
JSON là tiêu chuẩn để truyền dữ liệu.
Hầu hết mọi công nghệ nối mạng đều có thể sử dụng nó: JavaScript có các phương thức tích hợp sẵn để mã hóa và giải mã JSON thông qua API tìm nạp hoặc ứng dụng khách HTTP khác.
Công nghệ phía máy chủ có các thư viện có thể giải mã JSON mà không cần thực hiện nhiều thao tác.

Có nhiều cách khác để truyền dữ liệu.
`XML` không được các `frameworks` hỗ trợ rộng rãi nếu không tự chuyển đổi dữ liệu thành thứ có thể sử dụng được và đó thường là JSON.
Chúng tôi không thể thao tác dữ liệu này dễ dàng ở phía máy khách, đặc biệt là trong trình duyệt.
Cuối cùng, sẽ phải làm thêm rất nhiều việc chỉ để thực hiện truyền dữ liệu thông thường.

`Form data` rất tốt cho việc gửi dữ liệu,
đặc biệt nếu chúng ta muốn gửi `files`.
Nhưng đối với văn bản và số,
chúng tôi không cần `form data` để chuyển chúng vì —
với hầu hết các `framework` —
chúng tôi có thể chuyển JSON bằng cách lấy dữ liệu trực tiếp từ phía máy khách.
Cho đến nay, đây là cách đơn giản nhất để làm như vậy.

Để đảm bảo rằng khi ứng dụng API REST của chúng tôi phản hồi bằng JSON và khách hàng hiểu nó như vậy,
chúng tôi nên đặt `Content-Type` trong tiêu đề phản hồi thành `application/json` sau khi yêu cầu được thực hiện.
Nhiều `framework` ứng dụng phía máy chủ tự động đặt tiêu đề phản hồi.
Một số máy khách HTTP xem header phản hồi `Content-Type` và phân tích dữ liệu theo định dạng đó.

Ngoại lệ duy nhất là nếu chúng tôi đang cố gắng gửi và nhận tệp giữa máy khách và máy chủ.
Sau đó,
chúng ta cần xử lý các phản hồi của tệp và gửi dữ liệu biểu mẫu từ máy khách đến máy chủ.
Nhưng đó là một chủ đề cho một thời điểm khác.

Chúng ta cũng nên đảm bảo rằng các điểm cuối của chúng ta trả về JSON dưới dạng phản hồi.
Nhiều `framework` phía máy chủ có tính năng này như một tính năng tích hợp sẵn.

Chúng ta hãy xem một API mẫu chấp nhận tải trọng JSON.
Ví dụ này sẽ sử dụng khung back-end `Express` cho `Node.js`.
Chúng ta có thể sử dụng `middleware` của trình phân tích cú pháp nội dung để phân tích nội dung yêu cầu JSON
và sau đó chúng ta có thể gọi phương thức `res.json` với đối tượng mà chúng ta muốn trả về dưới dạng phản hồi JSON như sau:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
    res.json(req.body);
});
app.listen(3000, () => console.log('server started'));
```

`bodyParser.json()` phân tích chuỗi nội dung yêu cầu JSON thành một đối tượng JavaScript và sau đó gán nó cho đối tượng `req.body`.

Đặt tiêu đề `Content-Type` trong phản hồi cho `application/json; charset=utf-8` mà không có bất kỳ thay đổi nào.
Phương pháp trên áp dụng cho hầu hết các frameworks backend.

## Sử dụng danh từ thay vì động từ trong đường dẫn điểm cuối

Chúng ta không nên sử dụng động từ trong đường dẫn điểm cuối của mình.
Thay vào đó, chúng ta nên sử dụng các danh từ đại diện cho thực thể mà điểm cuối mà chúng ta đang truy xuất hoặc thao tác làm tên đường dẫn.

Điều này là do phương thức yêu cầu `HTTP` của chúng tôi đã có động từ.
Việc có các động từ trong đường dẫn điểm cuối API của chúng tôi không hữu ích và nó khiến nó mất nhiều thời gian một cách không cần thiết vì nó không truyền tải bất kỳ thông tin mới nào.
Các động từ được chọn có thể thay đổi tùy theo ý thích của nhà phát triển.

Ví dụ: một số thích `get` và một số thích `retrieve`, vì vậy tốt hơn hết là để động từ `HTTP GET` cho chúng ta biết nội dung và điểm cuối làm gì.

Hành động phải được biểu thị bằng phương thức yêu cầu HTTP mà chúng tôi đang thực hiện. Các phương thức phổ biến nhất bao gồm `GET`, `POST`, `PUT` và `DELETE`.

* `GET` lấy tài nguyên.
* `POST` gửi dữ liệu mới đến máy chủ.
* `PUT` cập nhật dữ liệu hiện có.
* `DELETE` xóa dữ liệu.

Các động từ ánh xạ tới các hoạt động `CRUD`.

Với hai nguyên tắc mà chúng ta đã thảo luận ở trên, chúng ta nên tạo các tuyến như `GET /articles/` để nhận các bài báo.
Tương tự, `POST /articles/` là để thêm một bài viết mới, `PUT /articles/:id` là để cập nhật bài viết với id đã cho.
`DELETE /articles/:id` dùng để xóa một bài viết hiện có với ID đã cho.

`/articles` đại diện cho tài nguyên API REST.
Chẳng hạn, chúng ta có thể sử dụng `Express` để thêm các điểm cuối sau để thao tác với các bài viết như sau:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/articles', (req, res) => {
    const articles = [];
    // code to retrieve an article...
    res.json(articles);
});

app.post('/articles', (req, res) => {
    // code to add a new article...
    res.json(req.body);
});

app.put('/articles/:id', (req, res) => {
    const {id} = req.params;
    // code to update an article...
    res.json(req.body);
});

app.delete('/articles/:id', (req, res) => {
    const {id} = req.params;
    // code to delete an article...
    res.json({deleted: id});
});

app.listen(3000, () => console.log('server started'));
```

Trong đoạn mã trên,
chúng tôi đã xác định các điểm cuối để thao tác với `articles`.
Như chúng ta có thể thấy,
tên đường dẫn không có bất kỳ động từ nào trong đó.
Tất cả những gì chúng ta có là danh từ.
Các động từ có trong động từ HTTP.

## Use logical nesting on endpoints

Khi thiết kế các điểm cuối,
bạn nên nhóm những điểm có chứa thông tin liên quan.
Nghĩa là, nếu một đối tượng có thể chứa một đối tượng khác,
bạn nên thiết kế điểm cuối để phản ánh điều đó.
Đây là thực hành tốt bất kể dữ liệu của bạn có được cấu trúc như thế này trong cơ sở dữ liệu của bạn hay không.
Trên thực tế,
có thể nên tránh phản chiếu cấu trúc cơ sở dữ liệu của bạn trong các điểm cuối của bạn để tránh cung cấp cho kẻ tấn công thông tin không cần thiết.

Ví dụ: nếu chúng ta muốn một điểm cuối để lấy nhận xét cho một bài báo, chúng ta nên thêm đường dẫn `/comments` vào cuối đường dẫn `/articles`. Chúng ta có thể làm điều đó với mã sau trong `Express`:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/articles/:articleId/comments', (req, res) => {
    const {articleId} = req.params;
    const comments = [];
    // code to get comments by articleId
    res.json(comments);
});


app.listen(3000, () => console.log('server started'));
```

Trong đoạn code trên,
chúng ta có thể sử dụng phương thức `GET` trên đường dẫn `/articles/:articleId/comments`.
Chúng tôi nhận được nhận xét về bài viết được xác định bởi `articleId` và sau đó trả lại nó trong phản hồi.
Chúng tôi thêm `comments` sau phân đoạn đường dẫn `/articles/:articleId` để cho biết rằng đó là tài nguyên con của `/articles`.

Điều này có ý nghĩa vì nhận xét là đối tượng con của bài viết,
giả sử mỗi bài viết có nhận xét riêng.
Mặt khác,
nó gây nhầm lẫn cho người dùng vì cấu trúc này thường được chấp nhận để truy cập các đối tượng con.
Nguyên tắc tương tự cũng áp dụng cho các điểm cuối `POST`, `PUT` và `DELETE`.
Tất cả chúng đều có thể sử dụng cùng một loại cấu trúc lồng nhau cho tên đường dẫn.

Tuy nhiên,
làm tổ có thể đi quá xa.
Sau khoảng cấp độ thứ hai hoặc thứ ba,
các điểm cuối lồng nhau có thể trở nên khó sử dụng.
Thay vào đó,
hãy xem xét trả lại URL cho các tài nguyên đó,
đặc biệt nếu dữ liệu đó không nhất thiết phải được chứa trong đối tượng cấp cao nhất.

Ví dụ: giả sử bạn muốn trả lại tác giả của các nhận xét cụ thể.
Bạn có thể sử dụng `/articles/:articleId/comments/:commentId/author`.
Nhưng điều đó đang vượt khỏi tầm tay.
Thay vào đó, hãy trả về URI cho người dùng cụ thể đó trong phản hồi JSON:

`"author": "/users/:userId"`

## Handle errors gracefully and return standard error codes

Để loại bỏ sự nhầm lẫn cho người dùng API khi xảy ra lỗi,
chúng ta nên xử lý lỗi một cách duyên dáng và trả về mã phản hồi HTTP cho biết loại lỗi nào đã xảy ra.
Điều này cung cấp cho người bảo trì API đủ thông tin để hiểu sự cố đã xảy ra.
Chúng tôi không muốn lỗi làm sập hệ thống của mình,
vì vậy chúng tôi có thể để chúng không được xử lý,
điều đó có nghĩa là người tiêu dùng API phải xử lý chúng.

Các mã trạng thái HTTP lỗi phổ biến bao gồm:

* 400 Bad Request - Điều này có nghĩa là đầu vào phía máy khách không xác thực được.
* 401 Unauthorized - Điều này có nghĩa là người dùng không được phép truy cập tài nguyên. Nó thường trả về khi người dùng không được xác thực.
* 403 Forbidden - Điều này có nghĩa là người dùng được xác thực, nhưng nó không được phép truy cập tài nguyên.
* 404 Not Found - Điều này chỉ ra rằng không tìm thấy tài nguyên.
* 500 Internal server error - Đây là lỗi máy chủ chung. Nó có lẽ không nên được ném một cách rõ ràng.
* 502 Bad Gateway - Điều này cho thấy phản hồi không hợp lệ từ máy chủ ngược dòng.
* 503 Service Unavailable - Điều này cho thấy có điều gì đó bất ngờ đã xảy ra ở phía máy chủ (Nó có thể là bất cứ điều gì như quá tải máy chủ, một số phần của hệ thống bị lỗi, v.v.).

Chúng ta nên ném các lỗi tương ứng với sự cố mà ứng dụng của chúng ta đã gặp phải.
Ví dụ: nếu chúng ta muốn từ chối dữ liệu từ request payload, thì chúng ta nên trả về phản hồi 400 như sau trong Express API:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// existing users
const users = [
    {email: 'abc@foo.com'}
]

app.use(bodyParser.json());

app.post('/users', (req, res) => {
    const {email} = req.body;
    const userExists = users.find(u => u.email === email);
    if (userExists) {
        return res.status(400).json({error: 'User already exists'})
    }
    res.json(req.body);
});


app.listen(3000, () => console.log('server started'));
```

Trong đoạn mã trên,
chúng ta có danh sách người dùng hiện có trong mảng người dùng với email đã cho.

Sau đó,
nếu chúng tôi cố gắng gửi `payload` có giá trị email đã tồn tại trong người dùng,
chúng tôi sẽ nhận được mã trạng thái phản hồi 400 kèm theo thông báo 'Người dùng đã tồn tại' để cho người dùng biết rằng người dùng đã tồn tại.
Với thông tin đó,
người dùng có thể sửa hành động bằng cách thay đổi email thành nội dung không tồn tại.

Mã lỗi cần phải có thông báo kèm theo để người bảo trì có đủ thông tin khắc phục sự cố,
nhưng kẻ tấn công không thể sử dụng nội dung lỗi để thực hiện các cuộc tấn công của chúng tôi như đánh cắp thông tin hoặc làm sập hệ thống.

Bất cứ khi nào API của chúng tôi không hoàn thành thành công,
chúng tôi sẽ xử lý thất bại bằng cách gửi lỗi kèm theo thông tin để giúp người dùng thực hiện hành động khắc phục.

## Allow filtering, sorting, and pagination

Cơ sở dữ liệu đằng sau API REST có thể rất lớn.
Đôi khi, có quá nhiều dữ liệu đến mức không nên trả lại tất cả cùng một lúc vì tốc độ quá chậm hoặc sẽ làm hỏng hệ thống của chúng tôi.
Vì vậy, chúng ta cần có cách để lọc các mục.

Chúng tôi cũng cần các cách phân trang dữ liệu để chỉ trả về một vài kết quả mỗi lần.
Chúng tôi không muốn ràng buộc tài nguyên quá lâu bằng cách cố gắng lấy tất cả dữ liệu được yêu cầu cùng một lúc.

Lọc và phân trang đều tăng hiệu suất bằng cách giảm mức sử dụng tài nguyên máy chủ.
Khi càng có nhiều dữ liệu tích lũy trong cơ sở dữ liệu thì các tính năng này càng trở nên quan trọng.

Đây là một ví dụ nhỏ trong đó API có thể chấp nhận chuỗi truy vấn với nhiều tham số truy vấn khác nhau để cho phép chúng tôi lọc các mục theo trường của chúng:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// employees data in a database
const employees = [
    {firstName: 'Jane', lastName: 'Smith', age: 20},
    //...
    {firstName: 'John', lastName: 'Smith', age: 30},
    {firstName: 'Mary', lastName: 'Green', age: 50},
]

app.use(bodyParser.json());

app.get('/employees', (req, res) => {
    const {firstName, lastName, age} = req.query;
    let results = [...employees];
    if (firstName) {
        results = results.filter(r => r.firstName === firstName);
    }

    if (lastName) {
        results = results.filter(r => r.lastName === lastName);
    }

    if (age) {
        results = results.filter(r => +r.age === +age);
    }
    res.json(results);
});

app.listen(3000, () => console.log('server started'));
```

Trong đoạn code trên,
chúng ta có biến `req.query` để lấy các tham số query.
Sau đó,
chúng tôi trích xuất các giá trị thuộc tính bằng cách phá hủy các tham số truy vấn riêng lẻ thành các biến bằng cú pháp phá hủy JavaScript.
Cuối cùng,
chúng ta chạy filter với mỗi giá trị tham số truy vấn để định vị các mục mà chúng ta muốn trả về.

Khi chúng tôi đã làm điều đó,
chúng tôi trả về kết quả dưới dạng phản hồi.
Do đó,
khi chúng ta thực hiện một yêu cầu GET đến đường dẫn sau với chuỗi truy vấn:

`/employees?lastName=Smith&age=30`

Chúng tôi nhận được:

```json
[
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 30
  }
]
```

như phản hồi trả về vì chúng tôi đã lọc theo `lastName` và `age`.

Tương tự như vậy, chúng ta có thể chấp nhận tham số truy vấn trang và trả về một nhóm các mục nhập ở vị trí từ `(page - 1) * 20` đến `page * 20`.

Chúng tôi cũng có thể chỉ định các trường để sắp xếp trong chuỗi truy vấn.
Ví dụ: chúng ta có thể lấy tham số từ một chuỗi truy vấn với các trường mà chúng ta muốn sắp xếp dữ liệu. Sau đó, chúng ta có thể sắp xếp chúng theo các trường riêng lẻ đó.

Ví dụ: chúng tôi có thể muốn trích xuất chuỗi truy vấn từ một URL như:

```url
http://example.com/articles?sort=+author,-datepublished
```

Trong đó `+` có nghĩa là tăng dần và `-` có nghĩa là giảm dần.
Vì vậy,
chúng tôi sắp xếp theo tên tác giả theo thứ tự bảng chữ cái và ngày xuất bản từ gần đây nhất đến ít gần đây nhất.

## Duy trì thực hành bảo mật tốt

Hầu hết các giao tiếp giữa máy khách và máy chủ nên được riêng tư vì chúng tôi thường gửi và nhận thông tin cá nhân.
Do đó, sử dụng `SSL/TLS` để bảo mật là điều bắt buộc.

Chứng chỉ SSL không quá khó để tải lên máy chủ và chi phí miễn phí hoặc rất thấp.
Không có lý do gì để không làm cho các API REST của chúng tôi giao tiếp qua các kênh an toàn thay vì mở.

Mọi người sẽ không thể truy cập thêm thông tin mà họ yêu cầu.
Ví dụ: người dùng bình thường sẽ không thể truy cập thông tin của người dùng khác.
Họ cũng không thể truy cập dữ liệu của quản trị viên.

Để thực thi nguyên tắc đặc quyền tối thiểu,
chúng ta cần thêm kiểm tra vai trò cho một vai trò duy nhất hoặc có vai trò chi tiết hơn cho mỗi người dùng.

Nếu chúng tôi chọn nhóm người dùng thành một vài vai trò,
thì các vai trò phải có các quyền bao gồm tất cả những gì họ cần và không còn nữa.
Nếu chúng tôi có quyền chi tiết hơn cho từng tính năng mà người dùng có quyền truy cập,
thì chúng tôi phải đảm bảo rằng quản trị viên có thể thêm và xóa các tính năng đó khỏi mỗi người dùng cho phù hợp.
Ngoài ra,
chúng tôi cần thêm một số vai trò đặt trước có thể được áp dụng cho người dùng nhóm để chúng tôi không phải làm điều đó cho mọi người dùng theo cách thủ công.

## Dữ liệu bộ nhớ cache để cải thiện hiệu suất

Chúng ta có thể thêm `cache` để trả về dữ liệu từ bộ nhớ đệm cục bộ thay vì truy vấn cơ sở dữ liệu để lấy dữ liệu mỗi khi chúng ta muốn truy xuất một số dữ liệu mà người dùng yêu cầu.
Điều tốt về bộ nhớ đệm là người dùng có thể lấy dữ liệu nhanh hơn.
Tuy nhiên, dữ liệu mà người dùng nhận được có thể đã lỗi thời.
Điều này cũng có thể dẫn đến các vấn đề khi gỡ lỗi trong môi trường sản xuất khi có sự cố xảy ra khi chúng ta tiếp tục thấy dữ liệu cũ.

Có nhiều loại giải pháp bộ nhớ đệm như `Redis`, `in-memory caching`, v.v.
Chúng tôi có thể thay đổi cách dữ liệu được lưu vào bộ nhớ cache khi nhu cầu của chúng tôi thay đổi.

Ví dụ: `Express` có middlware apicache để thêm bộ nhớ đệm vào ứng dụng của chúng tôi mà không cần cấu hình nhiều.
Chúng tôi có thể thêm một bộ nhớ cache trong bộ nhớ đơn giản vào máy chủ của mình như sau:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const apicache = require('apicache');
const app = express();
let cache = apicache.middleware;
app.use(cache('5 minutes'));

// employees data in a database
const employees = [
    {firstName: 'Jane', lastName: 'Smith', age: 20},
    //...
    {firstName: 'John', lastName: 'Smith', age: 30},
    {firstName: 'Mary', lastName: 'Green', age: 50},
]

app.use(bodyParser.json());

app.get('/employees', (req, res) => {
    res.json(employees);
});

app.listen(3000, () => console.log('server started'));
```

Đoạn code trên chỉ tham chiếu đến middleware apicache với apicache.middleware và sau đó chúng ta có:

`app.use (bộ nhớ cache ('5 phút'))`

để áp dụng bộ nhớ đệm cho toàn bộ ứng dụng.
Ví dụ: chúng tôi lưu trữ kết quả trong 5 phút. Chúng tôi có thể điều chỉnh điều này cho nhu cầu của chúng tôi.

Nếu bạn đang sử dụng `caching`, bạn cũng nên bao gồm thông tin `Cache-Control` trong header của mình.
Điều này sẽ giúp người dùng sử dụng hiệu quả hệ thống bộ nhớ đệm của bạn.

## Lập phiên bản API của chúng tôi

Chúng ta nên có các phiên bản API khác nhau nếu chúng ta đang thực hiện bất kỳ thay đổi nào đối với chúng có thể phá vỡ máy khách.
Việc lập phiên bản có thể được thực hiện theo phiên bản ngữ nghĩa (ví dụ: 2.0.6 để chỉ ra phiên bản chính 2 và bản vá thứ sáu) giống như hầu hết các ứng dụng hiện nay.

Bằng cách này,
chúng tôi có thể dần dần loại bỏ các điểm cuối cũ thay vì buộc mọi người phải chuyển sang API mới cùng một lúc.
Điểm cuối v1 có thể duy trì hoạt động cho những người không muốn thay đổi, trong khi v2, với các tính năng mới sáng bóng, có thể phục vụ những người sẵn sàng nâng cấp. Điều này đặc biệt quan trọng nếu API của chúng tôi là công khai. Chúng tôi nên phiên bản chúng để chúng tôi không phá vỡ các ứng dụng của bên thứ ba sử dụng API của chúng tôi.

Việc lập phiên bản thường được thực hiện với ``/v1/`, /v2/`, v.v. được thêm vào đầu đường dẫn API.

Ví dụ: chúng ta có thể làm điều đó với Express như sau:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/v1/employees', (req, res) => {
    const employees = [];
    // code to get employees
    res.json(employees);
});

app.get('/v2/employees', (req, res) => {
    const employees = [];
    // different code to get employees
    res.json(employees);
});

app.listen(3000, () => console.log('server started'));
```

Chúng tôi chỉ cần thêm số phiên bản vào đầu đường dẫn URL điểm cuối vào phiên bản chúng.

## Nguồn:

https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/