---
# This is the title of the article
title: Tệp robots.txt để làm gì?
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
  - seo website
  - tệp robots.txt để làm gì?
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize copyright content
copyright: No Copyright
---

# Tệp robots.txt

## Tệp robots.txt là gì?

Robot.txt là một tệp văn bản mà quản trị viên web tạo ra để hướng dẫn robot web (thường là robot công cụ tìm kiếm) cách
thu thập dữ liệu các trang trên trang web của họ. Tệp robots.txt là một phần của giao thức loại trừ robot (REP), một
nhóm các tiêu chuẩn web quy định cách robot thu thập dữ liệu web, truy cập và lập chỉ mục nội dung và phục vụ nội dung
đó cho người dùng. REP cũng bao gồm các chỉ thị như meta robot, cũng như các hướng dẫn trên page-, subdirectory- hoặc
site-wide về cách các công cụ tìm kiếm nên xử lý các liên kết (chẳng hạn như "follow" hoặc "nofollow").

Trong thực tế, các tệp robots.txt cho biết liệu một số tác nhân người dùng nhất định (phần mềm thu thập dữ liệu web) có
thể hoặc không thể thu thập dữ liệu các phần của trang web hay không. Các hướng dẫn thu thập dữ liệu này được chỉ định
bằng cách "disallowing" hoặc "allowing" hành vi của một số (hoặc tất cả) tác nhân người dùng.

### Định dạng cơ bản:

```txt
User-agent: [user-agent name]
Disallow: [Chuỗi URL không được thu thập thông tin]
```

Cùng với nhau, hai dòng này được coi là một tệp robots.txt hoàn chỉnh - mặc dù một tệp rô bốt có thể chứa nhiều dòng tác
nhân và chỉ thị của người dùng (ví dụ: không cho phép, cho phép, độ trễ thu thập dữ liệu, v.v.).

