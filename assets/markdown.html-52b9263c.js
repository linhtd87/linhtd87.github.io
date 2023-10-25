import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as i,e as o,a as n,b as s,d as e,f as t}from"./app-e2d8fc5b.js";const c={},u=n("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),d=n("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),h=n("h2",{id:"markdown-介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),s(" Markdown 介绍")],-1),k={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"markdown-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),s(" Markdown 配置")],-1),b=n("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),g={class:"hint-container info"},_=n("p",{class:"hint-container-title"},"相关信息",-1),f={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"markdown-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),s(" Markdown 扩展")],-1),w={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},x=n("h3",{id:"vuepress-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),s(" VuePress 扩展")],-1),j=n("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),z={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},E=n("h3",{id:"主题扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),s(" 主题扩展")],-1),M={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"vuepress-plugin-md-enhance",-1),A=t(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7),B={href:"https://theme-hope.vuejs.press/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},P=t(`<h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h4><p>::: code-tabs</p><p>@tab pnpm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab yarn</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab:active npm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>`,9),$={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},F=n("h4",{id:"上下角标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),s(" 上下角标")],-1),T=n("p",null,"19^th^ H~2~O",-1),D={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},H=n("h4",{id:"自定义对齐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),s(" 自定义对齐")],-1),N=n("p",null,"::: center",-1),S=n("p",null,"我是居中的",-1),C=n("p",null,":::",-1),I=n("p",null,"::: right",-1),L=n("p",null,"我在右对齐",-1),W=n("p",null,":::",-1),R={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},J=n("h4",{id:"attrs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),s(" Attrs")],-1),O=n("p",null,[s("一个拥有 ID 的 "),n("strong",null,"单词"),s("{#word}。")],-1),G={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},K=n("h4",{id:"脚注",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#脚注","aria-hidden":"true"},"#"),s(" 脚注")],-1),Q=n("p",null,[s("此文字有脚注"),n("a",{href:"%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9"},"^first"),s(".")],-1),U={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},X=n("h4",{id:"标记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),s(" 标记")],-1),Y=n("p",null,"你可以标记 ==重要的内容== 。",-1),Z={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},nn=n("h4",{id:"任务列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),s(" 任务列表")],-1),sn=n("li",null,[n("p",null,"[x] 计划 1")],-1),an=n("li",null,[n("p",null,"[ ] 计划 2")],-1),en={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},tn=n("h3",{id:"图片增强",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),s(" 图片增强")],-1),on=n("p",null,"支持为图片设置颜色模式和大小",-1),pn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},rn=t(`<h4 id="卡片" tabindex="-1"><a class="header-anchor" href="#卡片" aria-hidden="true">#</a> 卡片</h4><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
color: rgba(253, 230, 138, 0.15)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ln={href:"https://theme-hope.vuejs.press/zh/guide/markdown/card.html",target:"_blank",rel:"noopener noreferrer"},cn=t(`<h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h4><p>::: chart 一个散点图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;散点数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),un={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},dn=t(`<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4><p>::: echarts 一个折线图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),hn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},kn=t(`<h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h4><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> 是否执行操作<span class="token operator">?</span>
process<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 操作
e<span class="token operator">=&gt;</span>end<span class="token operator">:</span> 结束

<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>process<span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),mn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},vn=t(`<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token arrow operator">---</span>
title<span class="token operator">:</span> Flowchart
<span class="token arrow operator">---</span>
<span class="token keyword">flowchart</span> TB
    c1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--&gt;</span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--&gt;</span>c2
    <span class="token keyword">end</span>
    one <span class="token arrow operator">--&gt;</span> two
    three <span class="token arrow operator">--&gt;</span> two
    two <span class="token arrow operator">--&gt;</span> c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),bn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},gn=n("h4",{id:"tex-语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),s(" Tex 语法")],-1),_n=n("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),fn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},qn=n("h4",{id:"导入文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),s(" 导入文件")],-1),wn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},yn=t(`<h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h4><p>::: normal-demo 一个普通 Demo</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>VuePress Theme Hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>very<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>非常<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>强大!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#very&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;非常强大&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,6),xn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},jn=n("h4",{id:"样式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),s(" 样式化")],-1),zn=n("p",null,[s("向 Mr.Hope 捐赠一杯咖啡。 "),n("em",null,"Recommended")],-1),En={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},Mn=t(`<h4 id="交互演示" tabindex="-1"><a class="header-anchor" href="#交互演示" aria-hidden="true">#</a> 交互演示</h4><p>::: playground#ts TS 案例</p><p>@file index.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">speak</span> <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">speak</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,5),Vn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},An=t(`<h4 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示" aria-hidden="true">#</a> Vue 交互演示</h4><p>::: vue-playground Vue 交互演示</p><p>@file App.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,5),Bn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Pn=n("h4",{id:"幻灯片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),s(" 幻灯片")],-1),$n=n("p",null,"@slidestart",-1),Fn=n("h2",{id:"幻灯片-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#幻灯片-1","aria-hidden":"true"},"#"),s(" 幻灯片 1")],-1),Tn={href:"https://mister-hope.com",target:"_blank",rel:"noopener noreferrer"},Dn=t(`<hr><h2 id="幻灯片-2" tabindex="-1"><a class="header-anchor" href="#幻灯片-2" aria-hidden="true">#</a> 幻灯片 2</h2><ul><li>项目 1</li><li>项目 2</li></ul><hr><h2 id="幻灯片-3-1" tabindex="-1"><a class="header-anchor" href="#幻灯片-3-1" aria-hidden="true">#</a> 幻灯片 3.1</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p><h2 id="幻灯片-3-2" tabindex="-1"><a class="header-anchor" href="#幻灯片-3-2" aria-hidden="true">#</a> 幻灯片 3.2</h2><p>$$ J(\\theta_0,\\theta_1) = \\sum_{i=0} $$</p><p>@slideend</p>`,10),Hn={href:"https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html",target:"_blank",rel:"noopener noreferrer"};function Nn(Sn,Cn){const a=r("ExternalLinkIcon");return l(),i("div",null,[u,d,o(" more "),h,n("p",null,[s("如果你是一个新手，还不会编写 Markdown，请先阅读 "),n("a",k,[s("Markdown 介绍"),e(a)]),s(" 和 "),n("a",m,[s("Markdown 演示"),e(a)]),s("。")]),v,b,n("div",g,[_,n("p",null,[s("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),n("a",f,[s("Frontmatter 介绍"),e(a)]),s("。")])]),q,n("p",null,[s("VuePress 会使用 "),n("a",w,[s("markdown-it"),e(a)]),s(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),n("a",y,[s("语法扩展"),e(a)]),s(" 。")]),x,j,n("p",null,[s("关于这些扩展，请阅读 "),n("a",z,[s("VuePress 中的 Markdown 扩展"),e(a)]),s("。")]),E,n("p",null,[s("通过 "),n("a",M,[V,e(a)]),s("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),A,n("ul",null,[n("li",null,[n("a",B,[s("查看详情"),e(a)])])]),P,n("ul",null,[n("li",null,[n("a",$,[s("查看详情"),e(a)])])]),F,T,n("ul",null,[n("li",null,[n("a",D,[s("查看详情"),e(a)])])]),H,N,S,C,I,L,W,n("ul",null,[n("li",null,[n("a",R,[s("查看详情"),e(a)])])]),J,O,n("ul",null,[n("li",null,[n("a",G,[s("查看详情"),e(a)])])]),K,Q,n("ul",null,[n("li",null,[n("a",U,[s("查看详情"),e(a)])])]),X,Y,n("ul",null,[n("li",null,[n("a",Z,[s("查看详情"),e(a)])])]),nn,n("ul",null,[sn,an,n("li",null,[n("p",null,[n("a",en,[s("查看详情"),e(a)])])])]),tn,on,n("ul",null,[n("li",null,[n("a",pn,[s("查看详情"),e(a)])])]),rn,n("ul",null,[n("li",null,[n("a",ln,[s("查看详情"),e(a)])])]),cn,n("ul",null,[n("li",null,[n("a",un,[s("查看详情"),e(a)])])]),dn,n("ul",null,[n("li",null,[n("a",hn,[s("查看详情"),e(a)])])]),kn,n("ul",null,[n("li",null,[n("a",mn,[s("查看详情"),e(a)])])]),vn,n("ul",null,[n("li",null,[n("a",bn,[s("查看详情"),e(a)])])]),gn,_n,n("ul",null,[n("li",null,[n("a",fn,[s("查看详情"),e(a)])])]),qn,o(" @include: ./README.md{11-17} "),n("ul",null,[n("li",null,[n("a",wn,[s("查看详情"),e(a)])])]),yn,n("ul",null,[n("li",null,[n("a",xn,[s("查看详情"),e(a)])])]),jn,zn,n("ul",null,[n("li",null,[n("a",En,[s("查看详情"),e(a)])])]),Mn,n("ul",null,[n("li",null,[n("a",Vn,[s("查看详情"),e(a)])])]),An,n("ul",null,[n("li",null,[n("a",Bn,[s("查看详情"),e(a)])])]),Pn,$n,Fn,n("p",null,[s("一个有文字和 "),n("a",Tn,[s("链接"),e(a)]),s(" 的段落")]),Dn,n("ul",null,[n("li",null,[n("a",Hn,[s("查看详情"),e(a)])])])])}const Wn=p(c,[["render",Nn],["__file","markdown.html.vue"]]);export{Wn as default};
