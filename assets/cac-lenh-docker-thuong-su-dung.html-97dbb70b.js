import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,f as i}from"./app-67dd23dd.js";const d={},r=i(`<h1 id="cac-lenh-docker-thuong-su-dung-docker-cli" tabindex="-1"><a class="header-anchor" href="#cac-lenh-docker-thuong-su-dung-docker-cli" aria-hidden="true">#</a> Các lệnh docker thường sử dung - Docker CLI</h1><h2 id="_1-kiem-tra-version" tabindex="-1"><a class="header-anchor" href="#_1-kiem-tra-version" aria-hidden="true">#</a> 1. kiểm tra version</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-kiem-tra-thong-tin-cac-image-co-tren-docker-hub" tabindex="-1"><a class="header-anchor" href="#_2-kiem-tra-thong-tin-cac-image-co-tren-docker-hub" aria-hidden="true">#</a> 2. kiểm tra thông tin các image có trên docker hub</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ví dụ: docker search ubuntu</p><h2 id="_3-tai-cac-image-tren-docker-hub-ve" tabindex="-1"><a class="header-anchor" href="#_3-tai-cac-image-tren-docker-hub-ve" aria-hidden="true">#</a> 3. tải các image trên docker hub về</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ví dụ: docker pull ubuntu</p><h2 id="_4-liet-ke-cac-images-co-tren-may-tinh" tabindex="-1"><a class="header-anchor" href="#_4-liet-ke-cac-images-co-tren-may-tinh" aria-hidden="true">#</a> 4. liệt kê các images có trên máy tính</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
docker image rm &lt;image&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-tao-1-container-voi-images-cua-ban" tabindex="-1"><a class="header-anchor" href="#_5-tao-1-container-voi-images-cua-ban" aria-hidden="true">#</a> 5. tạo 1 container với images của bạn</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ví dụ: docker run -it ubuntu (tạo 1 container với image ubuntu, tham số -it vào ternimal của container ngay)</p><h2 id="_6-liet-ke-cac-container-đang-chay" tabindex="-1"><a class="header-anchor" href="#_6-liet-ke-cac-container-đang-chay" aria-hidden="true">#</a> 6. liệt kê các container đang chạy</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-dung-1-container-đang-chay" tabindex="-1"><a class="header-anchor" href="#_7-dung-1-container-đang-chay" aria-hidden="true">#</a> 7. dừng 1 container đang chạy</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ví dụ: docker stop 03a1</p><h2 id="_8-start-1-container-đa-dung" tabindex="-1"><a class="header-anchor" href="#_8-start-1-container-đa-dung" aria-hidden="true">#</a> 8. start 1 container đã dừng</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ví dụ: docker start 03a1</p><h2 id="_9-xoa-mot-container-đa-tao" tabindex="-1"><a class="header-anchor" href="#_9-xoa-mot-container-đa-tao" aria-hidden="true">#</a> 9. xóa một container đã tạo</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-chay-1-lenh-trong-container" tabindex="-1"><a class="header-anchor" href="#_10-chay-1-lenh-trong-container" aria-hidden="true">#</a> 10. chạy 1 lệnh trong container</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-docker-compose" tabindex="-1"><a class="header-anchor" href="#_11-docker-compose" aria-hidden="true">#</a> 11. docker compose</h2><h3 id="_11-1-khoi-đong-cac-container" tabindex="-1"><a class="header-anchor" href="#_11-1-khoi-đong-cac-container" aria-hidden="true">#</a> 11.1 khởi động các container</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-2-dung-va-xoa-cac-container" tabindex="-1"><a class="header-anchor" href="#_11-2-dung-va-xoa-cac-container" aria-hidden="true">#</a> 11.2 dừng và xóa các container</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-3-khoi-đong-lai-cac-container" tabindex="-1"><a class="header-anchor" href="#_11-3-khoi-đong-lai-cac-container" aria-hidden="true">#</a> 11.3 khởi động lại các container</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-4-dung-cac-container" tabindex="-1"><a class="header-anchor" href="#_11-4-dung-cac-container" aria-hidden="true">#</a> 11.4 dừng các container</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-5-xoa-cac-container-khong-su-dung" tabindex="-1"><a class="header-anchor" href="#_11-5-xoa-cac-container-khong-su-dung" aria-hidden="true">#</a> 11.5 xóa các container không sử dụng</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose rm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-6-thuc-hien-cac-lenh-tren-mot-container" tabindex="-1"><a class="header-anchor" href="#_11-6-thuc-hien-cac-lenh-tren-mot-container" aria-hidden="true">#</a> 11.6 thực hiện các lệnh trên một container</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose exec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-7-xem-logs" tabindex="-1"><a class="header-anchor" href="#_11-7-xem-logs" aria-hidden="true">#</a> 11.7 xem logs</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose logs &lt;services&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ví dụ:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec d8593 ls -la /root
docker exec -it app composer install
docker exec -it app php artisan migrate:fresh
docker exec -it app bash
docker exec -it app sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),c=[r];function t(s,o){return a(),n("div",null,c)}const u=e(d,[["render",t],["__file","cac-lenh-docker-thuong-su-dung.html.vue"]]);export{u as default};
