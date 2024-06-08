---
# This is the title of the article
title: Giới thiệu unittest trong laravel
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
  - phpunit test
  - Giới thiệu unittest trong laravel
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# Giới thiệu UnitTest trong Laravel

## Unittest

### 1. Giới thiệu UnitTest

* Cùng với việc viết code thì việc đảm bảo để những dòng code viết ra chạy đúng cũng rất quan trọng. Rất may, Laravel đã
  cung cấp cho chúng ta các công cụ để việc testing trở nên rất thuận tiện. Trong Laravel có hai loại test là
  FeatureTest
  và UnitTest, trong bài viết này ta đề cập đến UnitTest thôi nhé.
* UnitTest: Kiểm thử ở mức đơn vị. Đơn vị ở đây là các đơn vị mã nguồn: class, method,…Trong Laravel là các class Model,
  Repository,…và các method của những class này.
* Mục tiêu của UnitTest là kiểm tra tính đúng đắn trong xử lý của những đơn vị mã nguồn này.
* Để thực hiện UnitTest chúng ta dùng PHPUnit. Trong Laravel đã tích hợp sẵn PHPUnit nên việc UnitTest trong Laravel
  tương đối dễ dàng.

### 2. Cấu trúc thư mục test trong Laravel

![Cấu trúc thư mục test trong Laravel](/assets/images/gioi-thieu-unittest-trong-laravel-01.webp)

* Danh sách các thư mục:
    * tests: chứa code dành cho việc test
    * tests/Feature: chứa các file dành cho FeatureTest
    * tests/Unit: chứa các file dành cho UnitTest
    * TestCase: là file bootstrap thiết lập môi trường Laravel cho các tests
    * phpunit.xml: là file cấu hình cho PHPUnit
* Các code dành cho UnitTest nằm trong thư mục tests/Unit. Cấu trúc của thư mục tests/Unit nên giống với cấu trúc bên
  trong thư mục app.
* Tên của class test sẽ là tên class cần test và thêm hậu tố Test.

### 3. Tạo mới và chạy UnitTest

Để tạo mới một class UnitTest ta chạy lệnh sau:

```shell
php artisan make:test
```

```shell
// Create UnitTest for Model User in app/Models/User
php artisan make:test Models/UserTest --unit
```

Câu lệnh trên sẽ tạo một file test có đường dẫn `tests/Unit/Models/UserTest.php`

#### Cấu hình trong file phpunit.xml:

* Ở đây chúng ta có thể chỉ định test case nào được thực hiện cũng như gom chúng lại theo mong muốn
  ![Cấu hình trong file phpunit](/assets/images/gioi-thieu-unittest-trong-laravel-02.webp)
* thẻ `<testsuites>` : tất cả nhóm cây thư mục được khai báo ở đây
* thẻ `<testsuite>` : Nơi khai báo cho từng group riêng biệt
* thuộc tính name trong thẻ `<testsuite>` dùng để đặt tên cho nhóm
* thẻ `<directiory>`: dùng để khai báo 1 thư mục các test case
* thẻ `<file>`: dùng để khai báo thêm 1 file cho 1 cây thư mục test case****

#### Chạy unittest

Để chạy unit test, ta thực hiện câu lệnh sau:

```shell
// Run all test
vendor/bin/phpunit
// Run speical test
vendor/bin/phpunit tests/Unit/Models/UserTest.php
```

### 4. Assertions#

* Assertions là những method rất quan trọng trong quá trình test, assertions giúp ta khẳng định output của các test có
  đúng với kết quả mong muốn không.
* Một số `assertion` thường dùng như:
    * assertTrue() / assertFalse() : Khẳng định true hoặc false
    * assertEquals() / assertNotEquals() : Khẳng định 2 giá trị có bằng/không bằng nhau
    * assertInstanceOf() / assertNotInstanceOf(): Khẳng định đối tượng có phải/ không phải đối tượng của một class
    * assertNull()
    * assertContains()
    * assertCount()
    * assertEmpty()
