import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as o,a as n,b as e,e as i,d as s,r as t}from"./app.3dc893b0.js";const d={},r=i('<h1 id="docker\u5BB9\u5668\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#docker\u5BB9\u5668\u6280\u672F" aria-hidden="true">#</a> Docker\u5BB9\u5668\u6280\u672F</h1><h2 id="\u4E00-docker-introduction" tabindex="-1"><a class="header-anchor" href="#\u4E00-docker-introduction" aria-hidden="true">#</a> \u4E00 Docker Introduction</h2><h3 id="_1-docker-install" tabindex="-1"><a class="header-anchor" href="#_1-docker-install" aria-hidden="true">#</a> 1. Docker Install</h3>',3),p=s("docker \u5B98\u7F51\u5B89\u88C5\u6559\u7A0B\uFF1A"),u={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},v=s("https://docs.docker.com/engine/install/centos/"),m=i(`<h4 id="docker\u7684\u5FEB\u901F\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker\u7684\u5FEB\u901F\u5B89\u88C5" aria-hidden="true">#</a> Docker\u7684\u5FEB\u901F\u5B89\u88C5</h4><p><strong>Uninstall old versions</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>install using the repository</strong> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#Set up the repository</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> -y yum-utils

<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment">#install</span>
yum makecache fast <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> -y docker-ce docker-ce-cli containerd.io <span class="token operator">&amp;&amp;</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment">#start</span>
systemctl start <span class="token function">docker</span>     <span class="token comment">#\u542F\u52A8</span>
systemctl restart <span class="token function">docker</span>   <span class="token comment">#\u91CD\u542F</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>    <span class="token comment">#\u81EA\u542F\u52A8</span>

<span class="token function">docker</span> version

<span class="token function">sudo</span> <span class="token function">docker</span> run hello-world

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>\u914D\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F\u5668</strong>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">mkdir</span> -p /etc/docker <span class="token operator">&amp;&amp;</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://puqyip19.mirror.aliyuncs.com&quot;]
}
EOF</span>

systemctl daemon-reload <span class="token operator">&amp;&amp;</span> systemctl restart <span class="token function">docker</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="\u5B89\u88C5\u6307\u5B9A\u7248\u672Cdocker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6307\u5B9A\u7248\u672Cdocker" aria-hidden="true">#</a> \u5B89\u88C5\u6307\u5B9A\u7248\u672Cdocker</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#\u627E\u5230\u6240\u6709\u53EF\u7528docker\u7248\u672C\u5217\u8868</span>
yum list docker-ce --showduplicates <span class="token operator">|</span> <span class="token function">sort</span> -r

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C\uFF0C\u7528\u4E0A\u9762\u7684\u7248\u672C\u53F7\u66FF\u6362&lt;VERSION_STRING&gt;</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span>.x86_64 docker-ce-cli-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span>.x86_64 containerd.io

<span class="token comment">#\u4F8B\u5982\uFF1A</span>
<span class="token comment">#yum install docker-ce-3:20.10.5-3.el7.x86_64 docker-ce-cli-3:20.10.5-3.el7.x86_64 containerd.io</span>

<span class="token comment">#\u6CE8\u610F\u52A0\u4E0A .x86_64 \u5927\u7248\u672C\u53F7</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-docker\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-docker\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 2. Docker\u5E38\u7528\u547D\u4EE4</h3>`,14),k={href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"},b=s("Docker\u5B98\u7F51\u2014\u5E38\u7528\u547D\u4EE4"),h=s(" \u2014\u2014 "),f={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},g=s("Docker Hub"),_=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> version

<span class="token function">docker</span> info

<span class="token function">docker</span> xxx  --help     <span class="token comment"># \u547D\u4EE4</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="images-commands" tabindex="-1"><a class="header-anchor" href="#images-commands" aria-hidden="true">#</a> Images commands</h4><p>\u955C\u50CF\u662F\u600E\u4E48\u505A\u6210\u7684? \u57FA\u7840\u73AF\u5883+\u8F6F\u4EF6 \uFF08\u4F8B\u5982 \uFF1Aredis\u7684\u5B8C\u6574\u955C\u50CF\u5E94\u8BE5\u662F\uFF1A linux\u7CFB\u7EDF + redis\u8F6F\u4EF6\uFF09</p><ul><li>alpine\uFF1A\u8D85\u7EA7\u7ECF\u5178\u7248\u7684linux 5mb\uFF1B+ redis = 29.0mb</li><li>\u6CA1\u6709alpine3\u7684\uFF1A\u5C31\u662Fcentos\u57FA\u672C\u7248</li></ul><p>\u4EE5\u540E\u81EA\u5DF1\u9009\u62E9\u4E0B\u8F7D\u955C\u50CF\u7684\u65F6\u5019\u5C3D\u91CF\u4F7F\u7528 alpine \u548C slim</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> images                            <span class="token comment">#\u67E5\u770B\u672C\u5730\u4E3B\u673A\u4E0A\u7684\u6240\u6709\u955C\u50CF</span>

<span class="token comment">#\u641C\u7D22\u955C\u50CF</span>
    <span class="token function">docker</span> search xxx                        <span class="token comment">#\u641C\u7D22\u955C\u50CF\uFF1A\u5982 mysql,redis......</span>
<span class="token function">docker</span> search redis --filter<span class="token operator">=</span>STARS<span class="token operator">=</span><span class="token number">100</span>   <span class="token comment">#\u8FC7\u6EE4\u6389STARS\u5C0F\u4E8E100\u4EE5\u4E0B\u7684</span>


<span class="token comment">#\u4E0B\u8F7D\u955C\u50CF</span>
<span class="token function">docker</span> pull xxx                          <span class="token comment">#\u4E0B\u8F7D\u955C\u50CF\uFF0C\u9ED8\u8BA4\u4E3A\u6700\u65B0\u7248\u672C</span>
<span class="token function">docker</span> pull redis <span class="token operator">==</span> <span class="token function">docker</span> pull redis:latest\uFF08\u6700\u65B0\u7248\uFF09

<span class="token function">docker</span> pull mysql:5.7                    <span class="token comment">#\u4E5F\u53EF\u6307\u5B9Adocker\u5B98\u7F51\u53EF\u67E5\u8BE2\u5230\u7684\u7248\u672C</span>


<span class="token comment">#\u5220\u9664\u955C\u50CF</span>
<span class="token function">docker</span> rmi -f imageID                    <span class="token comment">#\u6839\u636E\u955C\u50CFID\u5220\u9664\u955C\u50CF</span>
<span class="token function">docker</span> rmi -f <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images -aq<span class="token variable">)</span></span>       <span class="token comment">#\u5220\u9664\u6240\u6709\u955C\u50CF</span>

