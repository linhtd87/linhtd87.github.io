---
# This is the title of the article
title: Các nguyên tắc lập trình
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
  - Các nguyên tắc lập trình
  - principles in software design
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# Các nguyên tắc lập trình

## SOLID

Trong thế giới năng động của phát triển phần mềm, việc viết mã có thể duy trì và mở rộng là rất quan trọng đối với sự
thành công của bất kỳ dự án nào. Các nguyên tắc thiết kế SOLID cung cấp một bộ hướng dẫn có thể giúp các nhà phát triển
đạt được chính xác điều đó. Được phát triển bởi Robert C. Martin (Uncle Bob), những nguyên tắc này đã trở thành nền tảng
của kiến trúc phần mềm hiện đại. Trong bài đăng này, tôi sẽ khám phá sâu từng nguyên tắc SOLID, hiểu tầm quan trọng của
nó và tìm hiểu cách áp dụng chúng một cách hiệu quả với các ví dụ mã hóa thực tế.

### 1. Nguyên tắc trách nhiệm duy nhất (Single Responsibility Principle SRP):

Nguyên tắc trách nhiệm duy nhất nhấn mạnh rằng một lớp học chỉ nên có một lý do để thay đổi. Nói cách khác, một lớp
học nên có một trách nhiệm hoặc nhiệm vụ duy nhất. Bằng cách tuân thủ SRP, chúng tôi đảm bảo rằng mỗi lớp có một mục
đích rõ ràng, làm cho mã trở nên mô-đun hơn, dễ bảo trì hơn và dễ hiểu hơn.

Hãy minh họa SRP bằng một ví dụ:

```php
// Bad Practice - One class with multiple responsibilities
class OrderProcessingService
{
   public void ProcessOrder(Order order)
   {
   // ... Process the order ...
   }

    public void SendEmailConfirmation(Order order)
    {
        // ... Send email confirmation ...
    }

    public void GenerateInvoice(Order order)
    {
        // ... Generate the invoice ...
    }

}
```

```php
// Good Practice - Separate classes with single responsibility
class OrderProcessor
{
    public void ProcessOrder(Order order)
    {
        // ... Process the order ...
    }
}

class EmailService
{
    public void SendEmailConfirmation(Order order)
    {
        // ... Send email confirmation ...
    }
}

class InvoiceGenerator
{
    public void GenerateInvoice(Order order)
    {
        // ... Generate the invoice ...
    }
}
```

### 2. Nguyên tắc mở-đóng (Open-Closed Principle OCP):

Nguyên tắc đóng mở gợi ý rằng các thực thể phần mềm nên được mở để mở rộng nhưng đóng để sửa đổi. Bằng cách sử dụng
các giao diện, chúng tôi tuân thủ OCP và tạo ra các hệ thống linh hoạt và thích ứng hơn có thể dễ dàng mở rộng mà
không thay đổi mã hiện có.

Hãy xem cách áp dụng OCP:

```php
// Bad Practice - Modifying existing class
class Shape
{
   public virtual double Area()
   {
   // ... Calculate area ...
   }
}
   
class Circle : Shape
{
   public override double Area()
   {
   // ... Calculate circle area ...
   }
}
   
class Square : Shape
{
   public override double Area()
   {
   // ... Calculate square area ...
   }
}
```

```php
// Good Practice - Extending behavior through interfaces
interface IShape
{
    double Area();
}

class Circle : IShape
{
    public double Area()
    {
        // ... Calculate circle area ...
    }
}

class Square : IShape
{
    public double Area()
    {
        // ... Calculate square area ...
    }
}
```

### 3. Nguyên tắc thay thế Liskov (Liskov Substitution Principle LSP):

Nguyên lý thay thế Liskov nhấn mạnh rằng các đối tượng của các lớp dẫn xuất nên được thay thế cho các đối tượng của
lớp cơ sở mà không ảnh hưởng đến tính chính xác của chương trình. Bằng cách tuân theo LSP, chúng tôi đảm bảo rằng các
lớp phái sinh có thể thay thế liền mạch các đối tác lớp cơ sở của chúng, thúc đẩy tính nhất quán và khả năng bảo trì
mã.

Hãy duy trì LSP:

```php
// Bad Practice - Violating LSP
class Bird
{
   public virtual void Fly()
   {
   // ... Fly like a bird ...
   }
}

class Penguin : Bird
{
   public override void Fly()
   {
   throw new NotSupportedException("Penguins cannot fly.");
   }
}
```

```php
// Good Practice - Upholding LSP
interface IFlyable
{
    void Fly();
}

class Bird : IFlyable
{
   public void Fly()
   {
   // ... Fly like a bird ...
   }
}

class Penguin : IFlyable
{
   public void Fly()
   {
   // Penguins cannot fly, but still conform to the interface.
   }
}
```

### 4. Nguyên tắc phân tách giao diện (Interface Segregation Principle ISP):

Nguyên tắc phân tách giao diện khuyên bạn nên tách các giao diện thành các giao diện nhỏ hơn, tập trung hơn, thay vì
có các giao diện lớn, nguyên khối. Bằng cách tuân thủ ISP, chúng tôi tạo ra các giao diện gọn gàng và tập trung hơn,
cho phép khả năng bảo trì và khả năng thích ứng mã tốt hơn.

Hãy triển khai ISP:

```php
// Bad Practice - Large, monolithic interface
interface IWorker
{
   void Work();
   void Eat();
   void Sleep();
}

class Robot : IWorker
{
    // Implementing unnecessary methods for a robot.
}

class Human : IWorker
{
    // Implementing unnecessary methods for a human.
}
```

```php
// Good Practice - Segregated interfaces
interface IWorkable
{
    void Work();
}

interface IEatable
{
    void Eat();
}

interface ISleepable
{
    void Sleep();
}

class Robot : IWorkable
{
   public void Work()
   {
   // ... Rob   ot work logic ...
   }
}

class Human : IWorkable, IEatable, ISleepable
{
   public void Work()
   {
    // ... Human work logic ...
   }

    public void Eat()
    {
        // ... Human eat logic ...
    }

    public void Sleep()
    {
        // ... Human sleep logic ...
    }
}
```

### 5. Nguyên tắc đảo ngược phụ thuộc (Dependency Inversion Principle DIP):

Nguyên tắc đảo ngược phụ thuộc đề nghị dựa vào trừu tượng hơn là triển khai cụ thể. Bằng cách tuân theo DIP, chúng
tôi thúc đẩy **loose coupling** và cho phép kiểm tra dễ dàng hơn, khả năng mở rộng và thiết kế mô-đun hơn.

Hãy áp dụng DIP:

```php
// Bad Practice - High-level module depends on low-level module
class OrderProcessor
{
    private readonly EmailService _emailService;

    public OrderProcessor()
    {
        _emailService = new EmailService();
    }
    
    public void ProcessOrder(Order order)
    {
        // ... Process the order ...
        _emailService.SendEmailConfirmation(order);
    }

}
```

```php
// Good Practice - High-level module depends on abstraction
interface IEmailService
{
    void SendEmailConfirmation(Order order);
}

class EmailService : IEmailService
{
    public void SendEmailConfirmation(Order order)
    {
        // ... Send email confirmation ...
    }
}

class OrderProcessor
{
    private readonly IEmailService _emailService;

    public OrderProcessor(IEmailService emailService)
    {
        _emailService = emailService;
    }
    
    public void ProcessOrder(Order order)
    {
        // ... Process the order ...
        _emailService.SendEmailConfirmation(order);
    }

}
```

Kết hợp các nguyên tắc **SOLID** trong hành trình phát triển phần mềm của bạn có thể mang tính chuyển đổi. Những nguyên
tắc
này trao quyền cho các nhà phát triển viết mã sạch hơn, dễ bảo trì hơn và có thể mở rộng hơn, dẫn đến các giải pháp phần
mềm mạnh mẽ và có thể mở rộng. Khi bạn áp dụng **SRP**, **OCP**, **LSP**, **ISP** và **DIP** trong các dự án của mình,
bạn sẽ chứng kiến sự
phát triển của sức mạnh mã hóa của mình và sự xuất hiện của mã thực sự sạch sẽ đứng trước thử thách của thời gian. Nắm
bắt các nguyên tắc **SOLID** và nâng cao kỹ năng mã hóa của bạn lên một tầm cao mới!

## DRY

Ngày xửa ngày xưa, một nhà phát triển trẻ sợ hãi (tôi) muốn viết mã tuyệt vời. Tôi đã thấy nhiều thế hệ nhà phát triển
nói về nó, khi chúng ta nói về kim tự tháp hai ngàn năm sau khi xây dựng. Tôi muốn để lại dấu ấn của mình trên thế giới!

Do đó, tôi đã làm những gì tôi nghĩ là tốt nhất: tránh mọi cạm bẫy mà mọi người cảm thấy mắc phải, bằng cách tuân theo
các **Holy Coding Principles**, được tạo ra bởi những **Ones Who Have the Knowledge**.