* Còn rất nhiều các hàm assertions, các bạn có thể tìm hiểu đầy đủ ở
  đây: https://phpunit.readthedocs.io/en/9.5/assertions.html

#### assertTrue() và assertFalse()

Hai hàm này ý muốn cho phép ta mong muốn sau một quá trình chạy test xong kết quả trả về là true hay false

```php
<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_has_user()
    {
        $users = new User(['Lena', 'Misa', 'Leona']);
        $this->assertTrue($users->has('Lena'));
        $this->assertFalse($user->has('Minh Minh'));
    }
}
```

kết quả

```shell
OK (2 tests, 4 assertions)
```

#### assertEquals() và assertNull()

`assertEquals()` giúp chúng ta so sánh giá trị thực sau một chuối xử lý với giá trị mà chúng ta mong muốn.

`assertEmpty()` giúp chúng ta kiểm tra xem giá trị mong muốn là null

```php
namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_has_user()
    {
        $users = new User(['Lena', 'Misa', 'Leona']);
        $this->assertTrue($users->has('Lena'));
        $this->assertFalse($user->has('Minh Minh'));
    }
    
    public function test_equal()
    {
        $expected = "Hoang"; 
        $actual = "Min Hoang"; 
        
        $this->assertEquals( 
            $expected, 
            $actual, 
            "actual value is not equals to expected"
        ); 
    }
}
```

kết quả

```shell
PHPUnit 8.2.5 by Sebastian Bergmann and contributors.

F                                                                   1 / 1 (100%)

Time: 64 ms, Memory: 10.00 MB

There was 1 failure:

1) UserTest::test_equal
actual value is not equals to expected
Failed asserting that two strings are equal.
--- Expected
+++ Actual
@@ @@
-'Hoang'
+'Min Hoang'

FAILURES!
Tests: 1, Assertions: 1, Failures: 1.
```

#### assertContains() , assertCount() và assertEmpty()

Chúng ta sẽ cùng đi tìm hiểu với 3 hàm assertion làm việc với array nhé.

* `assertContains()`: hàm này mục đích là giá trị mong đợi có tồn tại hay mảng được cung cấp có chưa giá trị mà chúng ta
  mong đợi hay không
* `assertCount()`: hàm này mong đợi số lượng items trong một mảng kết quả trả về có match với số lượng mà chúng ta mong
  muốn hay không
* `assertEmpty()`: hàm này mong đợi mảng kết quả trả về rỗng.

```php
namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    
    public function test_contain_princess()
    {
         $princesses = ['Linda', 'Lisa', 'Celindar'];
         
         $this->assertCount(3, $princesses);
         $this->assertContains('Linda', $princesses);
         $this->assertEmpty($princesses);
    }
}
```

### 5. Một số ví dụ về UnitTest

* Unit test cho Model

Ví dụ, ta có Model Post như dưới đây:

```php
<?php

namespace AppModels;

use IlluminateDatabaseEloquentModel;
use AppModelsUser;

class Post extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content', 'user_id',
    ];

    /**
     * @return IlluminateDatabaseEloquentRelationsBelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

Class test của chúng ta như sau, ở đây ta thực hiện test relationship giữa Post và User:

```php
<?php

namespace TestsUnitModels;

use AppModelsPost;
use AppModelsUser;
use IlluminateDatabaseEloquentRelationsBelongsTo;
use TestsTestCase;
use IlluminateFoundationTestingRefreshDatabase;

class PostTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_post_be_longs_to_user()
    {
        // Need to create UserFactory and PostFactory before test
        // Use factory to create user and post for test
        $user = factory(User::class)->create();
        $post = factory(Post::class)->create(['user_id' => $user->id]);

        // Check foreign key
        $this->assertEquals('user_id', $post->user()->getForeignKeyName());
        // Check instance of beLongsTo
        $this->assertInstanceOf(BelongsTo::class, $post->user());
        // Check instance of User
        $this->assertInstanceOf(User::class, $post->user);
    }
}
```

* Unit test cho Repository

Ví dụ, ta có một PostRepository với method create như dưới đây:

```php
<?php

namespace AppRepositories;