<span class="token function">docker</span> image prune   <span class="token comment">#\u79FB\u9664\u6E38\u79BB\u955C\u50CF dangling\uFF1A\u6E38\u79BB\u955C\u50CF\uFF08\u6CA1\u6709\u955C\u50CF\u540D\u5B57\u7684\uFF09</span>


<span class="token comment">#\u91CD\u547D\u540D</span>
<span class="token function">docker</span> tag \u539F\u955C\u50CF:\u6807\u7B7E \u65B0\u955C\u50CF\u540D:\u6807\u7B7E 


<span class="token function">docker</span> container inspect \u5BB9\u5668\u540D <span class="token operator">=</span> <span class="token function">docker</span> inspect \u5BB9\u5668

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="containers-commands" tabindex="-1"><a class="header-anchor" href="#containers-commands" aria-hidden="true">#</a> Containers commands</h4><p>\u4ECE\u955C\u50CF\u521B\u5EFA\u5BB9\u5668\uFF0C\u6709\u4E24\u4E2A\u547D\u4EE4\uFF1Adocker run\u7684\u7ACB\u5373\u542F\u52A8\uFF0Cdocker create\u5F97\u7A0D\u540E\u81EA\u5DF1\u624B\u52A8\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> pull centos              <span class="token comment">#\u8981\u521B\u5EFA\u5BB9\u5668\uFF0C\u5FC5\u987B\u5148\u4E0B\u8F7D\u955C\u50CF</span>
<span class="token function">docker</span> <span class="token function">ps</span>                       <span class="token comment">#\u67E5\u770B\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\uFF08-a\u67E5\u770B\u5168\u90E8\uFF0C-q\u53EA\u663E\u793Aid\uFF09</span>

<span class="token comment">#\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668\u5E76\u8FD0\u884C\u4E00\u4E2A\u547D\u4EE4</span>
<span class="token function">docker</span> run xxx
<span class="token function">docker</span> run -it centos /bin/bash <span class="token comment">#\u542F\u52A8\u5E76\u8FDB\u5165\u5BB9\u5668\uFF08\u4F7F\u7528exit\u505C\u6B62\u5E76\u9000\u51FA\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528Ctrl+P+Q\u4E0D\u505C\u6B62\u9000\u51FA\uFF09</span>
<span class="token function">docker</span> run -d centos            <span class="token comment">#\u3010\u95EE\u9898\u3011\u53D1\u73B0centos\u505C\u6B62\u4E86\uFF01\uFF1F\u539F\u56E0\uFF1Adocker\u5BB9\u5668\u4F7F\u7528\u540E\u5929\u8FD0\u884C\u5FC5\u987B\u8981\u6709\u4E00\u4E2A\u524D\u53F0\u8FDB\u7A0B</span>


<span class="token comment">#\u542F\u52A8\u548C\u505C\u6B62</span>
<span class="token function">docker</span> start   container_id     <span class="token comment">#\u542F\u52A8\u5BB9\u5668</span>
<span class="token function">docker</span> stop    container_id     <span class="token comment">#\u505C\u6B62\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\uFF08\u4F18\u96C5\u505C\u673A\uFF09</span>
<span class="token function">docker</span> <span class="token function">kill</span>    container_id     <span class="token comment">#\u5F3A\u5236\u505C\u6B62\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\uFF08kill\u662F\u5F3A\u5236kill -9\uFF0C\u7EA6\u7B49\u4E8E\u76F4\u63A5\u62D4\u7535\u6E90\uFF09</span>
<span class="token function">docker</span> restart container_id     <span class="token comment">#\u91CD\u542F\u5BB9\u5668</span>


