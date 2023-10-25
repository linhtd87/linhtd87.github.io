import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,f as a}from"./app-40423c6e.js";const d={},l=a(`<h1 id="lenh-tail-trong-linux" tabindex="-1"><a class="header-anchor" href="#lenh-tail-trong-linux" aria-hidden="true">#</a> Lệnh tail trong linux</h1><h2 id="la-gi" tabindex="-1"><a class="header-anchor" href="#la-gi" aria-hidden="true">#</a> Là gì?</h2><p>Tail là phần bổ sung của lệnh head. Đúng như tên gọi của nó, lệnh tail xuất ra N số dữ liệu cuối cùng của đầu vào đã<br> cho. Theo mặc định, lệnh tail in 10 dòng cuối cùng của các file được chỉ định. Nếu có nhiều tên file được cung cấp thì<br> tên file sẽ được đặt trước dữ liệu từ mỗi file đó.</p><h2 id="cu-phap" tabindex="-1"><a class="header-anchor" href="#cu-phap" aria-hidden="true">#</a> Cú pháp</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail [option] [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vi-du-1" tabindex="-1"><a class="header-anchor" href="#vi-du-1" aria-hidden="true">#</a> Ví dụ 1:</h3><p>Hãy xem xét hai file có tên <code>state.txt</code>, chứa tất cả tên của các tiểu bang của Ấn Độ.<br> Nếu không có bất kỳ tùy chọn nào, chỉ 10 dòng cuối cùng của file đã chỉ định được hiển thị.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tail state.txt
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cac-tuy-chon" tabindex="-1"><a class="header-anchor" href="#cac-tuy-chon" aria-hidden="true">#</a> Các tùy chọn</h2><h3 id="_1-n-num" tabindex="-1"><a class="header-anchor" href="#_1-n-num" aria-hidden="true">#</a> 1. -n &#39;num&#39;</h3><p>hiển thị số dòng cuối, thay vì 10 dòng<br> &#39;num&#39; là thứ bắt buộc phải chỉ định, nếu không nó sẽ hiển thị lỗi</p><h4 id="vi-du-2" tabindex="-1"><a class="header-anchor" href="#vi-du-2" aria-hidden="true">#</a> Ví dụ 2:</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tail -n 3 state.txt
Uttar Pradesh
Uttarakhand
West Bengal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hoặc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tail -3 state.txt
Uttar Pradesh
Uttarakhand
West Bengal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lệnh tail cũng đi kèm với tùy chọn ‘+’ không có trong lệnh head. Với tùy chọn này, lệnh tail sẽ in dữ liệu bắt đầu từ số<br> dòng được chỉ định của file thay vì những dòng cuối cùng trong file. Đối với lệnh: tail + n tên_file, dữ liệu sẽ bắt đầu<br> in từ dòng số ‘n’ cho đến cuối file được chỉ định.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tail +25 state.txt
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-c-num" tabindex="-1"><a class="header-anchor" href="#_2-c-num" aria-hidden="true">#</a> 2. -c &#39;num&#39;</h3><p>In các byte ‘num’ cuối cùng từ file được chỉ định. Dòng mới được tính là một ký tự duy nhất, vì vậy nếu tail in ra<br> một dòng mới, nó sẽ được tính là một byte. Trong tùy chọn này, bắt buộc phải viết -c theo sau là num dương hoặc âm<br> tùy thuộc vào yêu cầu. Với +num, nó hiển thị tất cả dữ liệu sau khi bỏ qua num byte từ phần bắt đầu của file được chỉ<br> định và với -num, nó hiển thị num byte cuối cùng từ file được chỉ định.</p><p>Lưu ý: Không có dấu dương hoặc âm trước num, lệnh sẽ hiển thị num byte cuối cùng từ file được chỉ định.</p><h4 id="vi-du-3" tabindex="-1"><a class="header-anchor" href="#vi-du-3" aria-hidden="true">#</a> Ví dụ 3:</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>With negative num
$ tail -c -6 state.txt
Bengal

OR

$ tail -c 6 state.txt
Bengal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>With positive num
$ tail -c +263 state.txt
Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-q" tabindex="-1"><a class="header-anchor" href="#_3-q" aria-hidden="true">#</a> 3. -q</h3><p>Nó được sử dụng nếu có nhiều hơn 1 file. Do lệnh này, tên file không được đặt trước dữ liệu từ mỗi file nữa.</p><h4 id="vi-du-4" tabindex="-1"><a class="header-anchor" href="#vi-du-4" aria-hidden="true">#</a> Ví dụ 4:</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Without using -q option
$ tail state.txt capital.txt
  state.txt
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
  capital.txt
Dispur
Patna
Raipur
Panaji
Gandhinagar
Chandigarh
Shimla
Srinagar
Ranchi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>With using -q option
$ tail -q state.txt capital.txt
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West BengalDispur
Patna
Raipur
Panaji
Gandhinagar
Chandigarh
Shimla
Srinagar
Ranchi
Bengaluru
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-f" tabindex="-1"><a class="header-anchor" href="#_4-f" aria-hidden="true">#</a> 4. -f</h3><p>Tùy chọn này chủ yếu được quản trị viên hệ thống sử dụng để theo dõi sự phát triển của các file nhật ký được viết bởi<br> nhiều chương trình Unix khi chúng đang chạy. Tùy chọn này hiển thị 10 dòng cuối cùng của file và sẽ cập nhật khi các<br> dòng mới được thêm vào.</p><p>Khi các dòng mới được ghi vào nhật ký, bảng điều khiển sẽ cập nhật các dòng mới. Lời nhắc không trả lại ngay cả sau khi<br> công việc kết thúc, vì vậy, phải sử dụng phím ngắt (interrupt key) để hủy bỏ lệnh này. Nói chung, các ứng dụng ghi thông<br> báo lỗi vào các file nhật ký. Bạn có thể sử dụng tùy chọn -f để kiểm tra những thông báo lỗi khi chúng xuất hiện trong<br> file nhật ký.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tail -f [logfile]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-v" tabindex="-1"><a class="header-anchor" href="#_5-v" aria-hidden="true">#</a> 5. -v</h3><p>Bằng cách sử dụng tùy chọn này, tên file luôn được đặt trước dữ liệu từ file được chỉ định.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tail -v state.txt
==&gt; state.txt &lt;==
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-–version" tabindex="-1"><a class="header-anchor" href="#_6-–version" aria-hidden="true">#</a> 6. –version</h3><p>Tùy chọn này được sử dụng để hiển thị phiên bản tail hiện đang chạy trên hệ thống của bạn.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tail --version
tail (GNU coreutils) 8.26
Packaged by Cygwin (8.26-1)
Copyright (C) 2016 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later .
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Paul Rubin, David MacKenzie, Ian Lance Taylor,
and Jim Meyering.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cac-ung-dung-cua-lenh-tail" tabindex="-1"><a class="header-anchor" href="#cac-ung-dung-cua-lenh-tail" aria-hidden="true">#</a> Các ứng dụng của lệnh tail</h2><h3 id="_1-cach-su-dung-tail-voi-pipe" tabindex="-1"><a class="header-anchor" href="#_1-cach-su-dung-tail-voi-pipe" aria-hidden="true">#</a> 1. Cách sử dụng tail với pipe (|)</h3><p>Lệnh tail có thể kết hợp với nhiều lệnh khác của Unix.</p><h4 id="vi-du-5" tabindex="-1"><a class="header-anchor" href="#vi-du-5" aria-hidden="true">#</a> Ví dụ 5:</h4><p>Trong ví dụ sau, đầu ra của lệnh tail được đưa ra làm đầu vào cho lệnh sort với tùy chọn -r để sắp xếp 7 tên bang cuối<br> cùng đến từ file state.txt theo thứ tự ngược lại.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tail -n 7 state.txt
Sikkim
Tamil Nadu
Telangana
Tripura
Uttar Pradesh
Uttarakhand
West Bengal

$ tail -n 7 state.txt | sort -r
West Bengal
Uttarakhand
Uttar Pradesh
Tripura
Telangana
Tamil Nadu
Sikkim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nó cũng có thể được nối với một hoặc nhiều bộ lọc để xử lý bổ sung.</p><h4 id="vi-du-6" tabindex="-1"><a class="header-anchor" href="#vi-du-6" aria-hidden="true">#</a> Ví dụ 6:</h4><p>Giống như trong ví dụ sau, chúng ta đang sử dụng<br> lệnh cat, head, tail và đầu ra của nó được lưu trữ trong tên file list.txt bằng &gt;.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cat state.txt | head -n 20 | tail -n 5  &gt; list.txt

$ cat list.txt
Manipur
Meghalaya
Mizoram
Nagaland
Odisha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Điều gì đang xảy ra trong lệnh này, hãy thử khám phá nó. Lệnh cat đầu tiên cung cấp tất cả dữ liệu có trong file<br> state.txt và sau đó, pipe chuyển tất cả đầu ra từ lệnh cat sang lệnh head. Lệnh head cung cấp tất cả dữ liệu từ đầu (<br> dòng số 1) đến dòng số 20 và chuyển tất cả đầu ra từ lệnh head sang lệnh tail. Bây giờ, lệnh tail đưa ra 5 dòng cuối<br> cùng của dữ liệu và đầu ra chuyển đến tên file list.txt thông qua toán tử chỉ thị.</p><h3 id="_2-in-cac-dong-nam-giua-dong-m-va-n" tabindex="-1"><a class="header-anchor" href="#_2-in-cac-dong-nam-giua-dong-m-va-n" aria-hidden="true">#</a> 2. In các dòng nằm giữa dòng M và N</h3><p>Với mục đích này, bạn sẽ phải sử dụng các lệnh head, tail và pipe (|). Lệnh là: head -M file_name | tail - (M-N), vì<br> dòng đầu tiên là M và lệnh tail cắt các dòng trong khoảng từ M đến N, bắt đầu từ cuối. Giả sử từ file state.txt, bạn<br> phải in các dòng từ 10 đến 20.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ head -n 20 state.txt | tail -10
Jharkhand
Karnataka
Kerala
Madhya Pradesh
Maharashtra
Manipur
Meghalaya
Mizoram
Nagaland
Odisha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),t=[l];function s(c,r){return i(),e("div",null,t)}const h=n(d,[["render",s],["__file","lenh-tail-trong-linux.html.vue"]]);export{h as default};
