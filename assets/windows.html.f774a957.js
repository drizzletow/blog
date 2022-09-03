import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as o,a as n,b as i,e as a,d as s,r}from"./app.4ad16a80.js";var t="/assets/image-20220327093741984.d9824a2c.png",c="/assets/2652424100451.8741ee42.png",u="/assets/1105935118877.b173edff.png";const v={},m=a(`<h1 id="windows\u547D\u4EE4\u548C\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#windows\u547D\u4EE4\u548C\u5DE5\u5177" aria-hidden="true">#</a> Windows\u547D\u4EE4\u548C\u5DE5\u5177</h1><h2 id="\u4E00-cmd\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E00-cmd\u547D\u4EE4" aria-hidden="true">#</a> \u4E00 CMD\u547D\u4EE4</h2><h3 id="_1-\u76EE\u5F55\u548C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u76EE\u5F55\u548C\u6587\u4EF6" aria-hidden="true">#</a> 1. \u76EE\u5F55\u548C\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token builtin class-name">cd</span> directory            <span class="token comment"># \u5207\u6362\u76EE\u5F55</span>

d:                      <span class="token comment"># \u5207\u6362\u5230 d \u76D8</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>code</p><p>explore</p><br><h3 id="_2-\u8FDB\u7A0B\u548C\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-\u8FDB\u7A0B\u548C\u670D\u52A1" aria-hidden="true">#</a> 2. \u8FDB\u7A0B\u548C\u670D\u52A1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">netstat</span> -ano <span class="token operator">|</span> findstr <span class="token number">8102</span>  <span class="token comment"># \u67E5\u627E\u6307\u5B9A\u7AEF\u53E3\u53F7\u7684\u8FDB\u7A0B\u4FE1\u606F\uFF08\u8FDB\u7A0BID\uFF09</span>

taskkill /pid <span class="token number">45768</span> /f       <span class="token comment"># \u5F3A\u6740 \u6307\u5B9Aid\uFF0845768\uFF09\u7684\u8FDB\u7A0B</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="\u4E8C-terminal" tabindex="-1"><a class="header-anchor" href="#\u4E8C-terminal" aria-hidden="true">#</a> \u4E8C Terminal</h2>`,11),p=s("Windows \u7EC8\u7AEF\u6982\u8FF0 \uFF1A"),b={href:"https://docs.microsoft.com/zh-cn/windows/terminal/",target:"_blank",rel:"noopener noreferrer"},h=s("https://docs.microsoft.com/zh-cn/windows/terminal/"),g=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
schemes \u6570\u7EC4\u662F\u7528\u6765\u5B9A\u4E49\u914D\u8272\u65B9\u6848\u7684\u3002