Tôi đã theo dõi họ một cách quyết liệt. Đó là tôn giáo của tôi, giáo phái của tôi, cách sống của tôi. Sau khi nghe về
nguyên tắc DRY, mã của tôi đột nhiên trở nên KHÔ như Sahara. Tôi thề với mặt trăng, bầu trời và mười hai vị thần: Không
có gì sẽ được lặp lại trong mật mã của tôi! Bao giờ!

Điều này dẫn đến nhiều, rất nhiều vấn đề.

Tôi hiểu rằng các nguyên tắc cần phải được hiểu rõ, bằng cách đọc những cuốn sách mà chúng được xác định, và không chỉ
nhận xét ngẫu nhiên trên stack overflow. Tôi cũng hiểu rằng các nguyên tắc nên được sử dụng tùy thuộc vào bối cảnh.

Một lời nhắc nhở nhỏ cho những người ở phía sau không tuân theo: nguyên tắc DRY có nghĩa là "Đừng lặp lại chính mình" và
lần đầu tiên được giới thiệu trong cuốn sách **_The Pragmatic Programmer_**. Bản thân nguyên tắc này đã được biết đến và
áp
dụng trước khi cuốn sách này đi vào cuộc sống; nhưng Lập trình viên thực dụng đã định nghĩa chính xác nó và đặt ra tên
của nó.

Không chần chừ gì nữa, hãy cùng đi sâu vào những vùng đất tuyệt vời của DRY nhé! Nếu bạn cảm thấy bạn muốn đốt bài viết
này hoặc để che nó bằng lời khen ngợi, hãy điền miễn phí để lại nhiều bình luận để tăng vinh quang của tôi.

### DRY là về sự trùng lặp kiến thức

Ngay cả khi cụm từ **Don't Repeat Yourself** nghe có vẻ đơn giản, nó cũng nghe có vẻ quá chung chung. Trong **The
Pragmatic
Programmer**, DRY được định nghĩa là

> Mỗi phần kiến thức phải có một đại diện duy nhất, rõ ràng, có thẩm quyền trong một hệ thống.

Nó đặt ra câu hỏi: _một phần kiến thức là gì?_ Tôi sẽ định nghĩa nó là:

* Một chức năng chính xác trong lĩnh vực kinh doanh của ứng dụng của bạn.
* Một thuật toán.

Để lấy một ví dụ thương mại điện tử được sử dụng quá mức, một lớp `shipment` và hành vi của nó sẽ là một phần của
_business domain_
của ứng dụng của bạn. Một lô hàng là một cái gì đó thực tế mà công ty của bạn sử dụng để gửi sản phẩm cho khách hàng của
họ.

Do đó, logic của `shipment` này chỉ nên xuất hiện một lần trong ứng dụng. Tại sao?

Hãy tưởng tượng rằng bạn cần gửi lô hàng đến một nhà kho. Bạn cần kích hoạt hành vi này ở 76 vị trí khác nhau trong ứng
dụng của mình. Không vấn đề gì: bạn lặp lại logic 76 lần.

Sau một thời gian, sếp của bạn đến gặp bạn và yêu cầu bạn thay đổi hành vi này. Thay vì gửi lô hàng đến một kho, bạn cần
gửi chúng đến ba kho khác nhau.

Kết quả? Bạn sẽ dành rất nhiều thời gian cho logic lô hàng của mình, vì bạn sẽ phải thay đổi nó ở 76 nơi khác nhau! Đây
là một sự lãng phí thời gian, và một cách tốt để tạo ra lỗi để chọc giận sếp của bạn.

Giải pháp: tạo ra một đại diện duy nhất cho _knowledge_ của bạn. Đặt logic để gửi lô hàng ở một nơi và sau đó sử dụng
biểu
diễn kiến thức này ở bất cứ đâu bạn cần. Ví dụ: gửi một lô hàng có thể là một phương thức thuộc lớp `Shipment` mà bạn có
thể sử
dụng lại ở mọi nơi bạn thao tác với một loạt các lô hàng này. Chúc mừng! Bạn đã tạo ra một sự trừu tượng mới.

Hãy lấy một ví dụ khác. Hãy tưởng tượng rằng bạn đã mã hóa một lớp ưa thích để phân tích cú pháp `B-tree`. Đây cũng có
thể
được coi là _knowledge_: đó là một thuật toán nên được xác định một lần. Việc thể hiện _knowledge_ đó nên được sử dụng ở
mọi
nơi mà không lặp lại chính _knowledge_.

### DRY và trùng lặp mã

Vì vậy, DRY là tất cả về kiến thức? Tất cả về logic kinh doanh?

Hãy xem xét một số đoạn mã để hiểu tại sao:

```php
<?php

interface Product
{
    public function displayPrice();
}

class PlasticDuck implements Product
{
    /** @var int */
    private $price;

    public function __construct(int $price)
    {
        $this->price = $price;
    }

    public function displayPrice()
    {
        echo sprintf("The price of this plastic duck is %d euros!", $this->price);
    }
}

$plasticDuck = new PlasticDuck(2);
$plasticDuck->displayPrice();
```

Mã này trông không tệ lắm, phải không?

Dave, nhà phát triển đồng nghiệp của bạn, nghĩ rằng điều đó thật kinh khủng. Sau khi nhìn vào mật mã bạn đã viết, anh ta
đến bàn làm việc của bạn và hét lên:

1. Từ `price` này được lặp lại 6 lần!
2. Phương pháp `displayPrice()` này được lặp lại trong giao diện và thực hiện nó!

Câu trả lời của bạn rất nhanh chóng:

1. Các biến (và thuộc tính) `price` như cần được lặp lại trong mã của bạn. Nó không phải là một chức năng.
2. _Kiến thức_ (hiển thị giá) chỉ có mặt một lần, trong chính phương pháp.

Không vi phạm DRY ở đây.

Dave không nói nên lời, cảm thấy hào quang mạnh mẽ của bạn chiếu sáng cả căn phòng.

Nhưng bạn đã tấn công chuyên môn của Dave: anh ấy tức giận. Anh ấy muốn giành chiến thắng trong cuộc tranh luận. Chẳng
mấy chốc, anh ta tìm thấy một đoạn mã khác mà bạn đã viết; Anh ta quay lại bàn làm việc của bạn, tát vào mặt bạn:

```php
<?php

class CsvValidation
{
    public function validateProduct(array $product)
    {
        if (!isset($product['color'])) {
            throw new \Exception('Import fail: the product attribute color is missing');
        }

        if (!isset($product['size'])) {
            throw new \Exception('Import fail: the product attribute size is missing');
        }

        if (!isset($product['type'])) {
            throw new \Exception('Import fail: the product attribute type is missing');
        }
    }
}
```

Dave, đầy mình, tuyên bố: "Con lợn nhỏ! Mã này không KHÔ!". Và bạn, nhận thức được nguyên tắc DRY thực sự là gì, hãy trả
lời: "Nhưng logic kinh doanh, kiến thức, vẫn không được lặp lại!".

Một lần nữa, bạn đã đúng. Phương thức xác thực một số đầu ra CSV chỉ ở một nơi (`validateProduct()`). Đây là kiến thức,
và nó không lặp lại.

Nhưng Dave chưa sẵn sàng chấp nhận nó! "Còn tất cả những điều kiện đó ở khắp mọi nơi thì sao? Đó `if`? Đó không phải là
một
sự vi phạm rõ ràng đối với nguyên tắc DRY sao?"

Bạn có một giọng trầm để trả lời, phát âm từng từ một cách hoàn hảo, kiến thức của bạn nảy lên tường để tạo ra tiếng
vang vô hạn của nhận thức:

"Ừm... Không. Không phải vậy. Tôi sẽ gọi đó là sự trùng lặp mã không cần thiết, nhưng không vi phạm nguyên tắc DRY".

Đột nhiên, ngón tay của bạn gõ trên bàn phím, với tốc độ ánh sáng, mã sau:

```php
<?php

class CsvValidation
{
    private $productAttributes = [
        'color',
        'size',
        'type',
    ];

    public function validateProduct(array $product)
    {
        foreach ($this->productAttributes as $attribute) {
            if (!isset($product[$attribute])) {
                throw new \Exception(sprintf('Import fail: the product attribute %s is missing', $attribute));
            }
        }
    }
}
```

Nó có vẻ tốt hơn, phải không? Không còn trùng lặp mã nữa!

Tóm lại:

1. **Knowledge duplication** luôn là vi phạm nguyên tắc DRY.
2. **Code duplication** không nhất thiết vi phạm nguyên tắc DRY.

Dave vẫn chưa bị thuyết phục. Với một sự thanh thản thách thức các bậc thầy tâm linh cao nhất qua các thời đại, bạn đưa
ra nét cuối cùng. Bạn lấy một cuốn sách trên bàn và đọc như sau:

> Nhiều người đã lấy nó [nguyên tắc DRY] để chỉ đề cập đến mã: họ nghĩ rằng DRY có nghĩa là "don’t copy-and-paste lines
> of source.". [...] DRY là về sự trùng lặp của kiến thức, của ý định. Đó là về việc thể hiện cùng một điều ở hai nơi
> khác
> nhau, có thể theo hai cách hoàn toàn khác nhau.

Đây là từ ấn bản kỷ niệm 20 năm của Lập trình viên thực dụng, cùng một cuốn sách đã đặt ra nguyên tắc DRY.

