import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.837ab119.js";const p={},e=t(`<h1 id="jsx\u6838\u5FC3\u8BED\u6CD5\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#jsx\u6838\u5FC3\u8BED\u6CD5\u89E3\u6790" aria-hidden="true">#</a> JSX\u6838\u5FC3\u8BED\u6CD5\u89E3\u6790</h1><h2 id="\u4E00-jsx\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00-jsx\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u4E00 JSX\u57FA\u7840\u8BED\u6CD5</h2><h3 id="_1-jsx\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-jsx\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1. JSX\u662F\u4EC0\u4E48</h3><p>\u4EC0\u4E48\u662FJSX\uFF0CJSX\u7684\u5E95\u5C42\u662F\u4EC0\u4E48\uFF1F</p><p>JSX\u662F JavaScript XML\uFF08HTML\uFF09\u7684\u7F29\u5199\uFF0C\u8868\u793A\u5728 JS \u4EE3\u7801\u4E2D\u4E66\u5199 HTML \u7ED3\u6784</p><p>\u4F5C\u7528\uFF1A\u5728React\u4E2D\u521B\u5EFAHTML\u7ED3\u6784\uFF08\u9875\u9762UI\u7ED3\u6784\uFF09</p><p>\u4F18\u52BF\uFF1A</p><ol><li>\u91C7\u7528\u7C7B\u4F3C\u4E8EHTML\u7684\u8BED\u6CD5\uFF0C\u964D\u4F4E\u5B66\u4E60\u6210\u672C\uFF0C\u4F1AHTML\u5C31\u4F1AJSX</li><li>\u5145\u5206\u5229\u7528JS\u81EA\u8EAB\u7684\u53EF\u7F16\u7A0B\u80FD\u529B\u521B\u5EFAHTML\u7ED3\u6784</li></ol><p>\u6CE8\u610F\uFF1AJSX \u5E76\u4E0D\u662F\u6807\u51C6\u7684 JS \u8BED\u6CD5\uFF0C\u662F JS \u7684\u8BED\u6CD5\u6269\u5C55\uFF0C\u6D4F\u89C8\u5668\u9ED8\u8BA4\u662F\u4E0D\u8BC6\u522B\u7684\uFF0C\u811A\u624B\u67B6\u4E2D\u5185\u7F6E\u7684 <code>@babel/plugin-transform-react-jsx</code> \u5305\uFF0C\u5C31\u662F\u7528\u6765\u89E3\u6790\u8BE5\u8BED\u6CD5\u7684</p><h3 id="_2-jsx\u4E2D\u4F7F\u7528js\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-jsx\u4E2D\u4F7F\u7528js\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 2. JSX\u4E2D\u4F7F\u7528js\u8868\u8FBE\u5F0F</h3><p>\u80FD\u591F\u5728JSX\u4E2D\u4F7F\u7528\u7684js\u8868\u8FBE\u5F0F:</p><ol><li>\u5B57\u7B26\u4E32\u3001\u6570\u503C\u3001\u5E03\u5C14\u503C\u3001null\u3001undefined\u3001object\uFF08 [] / {} \uFF09</li><li><code>1 + 2</code>\u3001<code>&#39;abc&#39;.split(&#39;&#39;)</code>\u3001<code>[&#39;a&#39;, &#39;b&#39;].join(&#39;-&#39;)</code></li><li><code>fn()</code></li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;\u65FA\u67F4&#39;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u4F60\u597D\uFF0C\u6211\u53EB</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>   <span class="token comment">//    &lt;h1&gt;\u4F60\u597D,\u6211\u53EB\u65FA\u67F4&lt;/h1&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u7279\u522B\u6CE8\u610F</p><p><code>if \u8BED\u53E5</code> / <code>switch-case \u8BED\u53E5</code> / <code>\u53D8\u91CF\u58F0\u660E\u8BED\u53E5</code>\uFF0C\u8FD9\u4E9B\u53EB\u505A\u8BED\u53E5\uFF0C\u4E0D\u662F\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u80FD\u51FA\u73B0\u5728 {} \u4E2D\uFF01\uFF01</p></div><h3 id="_3-jsx\u5217\u8868\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#_3-jsx\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a> 3. JSX\u5217\u8868\u6E32\u67D3</h3><p>\u9875\u9762\u7684\u6784\u5EFA\u79BB\u7ECF\u5E38\u9700\u8981\u4F7F\u7528\u5230\u5217\u8868\u7ED3\u6784\uFF0C\u6BD4\u5982\u6B4C\u66F2\u5217\u8868\uFF0C\u5546\u54C1\u5217\u8868\u7B49\uFF0Cvue\u4E2D\u7528\u7684\u662F<code>v-for</code>\uFF0Creact\u5982\u4F55\u5B9E\u73B0\u5462\uFF1F</p><p>\u5B9E\u73B0\uFF1A\u4F7F\u7528\u6570\u7EC4\u7684 <code>map</code> \u65B9\u6CD5</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u5217\u8868</span>
<span class="token keyword">const</span> songs <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;aaaa&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bbbb&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;cccc&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>
          songs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u70B9\uFF1A\u9700\u8981\u4E3A\u904D\u5386\u9879\u6DFB\u52A0 key \u5C5E\u6027</p><h3 id="_4-jsx\u6761\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#_4-jsx\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> 4. JSX\u6761\u4EF6\u6E32\u67D3</h3><p>\u5B9E\u73B0\uFF1A\u53EF\u4EE5\u4F7F\u7528 <code>\u4E09\u5143\u8FD0\u7B97\u7B26</code> \u6216 <code>\u903B\u8F91\u4E0E(&amp;&amp;)\u8FD0\u7B97\u7B26</code></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u5E03\u5C14\u503C\u505A\u6761\u4EF6</span>