use AppModelsPost;

class PostRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = app()->make(Post::class);
    }

    public function create($data)
    {
        return $this->model->create($data);
    }
}
```

Class test của chúng ta như sau:

```php
<?php

namespace TestsUnitRepositories;

use AppModelsPost;
use AppModelsUser;
use AppRepositoriesPostRepository;
use TestsTestCase;
use IlluminateFoundationTestingWithFaker;
use IlluminateFoundationTestingRefreshDatabase;
use FakerFactory as Faker;

class PostRepositoryTest extends TestCase
{
    protected $postRepository;

    public function setUp() : void
    {
        parent::setUp();
        $this->postRepository = new PostRepository();
    }

    public function test_create_post()
    {
        // create data post
        $faker = Faker::create();
        $postData = [
            'title' => $faker->sentence,
            'content' => $faker->sentence,
            'user_id' => factory(User::class)->create()->id,
        ];

        $post = $this->postRepository->create($postData);
        // Check post created instance of Post
        $this->assertInstanceOf(Post::class, $post);
        // Check data post exists in the database
        $this->assertDatabaseHas('posts', $postData);
    }
}
```

### 6. Reset database sau khi test

* Để kết quả những lần test không ảnh hưởng đến những lần test tiếp theo, Laravel đã cung cấp cách thức để reset lại
  database sau mỗi lần test, bạn chỉ cần sử dụng trait IlluminateFoundationTestingRefreshDatabase trong class test.
* Do databse được reset lại kể cả dữ liệu trước khi chạy test nên hãy cẩn thận khi sử dụng reset database, tốt nhất là
  nên tạo một database riêng cho việc test.

```php
<?php

namespace TestsFeature;

use IlluminateFoundationTestingRefreshDatabase;
use IlluminateFoundationTestingWithoutMiddleware;
use TestsTestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    public function test_basic_example()
    {
        $response = $this->get('/');
        // ...
    }
}
```

### 7. Những thành phần cần viết UnitTest

* **Controllers**: với events handling được disable. Toàn bộ các thành phần bên ngoài PHẢI được mock.
* **Requests** (nếu có): Kiểm tra validation
* **Models**: getters, setters, và những chức năng khác
* **Transformers / Presenters** (nếu có): Kiểm tra kết quả output cho những dữ liệu khác nhau
* **Repositories** (nếu có): Kiểm tra từng hàm có tạo ra đúng SQL queries hay không, hay có các lời gọi hàm, đến mocked
  query builder, đúng hay không
* **Event listeners**
* **Queue jobs**
* **Auth policies**
* Và các Class chuyên biệt khác trong project.

### 8. Setup và Teardown

Trường hợp đặt ra là trong class test của chúng ta có rất nhiều biến global và chúng ta phải gán hoặc hủy giá trị này
sau mỗi lần chạy test, nếu mỗi testcase đều có những câu lệnh gán và hủy giống nhau thì không ổn. PHPUnit cung cấp các
phương thức để giải quyết vấn đề:

* **setUp()**: Chạy trước mỗi method test. Sử dụng khi muốn khởi tạo biến, mở kết nối file,... chuẩn bị môi trường để
  test
* **tearDown()**: Chạy sau mỗi method test. Sử dụng để hủy các biến, kết nối,...
* **setUpBeforeClass()**: Chạy khi bắt đầu class test
* **tearDownAfterClass()**: Chạy sau khi kết thúc class test

Việc test sẽ lần lượt chạy như sau:

1. Method: OddEvenTest::setUp
2. Method: OddEvenTest::testOdd
3. Method: OddEvenTest::tearDown
4. Method: OddEvenTest::setUp
5. Method: OddEvenTest::testEven
6. Method: OddEvenTest::tearDown

### 9. Reflection

Một số test case phải truy cập vào private/protected method hoặc property của đối tượng để thực hiện assertion.

Ta bổ sung phần code sau đây vào class test:

```php
/**
 * Get private/protected property value
 * $this->assertEquals('views/home', $this->getObjectProperty($view, 'file_name'));
 */