### DRY Everything: Công thức cho thảm họa

#### Tổng quát nguy hiểm

Hãy lấy một ví dụ thú vị hơn. Một cái gì đó đã xảy ra trong cuộc sống™ thực.

Tôi đang làm việc trên một ứng dụng cho các nhà làm phim. Họ có thể tải lên phim và siêu dữ liệu của họ (tiêu đề, mô tả,
diễn viên và đoàn làm phim...) bằng giao diện người dùng của ứng dụng. Thông tin này được hiển thị trên nền tảng VOD.

Kiến trúc của ứng dụng được lấy cảm hứng từ mẫu MVC và trông như thế này:

![Cây tệp dự án cơ bản](/assets/images/cac-nguyen-tac-lap-trinh-01.png)

Nhóm nội dung của công ty cũng có thể sử dụng ứng dụng này. Họ có thể tạo ra siêu dữ liệu của bộ phim khi các nhà làm
phim không muốn tự làm điều đó.

Các nhà làm phim và đội ngũ nội dung có những nhu cầu khác nhau. Nhóm nội dung được sử dụng để làm việc với các hệ thống
quản lý nội dung, các nhà làm phim thì không. Do đó, chúng tôi quyết định tạo hai giao diện:

* Cái đầu tiên cho nhóm nội dung, không có hướng dẫn hoặc giải thích, nơi bạn có thể nhập nội dung nhanh nhất có thể.
* Một cái khác dành cho các nhà làm phim, với trải nghiệm người dùng thân thiện hơn.

Đây là những gì chúng tôi đã làm:

![Cây tệp dự án cơ bản](/assets/images/cac-nguyen-tac-lap-trinh-02.png)

Các bộ điều khiển từ hai ứng dụng khác nhau gần như giống nhau. Nó không chỉ là về tên của họ: việc triển khai của họ,
quá. Về cơ bản, chúng tôi đã sao chép-dán chúng.

Điều này trông giống như một sự vi phạm rõ ràng và xấu xí đối với nguyên tắc DRY: `views` và `controller` lặp đi lặp
lại khắp nơi! Chúng ta có thể đã tạo ra một sự trừu tượng để nhóm logic chung, như một lớp trừu tượng chẳng hạn. Nhưng
điều này sẽ kết hợp các bộ điều khiển của hai ứng dụng khác nhau với nhau.

Thay đổi lớp trừu tượng và mọi bộ điều khiển của bạn cần hỗ trợ thay đổi mà không bị phá vỡ.

Trong nhiều trường hợp, chúng tôi biết rằng giao diện sẽ phát triển khác nhau trong tương lai. Chúng ta sẽ tạo ra rất
nhiều điều kiện trong các hành động của bộ điều khiển nếu chúng ta tạo một bộ điều khiển cho cả hai ứng dụng. Không ai
muốn một rừng các lệnh `if`; Mã kết quả sẽ phức tạp hơn nhiều.

Ngoài ra, các bộ điều khiển không nên chứa bất kỳ logic nghiệp vụ nào. Nếu bạn nhớ lại định nghĩa của nguyên tắc DRY, đó
là _knowledge_ này, logic kinh doanh này không nên bị trùng lặp.

Nói tóm lại, cố gắng áp dụng DRY ở mọi nơi có thể có hai kết quả:

* Khớp nối không cần thiết.
* Sự phức tạp không cần thiết.

Bạn không muốn bất kỳ điều nào trong số này trong codebase của mình.

#### Tái cấu trúc sớm

Bạn không nên áp dụng nguyên tắc DRY nếu logic nghiệp vụ của bạn chưa có bất kỳ sự trùng lặp nào. Một lần nữa, nó phụ
thuộc vào bối cảnh, nhưng, theo nguyên tắc thông thường, cố gắng áp dụng DRY cho một cái gì đó chỉ được sử dụng ở một
nơi có thể dẫn đến khái quát hóa sớm.

Nếu bạn bắt đầu khái quát hóa một cái gì đó bởi vì "nó có thể hữu ích sau này", xin vui lòng không. Tại sao?

1. Bạn sẽ dành thời gian để tạo ra các khái niệm trừu tượng (các lớp trừu tượng và những thứ khác) có thể chỉ được sử
   dụng
   ở một nơi, mãi mãi. Nhu cầu kinh doanh có thể thay đổi rất nhanh và mạnh mẽ: hôm nay, mọi người sẽ nói với bạn rằng
   bạn
   cần một số khái quát "cho tương lai", và ngày mai, mọi người sẽ quên nó đi.
2. Một lần nữa, bạn có thể sẽ giới thiệu sự phức tạp và **coupling** trong mã của bạn mà không có lợi ích.
   Tái sử dụng mã và sao chép mã là hai điều khác nhau. DRY nói rằng bạn không nên sao chép kiến thức, không phải là bạn
   nên sử dụng trừu tượng để tái sử dụng mọi thứ, ở mọi nơi.

Đây là những gì tôi đã học được qua nhiều năm: mã cho cụ thể ngay từ đầu và đừng cố gắng khái quát hóa. Ngay cả khi
người quản lý của bạn muốn có 90% ứng dụng của bạn có thể tái sử dụng cho mọi trường hợp sử dụng. Trong thực tế, điều
này gần như không bao giờ có thể.

Hai chức năng, ngay cả khi chúng trông rất giống nhau ngay từ cái nhìn đầu tiên, có thể trở nên rất khác nhau trong
tương lai. Nếu bạn có bất kỳ nghi ngờ nào, tốt hơn là sao chép mã của bạn và để nó đi theo con đường khác.

Sandy Metz đã nói điều đó tốt hơn tôi:

> Duplication is far cheaper than the wrong abstraction.
> Sao chép rẻ hơn nhiều so với trừu tượng sai.

Viết mã trước tiên, làm cho nó hoạt động, và sau đó ghi nhớ tất cả các nguyên tắc bạn biết để tái cấu trúc sau đó và chỉ
khi bạn cần nó.

Vi phạm nguyên tắc DRY nên được xử lý khi kiến thức đã và rõ ràng là trùng lặp.

#### Kiến thức tên miền tương tự...?

Tôi đã viết ở trên rằng sự lặp lại kiến thức luôn vi phạm nguyên tắc DRY. Điều này chỉ áp dụng khi cùng một kiến thức
được lặp lại. Hãy lấy một ví dụ:

```php
<?php

/** Shipment from the warehouse to the customer */
class Shipment
{
     public $deliveryTime = 4; //in days

     public function calculateDeliveryDay(): DateTime
     {
         return new \DateTime("now +{$this->deliveryTime} day");
     }
}

/** Order return of a customer */
class OrderReturn
{
    public $returnLimit = 4; //in days

    public function calculateLastReturnDay(): DateTime
    {
         return new \DateTime("now +{$this->returnLimit} day");
    }
}
```

Bạn có thể nghe thấy Dave, nhà phát triển đồng nghiệp của bạn, nhẹ nhàng hét vào tai bạn một lần nữa: "Đây là một sự vi
phạm rõ ràng đối với tất cả những gì tôi tin tưởng! Còn nguyên tắc DRY thì sao? Tim tôi đang chảy máu!".

Tuy nhiên, Dave lại sai. Từ góc độ thương mại điện tử, thời gian giao hàng của lô hàng cho khách
hàng (`Shipment::calculateDeliveryDay()`) không liên quan gì đến ngày cuối cùng khách hàng có thể trả lại sản phẩm đã
đặt của mình (`Return::calculateLastReturnDay`). Những gì dường như là một sự trùng lặp của kiến thức chỉ là một sự
trùng hợp ngẫu nhiên thuần túy.

Điều gì xảy ra nếu bạn kết hợp hai phương pháp đó trong một? Nếu công ty của bạn quyết định rằng khách hàng hiện có một
tháng để trả lại sản phẩm của mình, bạn sẽ phải chia nhỏ phương pháp một lần nữa. Nếu không, việc giao hàng cũng sẽ mất
một tháng!

Đây không phải là cách tốt nhất để làm hài lòng khách hàng.

### DRY không chỉ là về mã

DRY không phải là thứ bạn chỉ nên tôn trọng trong mã của mình. Bạn không nên lặp lại kiến thức về lĩnh vực kinh doanh
của mình trong bất cứ điều gì liên quan đến dự án của bạn.

Để trích dẫn Dave Thomas một lần nữa:

> A system’s knowledge is far broader than just its code. It refers to database schemas, test plans, the build system,
> even documentation.
>
> Kiến thức của một hệ thống rộng hơn nhiều so với chỉ mã của nó. Nó đề cập đến lược đồ cơ sở dữ liệu, kế hoạch kiểm
> tra, hệ thống xây dựng, thậm chí cả tài liệu.

Ý tưởng về DRY rất đơn giản về mặt lý thuyết: bạn không cần phải cập nhật song song nhiều thứ khi một thay đổi xảy ra.
Nếu kiến thức của bạn được lặp lại hai lần trong mã của bạn và bạn cần thay đổi nó, bạn có thể quên thay đổi nó ở mọi
nơi. Trong tài liệu của bạn, nó có thể dẫn đến những quan niệm sai lầm, nhầm lẫn và cuối cùng là triển khai sai.