<span class="token comment">#\u5220\u9664\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">rm</span> 86fe3bcb173e          <span class="token comment">#\u5220\u9664\u6307\u5B9Aid\u7684\u5BB9\u5668\uFF08\u4E0D\u80FD\u5220\u9664\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\uFF0C\u5982\u9700\u5F3A\u5236\u5220\u9664\u9700\u6DFB\u52A0-f\uFF09</span>
<span class="token function">docker</span> <span class="token function">rm</span> -f <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -aq<span class="token variable">)</span></span>   <span class="token comment">#\u5220\u9664\u5168\u90E8\u5BB9\u5668</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="others-commands" tabindex="-1"><a class="header-anchor" href="#others-commands" aria-hidden="true">#</a> Others commands</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> logs                              <span class="token comment">#\u65E5\u5FD7</span>
<span class="token function">docker</span> <span class="token function">top</span> container_id                  <span class="token comment">#\u67E5\u770B\u6307\u5B9A\u5BB9\u5668\u4E2D\u7684\u8FDB\u7A0B\u4FE1\u606F</span>
<span class="token function">docker</span> inspect NAME<span class="token operator">|</span>ID                   <span class="token comment">#\u83B7\u53D6\u5BB9\u5668/\u955C\u50CF\u7684\u5143\u6570\u636E</span>


<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it container_id /bin/bash   <span class="token comment">#\u8FDB\u5165\u8FD0\u884C\u7684\u5BB9\u5668\u4E2D\u6267\u884C\u547D\u4EE4</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it -u <span class="token number">0</span>:0 --privileged container_id /bin/bash  <span class="token comment"># \u4EE5\u7279\u6743\u65B9\u5F0F\u8FDB\u5165\u5BB9\u5668 \uFF080\u8868\u793A\u7528\u6237\uFF09</span>

<span class="token function">docker</span> attach -it container_id <span class="token comment">#\u8FDE\u63A5\u5230\u6B63\u5728\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\uFF08\u7ED1\u5B9A\u7684\u662F\u63A7\u5236\u53F0. \u53EF\u80FD\u5BFC\u81F4\u5BB9\u5668\u505C\u6B62\u3002\u4E0D\u8981\u7528\u8FD9\u4E2A\uFF09</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>docker volume \u6570\u636E\u5377</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> volume create xxx   <span class="token comment"># \u521B\u5EFA\u6570\u636E\u5377</span>

<span class="token function">docker</span> volume <span class="token function">ls</span>           <span class="token comment"># \u5217\u51FA\u6240\u6709\u7684\u6570\u636E\u5377</span>

<span class="token function">docker</span> volume inspect xxx  <span class="token comment"># \u67E5\u770B\u6570\u636E\u5377\u7684\u8BE6\u7EC6\u4FE1\u606F</span>


<span class="token function">docker</span> volume pause        <span class="token comment"># \u5220\u9664\u6240\u6709\u7684\u672A\u4F7F\u7528\u7684\u6570\u636E\u5377</span>

<span class="token function">docker</span> volume <span class="token function">rm</span> xxx       <span class="token comment"># \u5220\u9664\u6307\u5B9A\u7684\u6570\u636E\u5377</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-docker\u5E38\u7528\u955C\u50CF\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_3-docker\u5E38\u7528\u955C\u50CF\u5B89\u88C5" aria-hidden="true">#</a> 3. Docker\u5E38\u7528\u955C\u50CF\u5B89\u88C5</h3><p>\u5982\u4F55\u4F7F\u7528Docker\u90E8\u7F72\u7EC4\u4EF6\uFF1A 1\u3001\u5148\u53BB\u627E\u7EC4\u4EF6\u7684\u955C\u50CF 2\u3001\u67E5\u770B\u955C\u50CF\u6587\u6863\uFF0C\u4E86\u89E3\u7EC4\u4EF6\u7684\u53EF\u914D\u7F6E\u5185\u5BB9 3\u3001docker run\u8FDB\u884C\u90E8\u7F72</p><h4 id="mysql\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#mysql\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> MySql\u5B89\u88C5\u4E0E\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#\u4E0B\u8F7D\u955C\u50CF(\u6307\u5B9A\u7248\u672C)</span>
<span class="token function">docker</span> pull mysql:5.7

<span class="token comment">#\u521B\u5EFA\u5B9E\u4F8B\u5E76\u542F\u52A8mysql \uFF085.7\uFF09</span>
<span class="token function">docker</span> run -p <span class="token number">3306</span>:3306 --name mysql --restart<span class="token operator">=</span>always --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
-v /docker/data/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
-v /docker/data/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
-v /docker/data/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
-d mysql:5.7

<span class="token comment"># \u521B\u5EFAmysql\u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /docker/data/mysql/conf/mysql.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
init_connect=&#39;SET collation_connection=utf8_unicode_cli&#39;
init_connect=&#39;SET NAMES utf8&#39;
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshark
skip-name-resolve
secure_file_priv=/var/lib/mysql
EOF</span>