public function getObjectProperty($object, $propertyName) {
    $reflector = new \ReflectionClass($object);
    $property = $reflector->getProperty($propertyName);
    $property->setAccessible(true);

    return $property->getValue($object);
}

/**
 * Call protected/private method of a class.
 * $this->invokeObjectMethod($view, 'getData');
 */
public function invokeObjectMethod($object, $methodName, $parameters = [])
{
    $reflection = new \ReflectionClass($object);
    $method = $reflection->getMethod($methodName);
    $method->setAccessible(true);

    return $method->invokeArgs($object, $parameters);
}
```

## Code coverage

### 1. Code coverage là gì?

Code coverage là một thước đo mô tả mức độ mã nguồn của chương trình đã được kiểm tra. Đây là một hình thức kiểm
thử `white-box` tìm thấy các khu vực của chương trình không được thực hiện bởi một tập hợp các trường hợp kiểm thử. Nó
cũng tạo ra
một số trường hợp kiểm thử để tăng phạm vi bao phủ và xác định thước đo định lượng về phạm vi mã.

Trong hầu hết các trường hợp, hệ thống Code coverage thu thập thông tin về chương trình đang chạy. Nó cũng kết hợp điều
đó
với thông tin mã nguồn để tạo báo cáo về phạm vi mã của bộ kiểm thử.

### 2. Tại sao nên sử dụng Code Coverage Testing?

Dưới đây là một số lý do chính để sử dụng **Code Coverage**:

* Nó giúp bạn đo lường hiệu quả của việc thực hiện kiểm thử
* Nó cung cấp một phép đo định lượng.
* Nó xác định mức độ mà mã nguồn đã được kiểm tra.

### 3. Phương pháp Code Coverage

Sau đây là các phương pháp bao phủ mã chính

* Statement Coverage
* Decision Coverage
* Branch Coverage
* Coverage Chuyển đổi
* Coverage FSM

### 4. Statement Coverage

**Statement Coverage** là một kỹ thuật kiểm tra `white-box` trong đó tất cả các câu lệnh thực thi trong mã nguồn được
thực
thi ít nhất một lần. Nó được sử dụng để tính toán số lượng câu lệnh trong mã nguồn đã được thực thi. Mục đích chính của
Statement Coverage là bao gồm tất cả các đường dẫn, dòng và câu lệnh có thể có trong mã nguồn.

Phạm vi câu lệnh được sử dụng để rút ra kịch bản dựa trên cấu trúc của mã được kiểm tra.
![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-04.webp)

Trong **White Box Testing**, tester đang tập trung vào cách phần mềm hoạt động. Nói cách khác, tester sẽ tập trung vào
hoạt động nội bộ của mã nguồn liên quan đến biểu đồ dòng chảy điều khiển hoặc biểu đồ dòng chảy.

Nói chung trong bất kỳ phần mềm nào, nếu chúng ta nhìn vào mã nguồn, sẽ có rất nhiều yếu tố như toán tử, chức năng, vòng
lặp, trình xử lý đặc biệt, v.v. Dựa trên đầu vào của chương trình, một số câu lệnh mã có thể không được thực thi. Mục
tiêu của phạm vi Tuyên bố là bao gồm tất cả các đường dẫn, dòng và câu lệnh có thể có trong mã.

Hãy hiểu điều này với một ví dụ, làm thế nào để tính toán phạm vi bảo hiểm báo cáo.

Kịch bản tính toán Statement Coverage cho mã nguồn nhất định. Ở đây chúng tôi đang thực hiện hai kịch bản khác nhau để
kiểm tra tỷ lệ phần trăm phạm vi báo cáo cho mỗi kịch bản.

```C
Prints (int a, int b) {                       ------------  Printsum is a function 
    int result = a+ b; 
    If (result> 0)
    	Print ("Positive", result)
    Else
    	Print ("Negative", result)
    }                                         -----------   End of the source code 