name \uFF1A        \u8FD9\u4E2A\u914D\u8272\u65B9\u6848\u7684 ID \u3002
background \uFF1A  \u80CC\u666F\u989C\u8272\u3002
foreground \uFF1A  \u8F93\u51FA\u663E\u793A\u5B57\u4F53\u989C\u8272\uFF0Cssh \u8F93\u5165\u547D\u4EE4\u989C\u8272\u3002
black \uFF1A       \u7BAD\u5934\u5DE6\u8FB9\u4E09\u89D2\uFF0Cgit \u76EE\u5F55\u7684 .git \u76EE\u5F55\u4E0B\u63D0\u793A\u7BAD\u5934\u80CC\u666F\u63D0\u793A\u6587\u5B57\u3002
red \uFF1A         <span class="token function">ssh</span> \u540E <span class="token function">vim</span> \u6253\u5F00\u6587\u672C\u6587\u4EF6\u5DF2\u8F93\u5165\u884C\u666E\u901A\u5B57\u7B26\u663E\u793A\u6587\u5B57\u3002
green \uFF1A       <span class="token function">git</span> \u76EE\u5F55\u7684 .git \u76EE\u5F55\u4E0B\u63D0\u793A\u7BAD\u5934\u80CC\u666F\u63D0\u793A\u3002
yellow \uFF1A      <span class="token function">git</span> \u76EE\u5F55\u7684\u5206\u652F\u7BAD\u5934\u80CC\u666F\u63D0\u793A\u3002
blue \uFF1A        \u76EE\u5F55\u7BAD\u5934\u672C\u4F53\u3002
purple \uFF1A      <span class="token function">ssh</span> \u540E <span class="token function">vim</span> \u7B49\u5DE5\u5177\u6253\u5F00\u6587\u4EF6\u540E\u7684 <span class="token punctuation">{</span> \u548C <span class="token punctuation">}</span>\u7B49\u7B26\u53F7\u672C\u4F53\uFF0Cgit \u66F4\u65B0\u5B8C\u540E\u663E\u793A\u7684\u5206\u652F\u7BAD\u5934\u80CC\u666F\u63D0\u793A\u3002
cyan \uFF1A        \u5F15\u53F7\u53CA\u5185\u90E8\u5B57\u7B26\u3002
white \uFF1A       \u672A\u77E5\u3002
brightBlack \uFF1A <span class="token builtin class-name">cd</span> \u7B49 \u547D\u4EE4\u540E\u9762\u7684 <span class="token punctuation">..</span> \u548C * \u7B49\u7279\u6B8A\u7B26\u53F7\uFF0C\u4EE5\u53CA\u547D\u4EE4\u53C2\u6570\u5B57\u7B26\u989C\u8272\u3002
brightRed \uFF1A   \u7CFB\u7EDF\u63D0\u793A\u5B57\u7B26\u989C\u8272\uFF1A\u9519\u8BEF\u7684\u547D\u4EE4\uFF0Cgit status \u663E\u793A\u3002
brightGreen \uFF1A <span class="token function">ssh</span> \u7528\u6237\u6743\u9650\u663E\u793A\u3002
brightYellow \uFF1A\u8F93\u5165\u7684\u547D\u4EE4\u5B57\u7B26\u3002
brightBlue \uFF1A  <span class="token function">ssh</span> \u6587\u4EF6\u5939\u7B49\u9AD8\u4EAE\u663E\u793A\uFF0Cssh \u76EE\u5F55\uFF0Cvim \u6253\u5F00\u6587\u672C\u6587\u4EF6\u672A\u8F93\u5165\u884C ~ \u5B57\u7B26\u663E\u793A\u3002
brightPurple \uFF1A\u672A\u77E5\u3002
brightCyan \uFF1A  <span class="token function">ssh</span> <span class="token function">vim</span> \u7B49\u5DE5\u5177\u6253\u5F00\u6587\u4EF6\u540E\u7684 <span class="token punctuation">{</span> \u548C <span class="token punctuation">}</span> \u7B49\u7B26\u53F7\u80CC\u666F\u3002
brightWhite \uFF1A \u76EE\u5F55\u7BAD\u5934\u5DE6\u8FB9\u548C\u4E2D\u95F4\u7684\u63D0\u793A\u6587\u5B57\u3002

<span class="token string">&quot;cursorColor&quot;</span><span class="token builtin class-name">:</span> \u5149\u6807\u989C\u8272

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-\u5B89\u88C5gsudo" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5gsudo" aria-hidden="true">#</a> 1. \u5B89\u88C5gsudo</h3><p>gsudo\uFF1A\u7BA1\u7406\u5458\u6253\u5F00\u5DE5\u5177</p>`,4),_=s("GitHub\uFF1A"),k={href:"https://github.com/gerardog/gsudo",target:"_blank",rel:"noopener noreferrer"},f=s("https://github.com/gerardog/gsudo"),w=a(`<br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u65B9\u5F0F\uFF1A</span>

<span class="token number">1</span>. Github\u4E0B\u8F7Dmsi\u683C\u5F0F\uFF0C\u5B89\u88C5\u5373\u53EF\uFF0C\u6216\u4E0B\u8F7Dzip\u683C\u5F0F\uFF0C\u89E3\u538B\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5373\u53EF