<span class="token function">docker</span> restart mysql                    <span class="token comment">#\u4FEE\u6539\u5B8C\u8981\u91CD\u542Fmysql</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mysql /bin/bash         <span class="token comment">#\u8FDB\u5165mysql</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u521B\u5EFA\u5B9E\u4F8B\u5E76\u542F\u52A8mysql\uFF08 8.0 \uFF09</span>
<span class="token function">docker</span> run -p <span class="token number">3306</span>:3306 --name mysql8 --restart<span class="token operator">=</span>always --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
-v /docker/data/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
-v /docker/data/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
-v /docker/data/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
-d mysql:8.0

<span class="token comment">#\u542F\u52A8\u4E24\u4E2Amysql</span>
<span class="token function">docker</span> run -p <span class="token number">3307</span>:3306 --name mysql_gmall <span class="token punctuation">\\</span>
-v /docker/data/mysql_gmall/log:/var/log/mysql <span class="token punctuation">\\</span>
-v /docker/data/mysql_gmall/data:/var/lib/mysql <span class="token punctuation">\\</span>
-v /docker/data/mysql_gmall/conf:/etc/mysql <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
-d mysql:5.7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="redis\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#redis\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> Redis\u5B89\u88C5\u4E0E\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E0B\u8F7D\u955C\u50CF</span>
<span class="token function">docker</span> pull redis

<span class="token comment">##\u521B\u5EFA\u5B9E\u4F8B\u5E76\u542F\u52A8redis</span>
<span class="token function">mkdir</span> -p /docker/data/redis/conf <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> /docker/data/redis/conf/redis.conf

<span class="token function">docker</span> run -p <span class="token number">6379</span>:6379 --name redis --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
 -v /docker/data/redis/conf/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
 -v /docker/data/redis/data:/data <span class="token punctuation">\\</span>
 -d redis redis-server /etc/redis/redis.conf


<span class="token comment">#\u914D\u7F6E\uFF08\u6301\u4E45\u5316\uFF09</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /docker/data/redis/conf/redis.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
appendonly yes
EOF</span>

<span class="token function">docker</span> restart redis                    <span class="token comment">#\u4FEE\u6539\u5B8C\u8981\u91CD\u542Fredis</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#\u6D4B\u8BD5\u6301\u4E45\u5316\u914D\u7F6E\u662F\u5426\u751F\u6548</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it redis redis-cli
<span class="token operator">&gt;</span>set name alice                     <span class="token comment"># ok</span>
<span class="token operator">&gt;</span>get name                           <span class="token comment"># &quot;alice&quot;</span>
<span class="token operator">&gt;</span>exit

<span class="token function">docker</span> restart redis
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it redis redis-cli
<span class="token operator">&gt;</span>get name                           <span class="token comment"># &quot;alice&quot;   \u6210\u529F\u4FDD\u5B58\u5230\u786C\u76D8\uFF0C\u91CD\u542F\u6570\u636E\u4F9D\u65E7\u5B58\u5728</span>
<span class="token operator">&gt;</span>exit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="elasticsearch\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#elasticsearch\u90E8\u7F72" aria-hidden="true">#</a> Elasticsearch\u90E8\u7F72</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u955C\u50CF</span>
<span class="token function">docker</span> search elasticsearch
<span class="token function">docker</span> pull elasticsearch:7.16.3

<span class="token comment"># \u521B\u5EFA\u6570\u636E\u3001\u6570\u636E\u548C\u65E5\u5FD7\u7684\u6302\u8F7D\u76EE\u5F55</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /docker/data/elk/es/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>


<span class="token comment"># \u8D4B\u4E88\u6743\u9650, docker\u4E2Delasticsearch\u7684\u7528\u6237UID\u662F1000.</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R <span class="token number">1000</span>:1000 /docker/data/elk/es


<span class="token comment"># \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</span>
<span class="token builtin class-name">cd</span> /docker/data/elk/es/config
<span class="token function">sudo</span> <span class="token function">vim</span> elasticsearch.yml
<span class="token comment">#-----------------------\u914D\u7F6E\u5185\u5BB9----------------------------------</span>
cluster.name: <span class="token string">&quot;my-es&quot;</span>
network.host: <span class="token number">0.0</span>.0.0
http.port: <span class="token number">9200</span>


<span class="token comment"># \u8FD0\u884Celasticsearch</span>
\u901A\u8FC7\u955C\u50CF\uFF0C\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5E76\u5C069200\u548C9300\u7AEF\u53E3\u6620\u5C04\u5230\u672C\u673A\uFF08elasticsearch\u7684\u9ED8\u8BA4\u7AEF\u53E3\u662F9200\uFF0C\u6211\u4EEC\u628A\u5BBF\u4E3B\u73AF\u58839200\u7AEF\u53E3\u6620\u5C04\u5230Docker\u5BB9\u5668\u4E2D\u76849200\u7AEF\u53E3\uFF09\u3002\u6B64\u5904\u5EFA\u8BAE\u7ED9\u5BB9\u5668\u8BBE\u7F6E\u56FA\u5B9Aip\uFF0C\u6211\u8FD9\u91CC\u6CA1\u8BBE\u7F6E\u3002

