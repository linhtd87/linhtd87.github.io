---
# This is the title of the article
title: Những thực hành tốt của Laravel
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
  - Những thực hành tốt của Laravel
  - Laravel best practices
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# Những thực hành tốt của Laravel

## Những thực hành tốt của Laravel (laravel best practices)

### Nguyên tắc trách nhiệm duy nhất

Một lớp học chỉ nên có một trách nhiệm.

Tồi:

```php
public function update(Request $request): string
{
    $validated = $request->validate([
        'title' => 'required|max:255',
        'events' => 'required|array:date,type'
    ]);

    foreach ($request->events as $event) {
        $date = $this->carbon->parse($event['date'])->toString();

        $this->logger->log('Update event ' . $date . ' :: ' . $);
    }

    $this->event->updateGeneralEvent($request->validated());

    return back();
}
```

Tốt:

* validate được chuyển vô trong class UpdateRequest
* log được chuyển vô trong service LogService

```php
public function update(UpdateRequest $request): string
{
    $this->logService->logEvents($request->events);

    $this->event->updateGeneralEvent($request->validated());

    return back();
}
```

### Method chỉ nên làm một việc

Một hàm chỉ nên làm một việc và làm tốt.

Tồi:

```php
Phương pháp chỉ nên làm một việc
Một hàm chỉ nên làm một việc và làm tốt.

Tồi:
```

Tốt:

```php
public function getFullNameAttribute(): string
{
    return $this->isVerifiedClient() ? $this->getFullNameLong() : $this->getFullNameShort();
}

public function isVerifiedClient(): bool
{
    return auth()->user() && auth()->user()->hasRole('client') && auth()->user()->isVerified();
}

public function getFullNameLong(): string
{
    return 'Mr. ' . $this->first_name . ' ' . $this->middle_name . ' ' . $this->last_name;
}

public function getFullNameShort(): string
{
    return $this->first_name[0] . '. ' . $this->last_name;
}
```

### Model béo, Controller gầy

Đặt tất cả logic liên quan đến DB vào các mô hình Eloquent.

Tồi:

```php
public function index()
{
    $clients = Client::verified()
        ->with(['orders' => function ($q) {
            $q->where('created_at', '>', Carbon::today()->subWeek());
        }])
        ->get();

    return view('index', ['clients' => $clients]);
}
```

Tốt:

* xử lý get danh sách khách hàng với danh sách đơn hàng, được xử lý trong model

```php
public function index()
{
    return view('index', ['clients' => $this->client->getWithNewOrders()]);
}

class Client extends Model
{
    public function getWithNewOrders(): Collection
    {
        return $this->verified()
            ->with(['orders' => function ($q) {
                $q->where('created_at', '>', Carbon::today()->subWeek());
            }])
            ->get();
    }
}
```

### Validation

Di chuyển validation từ controller sang Request class.

Tồi:

```php
public function store(Request $request)
{
    $request->validate([
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
        'publish_at' => 'nullable|date',
    ]);

    ...
}
```

Tốt:

* phần validation được tách riêng ra file PostRequest

```php
public function store(PostRequest $request)
{
    ...
}

class PostRequest extends Request
{
    public function rules(): array
    {
        return [
            'title' => 'required|unique:posts|max:255',
            'body' => 'required',
            'publish_at' => 'nullable|date',
        ];
    }
}
```

### Logic nghiệp vụ phải ở trong lớp dịch vụ

Một controller chỉ phải có một trách nhiệm, vì vậy hãy chuyển logic nghiệp vụ từ controller sang service class.

Tồi:

```php
public function store(Request $request)
{
    if ($request->hasFile('image')) {
        $request->file('image')->move(public_path('images') . 'temp');
    }
    
    ...
}
```

Tốt:

* Xử lý lưu file tải lên được viết trong `ArticleService`

```php
public function store(Request $request)
{
    $this->articleService->handleUploadedImage($request->file('image'));

    ...
}

class ArticleService
{
    public function handleUploadedImage($image): void
    {
        if (!is_null($image)) {
            $image->move(public_path('images') . 'temp');
        }
    }
}
```

### Đừng lặp lại chính mình (DRY)

Sử dụng lại mã khi bạn có thể. SRP đang giúp bạn tránh trùng lặp. Ngoài ra, sử dụng lại các mẫu `Blade`, sử dụng `scope`
`Eloquent`, v.v.

Tồi:

```php
public function getActive()
{
    return $this->where('verified', 1)->whereNotNull('deleted_at')->get();
}

public function getArticles()
{
    return $this->whereHas('user', function ($q) {
            $q->where('verified', 1)->whereNotNull('deleted_at');
        })->get();
}
```

Tốt:

* tạo `scopeActive`
* method `getActice` và `getArticles` sử dụng scope `active`

```php
public function scopeActive($q)
{
    return $q->where('verified', true)->whereNotNull('deleted_at');
}

public function getActive(): Collection
{
    return $this->active()->get();
}

public function getArticles(): Collection
{
    return $this->whereHas('user', function ($q) {
            $q->active();
        })->get();
}
```

### Hãy sử dụng Eloquent hơn là Query Builder và các truy vấn SQL thô. Ưu tiên bộ sưu tập hơn mảng

Eloquent cho phép bạn viết mã có thể đọc và duy trì. Ngoài ra, Eloquent có các công cụ tích hợp tuyệt vời
như `soft deletes`,
`event`, `scope`, v.v.

Tồi:

```php
SELECT *
FROM `articles`
WHERE EXISTS (SELECT *
              FROM `users`
              WHERE `articles`.`user_id` = `users`.`id`
              AND EXISTS (SELECT *
                          FROM `profiles`
                          WHERE `profiles`.`user_id` = `users`.`id`) 
              AND `users`.`deleted_at` IS NULL)
AND `verified` = '1'
AND `active` = '1'
ORDER BY `created_at` DESC
```

Tốt:

```php
Article::has('user.profile')->verified()->latest()->get();
```

### Mass assignment

Tồi:

```php
$article = new Article;
$article->title = $request->title;
$article->content = $request->content;
$article->verified = $request->verified;

// Add category to article
$article->category_id = $category->id;
$article->save();
```

Tốt:

```php
$category->article()->create($request->validated());
```

### Không thực hiện các truy vấn trong các mẫu Blade và sử dụng tải háo hức (vấn đề N + 1)

Xấu (đối với 100 người dùng, 101 truy vấn DB sẽ được thực thi):

```php
@foreach (User::all() as $user)
{{ $user->profile->name }}
@endforeach
```

Tốt (đối với 100 người dùng, 2 truy vấn DB sẽ được thực thi):

```php
$users = User::with('profile')->get();

@foreach ($users as $user)
{{ $user->profile->name }}
@endforeach
```

### Sử dụng chunk (phân đoạn dữ liệu) cho các tác vụ nặng về dữ liệu

Tồi:

```php
$users = $this->get();

foreach ($users as $user) {
...
}
```

Tốt:

```php
$this->chunk(500, function ($users) {
foreach ($users as $user) {
...
}
});
```

### Ưu tiên _descriptive method_ hơn tên biến và nhận xét

Tồi:

```php
// Determine if there are any joins
if (count((array) $builder->getQuery()->joins) > 0)
```

Tốt:

```php
if ($this->hasJoins())
```

### Không đặt JS và CSS trong các mẫu Blade và không đặt bất kỳ HTML nào trong các lớp PHP

Tồi:

```html
let article = `{{ json_encode($article) }}`;
```

Tốt hơn:

```html
<input id="article" type="hidden" value='@json($article)'>
```

Or

```html

<button class="js-fav-article" data-article='@json($article)'>{{ $article->name }}
	<button>
```

Trong tệp Javascript:

```javascript
let article = $('#article').val();
```

Cách tốt nhất là sử dụng gói PHP to JS chuyên dụng để truyền dữ liệu.

### Sử dụng các tệp cấu hình và ngôn ngữ, hằng số thay vì văn bản trong mã

Tồi:

```php
public function isNormal(): bool
{
return $article->type === 'normal';
}

return back()->with('message', 'Your article has been added!');
```

Tốt:

```php
public function isNormal()
{
return $article->type === Article::TYPE_NORMAL;
}

return back()->with('message', __('app.article_added'));
```

### Sử dụng các công cụ Laravel tiêu chuẩn được cộng đồng chấp nhận

Ưu tiên sử dụng chức năng Laravel tích hợp và các gói cộng đồng thay vì sử dụng các gói và công cụ của bên thứ 3. Bất kỳ
nhà phát triển nào sẽ làm việc với ứng dụng của bạn trong tương lai sẽ cần phải học các công cụ mới. Ngoài ra, cơ hội
nhận được sự trợ giúp từ cộng đồng Laravel thấp hơn đáng kể khi bạn sử dụng gói hoặc công cụ của bên thứ 3. Đừng bắt
khách hàng của bạn trả tiền cho điều đó.

| Nhiệm vụ                            | Công cụ tiêu chuẩn                    | Công cụ của bên thứ 3                                      |
|-------------------------------------|---------------------------------------|------------------------------------------------------------|
| Authorization                       | Policies                              | Grunt, Gulp, 3rd party packages                            |
| Biên dịch tài sản                   | Laravel Mix, Vite                     | Grunt, Gulp, gói của bên thứ 3                             |  
| Môi trường phát triển               | Laravel Sail, Homestead               | Docker                                                     |                                                  
| Triển khai                          | Laravel Forge                         | Deployer và các giải pháp khác                             |                                   
| Kiểm thử đơn vị                     | PHPUnit, mockery                      | Phpspec, Pest                                              |               
| Kiểm tra trình duyệt                | Laravel Dust                          | Codeception                                                |                                                  
| DB                                  | Eloquent                              | SQL, Doctrine                                              | 
| Templates                           | Blade                                 | Twig                                                       |
| Làm việc với dữ liệu                | Laravel collection                    | Mảng                                                       |                                                        
| Xác thực biểu mẫu                   | Request classes                       | Gói của bên thứ 3, validate trong controller               |                 
| Xác thực                            | Built-in                              | Gói của bên thứ 3, giải pháp của riêng bạn                 |                             
| Xác thực API                        | Laravel Passport, Laravel Sanctum     | Các gói JWT và OAuth của bên thứ 3                         |            
| Tạo API                             | Built-in                              | Dingo API và các gói tương tự                              |                                        
| Làm việc với cấu trúc DB            | Migrations                            | Làm việc trực tiếp với cấu trúc DB                         |                                     
| Localization                        | Built-in                              | Gói của bên thứ 3                                          |                                                      
| Giao diện người dùng thời gian thực | Laravel Echo, Pusher                  | Các gói của bên thứ 3 và làm việc trực tiếp với WebSockets |
| Tạo dữ liệu thử nghiệm              | Lớp seeder, Model Factory, Faker      | Tạo dữ liệu thử nghiệm theo cách thủ công                  |
| Lên lịch tác vụ                     | Bộ lập lịch tác vụ Laravel            | Tập lệnh và gói của bên thứ 3                              |                 
| DB                                  | MySQL, PostgreSQL, SQLite, SQL Server | MongoDB                                                    |

### Thực hiện theo quy ước đặt tên Laravel

Thực hiện theo các tiêu chuẩn PSR.

Ngoài ra, hãy tuân theo các quy ước đặt tên được cộng đồng Laravel chấp nhận:

| What                             | How                                        | Good                                    | Bad                                                     |
|----------------------------------|--------------------------------------------|-----------------------------------------|---------------------------------------------------------|
| Controller                       | singular                                   | ArticleController                       | ~~ArticlesController~~                                  |
| Route                            | plural                                     | articles/1                              | ~~article/1~~                                           |
| Route name                       | snake_case with dot notation               | users.show_active                       | ~~users.show-active, show-active-users~~                |
| Model                            | singular                                   | User                                    | ~~Users~~                                               |                                                                       
| hasOne or belongsTo relationship | singular                                   | articleComment                          | ~~articleComments, article_comment~~                    |      
| All other relationships          | plural                                     | articleComments                         | ~~articleComment, article_comments~~                    |                 
| Table                            | plural                                     | article_comments                        | ~~article_comment, articleComments~~                    |                                
| Pivot table                      | singular model names in alphabetical order | article_user                            | ~~user_article, articles_users~~                        |
| Table column                     | snake_case without model name              | meta_title                              | ~~MetaTitle; article_meta_title~~                       |             
| Model property                   | snake_case                                 | $model->created_at                      | ~~$model->createdAt~~                                   |                            
| Foreign key                      | singular model name with _id suffix        | article_id                              | ~~ArticleId, id_article, articles_id~~                  |
| Primary key                      | -                                          | id                                      | ~~custom_id~~                                           |                                                                    
| Migration                        | -	                                         | 2017_01_01_000000_create_articles_table | ~~2017_01_01_000000_articles~~                          |                 
| Method                           | camelCase                                  | getAll                                  | ~~get_all~~                                             |                                                               
| Method in resource controller    | table                                      | store                                   | ~~saveArticle~~                                         |                                         
| Method in test class             | camelCase                                  | testGuestCannotSeeArticle               | ~~test_guest_cannot_see_article~~                       |        
| Variable                         | camelCase                                  | $articlesWithAuthor                     | ~~$articles_with_author~~                               |                                  
| Collection                       | descriptive, plural                        | $activeUsers = User::active()->get()    | ~~$active, $data~~                                      |            
| Object                           | descriptive, singular                      | $activeUser = User::active()->first()   | ~~$users, $obj~~                                        |             
| Config and language files index  | snake_case                                 | articles_enabled                        | ~~ArticlesEnabled; articles-enabled~~                   |  
| View                             | kebab-case                                 | show-filtered.blade.php                 | ~~showFiltered.blade.php, show_filtered.blade.php~~     |      
| Config                           | snake_case                                 | google_calendar.php                     | ~~googleCalendar.php, google-calendar.php~~             |             
| Contract (interface)             | adjective or noun                          | AuthenticationInterface                 | ~~Authenticatable, IAuthentication~~                    |
| Trait                            | adjective                                  | Notifiable                              | ~~NotificationTrait~~                                   |                                                
| Trait (PSR)                      | adjective                                  | NotifiableTrait                         | ~~Notification~~                                        |                                          
| Enum                             | singular                                   | UserType                                | ~~UserTypes, UserTypeEnum~~                             |                                                
| FormRequest                      | singular                                   | UpdateUserRequest                       | ~~UpdateUserFormRequest, UserFormRequest, UserRequest~~ |    
| Seeder                           | singular                                   | UserSeeder                              | ~~UsersSeeder~~                                         |         

### Quy ước về config

Miễn là bạn tuân theo các quy ước nhất định, bạn không cần phải thêm cấu hình bổ sung.

Tồi:

```php
// Table name 'Customer'
// Primary key 'customer_id'
class Customer extends Model
{
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $table = 'Customer';
    protected $primaryKey = 'customer_id';

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'role_customer', 'customer_id', 'role_id');
    }
}
```

Tốt:

```php
// Table name 'customers'
// Primary key 'id'
class Customer extends Model
{
    public function roles(): BelongsToMany
    {
    return $this->belongsToMany(Role::class);
    }
}
```

### Sử dụng cú pháp ngắn hơn và dễ đọc hơn nếu có thể

Tồi:

```php
$request->session()->get('cart');
$request->input('name');
```

Tốt:

```php
session('cart');
$request->name;
```

Các ví dụ khác:

| Cú pháp phổ biến                                                      | 	Cú pháp ngắn hơn và dễ đọc hơn                                    |
|-----------------------------------------------------------------------|--------------------------------------------------------------------|
| Session::get('cart')                                                  | 	session('cart')                                                   |
| $request->session()->get('cart')                                      | 	session('cart')                                                   |
| Session::put('cart', $data)                                           | 	session(['cart' => $data])                                        |
| $request->input('name'), Request::get('name')	                        | $request->name, request('name')                                    |
| return Redirect::back()	                                              | return back()                                                      |
| is_null($object->relation) ? null : $object->relation->id             | optional($object->relation)->id (in PHP 8: $object->relation?->id) |
| return view('index')->with('title', $title)->with('client', $client)	 | return view('index', compact('title', 'client'))                   |
| $request->has('value') ? $request->value : 'default';                 | $request->get('value', 'default')                                  |
| Carbon::now(), Carbon::today()	                                       | now(), today()                                                     |
| App::make('Class')	                                                   | app('Class')                                                       |
| ->where('column', '=', 1)	                                            | ->where('column', 1)                                               |
| ->orderBy('created_at', 'desc')	                                      | ->latest()                                                         |
| ->orderBy('age', 'desc')	                                             | ->latest('age')                                                    |
| ->orderBy('created_at', 'asc')	                                       | ->oldest()                                                         |
| ->select('id', 'name')->get()	                                        | ->get(['id', 'name'])                                              |
| ->first()->name	                                                      | ->value('name')                                                    |

### Sử dụng IoC/Service container thay vì Class mới

cú pháp Class mới tạo ra `tight coupling` giữa các lớp và làm phức tạp việc kiểm thử. Thay vào đó, hãy sử dụng
**IoC container** hoặc **facades**.

Tồi:

```php
$user = new User;
$user->create($request->validated());
```

Tốt:

```php
public function __construct(User $user)
{
    $this->user = $user;
}
...
$this->user->create($request->validated());
```

### Không lấy dữ liệu trực tiếp từ tệp .env

Thay vào đó, hãy truyền dữ liệu để cấu hình tệp và sau đó sử dụng hàm trợ giúp để sử dụng dữ liệu trong ứng
dụng.config()

Tồi:

```php
$apiKey = env('API_KEY');
```

Tốt:

```php
// config/api.php
'key' => env('API_KEY'),

// Use the data
$apiKey = config('api.key');
```

### Lưu trữ ngày ở định dạng chuẩn. Sử dụng _accessors_ và _mutators_ để sửa đổi định dạng ngày

Ngày dưới dạng chuỗi kém tin cậy hơn so với đối tượng, ví dụ: phiên bản Carbon. Bạn nên truyền các đối tượng Carbon giữa
các lớp thay vì chuỗi ngày. Kết xuất nên được thực hiện trong lớp hiển thị (mẫu):

Tồi:

```php
{{ Carbon::createFromFormat('Y-d-m H-i', $object->ordered_at)->toDateString() }}
{{ Carbon::createFromFormat('Y-d-m H-i', $object->ordered_at)->format('m-d') }}
```

Tốt:

```php
// Model
protected $casts = [
'ordered_at' => 'datetime',
];

// Blade view
{{ $object->ordered_at->toDateString() }}
{{ $object->ordered_at->format('m-d') }}
```

### Không sử dụng DocBlocks

DocBlocks làm giảm khả năng đọc. Sử dụng tên phương thức mô tả và các tính năng PHP hiện đại như gợi ý kiểu trả về thay
thế.

Tồi:

```php
/**

* The function checks if given string is a valid ASCII string
*
* @param string $string String we get from frontend which might contain
*                       illegal characters. Returns True is the string
*                       is valid.
*
* @return bool
* @author John Smith
*
* @license GPL
  */

public function checkString($string)
{
}
```

Tốt:

```php
public function isValidAsciiString(string $string): bool
{
}
```

### Các thực hành tốt khác

* Tránh sử dụng các mẫu và công cụ xa lạ với Laravel và các khung tương tự (ví dụ: RoR, Django). Nếu bạn thích cách tiếp
  cận Symfony (hoặc Spring) để xây dựng ứng dụng, bạn nên sử dụng các framework này để thay thế.
* Không bao giờ đặt bất kỳ logic nào trong các tệp routes.
* Giảm thiểu việc sử dụng PHP vani trong các mẫu Blade.
* Sử dụng DB trong bộ nhớ để kiểm tra.
* Không ghi đè lên các tính năng khung tiêu chuẩn để tránh các sự cố liên quan đến việc cập nhật phiên bản khung và
  nhiều vấn đề khác.
* Sử dụng cú pháp PHP hiện đại nếu có thể, nhưng đừng quên khả năng đọc.
* Tránh sử dụng View Composers và các công cụ tương tự trừ khi bạn thực sự biết mình đang làm gì. Trong hầu hết các
  trường hợp, có một cách tốt hơn để giải quyết vấn đề.

## 20+ Laravel best practices, tips and tricks to use in 2023

### Luôn cập nhật Laravel

Luôn cập nhật Laravel cung cấp các lợi ích sau:

* Cải thiện bảo mật: Vì Laravel thường xuyên phát hành các bản sửa lỗi bảo mật.
* Hiệu suất tốt hơn: Các bản cập nhật Laravel thường bao gồm các cải tiến về hiệu suất, chẳng hạn như thời gian tải
  nhanh
  hơn và mã hiệu quả hơn.
* Các tính năng và chức năng mới: Đây là lý do tại sao chúng tôi sử dụng và yêu thích Laravel và lý do nó thay đổi cuộc
  sống của chúng tôi.
* Khả năng tương thích với các gói chính thức và cộng đồng mới nhất.

Nếu các bản cập nhật Laravel làm bạn sợ, đó là vì codebase của bạn không được kiểm tra. Bạn sợ một bản cập nhật lớn sẽ
phá vỡ mã của bạn theo cách khiến bạn gần như không thể sắp xếp được. Nếu đúng như vậy, thử nghiệm là một phương pháp
hay nhất bạn nên thực hiện. Thêm về điều đó bên dưới.

### Luôn cập nhật các gói hàng

Truy cập vào hàng chục gói từ hệ sinh thái Laravel chính thức cũng như hàng ngàn gói cộng đồng là điều giúp công việc
của chúng tôi dễ dàng hơn.

Nhưng bạn càng sử dụng nhiều gói, bạn càng có thể phải chịu nhiều điểm thất bại.

Thường xuyên chạy `composer update` là một trong những thực tiễn tốt nhất dễ áp dụng nhất và đi một chặng đường dài
hướng tới một cơ sở mã
an toàn hơn.

Nhưng tất nhiên, nó giống như trong phần trước: nếu mã của bạn không được kiểm tra tốt, hồi quy bất ngờ có thể xảy ra.
Nhưng đừng lo lắng; Các câu hỏi tiếp theo sẽ cung cấp cho bạn một điểm khởi đầu để lên cấp trên mặt trận đó! 💪

### Giữ cho dự án của bạn được kiểm tra để ngăn chặn các lỗi nghiêm trọng

Viết các bài kiểm tra tự động là một chủ đề rộng lớn và ít được biết đến giữa các nhà phát triển.

Nhưng bạn có biết đó cũng là một trong số ít các phương pháp hay nhất đảm bảo độ tin cậy không?

Dưới đây là những lợi ích của một bộ kiểm thử tốt:

* Ít lỗi hơn.
* Khách hàng hạnh phúc hơn.
* Nhà tuyển dụng hạnh phúc hơn.
* Các nhà phát triển tự tin. Bạn sẽ không sợ phá vỡ một cái gì đó khi quay trở lại dự án sau một thời gian.
* Nhân viên mới có thể làm việc hiệu quả ngay từ ngày đầu tiên, đặc biệt nếu bạn làm theo hướng dẫn của Laravel. Đã thay
  đổi một số mã? Không vấn đề gì. Chỉ cần chạy xem những gì bạn đã hỏng, sửa chữa và lặp lại!php artisan test

** Có thể làm cho một dự án vô cùng ổn định hơn nhờ kiểm thử tự động sẽ làm nên điều kỳ diệu cho sự nghiệp của bạn. **