<span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* \u6761\u4EF6\u6E32\u67D3\u5B57\u7B26\u4E32 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span>flag <span class="token operator">?</span> <span class="token string">&#39;react\u771F\u6709\u8DA3&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;vue\u771F\u6709\u8DA3&#39;</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* \u6761\u4EF6\u6E32\u67D3\u6807\u7B7E/\u7EC4\u4EF6 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span>flag <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">this is span</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-jsx\u6837\u5F0F\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_5-jsx\u6837\u5F0F\u5904\u7406" aria-hidden="true">#</a> 5. JSX\u6837\u5F0F\u5904\u7406</h3><ul><li>\u884C\u5185\u6837\u5F0F - style</li><li>\u884C\u5185\u6837\u5F0F - style - \u5C06\u6837\u5F0F\u5B9A\u4E49\u4E3A\u5BF9\u8C61</li><li>\u7C7B\u540D - className\uFF08\u63A8\u8350\uFF09</li></ul><p>\u884C\u5185\u6837\u5F0F - style</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">this is a div</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u884C\u5185\u6837\u5F0F - style - \u5C06\u6837\u5F0F\u5B9A\u4E49\u4E3A\u5BF9\u8C61</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> styleObj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span>red
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> styleObj <span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">this is a div</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u540D - className\uFF08\u63A8\u8350\uFF09</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token string">&#39;./app.css&#39;</span>
<span class="token keyword">const</span> showTitle <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> showTitle <span class="token operator">?</span> <span class="token string">&#39;title&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">this is a div</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* app.css */</span>
<span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-jsx\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u4E8C-jsx\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u4E8C JSX\u6CE8\u610F\u4E8B\u9879</h2><ol><li>JSX\u5FC5\u987B\u6709\u4E00\u4E2A\u6839\u8282\u70B9\uFF0C\u5982\u679C\u6CA1\u6709\u6839\u8282\u70B9\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>&lt;&gt;&lt;/&gt;</code>\uFF08\u5E7D\u7075\u8282\u70B9\uFF09\u66FF\u4EE3</li><li>\u6240\u6709\u6807\u7B7E\u5FC5\u987B\u5F62\u6210\u95ED\u5408\uFF0C\u6210\u5BF9\u95ED\u5408\u6216\u8005\u81EA\u95ED\u5408\u90FD\u53EF\u4EE5</li><li>JSX\u4E2D\u7684\u8BED\u6CD5\u66F4\u52A0\u8D34\u8FD1JS\u8BED\u6CD5\uFF0C\u5C5E\u6027\u540D\u91C7\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5 class -&gt; className for -&gt; htmlFor</li><li>JSX\u652F\u6301\u591A\u884C\uFF08\u6362\u884C\uFF09\uFF0C\u5982\u679C\u9700\u8981\u6362\u884C\uFF0C\u9700\u4F7F\u7528() \u5305\u88F9\uFF0C\u9632\u6B62bug\u51FA\u73B0</li></ol>`,33),c=[e];function o(l,i){return s(),a("div",null,c)}var k=n(p,[["render",o],["__file","jsx.html.vue"]]);export{k as default};