<span class="token function">sudo</span> <span class="token function">docker</span> run -it -d -p <span class="token number">9200</span>:9200 -p <span class="token number">9300</span>:9300 --name es --restart<span class="token operator">=</span>always -e <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms1g -Xmx1g&quot;</span> -e <span class="token string">&quot;discovery.type=single-node&quot;</span>  -v /docker/data/elk/es/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml -v /docker/data/elk/es/data:/usr/share/elasticsearch/data -v /docker/data/elk/es/logs:/usr/share/elasticsearch/logs elasticsearch:7.16.3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),x=s("\u9A8C\u8BC1\u5B89\u88C5\u662F\u5426\u6210\u529F\uFF1A\u6D4F\u89C8\u5668\u8BBF\u95EE "),y={href:"http://localhost:9200",target:"_blank",rel:"noopener noreferrer"},q=s("http://localhost:9200"),S=s(" \uFF0C\u6216\u8005\u547D\u4EE4\u884C\uFF1A"),E=n("code",null,"curl http://localhost:9200",-1),w=s(" ."),D=i(`<br><p>IK\u4E2D\u6587\u5206\u8BCD\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06Linux \u4E2D\u7684 ik \u76EE\u5F55\u590D\u5236\u5230es\u5BB9\u5668\u4E2D</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> /home/drizzle/Software/elk/ik es:/usr/share/elasticsearch/plugins/

<span class="token comment"># \u91CD\u542F\u5BB9\u5668\u5373\u53EF</span>
<span class="token function">sudo</span> <span class="token function">docker</span> restart es

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="kibana\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#kibana\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> kibana\u5B89\u88C5\u4E0E\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u955C\u50CF</span>
<span class="token function">sudo</span> <span class="token function">docker</span> pull kibana:7.16.3

<span class="token comment"># \u83B7\u53D6elasticsearch\u5BB9\u5668ip: 172.17.0.6</span>
<span class="token function">sudo</span> <span class="token function">docker</span> inspect --format <span class="token string">&#39;{{ .NetworkSettings.IPAddress }}&#39;</span> es

<span class="token comment"># \u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /docker/data/elk/kibana
<span class="token function">sudo</span> <span class="token function">touch</span> /docker/data/elk/kibana/kibana.yml
<span class="token function">sudo</span> <span class="token function">vim</span> /docker/data/elk/kibana/kibana.yml

<span class="token comment">#Default Kibana configuration for docker target</span>
server.name: kibana
server.host: <span class="token string">&quot;0&quot;</span>
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">&quot;http://172.17.0.6:9200&quot;</span><span class="token punctuation">]</span>
xpack.monitoring.ui.container.elasticsearch.enabled: <span class="token boolean">true</span>


<span class="token comment"># run kibana</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run -d --restart<span class="token operator">=</span>always --log-driver json-file --log-opt max-size<span class="token operator">=</span>100m --log-opt max-file<span class="token operator">=</span><span class="token number">2</span> --name kibana -p <span class="token number">5601</span>:5601 -v /docker/data/elk/kibana/kibana.yml:/usr/share/kibana/config/kibana.yml kibana:7.16.3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),I=s("\u6D4F\u89C8\u5668\u4E0A\u8F93\u5165\uFF1A"),O={href:"http://localhost:5601",target:"_blank",rel:"noopener noreferrer"},R=s("http://localhost:5601"),N=s("\uFF0C\u5982\u65E0\u6CD5\u8BBF\u95EE\u8FDB\u5BB9\u5668\u68C0\u67E5\u914D\u7F6E\u662F\u5426\u751F\u6548"),T=i(`<br><h4 id="nginx\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> Nginx\u5B89\u88C5\u4E0E\u914D\u7F6E</h4><p>\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /docker/data/nginx/conf/conf.d
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /docker/data/nginx/html
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /docker/data/nginx/logs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>conf \u548Cconf.d \u5206\u522B \u7528\u4E8E\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6 html \u7528\u4E8E\u653E\u7F6E\u9759\u6001\u6587\u4EF6 logs \u7528\u4E8E\u4FDD\u5B58\u65E5\u5FD7</p><br><p>\u4E0B\u8F7D\u955C\u50CF\uFF0C\u5148\u968F\u4FBF\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668\uFF0C\u590D\u5236\u76F8\u5173\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">docker</span> pull nginx

<span class="token function">sudo</span> <span class="token function">docker</span> run --name nginx-test -p <span class="token number">8088</span>:80 -d nginx 


<span class="token comment"># \u590D\u5236\u76F8\u5173\u6587\u4EF6</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> <span class="token number">622</span>:/etc/nginx/nginx.conf /docker/data/nginx/conf/nginx.conf
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> <span class="token number">622</span>:/etc/nginx/conf.d /docker/data/nginx/conf
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> <span class="token number">622</span>:/usr/share/nginx/html /docker/data/nginx/


<span class="token comment"># \u505C\u6B62\u3001\u5E76\u5220\u9664\u539F\u6765\u7684\u5BB9\u5668</span>
<span class="token function">sudo</span> <span class="token function">docker</span> stop <span class="token number">622</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token number">622</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u53CA\u6570\u636E\u4FDD\u5B58\u4F4D\u7F6E\u3001\u5E76\u542F\u52A8Nginx\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">docker</span> run --name nginx -p <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
-v /docker/data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
-v /docker/data/nginx/html/:/usr/share/nginx/html/ <span class="token punctuation">\\</span>
-v /docker/data/nginx/logs/:/var/log/nginx/ <span class="token punctuation">\\</span>
-v /docker/data/nginx/conf/conf.d/:/etc/nginx/conf.d/ <span class="token punctuation">\\</span>
--privileged<span class="token operator">=</span>true -d nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="nacos\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nacos\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> nacos\u5B89\u88C5\u4E0E\u914D\u7F6E</h4>`,13),A=s("\u6CE8\u610F\u670D\u52A1\u5668\u5185\u5B58\u4E0D\u8DB3\uFF0C\u542F\u52A8\u540E\u5185\u5B58\u6EA2\u51FA\u95EE\u9898\uFF08\u5355\u673Astandalone\u6A21\u5F0F\u9ED8\u8BA4\u670D\u52A1\u5668\u5806\u5927\u5C0F512M\uFF09"),M={href:"https://nacos.io/zh-cn/docs/what-is-nacos.html",target:"_blank",rel:"noopener noreferrer"},C=s("nacos\u5B98\u65B9\u6587\u6863"),P=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> pull nacos/nacos-server

<span class="token comment"># \u521B\u5EFA\u672C\u5730\u7684\u6620\u5C04\u6587\u4EF6\uFF1Acustom.properties</span>
<span class="token function">mkdir</span> -p /docker/data/nacos/<span class="token punctuation">{</span>init.d,logs<span class="token punctuation">}</span>
<span class="token function">touch</span> /docker/data/nacos/init.d/custom.properties

<span class="token function">cat</span> <span class="token operator">&gt;</span> /docker/data/nacos/init.d/custom.properties <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
management.endpoints.web.exposure.include=*
EOF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,2),L=s("\u521B\u5EFA\u6570\u636E\u5E93 "),V=n("code",null,"nacos_config",-1),z=s(" : \u521B\u5EFAnacos\u6570\u636E\u5E93\u540E\uFF0C\u7136\u540E\u6267\u884C\u4E0B\u9762\u7684Sql \u3002 "),F={href:"https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql",target:"_blank",rel:"noopener noreferrer"},Y=s("nacos\u5B98\u7F51\u7684Sql"),Q=s(" ."),U=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u521B\u5EFA\u5BB9\u5668\u5E76\u542F\u52A8(\u5F00\u673A\u81EA\u542F\u52A8)</span>
<span class="token function">docker</span> run -d -p <span class="token number">8848</span>:8848 --name nacos --restart always <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">PREFER_HOST_MODE</span><span class="token operator">=</span>ip <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">SPRING_DATASOURCE_PLATFORM</span><span class="token operator">=</span>mysql <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_HOST</span><span class="token operator">=</span><span class="token number">192.168</span>.5.106 <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_PORT</span><span class="token operator">=</span><span class="token number">3306</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_DB_NAME</span><span class="token operator">=</span>nacos_config <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_USER</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_DATABASE_NUM</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-v /docker/data/nacos/init.d/custom.properties:/home/nacos/init.d/custom.properties <span class="token punctuation">\\</span>
-v /docker/data/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
nacos/nacos-server

