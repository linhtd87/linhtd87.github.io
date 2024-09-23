import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,d as i}from"./app-BXWQH2Hr.js";const e={},l=i(`<h1 id="lenh-tail-trong-linux" tabindex="-1"><a class="header-anchor" href="#lenh-tail-trong-linux"><span>Lệnh tail trong linux</span></a></h1><h2 id="la-gi" tabindex="-1"><a class="header-anchor" href="#la-gi"><span>Là gì?</span></a></h2><p>Tail là phần bổ sung của lệnh head. Đúng như tên gọi của nó, lệnh tail xuất ra N số dữ liệu cuối cùng của đầu vào đã<br> cho. Theo mặc định, lệnh tail in 10 dòng cuối cùng của các file được chỉ định. Nếu có nhiều tên file được cung cấp thì<br> tên file sẽ được đặt trước dữ liệu từ mỗi file đó.</p><h2 id="cu-phap" tabindex="-1"><a class="header-anchor" href="#cu-phap"><span>Cú pháp</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>tail [option] [file]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="vi-du-1" tabindex="-1"><a class="header-anchor" href="#vi-du-1"><span>Ví dụ 1:</span></a></h3><p>Hãy xem xét hai file có tên <code>state.txt</code>, chứa tất cả tên của các tiểu bang của Ấn Độ.<br> Nếu không có bất kỳ tùy chọn nào, chỉ 10 dòng cuối cùng của file đã chỉ định được hiển thị.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tail state.txt</span></span>
<span class="line"><span>Odisha</span></span>
<span class="line"><span>Punjab</span></span>
<span class="line"><span>Rajasthan</span></span>
<span class="line"><span>Sikkim</span></span>
<span class="line"><span>Tamil Nadu</span></span>
<span class="line"><span>Telangana</span></span>
<span class="line"><span>Tripura</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>West Bengal</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cac-tuy-chon" tabindex="-1"><a class="header-anchor" href="#cac-tuy-chon"><span>Các tùy chọn</span></a></h2><h3 id="_1-n-num" tabindex="-1"><a class="header-anchor" href="#_1-n-num"><span>1. -n &#39;num&#39;</span></a></h3><p>hiển thị số dòng cuối, thay vì 10 dòng<br> &#39;num&#39; là thứ bắt buộc phải chỉ định, nếu không nó sẽ hiển thị lỗi</p><h4 id="vi-du-2" tabindex="-1"><a class="header-anchor" href="#vi-du-2"><span>Ví dụ 2:</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tail -n 3 state.txt</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>West Bengal</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hoặc</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tail -3 state.txt</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>West Bengal</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lệnh tail cũng đi kèm với tùy chọn ‘+’ không có trong lệnh head. Với tùy chọn này, lệnh tail sẽ in dữ liệu bắt đầu từ số<br> dòng được chỉ định của file thay vì những dòng cuối cùng trong file. Đối với lệnh: tail + n tên_file, dữ liệu sẽ bắt đầu<br> in từ dòng số ‘n’ cho đến cuối file được chỉ định.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tail +25 state.txt</span></span>
<span class="line"><span>Telangana</span></span>
<span class="line"><span>Tripura</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>West Bengal</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-c-num" tabindex="-1"><a class="header-anchor" href="#_2-c-num"><span>2. -c &#39;num&#39;</span></a></h3><p>In các byte ‘num’ cuối cùng từ file được chỉ định. Dòng mới được tính là một ký tự duy nhất, vì vậy nếu tail in ra<br> một dòng mới, nó sẽ được tính là một byte. Trong tùy chọn này, bắt buộc phải viết -c theo sau là num dương hoặc âm<br> tùy thuộc vào yêu cầu. Với +num, nó hiển thị tất cả dữ liệu sau khi bỏ qua num byte từ phần bắt đầu của file được chỉ<br> định và với -num, nó hiển thị num byte cuối cùng từ file được chỉ định.</p><p>Lưu ý: Không có dấu dương hoặc âm trước num, lệnh sẽ hiển thị num byte cuối cùng từ file được chỉ định.</p><h4 id="vi-du-3" tabindex="-1"><a class="header-anchor" href="#vi-du-3"><span>Ví dụ 3:</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>With negative num</span></span>
<span class="line"><span>$ tail -c -6 state.txt</span></span>
<span class="line"><span>Bengal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OR</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ tail -c 6 state.txt</span></span>
<span class="line"><span>Bengal</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>With positive num</span></span>
<span class="line"><span>$ tail -c +263 state.txt</span></span>
<span class="line"><span>Nadu</span></span>
<span class="line"><span>Telangana</span></span>
<span class="line"><span>Tripura</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-q" tabindex="-1"><a class="header-anchor" href="#_3-q"><span>3. -q</span></a></h3><p>Nó được sử dụng nếu có nhiều hơn 1 file. Do lệnh này, tên file không được đặt trước dữ liệu từ mỗi file nữa.</p><h4 id="vi-du-4" tabindex="-1"><a class="header-anchor" href="#vi-du-4"><span>Ví dụ 4:</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Without using -q option</span></span>
<span class="line"><span>$ tail state.txt capital.txt</span></span>
<span class="line"><span>  state.txt</span></span>
<span class="line"><span>Odisha</span></span>
<span class="line"><span>Punjab</span></span>
<span class="line"><span>Rajasthan</span></span>
<span class="line"><span>Sikkim</span></span>
<span class="line"><span>Tamil Nadu</span></span>
<span class="line"><span>Telangana</span></span>
<span class="line"><span>Tripura</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>West Bengal</span></span>
<span class="line"><span>  capital.txt</span></span>
<span class="line"><span>Dispur</span></span>
<span class="line"><span>Patna</span></span>
<span class="line"><span>Raipur</span></span>
<span class="line"><span>Panaji</span></span>
<span class="line"><span>Gandhinagar</span></span>
<span class="line"><span>Chandigarh</span></span>
<span class="line"><span>Shimla</span></span>
<span class="line"><span>Srinagar</span></span>
<span class="line"><span>Ranchi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>With using -q option</span></span>
<span class="line"><span>$ tail -q state.txt capital.txt</span></span>
<span class="line"><span>Odisha</span></span>
<span class="line"><span>Punjab</span></span>
<span class="line"><span>Rajasthan</span></span>
<span class="line"><span>Sikkim</span></span>
<span class="line"><span>Tamil Nadu</span></span>
<span class="line"><span>Telangana</span></span>
<span class="line"><span>Tripura</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>West BengalDispur</span></span>
<span class="line"><span>Patna</span></span>
<span class="line"><span>Raipur</span></span>
<span class="line"><span>Panaji</span></span>
<span class="line"><span>Gandhinagar</span></span>
<span class="line"><span>Chandigarh</span></span>
<span class="line"><span>Shimla</span></span>
<span class="line"><span>Srinagar</span></span>
<span class="line"><span>Ranchi</span></span>
<span class="line"><span>Bengaluru</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-f" tabindex="-1"><a class="header-anchor" href="#_4-f"><span>4. -f</span></a></h3><p>Tùy chọn này chủ yếu được quản trị viên hệ thống sử dụng để theo dõi sự phát triển của các file nhật ký được viết bởi<br> nhiều chương trình Unix khi chúng đang chạy. Tùy chọn này hiển thị 10 dòng cuối cùng của file và sẽ cập nhật khi các<br> dòng mới được thêm vào.</p><p>Khi các dòng mới được ghi vào nhật ký, bảng điều khiển sẽ cập nhật các dòng mới. Lời nhắc không trả lại ngay cả sau khi<br> công việc kết thúc, vì vậy, phải sử dụng phím ngắt (interrupt key) để hủy bỏ lệnh này. Nói chung, các ứng dụng ghi thông<br> báo lỗi vào các file nhật ký. Bạn có thể sử dụng tùy chọn -f để kiểm tra những thông báo lỗi khi chúng xuất hiện trong<br> file nhật ký.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tail -f [logfile]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-v" tabindex="-1"><a class="header-anchor" href="#_5-v"><span>5. -v</span></a></h3><p>Bằng cách sử dụng tùy chọn này, tên file luôn được đặt trước dữ liệu từ file được chỉ định.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tail -v state.txt</span></span>
<span class="line"><span>==&gt; state.txt &lt;==</span></span>
<span class="line"><span>Odisha</span></span>
<span class="line"><span>Punjab</span></span>
<span class="line"><span>Rajasthan</span></span>
<span class="line"><span>Sikkim</span></span>
<span class="line"><span>Tamil Nadu</span></span>
<span class="line"><span>Telangana</span></span>
<span class="line"><span>Tripura</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>West Bengal</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-–version" tabindex="-1"><a class="header-anchor" href="#_6-–version"><span>6. –version</span></a></h3><p>Tùy chọn này được sử dụng để hiển thị phiên bản tail hiện đang chạy trên hệ thống của bạn.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tail --version</span></span>
<span class="line"><span>tail (GNU coreutils) 8.26</span></span>
<span class="line"><span>Packaged by Cygwin (8.26-1)</span></span>
<span class="line"><span>Copyright (C) 2016 Free Software Foundation, Inc.</span></span>
<span class="line"><span>License GPLv3+: GNU GPL version 3 or later .</span></span>
<span class="line"><span>This is free software: you are free to change and redistribute it.</span></span>
<span class="line"><span>There is NO WARRANTY, to the extent permitted by law.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Written by Paul Rubin, David MacKenzie, Ian Lance Taylor,</span></span>
<span class="line"><span>and Jim Meyering.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cac-ung-dung-cua-lenh-tail" tabindex="-1"><a class="header-anchor" href="#cac-ung-dung-cua-lenh-tail"><span>Các ứng dụng của lệnh tail</span></a></h2><h3 id="_1-cach-su-dung-tail-voi-pipe" tabindex="-1"><a class="header-anchor" href="#_1-cach-su-dung-tail-voi-pipe"><span>1. Cách sử dụng tail với pipe (|)</span></a></h3><p>Lệnh tail có thể kết hợp với nhiều lệnh khác của Unix.</p><h4 id="vi-du-5" tabindex="-1"><a class="header-anchor" href="#vi-du-5"><span>Ví dụ 5:</span></a></h4><p>Trong ví dụ sau, đầu ra của lệnh tail được đưa ra làm đầu vào cho lệnh sort với tùy chọn -r để sắp xếp 7 tên bang cuối<br> cùng đến từ file state.txt theo thứ tự ngược lại.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ tail -n 7 state.txt</span></span>
<span class="line"><span>Sikkim</span></span>
<span class="line"><span>Tamil Nadu</span></span>
<span class="line"><span>Telangana</span></span>
<span class="line"><span>Tripura</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>West Bengal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ tail -n 7 state.txt | sort -r</span></span>
<span class="line"><span>West Bengal</span></span>
<span class="line"><span>Uttarakhand</span></span>
<span class="line"><span>Uttar Pradesh</span></span>
<span class="line"><span>Tripura</span></span>
<span class="line"><span>Telangana</span></span>
<span class="line"><span>Tamil Nadu</span></span>
<span class="line"><span>Sikkim</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nó cũng có thể được nối với một hoặc nhiều bộ lọc để xử lý bổ sung.</p><h4 id="vi-du-6" tabindex="-1"><a class="header-anchor" href="#vi-du-6"><span>Ví dụ 6:</span></a></h4><p>Giống như trong ví dụ sau, chúng ta đang sử dụng<br> lệnh cat, head, tail và đầu ra của nó được lưu trữ trong tên file list.txt bằng &gt;.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ cat state.txt | head -n 20 | tail -n 5  &gt; list.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ cat list.txt</span></span>
<span class="line"><span>Manipur</span></span>
<span class="line"><span>Meghalaya</span></span>
<span class="line"><span>Mizoram</span></span>
<span class="line"><span>Nagaland</span></span>
<span class="line"><span>Odisha</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Điều gì đang xảy ra trong lệnh này, hãy thử khám phá nó. Lệnh cat đầu tiên cung cấp tất cả dữ liệu có trong file<br> state.txt và sau đó, pipe chuyển tất cả đầu ra từ lệnh cat sang lệnh head. Lệnh head cung cấp tất cả dữ liệu từ đầu (<br> dòng số 1) đến dòng số 20 và chuyển tất cả đầu ra từ lệnh head sang lệnh tail. Bây giờ, lệnh tail đưa ra 5 dòng cuối<br> cùng của dữ liệu và đầu ra chuyển đến tên file list.txt thông qua toán tử chỉ thị.</p><h3 id="_2-in-cac-dong-nam-giua-dong-m-va-n" tabindex="-1"><a class="header-anchor" href="#_2-in-cac-dong-nam-giua-dong-m-va-n"><span>2. In các dòng nằm giữa dòng M và N</span></a></h3><p>Với mục đích này, bạn sẽ phải sử dụng các lệnh head, tail và pipe (|). Lệnh là: head -M file_name | tail - (M-N), vì<br> dòng đầu tiên là M và lệnh tail cắt các dòng trong khoảng từ M đến N, bắt đầu từ cuối. Giả sử từ file state.txt, bạn<br> phải in các dòng từ 10 đến 20.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ head -n 20 state.txt | tail -10</span></span>
<span class="line"><span>Jharkhand</span></span>
<span class="line"><span>Karnataka</span></span>
<span class="line"><span>Kerala</span></span>
<span class="line"><span>Madhya Pradesh</span></span>
<span class="line"><span>Maharashtra</span></span>
<span class="line"><span>Manipur</span></span>
<span class="line"><span>Meghalaya</span></span>
<span class="line"><span>Mizoram</span></span>
<span class="line"><span>Nagaland</span></span>
<span class="line"><span>Odisha</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),t=[l];function p(c,d){return s(),a("div",null,t)}const u=n(e,[["render",p],["__file","lenh-tail-trong-linux.html.vue"]]),v=JSON.parse(`{"path":"/pages/Coding/lenh-tail-trong-linux.html","title":"Lệnh tail trong linux","lang":"vi-VN","frontmatter":{"title":"Lệnh tail trong linux","cover":"/assets/images/cover-cli.webp","icon":"file","order":1,"author":"Mr.Linh","date":"2020-01-01T00:00:00.000Z","category":["coding"],"tag":["tail","lệnh linux"],"sticky":false,"star":true,"copyright":"No Copyright","description":"Lệnh tail trong linux Là gì? Tail là phần bổ sung của lệnh head. Đúng như tên gọi của nó, lệnh tail xuất ra N số dữ liệu cuối cùng của đầu vào đã cho. Theo mặc định, lệnh tail i...","head":[["meta",{"property":"og:url","content":"https://linhtd.dev/pages/Coding/lenh-tail-trong-linux.html"}],["meta",{"property":"og:site_name","content":"linhtd.dev"}],["meta",{"property":"og:title","content":"Lệnh tail trong linux"}],["meta",{"property":"og:description","content":"Lệnh tail trong linux Là gì? Tail là phần bổ sung của lệnh head. Đúng như tên gọi của nó, lệnh tail xuất ra N số dữ liệu cuối cùng của đầu vào đã cho. Theo mặc định, lệnh tail i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://linhtd.dev/assets/images/cover-cli.webp"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:updated_time","content":"2024-06-08T16:53:32.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://linhtd.dev/assets/images/cover-cli.webp"}],["meta",{"name":"twitter:image:alt","content":"Lệnh tail trong linux"}],["meta",{"property":"article:author","content":"Mr.Linh"}],["meta",{"property":"article:tag","content":"tail"}],["meta",{"property":"article:tag","content":"lệnh linux"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-08T16:53:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lệnh tail trong linux\\",\\"image\\":[\\"https://linhtd.dev/assets/images/cover-cli.webp\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-08T16:53:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Linh\\"}]}"]]},"headers":[{"level":2,"title":"Là gì?","slug":"la-gi","link":"#la-gi","children":[]},{"level":2,"title":"Cú pháp","slug":"cu-phap","link":"#cu-phap","children":[{"level":3,"title":"Ví dụ 1:","slug":"vi-du-1","link":"#vi-du-1","children":[]}]},{"level":2,"title":"Các tùy chọn","slug":"cac-tuy-chon","link":"#cac-tuy-chon","children":[{"level":3,"title":"1. -n 'num'","slug":"_1-n-num","link":"#_1-n-num","children":[]},{"level":3,"title":"2. -c 'num'","slug":"_2-c-num","link":"#_2-c-num","children":[]},{"level":3,"title":"3. -q","slug":"_3-q","link":"#_3-q","children":[]},{"level":3,"title":"4. -f","slug":"_4-f","link":"#_4-f","children":[]},{"level":3,"title":"5. -v","slug":"_5-v","link":"#_5-v","children":[]},{"level":3,"title":"6. –version","slug":"_6-–version","link":"#_6-–version","children":[]}]},{"level":2,"title":"Các ứng dụng của lệnh tail","slug":"cac-ung-dung-cua-lenh-tail","link":"#cac-ung-dung-cua-lenh-tail","children":[{"level":3,"title":"1. Cách sử dụng tail với pipe (|)","slug":"_1-cach-su-dung-tail-voi-pipe","link":"#_1-cach-su-dung-tail-voi-pipe","children":[]},{"level":3,"title":"2. In các dòng nằm giữa dòng M và N","slug":"_2-in-cac-dong-nam-giua-dong-m-va-n","link":"#_2-in-cac-dong-nam-giua-dong-m-va-n","children":[]}]}],"git":{"createdTime":1699241736000,"updatedTime":1717865612000,"contributors":[{"name":"Linh","email":"linhtd@outlook.com","commits":1},{"name":"Trinh Duy Linh","email":"linh.td@trans-tech.vn","commits":1}]},"readingTime":{"minutes":5.03,"words":1508},"filePathRelative":"pages/Coding/lenh-tail-trong-linux.md","localizedDate":"1 tháng 1 năm 2020","excerpt":"\\n<h2>Là gì?</h2>\\n<p>Tail là phần bổ sung của lệnh head. Đúng như tên gọi của nó, lệnh tail xuất ra N số dữ liệu cuối cùng của đầu vào đã<br>\\ncho. Theo mặc định, lệnh tail in 10 dòng cuối cùng của các file được chỉ định. Nếu có nhiều tên file được cung cấp thì<br>\\ntên file sẽ được đặt trước dữ liệu từ mỗi file đó.</p>","autoDesc":true}`);export{u as comp,v as data};