### Áp dụng DRY tùy thuộc vào ngữ cảnh

Khi bắt đầu sự nghiệp, tôi thường là nạn nhân của chứng tê liệt phân tích. Tất cả những nguyên tắc đó kìm hãm tôi để làm
việc năng suất và hiệu quả. Nó quá phức tạp và tôi không muốn làm hỏng mọi thứ.

Tuy nhiên, nguyên tắc không phải là quy tắc bạn phải tuân theo. Chúng là công cụ để bạn đi theo hướng tốt. Công việc của
bạn là điều chỉnh chúng tùy thuộc vào tình huống.

Trên thực tế, hầu hết các nguyên tắc tốt đều là sự đánh đổi: khi bạn áp dụng nguyên tắc DRY, bạn làm cho mã của mình dễ
hiểu hơn, nhưng phạm vi thay đổi của bạn trở nên rộng hơn.

## KISS

### Giải thích chi tiết về nguyên tắc KISS trong phần mềm

Khi tôi tìm kiếm về nguyên tắc KISS trên Internet, tôi tình cờ gặp nhiều trang web định nghĩa nó trong một vài dòng: đơn giản là quan trọng, hãy đơn giản, kết thúc. Họ thường thất bại trong việc giải thích sự đơn giản
_là gì_, _tại sao_ sự đơn giản lại quan trọng và _làm thế nào_ để đạt được nó.

Đơn giản là một trong những ý tưởng thúc đẩy chúng ta nên ghi nhớ mọi lúc khi thiết kế một hệ thống. Vấn đề: nó thực sự khó đạt được.

Bạn đoán nó: chúng ta sẽ đi sâu vào sự đơn giản (và phức tạp) trong bài viết này. Tôi sẽ không viết về tất cả các cách khác nhau mà sự phức tạp có thể len lỏi trong codebase của bạn, nhưng thay vào đó, tôi sẽ cố gắng cung cấp cho bạn một cái nhìn tổng quan nhanh về các mặt nạ phức tạp khác nhau có thể đeo, với nhiều ví dụ. Chúng ta sẽ đi từ chính lĩnh vực kinh doanh, thông qua nitty-gritty (triển khai), để kết thúc trong sự phức tạp của kiến trúc phần mềm.

Chính xác hơn, chúng tôi sẽ cố gắng trả lời những câu hỏi sau:

* Sự khác biệt giữa đơn giản và dễ dàng là gì?
* Tại sao chúng ta cần giữ mọi thứ đơn giản?
* Chúng ta có thể tránh được sự phức tạp do chính doanh nghiệp tạo ra không?
* Tại sao chúng ta nên phát triển mạnh để xóa mã?
* Độ phức tạp cyclomatic (cyclomatic complexity) là gì?
* Điều gì có nghĩa là đơn giản cho một kiến trúc?
* Làm thế nào để quản lý các phụ thuộc của bạn?
* Tại sao chúng ta không nên cố gắng vượt qua mọi người bằng mã của mình?

#### Giản dị... Hay dễ dàng?

Có sự khác biệt quan trọng giữa các khái niệm dễ dàng và đơn giản mà chúng ta cần hiểu trước tiên. Hãy bắt đầu với các định nghĩa đơn giản. Từ điển nói gì về đơn giản?

> Đơn giản, cơ bản hoặc không phức tạp về hình thức, tính chất hoặc thiết kế; mà không cần trang trí hay trang trí nhiều.

> Bao gồm một yếu tố duy nhất; không phải là hợp chất.

Đủ dễ dàng: nếu hệ thống của bạn chỉ có một vài phần, bạn có một hệ thống đơn giản.

Chúng ta cũng có thể cố gắng định nghĩa "đơn giản" bằng cách xem xét định nghĩa trái ngược, phức tạp của nó:

> Bao gồm nhiều bộ phận khác nhau và kết nối với nhau.

Oanh! Điều đó thật thú vị. Một hệ thống đơn giản không nhất thiết phải là một hệ thống có một và chỉ một yếu tố. Đó là một hệ thống không có quá nhiều yếu tố khác nhau kết nối với nhau.

Nếu bạn vẫn chưa bị thuyết phục, điều đó thật tuyệt: điều thực sự quan trọng là phải có một đầu óc phản biện. Hãy xem xét một từ đồng nghĩa của phức tạp, phức tạp:

> Bao gồm nhiều bộ phận hoặc yếu tố kết nối với nhau; phức tạp.

Tôi có thể cảm thấy adrenaline của bạn đi qua toàn bộ cơ thể bạn, các tế bào thần kinh của bạn thực hiện điệu nhảy hiểu biết và toàn bộ tâm hồn bạn chiếu ánh sáng tri thức trong vũ trụ. Một lần nữa cùng một ý tưởng!

Bây giờ, sự khác biệt với **easy** là gì? Hãy mở lại từ điển:

> Đạt được mà không cần nỗ lực lớn; trình bày một vài khó khăn.

Giả sử bạn phải thực hiện phép cộng trong hệ nhị phân và bạn không biết làm thế nào để làm điều đó: nó không dễ dàng cho bạn. Bạn thiếu một số kiến thức. Nhưng sự bổ sung của bạn không phải là một hệ thống có quá nhiều bộ phận. Nó không phải là một hệ thống với các bộ phận được kết nối. Kết quả là, nó khó khăn cho bạn, nhưng nó cũng đơn giản.

Một ví dụ khác: nếu bạn có một codebase với 18237 lớp được ghép nối với nhau, bạn có một hệ thống phức tạp: có quá nhiều phần tử (các lớp) gắn liền với nhau. Ngay cả khi bạn có thể hiểu mọi thuật toán trong hệ thống của mình (chúng dễ dàng cho bạn), bản thân hệ thống vẫn phức tạp.

Tóm lại, đây là hai tội phức tạp:

1. Quá nhiều bộ phận trong hệ thống.
2. Quá nhiều phần được kết nối với nhau trong hệ thống.

Bây giờ chúng ta thực sự biết sự phức tạp (và, bằng cách mở rộng, đơn giản) có nghĩa là gì, bạn có thể tự hỏi:

* Tại sao điều quan trọng đối với một nhà phát triển phần mềm là đưa mũi của mình vào một số từ điển nhàm chán?
* Tại sao sự đơn giản nên được coi là một Thiên Chúa sẽ cứu tất cả chúng ta?

#### Tại sao chúng ta cần sự đơn giản?

Tại sao trở thành một nhà phát triển phần mềm có thể khó khăn? Một từ: _thay đổi_.

Nếu ứng dụng bạn đang xây dựng sẽ không bao giờ _thay
đổi_, hãy ngừng đọc bài viết này ngay lập tức! Trên thực tế, đừng đọc bất cứ điều gì về các nguyên tắc tốt trong phát triển phần mềm, nó vô dụng đối với bạn. Chỉ cần thực hiện một số mã thủ tục bằng bất kỳ ngôn ngữ nào bạn muốn, không tuân theo bất kỳ nguyên tắc nào và bạn sẽ thành công. Không ai sẽ để mắt đến codebase của bạn.

Một codebase không thay đổi là một huyền thoại. Ngữ cảnh xung quanh ứng dụng của bạn sẽ thay đổi (thư viện, thị trường...) và do đó, ứng dụng của bạn cũng sẽ cần phải thay đổi. Để sửa đổi ứng dụng của bạn, bạn sẽ phải hiểu cách các phần khác nhau của hệ thống hoạt động cùng nhau. Đại diện này ngồi trong não của bạn là mô hình tinh thần của hệ thống của bạn.

Tùy thuộc vào hệ thống, mô hình tinh thần của bạn sẽ chính xác hơn hoặc ít hơn. Còn các hệ thống phức tạp thì sao? Tôi chắc rằng bạn đã đoán được nó: thật khó khăn và mệt mỏi để tạo ra một mô hình tinh thần chính xác của một ứng dụng phức tạp.

> Kiểm soát sự phức tạp là bản chất của lập trình máy tính. Chúng ta sẽ luôn bị giới hạn bởi số lượng chi tiết tuyệt đối mà chúng ta có thể giữ thẳng trong đầu.
> **Nguồn Brian Kernighan**

Hãy nhìn vào codebase của Đức, nhà phát triển đồng nghiệp của bạn. Nó chứa đầy những phụ thuộc tiềm ẩn (hidden dependencies) và trạng thái có thể thay đổi toàn cầu (global mutable state). Khi bạn thay đổi một cái gì đó, bạn không có ý tưởng về các hiệu ứng gợn sóng lan truyền trong toàn bộ codebase. Mức năng lượng của bạn giảm xuống khi bạn đang cố gắng đặt mọi thứ vào đầu và cuối cùng, sự tức giận của bạn tăng lên. Tại thời điểm đó, bạn có thể ngạc nhiên khi nguyền rủa gia đình Đức qua nhiều thế hệ.

Kết quả của các hệ thống phức tạp? Lỗi, nhà phát triển không hài lòng, nguy cơ kiệt sức và khách hàng thất vọng ở cuối chuỗi. Không ai muốn điều đó.

#### Sự phức tạp trong kinh doanh

