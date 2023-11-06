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

**## Nguồn:**

[1]
[kawser2133/SOLID-design-principles](https://github.com/kawser2133/SOLID-design-principles)