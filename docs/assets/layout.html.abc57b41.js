import{_ as n,o as s,c as a,e as p}from"./app.d2fe77ae.js";const t={},e=p(`<h1 id="\u5E03\u5C40\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40\u539F\u7406" aria-hidden="true">#</a> \u5E03\u5C40\u539F\u7406</h1><p>tmagic-editor\u7684\u5E03\u5C40\u5B9E\u73B0\u65B9\u5F0F\uFF0C<strong>\u5173\u952E\u5728\u4E8E\u5C06\u5E03\u5C40\u914D\u7F6E\u6307\u5B9A\u5728\u5BB9\u5668\u4E0A\uFF0C\u5BF9\u5BB9\u5668\u5185\u7684\u6240\u6709\u5B50\u7EC4\u4EF6\u751F\u6548</strong>\uFF0C\u8FD9\u662Ftmagic-editor\u9875\u9762\u53EF\u4EE5\u652F\u6301\u5404\u79CD\u5E03\u5C40\u65B9\u5F0F\u6DF7\u5408\u4F7F\u7528\u7684\u6838\u5FC3\u65B9\u6CD5\u3002</p><h2 id="\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668" aria-hidden="true">#</a> \u5BB9\u5668</h2><p>\u524D\u9762\u6982\u5FF5\u4ECB\u7ECD\u4E2D\u6709\u63D0\u5230\uFF0Ctmagic-editor\u7684\u5BB9\u5668\u662F\u7EC4\u4EF6\u7684\u57FA\u7840\u3002\u7EC4\u4EF6\u5FC5\u5C5E\u4E8E\u67D0\u4E2A\u5BB9\u5668\uFF0C\u5BB9\u5668\u4E0B\u53EF\u4EE5\u653E\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u653E\u5BB9\u5668\u3002\u9875\u9762\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u662F\u6240\u6709\u5BB9\u5668\u548C\u7EC4\u4EF6\u7684\u6839\uFF0C\u6574\u4E2A\u9875\u9762\u7684\u5BB9\u5668\u548C\u7EC4\u4EF6\u7EC4\u6210\u4E00\u4E2A\u6811\u72B6\u7ED3\u6784\u3002\u5728 DSL \u914D\u7F6E\u4E2D\uFF0C\u8868\u73B0\u4E3A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">222222</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;comp-A&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">333333</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;comp-B&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u987A\u5E8F-\u7EDD\u5BF9\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u987A\u5E8F-\u7EDD\u5BF9\u5B9A\u4F4D" aria-hidden="true">#</a> \u987A\u5E8F/\u7EDD\u5BF9\u5B9A\u4F4D</h2><p>\u7EC4\u4EF6\u662F\u7EDD\u5BF9\u6216\u8005\u987A\u5E8F\u5B9A\u4F4D\uFF0C\u4F53\u73B0\u5728\u7EC4\u4EF6\u7684<strong>\u76F4\u5C5E\u7236\u7EA7\u5BB9\u5668</strong>\u4E0A\uFF0C\u6BD4\u5982\u6211\u4EEC\u5C06 page \u8BBE\u7F6E\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5219\u5B83\u7684\u5B50\u7EC4\u4EF6\uFF0C\u5168\u90FD\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\u3002\u5728 DSL \u914D\u7F6E\u4E2D\uFF0C\u8868\u73B0\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">222222</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;comp-A&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;absolute&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">333333</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;comp-B&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;absolute&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u5BF9\u7EDD\u5BF9/\u987A\u5E8F\u6392\u5E03\u7684\u914D\u7F6E\u63CF\u8FF0 layout\uFF0C\u662F\u5B58\u5728\u4E8E\u5BB9\u5668\u4E0A\u7684\u3002</p><h2 id="\u6DF7\u5408\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408\u5E03\u5C40" aria-hidden="true">#</a> \u6DF7\u5408\u5E03\u5C40</h2><p>\u56E0\u4E3Atmagic-editor\u7684\u5E03\u5C40\u914D\u7F6E\uFF0C\u662F\u6307\u5B9A\u5728\u5BB9\u5668\u4E0A\u7684\uFF0C\u6240\u4EE5tmagic-editor\u7684\u8BBE\u8BA1\u65B9\u5F0F\uFF0C\u5C31\u53EF\u4EE5\u652F\u6301\u5728\u9875\u9762\u4E2D\u5B9E\u73B0\u5404\u79CD\u6DF7\u5408\u5E03\u5C40\u7684\u5D4C\u5957\u3002</p><img src="https://image.video.qpic.cn/oa_88b7d-37_1417201939_1636341538475155?imageView2/q/70">`,12),o=[e];function r(i,l){return s(),a("div",null,o)}var u=n(t,[["render",r],["__file","layout.html.vue"]]);export{u as default};