Sự phức tạp của một hệ thống cũng sẽ là một chỉ báo tốt về lượng thời gian các nhà phát triển cần để thêm một chức năng mới. Điều này thực sự quan trọng, kinh doanh khôn ngoan. Ngày nay, một tổ chức cần phải có khả năng thích ứng và vận tốc tốt (tốc độ với một hướng) để thành công.

Tuy nhiên, không phải lúc nào chúng ta cũng có thể tránh được sự phức tạp. Đầu tiên và quan trọng nhất, đó là tấm gương phản chiếu sự phức tạp trong kinh doanh mà chúng tôi xây dựng một ứng dụng. Sự phức tạp của các yêu cầu sẽ quyết định một phần tốt của sự phức tạp của hệ thống của chúng tôi!

Ví dụ: nếu bạn phát triển thương mại điện tử, bạn sẽ gặp khó khăn trong việc tránh có sản phẩm, đơn đặt hàng, lô hàng, quản lý kho hoặc trả lại. Có rất nhiều bộ phận chuyển động trong đó.

Đó là lý do tại sao, với tư cách là một nhà phát triển, bạn cần ghi nhớ những điều sau:

1. Nếu bạn có thể tránh sự phức tạp, hãy tránh nó, càng nhiều càng tốt.
2. Nếu bạn không thể, bạn cần đảm bảo rằng bạn quản lý nó đúng cách.

Làm thế quái nào để chúng ta làm điều đó?

#### Yêu cầu đơn giản hơn

Để tránh càng nhiều phức tạp kinh doanh càng tốt, tôi khuyên bạn nên tấn công trực tiếp vào sự phức tạp của các yêu cầu kinh doanh. Thế nào?

1. Nếu bạn không có bất kỳ cuộc họp lập kế hoạch nào mà các nhà phát triển và doanh nhân (người quản lý dự án và những người khác) thảo luận về các yêu cầu, vui lòng yêu cầu nó. Nhấn mạnh vào điểm đó, cho đến khi bạn nhận được nó. Đừng mù quáng làm theo những gì quản lý cấp cao đang ném vào bạn. Họ có thể không hiểu nó, nhưng một nhà phát triển có rất nhiều kiến thức quý giá có thể giúp giảm sự phức tạp của các yêu cầu.

2. Trong các cuộc họp này, khi bạn thấy một tính năng tiềm năng sẽ mang lại nhiều phức tạp, hãy đặt câu hỏi bắt đầu bằng "tại sao". Tại sao chúng ta cần tính năng này? Tại sao nó hữu ích cho khách hàng của chúng tôi?

3. Nếu bạn thực sự cần tính năng này (thường sẽ như vậy), bạn có thể có ý tưởng tốt hơn để làm cho nó đơn giản hơn. Ví dụ: có 10 trường thay vì 20 cho biểu mẫu đăng ký người dùng thì sao? Ngoài ra, một tính năng đơn giản hơn để thực hiện thường sẽ đơn giản hơn cho khách hàng. Đây là một lập luận tốt để bán ý tưởng của bạn cho các bên liên quan của bạn.

Điều đó nói rằng, hãy lưu ý rằng việc giảm độ phức tạp trực tiếp trong các yêu cầu là khó khăn. Tại sao?

Đầu tiên, nhiều bên liên quan dường như đã kết hôn với ý tưởng của họ. Đó là điều bình thường: khi chúng ta có ý tưởng, chúng ta thường nghĩ rằng đó là ý tưởng sẽ thay đổi thế giới. Chúng ta thường có mối quan hệ chặt chẽ với họ, liên kết ý tưởng của chúng ta với chúng ta là ai. Đây là một sai lầm: những ý tưởng này là những thực thể bên ngoài. Chúng không phải là một phần mở rộng tính cách của chúng ta.

Ngoài ra, chúng ta càng làm việc trên các ý tưởng của mình, chúng ta sẽ càng cảm thấy cần phải có được một cái gì đó từ nó. Ngay cả khi ý tưởng là một ý tưởng rất tồi, chúng ta có thể bị mắc kẹt trong một thời gian dài.

Nếu bạn thấy ai đó quá gắn bó với ý tưởng của họ, biết cách tranh luận đúng đắn có thể giúp ích ở đây.

Thứ hai, đôi khi không thể đơn giản hóa một tính năng. Trong trường hợp đó, hãy cố gắng giảm sự phức tạp có nhiều nhất có thể trong khi thực hiện nó. Thêm về điều đó sau.

Tuy nhiên, hãy nhớ rằng: nếu bạn cố gắng **hiểu lĩnh vực kinh doanh mà bạn đang làm việc
**, bạn sẽ tìm thấy các giải pháp đơn giản hơn. Cố gắng nói chuyện với các chuyên gia tên miền (những người có kiến thức về chính doanh nghiệp) càng nhiều càng tốt, luôn làm mới kiến thức của bạn và tránh quá tự tin vào những gì bạn biết.

Khách hàng, ở cuối chuỗi, nên là những người loại bỏ ý tưởng và tính năng. Lắng nghe họ là hoàn toàn quan trọng.

#### Một triển khai tốt là một thực hiện bị xóa

Ít mã hơn thường sẽ làm cho hệ thống của bạn đơn giản hơn. Nhiều thường đồng nghĩa với sự phức tạp.

Thật vậy, việc thay đổi mã của bạn có thể có tác động đến mã xung quanh và tạo ra kết quả không mong muốn. Khi bạn nghĩ về nó, các dòng mã là các khoản nợ kỹ thuật tiềm năng, nguồn lỗi, kích hoạt cho đau đầu, la hét và nước mắt. Không thương xót: loại bỏ mọi đoạn mã vô dụng mà bạn có thể tìm thấy.

Như Antoine de Saint-Exupéry đã nói câu nổi tiếng:

> Sự hoàn hảo đạt được, không phải khi không còn gì để thêm, mà là khi không còn gì để lấy đi.

Nói đủ rồi.

#### Mã chết (dead code)

Bạn có muốn một nghĩa trang đầy đủ các chức năng cũ mục nát trong hệ thống sáng bóng của bạn? Tôi cũng không.

Nhưng trước tiên, mã chết là gì? Tất cả mọi thứ không được sử dụng trong ứng dụng trong thời gian chạy: các biến được khởi tạo nhưng không bao giờ được gọi, phương thức không bao giờ được sử dụng, các lớp không bao giờ được khởi tạo.

Để mã chết của bạn xung quanh sẽ có những hậu quả sau:

* Các nhà phát triển sẽ bối rối khi làm việc trên hệ thống. Các câu hỏi và nghi ngờ sẽ làm tê liệt tâm trí của họ: mục đích của mã là gì? Tôi có nên giữ nó không? Nó có hữu ích không?
* Đồng nghiệp của bạn có thể sẽ duy trì nó, dành thời gian tái cấu trúc nó mà không có lợi ích.
* Mã chết ẩn việc triển khai thực sự. Bạn đã tự hỏi: "tại sao, khi tôi sửa đổi phương pháp này, không có gì xảy ra"? Tôi đã làm. Nó trở nên cũ kỹ, sau một thời gian.

Đơn giản hóa
_codebase_ của chúng ta bằng cách loại bỏ mã chết sẽ đơn giản hóa các mô hình tinh thần của chúng ta. Nó có nghĩa là ít đau đầu hơn và ít năng lượng hơn chảy vào những thây ma vô dụng này.

##### Nguyên tắc YAGNI

Một dạng phức tạp cụ thể (hoặc mã chết), thường được các nhà phát triển bảo vệ dữ dội, là mã nổi tiếng sẽ hữu ích vào một ngày nào đó, trong tương lai, vì vậy chúng ta nên giữ nó.

Đây là nguồn gốc của nguyên tắc YAGNI: nó có nghĩa là "Bạn sẽ không cần nó". Và đúng vậy, 99% thời gian: bạn không bao giờ biết điều gì sẽ xảy ra trong tương lai, và mã cố gắng thực hiện một số bói toán sẽ không bao giờ được sử dụng và lãng quên.

Nếu bạn tình cờ gặp một số mã được viết cho mục đích hiện tại thực tế, hãy xóa nó. Nếu bạn cần triển khai nó trong tương lai, nó sẽ ở trong một bối cảnh khác và mã cũ của bạn sẽ trở nên lỗi thời. Bạn vẫn có thể quay lại triển khai đầu tiên mà bạn đã xóa bằng hệ thống kiểm soát phiên bản của mình (git, có ai không?).

Tôi không đếm có bao nhiêu cuộc tranh luận về chủ đề cụ thể này trong sự nghiệp của mình. Đây là một ví dụ:

* Tôi: Tại sao chức năng đội mũ cho người dùng lại được triển khai trong hệ thống? Tôi không thấy tùy chọn có sẵn trên giao diện người dùng... Nhưng nó ở khắp mọi nơi trong phần phụ trợ!
* Đồng nghiệp (Đức): Nó không được sử dụng cho bây giờ. Nhưng chúng tôi sẽ sử dụng nó một ngày nào đó, chắc chắn.
* Tôi: Nhưng... Nó được thực hiện vào năm 2016, chúng tôi đang ở năm 2019. Nếu không ai cần nó trong ba năm, có lẽ chúng ta sẽ không cần nó trong hai năm nữa. Chúng tôi có thể xóa nó.
* Hắn: Không. Nó quá phức tạp. Chúng tôi sẽ sử dụng nó, chắc chắn.
* Tôi:... Nhưng các nhà phát triển sẽ duy trì điều đó. Tôi đã dành hàng giờ để hiểu cách quản lý nó, vì tôi đang thực hiện một cái gì đó liên quan trực tiếp có thể phá vỡ nó.
* Đồng nghiệp: Chúng tôi chắc chắn sẽ cần điều đó.
* Tôi:... Và những gì về chức năng này đủ điều kiện người dùng là "thuật sĩ"?
* Đồng nghiệp: Ồ. Nó không được sử dụng. Nhưng nó sẽ được sử dụng một ngày nào đó, chắc chắn.
* Tôi:...(Đ.M.)

Không ai biết trước tương lai. Các chức năng có thể bị hủy bỏ hoặc tồn đọng mãi mãi. Thay đổi ngữ cảnh. Trong khi đó, các tính năng vô dụng sẽ được duy trì, đôi khi với những nỗ lực lớn, không có gì.

Tuy nhiên, tôi đã thấy các nhà phát triển dành một khoảng thời gian điên rồ để linh hoạt nhất có thể cho các tính năng tiếp theo giả định không bao giờ đến.

**Chỉ thêm sự phức tạp bạn cần để đáp ứng nhu cầu kinh doanh hiện tại, không hơn.**

Chúng tôi là nhà phát triển, không phải người xoa dịu.

##### Các global state và method

Sử dụng các _global
state_ không phải là một ý tưởng tốt 99% thời gian. Tôi đã viết một bài báo chi tiết về nó ở đây, cũng giải thích sự nguy hiểm của các quốc gia có phạm vi ngày càng tăng.

#### Kiến trúc đơn giản

> Sự phức tạp giết chết. Nó hút cuộc sống của các nhà phát triển, nó làm cho các sản phẩm khó lập kế hoạch, xây dựng và thử nghiệm, nó giới thiệu các thách thức bảo mật và nó gây ra sự thất vọng cho người dùng cuối và quản trị viên.

#### Kiến trúc Lasagna

Lasagna là một món ăn ngon (khi nó được làm tốt), nhưng là một cơn ác mộng trong code-base. Vấn đề của kiến trúc lasagna? Quá nhiều lớp gián tiếp.

Hãy tưởng tượng rằng bạn có một ứng dụng chỉ đơn giản là lấy một số đầu vào từ API, áp dụng một số logic nghiệp vụ để chuyển đổi dữ liệu và lưu trữ nó ở đâu đó. Nghe có vẻ hợp lý, phải không?

Đây là những gì bạn có thể làm. Mỗi điểm là một lớp:

1. API nhận được một số yêu cầu.
2. Trình bao bọc của API.
3. Các nhà máy sản xuất máy chủ tạo ra bộ điều khiển khác nhau và tiêm trình bao bọc API.
4. Một nhóm các nhà máy sản xuất máy chủ trong trường hợp bạn muốn có nhiều trong số chúng (?).
5. Bộ điều khiển nơi các trình bao bọc API được gọi thông qua các cấu trúc giao diện.
6. Một lớp xác thực để xác thực các đầu vào.
7. Một lớp khác để chia sẻ mã giữa mọi bộ điều khiển (trong nỗ lực làm cho mọi thứ càng KHÔ càng tốt).
8. Một lớp mô hình câm như bàn chân của tôi (mô hình thiếu máu).
9. Một lớp liên tục được gọi qua _interface constructs_ từ các bộ điều khiển.
10. Một lớp khác chỉ lấy Id của các thực thể để tìm nạp toàn bộ thực thể.
11. Một lớp thực hiện CRUD thực tế và thực hiện logic nghiệp vụ thực sự. Trong trường hợp chọn, lớp này thực hiện một số yêu cầu SQL, chỉ lấy các ID và chuyển nó đến lớp 10 sẽ tìm nạp thực thể.

Bạn đã không nhận được toàn bộ bức tranh? Đó là điều bình thường.

Bây giờ, hãy tưởng tượng bạn đang cố gắng sửa đổi một số chức năng. Bạn có thể phải:

* Đi qua hầu hết các lớp.
* Cố gắng tìm hiểu xem một lớp sẽ sụp đổ vì sự thay đổi của bạn.
* Cố gắng nhớ mọi thứ hoạt động như thế nào trong bộ não đau đớn của bạn.
* Thực hiện thay đổi của bạn.
* Tự hỏi lớp đang làm gì.
* Xác minh lại mọi thứ.
* Sửa ba bài kiểm tra không thành công trên 4 lớp. Hai ngày làm việc chỉ vì điều đó.
* Gọi cho bạn trai, bạn gái hoặc con mèo yêu thích của bạn, hét lên rằng bạn là một kẻ lừa đảo.
* Mơ về một ngôi nhà nhỏ trên núi, nơi bạn có thể dành thời gian làm một ít phô mai dê thay vì lãng phí nó với một số điều vô nghĩa.

Bạn sẽ cần phải có một mô hình tinh thần trải rộng trên 11 lớp để quản lý chính xác các thay đổi của codebase của bạn. Chúc may mắn!

Bây giờ, bạn có thể nghĩ rằng tôi bị điên. Bạn có thể nghĩ rằng kiểu kiến trúc này được tạo ra bởi bộ não bệnh hoạn của tôi. Bạn có thể nghĩ rằng các codebase như vậy không tồn tại. Nhưng ứng dụng này là có thật: Tôi đã làm việc trên nó đủ để vẫn cảm thấy đau đớn khi tôi nghĩ về nó.

Bạn biết gì không? Cơ sở mã này chứa đầy ý định tốt. Các nhà phát triển chịu trách nhiệm về con quái vật này không muốn cố tình tạo ra một hệ thống phức tạp. Họ muốn giúp đỡ mọi người bằng cách tạo ra một cái gì đó cực kỳ linh hoạt, thanh lịch, KHÔ, phần mềm hoàn hảo.

Như người bạn cũ tốt của tôi, Thánh Bernard Clairvaux đã nói vào một ngày khác:

> Con đường dẫn đến địa ngục được lát bằng những ý định tốt.

Các ví dụ trước sẽ hữu ích để giải thích tại sao những trừu tượng không cần thiết có thể làm cho hệ thống của bạn phức tạp hơn.

#### Trừu tượng và phức tạp

Trừu tượng là gì? Đó là một cách để đối phó với sự phức tạp bằng cách che giấu một số chi tiết vô ích. Tôi đã viết về nó một cách sâu sắc trong một bài báo khác.

Ví dụ, một hàm là một sự trừu tượng: khi bạn gọi một hàm trong mã của mình, bạn sẽ không nhất thiết phải nhận thức được việc triển khai nó và kết quả là độ phức tạp của nó. Thay vào đó, bạn sẽ:

1. Nhìn vào chữ ký của hàm (tên, đầu vào và đầu ra của nó).
2. Quyết định sử dụng nó hoặc để tìm một cái gì đó tốt hơn.

Nghe có vẻ tuyệt vời, phải không? Không quan trọng một hệ thống có bao nhiêu phức tạp nữa! Hãy phát triển một Quả cầu bùn lớn và đặt các lớp trừu tượng đẹp, hoa lên trên, để che giấu tất cả mớ hỗn độn.

Vâng, không thực sự.

Như chúng ta đã thấy, các hàm có thể được coi là một sự trừu tượng. Các đối tượng trong OOP cũng vậy. Ngay cả một số nguyên thủy của ngôn ngữ lập trình yêu thích của bạn, như mảng chẳng hạn, có thể được xem như một sự trừu tượng của một khái niệm tổng quát hơn (ví dụ như một chuỗi toán học).

Để trừu tượng của bạn hoạt động, bạn cần tạo ra các triển khai gắn kết nơi những thứ thuộc về nhau được kết hợp với nhau. Nếu không, sự phức tạp sẽ chỉ nhảy trở lại trên khuôn mặt của bạn như một con đỉa sức khỏe tâm thần. Hãy xem xét ví dụ này:

```php
<?php

$this->createOrderAndMoveStockAndDeliverToUser();
```

Sự trừu tượng này cho chúng ta biết điều gì?

1. Việc triển khai có vẻ như nó liên quan đến nhiều thứ: đơn đặt hàng, cổ phiếu và vận chuyển. Ba khái niệm, tất cả cùng nhau.
2. Phương pháp này chứa các khái niệm không thuộc về nhau. Bạn có thể tạo lệnh mà không cần di chuyển cổ phiếu và bạn có thể di chuyển cổ phiếu mà không cần tạo lệnh.
3. Ngay cả khi sự phức tạp được trừu tượng hóa và ẩn giấu, nó vẫn tồn tại. Nó chỉ ẩn, không bị xóa.
4. Nếu bạn thay đổi việc tạo đơn đặt hàng, chuyển động hàng tồn kho và quy trình giao hàng có thể bị ảnh hưởng, ngay cả khi chúng độc lập.