[https://www.slate.com/robots.txt](https://www.slate.com/robots.txt)

Trong tệp robots.txt , mỗi bộ lệnh tác nhân người dùng xuất hiện dưới dạng một tập hợp rời rạc, được phân tách bằng ngắt
dòng:

Chỉ thị tác nhân người dùng được chỉ định bởi ngắt dòng.
Trong tệp robots.txt có nhiều lệnh tác nhân người dùng, mỗi quy tắc không cho phép hoặc cho phép chỉ áp dụng cho (các)
tác nhân người dùng được chỉ định trong tập hợp phân tách ngắt dòng cụ thể đó. Nếu tệp chứa quy tắc áp dụng cho nhiều
tác nhân người dùng, trình thu thập thông tin sẽ chỉ chú ý đến (và làm theo các lệnh trong) nhóm hướng dẫn cụ thể nhất.

Đây là một ví dụ:
[https://www.buzzfeed.com/robots.txt](https://www.buzzfeed.com/robots.txt)

Msnbot, discobot và Slurp đều được gọi cụ thể, vì vậy những tác nhân người dùng đó sẽ chỉ chú ý đến các chỉ thị trong
các phần của tệp robots.txt. Tất cả các tác nhân người dùng khác sẽ tuân theo các chỉ thị trong nhóm tác nhân người
dùng: *.

## Ví dụ robots.txt:

Dưới đây là một vài ví dụ về robots.txt đang hoạt động cho một trang web:

### Chặn tất cả trình thu thập dữ liệu web khỏi tất cả nội dung

```txt
User-agent: * Disallow: /
```

Sử dụng cú pháp này trong tệp robots.txt sẽ yêu cầu tất cả các trình thu thập dữ liệu web không thu thập dữ liệu bất kỳ
trang nào trên trang web, bao gồm cả trang chủ.

### Cho phép tất cả trình thu thập dữ liệu web truy cập vào tất cả nội dung

```txt
User-agent: * Disallow:
```

Sử dụng cú pháp này trong tệp robots.txt yêu cầu trình thu thập dữ liệu web thu thập dữ liệu tất cả các trang
trên web, bao gồm cả trang chủ.

### Chặn trình thu thập dữ liệu web cụ thể từ một thư mục cụ thể

```txt
User-agent: Googlebot Disallow: /example-subfolder/
```

Cú pháp này chỉ yêu cầu trình thu thập thông tin của Google (tên tác nhân người dùng Googlebot) không thu thập dữ liệu
bất kỳ trang nào chứa chuỗi URL www.example.com/example-subfolder/.

### Chặn một trình thu thập dữ liệu web cụ thể từ một trang web cụ thể

```txt
User-agent: Bingbot Disallow: /example-subfolder/blocked-page.html
```

Cú pháp này chỉ cho trình thu thập thông tin của Bing (tên tác nhân người dùng Bing) biết để tránh thu thập dữ liệu
trang cụ thể tại www.example.com/example-subfolder/blocked-page.html.

## Robot.txt hoạt động như thế nào?

Công cụ tìm kiếm có hai công việc chính:

1. Thu thập dữ liệu web để khám phá nội dung;
2. Lập chỉ mục nội dung đó để nó có thể được phục vụ cho những người tìm kiếm đang tìm kiếm thông tin.

Để thu thập dữ liệu các trang web, các công cụ tìm kiếm theo các liên kết để đi từ trang web này sang trang web khác -
cuối cùng, thu thập dữ liệu trên nhiều tỷ liên kết và trang web. Hành vi thu thập dữ liệu này đôi khi được gọi là "
spidering".

Sau khi đến một trang web nhưng trước khi nhện nó, trình thu thập thông tin tìm kiếm sẽ tìm kiếm tệp robots.txt . Nếu
tìm thấy, trình thu thập thông tin sẽ đọc tệp đó trước khi tiếp tục qua trang. Vì tệp robots.txt chứa thông tin về cách
công cụ tìm kiếm nên thu thập dữ liệu, thông tin tìm thấy ở đó sẽ hướng dẫn hành động thu thập thông tin tiếp theo trên
trang web cụ thể này. Nếu tệp robots.txt không chứa bất kỳ lệnh nào không cho phép hoạt động của tác nhân người dùng (
hoặc nếu trang web không có tệp robots.txt), nó sẽ tiến hành thu thập thông tin khác trên trang web.

## Về robots.txt phải biết:

(thảo luận chi tiết hơn bên dưới)

* Để được tìm thấy, tệp robots.txt phải được đặt trong thư mục cấp cao nhất của trang web.
* Robot.txt phân biệt chữ hoa chữ thường: tệp phải được đặt tên là "robots.txt" (không phải Robot.txt, robot.TXT hoặc
  cách khác).
* Một số tác nhân người dùng (robot) có thể chọn bỏ qua tệp .txt rô bốt của bạn. Điều này đặc biệt phổ biến với các
  trình thu thập thông tin bất chính hơn như robot phần mềm độc hại hoặc trình quét địa chỉ email.
* Tệp /robots.txt có sẵn công khai: chỉ cần thêm /robots.txt vào cuối bất kỳ tên miền gốc nào để xem các chỉ thị của
  trang web đó (nếu trang web đó có tệp robots.txt!). Điều này có nghĩa là bất kỳ ai cũng có thể xem những trang bạn làm
  hoặc không muốn thu thập dữ liệu, vì vậy đừng sử dụng chúng để ẩn thông tin người dùng riêng tư.
* Mỗi tên miền phụ trên một miền gốc sử dụng các robots.txt tệp riêng biệt. Điều này có nghĩa là cả blog.example.com và
  example.com phải có robots.txt tệp riêng (blog.example.com/robots.txt và example.com/robots.txt).
* Nói chung, cách tốt nhất là chỉ ra vị trí của bất kỳ sơ đồ trang web nào được liên kết với miền này ở cuối tệp .txt
  robot. Đây là một ví dụ:
  [https://www.workday.com/robots.txt](https://www.workday.com/robots.txt)

## Cú pháp robots.txt kỹ thuật

Cú pháp robots.txt có thể được coi là "language" của các tệp robots.txt. Có năm thuật ngữ phổ biến mà bạn có thể gặp
trong tệp robot. Chúng bao gồm:

* **User-agent**: Trình thu thập dữ liệu web cụ thể mà bạn đang đưa ra hướng dẫn thu thập dữ liệu (thường là công
  cụ tìm kiếm). Bạn có thể tìm thấy danh sách hầu hết các tác nhân người dùng tại đây.
* **Disallow**: Lệnh được sử dụng để yêu cầu tác nhân người dùng không thu thập dữ liệu URL cụ thể. Chỉ cho phép một
  dòng "Disallow:" cho mỗi URL.
* **Allow** (Chỉ áp dụng cho Googlebot): Lệnh thông báo cho Googlebot rằng nó có thể truy cập vào một trang hoặc thư mục
  con mặc dù trang mẹ hoặc thư mục con của nó có thể không được phép.
* **Crawl-delay**: Trình thu thập thông tin nên đợi bao nhiêu giây trước khi tải và thu thập dữ liệu nội dung
  trang. Lưu ý rằng Googlebot không thừa nhận lệnh này, nhưng tốc độ thu thập dữ liệu có thể được đặt trong Google
  Search Console.
* **Sitemap**: Được sử dụng để gọi ra vị trí của bất kỳ sơ đồ trang web XML nào được liên kết với URL này. Lưu ý
  lệnh này chỉ được hỗ trợ bởi Google, Ask, Bing và Yahoo.

## Kết hợp mẫu

Khi nói đến các URL thực tế để chặn hoặc cho phép, các tệp robots.txt có thể khá phức tạp vì chúng cho phép sử dụng kết
hợp mẫu để bao gồm một loạt các tùy chọn URL có thể. Google và Bing đều tôn vinh hai biểu thức chính quy có thể được sử
dụng để xác định các trang hoặc thư mục con mà SEO muốn loại trừ. Hai ký tự này là dấu hoa thị (*) và ký hiệu đô la ($).

* '*' là ký tự đại diện đại diện cho bất kỳ chuỗi ký tự nào
* $ khớp với cuối URL

Google cung cấp một danh sách tuyệt vời các cú pháp và ví dụ khớp mẫu có thể
có [ở đây](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=en&visit_id=638337970781828345-500082943&rd=1).

## Robot.txt đi đâu trên một trang web?

Bất cứ khi nào họ đến một trang web, các công cụ tìm kiếm và các robot thu thập dữ liệu web khác (như trình thu thập
thông tin của Facebook, Facebot) đều biết để tìm kiếm tệp robots.txt . Tuy nhiên, họ sẽ chỉ tìm kiếm tệp đó ở một nơi cụ
thể: thư mục chính (thường là tên miền gốc hoặc trang chủ của bạn). Nếu tác nhân người dùng truy
cập www.example.com/robots.txt và không tìm thấy tệp robot ở đó, nó sẽ cho rằng trang web không có tệp và tiến hành thu
thập dữ liệu mọi thứ trên trang (và thậm chí có thể trên toàn bộ trang web). Ngay cả khi trang robots.txt tồn tại ở
example.com/index/robots.txt hoặc www.example.com/homepage/robots.txt, nó sẽ không được phát hiện bởi các tác nhân người
dùng và do đó trang web sẽ được xử lý như thể nó không có tệp robot nào cả.

Để đảm bảo tệp robots.txt của bạn được tìm thấy, hãy luôn bao gồm nó trong thư mục chính hoặc miền gốc của bạn.

## Tại sao bạn cần robots.txt?

Robots.txt tệp kiểm soát quyền truy cập của trình thu thập thông tin vào các khu vực nhất định trên trang web của bạn.
Mặc dù điều này có thể rất nguy hiểm nếu bạn vô tình không cho phép Googlebot thu thập dữ liệu toàn bộ trang web của
mình (!!), nhưng có một số tình huống trong đó tệp robots.txt có thể rất tiện dụng.

Một số trường hợp sử dụng phổ biến bao gồm:

* Ngăn chặn nội dung trùng lặp xuất hiện trong SERPs (lưu ý rằng meta robot thường là lựa chọn tốt hơn cho việc này)
* Giữ toàn bộ các phần của trang web ở chế độ riêng tư (ví dụ: trang web dàn dựng của nhóm kỹ thuật của bạn)
* Giữ cho các trang kết quả tìm kiếm nội bộ không hiển thị trên SERP công khai
* Chỉ định vị trí của (các) sơ đồ trang web
* Ngăn các công cụ tìm kiếm lập chỉ mục các tệp nhất định trên trang web của bạn (hình ảnh, PDF, v.v.)
* Chỉ định độ trễ thu thập dữ liệu để ngăn máy chủ của bạn bị quá tải khi trình thu thập thông tin tải nhiều phần nội
  dung
  cùng một lúc
* Nếu không có khu vực nào trên trang web của bạn mà bạn muốn kiểm soát quyền truy cập tác nhân người dùng, bạn có thể
  không cần tệp robots.txt.

## Kiểm tra xem bạn có tệp .txt rô bốt không

Bạn không chắc chắn nếu bạn có tệp robots.txt ? Chỉ cần nhập tên miền gốc của bạn, sau đó thêm /robots.txt vào cuối URL.
Ví dụ: tệp robot của Moz nằm ở moz.com/robots.txt.

Nếu không có trang .txt nào xuất hiện, bạn hiện không có trang .txt rô bốt (trực tiếp).

## Cách tạo tệp robots.txt

Nếu bạn thấy mình không có tệp robots.txt hoặc muốn thay đổi tệp của mình, việc tạo một tệp là một quá trình đơn giản.
Bài viết này từ Google hướng dẫn quá trình tạo tệp robots.txt
và [công cụ này](https://support.google.com/webmasters/answer/6062598?hl=en&ref_topic=6061961) cho phép bạn kiểm tra xem
tệp của bạn có được thiết lập chính xác hay không.

## Các phương pháp hay nhất về SEO

* Đảm bảo bạn không chặn bất kỳ nội dung hoặc phần nào trên trang web mà bạn muốn thu thập dữ liệu.
* Liên kết trên các trang bị chặn bởi robots.txt sẽ không được theo dõi. Điều này có nghĩa là 1.) Trừ khi chúng cũng
  được liên kết từ các trang có thể truy cập công cụ tìm kiếm khác (tức là các trang không bị chặn thông qua robots.txt,
  meta robot, hoặc cách khác), các tài nguyên được liên kết sẽ không được thu thập dữ liệu và có thể không được lập chỉ
  mục. 2.) Không có vốn chủ sở hữu liên kết nào có thể được chuyển từ trang bị chặn đến đích liên kết. Nếu bạn có các
  trang
  mà bạn muốn vốn chủ sở hữu được chuyển đến, hãy sử dụng một cơ chế chặn khác ngoài robots.txt.
* Không sử dụng robots.txt để ngăn dữ liệu nhạy cảm (như thông tin người dùng cá nhân) xuất hiện trong kết quả SERP. Bởi
  vì các trang khác có thể liên kết trực tiếp đến trang chứa thông tin cá nhân (do đó bỏ qua các chỉ thị robots.txt trên
  tên
  miền gốc hoặc trang chủ của bạn), nó vẫn có thể được lập chỉ mục. Nếu bạn muốn chặn trang của mình khỏi kết quả tìm
  kiếm, hãy sử dụng một phương pháp khác như bảo vệ bằng mật khẩu hoặc lệnh meta noindex.
* Một số công cụ tìm kiếm có nhiều tác nhân người dùng. Ví dụ: Google sử dụng Googlebot cho tìm kiếm không phải trả tiền
  và Googlebot-Image cho tìm kiếm hình ảnh. Hầu hết các tác nhân người dùng từ cùng một công cụ tìm kiếm đều tuân theo
  các
  quy tắc giống nhau, do đó không cần chỉ định lệnh cho từng trình thu thập thông tin của công cụ tìm kiếm, nhưng có khả
  năng làm như vậy sẽ cho phép bạn tinh chỉnh cách thu thập dữ liệu nội dung trang web của mình.
* Một công cụ tìm kiếm sẽ lưu trữ nội dung robots.txt, nhưng thường cập nhật nội dung được lưu trong bộ nhớ cache ít
  nhất
  một lần một ngày. Nếu bạn thay đổi tệp và muốn cập nhật tệp nhanh hơn so với hiện tại, bạn có thể gửi url robots.txt
  của
  mình cho Google.

## Robot.txt vs meta robots vs x-robots

Rất nhiều robot! Sự khác biệt giữa ba loại hướng dẫn robot này là gì? Trước hết, robots.txt là một tệp văn bản thực tế,
trong khi meta và x-robot là các chỉ thị meta. Ngoài những gì chúng thực sự là, cả ba đều phục vụ các chức năng khác
nhau. Robot.txt ra lệnh cho hành vi thu thập dữ liệu trên toàn trang web hoặc thư mục, trong khi meta và x-robot có thể
ra lệnh cho hành vi lập chỉ mục ở cấp độ trang riêng lẻ (hoặc phần tử trang).

## Nguồn

[moz.com](https://moz.com/learn/seo/robotstxt)