<span class="token function">docker</span> <span class="token function">ps</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="zookeeper\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#zookeeper\u5B89\u88C5" aria-hidden="true">#</a> Zookeeper\u5B89\u88C5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> pull zookeeper:3.4.13

<span class="token function">docker</span> run -p <span class="token number">2181</span>:2181 --name zookeeper --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-v /docker/zookeeper/data:/data <span class="token punctuation">\\</span>
-d zookeeper:3.4.13

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-docker-run-\u547D\u4EE4\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_4-docker-run-\u547D\u4EE4\u8BE6\u89E3" aria-hidden="true">#</a> 4. docker run \u547D\u4EE4\u8BE6\u89E3</h3><p>\u5E38\u7528\u5173\u952E\u53C2\u6570OPTIONS \u8BF4\u660E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
-d:   <span class="token comment"># \u540E\u53F0\u8FD0\u884C\u5BB9\u5668\uFF0C\u5E76\u8FD4\u56DE\u5BB9\u5668ID\uFF1B</span>
-P:   <span class="token comment"># \u968F\u673A\u7AEF\u53E3\u6620\u5C04\uFF0C\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3\u968F\u673A\u6620\u5C04\u5230\u4E3B\u673A\u7684\u7AEF\u53E3</span>
-p:   <span class="token comment"># \u6307\u5B9A\u7AEF\u53E3\u6620\u5C04\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u4E3B\u673A(\u5BBF\u4E3B)\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3</span>