Laracasts cung cấp các khóa học thử nghiệm miễn phí để giúp bạn bắt đầu. Một với PHPUnit, tiêu chuẩn công nghiệp và một
với Pest, khung kiểm tra tốt nhất trên hành tinh này giúp hiện đại hóa và đơn giản hóa việc kiểm tra trong PHP.

1. PHP Testing Jargon.
2. Pest From Scratch (this is the one I recommend).

### Bám sát cấu trúc thư mục mặc định

Bạn có biết tại sao bạn đang sử dụng một framework?

1. Nó đóng khung công việc của bạn với một bộ hướng dẫn mà bạn có thể tuân theo để đảm bảo mọi thành viên trong nhóm của
   bạn đều ở trên cùng một trang;
2. Nó cung cấp nhiều tính năng phức tạp, tẻ nhạt và được thử nghiệm chiến đấu miễn phí, vì vậy bạn có thể tập trung vào
   việc mã hóa những gì cụ thể cho dự án của mình.
   Vì vậy, nó có được coi là một thực tiễn tốt nhất để gắn bó với cấu trúc dự án mặc định của Laravel?

1. Thuận tiện. Cách làm việc mặc định của Laravel được ghi lại. Khi bạn trở lại một dự án vài tuần hoặc vài tháng sau
   đó, bạn sẽ cảm ơn bản thân trong quá khứ của mình vì điều này.
2. Làm việc với các đồng đội dễ dàng hơn đáng kể. Họ biết Laravel, giống như bạn. Sử dụng kiến thức phổ biến này để giúp
   dự án tiến lên phía trước thay vì phát minh lại bánh xe mỗi lần.

Khi nào bạn không nên tuân thủ các mặc định?
Khi quy mô dự án của bạn thực sự đòi hỏi phải làm những điều khác biệt.

### Sử dụng yêu cầu biểu mẫu tùy chỉnh để xác thực phức tạp

Lý do chính để sử dụng yêu cầu biểu mẫu tùy chỉnh là:

1. Sử dụng lại xác thực trên nhiều bộ điều khiển;
2. Giảm tải mã từ bộ điều khiển cồng kềnh;

Tạo yêu cầu biểu mẫu tùy chỉnh cũng đơn giản như chạy lệnh Artisan này:

```shell
php artisan make:request StorePostRequest
```

Sau đó, trong bộ điều khiển của bạn, chỉ cần nhập gợi ý nó:

```php
use App\Http\Requests\StorePostRequest;

class PostController
{
function store(StorePostRequest $request)
{
$validated = $request->validated();

        Post::create($validated);
 
        //
    }
}
```

Yêu cầu tùy chỉnh cũng có thể được sử dụng để ủy quyền, nếu bạn cảm thấy Chính sách quá mức cần thiết.

### Sử dụng bộ điều khiển hành động đơn để giữ cho mã được tổ chức