```

#### Scenario 1:

Nếu A = 3, B = 9

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-05.webp)

Các câu lệnh được đánh dấu bằng màu vàng là những câu lệnh được thực hiện theo kịch bản

Số câu lệnh được thực hiện = 5, Tổng số câu lệnh = 7

Phạm vi sao kê: 5/7 = 71%

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-06.webp)

Tương tự như vậy, chúng ta sẽ thấy kịch bản 2,

#### Scenario 2:

Nếu A = -3, B = -9

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-07.webp)

Các câu lệnh được đánh dấu bằng màu vàng là những câu lệnh được thực hiện theo kịch bản.

Số câu lệnh được thực hiện = 6

Tổng số câu lệnh = 7

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-08.webp)

Phạm vi sao kê: 6/7 = 85%

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-09.webp)

Nhưng nhìn chung nếu bạn thấy, tất cả các tuyên bố đang được bao phủ bởi cả hai kịch bản. Vì vậy, chúng tôi có thể kết
luận rằng phạm vi bảo hiểm tuyên bố tổng thể là 100%.

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-10.webp)

#### Statement Coverage bao gồm những gì?

* Các câu lệnh không sử dụng
* Mã chết
* Chi nhánh không sử dụng
* Thiếu câu lệnh

### 5. Decision Coverage Testing

**Decision Coverage** là một kỹ thuật kiểm tra **white box** báo cáo kết quả đúng hoặc sai của mỗi biểu thức boolean của
mã nguồn. Mục tiêu của kiểm thử **Decision Coverage** là bao quát và xác nhận tất cả các mã nguồn có thể truy cập bằng
cách kiểm tra và đảm bảo rằng mỗi nhánh của mọi điểm quyết định có thể được thực thi ít nhất một lần.

Trong coverage này, các biểu thức đôi khi có thể trở nên phức tạp. Do đó, rất khó để đạt được độ phủ 100%. Đó là lý do
tại sao có nhiều phương pháp khác nhau để báo cáo số liệu này. Tất cả các phương pháp này tập trung vào việc bao gồm các
kết hợp quan trọng nhất. Nó rất giống với phạm vi bảo hiểm quyết định, nhưng nó cung cấp độ nhạy tốt hơn để kiểm
soát dòng chảy.

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-11.webp)

#### Ví dụ về phạm vi quyết định

Hãy xem xét mã sau-

```C
Demo(int a) {                       
     If (a> 5)
    	a=a*3
     Print (a)
    }
```

##### Tình huống 1:

Giá trị của a là 2

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-12.webp)

Mã được tô sáng màu vàng sẽ được thực thi. Ở đây kết quả "Không" của quyết định Nếu (a>5) được kiểm tra.

Phạm vi quyết định = 50%

##### Tình huống 2:

Giá trị của a là 6

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-13.webp)

Mã được tô sáng màu vàng sẽ được thực thi. Ở đây kết quả "Có" của quyết định Nếu (a>5) được kiểm tra.

Phạm vi quyết định = 50%

| Test Case | Value of A | Output | Decision Coverage |
|-----------|------------|--------|-------------------|
| 1         | 2          | 2      | 50%               |
| 1         | 6          | 18     | 50%               |

### 6. Branch Coverage Testing

**Branch Coverage** là một phương pháp kiểm tra `white-box` trong đó mọi kết quả từ một mô-đun mã (câu lệnh hoặc vòng
lặp)
đều được kiểm tra. Mục đích của **branch coverage** là đảm bảo rằng mỗi điều kiện quyết định từ mỗi chi nhánh được thực
hiện ít nhất một lần. Nó giúp đo lường các phân số của các phân đoạn mã độc lập và tìm ra các phần không có nhánh.

Ví dụ: nếu kết quả là nhị phân, bạn cần kiểm tra cả kết quả Đúng và Sai.

Công thức tính Branch Coverage:
![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-14.webp)

#### Ví dụ về Branch Coverage

Để tìm hiểu **branch coverage**, hãy xem xét cùng một ví dụ được sử dụng trước đó

Hãy xem xét mã sau-

```C
Demo(int a) {                       
     If (a> 5)
    	a=a*3
     Print (a)
    }      
