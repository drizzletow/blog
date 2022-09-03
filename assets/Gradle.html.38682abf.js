import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,a as e,b as o,d as t,e as a,r as l}from"./app.4ad16a80.js";const i={},h=e("h1",{id:"gradle\u9879\u76EE\u6784\u5EFA",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gradle\u9879\u76EE\u6784\u5EFA","aria-hidden":"true"},"#"),t(" Gradle\u9879\u76EE\u6784\u5EFA")],-1),c=e("h2",{id:"\u4E00-gradle\u7B80\u4ECB\u4E0E\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E00-gradle\u7B80\u4ECB\u4E0E\u5B89\u88C5","aria-hidden":"true"},"#"),t(" \u4E00 Gradle\u7B80\u4ECB\u4E0E\u5B89\u88C5")],-1),_=t("Gradle \u662F\u4E00\u6B3EGoogle \u63A8\u51FA\u7684\u57FA\u4E8E JVM\u3001\u901A\u7528\u7075\u6D3B\u7684\u9879\u76EE\u6784\u5EFA\u5DE5\u5177\uFF0C\u652F\u6301 Maven\uFF0CJCenter \u591A\u79CD\u7B2C\u4E09\u65B9\u4ED3\u5E93;\u652F\u6301\u4F20\u9012\u6027\u4F9D\u8D56\u7BA1\u7406\u3001\u5E9F\u5F03\u4E86\u7E41\u6742\u7684xml \u6587\u4EF6\uFF0C\u8F6C\u800C\u4F7F\u7528\u7B80\u6D01\u7684\u3001\u652F\u6301\u591A\u79CD\u8BED\u8A00(\u4F8B\u5982\uFF1Ajava\u3001groovy \u7B49)\u7684 build \u811A\u672C\u6587\u4EF6\u3002\u5B98\u7F51\u5730\u5740: "),g={href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"},p=t("https://gradle.org/"),v=t(" . "),u=e("br",null,null,-1),m=e("br",null,null,-1),y=t(" \u6587\u6863\u7B14\u8BB0\u53C2\u8003\uFF1A"),f={href:"https://www.yuque.com/youyi-ai1ik/emphm9/kyhenl",target:"_blank",rel:"noopener noreferrer"},b=t("https://www.yuque.com/youyi-ai1ik/emphm9/kyhenl"),G=a('<h3 id="_1-\u5E38\u89C1\u9879\u76EE\u6784\u5EFA\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_1-\u5E38\u89C1\u9879\u76EE\u6784\u5EFA\u5DE5\u5177" aria-hidden="true">#</a> 1. \u5E38\u89C1\u9879\u76EE\u6784\u5EFA\u5DE5\u5177</h3><table><thead><tr><th>\u7279\u6027 \\ \u5DE5\u5177</th><th>Ant</th><th>Maven</th><th>Gradle</th></tr></thead><tbody><tr><td>\u4ED3\u5E93</td><td>\u81EA\u5DF1\u5904\u7406</td><td>maven\u4ED3\u5E93</td><td>\u652F\u6301\u591A\u79CD\u8FDC\u7A0B\u4ED3\u5E93</td></tr><tr><td>\u4F9D\u8D56\u7BA1\u7406</td><td>ivy\u7BA1\u7406</td><td>GAV\u5750\u6807\u7BA1\u8DEF</td><td>GNV\u5750\u6807\u7BA1\u7406</td></tr><tr><td>\u6784\u5EFA\u6027\u80FD</td><td>\u6700\u9AD8</td><td>\u6700\u4F4E</td><td>\u5C45\u4E2D</td></tr><tr><td>\u63D2\u4EF6\u652F\u6301</td><td>\u5B9E\u73B0\u65B9\u4FBF</td><td>\u8F83\u96BE\u5B9E\u73B0</td><td>\u5B9E\u73B0\u65B9\u4FBF</td></tr><tr><td>\u914D\u7F6E\u6587\u4EF6</td><td>\u6700\u4E3A\u7E41\u7410\u7684xml\u6587\u4EF6</td><td>xml\u6587\u4EF6</td><td>\u4EE3\u7801\u811A\u672C\uFF08\u53EF\u5199\u4E1A\u52A1\u903B\u8F91\uFF09</td></tr><tr><td>\u9075\u5FAA\u7279\u5B9A\u76EE\u5F55\u7ED3\u6784</td><td>\u4E0D\u9075\u5FAA</td><td>\u9075\u5FAA</td><td>\u9075\u5FAA</td></tr><tr><td>\u4F18\u52BF</td><td>\u5C0F\u578B\u9879\u76EE\u6784\u5EFA</td><td>\u9879\u76EE\u5305\u7BA1\u7406</td><td>\u5927\u578B\u9879\u76EE\u6784\u5EFA</td></tr><tr><td>\u5F53\u524D\u5730\u4F4D</td><td>\u8F83\u5C11\u4F7F\u7528</td><td>\u4E3B\u6D41</td><td>\u672A\u6765\u8D8B\u52BF</td></tr></tbody></table><p><mark>Gradle</mark> \u96C6 Ant\u811A\u672C\u7684\u7075\u6D3B\u6027 + Maven\u7EA6\u5B9A\u5927\u4E8E\u914D\u7F6E\u7684\u9879\u76EE\u76EE\u5F55\u4F18\u52BF,\u652F\u6301\u591A\u79CD\u8FDC\u7A0B\u4ED3\u5E93\u548C\u63D2\u4EF6, \u4FA7\u91CD\u4E8E\u5927\u9879\u76EE\u6784\u5EFA\u3002</p><h3 id="_2-gradle\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-gradle\u7684\u5B89\u88C5" aria-hidden="true">#</a> 2. Gradle\u7684\u5B89\u88C5</h3>',4),x={class:"custom-container info"},k=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),J=t("Gradle\u5B98\u7F51\uFF1A"),w={href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"},D=t("https://gradle.org/ "),E=t("Gradle\u5B98\u65B9\u4E0B\u8F7D\u5B89\u88C5\u6559\u7A0B\u9875\u9762\uFF1A"),M={href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"},V=t("https://gradle.org/install/"),A=t("Gradle\u5B98\u65B9\u7528\u6237\u624B\u518C\uFF1A"),L={href:"https://docs.gradle.org/current/userguide/userguide.html",target:"_blank",rel:"noopener noreferrer"},N=t("https://docs.gradle.org/current/userguide/userguide.html"),R=a(`<ol><li><p>\u4E0B\u8F7D <mark>binary-only</mark> \uFF0C\u51C6\u5907\u597DJDK\u73AF\u5883\uFF08\u8981\u6C42Jdk \u4E3A 1.8 \u6216\u8005 1.8 \u7248\u672C\u4EE5\u4E0A\uFF09</p></li><li><p>\u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55\uFF0C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65B0\u5EFA\u73AF\u5883\u53D8\u91CF(Gradle\u672C\u5730\u4ED3\u5E93\u53EF\u4EE5\u548CMaven\u672C\u5730\u4ED3\u5E93\u76EE\u5F55\u4E00\u81F4): 
  GRADLE_HOME \uFF1AD:\\Develop\\env\\gradle\\gradle-7.5.1
  GRADLE_USER_HOME \uFF1A D:\\Develop\\env\\gradle\\repository(Gradle\u672C\u5730\u4ED3\u5E93)
Path\u73AF\u5883\u53D8\u91CF\u65B0\u589E\uFF1A %GRADLE_HOME%\\bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u68C0\u6D4B\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF08<strong>gradle -v \u6216\u8005 gradle --version</strong>\uFF09</p></li></ol><h2 id="\u4E8C-groovy\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C-groovy\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u4E8C Groovy\u57FA\u7840\u8BED\u6CD5</h2><p>Groovy \u5728\u67D0\u79CD\u7A0B\u5EA6\u4E0A \u53EF\u4EE5\u88AB\u89C6\u4E3AJava \u7684\u4E00\u79CD\u811A\u672C\u5316\u6539\u826F\u7248,Groovy \u4E5F\u662F\u8FD0\u884C\u5728 JVM \u4E0A\uFF0C\u5B83\u53EF\u4EE5\u5F88\u597D\u5730\u4E0E Java \u4EE3\u7801\u53CA\u5176\u76F8\u5173\u5E93\u8FDB\u884C\u4EA4\u4E92\u64CD\u4F5C\u3002\u5B83\u662F\u4E00\u79CD\u6210\u719F\u7684\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u8BED\u8A00\uFF0C\u65E2\u53EF\u4EE5\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF0C\u53C8\u53EF\u4EE5\u7528\u4F5C\u7EAF\u7CB9\u7684\u811A\u672C\u8BED\u8A00\u3002\u5927\u591A\u6570\u6709\u6548\u7684 Java \u4EE3\u7801\u4E5F\u53EF\u4EE5\u8F6C\u6362\u4E3A\u6709\u6548\u7684 Groovy \u4EE3\u7801\uFF0CGroovy \u548C Java \u8BED\u8A00\u7684\u4E3B\u8981\u533A\u522B\u662F\uFF1A\u5B8C\u6210\u540C\u6837\u7684\u4EFB\u52A1\u6240\u9700\u7684Groovy \u4EE3\u7801\u6BD4 Java \u4EE3\u7801\u66F4\u5C11\u3002</p><p>Groovy \u662F\u57FA\u4E8EJava \u8BED\u8A00\u7684\uFF0C\u6240\u4EE5\u5B8C\u5168\u517C\u5BB9Java \u8BED\u6CD5,\u6240\u4EE5\u5BF9\u4E8Ejava \u7A0B\u5E8F\u5458\u5B66\u4E60\u6210\u672C\u8F83\u4F4E\u3002</p>`,4),B=t("\u8BE6\u7EC6\u4E86\u89E3\u8BF7\u53C2\u8003\uFF1A"),H={href:"http://www.groovy-lang.org/documentation.html",target:"_blank",rel:"noopener noreferrer"},O=t("The Apache Groovy programming language - Documentation"),j={class:"custom-container info"},q=e("p",{class:"custom-container-title"},"\u914D\u7F6EGroovy\u5F00\u53D1\u73AF\u5883",-1),C=t("1 \u4E0B\u8F7D\u5E76\u89E3\u538B\uFF0C\u4E0B\u8F7D\u5730\u5740: "),I={href:"https://groovy.apache.org/download.html",target:"_blank",rel:"noopener noreferrer"},S=t("https://groovy.apache.org/download.html"),T=e("p",null,"2 \u914D\u7F6Epath\u73AF\u5883\u53D8\u91CF: D:\\Develop\\env\\groovy\\groovy-4.0.4\\bin",-1),K=a('<h3 id="_1-groovy\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-groovy\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> 1. Groovy\u57FA\u672C\u8BED\u6CD5</h3><p>Groovy\u662F\u57FA\u4E8EJava\u8BED\u8A00\u7684\uFF0C\u5B8C\u5168\u517C\u5BB9Java\u8BED\u6CD5\uFF08\u6CE8\u91CA\u4E5F\u4E0EJava\u76F8\u540C\uFF09\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u811A\u672C\u7C7B\u578B\u7684\u8BED\u8A00\u3002</p><p>\u5728\u4E00\u4E2Agroovy\u6587\u4EF6\u4E2D\u53EF\u4EE5\u6DF7\u5408\u7C7B\u578B\u7684\u5B9A\u4E49\u548C\u811A\u672C\u5B9A\u4E49\uFF0C\u4E0D\u9700\u8981\u518D\u5B9A\u4E49\u4E00\u4E2A\u548C\u6587\u4EF6\u540C\u540D\u7684\u7C7B\u3002</p><p>groovy\u4E2D\u4F7F\u7528def\u5B9A\u4E49\u53D8\u91CF\u3001\u65B9\u6CD5\u3001\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u5177\u4F53\u7684\u6570\u636E\u7C7B\u578B</p><p>groovy\u4E2D\u8BED\u53E5\u672B\u5C3E\u7684\u5206\u53F7\u53EF\u4EE5\u7701\u7565</p><h2 id="\u4E09-gradle\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E09-gradle\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u4E09 Gradle\u7684\u57FA\u672C\u4F7F\u7528</h2><h2 id="\u56DB-gradle\u9AD8\u7EA7\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u56DB-gradle\u9AD8\u7EA7\u5E94\u7528" aria-hidden="true">#</a> \u56DB Gradle\u9AD8\u7EA7\u5E94\u7528</h2>',7);function P(U,z){const r=l("ExternalLinkIcon");return n(),s("div",null,[h,c,e("p",null,[_,e("a",g,[p,o(r)]),v,u,m,y,e("a",f,[b,o(r)])]),G,e("div",x,[k,e("p",null,[J,e("a",w,[D,o(r)])]),e("p",null,[E,e("a",M,[V,o(r)])]),e("p",null,[A,e("a",L,[N,o(r)])])]),R,e("p",null,[B,e("a",H,[O,o(r)])]),e("div",j,[q,e("p",null,[C,e("a",I,[S,o(r)])]),T]),K])}var W=d(i,[["render",P],["__file","Gradle.html.vue"]]);export{W as default};
