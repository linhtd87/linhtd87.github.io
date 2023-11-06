const e=JSON.parse('{"key":"v-899fcda4","path":"/pages/Coding/cac-lenh-docker-thuong-su-dung.html","title":"Các lệnh docker thường sử dung - Docker CLI","lang":"vi-VN","frontmatter":{"title":"Các lệnh docker thường sử dung - Docker CLI","cover":"/assets/images/cover-coding.jpg","icon":"file","order":1,"author":"Mr.Linh","date":"2020-01-01T00:00:00.000Z","category":["coding"],"tag":["docker","lệnh linux"],"sticky":false,"star":true,"copyright":"No Copyright","description":"Các lệnh docker thường sử dung - Docker CLI 1. kiểm tra version docker --version 2. kiểm tra thông tin các image có trên docker hub","head":[["meta",{"property":"og:url","content":"https://linhtd.site/pages/Coding/cac-lenh-docker-thuong-su-dung.html"}],["meta",{"property":"og:site_name","content":"LinhTD.site"}],["meta",{"property":"og:title","content":"Các lệnh docker thường sử dung - Docker CLI"}],["meta",{"property":"og:description","content":"Các lệnh docker thường sử dung - Docker CLI 1. kiểm tra version docker --version 2. kiểm tra thông tin các image có trên docker hub"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://linhtd.site/assets/images/cover-coding.jpg"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:updated_time","content":"2023-11-06T03:35:36.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Các lệnh docker thường sử dung - Docker CLI"}],["meta",{"property":"article:author","content":"Mr.Linh"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"lệnh linux"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-06T03:35:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Các lệnh docker thường sử dung - Docker CLI\\",\\"image\\":[\\"https://linhtd.site/assets/images/cover-coding.jpg\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-06T03:35:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Linh\\"}]}"]]},"headers":[{"level":2,"title":"1. kiểm tra version","slug":"_1-kiem-tra-version","link":"#_1-kiem-tra-version","children":[]},{"level":2,"title":"2. kiểm tra thông tin các image có trên docker hub","slug":"_2-kiem-tra-thong-tin-cac-image-co-tren-docker-hub","link":"#_2-kiem-tra-thong-tin-cac-image-co-tren-docker-hub","children":[]},{"level":2,"title":"3. tải các image trên docker hub về","slug":"_3-tai-cac-image-tren-docker-hub-ve","link":"#_3-tai-cac-image-tren-docker-hub-ve","children":[]},{"level":2,"title":"4. liệt kê các images có trên máy tính","slug":"_4-liet-ke-cac-images-co-tren-may-tinh","link":"#_4-liet-ke-cac-images-co-tren-may-tinh","children":[]},{"level":2,"title":"5. tạo 1 container với images của bạn","slug":"_5-tao-1-container-voi-images-cua-ban","link":"#_5-tao-1-container-voi-images-cua-ban","children":[]},{"level":2,"title":"6. liệt kê các container đang chạy","slug":"_6-liet-ke-cac-container-đang-chay","link":"#_6-liet-ke-cac-container-đang-chay","children":[]},{"level":2,"title":"7. dừng 1 container đang chạy","slug":"_7-dung-1-container-đang-chay","link":"#_7-dung-1-container-đang-chay","children":[]},{"level":2,"title":"8. start 1 container đã dừng","slug":"_8-start-1-container-đa-dung","link":"#_8-start-1-container-đa-dung","children":[]},{"level":2,"title":"9. xóa một container đã tạo","slug":"_9-xoa-mot-container-đa-tao","link":"#_9-xoa-mot-container-đa-tao","children":[]},{"level":2,"title":"10. chạy 1 lệnh trong container","slug":"_10-chay-1-lenh-trong-container","link":"#_10-chay-1-lenh-trong-container","children":[]},{"level":2,"title":"11. docker compose","slug":"_11-docker-compose","link":"#_11-docker-compose","children":[{"level":3,"title":"11.1 khởi động các container","slug":"_11-1-khoi-đong-cac-container","link":"#_11-1-khoi-đong-cac-container","children":[]},{"level":3,"title":"11.2 dừng và xóa các container","slug":"_11-2-dung-va-xoa-cac-container","link":"#_11-2-dung-va-xoa-cac-container","children":[]},{"level":3,"title":"11.3 khởi động lại các container","slug":"_11-3-khoi-đong-lai-cac-container","link":"#_11-3-khoi-đong-lai-cac-container","children":[]},{"level":3,"title":"11.4 dừng các container","slug":"_11-4-dung-cac-container","link":"#_11-4-dung-cac-container","children":[]},{"level":3,"title":"11.5 xóa các container không sử dụng","slug":"_11-5-xoa-cac-container-khong-su-dung","link":"#_11-5-xoa-cac-container-khong-su-dung","children":[]},{"level":3,"title":"11.6 thực hiện các lệnh trên một container","slug":"_11-6-thuc-hien-cac-lenh-tren-mot-container","link":"#_11-6-thuc-hien-cac-lenh-tren-mot-container","children":[]},{"level":3,"title":"11.7 xem logs","slug":"_11-7-xem-logs","link":"#_11-7-xem-logs","children":[]}]}],"git":{"createdTime":1699241736000,"updatedTime":1699241736000,"contributors":[{"name":"Trinh Duy Linh","email":"linh.td@trans-tech.vn","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"pages/Coding/cac-lenh-docker-thuong-su-dung.md","localizedDate":"1 tháng 1 năm 2020","excerpt":"<h1> Các lệnh docker thường sử dung - Docker CLI</h1>\\n<h2> 1. kiểm tra version</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>docker --version\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><h2> 2. kiểm tra thông tin các image có trên docker hub</h2>","autoDesc":true}');export{e as data};