-i:   <span class="token comment"># \u4EE5\u4EA4\u4E92\u6A21\u5F0F\u8FD0\u884C\u5BB9\u5668\uFF0C\u901A\u5E38\u4E0E -t \u540C\u65F6\u4F7F\u7528\uFF1B</span>
-t:   <span class="token comment"># \u4E3A\u5BB9\u5668\u91CD\u65B0\u5206\u914D\u4E00\u4E2A\u4F2A\u8F93\u5165\u7EC8\u7AEF\uFF0C\u901A\u5E38\u4E0E -i \u540C\u65F6\u4F7F\u7528</span>

--restart ,      <span class="token comment"># \u6307\u5B9A\u91CD\u542F\u7B56\u7565\uFF0C\u53EF\u4EE5\u5199--restart=awlays \u603B\u662F\u6545\u969C\u91CD\u542F</span>
--volume , -v:   <span class="token comment"># \u7ED1\u5B9A\u4E00\u4E2A\u5377\u3002\u4E00\u822C\u683C\u5F0F \u4E3B\u673A\u6587\u4EF6\u6216\u6587\u4EF6\u5939:\u865A\u62DF\u673A\u6587\u4EF6\u6216\u6587\u4EF6\u5939</span>


--name<span class="token operator">=</span><span class="token string">&quot;nginx-lb&quot;</span><span class="token builtin class-name">:</span>         <span class="token comment"># \u4E3A\u5BB9\u5668\u6307\u5B9A\u4E00\u4E2A\u540D\u79F0\uFF1B</span>
--dns <span class="token number">8.8</span>.8.8:             <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u4F7F\u7528\u7684DNS\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u548C\u5BBF\u4E3B\u4E00\u81F4\uFF1B</span>
--dns-search example.com:  <span class="token comment"># \u6307\u5B9A\u5BB9\u5668DNS\u641C\u7D22\u57DF\u540D\uFF0C\u9ED8\u8BA4\u548C\u5BBF\u4E3B\u4E00\u81F4\uFF1B</span>
-h <span class="token string">&quot;mars&quot;</span><span class="token builtin class-name">:</span>                 <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u7684hostname\uFF1B</span>

-e <span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">&quot;ritchie&quot;</span><span class="token builtin class-name">:</span>     <span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1B</span>
--env-file<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>:             <span class="token comment"># \u4ECE\u6307\u5B9A\u6587\u4EF6\u8BFB\u5165\u73AF\u5883\u53D8\u91CF\uFF1B</span>

--cpuset<span class="token operator">=</span><span class="token string">&quot;0-2&quot;</span> or --cpuset<span class="token operator">=</span><span class="token string">&quot;0,1,2&quot;</span><span class="token builtin class-name">:</span>   <span class="token comment"># \u7ED1\u5B9A\u5BB9\u5668\u5230\u6307\u5B9ACPU\u8FD0\u884C\uFF1B</span>

-m <span class="token builtin class-name">:</span>             <span class="token comment"># \u8BBE\u7F6E\u5BB9\u5668\u4F7F\u7528\u5185\u5B58\u6700\u5927\u503C\uFF1B</span>
--net<span class="token operator">=</span><span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span>  <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u7684\u7F51\u7EDC\u8FDE\u63A5\u7C7B\u578B\uFF0C\u652F\u6301 bridge/host/none/container: \u56DB\u79CD\u7C7B\u578B\uFF1B</span>

--link<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>:       <span class="token comment"># \u6DFB\u52A0\u94FE\u63A5\u5230\u53E6\u4E00\u4E2A\u5BB9\u5668\uFF1B</span>
--expose<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>:     <span class="token comment"># \u5F00\u653E\u4E00\u4E2A\u7AEF\u53E3\u6216\u4E00\u7EC4\u7AEF\u53E3\uFF1B</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_5-docker\u5BB9\u5668\u5185\u90E8\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_5-docker\u5BB9\u5668\u5185\u90E8\u64CD\u4F5C" aria-hidden="true">#</a> 5. Docker\u5BB9\u5668\u5185\u90E8\u64CD\u4F5C</h3><p>docker exec \uFF1A\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u4E2D\u6267\u884C\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it <span class="token operator">&lt;</span>container ID<span class="token operator">&gt;</span> /bin/bash      <span class="token comment"># \u8FDB\u5165\u5BB9\u5668\u5185\u90E8</span>
<span class="token builtin class-name">exit</span>                                          <span class="token comment"># \u9000\u51FAcontainer (\u6216\u8005\u4F7F\u7528Ctrl + D)</span>