https://github.com/gerardog/gsudo/releases/tag/v1.2.0


<span class="token number">2</span>. \u901A\u8FC7 PowerShell \u547D\u4EE4\u5B89\u88C5

winget <span class="token function">install</span> gsudo

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows terminal\u9ED8\u8BA4\u662F\u975E\u7BA1\u7406\u5458\u6253\u5F00\u7684\uFF0C\u5B89\u88C5 gsudo \u540E \u5728powershell \u6216cmd\u8BBE\u7F6E\u9879\u4E0B\u5C06\u547D\u4EE4\u884C\u6539\u4E3A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gsudo.exe powershell.exe -nologo  <span class="token comment">#\u6216</span>

gsudo.exe cmd.exe 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-nologo</code> \u53C2\u6570\u4F5C\u7528\u662F\u53BB\u6389\u542F\u52A8\u65F6\u524D\u9762\u90A3\u4E00\u4E32\u7248\u6743\u58F0\u660E\u7B49\u4FE1\u606F, \u53EF\u4EE5\u4E0D\u52A0</p><p>\u5982\u679C\u4E0D\u60F3\u8981\u9ED8\u8BA4\u7BA1\u7406\u5458\u6253\u5F00, \u4E0A\u9762\u547D\u4EE4\u884C\u5904\u53EF\u4EE5\u4E0D\u6539, \u5728\u9700\u8981\u7BA1\u7406\u5458\u6743\u9650\u7684\u547D\u4EE4\u524D\u52A0\u4E0Asudo\u518D\u8FD0\u884C\u5C31\u53EF\u4EE5, \u8DDFLinux\u4E00\u6837</p><br><h3 id="_2-\u6DFB\u52A0gitbash" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0gitbash" aria-hidden="true">#</a> 2. \u6DFB\u52A0GitBash</h3><p>\u4ECE\u8BBE\u7F6E <code>\u6253\u5F00JSON\u6587\u4EF6</code> \uFF0C\u5728 <code> &quot;profiles&quot; --&gt; &quot;defaults&quot; --&gt; &quot;list&quot;</code> \u4E2D\u6DFB\u52A0\u65B0\u7684\u914D\u7F6E\uFF1A</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>&quot;profiles&quot;: 
{
    &quot;defaults&quot;: {},
    &quot;list&quot;: 
    [
        {
            &quot;guid&quot;: &quot;{b453ae62-4e3d-5e58-b989-0a998ec441b7}&quot;,
            &quot;hidden&quot;: false,
            &quot;name&quot;: &quot;Git Bash&quot;,
            &quot;commandline&quot;: &quot;gsudo \\&quot;C:\\\\Program Files\\\\Git\\\\bin\\\\bash.exe\\&quot;&quot;,
            &quot;colorScheme&quot;:&quot;One Half Dark&quot;,
            &quot;icon&quot;: &quot;C:\\\\Program Files\\\\Git\\\\mingw64\\\\share\\\\git\\\\git-for-windows.ico&quot;
        }

    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A commandline \u4E2D \u9700\u8981\u7684\u662Fgit\u5B89\u88C5\u76EE\u5F55\u4E0B\u7684 bin \u4E0B\u7684 bash.exe\uFF0C\u800C\u4E0D\u662F Git-Bash.exe</p><br><h3 id="_3-\u6BDB\u73BB\u7483\u7279\u6548" tabindex="-1"><a class="header-anchor" href="#_3-\u6BDB\u73BB\u7483\u7279\u6548" aria-hidden="true">#</a> 3. \u6BDB\u73BB\u7483\u7279\u6548</h3>`,13),q=s("\u4E0B\u8F7D\u5B57\u4F53\uFF1A"),x={href:"https://github.com/microsoft/cascadia-code/releases",target:"_blank",rel:"noopener noreferrer"},y=s("https://github.com/microsoft/cascadia-code/releases"),S=a(`<p>\u89E3\u538B\u540E\u5B89\u88C5\u6240\u6709 ttf \u5B57\u4F53 \uFF08\u4E3A\u6240\u6709\u7528\u6237\u5B89\u88C5\uFF09</p><p>\u4FEE\u6539 JSON \u6587\u4EF6\uFF1A</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;commandline&quot;: &quot;gsudo.exe powershell.exe -nologo&quot;,
    // &quot;commandline&quot;: &quot;powershell.exe&quot;,
    &quot;guid&quot;: &quot;{61c54bbd-c2c6-5271-96e7-009a87ff44bf}&quot;,
    &quot;hidden&quot;: false,
    &quot;name&quot;: &quot;Windows PowerShell&quot;,
    // \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
    &quot;acrylicOpacity&quot;: 0.7,
    &quot;colorScheme&quot; : &quot;Frost&quot;,
    &quot;cursorColor&quot; : &quot;#000000&quot;,
    &quot;fontFace&quot; : &quot;Cascadia Code PL&quot;,
    &quot;useAcrylic&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-oh-my-posh" tabindex="-1"><a class="header-anchor" href="#_4-oh-my-posh" aria-hidden="true">#</a> 4. Oh-My-Posh</h3><p>\u5B98\u65B9\u6587\u6863\u548C\u4ECB\u7ECD\uFF1A</p>`,6),P={href:"https://ohmyposh.dev/docs/windows",target:"_blank",rel:"noopener noreferrer"},j=s("https://ohmyposh.dev/docs/windows"),z={href:"https://www.powershellgallery.com/packages/oh-my-posh",target:"_blank",rel:"noopener noreferrer"},N=s("https://www.powershellgallery.com/packages/oh-my-posh"),O=n("br",null,null,-1),C=n("p",null,[n("strong",null,"\u5B89\u88C5\u5B57\u4F53"),s("\uFF1A")],-1),F=n("p",null,"\u81EA\u5B9A\u4E49\u547D\u4EE4\u63D0\u793A\u7B26\u901A\u5E38\u4F7F\u7528\u5B57\u5F62\uFF08\u56FE\u5F62\u7B26\u53F7\uFF09\u6765\u8BBE\u7F6E\u63D0\u793A\u7B26\u7684\u6837\u5F0F\u3002\u82E5\u8981\u5728\u7EC8\u7AEF\u4E2D\u67E5\u770B\u6240\u6709\u5B57\u5F62\uFF0C",-1),D=s("\u5EFA\u8BAE\u5B89\u88C5 "),J={href:"https://www.nerdfonts.com/font-downloads",target:"_blank",rel:"noopener noreferrer"},B=s("Nerd Font"),G=s("\uFF0C\u8FDB\u5165\u7F51\u7AD9\uFF0C\u70B9\u51FB Downloads \u8FDB\u5165\u4E0B\u8F7D\u9875\u9762\uFF0C\u968F\u4FBF\u4E0B\u8F7D\u4E00\u6B3E\u5B57\u4F53\uFF0C"),H=a(`<p>\u63A8\u8350\u4F7F\u7528 <strong>DejaVuSansMono Nerd Font</strong> \u6216\u8005 <strong>Cousine Nerd Font</strong>\uFF0C\u8FD9\u4E24\u6B3E\u5B57\u4F53\u6BD4\u8F83\u5168\uFF0C\u9002\u914D\u4E5F\u8FD8\u4E0D\u9519\u3002</p><p>\u4E0B\u8F7D\u540E\u89E3\u538B\u5B89\u88C5\u5B57\u4F53\u5373\u53EF</p><br><p><strong>\u5B89\u88C5 oh-my-posh</strong> \uFF1A</p><p>\u4EE5\u7BA1\u7406\u5458\u65B9\u5F0F\u6253\u5F00 PowerShell \uFF08\u6CE8\u610F\u7F51\u7EDC\u4E0D\u597D\u53EF\u80FD\u4F1A\u5B89\u88C5\u5931\u8D25\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>winget <span class="token function">install</span> JanDeDobbeleer.OhMyPosh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+t+`" alt="image-20220327093741984" loading="lazy"></p><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u521D\u59CB\u5316 \uFF08\u53EA\u5BF9\u5F53\u524D\u6253\u5F00\u7684\u7EC8\u7AEF\u751F\u6548\uFF09</span>

oh-my-posh init pwsh --config <span class="token string">&quot;E:\\Package\\Other\\Terminal\\oh-my-posh<span class="token entity" title="\\t">\\t</span>hemes\\jandedobbeleer.omp.json&quot;</span> <span class="token operator">|</span> Invoke-Expression

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E\u6C38\u4E45\u751F\u6548 </span>

code <span class="token variable">$profile</span>   

<span class="token comment"># \u8BE5\u547D\u4EE4\u4F1A\u4F7F\u7528VScode\u6253\u5F00\u6587\u4EF6\uFF0C\u5C06\u4E0A\u8FF0\u521D\u59CB\u5316\u547D\u4EE4\u52A0\u5165\u5176\u4E2D\u5373\u53EF \uFF08\u914D\u7F6E\u540E\u6BCF\u6B21\u6253\u5F00Powershell\u90FD\u4F1A\u6267\u884C\u811A\u672C\u6587\u4EF6\u4E2D\u7684\u547D\u4EE4\uFF09</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u547D\u4EE4\u884C\u81EA\u52A8\u8865\u5168\u548C\u63D0\u793A</span>

Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&lt;br/ &gt;</p><p>\u6700\u540E\u8BBE\u7F6E\u4E00\u4E0B\u5B57\u4F53\u548C\u914D\u8272\u5373\u53EF\uFF08\u4FEE\u6539JSON\u6216\u5728terminal\u754C\u9762\u4E2D\u76F4\u63A5\u8BBE\u7F6E\uFF09\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;fontFace&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;DejaVuSansMono Nerd Font&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u5E38\u7528\u63D0\u793A\u7B26\u4E3B\u9898</span>

honukai.omp.json

iterm2.omp.json

bubbles.omp.json

bubblesline.omp.json

capr4n.omp.json

cloud-native-azure.omp.json

di4am0nd.omp.json

grandpa-style.omp.json

hunk.omp.json

microverse-power.omp.json

<span class="token comment"># COOL</span>

free-ukraine.omp.json

jv_sitecorian.omp.json

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),W=s("\u66F4\u591A\u9009\u62E9\u53C2\u7167\uFF1A"),T={href:"https://ohmyposh.dev/docs/themes",target:"_blank",rel:"noopener noreferrer"},V=s("https://ohmyposh.dev/docs/themes"),A=n("br",null,null,-1),I=n("h2",{id:"\u4E09-powershell",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E09-powershell","aria-hidden":"true"},"#"),s(" \u4E09 PowerShell")],-1),L=s("\u5B98\u7F51\u4E0B\u8F7D\uFF1A "),M={href:"https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows",target:"_blank",rel:"noopener noreferrer"},E=s("https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows"),K=s("GitHub\uFF1A"),R={href:"https://github.com/PowerShell/PowerShell/releases/",target:"_blank",rel:"noopener noreferrer"},U=s("https://github.com/PowerShell/PowerShell/releases/"),Y=a(`<br><h3 id="_1-ssh" tabindex="-1"><a class="header-anchor" href="#_1-ssh" aria-hidden="true">#</a> 1. SSH</h3><p>\u4F7F\u7528SSH\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u524D\u63D0\u662F\u670D\u52A1\u5668\u5DF2\u5B89\u88C5\u5E76\u542F\u7528SSH\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u547D\u4EE4\u683C\u5F0F\uFF1Assh username@hostip \u5982\uFF1A</span>

<span class="token function">ssh</span> root@192.168.5.150          <span class="token comment"># \u8F93\u5165\u5BC6\u7801\u5373\u53EF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>\u5229\u7528WindowsTerminal\u5B9E\u73B0ssh\u514D\u5BC6\u81EA\u52A8\u767B\u9646</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u4E00\u3001\u5728\u672C\u5730\u751F\u6210SSH\u5BC6\u94A5\u5BF9</span>
<span class="token comment">#  powershell\u4E2D\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u6839\u636E\u63D0\u793A\u8BBE\u7F6E\u5BC6\u94A5\u4FDD\u5B58\u8DEF\u5F84\u3001\u5BC6\u94A5\u5BC6\u7801\uFF08\u9ED8\u8BA4\u4E3A\u7A7A\uFF09\uFF0C</span>
<span class="token comment">#    \u5EFA\u8BAE\u6309\u9ED8\u8BA4\u8BBE\u7F6E\uFF0C\u4E00\u76F4\u6309\u56DE\u8F66\u6210\u529F\u751F\u6210\u5BC6\u94A5\u6587\u4EF6\uFF0C\u751F\u6210\u7684\u5BC6\u94A5\u6587\u4EF6\u5171\u6709\u4E24\u4E2A\uFF0C</span>
<span class="token comment">#    ssh_key\u5BF9\u5E94\u79C1\u94A5\u53EF\u5B58\u50A8\u5728\u672C\u5730\uFF0Cssh_key.pub\u5BF9\u5E94\u516C\u94A5\u9700\u8981\u653E\u5728\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</span>

ssh-keygen -t rsa

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="" loading="lazy"></p><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u4E8C\u3001\u5728\u8FDC\u7A0B\u4E3B\u673A\u5B89\u88C5\u516C\u94A5</span>
<span class="token comment"># 1.\u5728\u672C\u5730\u4E0A\u4F20\u516C\u94A5\u6587\u4EF6</span>

<span class="token function">sftp</span> username@ip <span class="token comment"># \u56DE\u8F66\u8F93\u5165\u5BC6\u7801</span>
sftp<span class="token operator">&gt;</span> put \u672C\u5730\u516C\u94A5\u6587\u4EF6 \u8FDC\u7A0B\u8DEF\u5F84<span class="token punctuation">(</span>\u9ED8\u8BA4\u4E3A\u7528\u6237\u5BB6\u76EE\u5F55<span class="token punctuation">)</span>


<span class="token function">sftp</span> itdrizzle@192.168.5.150                                                       \uF489 pwsh
itdrizzle@192.168.5.150&#39;s password:
Connected to <span class="token number">192.168</span>.5.150.
sftp<span class="token operator">&gt;</span> put C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>msdri<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>id_rsa.pub /home/itdrizzle/.ssh/
Uploading C:/Users/msdri/.ssh/id_rsa.pub to /home/itdrizzle/.ssh/id_rsa.pub
C:/Users/msdri/.ssh/id_rsa.pub                                   <span class="token number">100</span>%  <span class="token number">576</span>   <span class="token number">562</span>.5KB/s   00:00


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="" loading="lazy"></p><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># 2.\u8FDE\u63A5\u5230\u8FDC\u7A0B\u4E3B\u673A\uFF0C\u4FEE\u6539\u5BC6\u94A5\u53CA\u6240\u5728\u6587\u4EF6\u5939\u6743\u9650</span>

<span class="token function">mkdir</span> -m <span class="token number">700</span> ~/.ssh        <span class="token comment">#\u5982\u6B64\u6587\u4EF6\u5939\u5DF2\u5B58\u5728\uFF0C\u4E5F\u8981\u786E\u4FDD\u6743\u9650\u4E3A700</span>

<span class="token function">chmod</span> <span class="token number">600</span> id_rsa.pub       <span class="token comment">#cd \u5BC6\u94A5.pub\u6240\u5728\u76EE\u5F55\uFF0C\u7136\u540E\u8BBE\u7F6E\u5176\u6743\u9650</span>

<span class="token function">sudo</span> <span class="token function">mv</span> ~/.ssh/id_rsa.pub ~/.ssh/authorized_key_from_mywindows





<span class="token comment"># \u4E09\u3001\u5728\u8FDC\u7A0B\u4E3B\u673A\u6253\u5F00\u5BC6\u94A5\u767B\u9646\u529F\u80FD (\u7F16\u8F91sshd\u914D\u7F6E\u6587\u4EF6)</span>

<span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config


RSAAuthentication <span class="token function">yes</span>
PubkeyAuthentication <span class="token function">yes</span>
AuthorizedKeysFile .ssh/authorized_key_from_mywindows
PermitRootLogin <span class="token function">yes</span>
PasswordAuthentication no <span class="token comment">#\u6B64\u884C\u4F1A\u5173\u95ED\u5BC6\u7801\u767B\u5F55\u529F\u80FD\uFF0C\u8BF7\u786E\u8BA4\u5BC6\u94A5\u767B\u9646\u529F\u80FD\u8BBE\u7F6E\u597D\u540E\u518D\u6DFB\u52A0</span>

<span class="token comment"># \u4EE5\u4E0A\u5185\u5BB9\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u90FD\u6709\u5BF9\u5E94\u884C\uFF0C\u4F46\u88AB\u6CE8\u91CA\u4E86\u8D77\u6765\uFF0C\u53EF\u901A\u8FC7\u5220\u9664\u6CE8\u91CA\u7B26\u53F7\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u76F4\u63A5\u8FFD\u52A0\u5230\u6587\u4EF6\u672B\u5C3E</span>



<span class="token comment"># 3.\u91CD\u542Fsshd</span>

systemctl restart sshd




<span class="token comment"># \u56DB\u3001\u8BBE\u7F6EWindowsTerminal SSH\u5FEB\u6377\u952E</span>
<span class="token comment"># \u5728WindowsTerminal\u914D\u7F6E\u6587\u4EF6\u91CC\u589E\u52A0\u5185\u5BB9\uFF0C\u590D\u5236\u5B8C\u4E4B\u540E\u66F4\u6539\u914D\u7F6E\u5982\u4E0B\uFF0C\u4E3B\u8981\u5FC5\u987B\u66F4\u6539\u5982\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u6309\u9700\u4FEE\u6539</span>

<span class="token function">ssh</span> -i D:<span class="token punctuation">\\</span>WorkPlace<span class="token punctuation">\\</span>IOS<span class="token punctuation">\\</span>kali-linux-2021.1-vmware-amd64.vmwarevm<span class="token punctuation">\\</span>ssh_key root@192.168.110.120

<span class="token comment"># \u91CD\u542F\u7A97\u53E3\u6253\u5F00\u5373\u53EF\u4F7F\u7528\uFF08\u65E0\u9700\u8F93\u5165\u5BC6\u7801\uFF09</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-new-guid" tabindex="-1"><a class="header-anchor" href="#_2-new-guid" aria-hidden="true">#</a> 2. new-guid</h3>`,15);function $(Q,X){const e=r("ExternalLinkIcon");return d(),o("div",null,[m,n("p",null,[p,n("a",b,[h,i(e)])]),g,n("p",null,[_,n("a",k,[f,i(e)])]),w,n("p",null,[q,n("a",x,[y,i(e)])]),S,n("p",null,[n("a",P,[j,i(e)])]),n("p",null,[n("a",z,[N,i(e)])]),O,C,F,n("p",null,[D,n("a",J,[B,i(e)]),G]),H,n("p",null,[W,n("a",T,[V,i(e)])]),A,I,n("p",null,[L,n("a",M,[E,i(e)])]),n("p",null,[K,n("a",R,[U,i(e)])]),Y])}var sn=l(v,[["render",$],["__file","windows.html.vue"]]);export{sn as default};