```

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-15.webp)

**Branch coverage** cũng sẽ xem xét **unconditional branch**

| Test Case | Value of A | Output | Decision Coverage | Branch Coverage |
|-----------|------------|--------|-------------------|-----------------|
| 1         | 2          | 2      | 50%               | **33%**         |
| 1         | 6          | 18     | 50%               | **66%**         |

**Branch coverage** cung cấp các ưu điểm sau:

* Cho phép bạn xác thực tất cả các nhánh trong mã
* Giúp bạn đảm bảo rằng không có phân nhánh dẫn đến bất kỳ sự bất thường nào trong hoạt động của chương trình
* Phương pháp **branch coverage** loại bỏ các vấn đề xảy ra do kiểm tra **statement coverage**
* Cho phép bạn tìm những khu vực không được kiểm tra bằng các phương pháp thử nghiệm khác
* Nó cho phép bạn tìm một thước đo định lượng về phạm vi mã
* **Branch coverage** bỏ qua các nhánh bên trong biểu thức Boolean

### 7. Condition Coverage Testing

**Condition Coverage** hoặc **expression coverage** là một phương pháp kiểm thử được sử dụng để kiểm tra và đánh giá các
biến hoặc biểu thức phụ trong câu lệnh điều kiện. Mục tiêu của **condition coverage** là kiểm tra kết quả cá nhân cho
từng điều kiện logic. Bảo hiểm điều kiện cung cấp độ nhạy tốt hơn với luồng điều khiển so với **decision coverage**.
Trong coverage này, các biểu thức với toán hạng logic chỉ được xem xét.

Ví dụ: nếu một biểu thức có các phép toán Boolean như AND, OR, XOR, biểu thị tổng khả năng.

Bảo hiểm điều kiện không đảm bảo về bảo hiểm quyết định đầy đủ.

**Công thức tính Bảo hiểm điều kiện:**

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-16.webp)

**Example:**

![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-17.webp)

**Đối với biểu thức trên, chúng ta có 4 kết hợp có thể**

* TT
* FF
* TF
* FT

**Hãy xem xét đầu vào sau**

| X=3 | 	(x<y) | 	TRUE | Condition Coverage is ¼ = 25% |   
|-----|--------|-------|-------------------------------|
| Y=4 |        |       |                               |
| A=3 | (a>b)  | FALSE |                               |
| A=3 |        |       |                               |

### 8. Finite State Machine Coverage

**Finite State Machine Coverage** chắc chắn là loại phương pháp **code coverage** phức tạp nhất. Điều này là do nó
hoạt động trên hành vi của thiết kế. Trong phương pháp bảo hiểm này, bạn cần tìm xem có bao nhiêu trạng thái cụ thể theo
thời gian được truy cập, quá cảnh. Nó cũng kiểm tra có bao nhiêu chuỗi được bao gồm trong một máy trạng thái hữu hạn.

### 9. Chọn loại **code coverage** nào

Đây chắc chắn là câu trả lời khó đưa ra nhất. Để chọn một phương pháp bảo hiểm, người kiểm tra cần kiểm tra xem

* Mã được kiểm tra có một hoặc nhiều lỗi chưa được phát hiện
* Chi phí của hình phạt tiềm năng
* Chi phí mất danh tiếng
* chi phí bán hàng bị mất, v.v.
  Xác suất lỗi sẽ gây ra thất bại sản xuất tốn kém càng cao, mức độ **coverage** bạn cần chọn càng nghiêm trọng.

### 10. Code Coverage vs. Functional Coverage

Code coverage tells you how well the source code has been exercised by your test bench. Functional coverage measures how
well the functionality of the design has been covered by your test bench.
Never use a design specification Use design specification
Done by developers Done by Testers

| Code Coverage                                                                                     | 	Functional Coverage                                                                                            | 
|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Code coverage** cho bạn biết mã nguồn đã được thực hiện tốt như thế nào bởi test bench của bạn. | **Functional coverage** đo lường chức năng của thiết kế đã được bao phủ bởi test bench của bạn tốt như thế nào. |
| Không bao giờ sử dụng thông số kỹ thuật thiết kế                                                  | Sử dụng đặc điểm kỹ thuật thiết kế                                                                              |
| Thực hiện bởi các nhà phát triển                                                                  | Được thực hiện bởi người thử nghiệm                                                                             |

### 11. Công cụ Code Coverage

Dưới đây là danh sách các Công cụ bảo hiểm mã quan trọng:

| Tên công cụ        | 	Sự miêu tả                                                                                                                                                                                                |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cobertura          | Nó là một công cụ **code coverage** mã nguồn mở. Nó đo lường phạm vi kiểm thử bằng cách thiết bị một cơ sở mã và phân tích dòng mã nào đang thực thi và dòng nào không được thực thi khi bộ kiểm thử chạy. |
| Cỏ ba lá           | Clover cũng giảm thời gian testing bằng cách chỉ chạy các bài kiểm tra bao gồm mã ứng dụng đã được sửa đổi kể từ bản dựng trước.                                                                           |
| Đối tác phát triển | DevPartner cho phép các nhà phát triển phân tích mã Java cho Chất lượng và độ phức tạp của mã.                                                                                                             |
| Emma               | EMMA hỗ trợ phạm vi bao phủ class, method, dòng và khối cơ sở, tệp nguồn tổng hợp, class và method levels.                                                                                                 |
| Kalistick          | Kalistick là một ứng dụng của bên thứ ba phân tích các mã với các quan điểm khác nhau.                                                                                                                     |
| CoView và CoAnt    | Coding Software là một công cụ code coverage cho các metrics, tạo đối tượng giả, khả năng kiểm tra mã, phạm vi đường dẫn &nhánh, v.v.                                                                      |
| Bullseye cho C ++  | BulseyeCoverage là một công cụ code coverage cho C ++ và C.                                                                                                                                                |
| Sonar              | Sonar là một công cụ code coverage mở giúp bạn quản lý chất lượng mã.                                                                                                                                      |

### 12. Ưu điểm và nhược điểm của việc sử dụng Code Coverage

| Ưu điểm của Code Coverage                                                                                           | Nhược điểm của Code Coverage                                                                                                                                                      |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hữu ích để đánh giá một thước đo định lượng về phạm vi mã                                                           | Ngay cả khi bất kỳ tính năng cụ thể nào không được triển khai trong thiết kế, độ bao phủ mã vẫn báo cáo coverage 100%.                                                            |
| Nó cho phép bạn tạo thêm các trường hợp kiểm thử để tăng phạm vi converage                                          | Không thể xác định xem chúng tôi đã kiểm tra tất cả các giá trị có thể có của một tính năng với sự trợ giúp của phạm vi mã hay không                                              |
| Nó cho phép bạn tìm các khu vực của một chương trình không được thực hiện bởi một tập hợp các trường hợp thử nghiệm | Code coverage cũng không cho biết bạn đã bao quát logic của mình bao nhiêu và tốt như thế nào                                                                                     |
|                                                                                                                     | Trong trường hợp khi chức năng được chỉ định chưa được triển khai hoặc không được bao gồm trong đặc tả kỹ thuật, thì các kỹ thuật dựa trên cấu trúc không thể tìm thấy vấn đề đó. |

### 13. Sử dụng PHPunit và Xdebug [4]

Cấu hình phpunit.xml

1. Thông tin **Code coverage** trong Thẻ `<coverage>`
   ![Statement Coverage](/assets/images/gioi-thieu-unittest-trong-laravel-18.png)
2. Chạy phpunit

```shell
php artisan test --coverage
```

```shell
phpunit --coverage-html <output-dir>
```

## Nguồn:

[1] [viblo.asia](https://viblo.asia/p/gioi-thieu-ve-unit-testing-trong-laravel-LzD5dredZjY)
[2] [viblo.asia](https://viblo.asia/p/co-ban-ve-unittest-trong-laravel-gDVK29Mj5Lj)
[3] Code coverage [guru99.com](https://www.guru99.com/code-coverage.html)
[4] Slice P.V.M.H