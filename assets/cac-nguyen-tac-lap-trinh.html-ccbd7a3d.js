import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as t,c as p,a as n,b as s,d as e,f as l}from"./app-77b1b31c.js";const o={},d=l(`<h1 id="cac-nguyen-tac-lap-trinh" tabindex="-1"><a class="header-anchor" href="#cac-nguyen-tac-lap-trinh" aria-hidden="true">#</a> Các nguyên tắc lập trình</h1><h2 id="solid" tabindex="-1"><a class="header-anchor" href="#solid" aria-hidden="true">#</a> SOLID</h2><p>Trong thế giới năng động của phát triển phần mềm, việc viết mã có thể duy trì và mở rộng là rất quan trọng đối với sự<br> thành công của bất kỳ dự án nào. Các nguyên tắc thiết kế SOLID cung cấp một bộ hướng dẫn có thể giúp các nhà phát triển<br> đạt được chính xác điều đó. Được phát triển bởi Robert C. Martin (Uncle Bob), những nguyên tắc này đã trở thành nền tảng<br> của kiến trúc phần mềm hiện đại. Trong bài đăng này, tôi sẽ khám phá sâu từng nguyên tắc SOLID, hiểu tầm quan trọng của<br> nó và tìm hiểu cách áp dụng chúng một cách hiệu quả với các ví dụ mã hóa thực tế.</p><h3 id="_1-nguyen-tac-trach-nhiem-duy-nhat-single-responsibility-principle-srp" tabindex="-1"><a class="header-anchor" href="#_1-nguyen-tac-trach-nhiem-duy-nhat-single-responsibility-principle-srp" aria-hidden="true">#</a> 1. Nguyên tắc trách nhiệm duy nhất (Single Responsibility Principle SRP):</h3><p>Nguyên tắc trách nhiệm duy nhất nhấn mạnh rằng một lớp học chỉ nên có một lý do để thay đổi. Nói cách khác, một lớp<br> học nên có một trách nhiệm hoặc nhiệm vụ duy nhất. Bằng cách tuân thủ SRP, chúng tôi đảm bảo rằng mỗi lớp có một mục<br> đích rõ ràng, làm cho mã trở nên mô-đun hơn, dễ bảo trì hơn và dễ hiểu hơn.</p><p>Hãy minh họa SRP bằng một ví dụ:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Bad Practice - One class with multiple responsibilities</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OrderProcessingService</span>
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">ProcessOrder</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token comment">// ... Process the order ...</span>
   <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">SendEmailConfirmation</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Send email confirmation ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">GenerateInvoice</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Generate the invoice ...</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Good Practice - Separate classes with single responsibility</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OrderProcessor</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">ProcessOrder</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Process the order ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EmailService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">SendEmailConfirmation</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Send email confirmation ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoiceGenerator</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">GenerateInvoice</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Generate the invoice ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-nguyen-tac-mo-đong-open-closed-principle-ocp" tabindex="-1"><a class="header-anchor" href="#_2-nguyen-tac-mo-đong-open-closed-principle-ocp" aria-hidden="true">#</a> 2. Nguyên tắc mở-đóng (Open-Closed Principle OCP):</h3><p>Nguyên tắc đóng mở gợi ý rằng các thực thể phần mềm nên được mở để mở rộng nhưng đóng để sửa đổi. Bằng cách sử dụng<br> các giao diện, chúng tôi tuân thủ OCP và tạo ra các hệ thống linh hoạt và thích ứng hơn có thể dễ dàng mở rộng mà<br> không thay đổi mã hiện có.</p><p>Hãy xem cách áp dụng OCP:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Bad Practice - Modifying existing class</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Shape</span>
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> virtual double <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token comment">// ... Calculate area ...</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
   
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Circle</span> <span class="token punctuation">:</span> Shape
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> override double <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token comment">// ... Calculate circle area ...</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
   
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Square</span> <span class="token punctuation">:</span> Shape
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> override double <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token comment">// ... Calculate square area ...</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Good Practice - Extending behavior through interfaces</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">IShape</span>
<span class="token punctuation">{</span>
    double <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Circle</span> <span class="token punctuation">:</span> IShape
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> double <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Calculate circle area ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Square</span> <span class="token punctuation">:</span> IShape
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> double <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Calculate square area ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-nguyen-tac-thay-the-liskov-liskov-substitution-principle-lsp" tabindex="-1"><a class="header-anchor" href="#_3-nguyen-tac-thay-the-liskov-liskov-substitution-principle-lsp" aria-hidden="true">#</a> 3. Nguyên tắc thay thế Liskov (Liskov Substitution Principle LSP):</h3><p>Nguyên lý thay thế Liskov nhấn mạnh rằng các đối tượng của các lớp dẫn xuất nên được thay thế cho các đối tượng của<br> lớp cơ sở mà không ảnh hưởng đến tính chính xác của chương trình. Bằng cách tuân theo LSP, chúng tôi đảm bảo rằng các<br> lớp phái sinh có thể thay thế liền mạch các đối tác lớp cơ sở của chúng, thúc đẩy tính nhất quán và khả năng bảo trì<br> mã.</p><p>Hãy duy trì LSP:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Bad Practice - Violating LSP</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Bird</span>
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> virtual <span class="token keyword type-declaration">void</span> <span class="token function">Fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token comment">// ... Fly like a bird ...</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Penguin</span> <span class="token punctuation">:</span> Bird
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> override <span class="token keyword type-declaration">void</span> <span class="token function">Fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NotSupportedException</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Penguins cannot fly.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Good Practice - Upholding LSP</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">IFlyable</span>
<span class="token punctuation">{</span>
    <span class="token keyword type-declaration">void</span> <span class="token function">Fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Bird</span> <span class="token punctuation">:</span> IFlyable
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">Fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token comment">// ... Fly like a bird ...</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Penguin</span> <span class="token punctuation">:</span> IFlyable
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">Fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token comment">// Penguins cannot fly, but still conform to the interface.</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-nguyen-tac-phan-tach-giao-dien-interface-segregation-principle-isp" tabindex="-1"><a class="header-anchor" href="#_4-nguyen-tac-phan-tach-giao-dien-interface-segregation-principle-isp" aria-hidden="true">#</a> 4. Nguyên tắc phân tách giao diện (Interface Segregation Principle ISP):</h3><p>Nguyên tắc phân tách giao diện khuyên bạn nên tách các giao diện thành các giao diện nhỏ hơn, tập trung hơn, thay vì<br> có các giao diện lớn, nguyên khối. Bằng cách tuân thủ ISP, chúng tôi tạo ra các giao diện gọn gàng và tập trung hơn,<br> cho phép khả năng bảo trì và khả năng thích ứng mã tốt hơn.</p><p>Hãy triển khai ISP:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Bad Practice - Large, monolithic interface</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">IWorker</span>
<span class="token punctuation">{</span>
   <span class="token keyword type-declaration">void</span> <span class="token function">Work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword type-declaration">void</span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword type-declaration">void</span> <span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Robot</span> <span class="token punctuation">:</span> IWorker
<span class="token punctuation">{</span>
    <span class="token comment">// Implementing unnecessary methods for a robot.</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Human</span> <span class="token punctuation">:</span> IWorker
<span class="token punctuation">{</span>
    <span class="token comment">// Implementing unnecessary methods for a human.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Good Practice - Segregated interfaces</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">IWorkable</span>
<span class="token punctuation">{</span>
    <span class="token keyword type-declaration">void</span> <span class="token function">Work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name-definition class-name">IEatable</span>
<span class="token punctuation">{</span>
    <span class="token keyword type-declaration">void</span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name-definition class-name">ISleepable</span>
<span class="token punctuation">{</span>
    <span class="token keyword type-declaration">void</span> <span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Robot</span> <span class="token punctuation">:</span> IWorkable
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">Work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
   <span class="token comment">// ... Rob   ot work logic ...</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Human</span> <span class="token punctuation">:</span> IWorkable<span class="token punctuation">,</span> IEatable<span class="token punctuation">,</span> ISleepable
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">Work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
    <span class="token comment">// ... Human work logic ...</span>
   <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Human eat logic ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Human sleep logic ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-nguyen-tac-đao-nguoc-phu-thuoc-dependency-inversion-principle-dip" tabindex="-1"><a class="header-anchor" href="#_5-nguyen-tac-đao-nguoc-phu-thuoc-dependency-inversion-principle-dip" aria-hidden="true">#</a> 5. Nguyên tắc đảo ngược phụ thuộc (Dependency Inversion Principle DIP):</h3><p>Nguyên tắc đảo ngược phụ thuộc đề nghị dựa vào trừu tượng hơn là triển khai cụ thể. Bằng cách tuân theo DIP, chúng<br> tôi thúc đẩy <strong>loose coupling</strong> và cho phép kiểm tra dễ dàng hơn, khả năng mở rộng và thiết kế mô-đun hơn.</p><p>Hãy áp dụng DIP:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Bad Practice - High-level module depends on low-level module</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OrderProcessor</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> EmailService _emailService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">OrderProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _emailService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">ProcessOrder</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Process the order ...</span>
        _emailService<span class="token operator">.</span><span class="token function">SendEmailConfirmation</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Good Practice - High-level module depends on abstraction</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">IEmailService</span>
<span class="token punctuation">{</span>
    <span class="token keyword type-declaration">void</span> <span class="token function">SendEmailConfirmation</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EmailService</span> <span class="token punctuation">:</span> IEmailService
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">SendEmailConfirmation</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Send email confirmation ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">OrderProcessor</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> IEmailService _emailService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">OrderProcessor</span><span class="token punctuation">(</span>IEmailService emailService<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _emailService <span class="token operator">=</span> emailService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword type-declaration">void</span> <span class="token function">ProcessOrder</span><span class="token punctuation">(</span>Order order<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ... Process the order ...</span>
        _emailService<span class="token operator">.</span><span class="token function">SendEmailConfirmation</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kết hợp các nguyên tắc <strong>SOLID</strong> trong hành trình phát triển phần mềm của bạn có thể mang tính chuyển đổi. Những nguyên<br> tắc<br> này trao quyền cho các nhà phát triển viết mã sạch hơn, dễ bảo trì hơn và có thể mở rộng hơn, dẫn đến các giải pháp phần<br> mềm mạnh mẽ và có thể mở rộng. Khi bạn áp dụng <strong>SRP</strong>, <strong>OCP</strong>, <strong>LSP</strong>, <strong>ISP</strong> và <strong>DIP</strong> trong các dự án của mình,<br> bạn sẽ chứng kiến sự<br> phát triển của sức mạnh mã hóa của mình và sự xuất hiện của mã thực sự sạch sẽ đứng trước thử thách của thời gian. Nắm<br> bắt các nguyên tắc <strong>SOLID</strong> và nâng cao kỹ năng mã hóa của bạn lên một tầm cao mới!</p><h2 id="nguon" tabindex="-1"><a class="header-anchor" href="#nguon" aria-hidden="true">#</a> <strong>Nguồn:</strong></h2>`,30),u=n("br",null,null,-1),r={href:"https://github.com/kawser2133/SOLID-design-principles",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),k={href:"https://thevaluable.dev/dry-principle-cost-benefit-example/",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const a=c("ExternalLinkIcon");return t(),p("div",null,[d,n("p",null,[s("[1]"),u,n("a",r,[s("kawser2133/SOLID-design-principles"),e(a)])]),n("p",null,[s("[2]"),v,n("a",k,[s("The DRY Principle: Benefits and Costs with Examples"),e(a)])])])}const f=i(o,[["render",m],["__file","cac-nguyen-tac-lap-trinh.html.vue"]]);export{f as default};