Đôi khi, mặc dù tuân theo tất cả các phương pháp hay nhất, bộ điều khiển của bạn trở nên quá lớn.
Laravel cung cấp một cách để giúp bạn khắc phục điều
này: [Single Action Controllers](https://laravel.com/docs/10.x/controllers#single-action-controllers).

Thay vì chứa nhiều hành động, như **Resource Controllers**, **Single Action Controllers** chỉ chứa một.

Để tạo một tài khoản, hãy sử dụng lệnh `php artisan make:controller ShowPostController --invokable`.
Điều này sẽ tạo ra một bộ điều khiển chỉ với một hành động được gọi là **__invoke** (tìm hiểu thêm về phương pháp ma
thuật __
invoke).

Sau đó, trong các tuyến đường của bạn, bạn có thể thực hiện việc này thay thế:

```
use App\Http\Controllers\PostController;
use App\Http\Controllers\ShowPostController;

Route::get('/posts/{post}', [PostController::class, 'show']);
Route::get('/posts/{post}', ShowPostController::class);
```

Đây là một thực tiễn tốt nhất chủ quan và tùy thuộc vào bạn để quyết định xem bạn có muốn sử dụng bộ điều khiển hành
động đơn hay không.

### Sử dụng middleware thay vì lặp lại code

Middlewares trong Laravel cho phép bạn lọc hoặc sửa đổi yêu cầu hiện tại. Dưới đây là một số trường hợp sử dụng:

* Kiểm tra các quyền cần thiết;
* Kiểm tra ngôn ngữ của người dùng và thay đổi ngôn ngữ cho phù hợp.

* Và như bạn mong đợi, Laravel đi kèm với một loạt các phần mềm trung gian ra khỏi hộp để xác thực, giới hạn tốc độ và
  hơn thế nữa.

Khi phần mềm trung gian của bạn đã làm những gì nó phải làm, bạn có thể chặn yêu cầu hoặc để nó đi qua.

```php
public function handle(Request $request, Closure $next) : Response
{
    if (! $request->user()->hasEnoughTokens()) {
    abort(403);
    }
    return $next($request);
}
```

Một phần mềm trung gian có thể được gắn vào bất kỳ số **route** nào, giúp bạn ngăn chặn sự trùng lặp mã.

### Sử dụng chính sách để ủy quyền

Sử dụng các chính sách ủy quyền trong Laravel là điều cần thiết để duy trì một ứng dụng có tổ chức và có thể duy trì.
Dưới đây là ba lý do chính để sử dụng chính sách:

1. Sử dụng lại logic ủy quyền trên nhiều bộ điều khiển: Bằng cách tập trung các quy tắc ủy quyền, bạn có thể đảm bảo
   tính nhất quán và tránh trùng lặp mã trong các phần khác nhau của ứng dụng.
2. Giảm tải mã từ bộ điều khiển cồng kềnh: Di chuyển logic ủy quyền sang các chính sách giúp giữ cho bộ điều khiển của
   bạn tinh gọn, tập trung vào trách nhiệm chính của họ và dễ đọc và duy trì hơn.
3. Dễ dàng tìm mã liên quan đến ủy quyền: Lưu trữ chính sách trong thư mục app/Policies giúp nhà phát triển dễ dàng
   tìm và cập nhật các quy tắc ủy quyền khi cần.

Hãy xem xét một ví dụ thực tế về việc sử dụng chính sách:

```php
// app/Policies/PostPolicy.php
public function update(User $user, Post $post)
{
return $user->id === $post->user_id;
}

// app/Http/Controllers/PostController.php
public function update(Request $request, Post $post)
{
$this->authorize('update', $post);
    // ...
}
```

### Luôn cập nhật migration

Di chuyển là một cách để mô tả cơ sở dữ liệu của bạn trong **plain PHP code**.

Xem chúng như một phpMyAdmin, nhưng với mã thay vì giao diện người dùng.

Điều này cực kỳ hữu ích để giúp mọi người trong nhóm sao chép cùng một môi trường trên máy cục bộ của họ và theo dõi nó
trong lịch sử Git.

Đó cũng là cách bạn có thể triển khai một dự án sang môi trường mới (ví dụ như dàn dựng và sản xuất) mà không phải lo
lắng về việc xuất cơ sở dữ liệu từ môi trường khác.

Tuy nhiên, các nhà phát triển đôi khi chỉnh sửa cơ sở dữ liệu trực tiếp thay vì tạo di chuyển mới. Điều này là xấu và sẽ
làm cho cuộc sống của các nhà phát triển khác khó khăn hơn. Không có gì khó chịu hơn là phải làm phiền đồng nghiệp của
bạn trên Slack và yêu cầu họ đổ rác.

### Sử dụng di chuyển ẩn danh để tránh xung đột (Laravel 8 trở lên)

Di chuyển ẩn danh là một cách tuyệt vời để tránh xung đột tên lớp. Ví dụ: bạn có thể tạo bao nhiêu lần di chuyển "
update_posts_table" tùy thích mà không gặp phải lỗi nữa. Và bất cứ điều gì làm giảm ma sát là một điều tốt.

Laravel tạo ra các migration ẩn danh cho bạn miễn là bạn đang sử dụng Laravel 9 trở lên:

```shell
php artisan make:migration UpdatePostsTable
```

Đây là cách họ nhìn:

```php
<?php
 
use IlluminateSupportFacadesSchema;
use IlluminateDatabaseSchemaBlueprint;
use IlluminateDatabaseMigrationsMigration;
 
return new class extends Migration {
    …
};
```

### Sử dụng phương thức down() một cách chính xác để rollback

(được sử dụng bởi lệnh) được chạy khi bạn cần khôi phục các thay đổi bạn đã thực hiện đối với cơ sở dữ liệu của
mình.`down()`
`php artisan migrate:rollback`

Một số người sử dụng nó, một số thì không.

Nếu bạn thuộc về những người sử dụng nó, bạn nên đảm bảo phương thức `down()` của bạn được thực hiện chính xác.

Về cơ bản, phương pháp `down()` phải làm ngược lại với phương pháp `up()`.

```php
use IlluminateSupportFacadesSchema;
use IlluminateDatabaseSchemaBlueprint;
use IlluminateDatabaseMigrationsMigration;

return new class extends Migration {
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            // The column was a boolean, but we want to switch to a datetime.
            $table->datetime('is_published')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            // When rolling back, we have to restore the column to its previous state.
            $table->boolean('is_published')->default(false)->change();
        });
    }

}
```

Và nếu bạn không thuộc về những người muốn sử dụng nó, chỉ cần loại bỏ nó.

### Sử dụng quy ước đặt tên của Eloquent cho tên bảng

Quy ước đặt tên của Laravel cho các bảng rất dễ dàng và là một phương pháp hay nhất sẽ đơn giản hóa cuộc sống của nhóm
bạn.

Trước tiên, hãy để tôi nhắc bạn rằng framework thực hiện tất cả cho bạn khi bạn sử dụng các lệnh Artisan như .

```shell
php artisan make:model Post --migration --factory
```

Vì bất kỳ lý do gì, nếu bạn không thể sử dụng các lệnh đó, đây là tổng quan:

* Đối với **model** `Post`, hãy đặt tên cho bảng của bạn . Về cơ bản sử dụng dạng số nhiều (`comments` cho
  Comment, `replies` cho Reply, v.v.);
* Đối với pivot table một `Post` với một `Comment` (ví dụ: `comment_post`):
    * Sử dụng cả hai tên
    * Dạng số ít
    * Thứ tự chữ cái

### Ngăn chặn các vấn đề N + 1 với eager loading

Tôi đã nói về rất nhiều phương pháp hay nhất, nhưng nó còn lâu mới kết thúc!

Bạn đã bao giờ nghe nói về vấn đề N + 1 chưa? **Eager loading** là một giải pháp tuyệt vời để tránh chúng.

Vấn đề N+1 với Eloquent
![Ngăn chặn các vấn đề N + 1 với eager loading](/assets/images/nhung-thuc-hanh-tot-cua-laravel-01.webp)

Giả sử bạn đang hiển thị danh sách 30 bài đăng với tác giả của chúng:

* Eloquent sẽ thực hiện một truy vấn cho 30 bài đăng đó;
* Sau đó, 30 truy vấn cho mỗi tác giả, vì mối quan hệ `user` được tải `lazy load` (nghĩa là nó được tải mỗi
  khi bạn gọi `$post->user` trong mã của mình).

Cách khắc phục rất đơn giản: sử dụng phương pháp  `with()` và bạn sẽ giảm 31 truy vấn xuống chỉ còn 2.

```php
Post::with('author')->get();
```

Để đảm bảo bạn không gặp vấn đề về N + 1, bạn có thể kích hoạt ngoại lệ bất cứ khi nào bạn `lazy load` bất kỳ mối quan
hệ
nào. Hạn chế này chỉ nên được áp dụng cho môi trường địa phương của bạn.

```php
Model::preventLazyLoading(
    // Returns `true` unless it's the production environment.
    ! app()->isProduction()
);
```

### Sử dụng strict mode của Eloquent để ngăn chặn các vấn đề về hiệu suất và lỗi

**strict mode** của Eloquent là một phước lành để gỡ lỗi.

Nó giúp các nhà phát triển nắm bắt các vấn đề tiềm ẩn trong giai đoạn phát triển bằng cách đưa ra các ngoại lệ trong các
trường hợp sau:

1. **Lazy loading relationships**: lazy loading có thể dẫn đến các vấn đề về hiệu suất, đặc biệt là khi xử lý các tập dữ
   liệu lớn. Nó xảy ra khi các **model** liên quan không được truy xuất từ cơ sở dữ liệu cho đến khi chúng được truy cập
   rõ
   ràng. Trong chế độ nghiêm ngặt, một ngoại lệ sẽ được ném nếu một mối quan hệ được tải một **lazily loaded**, khuyến
   khích
   các nhà phát triển sử dụng tải háo hức thay thế.
2. **Gán các thuộc tính non-fillable**: thuộc tính `$fillable` trên các mô hình Eloquent bảo vệ chống lại các lỗ hổng
   gán hàng loạt. Một ngoại lệ sẽ được đưa ra khi cố gắng gán một thuộc tính không thể điền, đảm bảo rằng các nhà phát
   triển xử
   lý việc gán hàng loạt một cách cẩn thận.
3. **Truy cập các thuộc tính không tồn tại (hoặc không được truy xuất)**: truy cập các thuộc tính **non-existent** hoặc
   thuộc tính không tồn tại chưa được truy xuất từ cơ sở dữ liệu có thể dẫn đến hành vi hoặc lỗi không mong muốn. Chế độ
   nghiêm ngặt sẽ tạo ra một ngoại lệ trong những trường hợp này, giúp các nhà phát triển xác định và khắc phục các vấn
   đề đó.

Để kích hoạt nó, hãy thêm mã này vào phương thức `boot()` AppServiceProvider của bạn.

```php
Model::shouldBeStrict(
// It will only be enabled outside of production, though.
! app()->isProduction()
);
```

### Sử dụng cách mới để khai báo accessor và mutator

Cách khai báo accessor và mutator mới đã được giới thiệu trong Laravel 9.

Đây là cách bạn nên khai báo chúng ngay bây giờ:

```php
use IlluminateDatabaseEloquentCastsAttribute;

class Pokemon
{
    function name() : Attribute
    {
        $locale = app()->getLocale();

        return Attribute::make(
            get: fn ($value) => $value[$locale],
            set: fn ($value) => [$locale => $value],
        );
    }

}
```

Bạn thậm chí có thể lưu vào bộ nhớ cache đắt tiền để tính toán các giá trị:

```php
use IlluminateDatabaseEloquentCastsAttribute;

function someAttribute() : Attribute
{
    return Attribute::make(
        fn () => /* Do something. */
    )->shouldCache();
}
```

Cách cũ trông như thế này:

```php
class Pokemon
{
    function getNameAttribute() : string
    {
        $locale = app()->getLocale();

        return $this->attributes['name'][$locale];
    }
 
    function setNameAttribute($value) : string
    {
        $locale = app()->getLocale();
 
        return $this->attributes['name'][$locale] = $value;
    }

}
```

### Sử dụng dispatchAfterResponse() cho các tác vụ dài hạn

Hãy sử dụng ví dụ đơn giản nhất có thể: bạn có một biểu mẫu liên hệ. Gửi email có thể mất từ một hoặc hai giây, tùy
thuộc vào phương thức của bạn.

Điều gì sẽ xảy ra nếu bạn có thể trì hoãn việc này cho đến khi người dùng nhận được phản hồi của máy chủ của bạn?

Đó chính xác là những gì dispatchAfterResponse() làm:

```php
SendContactEmail::dispatchAfterResponse($input);
```

Hoặc, nếu bạn muốn gửi công việc bằng các chức năng ẩn danh:

```php
dispatch(function () {
// Do something.
})->afterResponse();
```

### Sử dụng hàng đợi cho các tác vụ chạy lâu hơn nữa

Hãy tưởng tượng bạn phải xử lý hình ảnh do người dùng của bạn tải lên.

Nếu bạn xử lý từng người trong số họ ngay sau khi chúng được gửi, điều này sẽ xảy ra:

* Máy chủ của bạn sẽ cháy;
* Người dùng của bạn sẽ phải đợi trước màn hình tải.

Đây không phải là UX tốt, và chúng ta có thể thay đổi điều đó.

Laravel có một hệ thống hàng đợi sẽ chạy tất cả các tác vụ đó một cách tuần tự hoặc với số lượng song song hạn chế.

Và, để dễ dàng quản lý công việc của bạn thông qua giao diện người
dùng, [Laravel Horizon](https://laravel.com/docs/10.x/horizon) là thứ bạn nên sử dụng.

![Sử dụng hàng đợi cho các tác vụ chạy lâu hơn nữa](/assets/images/nhung-thuc-hanh-tot-cua-laravel-02.webp)

### Lazily refresh cơ sở dữ liệu của bạn trước mỗi lần kiểm tra

Khi bạn có thể thoát khỏi dữ liệu giả mạo trong môi trường cục bộ của mình, điều tốt nhất nên làm là kiểm tra cơ sở dữ
liệu mới mỗi khi bạn chạy thử nghiệm.

Bạn có thể `Illuminate\Foundation\Testing\LazilyRefreshDatabase` sử dụng đặc điểm này trong test/TestCase.php.

Ngoài ra còn có trait `RefreshDatabase`, nhưng lazily hiệu quả hơn, vì việc các bảng không sử dụng sẽ
không được chạy trong quá trình thử nghiệm.

### Tận dụng các nhà máy để giúp bạn với dữ liệu và xét nghiệm giả mạo

**Factories** làm cho cách thử nghiệm dễ quản lý hơn.

Bạn có thể tạo một cái bằng lệnh `php artisan make:factory PostFactory` và thêm dữ liệu giả ngẫu nhiên vào mọi cột như
sau:

```php
namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    public function definition() : array
    {
        return [
            'user_id' => User::factory(),
            'title' => fake()->sentence(),
            'slug' => fake()->slug(),
            'content' => fake()->paragraphs(5, true),
            'description' => fake()->paragraph(),
        ];
    }
}
```

Các nhà máy tạo ra tất cả các tài nguyên bạn cần khi viết bài kiểm tra.

Đây là một trong những hành động:

```php
public function test_it_shows_a_given_post()
{
    $post = Post::factory()->create();
    $this
        ->get(route('posts.show', $post))
        ->assertOk();
}
```

### Kiểm tra đối với ngăn xếp sản xuất bất cứ khi nào có thể

Khi chạy ứng dụng web của bạn trong **production**, bạn có thể sử dụng một cái gì đó khác ngoài SQLite, như MySQL. Hoặc
trình điều khiển bộ nhớ cache mảng thay vì Redis.

Sau đó, tại sao bạn không sử dụng chúng khi chạy thử nghiệm của mình? Có thể có lỗi chỉ xuất hiện với những lỗi này và
các thử nghiệm được cho là sẽ giúp bạn lưu vào bộ nhớ cache trước khi chúng xảy ra trong sản xuất.

Tôi tin rằng độ tin cậy và độ chính xác quan trọng hơn tốc độ thực hiện trong bối cảnh này.

### Sử dụng các giao dịch cơ sở dữ liệu để khôi phục các thay đổi sau mỗi lần kiểm tra

Trong một trong những dự án của mình, tôi cần tạo một cơ sở dữ liệu chứa đầy dữ liệu thực được cung cấp bởi các tệp CSV
trên GitHub.

Phải mất thời gian và tôi không thể làm mới cơ sở dữ liệu của mình trước mỗi lần kiểm tra. Nó quá chậm.

Vì vậy, khi các thử nghiệm của tôi thay đổi dữ liệu, tôi muốn khôi phục các thay đổi để giữ cơ sở dữ liệu ở trạng thái
ban đầu. Bạn có thể làm như vậy bằng cách sử dụng trait `Illuminate\Foundation\Testing\DatabaseTransactions` trong lớp
trường hợp kiểm thử cơ sở của bạn (_tests/TestCase.php_).

### Đừng lãng phí lệnh gọi API, sử dụng mocks

Trong Laravel, mocks có thể được sử dụng để tránh lãng phí các lệnh gọi API trong khi kiểm tra và bị lỗi giới hạn tốc
độ.

Giả sử chúng tôi đang làm việc trên một dự án sử dụng API của Twitter.

Trong container của chúng ta, chúng ta có một class `Client` dùng để gọi nó.

Trong khi chạy bộ thử nghiệm của chúng tôi, chúng tôi muốn tránh các cuộc gọi không cần thiết đến thực tế và cách tốt
nhất để làm điều đó là trao đổi **client** của chúng tôi trong container bằng một **mock**.

```php
$mock = $this->mock(Client::class);

$mock
    ->shouldReceive('getTweet')
    ->with('Some tweet ID')
    ->andReturn([
        'data' => [
            'author_id' => '2244994945',
            'created_at' => '2022-12-11T10:00:55.000Z',
            'id' => '1228393702244134912',
            'edit_history_tweet_ids' => ['1228393702244134912'],
            'text' => 'This is a tweet',
        ],
    ]);
```

### Ngăn chặn các yêu cầu HTTP đi lạc để xác định các thử nghiệm chậm

Nếu bạn muốn đảm bảo rằng tất cả các yêu cầu HTTP được thực hiện trong quá trình kiểm tra của bạn là giả mạo, bạn có thể
sử dụng phương thức `Http::preventStrayRequests()` từ HTTP Facade.

Nó sẽ gây ra một ngoại lệ được ném nếu bất kỳ yêu cầu HTTP nào không có phản hồi giả tương ứng được thực thi.

Bạn có thể sử dụng phương pháp này trong một thử nghiệm riêng lẻ hoặc cho toàn bộ bộ thử nghiệm của bạn.

```php
Http::preventStrayRequests();
```

### Không theo dõi tệp .env của bạn

Tệp .env của bạn chứa thông tin nhạy cảm.

**Xin vui lòng, không theo dõi nó!**

Đảm bảo rằng nó được bao gồm trong **.gitignore** của bạn.

Hầu hết thời gian, rò rỉ dữ liệu là bên trong công việc.

Trình quản lý mật khẩu là một giải pháp tốt hơn để chia sẻ thông tin mật.

Nếu bạn muốn các thành viên trong nhóm của mình có quyền truy cập vào một bộ thông tin nhạy cảm được quản lý, hãy sử
dụng trình quản lý mật khẩu với hồ sơ theo dõi đã được chứng minh về bảo mật vững chắc.

### Không theo dõi CSS và JavaScript đã biên dịch

CSS và JavaScript của bạn được tạo bằng cách sử dụng bản gốc trong resources/css và resource/js.

Khi triển khai vào sản xuất, bạn có thể biên dịch chúng trên máy chủ hoặc bạn tạo thành phần lạ trước đó.

Đặc biệt đối với những người vẫn đang sử dụng Laravel Mix, tôi khuyên bạn nên ngừng theo dõi họ.

Thật khó chịu khi mỗi khi bạn thay đổi một cái gì đó, một `public/css/app.css` hoặc `public/js/app.js` được tạo và cần
phải được **commit**.

Chỉ mất hai dòng trong **.gitignore** của bạn để ngăn chặn điều này:

```gitignore
public/css
public/js
```

## Nguồn

[1]
[alexeymezenin/laravel-best-practices](https://github.com/alexeymezenin/laravel-best-practices#store-dates-in-the-standard-format-use-accessors-and-mutators-to-modify-date-format)
[2]
[20+ Laravel best practices, tips and tricks to use in 2023](https://benjamincrozat.com/laravel-best-practices#laravel-best-practices)