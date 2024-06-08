import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as h,d as o}from"./app-Cyg7cs3j.js";const c={},e=o(`<h1 id="tep-robots-txt" tabindex="-1"><a class="header-anchor" href="#tep-robots-txt"><span>Tệp robots.txt</span></a></h1><h2 id="tep-robots-txt-la-gi" tabindex="-1"><a class="header-anchor" href="#tep-robots-txt-la-gi"><span>Tệp robots.txt là gì?</span></a></h2><p>Robot.txt là một tệp văn bản mà quản trị viên web tạo ra để hướng dẫn robot web (thường là robot công cụ tìm kiếm) cách<br> thu thập dữ liệu các trang trên trang web của họ. Tệp robots.txt là một phần của giao thức loại trừ robot (REP), một<br> nhóm các tiêu chuẩn web quy định cách robot thu thập dữ liệu web, truy cập và lập chỉ mục nội dung và phục vụ nội dung<br> đó cho người dùng. REP cũng bao gồm các chỉ thị như meta robot, cũng như các hướng dẫn trên page-, subdirectory- hoặc<br> site-wide về cách các công cụ tìm kiếm nên xử lý các liên kết (chẳng hạn như &quot;follow&quot; hoặc &quot;nofollow&quot;).</p><p>Trong thực tế, các tệp robots.txt cho biết liệu một số tác nhân người dùng nhất định (phần mềm thu thập dữ liệu web) có<br> thể hoặc không thể thu thập dữ liệu các phần của trang web hay không. Các hướng dẫn thu thập dữ liệu này được chỉ định<br> bằng cách &quot;disallowing&quot; hoặc &quot;allowing&quot; hành vi của một số (hoặc tất cả) tác nhân người dùng.</p><h3 id="đinh-dang-co-ban" tabindex="-1"><a class="header-anchor" href="#đinh-dang-co-ban"><span>Định dạng cơ bản:</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>User-agent: [user-agent name]</span></span>
<span class="line"><span>Disallow: [Chuỗi URL không được thu thập thông tin]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Cùng với nhau, hai dòng này được coi là một tệp robots.txt hoàn chỉnh - mặc dù một tệp rô bốt có thể chứa nhiều dòng tác<br> nhân và chỉ thị của người dùng (ví dụ: không cho phép, cho phép, độ trễ thu thập dữ liệu, v.v.).</p><p><a href="https://www.slate.com/robots.txt" target="_blank" rel="noopener noreferrer">https://www.slate.com/robots.txt</a></p><p>Trong tệp robots.txt , mỗi bộ lệnh tác nhân người dùng xuất hiện dưới dạng một tập hợp rời rạc, được phân tách bằng ngắt<br> dòng:</p><p>Chỉ thị tác nhân người dùng được chỉ định bởi ngắt dòng.<br> Trong tệp robots.txt có nhiều lệnh tác nhân người dùng, mỗi quy tắc không cho phép hoặc cho phép chỉ áp dụng cho (các)<br> tác nhân người dùng được chỉ định trong tập hợp phân tách ngắt dòng cụ thể đó. Nếu tệp chứa quy tắc áp dụng cho nhiều<br> tác nhân người dùng, trình thu thập thông tin sẽ chỉ chú ý đến (và làm theo các lệnh trong) nhóm hướng dẫn cụ thể nhất.</p><p>Đây là một ví dụ:<br><a href="https://www.buzzfeed.com/robots.txt" target="_blank" rel="noopener noreferrer">https://www.buzzfeed.com/robots.txt</a></p><p>Msnbot, discobot và Slurp đều được gọi cụ thể, vì vậy những tác nhân người dùng đó sẽ chỉ chú ý đến các chỉ thị trong<br> các phần của tệp robots.txt. Tất cả các tác nhân người dùng khác sẽ tuân theo các chỉ thị trong nhóm tác nhân người<br> dùng: *.</p><h2 id="vi-du-robots-txt" tabindex="-1"><a class="header-anchor" href="#vi-du-robots-txt"><span>Ví dụ robots.txt:</span></a></h2><p>Dưới đây là một vài ví dụ về robots.txt đang hoạt động cho một trang web:</p><h3 id="chan-tat-ca-trinh-thu-thap-du-lieu-web-khoi-tat-ca-noi-dung" tabindex="-1"><a class="header-anchor" href="#chan-tat-ca-trinh-thu-thap-du-lieu-web-khoi-tat-ca-noi-dung"><span>Chặn tất cả trình thu thập dữ liệu web khỏi tất cả nội dung</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>User-agent: * Disallow: /</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sử dụng cú pháp này trong tệp robots.txt sẽ yêu cầu tất cả các trình thu thập dữ liệu web không thu thập dữ liệu bất kỳ<br> trang nào trên trang web, bao gồm cả trang chủ.</p><h3 id="cho-phep-tat-ca-trinh-thu-thap-du-lieu-web-truy-cap-vao-tat-ca-noi-dung" tabindex="-1"><a class="header-anchor" href="#cho-phep-tat-ca-trinh-thu-thap-du-lieu-web-truy-cap-vao-tat-ca-noi-dung"><span>Cho phép tất cả trình thu thập dữ liệu web truy cập vào tất cả nội dung</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>User-agent: * Disallow:</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sử dụng cú pháp này trong tệp robots.txt yêu cầu trình thu thập dữ liệu web thu thập dữ liệu tất cả các trang<br> trên web, bao gồm cả trang chủ.</p><h3 id="chan-trinh-thu-thap-du-lieu-web-cu-the-tu-mot-thu-muc-cu-the" tabindex="-1"><a class="header-anchor" href="#chan-trinh-thu-thap-du-lieu-web-cu-the-tu-mot-thu-muc-cu-the"><span>Chặn trình thu thập dữ liệu web cụ thể từ một thư mục cụ thể</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>User-agent: Googlebot Disallow: /example-subfolder/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Cú pháp này chỉ yêu cầu trình thu thập thông tin của Google (tên tác nhân người dùng Googlebot) không thu thập dữ liệu<br> bất kỳ trang nào chứa chuỗi URL <a href="http://www.example.com/example-subfolder/" target="_blank" rel="noopener noreferrer">www.example.com/example-subfolder/</a>.</p><h3 id="chan-mot-trinh-thu-thap-du-lieu-web-cu-the-tu-mot-trang-web-cu-the" tabindex="-1"><a class="header-anchor" href="#chan-mot-trinh-thu-thap-du-lieu-web-cu-the-tu-mot-trang-web-cu-the"><span>Chặn một trình thu thập dữ liệu web cụ thể từ một trang web cụ thể</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>User-agent: Bingbot Disallow: /example-subfolder/blocked-page.html</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Cú pháp này chỉ cho trình thu thập thông tin của Bing (tên tác nhân người dùng Bing) biết để tránh thu thập dữ liệu<br> trang cụ thể tại <a href="http://www.example.com/example-subfolder/blocked-page.html" target="_blank" rel="noopener noreferrer">www.example.com/example-subfolder/blocked-page.html</a>.</p><h2 id="robot-txt-hoat-đong-nhu-the-nao" tabindex="-1"><a class="header-anchor" href="#robot-txt-hoat-đong-nhu-the-nao"><span>Robot.txt hoạt động như thế nào?</span></a></h2><p>Công cụ tìm kiếm có hai công việc chính:</p><ol><li>Thu thập dữ liệu web để khám phá nội dung;</li><li>Lập chỉ mục nội dung đó để nó có thể được phục vụ cho những người tìm kiếm đang tìm kiếm thông tin.</li></ol><p>Để thu thập dữ liệu các trang web, các công cụ tìm kiếm theo các liên kết để đi từ trang web này sang trang web khác -<br> cuối cùng, thu thập dữ liệu trên nhiều tỷ liên kết và trang web. Hành vi thu thập dữ liệu này đôi khi được gọi là &quot;<br> spidering&quot;.</p><p>Sau khi đến một trang web nhưng trước khi nhện nó, trình thu thập thông tin tìm kiếm sẽ tìm kiếm tệp robots.txt . Nếu<br> tìm thấy, trình thu thập thông tin sẽ đọc tệp đó trước khi tiếp tục qua trang. Vì tệp robots.txt chứa thông tin về cách<br> công cụ tìm kiếm nên thu thập dữ liệu, thông tin tìm thấy ở đó sẽ hướng dẫn hành động thu thập thông tin tiếp theo trên<br> trang web cụ thể này. Nếu tệp robots.txt không chứa bất kỳ lệnh nào không cho phép hoạt động của tác nhân người dùng (<br> hoặc nếu trang web không có tệp robots.txt), nó sẽ tiến hành thu thập thông tin khác trên trang web.</p><h2 id="ve-robots-txt-phai-biet" tabindex="-1"><a class="header-anchor" href="#ve-robots-txt-phai-biet"><span>Về robots.txt phải biết:</span></a></h2><p>(thảo luận chi tiết hơn bên dưới)</p><ul><li>Để được tìm thấy, tệp robots.txt phải được đặt trong thư mục cấp cao nhất của trang web.</li><li>Robot.txt phân biệt chữ hoa chữ thường: tệp phải được đặt tên là &quot;robots.txt&quot; (không phải Robot.txt, robot.TXT hoặc<br> cách khác).</li><li>Một số tác nhân người dùng (robot) có thể chọn bỏ qua tệp .txt rô bốt của bạn. Điều này đặc biệt phổ biến với các<br> trình thu thập thông tin bất chính hơn như robot phần mềm độc hại hoặc trình quét địa chỉ email.</li><li>Tệp /robots.txt có sẵn công khai: chỉ cần thêm /robots.txt vào cuối bất kỳ tên miền gốc nào để xem các chỉ thị của<br> trang web đó (nếu trang web đó có tệp robots.txt!). Điều này có nghĩa là bất kỳ ai cũng có thể xem những trang bạn làm<br> hoặc không muốn thu thập dữ liệu, vì vậy đừng sử dụng chúng để ẩn thông tin người dùng riêng tư.</li><li>Mỗi tên miền phụ trên một miền gốc sử dụng các robots.txt tệp riêng biệt. Điều này có nghĩa là cả <a href="http://blog.example.com" target="_blank" rel="noopener noreferrer">blog.example.com</a> và<br><a href="http://example.com" target="_blank" rel="noopener noreferrer">example.com</a> phải có robots.txt tệp riêng (<a href="http://blog.example.com/robots.txt" target="_blank" rel="noopener noreferrer">blog.example.com/robots.txt</a> và <a href="http://example.com/robots.txt" target="_blank" rel="noopener noreferrer">example.com/robots.txt</a>).</li><li>Nói chung, cách tốt nhất là chỉ ra vị trí của bất kỳ sơ đồ trang web nào được liên kết với miền này ở cuối tệp .txt<br> robot. Đây là một ví dụ:<br><a href="https://www.workday.com/robots.txt" target="_blank" rel="noopener noreferrer">https://www.workday.com/robots.txt</a></li></ul><h2 id="cu-phap-robots-txt-ky-thuat" tabindex="-1"><a class="header-anchor" href="#cu-phap-robots-txt-ky-thuat"><span>Cú pháp robots.txt kỹ thuật</span></a></h2><p>Cú pháp robots.txt có thể được coi là &quot;language&quot; của các tệp robots.txt. Có năm thuật ngữ phổ biến mà bạn có thể gặp<br> trong tệp robot. Chúng bao gồm:</p><ul><li><strong>User-agent</strong>: Trình thu thập dữ liệu web cụ thể mà bạn đang đưa ra hướng dẫn thu thập dữ liệu (thường là công<br> cụ tìm kiếm). Bạn có thể tìm thấy danh sách hầu hết các tác nhân người dùng tại đây.</li><li><strong>Disallow</strong>: Lệnh được sử dụng để yêu cầu tác nhân người dùng không thu thập dữ liệu URL cụ thể. Chỉ cho phép một<br> dòng &quot;Disallow:&quot; cho mỗi URL.</li><li><strong>Allow</strong> (Chỉ áp dụng cho Googlebot): Lệnh thông báo cho Googlebot rằng nó có thể truy cập vào một trang hoặc thư mục<br> con mặc dù trang mẹ hoặc thư mục con của nó có thể không được phép.</li><li><strong>Crawl-delay</strong>: Trình thu thập thông tin nên đợi bao nhiêu giây trước khi tải và thu thập dữ liệu nội dung<br> trang. Lưu ý rằng Googlebot không thừa nhận lệnh này, nhưng tốc độ thu thập dữ liệu có thể được đặt trong Google<br> Search Console.</li><li><strong>Sitemap</strong>: Được sử dụng để gọi ra vị trí của bất kỳ sơ đồ trang web XML nào được liên kết với URL này. Lưu ý<br> lệnh này chỉ được hỗ trợ bởi Google, Ask, Bing và Yahoo.</li></ul><h2 id="ket-hop-mau" tabindex="-1"><a class="header-anchor" href="#ket-hop-mau"><span>Kết hợp mẫu</span></a></h2><p>Khi nói đến các URL thực tế để chặn hoặc cho phép, các tệp robots.txt có thể khá phức tạp vì chúng cho phép sử dụng kết<br> hợp mẫu để bao gồm một loạt các tùy chọn URL có thể. Google và Bing đều tôn vinh hai biểu thức chính quy có thể được sử<br> dụng để xác định các trang hoặc thư mục con mà SEO muốn loại trừ. Hai ký tự này là dấu hoa thị (*) và ký hiệu đô la ($).</p><ul><li>&#39;*&#39; là ký tự đại diện đại diện cho bất kỳ chuỗi ký tự nào</li><li>$ khớp với cuối URL</li></ul><p>Google cung cấp một danh sách tuyệt vời các cú pháp và ví dụ khớp mẫu có thể<br> có <a href="https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=en&amp;visit_id=638337970781828345-500082943&amp;rd=1" target="_blank" rel="noopener noreferrer">ở đây</a>.</p><h2 id="robot-txt-đi-đau-tren-mot-trang-web" tabindex="-1"><a class="header-anchor" href="#robot-txt-đi-đau-tren-mot-trang-web"><span>Robot.txt đi đâu trên một trang web?</span></a></h2><p>Bất cứ khi nào họ đến một trang web, các công cụ tìm kiếm và các robot thu thập dữ liệu web khác (như trình thu thập<br> thông tin của Facebook, Facebot) đều biết để tìm kiếm tệp robots.txt . Tuy nhiên, họ sẽ chỉ tìm kiếm tệp đó ở một nơi cụ<br> thể: thư mục chính (thường là tên miền gốc hoặc trang chủ của bạn). Nếu tác nhân người dùng truy<br> cập <a href="http://www.example.com/robots.txt" target="_blank" rel="noopener noreferrer">www.example.com/robots.txt</a> và không tìm thấy tệp robot ở đó, nó sẽ cho rằng trang web không có tệp và tiến hành thu<br> thập dữ liệu mọi thứ trên trang (và thậm chí có thể trên toàn bộ trang web). Ngay cả khi trang robots.txt tồn tại ở<br><a href="http://example.com/index/robots.txt" target="_blank" rel="noopener noreferrer">example.com/index/robots.txt</a> hoặc <a href="http://www.example.com/homepage/robots.txt" target="_blank" rel="noopener noreferrer">www.example.com/homepage/robots.txt</a>, nó sẽ không được phát hiện bởi các tác nhân người<br> dùng và do đó trang web sẽ được xử lý như thể nó không có tệp robot nào cả.</p><p>Để đảm bảo tệp robots.txt của bạn được tìm thấy, hãy luôn bao gồm nó trong thư mục chính hoặc miền gốc của bạn.</p><h2 id="tai-sao-ban-can-robots-txt" tabindex="-1"><a class="header-anchor" href="#tai-sao-ban-can-robots-txt"><span>Tại sao bạn cần robots.txt?</span></a></h2><p>Robots.txt tệp kiểm soát quyền truy cập của trình thu thập thông tin vào các khu vực nhất định trên trang web của bạn.<br> Mặc dù điều này có thể rất nguy hiểm nếu bạn vô tình không cho phép Googlebot thu thập dữ liệu toàn bộ trang web của<br> mình (!!), nhưng có một số tình huống trong đó tệp robots.txt có thể rất tiện dụng.</p><p>Một số trường hợp sử dụng phổ biến bao gồm:</p><ul><li>Ngăn chặn nội dung trùng lặp xuất hiện trong SERPs (lưu ý rằng meta robot thường là lựa chọn tốt hơn cho việc này)</li><li>Giữ toàn bộ các phần của trang web ở chế độ riêng tư (ví dụ: trang web dàn dựng của nhóm kỹ thuật của bạn)</li><li>Giữ cho các trang kết quả tìm kiếm nội bộ không hiển thị trên SERP công khai</li><li>Chỉ định vị trí của (các) sơ đồ trang web</li><li>Ngăn các công cụ tìm kiếm lập chỉ mục các tệp nhất định trên trang web của bạn (hình ảnh, PDF, v.v.)</li><li>Chỉ định độ trễ thu thập dữ liệu để ngăn máy chủ của bạn bị quá tải khi trình thu thập thông tin tải nhiều phần nội<br> dung<br> cùng một lúc</li><li>Nếu không có khu vực nào trên trang web của bạn mà bạn muốn kiểm soát quyền truy cập tác nhân người dùng, bạn có thể<br> không cần tệp robots.txt.</li></ul><h2 id="kiem-tra-xem-ban-co-tep-txt-ro-bot-khong" tabindex="-1"><a class="header-anchor" href="#kiem-tra-xem-ban-co-tep-txt-ro-bot-khong"><span>Kiểm tra xem bạn có tệp .txt rô bốt không</span></a></h2><p>Bạn không chắc chắn nếu bạn có tệp robots.txt ? Chỉ cần nhập tên miền gốc của bạn, sau đó thêm /robots.txt vào cuối URL.<br> Ví dụ: tệp robot của Moz nằm ở <a href="http://moz.com/robots.txt" target="_blank" rel="noopener noreferrer">moz.com/robots.txt</a>.</p><p>Nếu không có trang .txt nào xuất hiện, bạn hiện không có trang .txt rô bốt (trực tiếp).</p><h2 id="cach-tao-tep-robots-txt" tabindex="-1"><a class="header-anchor" href="#cach-tao-tep-robots-txt"><span>Cách tạo tệp robots.txt</span></a></h2><p>Nếu bạn thấy mình không có tệp robots.txt hoặc muốn thay đổi tệp của mình, việc tạo một tệp là một quá trình đơn giản.<br> Bài viết này từ Google hướng dẫn quá trình tạo tệp robots.txt<br> và <a href="https://support.google.com/webmasters/answer/6062598?hl=en&amp;ref_topic=6061961" target="_blank" rel="noopener noreferrer">công cụ này</a> cho phép bạn kiểm tra xem<br> tệp của bạn có được thiết lập chính xác hay không.</p><h2 id="cac-phuong-phap-hay-nhat-ve-seo" tabindex="-1"><a class="header-anchor" href="#cac-phuong-phap-hay-nhat-ve-seo"><span>Các phương pháp hay nhất về SEO</span></a></h2><ul><li>Đảm bảo bạn không chặn bất kỳ nội dung hoặc phần nào trên trang web mà bạn muốn thu thập dữ liệu.</li><li>Liên kết trên các trang bị chặn bởi robots.txt sẽ không được theo dõi. Điều này có nghĩa là 1.) Trừ khi chúng cũng<br> được liên kết từ các trang có thể truy cập công cụ tìm kiếm khác (tức là các trang không bị chặn thông qua robots.txt,<br> meta robot, hoặc cách khác), các tài nguyên được liên kết sẽ không được thu thập dữ liệu và có thể không được lập chỉ<br> mục. 2.) Không có vốn chủ sở hữu liên kết nào có thể được chuyển từ trang bị chặn đến đích liên kết. Nếu bạn có các<br> trang<br> mà bạn muốn vốn chủ sở hữu được chuyển đến, hãy sử dụng một cơ chế chặn khác ngoài robots.txt.</li><li>Không sử dụng robots.txt để ngăn dữ liệu nhạy cảm (như thông tin người dùng cá nhân) xuất hiện trong kết quả SERP. Bởi<br> vì các trang khác có thể liên kết trực tiếp đến trang chứa thông tin cá nhân (do đó bỏ qua các chỉ thị robots.txt trên<br> tên<br> miền gốc hoặc trang chủ của bạn), nó vẫn có thể được lập chỉ mục. Nếu bạn muốn chặn trang của mình khỏi kết quả tìm<br> kiếm, hãy sử dụng một phương pháp khác như bảo vệ bằng mật khẩu hoặc lệnh meta noindex.</li><li>Một số công cụ tìm kiếm có nhiều tác nhân người dùng. Ví dụ: Google sử dụng Googlebot cho tìm kiếm không phải trả tiền<br> và Googlebot-Image cho tìm kiếm hình ảnh. Hầu hết các tác nhân người dùng từ cùng một công cụ tìm kiếm đều tuân theo<br> các<br> quy tắc giống nhau, do đó không cần chỉ định lệnh cho từng trình thu thập thông tin của công cụ tìm kiếm, nhưng có khả<br> năng làm như vậy sẽ cho phép bạn tinh chỉnh cách thu thập dữ liệu nội dung trang web của mình.</li><li>Một công cụ tìm kiếm sẽ lưu trữ nội dung robots.txt, nhưng thường cập nhật nội dung được lưu trong bộ nhớ cache ít<br> nhất<br> một lần một ngày. Nếu bạn thay đổi tệp và muốn cập nhật tệp nhanh hơn so với hiện tại, bạn có thể gửi url robots.txt<br> của<br> mình cho Google.</li></ul><h2 id="robot-txt-vs-meta-robots-vs-x-robots" tabindex="-1"><a class="header-anchor" href="#robot-txt-vs-meta-robots-vs-x-robots"><span>Robot.txt vs meta robots vs x-robots</span></a></h2><p>Rất nhiều robot! Sự khác biệt giữa ba loại hướng dẫn robot này là gì? Trước hết, robots.txt là một tệp văn bản thực tế,<br> trong khi meta và x-robot là các chỉ thị meta. Ngoài những gì chúng thực sự là, cả ba đều phục vụ các chức năng khác<br> nhau. Robot.txt ra lệnh cho hành vi thu thập dữ liệu trên toàn trang web hoặc thư mục, trong khi meta và x-robot có thể<br> ra lệnh cho hành vi lập chỉ mục ở cấp độ trang riêng lẻ (hoặc phần tử trang).</p><h2 id="nguon" tabindex="-1"><a class="header-anchor" href="#nguon"><span>Nguồn</span></a></h2><p><a href="https://moz.com/learn/seo/robotstxt" target="_blank" rel="noopener noreferrer">moz.com</a></p>`,59),r=[e];function a(i,g){return h(),n("div",null,r)}const b=t(c,[["render",a],["__file","tep-robots-txt-de-lam-gi.html.vue"]]),s=JSON.parse('{"path":"/pages/Coding/tep-robots-txt-de-lam-gi.html","title":"Tệp robots.txt để làm gì?","lang":"vi-VN","frontmatter":{"title":"Tệp robots.txt để làm gì?","cover":"/assets/images/cover-coding.jpg","icon":"file","order":1,"author":"Mr.Linh","date":"2020-01-01T00:00:00.000Z","category":["coding"],"tag":["seo website","tệp robots.txt để làm gì?"],"sticky":true,"star":true,"copyright":"No Copyright","description":"Tệp robots.txt Tệp robots.txt là gì? Robot.txt là một tệp văn bản mà quản trị viên web tạo ra để hướng dẫn robot web (thường là robot công cụ tìm kiếm) cách thu thập dữ liệu các...","head":[["meta",{"property":"og:url","content":"https://linhtd.dev/pages/Coding/tep-robots-txt-de-lam-gi.html"}],["meta",{"property":"og:site_name","content":"linhtd.dev"}],["meta",{"property":"og:title","content":"Tệp robots.txt để làm gì?"}],["meta",{"property":"og:description","content":"Tệp robots.txt Tệp robots.txt là gì? Robot.txt là một tệp văn bản mà quản trị viên web tạo ra để hướng dẫn robot web (thường là robot công cụ tìm kiếm) cách thu thập dữ liệu các..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://linhtd.dev/assets/images/cover-coding.jpg"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:updated_time","content":"2023-11-06T03:35:36.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://linhtd.dev/assets/images/cover-coding.jpg"}],["meta",{"name":"twitter:image:alt","content":"Tệp robots.txt để làm gì?"}],["meta",{"property":"article:author","content":"Mr.Linh"}],["meta",{"property":"article:tag","content":"seo website"}],["meta",{"property":"article:tag","content":"tệp robots.txt để làm gì?"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-06T03:35:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tệp robots.txt để làm gì?\\",\\"image\\":[\\"https://linhtd.dev/assets/images/cover-coding.jpg\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-06T03:35:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Linh\\"}]}"]]},"headers":[{"level":2,"title":"Tệp robots.txt là gì?","slug":"tep-robots-txt-la-gi","link":"#tep-robots-txt-la-gi","children":[{"level":3,"title":"Định dạng cơ bản:","slug":"đinh-dang-co-ban","link":"#đinh-dang-co-ban","children":[]}]},{"level":2,"title":"Ví dụ robots.txt:","slug":"vi-du-robots-txt","link":"#vi-du-robots-txt","children":[{"level":3,"title":"Chặn tất cả trình thu thập dữ liệu web khỏi tất cả nội dung","slug":"chan-tat-ca-trinh-thu-thap-du-lieu-web-khoi-tat-ca-noi-dung","link":"#chan-tat-ca-trinh-thu-thap-du-lieu-web-khoi-tat-ca-noi-dung","children":[]},{"level":3,"title":"Cho phép tất cả trình thu thập dữ liệu web truy cập vào tất cả nội dung","slug":"cho-phep-tat-ca-trinh-thu-thap-du-lieu-web-truy-cap-vao-tat-ca-noi-dung","link":"#cho-phep-tat-ca-trinh-thu-thap-du-lieu-web-truy-cap-vao-tat-ca-noi-dung","children":[]},{"level":3,"title":"Chặn trình thu thập dữ liệu web cụ thể từ một thư mục cụ thể","slug":"chan-trinh-thu-thap-du-lieu-web-cu-the-tu-mot-thu-muc-cu-the","link":"#chan-trinh-thu-thap-du-lieu-web-cu-the-tu-mot-thu-muc-cu-the","children":[]},{"level":3,"title":"Chặn một trình thu thập dữ liệu web cụ thể từ một trang web cụ thể","slug":"chan-mot-trinh-thu-thap-du-lieu-web-cu-the-tu-mot-trang-web-cu-the","link":"#chan-mot-trinh-thu-thap-du-lieu-web-cu-the-tu-mot-trang-web-cu-the","children":[]}]},{"level":2,"title":"Robot.txt hoạt động như thế nào?","slug":"robot-txt-hoat-đong-nhu-the-nao","link":"#robot-txt-hoat-đong-nhu-the-nao","children":[]},{"level":2,"title":"Về robots.txt phải biết:","slug":"ve-robots-txt-phai-biet","link":"#ve-robots-txt-phai-biet","children":[]},{"level":2,"title":"Cú pháp robots.txt kỹ thuật","slug":"cu-phap-robots-txt-ky-thuat","link":"#cu-phap-robots-txt-ky-thuat","children":[]},{"level":2,"title":"Kết hợp mẫu","slug":"ket-hop-mau","link":"#ket-hop-mau","children":[]},{"level":2,"title":"Robot.txt đi đâu trên một trang web?","slug":"robot-txt-đi-đau-tren-mot-trang-web","link":"#robot-txt-đi-đau-tren-mot-trang-web","children":[]},{"level":2,"title":"Tại sao bạn cần robots.txt?","slug":"tai-sao-ban-can-robots-txt","link":"#tai-sao-ban-can-robots-txt","children":[]},{"level":2,"title":"Kiểm tra xem bạn có tệp .txt rô bốt không","slug":"kiem-tra-xem-ban-co-tep-txt-ro-bot-khong","link":"#kiem-tra-xem-ban-co-tep-txt-ro-bot-khong","children":[]},{"level":2,"title":"Cách tạo tệp robots.txt","slug":"cach-tao-tep-robots-txt","link":"#cach-tao-tep-robots-txt","children":[]},{"level":2,"title":"Các phương pháp hay nhất về SEO","slug":"cac-phuong-phap-hay-nhat-ve-seo","link":"#cac-phuong-phap-hay-nhat-ve-seo","children":[]},{"level":2,"title":"Robot.txt vs meta robots vs x-robots","slug":"robot-txt-vs-meta-robots-vs-x-robots","link":"#robot-txt-vs-meta-robots-vs-x-robots","children":[]},{"level":2,"title":"Nguồn","slug":"nguon","link":"#nguon","children":[]}],"git":{"createdTime":1699241736000,"updatedTime":1699241736000,"contributors":[{"name":"Trinh Duy Linh","email":"linh.td@trans-tech.vn","commits":1}]},"readingTime":{"minutes":11.85,"words":3555},"filePathRelative":"pages/Coding/tep-robots-txt-de-lam-gi.md","localizedDate":"1 tháng 1 năm 2020","excerpt":"\\n<h2>Tệp robots.txt là gì?</h2>\\n<p>Robot.txt là một tệp văn bản mà quản trị viên web tạo ra để hướng dẫn robot web (thường là robot công cụ tìm kiếm) cách<br>\\nthu thập dữ liệu các trang trên trang web của họ. Tệp robots.txt là một phần của giao thức loại trừ robot (REP), một<br>\\nnhóm các tiêu chuẩn web quy định cách robot thu thập dữ liệu web, truy cập và lập chỉ mục nội dung và phục vụ nội dung<br>\\nđó cho người dùng. REP cũng bao gồm các chỉ thị như meta robot, cũng như các hướng dẫn trên page-, subdirectory- hoặc<br>\\nsite-wide về cách các công cụ tìm kiếm nên xử lý các liên kết (chẳng hạn như \\"follow\\" hoặc \\"nofollow\\").</p>","autoDesc":true}');export{b as comp,s as data};