Sự trừu tượng này che giấu sự phức tạp nhưng cũng không mang lại sự đơn giản. Trong trường hợp đó, _Divide_ và
_Conquer_ nên là phương châm của bạn:

```php
<?php

$this->createOrder();
$this->moveStocks();
$this->deliverToUser();
```

Phương pháp này hiện được tập trung hơn. Logic tự chứa là một cách tốt để đối phó với sự phức tạp. Nó được gọi là đóng gói, và đó là một trong những nguyên tắc cơ bản nhất mà tất cả chúng ta nên ghi nhớ khi viết mã.

Hãy xem một trong những nguyên tắc cơ bản này.

#### Chi phí của tính đa hình (Polymorphism)

Đa hình là một khái niệm cốt lõi trong lập trình: đó là khả năng của một mô-đun (lớp, gói, v.v.) có các dạng khác nhau. Bạn có thể sử dụng cấu trúc giao diện để làm như vậy, ví dụ:

```php
<?php

namespace App;

interface Checkout
{
    public function addProduct();
}
```

Cấu trúc giao diện là tuyệt vời, phải không? Chúng cho phép bạn hoán đổi một phần hệ thống của mình mà không ảnh hưởng đến mọi thứ xung quanh. Thật không may, tính đa hình cũng có thể mang lại rất nhiều phức tạp. Bạn còn nhớ kiến trúc lasagna mà tôi đã mô tả một số đoạn ở trên không? Nhiều lớp có giao diện vì mục đích linh hoạt.

Bạn muốn lưu trữ các thực thể của mình vào một tệp thay vì cơ sở dữ liệu? Đa hình thông qua các giao diện có thể cho phép bạn làm điều đó. Điều đó thật tuyệt, nhưng mọi thứ, trong thế giới phát triển phép thuật, đều có giá:

* Thật khó để biết triển khai nào thực sự được sử dụng trong thời gian chạy. Gián tiếp có thể mang lại rất nhiều nhầm lẫn.
* Bạn có thể cần cập nhật các cấu trúc giao diện này mỗi khi bạn thêm hoặc sửa đổi việc triển khai. Chúng có thể ngày càng lớn hơn theo giờ, một dấu hiệu rõ ràng cho thấy bạn không nên trừu tượng hóa nó.

Hãy quay trở lại ứng dụng của tôi với 11 lớp: nó có 68 giao diện cho 26759 dòng mã. Điều đó có nghĩa là, trung bình, có một giao diện cho mỗi khối gồm 393 dòng mã. Ai muốn thay đổi việc thực hiện nhiều phần như vậy? Liệu điều đó có bao giờ xảy ra không? Câu trả lời có thể là "không".

Nói chung, hãy tự hỏi: ứng dụng của bạn có cần loại linh hoạt này không?

Đừng hiểu sai ý tôi: giao diện rất hữu ích trong một số trường hợp. Nếu bạn cần, bây giờ, trong hiện tại, để hoán đổi một triển khai hiện có với một triển khai hiện có khác trong thời gian chạy, vui lòng tiếp tục. Nếu bạn nghĩ rằng bạn sẽ cần nó, trong tương lai, để triển khai trong tương lai, hãy chờ đợi để ở đó để làm điều đó.

Bây giờ, bạn có thể đã nghe nói về những điều sau đây, từ Gang of Four nổi tiếng:

> Program to an ‘interface’, not an ‘implementation’
>
> Lập trình cho một 'giao diện', không phải là 'triển khai'.

Điều này nghe có vẻ mâu thuẫn! Chúng ta có nên sử dụng giao diện cho mọi thứ không?

Thuật ngữ "giao diện", trong trường hợp đó, không đề cập đến cấu trúc giao diện bạn có thể tìm thấy trong nhiều ngôn ngữ. Nó có nghĩa là bạn cần phải tách rời các phụ thuộc của bạn nếu bạn cần, sử dụng bất kỳ cấu trúc nào bạn muốn. Một cái bọc đơn giản có thể là đủ.

Hãy nói một chút về câu hỏi phụ thuộc này của cũ.

#### Vấn đề phụ thuộc

Thật an toàn khi nói rằng quá nhiều phụ thuộc trong một hệ thống làm cho nó trở nên phức tạp. Rốt cuộc, theo bản chất của chúng, sự phụ thuộc kết hợp các phần của hệ thống của bạn với nhau: chính định nghĩa về Tội lỗi thứ hai không được tha thứ về sự phức tạp của cái chết.

##### Sự phụ thuộc có cần thiết không?

Khi bạn tạo các phụ thuộc mới giữa các lớp hoặc mô-đun, hãy tự hỏi:

1. Những sự phụ thuộc này có thực sự cần thiết không? Có thể không ghép nối mã của bạn không?
2. Nếu chúng là cần thiết, làm thế nào tôi có thể làm cho các phụ thuộc rõ ràng?

Hãy suy nghĩ về doanh nghiệp bạn đang làm việc: có hợp lý khi tạo ra sự phụ thuộc trong bối cảnh cụ thể mà bạn đang ở không? Có cần thiết phải kết hợp logic `Shipment`  với logic `Order` chẳng hạn? Không hẳn: một đơn đặt hàng có thể tồn tại mà không cần lô hàng, do đó đơn đặt hàng không nên có sự phụ thuộc vào logic lô hàng.

Những câu hỏi này thực sự quan trọng, và chúng có thể tạo ra sự khác biệt rất lớn theo thời gian. Nó có thể ngăn đồng nghiệp của bạn ném đá vào bạn khi bạn đang ăn tại quán ăn tự phục vụ của công ty.

##### Quản lý sự phức tạp phụ thuộc

Có mọi phụ thuộc được nhóm lại ở đâu đó thực sự có thể giúp hiểu được sự phức tạp của hệ thống trong nháy mắt. Nó sẽ giúp bạn có một mô hình tinh thần chính xác về sự phụ thuộc của bạn. Ví dụ, một container tiêm phụ thuộc có thể giúp ích trong vấn đề đó, nhưng nó không phải là giải pháp duy nhất. Ví dụ, khi tôi viết mã bằng Golang, tôi chỉ cần khai báo tất cả các phụ thuộc của mình trong cùng một gói.

Quản lý các phụ thuộc của bạn một cách rõ ràng sẽ làm giảm cơ hội ảnh hưởng đến phần khác của mã khi bạn thực hiện thay đổi. Nó sẽ phục vụ như một hướng dẫn cho tất cả mọi người làm việc trong dự án của bạn.

Do đó, không nên tiêm các phụ thuộc thông qua _setters_ hoặc các
_method_ khác trong các lớp của bạn. Tốt nhất là tiêm chúng vào các
_constructors_: sau đó dễ dàng tìm thấy chúng hơn. Nếu chúng được tiêm và quản lý bằng các
_method_ ngẫu nhiên, làm thế nào bạn có thể tìm thấy chúng trở lại mà không gặp khó khăn? Đây là một cách tốt để giải phóng Demon of Complexity™ trên ứng dụng kém của bạn, trên đồng nghiệp và công ty của bạn.

Hãy lấy một ví dụ rất đơn giản:

```php
<?php

class ProductCollection
{
}

// This is a clear implementation.
// 1. The dependency productCollection is directly visible in the constructor, at the beginning of the class.
// 2. It indicates that the class Order needs a productCollection to be  instantiated.

class Order
{
    /** @var ProductCollection */
    private $productCollection;

    public function construct(ProductCollection $productCollection)
    {
        $this->productCollection = $productCollection;
    }

    // More methods
}

// This is not obvious enough.
// 1. The setter is lost in a bunch of other methods.
// 2. It's confusing: when does the productCollection should be injected? Is it important? In what case?

class ShoppingCart
{
    // Bunch of other methods

    public function setProductCollection(ProductCollection $productCollection)
    {
        $this->productCollection = $productCollection;
    }

    // More methods
}
```

#### Đừng cố gắng vượt qua đồng nghiệp của bạn

Là một món khai vị, hãy để tôi trích dẫn M. A. Jackson, người đã viết (Principles of Program Design) Nguyên tắc thiết kế chương trình:

> Lập trình viên... Thường ẩn náu trong một khuynh hướng dễ hiểu, nhưng tai hại, đối với sự phức tạp và khéo léo trong công việc của họ.

Đó là một mô hình phổ biến mà tôi thấy mọi lúc.

Đôi khi, chúng ta cố gắng thể hiện mình thông minh như thế nào mà không hề nhận ra điều đó. Chúng tôi mang các mẫu thiết kế trong codebase của mình mà không có lý do vững chắc và chúng tôi phát minh ra những cách thông minh để làm những việc mà chỉ Best of the Best, True Developer, The Elite of the Binary, The Code Champion of the Galaxy mới có thể hiểu được.

Như Bjarne Stroustrup đã nói:

> Make Simple Tasks Simple!
> 
> Làm cho các nhiệm vụ đơn giản trở nên đơn giản!

Bạn có thể nhận ra rằng bạn gặp vấn đề này trong công ty của mình khi bạn sẽ thấy kiến trúc CQRS phức tạp, các nhà máy ở khắp mọi nơi, trang trí, hồ bơi, cho một ứng dụng CRUD. Nói tóm lại, độ phức tạp kỹ thuật cao cho các vấn đề đơn giản.

