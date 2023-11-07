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

Bạn không muốn bất kỳ điều nào trong số này trong cơ sở mã của mình.

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

## **Nguồn:**

[1]
[kawser2133/SOLID-design-principles](https://github.com/kawser2133/SOLID-design-principles)

[2]
[The DRY Principle: Benefits and Costs with Examples](https://thevaluable.dev/dry-principle-cost-benefit-example/)