<span class="token comment"># \u66F4\u6539\u5BB9\u5668\u5185\u7CFB\u7EDF\u7684root\u5BC6\u7801</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it <span class="token operator">&lt;</span>MyContainer<span class="token operator">&gt;</span> <span class="token function">bash</span>            <span class="token comment"># \u8FDB\u5165\u540E\u4FEE\u6539</span>
root@MyContainer:/<span class="token comment"># passwd</span>
Enter new UNIX password:
Retype new UNIX password:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_6-\u53EF\u89C6\u5316\u754C\u9762-portainer" tabindex="-1"><a class="header-anchor" href="#_6-\u53EF\u89C6\u5316\u754C\u9762-portainer" aria-hidden="true">#</a> 6. \u53EF\u89C6\u5316\u754C\u9762-Portainer</h3><p>Portainer\u662F\u529F\u80FD\u5F3A\u5927\u7684\u5F00\u6E90\u5DE5\u5177\u96C6\uFF0C\u53EF\u8BA9\u60A8\u8F7B\u677E\u5730\u5728Docker\uFF0CSwarm\uFF0CKubernetes\u548CAzure ACI\u4E2D\u6784\u5EFA\u548C\u7BA1\u7406\u5BB9\u5668\u3002</p><p>Portainer\u7684\u5DE5\u4F5C\u539F\u7406\u662F\u5728\u6613\u4E8E\u4F7F\u7528\u7684GUI\u540E\u9762\u9690\u85CF\u4F7F\u7BA1\u7406\u5BB9\u5668\u53D8\u5F97\u56F0\u96BE\u7684\u590D\u6742\u6027\u3002\u901A\u8FC7\u6D88\u9664\u7528\u6237\u4F7F\u7528CLI\uFF0C\u7F16\u5199YAML\u6216\u7406\u89E3\u6E05\u5355\u7684\u9700\u6C42\uFF0CPortainer\u4F7F\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8F\u548C\u89E3\u51B3\u95EE\u9898\u53D8\u5F97\u5982\u6B64\u7B80\u5355\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u505A\u5230\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">docker</span> pull portainer/portainer-ce


<span class="token comment"># \u670D\u52A1\u7AEF\u90E8\u7F72</span>

<span class="token function">sudo</span> <span class="token function">docker</span> volume create portainer_data

<span class="token function">sudo</span> <span class="token function">docker</span> run -d -p <span class="token number">8000</span>:8000 -p <span class="token number">9000</span>:9000 --name<span class="token operator">=</span>portainer --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-v /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
-v portainer_data:/data portainer/portainer-ce
<span class="token comment"># \u8BBF\u95EE 9000 \u7AEF\u53E3\u5373\u53EF</span>


<span class="token comment"># agent\u7AEF\u90E8\u7F72</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run -d -p <span class="token number">9001</span>:9001 --name portainer_agent --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-v /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
-v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="\u4E8C-dockerfile\u6784\u5EFA\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E8C-dockerfile\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a> \u4E8C Dockerfile\u6784\u5EFA\u955C\u50CF</h2>`,19),G=s("dockerfile\uFF1A"),B={href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#dockerfile-instructions",target:"_blank",rel:"noopener noreferrer"},W=s("https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#dockerfile-instructions"),X=s("\u83DC\u9E1F\u6559\u7A0B\uFF1A"),$={href:"https://www.runoob.com/docker/docker-dockerfile.html",target:"_blank",rel:"noopener noreferrer"},H=s("https://www.runoob.com/docker/docker-dockerfile.html"),K=n("br",null,null,-1),j=n("h2",{id:"\u4E09-docker-compose",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E09-docker-compose","aria-hidden":"true"},"#"),s(" \u4E09 Docker Compose")],-1),J={href:"https://docs.docker.com/compose/gettingstarted/",target:"_blank",rel:"noopener noreferrer"},Z=s("Get started with Docker Compose"),nn={href:"https://docs.docker.com/samples/wordpress/",target:"_blank",rel:"noopener noreferrer"},sn=s("You can use Docker Compose to easily run WordPress"),an={href:"https://www.runoob.com/docker/docker-compose.html",target:"_blank",rel:"noopener noreferrer"},en=s("\u83DC\u9E1F\u6559\u7A0B"),cn=s(" \xA0"),ln={href:"https://docs.docker.com/compose/install/#install-compose",target:"_blank",rel:"noopener noreferrer"},on=s("install-compose\uFF1A"),tn=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#To install a different version of Compose, substitute 1.29.2 with the version of Compose you want to use</span>
<span class="token function">sudo</span> <span class="token function">curl</span> -L <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.29.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -s<span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m<span class="token variable">)</span></span>&quot;</span> -o /usr/local/bin/docker-compose

<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token function">docker-compose</span> --version                          <span class="token comment">#Test the installation</span>


<span class="token comment">#To uninstall Docker Compose if you installed using curl:</span>
<span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function dn(rn,pn){const a=t("ExternalLinkIcon");return l(),o("div",null,[r,n("p",null,[p,n("a",u,[v,e(a)])]),m,n("p",null,[n("a",k,[b,e(a)]),h,n("a",f,[g,e(a)])]),_,n("p",null,[x,n("a",y,[q,e(a)]),S,E,w]),D,n("p",null,[I,n("a",O,[R,e(a)]),N]),T,n("p",null,[A,n("a",M,[C,e(a)])]),P,n("p",null,[L,V,z,n("a",F,[Y,e(a)]),Q]),U,n("p",null,[G,n("a",B,[W,e(a)])]),n("p",null,[X,n("a",$,[H,e(a)])]),K,j,n("p",null,[n("a",J,[Z,e(a)])]),n("p",null,[n("a",nn,[sn,e(a)])]),n("p",null,[n("a",an,[en,e(a)]),cn]),n("p",null,[n("a",ln,[on,e(a)])]),tn])}var mn=c(d,[["render",dn],["__file","Docker.html.vue"]]);export{mn as default};