Mục tiêu của một nhà phát triển là giúp một công ty hoạt động trơn tru và làm hài lòng khách hàng của họ, không tạo ra đống phức tạp bằng cách sử dụng mọi mẫu thiết kế mà người ta có thể biết.

Tôi là một nhà phát triển. Tôi biết thật buồn cười khi chơi với các công nghệ mới và đồ chơi khác. Các công ty chắc chắn nên cho phép chúng tôi thử nghiệm, để mang lại các công nghệ và kỹ thuật tốt nhất cho các nhiệm vụ trong tầm tay. Nhưng nếu bạn thấy rằng một công nghệ (hoặc một kỹ thuật) không mang lại bất kỳ giá trị nào cho một công ty, bạn cần phải đẩy lùi sự phức tạp vô dụng này.

Hãy tiếp tục bữa tiệc báo giá của chúng tôi với Rich Hickey:

> Patterns mean “I have run out of language.
> 
> Các mẫu có nghĩa là "Tôi đã hết ngôn ngữ."

Nếu bạn thực sự không có giải pháp nào khác, nếu bạn cần linh hoạt hơn vì các yêu cầu phức tạp, hơn là có, bằng mọi cách, hãy giới thiệu thực tiễn hoặc công nghệ bạn cần. Nhưng trước khi làm như vậy, hãy cố gắng tìm hiểu xem ngôn ngữ lập trình bạn đang sử dụng có thể cung cấp một giải pháp gốc mà không cần đi theo các mẫu thiết kế phức tạp của bạn hay không

Điều đó cũng có nghĩa là bạn chỉ nên giới thiệu loại phức tạp này khi tái cấu trúc. Cố gắng không giới thiệu sự phức tạp khi bạn lần đầu tiên viết một đoạn mã mới.

KISS có nghĩa là: Keep It Simple Stupid. Không, điều này không có nghĩa là bạn ngu ngốc. Bạn rất thông minh và xinh đẹp.

Nó có nghĩa là mã của bạn phải đơn giản một cách ngu ngốc. Nó nên đơn giản như vậy, mọi người nên hiểu những gì hệ thống làm và nắm bắt càng nhanh càng tốt một mô hình tinh thần tốt về nó. Nó nên đơn giản đến mức khi bạn rời khỏi công ty của mình, một nhà phát triển đã có ít kinh nghiệm sẽ có thể tiếp tục kiệt tác của bạn.

Để trở lại với kiến trúc lasagna của tôi với 11 lớp, thiết kế đã được tạo ra ở phía trước, với mục đích duy nhất là siêu linh hoạt. Nó cũng không phải là viết lại hay tái cấu trúc.

Tôi đã không chải toàn bộ sự phức tạp của ứng dụng này. Tác giả cũng đã cố gắng làm theo một số mô hình CQRS với cách tiếp cận mô hình miền thiếu máu. Việc triển khai khả năng người dùng sao chép một người dùng khác mất hai ngày. Nó nên mất một vài giờ, bao gồm các bài kiểm tra.

Theo nguyên tắc thông thường:

* Mã càng gần càng tốt với nhu cầu tức thời của bạn.
* Ở gần vấn đề kinh doanh càng nhiều càng tốt.
* Hãy rõ ràng nhất có thể về mục đích của từng đoạn mã. Đừng che giấu nó đằng sau những khái quát trừu tượng.
* Tính linh hoạt cực cao và bói toán trong tương lai có thể gây ra rất nhiều khoản nợ kỹ thuật.

Đừng cố gắng trở thành người thông minh nhất trong phòng. Cố gắng trở nên đơn giản một cách ngu ngốc nhất có thể.

#### Phát triển từ dưới lên trên
Tôi muốn mô tả một phương pháp phát triển thúc đẩy tôi luôn đơn giản và gần với các yêu cầu nhất có thể, mà không đi sâu vào các giả định phức tạp điên rồ: phát triển từ dưới lên trên.

1. Bắt đầu bằng cách triển khai lớp thấp nhất của ứng dụng của bạn.
2. Chỉ viết mã những gì bạn cần để tính năng của bạn hoạt động.
3. Kiểm tra nó.
4. Cấu trúc lại mã của bạn, nếu cần.
5. Di chuyển một lớp lên.
6. Chỉ viết mã những gì bạn cần để tính năng của bạn hoạt động.
7. Kiểm tra mã mới của bạn nếu cần (nghĩa là nếu lớp này có bất kỳ logic nào, nếu không bạn sẽ chỉ kiểm tra mã trên lớp trên hai lần).
8. Quay lại 4.

Kiểm thử đơn vị có thể buộc bạn phải xem mã của bạn có được tách rời (decoupled) đúng cách hay không. Trên thực tế, rất khó để kiểm tra khi các mô-đun của bạn (lớp, gói và những thứ khác) được kết nối với nhau: bạn sẽ phải _mock_ tất cả chúng, một chỉ số rất tốt và đau đớn rằng bạn nên đơn giản hóa mọi thứ nếu có thể. Nếu bạn không thể, đừng mock chúng: viết các bài kiểm tra tích hợp và bỏ các bài kiểm tra đơn vị của bạn.

Tôi sẽ không đi vào chi tiết về thử nghiệm, chủ đề tự nó xứng đáng có bài viết riêng. Chỉ cần nhớ rằng các bài kiểm tra tự động giúp bạn đơn giản hóa (và tái cấu trúc) codebase của mình. Điều cần thiết là một codebase bao gồm các bài kiểm tra tự động; Chúng nên được coi là một phần của ứng dụng của bạn.

#### Tóm tắt KISS Principe
Bài viết này không có nghĩa là một danh sách đầy đủ mọi thứ có thể mang lại sự phức tạp trong một phần mềm. Tôi muốn chỉ ra sự phức tạp có thể tăng nhanh như thế nào từ nhiều nguồn khác nhau.

Nếu bạn chỉ cần giữ lại một điều, thì đó là: sự phức tạp cần được xem xét ở mọi giai đoạn trong vòng đời của một codebase. Trong quá trình thiết kế, thực hiện, tái cấu trúc, sửa lỗi và cuối cùng là viết lại.

Để tóm tắt những gì chúng ta đã học được cùng nhau:

* Một hệ thống đơn giản không có quá nhiều bộ phận và quan trọng hơn là không có quá nhiều bộ phận phụ thuộc, liên kết với nhau.
* Nếu bạn có thể có một mô hình tinh thần rõ ràng về một phần của codebase mà bạn cần hành động, sự phức tạp được quản lý tốt trong lĩnh vực này của codebase.
* Nếu bạn có thể, hãy cố gắng giảm sự phức tạp của các tính năng mà người quản lý của bạn cố gắng xây dựng, bằng cách đề xuất (gần như) các giải pháp tương đương. Bạn sẽ cần những lập luận tốt, liên quan đến kinh doanh (nói về tiền bạc và thời gian).
* Xóa từng bit mã cho nhu cầu hiện tại của bạn. Không ai biết điều gì sẽ xảy ra trong tương lai.
* Tránh các trạng thái và hành vi có thể thay đổi toàn cầu như bệnh dịch hạch đen.
* Đừng tạo quá nhiều lớp gián tiếp trong ứng dụng của bạn.
* Trừu tượng nên được tạo ra khi bạn cần khái quát hóa hoặc đơn giản hóa một số _knowledge_ ngay bây giờ (không phải trong tương lai).
* Làm rõ nơi quản lý các phần phụ thuộc của ứng dụng của bạn.
* Hãy cẩn thận không ghép nối các mô-đun của bạn (ví dụ như các lớp) nếu bạn có thể tìm thấy một giải pháp kỹ thuật tốt hơn.
* Đừng cố gắng thể hiện bạn biết bao nhiêu trong codebase của mình. Hãy nhớ rằng bất kỳ ai cũng có thể sửa đổi nó; thậm chí là một người mới bắt đầu.

Cuối cùng, "giữ cho nó đơn giản" có nghĩa là gì? Chúng ta có nên ngừng nói về khái niệm chung về "sự đơn giản" (hoặc nguyên tắc KISS) và cố gắng xác định (đặt tên) cho vấn đề cụ thể để tìm ra giải pháp thích nghi?

Lần tới khi bạn bắt gặp mình tư vấn rằng "chúng ta nên làm cho hệ thống đơn giản hơn", thay vào đó bạn có thể nói "lớp A này quá kết hợp với lớp B khác, hãy tìm giải pháp".

Tôi sẽ kết thúc bài viết này với một cảnh báo: "đơn giản" là tốt, "không đầy đủ" thì không. Mục tiêu đầu tiên của bạn là làm cho mã của bạn hoạt động như mong đợi. Một hệ thống đơn giản, đẹp đẽ mà không làm những gì được cho là phải làm là... vô dụng!

## **Nguồn:**

[1]
[kawser2133/SOLID-design-principles](https://github.com/kawser2133/SOLID-design-principles)

[2]
[The DRY Principle: Benefits and Costs with Examples](https://thevaluable.dev/dry-principle-cost-benefit-example/)

[3]
[A Detailed Explanation of The KISS Principle in Software](https://thevaluable.dev/kiss-principle-explained/)