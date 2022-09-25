import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c,a as n,b as e,e as l,d as s,r as o}from"./app.3dc893b0.js";var d="/blog/assets/image-20220318112150056.ea8c395d.png",p="/blog/assets/image-20220318084801233.6ed7e750.png";const r={},v=l('<h1 id="mysql\u7684\u5B89\u88C5\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#mysql\u7684\u5B89\u88C5\u548C\u4F7F\u7528" aria-hidden="true">#</a> MySQL\u7684\u5B89\u88C5\u548C\u4F7F\u7528</h1><h2 id="\u4E00-\u6570\u636E\u5E93\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u6570\u636E\u5E93\u7B80\u4ECB" aria-hidden="true">#</a> \u4E00 \u6570\u636E\u5E93\u7B80\u4ECB</h2><p>\u6570\u636E\u5E93\u7684\u751F\u4EA7\u5382\u5546\u4E3A\u4E86\u5360\u6709\u5E02\u573A\u4EFD\u989D\uFF0C\u90FD\u4F1A\u5728\u6807\u51C6SQL\u7684\u57FA\u7840\u4E0A\u6269\u5C55\u4E00\u4E9B\u81EA\u5DF1\u7684\u4E1C\u897F\u4EE5\u5438\u5F15\u7528\u6237\u3002</p><br><p>\u5E38\u7528\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF1A</p><table><thead><tr><th>\u5173\u7CFB\u578B\u6570\u636E\u5E93</th><th>\u5F00\u53D1\u516C\u53F8</th><th>\u4F7F\u7528\u8BED\u8A00</th></tr></thead><tbody><tr><td>access</td><td>\u5FAE\u8F6F\u516C\u53F8</td><td>SQL</td></tr><tr><td>SQL Server</td><td>\u5FAE\u8F6F\u516C\u53F8</td><td>T-SQL</td></tr><tr><td>Oracle</td><td>\u7532\u9AA8\u6587\u516C\u53F8</td><td>PL/SQL</td></tr><tr><td>MySQL</td><td>\u88AB\u7532\u9AA8\u6587\u516C\u53F8\u6536\u8D2D</td><td>MySQL</td></tr></tbody></table><ul><li><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>Oracle</strong></span>\uFF0C\u662F\u7531oracle\u8FD9\u4E2A\u516C\u53F8\u5F00\u53D1\u7684\u4E00\u4E2A\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF0C\u76EE\u524D\u662F\u5E02\u9762\u4E0A\u4F7F\u7528\u7684\u6700\u591A\u7684\u4E00\u6B3E\u6536\u8D39\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93</li><li><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>MySQL</strong></span>\uFF0CMySQL\u6570\u636E\u5E93\u662F\u514D\u8D39\u7684\u6570\u636E\u5E93\u4E2D\u4F7F\u7528\u7387\u7684\u6700\u9AD8\u7684\uFF0C\u4E4B\u524D\u662F\u7531\u4E2A\u4EBA\u5F00\u53D1\u8005\u6765\u5F00\u53D1\u548C\u5F00\u6E90\u7684\uFF0C\u76EE\u524D\u5DF2\u7ECF\u88ABOracle\u8FD9\u4E2A\u516C\u53F8\u6536\u8D2D\u4E86</li><li><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>SQL server</strong></span>\uFF0C\u662F\u5FAE\u8F6F\u7684\u4E00\u4E2A\u4EA7\u54C1\u3002</li><li>Access\uFF0C\u662Foffice\u5957\u4EF6\u4E2D\u7684\u4E00\u5458\uFF0C\u76EE\u524D\u5F88\u5C11\u6709\u516C\u53F8\u548C\u4E2A\u4EBA\u5728\u4F7F\u7528</li><li>MariaDB\uFF0C\u662FMySQL\u7684\u4F5C\u8005\u91CD\u65B0\u5F00\u53D1\u7684\u4E00\u4E2A\u5F00\u6E90\u7684\u6570\u636E\u5E93\u4EA7\u54C1\uFF0C\u76EE\u524D\u662F\u514D\u8D39\u7684</li><li>SQLlite\uFF0C\u662F\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u6570\u636E\u5E93\u4EA7\u54C1\uFF0C\u5728Android\u624B\u673A\u4E2D\uFF0C\u5C31\u4F7F\u7528\u4E86SQLite\u6765\u5B58\u50A8\u548C\u7BA1\u7406\u901A\u8BAF\u5F55\u3001\u77ED\u4FE1\u7B49\u5185\u5BB9</li><li>OceanBase\uFF0C\u662F\u7531\u8682\u8681\u91D1\u670D\u5F00\u6E90\u7684\u4E00\u4E2A\u6570\u636E\u5E93\u4EA7\u54C1\u3002</li></ul><br><p><strong>\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93</strong>\uFF1A\u662F\u4F5C\u4E3A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u4E00\u4E2A\u8865\u5145\u3002</p><p>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u5927\u591A\u6570\u7684\u4EA7\u54C1\u90FD\u662F\u628A\u6570\u636E\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A\uFF0C\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A\u7684\u6570\u636E\u9700\u8981\u7ECF\u8FC7IO\uFF0C\u8BFB\u5199\u901F\u5EA6\u6BD4\u8F83\u6162\u3002</p><p>\u4F46\u662F\u6709\u4E00\u4E9B\u4E1A\u52A1\u573A\u666F\u662F\u9700\u8981\u8BFB\u5199\u901F\u5EA6\u6BD4\u8F83\u5FEB\u7684\uFF0C\u6240\u4EE5\u5C31\u6709\u4E86\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u3002</p><p>\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u5982\u4F55\u505A\u5230\u8BFB\u5199\u901F\u5EA6\u6BD4\u8F83\u5FEB\u5462\uFF1F\u4E00\u822C\u7684\u7B56\u7565\u662F\u628A\u6570\u636E\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u3002</p><p>\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u8FD8\u6709\u540D\u5B57\uFF0C\u53EB\u505ANoSQL\uFF08NOSQL\uFF1ANot only SQL\uFF09</p><p>\u6709\u54EA\u4E9B\u4EA7\u54C1\u5462\uFF1F</p><ul><li><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>Redis\uFF0C\u662F\u76EE\u524D\u4F7F\u7528\u7684\u6700\u591A\u7684\u4E00\u4E2A\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4EA7\u54C1\uFF0C\u662F\u5F00\u6E90\u7684\uFF0C\u514D\u8D39\u7684\u3002</strong></span></li><li>Memcache\uFF0C\u662F\u4E00\u4E2A\u6BD4\u8F83\u8001\u7684\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4EA7\u54C1\uFF0C\u76EE\u524D\u5DF2\u7ECF\u88ABRedis\u5B8C\u5168\u53D6\u4EE3\u4E86</li><li>MongoDB\uFF0C\u76EE\u524D\u6709\u4E0A\u5347\u7684\u6001\u52BF\uFF0C\u4F46\u662F\u4F7F\u7528\u7387\u8FD8\u4E0D\u591F</li><li>Hbase\uFF0C\u662F\u5927\u6570\u636E\u9886\u57DF\u5E38\u7528\u7684\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93</li></ul><br><h2 id="\u4E8C-\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u5B89\u88C5mysql" aria-hidden="true">#</a> \u4E8C \u5B89\u88C5MySQL</h2><p>MySQL\u662F\u4E00\u4E2AC/S\u67B6\u6784\u7684\u8F6F\u4EF6\uFF0C\u6211\u4EEC\u5B89\u88C5\u7684MySQL \u662F\u670D\u52A1\u7AEF\u3002MySQL \u7684\u5BA2\u6237\u7AEF\u6709\u5F88\u591A\uFF0C\u6709\u81EA\u5E26\u7684\uFF0C\u6709\u7B2C\u4E09\u65B9\u7684\u3002</p><ul><li>\u547D\u4EE4\u884C\u5BA2\u6237\u7AEF</li><li>\u56FE\u5F62\u5316\u754C\u9762\u7684\u5BA2\u6237\u7AEF <ul><li>navicat</li><li>sql yog</li><li>dbeaver</li><li>workbench</li><li>\u2026</li></ul></li></ul><br>',20),m=s("MySQL5.7\u6587\u6863\uFF1A"),u={href:"https://dev.mysql.com/doc/refman/5.7/en/",target:"_blank",rel:"noopener noreferrer"},b=s("https://dev.mysql.com/doc/refman/5.7/en/"),k=s("MySQL8.0\u6587\u6863\uFF1A"),_={href:"https://dev.mysql.com/doc/refman/8.0/en/",target:"_blank",rel:"noopener noreferrer"},y=s("https://dev.mysql.com/doc/refman/8.0/en/"),g=n("br",null,null,-1),h=s("\u4E0B\u8F7DMySQL\uFF1A"),f={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},q=s("https://dev.mysql.com/downloads/mysql/"),L=n("p",null,[n("img",{src:d,alt:"image-20220318112150056",loading:"lazy"})],-1),E=n("br",null,null,-1),M=s("\u5B89\u88C5MySQL\uFF1A\u53C2\u7167blog "),T={href:"https://blog.csdn.net/drizzletowne/article/details/120896774",target:"_blank",rel:"noopener noreferrer"},N=s("https://blog.csdn.net/drizzletowne/article/details/120896774"),S=n("br",null,null,-1),I=n("h3",{id:"_1-\u538B\u7F29\u5305\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u538B\u7F29\u5305\u65B9\u5F0F","aria-hidden":"true"},"#"),s(" 1. \u538B\u7F29\u5305\u65B9\u5F0F")],-1),A=n("p",null,"\u4E0B\u4E3ALinux\u901A\u7528\u7248\u672C\u4E0B\u8F7D\u9009\u9879\uFF08Windows\u7C7B\u4F3C\uFF09\uFF1A",-1),R=n("p",null,[n("img",{src:p,alt:"image-20220318084801233",loading:"lazy"})],-1),O=n("br",null,null,-1),D=n("strong",null,"Linux\u4E0B\u7684\u5B89\u88C5\u6B65\u9AA4",-1),Q=s("\uFF1A"),x={href:"https://dev.mysql.com/doc/refman/5.7/en/binary-installation.html",target:"_blank",rel:"noopener noreferrer"},B=s("https://dev.mysql.com/doc/refman/5.7/en/binary-installation.html"),C=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">0</span>.  \u76EE\u6807\uFF1A\u5C06 mysql5.7 \u5B89\u88C5\u5230  /usr/local/mysql <span class="token punctuation">(</span>\u4E0D\u5EFA\u8BAE\u5B89\u88C5\u5230\u5176\u4ED6\u4F4D\u7F6E\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4socket\u8FDE\u63A5\u5931\u8D25<span class="token punctuation">)</span>

    \u51C6\u5907\uFF1A\u5728/usr/local/ \u76EE\u5F55\u4E0B\u521B\u5EFA mysql \u548C software \u76EE\u5F55


<span class="token number">1</span>. \u4E0B\u8F7D mysql\u7684\u538B\u7F29\u5305 <span class="token punctuation">(</span>\u6216\u4E0A\u4F20\u81EA\u5DF1\u5DF2\u4E0B\u8F7D\u7684\u538B\u7F29\u5305\u5230\u6307\u5B9A\u76EE\u5F55\u5373\u53EF<span class="token punctuation">)</span>
<span class="token builtin class-name">cd</span> /usr/local/software
<span class="token function">wget</span> http://dev.MySQL.com/get/Downloads/MySQL-5.7/mysql-5.7.37-Linux-glibc2.12-x86_64.tar.gz


<span class="token number">2</span>\u3001\u89E3\u538B\u5E76\u590D\u5236\u5230 mysql\u76EE\u5F55

<span class="token function">tar</span> -xvf mysql-5.7.37-Linux-glibc2.12-x86_64.tar.gz

<span class="token function">mv</span> ./mysql-5.7.37-linux-glibc2.12-x86_64/* /usr/local/mysql/



<span class="token number">3</span>\u3001\u5B89\u88C5\u4F9D\u8D56\u3001\u521B\u5EFAmysql\u7528\u6237\u7EC4\u53CA\u5176\u7528\u6237

yum <span class="token function">install</span> libaio   \uFF08Ubuntu\u4F7F\u7528\uFF1Asudo <span class="token function">apt-get</span> <span class="token function">install</span> libaio1\uFF09

<span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> -r -g mysql -s /bin/false mysql



<span class="token number">4</span>\u3001\u521B\u5EFA\u76F8\u5173\u76EE\u5F55\u3001\u8BBE\u7F6E\u6743\u9650\u3001\u521D\u59CB\u5316mysql 

<span class="token builtin class-name">cd</span> /usr/local/mysql/

<span class="token function">mkdir</span> mysql-files
<span class="token function">chown</span> mysql:mysql mysql-files
<span class="token function">chmod</span> <span class="token number">750</span> mysql-files

bin/mysqld --initialize --user<span class="token operator">=</span>mysql  <span class="token comment"># \u8BB0\u4F4F\u672B\u5C3E\u81EA\u52A8\u751F\u6210\u7684root\u5BC6\u7801 \u5982\uFF1AlZw.qSdCS7pV</span>
bin/mysql_ssl_rsa_setup
bin/mysqld_safe --user<span class="token operator">=</span>mysql <span class="token operator">&amp;</span>


<span class="token number">5</span>. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF
<span class="token function">vim</span> /etc/profile.d/mysql.sh  <span class="token comment"># \u5728\u91CC\u9762\u52A0\u5165: </span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/mysql/bin

<span class="token builtin class-name">source</span>  /etc/profile  <span class="token comment"># \u4F7F\u7528source\u547D\u4EE4\u4F7F\u4FEE\u6539\u7ACB\u523B\u751F\u6548\uFF1A  </span>


<span class="token number">6</span>. \u5C06mysql\u6DFB\u52A0\u5230\u542F\u52A8\u9879

<span class="token function">cp</span> support-files/mysql.server /etc/init.d/mysql.server

<span class="token function">chkconfig</span> --add mysql.server  \uFF08 \u6216 systemctl <span class="token builtin class-name">enable</span> mysql.server\uFF09


<span class="token number">7</span>. \u4F7F\u7528 \uFF08\u9996\u6B21\u4F7F\u7528\u9700\u8981\u5148\u4FEE\u6539\u5BC6\u7801\uFF09

mysql -uroot -p

mysql<span class="token operator">&gt;</span> alter user user<span class="token punctuation">(</span><span class="token punctuation">)</span> identified by <span class="token string">&quot;123456&quot;</span><span class="token punctuation">;</span>


<span class="token number">8</span>. \u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F
/etc/init.d/mysql.server start
/etc/init.d/mysql.server stop
/etc/init.d/mysql.server restart


<span class="token number">9</span>. \u5176\u4ED6\u5E38\u7528\u547D\u4EE4
<span class="token operator">&gt;</span>mysql status<span class="token punctuation">;</span>                            <span class="token comment"># \u67E5\u770Bmysql\u57FA\u672C\u4FE1\u606F</span>
<span class="token operator">&gt;</span>mysql SHOW VARIABLES LIKE <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>  <span class="token comment"># \u67E5\u770B\u6570\u636E\u5E93\u5B57\u7B26\u96C6\u76F8\u5173\u8BBE\u7F6E\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7B80\u5355\u914D\u7F6Emysql</span>

<span class="token function">vi</span> /etc/my.cnf   <span class="token comment"># \u6DFB\u52A0\u5982\u4E0B\u4FE1\u606F\uFF1A</span>

<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>

<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character-set-server<span class="token operator">=</span>utf8
default-storage-engine<span class="token operator">=</span>INNODB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3010\u6CE8\u610F\u3011\u5173\u4E8ELinux\u4E0B\u6CA1\u6709my.cnf\u7684\u60C5\u5F62\uFF1A\u4ECE5.7.18\u5F00\u59CB\u5B98\u65B9\u4E0D\u518D\u4E8C\u8FDB\u5236\u5305\u4E2D\u63D0\u4F9Bmy-default.cnf\u6587\u4EF6\u3002</p><br><p><span style="font:normal bold 22px arial,sans-serif;color:blue;">Navicat\u65E0\u6CD5\u8FDE\u63A5Mysql\u65F6\uFF1A</span></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>. \u6253\u5F00\u6570\u636E\u5E93\uFF1Ause mysql\u3002\u68C0\u7D22 user \u548C <span class="token function">host</span> \u5B57\u6BB5
mysql<span class="token operator">&gt;</span> use mysql<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> user, <span class="token function">host</span> from user<span class="token punctuation">;</span> 

<span class="token number">2</span>. \u5982\u679C\u6CA1\u6709 <span class="token assign-left variable">user</span><span class="token operator">=</span>root \uFF0Chost <span class="token operator">=</span> % \u7684\u7528\u6237\uFF0C\u5219\u6267\u884C\u4E0B\u9762\u8BED\u53E5\uFF1A
mysql<span class="token operator">&gt;</span> update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;%&#39;</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>

<span class="token number">3</span>. \u7ED9 root \u6388\u6743\uFF08\u6240\u6709\u6743\u9650\uFF09, \u5E76\u8BA9\u8D4B\u4E88\u7684\u6743\u9650\u7ACB\u5373\u751F\u6548
mysql<span class="token operator">&gt;</span> GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span> WITH GRANT OPTION<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush   privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>Windows\u4E0B\u7684\u5B89\u88C5\u6B65\u9AA4</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5C06\u538B\u7F29\u5305\u89E3\u538B\u5230\u9700\u8981\u5B89\u88C5\u7684\u76EE\u5F55\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4\uFF1A

<span class="token number">1</span>. \u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6 my.ini \uFF0C\u5B58\u653E\u7684\u8DEF\u5F84\u4E3AMySQL\u7684\u6839\u76EE\u5F55\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A
    <span class="token punctuation">[</span>client<span class="token punctuation">]</span>
    <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>

    <span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
    default-character-set<span class="token operator">=</span>utf8

    <span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
    character-set-server<span class="token operator">=</span>utf8
    default-storage-engine<span class="token operator">=</span>INNODB
    <span class="token assign-left variable">explicit_defaults_for_timestamp</span><span class="token operator">=</span>true
    basedir <span class="token operator">=</span> D:<span class="token punctuation">\\</span>Develop<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>mysql-5.7.37
    datadir <span class="token operator">=</span> D:<span class="token punctuation">\\</span>Develop<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>mysql-5.7.37<span class="token punctuation">\\</span>data


<span class="token number">2</span>. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF \uFF08\u6700\u597D\u8BB0\u5F97\u8BBE\u7F6E\uFF0C\u4E0D\u7136\u5927\u6982\u7387\u8981\u51FA\u95EE\u9898\uFF09

    \u6253\u5F00MySQL\u7684bin\u76EE\u5F55\uFF0C\u590D\u5236\u6B64\u8DEF\u5F84\uFF0C\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF


<span class="token number">3</span>. \u521D\u59CB\u5316MySQL\uFF08\u751F\u6210data\u76EE\u5F55\uFF09

    \u547D\u4EE4\u884C\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A<span class="token punctuation">(</span>\u4EE5\u4E0B\u547D\u540D\u5168\u90E8\u5728\u4EE5\u7BA1\u7406\u5458\u6A21\u5F0F\u6253\u5F00\u7684<span class="token punctuation">)</span>

    mysqld --initialize-insecure


<span class="token number">4</span>. \u6CE8\u518CMySQL\u670D\u52A1

    mysqld -install


<span class="token number">5</span>. \u542F\u52A8MySQL\u670D\u52A1

    net start mysql


<span class="token number">6</span>. \u4FEE\u6539\u9ED8\u8BA4\u8D26\u6237\u5BC6\u7801

    mysqladmin -u root password <span class="token number">123456</span>


<span class="token number">7</span>. \u767B\u5F55\u4F7F\u7528 

    mysql -uroot -p


\u5378\u8F7DMySQL\uFF1A

    net stop mysql

    mysqld -remove mysql

    \u6700\u540E\u5220\u9664MySQL\u76EE\u5F55\u53CA\u76F8\u5173\u7684\u73AF\u5883\u53D8\u91CF\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-rpm\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-rpm\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 2. RPM\u7684\u65B9\u5F0F</h3><p>\u5378\u8F7DMySQL\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span> \u5220\u9664Mysql

   yum remove  mysql mysql-server mysql-libs mysql-server<span class="token punctuation">;</span>

   <span class="token function">find</span> / -name mysql \u5C06\u627E\u5230\u7684\u76F8\u5173\u4E1C\u897Fdelete\u6389<span class="token punctuation">(</span>rm -rf /var/lib/mysql<span class="token punctuation">)</span>\uFF1B

   <span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> mysql<span class="token punctuation">(</span>\u67E5\u8BE2\u51FA\u6765\u7684\u4E1C\u4E1Cyum remove\u6389<span class="token punctuation">)</span>

   <span class="token function">rm</span> /etc/my.cnf


\u67E5\u770B\u662F\u5426\u8FD8\u6709mysql\u8F6F\u4EF6\uFF1A\u5982\u679C\u5B58\u5728\u7684\u8BDD\uFF0C\u7EE7\u7EED\u5220\u9664\u5373\u53EF\u3002
<span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> mysql



a\uFF09\u67E5\u770B\u7CFB\u7EDF\u4E2D\u662F\u5426\u4EE5rpm\u5305\u5B89\u88C5\u7684mysql\uFF1A

<span class="token function">rpm</span> -qa <span class="token operator">|</span> <span class="token function">grep</span> -i mysql


b<span class="token punctuation">)</span>\u5378\u8F7Dmysql

<span class="token function">rpm</span> -e MySQL-server-5.6.17-1.el6.i686
<span class="token function">rpm</span> -e MySQL-client-5.6.17-1.el6.i686


c<span class="token punctuation">)</span>\u5220\u9664mysql\u670D\u52A1

<span class="token function">chkconfig</span> --list <span class="token operator">|</span> <span class="token function">grep</span> -i mysql
<span class="token function">chkconfig</span> --del mysql


d<span class="token punctuation">)</span>\u5220\u9664\u5206\u6563mysql\u6587\u4EF6\u5939

<span class="token function">whereis</span> mysql \u6216\u8005 <span class="token function">find</span> / -name mysql

\u6E05\u7A7A\u76F8\u5173mysql\u7684\u6240\u6709\u76EE\u5F55\u4EE5\u53CA\u6587\u4EF6
<span class="token function">rm</span> -rf /usr/lib/mysql
<span class="token function">rm</span> -rf /usr/share/mysql
<span class="token function">rm</span> -rf /usr/my.cnf


\u901A\u8FC7\u4EE5\u4E0A\u51E0\u6B65\uFF0Cmysql\u5E94\u8BE5\u5DF2\u7ECF\u5B8C\u5168\u5378\u8F7D\u5E72\u51C0\u4E86.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-\u914D\u7F6E\u6587\u4EF6\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u6587\u4EF6\u53C2\u6570" aria-hidden="true">#</a> 3. \u914D\u7F6E\u6587\u4EF6\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql --help<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;my.cnf&#39;</span>      <span class="token comment"># \u67E5\u770Bmysql\u9ED8\u8BA4\u8BFB\u53D6my.cnf\u7684\u76EE\u5F55</span>

<span class="token comment"># \u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u4F7F\u7528\u6307\u5B9A\u76EE\u5F55\u7684my.cnf\uFF0Cmysql\u542F\u52A8\u65F6\u4F1A\u8BFB\u53D6\u5B89\u88C5\u76EE\u5F55\u6839\u76EE\u5F55\u53CA\u9ED8\u8BA4\u76EE\u5F55\u4E0B\u7684my.cnf\u6587\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><details class="custom-container details"><summary>MySQL\u914D\u7F6E\u6587\u4EF6</summary><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment"># my.cnf</span>

[client]
<span class="token comment">#########################################################################</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#                         MySQL\u5BA2\u6237\u7AEF\u914D\u7F6E                               #</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#########################################################################</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306 </span>
<span class="token comment"># MySQL\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u7AEF\u53E3\u53F7 (\u5982\u679C\u5BA2\u6237\u7AEF\u94FE\u63A5\u6570\u636E\u5E93\u65F6\uFF0C\u6CA1\u6709\u6307\u5B9A\u7AEF\u53E3\u53F7\uFF0C\u5219\u9ED8\u8BA4\u4E3A3306)</span>

<span class="token key attr-name">socket</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/mysql.sock</span>
<span class="token comment"># \u7528\u4E8E\u672C\u5730\u8FDE\u63A5\u7684Unix\u5957\u63A5\u5B57\u6587\u4EF6\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">default-character-set</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4</span>
<span class="token comment"># MySQL\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u5B57\u7B26\u96C6</span>

[mysql]
<span class="token comment">#########################################################################</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#                         MySQL\u547D\u4EE4\u884C\u914D\u7F6E                               #</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#########################################################################</span>
auto-rehash
<span class="token comment"># \u5F00\u542Ftab\u8865\u9F50\u529F\u80FD</span>

<span class="token key attr-name">socket</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/mysql.sock</span>
<span class="token comment"># \u7528\u4E8E\u672C\u5730\u8FDE\u63A5\u7684Unix\u5957\u63A5\u5B57\u6587\u4EF6\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">default-character-set</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4</span>
<span class="token comment"># MySQL\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u5B57\u7B26\u96C6</span>

<span class="token key attr-name">max_allowed_packet</span> <span class="token punctuation">=</span> <span class="token value attr-value">256M</span>
<span class="token comment"># \u6307\u5B9A\u5728\u7F51\u7EDC\u4F20\u8F93\u4E2D\u4E00\u6B21\u6D88\u606F\u4F20\u8F93\u91CF\u7684\u6700\u5927\u503C\u3002\u7CFB\u7EDF\u9ED8\u8BA4\u503C \u4E3A1MB\uFF0C\u6700\u5927\u503C\u662F1GB\uFF0C\u5FC5\u987B\u8BBE\u7F6E1024\u7684\u500D\u6570\u3002</span>

[mysqld]
<span class="token comment">#########################################################################</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#                         MySQL\u670D\u52A1\u7AEF\u914D\u7F6E                               #</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#########################################################################</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#               General                #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>
<span class="token comment"># MySQL\u670D\u52A1\u7AEF\u9ED8\u8BA4\u76D1\u542C\u7684TCP/IP\u7AEF\u53E3</span>

<span class="token key attr-name">socket</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/mysql.sock</span>
<span class="token comment"># \u7528\u4E8E\u672C\u5730\u8FDE\u63A5\u7684Unix\u5957\u63A5\u5B57\u6587\u4EF6\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">pid_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/mysql.pid</span>
<span class="token comment"># \u8FDB\u7A0BID\u6587\u4EF6\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">basedir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/app/mysql</span>
<span class="token comment"># MySQL\u8F6F\u4EF6\u5B89\u88C5\u8DEF\u5F84</span>

<span class="token key attr-name">datadir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306</span>
<span class="token comment"># MySQL\u6570\u636E\u6587\u4EF6\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">tmpdir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306</span>
<span class="token comment"># MySQL\u4E34\u65F6\u6587\u4EF6\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">character_set_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4</span>
<span class="token comment"># MySQL\u670D\u52A1\u7AEF\u5B57\u7B26\u96C6</span>

<span class="token key attr-name">collation_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4_general_ci</span>
<span class="token comment"># MySQL\u670D\u52A1\u7AEF\u6821\u5BF9\u89C4\u5219</span>

<span class="token key attr-name">default-storage-engine</span> <span class="token punctuation">=</span> <span class="token value attr-value">InnoDB</span>
<span class="token comment"># \u8BBE\u7F6E\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE\u4E3AInnoDB</span>

<span class="token key attr-name">autocommit</span> <span class="token punctuation">=</span> <span class="token value attr-value">OFF</span>
<span class="token comment"># \u9ED8\u8BA4\u4E3AON\uFF0C\u8BBE\u7F6E\u4E3AOFF\uFF0C\u5173\u95ED\u4E8B\u52A1\u81EA\u52A8\u63D0\u4EA4</span>

<span class="token key attr-name">transaction_isolation</span> <span class="token punctuation">=</span> <span class="token value attr-value">READ-COMMITTED</span>
<span class="token comment"># MySQL\u652F\u63014\u79CD\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\uFF0C\u4ED6\u4EEC\u5206\u522B\u662F\uFF1A</span>
<span class="token comment"># READ-UNCOMMITTED, READ-COMMITTED, REPEATABLE-READ, SERIALIZABLE.</span>
<span class="token comment"># \u5982\u6CA1\u6709\u6307\u5B9A\uFF0CMySQL\u9ED8\u8BA4\u91C7\u7528\u7684\u662FREPEATABLE-READ\uFF0CORACLE\u9ED8\u8BA4\u7684\u662FREAD-COMMITTED</span>

<span class="token key attr-name">event_scheduler</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON </span>
<span class="token comment"># \u5F00\u542F\u4E8B\u4EF6\u8C03\u5EA6\u5668event_scheduler</span>

<span class="token comment">#explicit_defaults_for_timestamp = ON</span>
<span class="token comment"># \u63A7\u5236TIMESTAMP\u6570\u636E\u7C7B\u578B\u7684\u7279\u6027\uFF0C\u9ED8\u8BA4OFF\uFF0C\u8BBE\u7F6E\u4E3AON\uFF0Cupdate \u65F6timestamp\u5217\u5173\u95ED\u81EA\u52A8\u66F4\u65B0\u3002\uFF08\u5C06\u6765\u4F1A\u88AB\u5E9F\u5F03\uFF09</span>

<span class="token key attr-name">lower_case_table_names</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># \u5E93\u540D\u3001\u8868\u540D\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8BBE\u7F6E1\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u521B\u5EFA\u7684\u8868\u3001\u6570\u636E\u5E93\u90FD\u4EE5\u5C0F\u5199\u5F62\u5F0F\u5B58\u653E\u78C1\u76D8\u3002</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#       Network &amp; Connection           #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
<span class="token key attr-name">max_connections</span> <span class="token punctuation">=</span> <span class="token value attr-value">1000</span>
<span class="token comment"># MySQL\u5141\u8BB8\u7684\u6700\u5927\u5E76\u53D1\u8FDE\u63A5\u6570\uFF0C\u9ED8\u8BA4\u503C151\uFF0C\u5982\u679C\u7ECF\u5E38\u51FA\u73B0Too Many Connections\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u5219\u9700\u8981\u589E\u5927\u6B64\u503C\u3002</span>

<span class="token key attr-name">max_user_connections</span> <span class="token punctuation">=</span> <span class="token value attr-value">1000</span>
<span class="token comment"># \u6BCF\u4E2A\u6570\u636E\u5E93\u7528\u6237\u7684\u6700\u5927\u8FDE\u63A5\uFF0C\uFF08\u540C\u4E00\u4E2A\u8D26\u53F7\u80FD\u591F\u540C\u65F6\u8FDE\u63A5\u5230mysql\u670D\u52A1\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF09\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u9650\u5236\u3002</span>

<span class="token key attr-name">back_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">500</span>
<span class="token comment"># MySQL\u76D1\u542CTCP\u7AEF\u53E3\u65F6\u8BBE\u7F6E\u7684\u79EF\u538B\u8BF7\u6C42\u6808\u5927\u5C0F\uFF0C\u9ED8\u8BA450+(max_connections/5)\uFF0C\u6700\u5927\u4E0D\u8D85\u8FC7900</span>

<span class="token key attr-name">max_connect_errors</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token comment"># \u6BCF\u4E2A\u4E3B\u673A\u7684\u8FDE\u63A5\u8BF7\u6C42\u5F02\u5E38\u4E2D\u65AD\u7684\u6700\u5927\u6B21\u6570\u3002\u5BF9\u4E8E\u540C\u4E00\u4E3B\u673A\uFF0C\u5982\u679C\u6709\u8D85\u51FA\u8BE5\u53C2\u6570\u503C\u4E2A\u6570\u7684\u4E2D\u65AD\u9519\u8BEF\u8FDE\u63A5\uFF0C\u5219\u8BE5\u4E3B\u673A\u5C06\u88AB\u7981\u6B62\u8FDE\u63A5\u3002\u5982\u9700\u5BF9\u8BE5\u4E3B\u673A\u8FDB\u884C\u89E3\u7981\uFF0C\u6267\u884C\uFF1AFLUSH HOST\u3002</span>

<span class="token key attr-name">interactive_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">28800</span>
<span class="token comment"># \u670D\u52A1\u5668\u5173\u95ED\u4EA4\u4E92\u5F0F\u8FDE\u63A5\u524D\u7B49\u5F85\u6D3B\u52A8\u7684\u79D2\u6570\u3002\u4EA4\u4E92\u5F0F\u5BA2\u6237\u7AEF\u5B9A\u4E49\u4E3A\u5728mysql_real_connect()\u4E2D\u4F7F\u7528CLIENT_INTERACTIVE\u9009\u9879\u7684\u5BA2\u6237\u7AEF\u3002\u9ED8\u8BA4\u503C\uFF1A28800\u79D2\uFF088\u5C0F\u65F6\uFF09</span>

<span class="token key attr-name">wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">28800</span>
<span class="token comment"># \u670D\u52A1\u5668\u5173\u95ED\u975E\u4EA4\u4E92\u8FDE\u63A5\u4E4B\u524D\u7B49\u5F85\u6D3B\u52A8\u7684\u79D2\u6570\u3002\u9ED8\u8BA4\u503C\uFF1A28800\u79D2\uFF088\u5C0F\u65F6\uFF09</span>
<span class="token comment"># \u6307\u5B9A\u4E00\u4E2A\u8BF7\u6C42\u7684\u6700\u5927\u8FDE\u63A5\u65F6\u95F4\uFF0C\u5F53MySQL\u8FDE\u63A5\u95F2\u7F6E\u8D85\u8FC7\u4E00\u5B9A\u65F6\u95F4\u540E\u5C06\u4F1A\u88AB\u5F3A\u884C\u5173\u95ED\u3002\u5BF9\u4E8E4GB\u5DE6\u53F3\u5185\u5B58\u7684\u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u53EF\u4EE5\u5C06\u5176\u8BBE\u7F6E\u4E3A5~10\u3002</span>
<span class="token comment"># \u5982\u679C\u7ECF\u5E38\u51FA\u73B0Too Many Connections\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u6216\u8005show processlist\u547D\u4EE4\u53D1\u73B0\u6709\u5927\u91CFsleep\u8FDB\u7A0B\uFF0C\u5219\u9700\u8981\u540C\u65F6\u51CF\u5C0Finteractive_timeout\u548Cwait_timeout\u503C\u3002</span>

<span class="token key attr-name">connect_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">28800</span>
<span class="token comment"># \u5728\u83B7\u53D6\u8FDE\u63A5\u65F6\uFF0C\u7B49\u5F85\u63E1\u624B\u7684\u8D85\u65F6\u79D2\u6570\uFF0C\u53EA\u5728\u767B\u5F55\u65F6\u751F\u6548\u3002\u4E3B\u8981\u662F\u4E3A\u4E86\u9632\u6B62\u7F51\u7EDC\u4E0D\u4F73\u65F6\u5E94\u7528\u91CD\u8FDE\u5BFC\u81F4\u8FDE\u63A5\u6570\u6DA8\u592A\u5FEB\uFF0C\u4E00\u822C\u9ED8\u8BA4\u5373\u53EF\u3002</span>

<span class="token key attr-name">open_files_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">5000</span>
<span class="token comment"># mysqld\u80FD\u6253\u5F00\u6587\u4EF6\u7684\u6700\u5927\u4E2A\u6570\uFF0C\u9ED8\u8BA4\u6700\u5C0F1024\uFF0C\u5982\u679C\u51FA\u73B0too mant open files\u4E4B\u7C7B\u7684\u5C31\u9700\u8981\u589E\u5927\u8BE5\u503C\u3002</span>

<span class="token key attr-name">max_allowed_packet</span> <span class="token punctuation">=</span> <span class="token value attr-value">256M</span>
<span class="token comment"># \u6307\u5B9A\u5728\u7F51\u7EDC\u4F20\u8F93\u4E2D\u4E00\u6B21\u6D88\u606F\u4F20\u8F93\u91CF\u7684\u6700\u5927\u503C\u3002\u7CFB\u7EDF\u9ED8\u8BA4\u503C \u4E3A1MB\uFF0C\u6700\u5927\u503C\u662F1GB\uFF0C\u5FC5\u987B\u8BBE\u7F6E1024\u7684\u500D\u6570\u3002</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#          Thread &amp; Buffer             #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
<span class="token key attr-name">sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>
<span class="token comment"># \u6392\u5E8F\u7F13\u51B2\u533A\u5927\u5C0F\uFF0Cconnection\u7EA7\u53C2\u6570\uFF0C\u9ED8\u8BA4\u5927\u5C0F\u4E3A2MB\u3002\u5982\u679C\u60F3\u8981\u589E\u52A0ORDER BY\u7684\u901F\u5EA6\uFF0C\u9996\u5148\u770B\u662F\u5426\u53EF\u4EE5\u8BA9MySQL\u4F7F\u7528\u7D22\u5F15\uFF0C\u5176\u6B21\u53EF\u4EE5\u5C1D\u8BD5\u589E\u5927\u8BE5\u503C\u3002</span>

<span class="token key attr-name">read_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">160M</span>
<span class="token comment"># \u987A\u5E8F\u8BFB\u7F13\u51B2\u533A\u5927\u5C0F\uFF0Cconnection\u7EA7\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u5BF9\u5E94\u7684\u5206\u914D\u5185\u5B58\u662F\u6BCF\u8FDE\u63A5\u72EC\u4EAB\u3002\u5BF9\u8868\u8FDB\u884C\u987A\u5E8F\u626B\u63CF\u7684\u8BF7\u6C42\u5C06\u5206\u914D\u4E00\u4E2A\u8BFB\u5165\u7F13\u51B2\u533A\u3002</span>

<span class="token key attr-name">read_rnd_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">160M</span>
<span class="token comment"># \u968F\u673A\u8BFB\u7F13\u51B2\u533A\u5927\u5C0F\uFF0Cconnection\u7EA7\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u5BF9\u5E94\u7684\u5206\u914D\u5185\u5B58\u662F\u6BCF\u8FDE\u63A5\u72EC\u4EAB\u3002\u9ED8\u8BA4\u503C256KB\uFF0C\u6700\u5927\u503C4GB\u3002\u5F53\u6309\u4EFB\u610F\u987A\u5E8F\u8BFB\u53D6\u884C\u65F6\uFF0C\u5C06\u5206\u914D\u4E00\u4E2A\u968F\u673A\u8BFB\u7F13\u5B58\u533A\u3002</span>

<span class="token key attr-name">join_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">320M</span>
<span class="token comment"># \u8054\u5408\u67E5\u8BE2\u7F13\u51B2\u533A\u5927\u5C0F\uFF0Cconnection\u7EA7\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u5BF9\u5E94\u7684\u5206\u914D\u5185\u5B58\u662F\u6BCF\u8FDE\u63A5\u72EC\u4EAB\u3002</span>

<span class="token key attr-name">bulk_insert_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M   </span>
<span class="token comment"># \u6279\u91CF\u63D2\u5165\u6570\u636E\u7F13\u5B58\u5927\u5C0F\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u9AD8\u63D2\u5165\u6548\u7387\uFF0C\u9ED8\u8BA4\u4E3A8M</span>

<span class="token key attr-name">thread_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">8</span>
<span class="token comment"># \u670D\u52A1\u5668\u7EBF\u7A0B\u7F13\u51B2\u6C60\u4E2D\u5B58\u653E\u7684\u6700\u5927\u8FDE\u63A5\u7EBF\u7A0B\u6570\u3002\u9ED8\u8BA4\u503C\u662F8\uFF0C\u65AD\u5F00\u8FDE\u63A5\u65F6\u5982\u679C\u7F13\u5B58\u4E2D\u8FD8\u6709\u7A7A\u95F4\uFF0C\u5BA2\u6237\u7AEF\u7684\u7EBF\u7A0B\u5C06\u88AB\u653E\u5230\u7F13\u5B58\u4E2D\uFF0C\u5F53\u7EBF\u7A0B\u91CD\u65B0\u88AB\u8BF7\u6C42\uFF0C\u5C06\u5148\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\u3002</span>
<span class="token comment"># \u6839\u636E\u7269\u7406\u5185\u5B58\u8BBE\u7F6E\u89C4\u5219\u5982\u4E0B\uFF1A1G  \u2014&gt; 8\uFF0C2G  \u2014&gt; 16\uFF0C3G  \u2014&gt; 32\uFF0C\u5927\u4E8E3G  \u2014&gt; 64</span>

<span class="token key attr-name">thread_stack</span> <span class="token punctuation">=</span> <span class="token value attr-value">256K</span>
<span class="token comment"># \u6BCF\u4E2A\u8FDE\u63A5\u88AB\u521B\u5EFA\u65F6,mysql\u5206\u914D\u7ED9\u5B83\u7684\u5185\u5B58\u3002\u9ED8\u8BA4192KB\uFF0C\u5DF2\u6EE1\u8DB3\u5927\u90E8\u5206\u573A\u666F\uFF0C\u9664\u975E\u5FC5\u8981\u5426\u5219\u4E0D\u8981\u52A8\u5B83\uFF0C\u53EF\u8BBE\u7F6E\u8303\u56F4128KB~4GB\u3002</span>

<span class="token key attr-name">query_cache_type</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token comment"># \u5173\u95ED\u67E5\u8BE2\u7F13\u5B58</span>

<span class="token key attr-name">query_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token comment"># \u67E5\u8BE2\u7F13\u5B58\u5927\u5C0F\uFF0C\u5728\u9AD8\u5E76\u53D1\uFF0C\u5199\u5165\u91CF\u5927\u7684\u7CFB\u7EDF\uFF0C\u5EFA\u8BAE\u628A\u8BE5\u529F\u80FD\u7981\u6389\u3002</span>

<span class="token key attr-name">query_cache_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">4M    </span>
<span class="token comment"># \u6307\u5B9A\u5355\u4E2A\u67E5\u8BE2\u80FD\u591F\u4F7F\u7528\u7684\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u7F3A\u7701\u4E3A1M</span>

<span class="token key attr-name">tmp_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">1024M</span>
<span class="token comment"># MySQL\u7684heap\uFF08\u5806\u79EF\uFF09\u8868\u7F13\u51B2\u5927\u5C0F\uFF0C\u4E5F\u5373\u5185\u5B58\u4E34\u65F6\u8868\uFF0C\u9ED8\u8BA4\u5927\u5C0F\u662F 32M\u3002\u5982\u679C\u8D85\u8FC7\u8BE5\u503C\uFF0C\u5219\u4F1A\u5C06\u4E34\u65F6\u8868\u5199\u5165\u78C1\u76D8\u3002\u5728\u9891\u7E41\u505A\u5F88\u591A\u9AD8\u7EA7 GROUP BY \u67E5\u8BE2\u7684DW\u73AF\u5883\uFF0C\u589E\u5927\u8BE5\u503C\u3002</span>
<span class="token comment"># \u5B9E\u9645\u8D77\u9650\u5236\u4F5C\u7528\u7684\u662Ftmp_table_size\u548Cmax_heap_table_size\u7684\u6700\u5C0F\u503C\u3002</span>

<span class="token key attr-name">max_heap_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">1024M</span>
<span class="token comment"># \u7528\u6237\u53EF\u4EE5\u521B\u5EFA\u7684\u5185\u5B58\u8868(memory table)\u7684\u5927\u5C0F\uFF0C\u8FD9\u4E2A\u503C\u7528\u6765\u8BA1\u7B97\u5185\u5B58\u8868\u7684\u6700\u5927\u884C\u6570\u503C\u3002</span>

<span class="token key attr-name">table_definition_cache</span> <span class="token punctuation">=</span> <span class="token value attr-value">400</span>
<span class="token comment"># \u8868\u5B9A\u4E49\u7F13\u5B58\u533A\uFF0C\u7F13\u5B58frm\u6587\u4EF6\u3002\u8868\u5B9A\u4E49(global)\u662F\u5168\u5C40\u7684\uFF0C\u53EF\u4EE5\u88AB\u6240\u6709\u8FDE\u63A5\u6709\u6548\u7684\u5171\u4EAB\u3002</span>

<span class="token key attr-name">table_open_cache</span> <span class="token punctuation">=</span> <span class="token value attr-value">1000</span>
<span class="token comment"># \u6240\u6709SQL\u7EBF\u7A0B\u53EF\u4EE5\u6253\u5F00\u8868\u7F13\u5B58\u7684\u6570\u91CF\uFF0C\u7F13\u5B58ibd/MYI/MYD\u6587\u4EF6\u3002 \u6253\u5F00\u7684\u8868(session\u7EA7\u522B)\u662F\u6BCF\u4E2A\u7EBF\u7A0B\uFF0C\u6BCF\u4E2A\u8868\u4F7F\u7528\u3002</span>

<span class="token key attr-name">table_open_cache_instances</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token comment"># \u5BF9table cache \u80FD\u62C6\u6210\u7684\u5206\u533A\u6570\uFF0C\u7528\u4E8E\u51CF\u5C11\u9501\u7ADE\u4E89\uFF0C\u6700\u5927\u503C64.</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#               Safety                 #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
<span class="token comment">#sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_AUTO_VALUE_ON_ZERO,ONLY_FULL_GROUP_BY</span>
<span class="token key attr-name">sql_mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER</span>
<span class="token comment"># MySQL\u652F\u6301\u7684SQL\u8BED\u6CD5\u6A21\u5F0F\uFF0C\u4E0E\u5176\u4ED6\u5F02\u6784\u6570\u636E\u5E93\u4E4B\u95F4\u8FDB\u884C\u6570\u636E\u8FC1\u79FB\u65F6\uFF0CSQL Mode\u7EC4\u5408\u6A21\u5F0F\u4F1A\u6709\u5E2E\u52A9\u3002</span>

<span class="token key attr-name">local_infile</span> <span class="token punctuation">=</span> <span class="token value attr-value">OFF</span>
<span class="token comment"># \u7981\u7528LOAD DATA LOCAL\u547D\u4EE4</span>

<span class="token key attr-name">plugin-load</span> <span class="token punctuation">=</span> <span class="token value attr-value">validate_password.so</span>
<span class="token comment"># \u52A0\u5BC6\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u5F3A\u5236mysql\u8BBE\u7F6E\u590D\u6742\u5BC6\u7801</span>

skip-external-locking
<span class="token comment">#skip-locking </span>
<span class="token comment"># \u907F\u514DMySQL\u7684\u5916\u90E8\u9501\u5B9A\uFF0C\u51CF\u5C11\u51FA\u9519\u51E0\u7387\uFF0C\u589E\u5F3A\u7A33\u5B9A\u6027\u3002</span>

<span class="token key attr-name">skip-name-resolve</span> 
<span class="token comment"># \u7981\u6B62MySQL\u5BF9\u5916\u90E8\u8FDE\u63A5\u8FDB\u884CDNS\u89E3\u6790\uFF0C\u6D88\u9664MySQL\u8FDB\u884CDNS\u89E3\u6790\u3002\u5982\u679C\u5F00\u542F\u8BE5\u9009\u9879\uFF0C\u6240\u6709\u8FDC\u7A0B\u4E3B\u673A\u8FDE\u63A5\u6388\u6743\u90FD\u8981\u4F7F\u7528IP\u5730\u5740\u65B9\u5F0F\uFF0C\u5426\u5219MySQL\u5C06\u65E0\u6CD5\u6B63\u5E38\u5904\u7406\u8FDE\u63A5\u8BF7\u6C42\uFF01</span>

<span class="token comment">#skip-networking </span>
<span class="token comment"># \u4E0D\u5141\u8BB8CP/IP\u8FDE\u63A5\uFF0C\u53EA\u80FD\u901A\u8FC7\u547D\u540D\u7BA1\u9053\uFF08Named Pipes\uFF09\u3001\u5171\u4EAB\u5185\u5B58\uFF08Shared Memory\uFF09\u6216Unix\u5957\u63A5\u5B57\uFF08Socket\uFF09\u6587\u4EF6\u8FDE\u63A5\u3002</span>
<span class="token comment"># \u5982\u679CWeb\u670D\u52A1\u5668\u4EE5\u8FDC\u7A0B\u8FDE\u63A5\u65B9\u5F0F\u8BBF\u95EEMySQL\u6570\u636E\u5E93\u670D\u52A1\u5668\uFF0C\u5219\u4E0D\u8981\u5F00\u542F\u8BE5\u9009\u9879\uFF0C\u5426\u5219\u65E0\u6CD5\u6B63\u5E38\u8FDE\u63A5\uFF01</span>
<span class="token comment"># \u9002\u5408\u5E94\u7528\u548C\u6570\u636E\u5E93\u5171\u7528\u4E00\u53F0\u670D\u52A1\u5668\u7684\u60C5\u51B5\uFF0C\u5176\u4ED6\u5BA2\u6237\u7AEF\u65E0\u6CD5\u901A\u8FC7\u7F51\u7EDC\u8FDC\u7A0B\u8BBF\u95EE\u6570\u636E\u5E93</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#                 Logs                 #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
<span class="token comment">###################   General Log  ######################</span>
<span class="token key attr-name">general_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">OFF</span>
<span class="token comment"># \u5173\u95ED\u901A\u7528\u67E5\u8BE2\u65E5\u5FD7</span>

<span class="token key attr-name">general_log_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/general.log</span>
<span class="token comment"># \u901A\u7528\u67E5\u8BE2\u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84</span>

<span class="token comment">###################     Slow Log   ######################</span>
<span class="token key attr-name">slow_query_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u5F00\u542F\u6162\u67E5\u8BE2\u65E5\u5FD7</span>

<span class="token key attr-name">slow_query_log_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/slow.log</span>
<span class="token comment"># \u6162\u67E5\u8BE2\u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">long_query_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token comment"># \u8D85\u8FC710\u79D2\u7684\u67E5\u8BE2\uFF0C\u8BB0\u5F55\u5230\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u9ED8\u8BA4\u503C10</span>

<span class="token key attr-name">log_queries_not_using_indexes</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u6CA1\u6709\u4F7F\u7528\u7D22\u5F15\u7684\u67E5\u8BE2\uFF0C\u8BB0\u5F55\u5230\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u53EF\u80FD\u5F15\u8D77\u6162\u67E5\u8BE2\u65E5\u5FD7\u5FEB\u901F\u589E\u957F</span>

<span class="token key attr-name">log_slow_admin_statements</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u6267\u884C\u7F13\u6162\u7684\u7BA1\u7406\u8BED\u53E5\uFF0C\u8BB0\u5F55\u5230\u6162\u67E5\u8BE2\u65E5\u5FD7</span>
<span class="token comment"># \u4F8B\u5982 ALTER TABLE, ANALYZE TABLE, CHECK TABLE, CREATE INDEX, DROP INDEX, OPTIMIZE TABLE, and REPAIR TABLE.</span>

<span class="token comment">###################     Error Log   ####################</span>
<span class="token key attr-name">log_error</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/error.log</span>
<span class="token comment"># \u9519\u8BEF\u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">log_error_verbosity</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>
<span class="token comment"># \u5168\u5C40\u52A8\u6001\u53D8\u91CF\uFF0C\u9ED8\u8BA43\uFF0C\u8303\u56F4\uFF1A1\uFF5E3</span>
<span class="token comment"># \u8868\u793A\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u7684\u4FE1\u606F\uFF0C1\uFF1A\u53EA\u8BB0\u5F55error\u4FE1\u606F\uFF1B2\uFF1A\u8BB0\u5F55error\u548Cwarnings\u4FE1\u606F\uFF1B3\uFF1A\u8BB0\u5F55error\u3001warnings\u548C\u666E\u901A\u7684notes\u4FE1\u606F</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#           Replication                #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>

<span class="token comment">###################     Bin Log    ######################</span>
<span class="token key attr-name">server_id</span> <span class="token punctuation">=</span> <span class="token value attr-value">6</span>
<span class="token comment"># \u6570\u636E\u5E93\u670D\u52A1\u5668ID</span>

<span class="token key attr-name">log_bin</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/binlog</span>
<span class="token comment"># \u4E8C\u8FDB\u5236\u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">log_bin_index</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/binlog.index</span>
<span class="token comment"># \u540Cbinlog\uFF0C\u5B9A\u4E49binlog\u7684\u4F4D\u7F6E\u548C\u540D\u79F0</span>

<span class="token key attr-name">binlog_format</span> <span class="token punctuation">=</span> <span class="token value attr-value">row</span>
<span class="token comment"># binlog\u683C\u5F0F\uFF0C\u590D\u5236\u67093\u79CD\u6A21\u5F0FSTATEMENT\uFF0CROW\uFF0CMIXED</span>

<span class="token key attr-name">expire_logs_days</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token comment"># \u53EA\u4FDD\u7559\u6700\u8FD110\u5929\u7684binlog\u65E5\u5FD7</span>

<span class="token key attr-name">max_binlog_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">50M</span>
<span class="token comment"># \u6BCF\u4E2Abinlog\u65E5\u5FD7\u6587\u4EF6\u7684\u6700\u5927\u5BB9\u91CF</span>

<span class="token key attr-name">binlog_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>
<span class="token comment"># \u6BCF\u4E2Asession\u5206\u914D\u7684binlog\u7F13\u5B58\u5927\u5C0F</span>
<span class="token comment"># \u4E8B\u52A1\u63D0\u4EA4\u524D\u4EA7\u751F\u7684\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u5230Cache\u4E2D\uFF1B\u4E8B\u52A1\u63D0\u4EA4\u540E\uFF0C\u5219\u628A\u65E5\u5FD7\u6301\u4E45\u5316\u5230\u78C1\u76D8</span>

<span class="token key attr-name">log_slave_updates</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u5F00\u542Flog_slave_updates\uFF0C\u4ECE\u5E93\u7684\u66F4\u65B0\u64CD\u4F5C\u8BB0\u5F55\u8FDBbinlog\u65E5\u5FD7</span>

<span class="token key attr-name">sync_binlog</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># sync_binlog=0\uFF08\u9ED8\u8BA4\uFF09\uFF0C\u4E8B\u52A1\u63D0\u4EA4\u540EMySQL\u4E0D\u5237\u65B0binlog_cache\u5230\u78C1\u76D8\uFF0C\u800C\u8BA9Filesystem\u81EA\u884C\u51B3\u5B9A\uFF0C\u6216\u8005cache\u6EE1\u4E86\u624D\u540C\u6B65\u3002</span>
<span class="token comment"># sync_binlog=n\uFF0C\u6BCF\u8FDB\u884Cn\u6B21\u4E8B\u52A1\u63D0\u4EA4\u4E4B\u540E\uFF0CMySQL\u5C06binlog_cache\u4E2D\u7684\u6570\u636E\u5F3A\u5236\u5199\u5165\u78C1\u76D8\u3002</span>

<span class="token key attr-name">binlog_rows_query_log_events</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u5C06row\u6A21\u5F0F\u4E0B\u7684sql\u8BED\u53E5\uFF0C\u8BB0\u5F55\u5230binlog\u65E5\u5FD7\uFF0C\u9ED8\u8BA4\u662F0(off)</span>

<span class="token comment">###################     Relay Log  ######################</span>
<span class="token key attr-name">relay_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/relaylog</span>
<span class="token comment"># \u4E2D\u7EE7\u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84</span>

<span class="token key attr-name">relay_log_index</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306/relaylog.index</span>
<span class="token comment"># \u540Crelay_log\uFF0C\u5B9A\u4E49relay_log\u7684\u4F4D\u7F6E\u548C\u540D\u79F0</span>

<span class="token comment">#binlog_checksum = CRC32</span>
<span class="token comment"># Session-Thread\u628AEvent\u5199\u5230Binlog\u65F6\uFF0C\u751F\u6210checksum\u3002\u9ED8\u8BA4\u4E3A\uFF08NONE\uFF09\uFF0C\u517C\u5BB9\u65E7\u7248\u672Cmysql\u3002</span>

<span class="token key attr-name">master_verify_checksum</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># Dump-Thread\u8BFBBinlog\u4E2D\u7684Event\u65F6\uFF0C\u9A8C\u8BC1checksum</span>

<span class="token key attr-name">slave_sql_verify_checksum</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u4ECE\u5E93\u7684I/O-Thread\u628AEvent\u5199\u5165Relaylog\u65F6\uFF0C\u751F\u6210checksum\uFF1B\u4ECE\u5E93\u7684SQL-Thread\u4ECERelaylog\u8BFBEvent\u65F6\uFF0C\u9A8C\u8BC1checksum</span>

<span class="token key attr-name">master_info_repository</span> <span class="token punctuation">=</span> <span class="token value attr-value">TABLE</span>
<span class="token key attr-name">relay_log_info_repository</span> <span class="token punctuation">=</span> <span class="token value attr-value">TABLE</span>
<span class="token comment"># \u5C06master.info\u548Crelay.info\u4FDD\u5B58\u5728\u8868\u4E2D\uFF0C\u9ED8\u8BA4\u662FMyisam\u5F15\u64CE\uFF0C\u5B98\u65B9\u5EFA\u8BAE\u6539\u4E3AInnodb\u5F15\u64CE\uFF0C\u9632\u6B62\u8868\u635F\u574F\u540E\u81EA\u884C\u4FEE\u590D\u3002 </span>

<span class="token key attr-name">relay_log_purge</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON </span>
<span class="token key attr-name">relay_log_recovery</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u542F\u7528relaylog\u7684\u81EA\u52A8\u4FEE\u590D\u529F\u80FD\uFF0C\u907F\u514D\u7531\u4E8E\u7F51\u7EDC\u4E4B\u7C7B\u7684\u5916\u56E0\u9020\u6210\u65E5\u5FD7\u635F\u574F\uFF0C\u4E3B\u4ECE\u505C\u6B62\u3002</span>

<span class="token key attr-name">skip_slave_start</span> <span class="token punctuation">=</span> <span class="token value attr-value">OFF</span>
<span class="token comment"># \u91CD\u542F\u6570\u636E\u5E93\uFF0C\u590D\u5236\u8FDB\u7A0B\u9ED8\u8BA4\u4E0D\u542F\u52A8</span>

<span class="token key attr-name">slave_net_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
<span class="token comment"># \u5F53master\u548Cslave\u4E4B\u95F4\u7684\u7F51\u7EDC\u4E2D\u65AD\uFF0Cslave\u7684I/O-Thread\u7B49\u5F855\u79D2\uFF0C\u91CD\u8FDEmaster</span>

<span class="token key attr-name">sync_master_info</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token comment"># slave\u66F4\u65B0mysql.slave_master_info\u8868\u7684\u65F6\u95F4\u95F4\u9694</span>

<span class="token key attr-name">sync_relay_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">sync_relay_log_info</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token comment"># slave\u66F4\u65B0mysql.slave_relay_log_info\u8868\u7684\u65F6\u95F4\u95F4\u9694</span>

<span class="token key attr-name">gtid_mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token key attr-name">enforce_gtid_consistency</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># GTID\u5373\u5168\u5C40\u4E8B\u52A1ID\uFF08global transaction identifier\uFF09\uFF0CGTID\u7531UUID+TID\u7EC4\u6210\u7684\u3002</span>
<span class="token comment"># UUID\u662F\u4E00\u4E2AMySQL\u5B9E\u4F8B\u7684\u552F\u4E00\u6807\u8BC6\uFF0CTID\u4EE3\u8868\u4E86\u8BE5\u5B9E\u4F8B\u4E0A\u5DF2\u7ECF\u63D0\u4EA4\u7684\u4E8B\u52A1\u6570\u91CF\uFF0C\u5E76\u4E14\u968F\u7740\u4E8B\u52A1\u63D0\u4EA4\u5355\u8C03\u9012\u589E\u3002</span>
<span class="token comment"># GTID\u80FD\u591F\u4FDD\u8BC1\u6BCF\u4E2AMySQL\u5B9E\u4F8B\u4E8B\u52A1\u7684\u6267\u884C\uFF08\u4E0D\u4F1A\u91CD\u590D\u6267\u884C\u540C\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u5E76\u4E14\u4F1A\u8865\u5168\u6CA1\u6709\u6267\u884C\u7684\u4E8B\u52A1\uFF09\u3002\u4E0B\u9762\u662F\u4E00\u4E2AGTID\u7684\u5177\u4F53\u5F62\u5F0F\uFF1A</span>
<span class="token comment"># 4e659069-3cd8-11e5-9a49-001c4270714e:1-77</span>

<span class="token key attr-name">auto_increment_offset</span>  <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># \u53CC\u4E3B\u590D\u5236\u4E2D\uFF0C2\u53F0\u670D\u52A1\u5668\u7684\u81EA\u589E\u957F\u5B57\u6BB5\u521D\u503C\u5206\u522B\u914D\u7F6E\u4E3A1\u548C2\uFF0C\u53D6\u503C\u8303\u56F4\u662F1 .. 65535</span>

<span class="token key attr-name">auto_increment_increment</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>
<span class="token comment"># \u53CC\u4E3B\u590D\u5236\u4E2D\uFF0C2\u53F0\u670D\u52A1\u5668\u7684\u81EA\u589E\u957F\u5B57\u6BB5\u7684\u6BCF\u6B21\u9012\u589E\u503C\u90FD\u914D\u7F6E\u4E3A2\uFF0C\u5176\u9ED8\u8BA4\u503C\u662F1\uFF0C\u53D6\u503C\u8303\u56F4\u662F1 .. 65535</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#                InnoDB                #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>

<span class="token key attr-name">innodb_data_home_dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306</span>
<span class="token comment"># innodb\u8868\u7684\u6570\u636E\u6587\u4EF6\u76EE\u5F55</span>

<span class="token key attr-name">innodb_file_per_table</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u4F7F\u7528\u72EC\u7ACB\u8868\u7A7A\u95F4\u7BA1\u7406</span>

<span class="token key attr-name">innodb_data_file_path</span> <span class="token punctuation">=</span> <span class="token value attr-value">ibdata1:1G:autoextend</span>
<span class="token comment"># InnoDB\u5171\u4EAB\u8868\u7A7A\u95F4\u78C1\u76D8\u6587\u4EF6\uFF0C\u5B58\u653E\u6570\u636E\u5B57\u5178\u3001\u548C\u5728\u7EBF\u91CD\u505A\u65E5\u5FD7</span>

<span class="token key attr-name">innodb_log_group_home_dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/mysql/my3306</span>
<span class="token comment"># \u5728\u4E8B\u52A1\u88AB\u63D0\u4EA4\u5E76\u5199\u5165\u5230\u8868\u7A7A\u95F4\u78C1\u76D8\u6587\u4EF6\u4E0A\u4E4B\u524D\uFF0C\u4E8B\u52A1\u6570\u636E\u5B58\u50A8\u5728InnoDB\u7684redo\u65E5\u5FD7\u6587\u4EF6\u91CC\u3002\u8FD9\u4E9B\u65E5\u5FD7\u4F4D\u4E8Einnodb_log_group_home_dir\u53D8\u91CF\u5B9A\u4E49\u7684\u76EE\u5F55\u4E2D</span>

<span class="token key attr-name">innodb_buffer_pool_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2G</span>
<span class="token comment"># InnoDB\u7528\u4E8E\u7F13\u5B58\u6570\u636E\u3001\u7D22\u5F15\u3001\u9501\u3001\u63D2\u5165\u7F13\u51B2\u3001\u6570\u636E\u5B57\u5178\u7684\u7F13\u51B2\u6C60\u3002\u8BE5\u503C\u8D8A\u5927\uFF0C\u7F13\u5B58\u547D\u4E2D\u7387\u8D8A\u9AD8\uFF0C\u4F46\u662F\u8FC7\u5927\u4F1A\u5BFC\u81F4\u9875\u4EA4\u6362\u3002</span>

<span class="token key attr-name">innodb_buffer_pool_instances</span> <span class="token punctuation">=</span> <span class="token value attr-value">8</span>
<span class="token comment"># \u5F00\u542F8\u4E2A\u5185\u5B58\u7F13\u51B2\u6C60\uFF0C\u628A\u9700\u8981\u7F13\u51B2\u7684\u6570\u636Ehash\u5230\u4E0D\u540C\u7684\u7F13\u51B2\u6C60\u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5E76\u884C\u7684\u5185\u5B58\u8BFB\u5199\uFF0C\u964D\u4F4E\u5E76\u53D1\u5BFC\u81F4\u7684\u5185\u90E8\u7F13\u5B58\u8BBF\u95EE\u51B2\u7A81\u3002</span>
<span class="token comment"># InnoDB\u7F13\u5B58\u7CFB\u7EDF\u4F1A\u628A\u53C2\u6570innodb_buffer_pool_size\u6307\u5B9A\u5927\u5C0F\u7684\u7F13\u5B58\uFF0C\u5E73\u5206\u4E3Ainnodb_buffer_pool_instances\u4E2Abuffer_pool</span>

<span class="token comment">#innodb_additional_mem_pool_size = 16M</span>
<span class="token comment"># InnoDB\u5B58\u50A8\u6570\u636E\u5B57\u5178\u3001\u5185\u90E8\u6570\u636E\u7ED3\u6784\u7684\u7F13\u51B2\u6C60\u5927\u5C0F\uFF0C\u7C7B\u4F3C\u4E8EOracle\u7684library cache</span>

<span class="token key attr-name">innodb_log_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">256M</span>
<span class="token comment"># InnoDB redo log\u5927\u5C0F\uFF0C\u5BF9\u5E94\u4E8Eib_logfile0\u6587\u4EF6\u3002</span>
<span class="token comment"># ib_logfile* \u662FInnodb\u591A\u7248\u672C\u7F13\u51B2\u7684\u4E00\u4E2A\u4FDD\u8BC1\uFF0C\u8BE5\u65E5\u5FD7\u8BB0\u5F55redo\u3001undo\u4FE1\u606F\uFF0C\u5373commit\u4E4B\u524D\u7684\u6570\u636E\uFF0C\u7528\u4E8Erollback\u64CD\u4F5C\u3002</span>
<span class="token comment"># \u5B98\u65B9\u6587\u6863\u7684\u5EFA\u8BAE\u8BBE\u7F6E\u662Finnodb_log_file_size = innodb_buffer_pool_size/innodb_log_files_in_group</span>

<span class="token key attr-name">innodb_log_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>
<span class="token comment"># redo\u65E5\u5FD7\u6240\u7528\u7684\u5185\u5B58\u7F13\u51B2\u533A\u5927\u5C0F</span>

<span class="token key attr-name">innodb_log_files_in_group</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token comment"># redo\u65E5\u5FD7\u6587\u4EF6\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E3A2\uFF0C\u65E5\u5FD7\u662F\u4EE5\u987A\u5E8F\u7684\u65B9\u5F0F\u5199\u5165\u3002</span>

<span class="token key attr-name">innodb_max_dirty_pages_pct</span> <span class="token punctuation">=</span> <span class="token value attr-value">90</span>
<span class="token comment"># \u7F13\u5B58\u6C60\u4E2D\u810F\u9875\u7684\u6700\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u503C\u662F75%\uFF0C\u5982\u679C\u810F\u9875\u7684\u6570\u91CF\u8FBE\u5230\u6216\u8D85\u8FC7\u8BE5\u503C\uFF0CInnoDB\u7684\u540E\u53F0\u7EBF\u7A0B\u5C06\u5F00\u59CB\u7F13\u5B58\u5237\u65B0\u3002</span>
<span class="token comment"># \u201C\u7F13\u5B58\u5237\u65B0\u201D\u662F\u6307InnoDB\u5728\u627E\u4E0D\u5230\u5E72\u51C0\u7684\u53EF\u7528\u7F13\u5B58\u9875\u6216\u68C0\u67E5\u70B9\u88AB\u89E6\u53D1\u7B49\u60C5\u51B5\u4E0B\uFF0CInnoDB\u7684\u540E\u53F0\u7EBF\u7A0B\u5C31\u5F00\u59CB\u628A\u201C\u810F\u7684\u7F13\u5B58\u9875\u201D\u56DE\u5199\u5230\u78C1\u76D8\u6587\u4EF6\u4E2D\u3002</span>

<span class="token key attr-name">innodb_flush_log_at_trx_commit</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment">#\u8BBE\u7F6E\u4E3A0 \uFF0C\u6BCF\u79D2 write cache &amp; flush disk</span>
<span class="token comment">#\u8BBE\u7F6E\u4E3A1 \uFF0C\u6BCF\u6B21commit\u90FD write cache &amp; flush disk</span>
<span class="token comment">#\u8BBE\u7F6E\u4E3A2 \uFF0C\u6BCF\u6B21commit\u90FD write cache\uFF0C\u7136\u540E\u6839\u636Einnodb_flush_log_at_timeout\uFF08\u9ED8\u8BA4\u4E3A1s\uFF09\u65F6\u95F4 flush disk</span>

<span class="token key attr-name">innodb_lock_wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token comment"># InnoDB \u6709\u5176\u5185\u7F6E\u7684\u6B7B\u9501\u68C0\u6D4B\u673A\u5236\uFF0C\u80FD\u5BFC\u81F4\u672A\u5B8C\u6210\u7684\u4E8B\u52A1\u56DE\u6EDA\u3002\u4F46\u662F\uFF0C\u5982\u679C\u7ED3\u5408InnoDB\u4F7F\u7528MyISAM\u7684lock tables\u8BED\u53E5\u6216\u7B2C\u4E09\u65B9\u4E8B\u52A1\u5F15\u64CE,\u5219InnoDB\u65E0\u6CD5\u8BC6\u522B\u6B7B\u9501\u3002</span>
<span class="token comment"># \u4E3A\u6D88\u9664\u8FD9\u79CD\u53EF\u80FD\u6027\uFF0C\u53EF\u4EE5\u5C06innodb_lock_wait_timeout\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u6574\u6570\u503C\uFF0C\u6307\u793AMySQL\u5728\u5141\u8BB8\u5176\u4ED6\u4E8B\u52A1\u4FEE\u6539\u90A3\u4E9B\u6700\u7EC8\u53D7\u4E8B\u52A1\u56DE\u6EDA\u7684\u6570\u636E\u4E4B\u524D\u8981\u7B49\u5F85\u591A\u957F\u65F6\u95F4(\u79D2\u6570)\u3002</span>

<span class="token key attr-name">innodb_sync_spin_loops</span> <span class="token punctuation">=</span> <span class="token value attr-value">40</span>
<span class="token comment"># \u81EA\u65CB\u9501\u7684\u8F6E\u8F6C\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7show engine innodb status\u6765\u67E5\u770B\u3002</span>
<span class="token comment"># \u5982\u679C\u770B\u5230\u5927\u91CF\u7684\u81EA\u65CB\u7B49\u5F85\u548C\u81EA\u65CB\u8F6E\u8F6C\uFF0C\u5219\u5B83\u6D6A\u8D39\u4E86\u5F88\u591Acpu\u8D44\u6E90\u3002\u6D6A\u8D39cpu\u65F6\u95F4\u548C\u65E0\u8C13\u7684\u4E0A\u4E0B\u6587\u5207\u6362\u4E4B\u95F4\u53EF\u4EE5\u901A\u8FC7\u8BE5\u503C\u6765\u5E73\u8861\u3002</span>

<span class="token key attr-name">innodb_support_xa</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u7B2C\u4E00\uFF0C\u652F\u6301\u591A\u5B9E\u4F8B\u5206\u5E03\u5F0F\u4E8B\u52A1\uFF08\u5916\u90E8xa\u4E8B\u52A1\uFF09\uFF0C\u8FD9\u4E2A\u4E00\u822C\u5728\u5206\u5E03\u5F0F\u6570\u636E\u5E93\u73AF\u5883\u4E2D\u7528\u5F97\u8F83\u591A\u3002</span>
<span class="token comment"># \u7B2C\u4E8C\uFF0C\u652F\u6301\u5185\u90E8xa\u4E8B\u52A1\uFF0C\u5373\u652F\u6301binlog\u4E0Einnodb redo log\u4E4B\u95F4\u6570\u636E\u4E00\u81F4\u6027\u3002</span>

<span class="token comment">#innodb_file_format = barracuda</span>
<span class="token comment"># InnoDB\u6587\u4EF6\u683C\u5F0F\uFF0CAntelope\u662Finnodb-base\u7684\u6587\u4EF6\u683C\u5F0F\uFF0CBarracude\u662Finnodb-plugin\u540E\u5F15\u5165\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u540C\u65F6Barracude\u4E5F\u652F\u6301Antelope\u6587\u4EF6\u683C\u5F0F\u3002</span>

<span class="token key attr-name">innodb_flush_method</span> <span class="token punctuation">=</span> <span class="token value attr-value">O_DIRECT</span>
<span class="token comment"># \u8BBE\u7F6Einnodb\u6570\u636E\u6587\u4EF6\u53CAredo log\u7684\u6253\u5F00\u3001\u5237\u5199\u6A21\u5F0F\uFF0Cfdatasync(\u9ED8\u8BA4)\uFF0CO_DSYNC\uFF0CO_DIRECT</span>
<span class="token comment"># \u9ED8\u8BA4\u662Ffdatasync\uFF0C\u8C03\u7528fsync()\u53BB\u5237\u6570\u636E\u6587\u4EF6\u4E0Eredo log\u7684buffer</span>
<span class="token comment"># \u8BBE\u7F6E\u4E3A\u4E3AO_DSYNC\u65F6\uFF0Cinnodb\u4F1A\u4F7F\u7528O_SYNC\u65B9\u5F0F\u6253\u5F00\u548C\u5237\u5199redo log,\u4F7F\u7528fsync()\u5237\u5199\u6570\u636E\u6587\u4EF6</span>
<span class="token comment"># \u8BBE\u7F6E\u4E3AO_DIRECT\u65F6\uFF0Cinnodb\u4F7F\u7528O_DIRECT\u6253\u5F00\u6570\u636E\u6587\u4EF6\uFF0C\u4F7F\u7528fsync()\u5237\u5199\u6570\u636E\u6587\u4EF6\u8DDFredo log</span>

<span class="token key attr-name">innodb_strict_mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">ON</span>
<span class="token comment"># \u5F00\u542FInnoDB\u4E25\u683C\u68C0\u67E5\u6A21\u5F0F\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u8FD4\u56DEerrors\u800C\u4E0D\u662Fwarnings\uFF0C\u9ED8\u8BA4\u503C\u662FOFF</span>

<span class="token key attr-name">innodb_checksum_algorithm</span> <span class="token punctuation">=</span> <span class="token value attr-value">strict_crc32</span>
<span class="token comment"># checksum\u51FD\u6570\u7684\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u4E3Acrc32\u3002\u53EF\u4EE5\u8BBE\u7F6E\u7684\u503C\u6709:innodb\u3001crc32\u3001none\u3001strict_innodb\u3001strict_crc32\u3001strict_none</span>

<span class="token key attr-name">innodb_status_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># \u542F\u7528InnoDB\u7684status file\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u5458\u67E5\u770B\u4EE5\u53CA\u76D1\u63A7</span>

<span class="token key attr-name">innodb_open_files</span> <span class="token punctuation">=</span> <span class="token value attr-value">3000</span>
<span class="token comment"># \u9650\u5236Innodb\u80FD\u6253\u5F00\u7684\u8868\u7684\u6570\u636E\uFF0C\u9ED8\u8BA4\u4E3A300\uFF0C\u6570\u636E\u5E93\u91CC\u7684\u8868\u7279\u522B\u591A\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u9002\u5F53\u589E\u5927\u4E3A1000\u3002  </span>

<span class="token key attr-name">innodb_thread_concurrency</span> <span class="token punctuation">=</span> <span class="token value attr-value">8</span>
<span class="token comment"># \u540C\u65F6\u5728Innodb\u5185\u6838\u4E2D\u5904\u7406\u7684\u7EBF\u7A0B\u6570\u91CF\u3002\u670D\u52A1\u5668\u6709\u51E0\u4E2ACPU\u5C31\u8BBE\u7F6E\u4E3A\u51E0\uFF0C\u5EFA\u8BAE\u9ED8\u8BA4\u503C\u3002</span>

<span class="token key attr-name">innodb_thread_sleep_delay</span> <span class="token punctuation">=</span> <span class="token value attr-value">500</span>

<span class="token comment">#innodb_file_io_threads = 16</span>
<span class="token comment"># \u6587\u4EF6\u8BFB\u5199I/O\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u53EA\u5728Windows\u4E0A\u8D77\u4F5C\u7528\u3002\u5728LINUX\u4E0A\u53EA\u4F1A\u7B49\u4E8E\uFF14\uFF0C\u9ED8\u8BA4\u5373\u53EF\u3002</span>

<span class="token key attr-name">innodb_read_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">16</span>
<span class="token comment"># \u8BBE\u7F6Eread thread(\u8BFB\u7EBF\u7A0B\u4E2A\u6570\uFF0C\u9ED8\u8BA4\u662F4\u4E2A)</span>

<span class="token key attr-name">innodb_write_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">16</span>
<span class="token comment"># \u8BBE\u7F6Ewrite thread(\u5199\u7EBF\u7A0B\u4E2A\u6570\uFF0C\u9ED8\u8BA4\u662F4\u4E2A)</span>

<span class="token key attr-name">innodb_io_capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
<span class="token comment"># \u78C1\u76D8io\u7684\u541E\u5410\u91CF\uFF0C\u9ED8\u8BA4\u503C\u662F200.\u5BF9\u4E8E\u5237\u65B0\u5230\u78C1\u76D8\u9875\u7684\u6570\u91CF\uFF0C\u4F1A\u6309\u7167inodb_io_capacity\u7684\u767E\u5206\u6BD4\u6765\u8FDB\u884C\u63A7\u5236\u3002</span>

<span class="token key attr-name">log_bin_trust_function_creators</span> <span class="token punctuation">=</span> <span class="token value attr-value">1                   </span>
<span class="token comment"># \u5F00\u542Flog-bin\u540E\u53EF\u4EE5\u968F\u610F\u521B\u5EFAfunction\uFF0C\u5B58\u5728\u6F5C\u5728\u7684\u6570\u636E\u5B89\u5168\u95EE\u9898\u3002</span>

<span class="token key attr-name">innodb_purge_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># \u4F7F\u7528\u72EC\u7ACB\u7EBF\u7A0B\u8FDB\u884Cpurge\u64CD\u4F5C\u3002</span>
<span class="token comment"># \u6BCF\u6B21DML\u64CD\u4F5C\u90FD\u4F1A\u751F\u6210Undo\u9875\uFF0C\u7CFB\u7EDF\u9700\u8981\u5B9A\u671F\u5BF9\u8FD9\u4E9Bundo\u9875\u8FDB\u884C\u6E05\u7406\uFF0C\u8FD9\u79F0\u4E3Apurge\u64CD\u4F5C\u3002</span>

<span class="token key attr-name">innodb_purge_batch_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">32</span>
<span class="token comment"># \u5728\u8FDB\u884Cfull purge\u65F6\uFF0C\u56DE\u6536Undo\u9875\u7684\u4E2A\u6570\uFF0C\u9ED8\u8BA4\u662F20\uFF0C\u53EF\u4EE5\u9002\u5F53\u52A0\u5927\u3002</span>

<span class="token key attr-name">innodb_old_blocks_pct</span> <span class="token punctuation">=</span> <span class="token value attr-value">75</span>
<span class="token comment"># LRU\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u503C\u662F37\uFF0C\u63D2\u5165\u5230LRU\u5217\u8868\u7AEF\u768437%\uFF0C\u5DEE\u4E0D\u591A3/8\u7684\u4F4D\u7F6E\u3002</span>
<span class="token comment"># innodb\u628Amidpoint\u4E4B\u540E\u7684\u5217\u8868\u79F0\u4E3Aold\u5217\u8868\uFF0C\u4E4B\u524D\u7684\u5217\u8868\u79F0\u4E3Anew\u5217\u8868\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3Anew\u5217\u8868\u4E2D\u7684\u9875\u90FD\u662F\u6700\u4E3A\u6D3B\u8DC3\u7684\u70ED\u70B9\u6570\u636E\u3002</span>

<span class="token key attr-name">innodb_change_buffering</span> <span class="token punctuation">=</span> <span class="token value attr-value">all</span>
<span class="token comment"># \u7528\u6765\u5F00\u542F\u5404\u79CDBuffer\u7684\u9009\u9879\u3002\u8BE5\u53C2\u6570\u53EF\u9009\u7684\u503C\u4E3A\uFF1Ainserts\u3001deletes\u3001purges\u3001changes\u3001all\u3001none\u3002</span>
<span class="token comment"># changes\u8868\u793A\u542F\u7528inserts\u548Cdeletes\uFF0Call\u8868\u793A\u542F\u7528\u6240\u6709\uFF0Cnone\u8868\u793A\u90FD\u4E0D\u542F\u7528\u3002\u8BE5\u53C2\u6570\u9ED8\u8BA4\u503C\u4E3Aall\u3002</span>

<span class="token key attr-name">[mysqldump]</span> <span class="token value attr-value">                       </span>
<span class="token key attr-name">max_allowed_packet</span> <span class="token punctuation">=</span> <span class="token value attr-value">256M</span>

quick
<span class="token comment"># mysqldump\u5BFC\u51FA\u5927\u8868\u65F6\u5F88\u6709\u7528\uFF0C\u5F3A\u5236\u4ECE\u670D\u52A1\u5668\u67E5\u8BE2\u53D6\u5F97\u8BB0\u5F55\u76F4\u63A5\u8F93\u51FA\uFF0C\u800C\u4E0D\u662F\u53D6\u5F97\u6240\u6709\u8BB0\u5F55\u540E\u5C06\u5B83\u4EEC\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\u3002</span>

[mysqlhotcopy]
interactive-timeout

[mysqld_safe]
<span class="token comment">#ledir = /app/mysql/bin</span>
<span class="token comment"># \u5305\u542Bmysqld\u7A0B\u5E8F\u7684\u8F6F\u4EF6\u5B89\u88C5\u8DEF\u5F84\uFF0C\u7528\u8BE5\u9009\u9879\u6765\u663E\u5F0F\u8868\u793A\u670D\u52A1\u5668\u4F4D\u7F6E\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><br><h3 id="_4-\u5907\u4EFD\u4E0E\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#_4-\u5907\u4EFD\u4E0E\u6062\u590D" aria-hidden="true">#</a> 4. \u5907\u4EFD\u4E0E\u6062\u590D</h3><ul><li><p>\u5907\u4EFD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u76F4\u63A5\u5728cmd\u547D\u4EE4\u4E0B\uFF08\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u5982\u679C\u6CA1\u6709\u914D\u7F6E\uFF0C\u90A3\u4E48\u5C31\u662F\u5728MySQL\u7684bin\u76EE\u5F55\u4E0B\uFF09</span>
mysqldump -uroot -p dbName<span class="token operator">&gt;</span>path<span class="token punctuation">\\</span>dbName.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6062\u590D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDE\u63A5\u4E0AMySQL\u670D\u52A1\u5668</span>
mysql -uroot -p

<span class="token comment"># \u9009\u4E2D\u6570\u636E\u5E93</span>
use dbName<span class="token punctuation">;</span>

<span class="token comment"># \u6062\u590D\u6570\u636E</span>
<span class="token builtin class-name">source</span> path<span class="token punctuation">\\</span>dbName.sql<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><br><h2 id="\u4E09-\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a> \u4E09 \u6570\u636E\u5E93\u8BBE\u8BA1</h2><h3 id="_1-\u6570\u636E\u5B8C\u6574\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u5B8C\u6574\u6027" aria-hidden="true">#</a> 1. \u6570\u636E\u5B8C\u6574\u6027</h3><p>\u6570\u636E\u5B8C\u6574\u6027\u662F\u6570\u636E\u5E93\u5236\u5B9A\u7684\u4E86\u4E00\u4E9B\u89C4\u8303\uFF0C\u662F\u4E3A\u4E86\u9632\u6B62\u7528\u6237\u9519\u8BEF\u7684\u8F93\u5165\uFF08\u9632\u6B62\u6570\u636E\u5E93\u51FA\u73B0\u9519\u8BEF\u7684\u6570\u636E\uFF09</p><ul><li><p><strong>\u6570\u636E\u5E93\u7684\u5B8C\u6574\u6027</strong>\uFF1A\u4FDD\u8BC1\u5B58\u653E\u5230\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u662F\u6709\u6548\u7684,</p><p>=&gt; \u5728\u521B\u5EFA\u8868\u65F6\u7ED9\u8868\u4E2D\u6DFB\u52A0\u7EA6\u675F</p><br></li><li><p><strong>\u5B9E\u4F53\u5B8C\u6574\u6027</strong>\uFF1A\u6807\u8BC6\u6BCF\u4E00\u884C\u6570\u636E\u4E0D\u91CD\u590D</p><p>\u5B9E\u4F53\u5B8C\u6574\u6027\u6307\u7684\u662F\u6570\u636E\u5E93\u8868\u4E2D\u5B58\u5728\u8BB0\u5F55\u5E94\u8BE5\u4E0D\u91CD\u590D\u51FA\u73B0\uFF0C\u662F\u552F\u4E00\u7684\u3002</p><p>\u5B9E\u4F53\uFF1A\u5373\u8868\u4E2D\u7684\u4E00\u884C(\u4E00\u6761\u8BB0\u5F55)\u4EE3\u8868\u4E00\u4E2A\u5B9E\u4F53\uFF08entity\uFF09</p><p>\u7EA6\u675F\u7C7B\u578B\uFF1A<em>\u4E3B\u952E\u7EA6\u675F\uFF08primary key\uFF09</em>\u3001 <em>\u552F\u4E00\u7EA6\u675F (unique)</em> \u3001 <em>\u81EA\u52A8\u589E\u957F\u5217 (auto_increment)</em></p><br></li><li><p><strong>\u57DF\u5B8C\u6574\u6027</strong>\uFF1A\u9650\u5236\u6B64\u5355\u5143\u683C\u7684\u6570\u636E\u6B63\u786E</p><p>\u57DF\u5B8C\u6574\u6027\u662F\u6307\u6570\u636E\u5E93\u8868\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u90FD\u5E94\u8BE5\u6709\u81EA\u5DF1\u7684\u7EA6\u675F\u3002\u8FD9\u79CD\u7EA6\u675F\u5927\u591A\u6570\u662F\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u53E5\u8BDD\u7684\u610F\u601D\u662F\u8868\u4E2D\u7684\u6BCF\u4E00\u5217\u90FD\u5E94\u8BE5\u6709\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD8\u6709\u4E00\u4E9B\u5173\u952E\u5B57\u4E5F\u53EF\u4EE5\u7EA6\u675F\u3002</p><p>\u57DF\u5B8C\u6574\u6027\u7EA6\u675F\uFF1A\u6570\u636E\u7C7B\u578B \u3001\u975E\u7A7A\u7EA6\u675F\uFF08not null\uFF09\u3001 \u9ED8\u8BA4\u503C\u7EA6\u675F(default\uFF09</p><br></li><li><p><strong>\u5F15\u7528\u5B8C\u6574\u6027\uFF08\u53C2\u7167\u5B8C\u6574\u6027\uFF09</strong>\uFF1A\u6307\u5916\u952E</p><p>\u5916\u952E\u7EA6\u675F\uFF1AFOREIGN KEY</p></li></ul><br><p>\u5E38\u89C1\u7EA6\u675F\uFF1A</p><table><thead><tr><th>\u7EA6\u675F</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>null / not null</td><td>\u5B57\u6BB5\u662F\u5426\u53EF\u4EE5\u4E3A\u7A7A</td></tr><tr><td>default</td><td>\u5982\u679C\u4E00\u4E2A\u5B57\u6BB5\u6CA1\u6709\u503C\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C</td></tr><tr><td>auto_increment</td><td>\u5B57\u6BB5\u503C\u4ECE1\u5F00\u59CB\uFF0C\u6BCF\u6B21\u9012\u589E1\uFF0C\u4E0D\u4F1A\u91CD\u590D</td></tr><tr><td>primary key</td><td>\u5B9A\u4E49\u5217\u4E3A\u4E3B\u952E</td></tr><tr><td>unique</td><td>\u552F\u4E00\u952E\uFF1A\u4E0D\u80FD\u91CD\u590D\uFF0C\u4F46\u53EF\u4EE5\u4E3A\u7A7A</td></tr><tr><td>comment</td><td>\u6CE8\u91CA\u4FE1\u606F</td></tr></tbody></table><br><p>\u8BED\u6CD5\u793A\u4F8B\uFF1A</p><p><strong>\u4E3B\u952E\u7EA6\u675F\uFF08primary key\uFF09</strong>\uFF1A</p><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code># 1. \u5728 CREATE TABLE \u8BED\u53E5\u4E2D\uFF0C\u901A\u8FC7 PRIMARY KEY \u5173\u952E\u5B57\u6765\u6307\u5B9A\u4E3B\u952E
&lt;\u5B57\u6BB5\u540D&gt; &lt;\u6570\u636E\u7C7B\u578B&gt; PRIMARY KEY [\u9ED8\u8BA4\u503C]

# 2. \u6216\u8005\u662F\u5728\u5B9A\u4E49\u5B8C\u6240\u6709\u5B57\u6BB5\u4E4B\u540E\u6307\u5B9A\u4E3B\u952E\uFF1A
[CONSTRAINT &lt;\u7EA6\u675F\u540D&gt;] PRIMARY KEY [\u5B57\u6BB5\u540D]

# 3. \u5728\u521B\u5EFA\u8868\u65F6\u8BBE\u7F6E\u8054\u5408\u4E3B\u952E\uFF08\u6240\u8C13\u7684\u8054\u5408\u4E3B\u952E\uFF0C\u5C31\u662F\u8FD9\u4E2A\u4E3B\u952E\u662F\u7531\u4E00\u5F20\u8868\u4E2D\u591A\u4E2A\u5B57\u6BB5\u7EC4\u6210\u7684\uFF09
PRIMARY KEY [\u5B57\u6BB51\uFF0C\u5B57\u6BB52\uFF0C\u2026,\u5B57\u6BB5n]

# 4. \u5728\u4FEE\u6539\u8868\u65F6\u6DFB\u52A0\u4E3B\u952E\u7EA6\u675F
ALTER TABLE &lt;\u6570\u636E\u8868\u540D&gt; ADD PRIMARY KEY(&lt;\u5B57\u6BB5\u540D&gt;);

# \u5220\u9664\u4E3B\u952E\u7EA6\u675F
ALTER TABLE &lt;\u6570\u636E\u8868\u540D&gt; DROP PRIMARY KEY;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>\u552F\u4E00\u7EA6\u675F (unique)</strong>\uFF1A</p><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code># 1. \u5728\u521B\u5EFA\u8868\u65F6\u8BBE\u7F6E\u552F\u4E00\u7EA6\u675F
&lt;\u5B57\u6BB5\u540D&gt; &lt;\u6570\u636E\u7C7B\u578B&gt; UNIQUE

# 2. \u5728\u4FEE\u6539\u8868\u65F6\u6DFB\u52A0\u552F\u4E00\u7EA6\u675F
ALTER TABLE &lt;\u6570\u636E\u8868\u540D&gt; ADD CONSTRAINT &lt;\u552F\u4E00\u7EA6\u675F\u540D&gt; UNIQUE(&lt;\u5217\u540D&gt;);

# \u5220\u9664\u552F\u4E00\u7EA6\u675F
ALTER TABLE &lt;\u8868\u540D&gt; DROP INDEX &lt;\u552F\u4E00\u7EA6\u675F\u540D&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>\u81EA\u52A8\u589E\u957F\u5217 (auto_increment)</strong>\uFF1A</p><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code># 1. \u7ED9\u5B57\u6BB5\u6DFB\u52A0 AUTO_INCREMENT \u5C5E\u6027\u6765\u5B9E\u73B0\u4E3B\u952E\u81EA\u589E\u957F
\u5B57\u6BB5\u540D \u6570\u636E\u7C7B\u578B AUTO_INCREMENT

# 2. \u6307\u5B9A\u81EA\u589E\u5B57\u6BB5\u521D\u59CB\u503C
CREATE TABLE tb_student2 (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    PRIMARY KEY(ID)
)AUTO_INCREMENT=100;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CAUTO_INCREMENT \u7684\u521D\u59CB\u503C\u662F 1\uFF0C\u6BCF\u65B0\u589E\u4E00\u6761\u8BB0\u5F55\uFF0C\u5B57\u6BB5\u503C\u81EA\u52A8\u52A0 1\u3002</li><li>\u4E00\u4E2A\u8868\u4E2D\u53EA\u80FD\u6709\u4E00\u4E2A\u5B57\u6BB5\u4F7F\u7528 AUTO_INCREMENT \u7EA6\u675F\uFF0C\u4E14\u8BE5\u5B57\u6BB5\u5FC5\u987B\u6709\u552F\u4E00\u7D22\u5F15\uFF0C\u4EE5\u907F\u514D\u5E8F\u53F7\u91CD\u590D\uFF08\u5373\u4E3A\u4E3B\u952E\u6216\u4E3B\u952E\u7684\u4E00\u90E8\u5206\uFF09</li><li>AUTO_INCREMENT \u7EA6\u675F\u7684\u5B57\u6BB5\u5FC5\u987B\u5177\u5907 NOT NULL \u5C5E\u6027\u3002</li><li>AUTO_INCREMENT \u7EA6\u675F\u7684\u5B57\u6BB5\u53EA\u80FD\u662F\u6574\u6570\u7C7B\u578B\uFF08TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT \u7B49\uFF09\u3002</li><li>AUTO_INCREMENT \u7EA6\u675F\u5B57\u6BB5\u7684\u6700\u5927\u503C\u53D7\u8BE5\u5B57\u6BB5\u7684\u6570\u636E\u7C7B\u578B\u7EA6\u675F\uFF0C\u5982\u679C\u8FBE\u5230\u4E0A\u9650\uFF0CAUTO_INCREMENT \u5C31\u4F1A\u5931\u6548\u3002</li></ul><br><p><strong>\u5916\u952E\u7EA6\u675F\uFF08foreign key\uFF09</strong>:</p><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code>[CONSTRAINT &lt;\u5916\u952E\u540D&gt;] FOREIGN KEY \u5B57\u6BB5\u540D [\uFF0C\u5B57\u6BB5\u540D2\uFF0C\u2026] REFERENCES &lt;\u4E3B\u8868\u540D&gt; \u4E3B\u952E\u52171 [\uFF0C\u4E3B\u952E\u52172\uFF0C\u2026]
#\u4F8B\uFF1A
constraint fk_score_sid foreign key(sid) references student(id) );

# \u5220\u9664\u5916\u952E\u7EA6\u675F
ALTER TABLE &lt;\u8868\u540D&gt; DROP FOREIGN KEY &lt;\u5916\u952E\u7EA6\u675F\u540D&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u5916\u952E\u4F1A\u5F71\u54CD\u6548\u7387\uFF1A</p><p>\u5728\u63D2\u5165\u5B50\u884C\u7684\u6570\u636E\u7684\u65F6\u5019\uFF0C\u4F1A\u53BB\u7236\u8868\u4E2D\u67E5\u8BE2\u3002\u5728\u5220\u9664\u7236\u8868\u4E2D\u7684\u6570\u636E\u7684\u65F6\u5019\uFF0C\u4F1A\u53BB\u5B50\u8868\u4E2D\u67E5\u8BE2\u6570\u636E\u662F\u5426\u88AB\u4F7F\u7528\u3002</p><p>\u5728\u5DE5\u4F5C\u4E2D\uFF0C\u4E00\u822C\u5F88\u5C11\u4F7F\u7528\u5916\u952E\u3002\u5916\u952E\u867D\u7136\u53EF\u4EE5\u4FDD\u8BC1\u6211\u4EEC\u6570\u636E\u7684\u6B63\u786E\u6027\uFF0C\u4F46\u662F\u4F1A\u6BD4\u8F83\u5927\u7A0B\u5EA6\u4E0A\u7684\u5F71\u54CD\u6548\u7387\u3002</p><br><h3 id="_2-\u4E09\u5927\u8303\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u4E09\u5927\u8303\u5F0F" aria-hidden="true">#</a> 2. \u4E09\u5927\u8303\u5F0F</h3><ul><li><p>\u7B2C\u4E00\u8303\u5F0F\uFF1A\u6307\u6BCF\u4E00\u5217\u4FDD\u6301 <span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>\u539F\u5B50\u6027</strong></span>\uFF08\u6BCF\u4E00\u5217\u90FD\u662F\u4E0D\u53EF\u5206\u5272\u7684\u57FA\u672C\u6570\u636E\uFF0C\u540C\u4E00\u5217\u4E2D\u4E0D\u80FD\u6709\u591A\u4E2A\u503C\uFF09\u6BCF\u4E00\u4E2A\u5C5E\u6027\u4E0D\u53EF\u518D\u5206</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">/</span><span class="token operator">*</span> \u6240\u8C13\u7B2C\u4E00\u8303\u5F0F\uFF08<span class="token number">1</span>NF<span class="token punctuation">)</span>\u662F\u6307\u5728\u5173\u7CFB\u6A21\u578B\u4E2D\uFF0C\u5BF9\u57DF\u6DFB\u52A0\u7684\u4E00\u4E2A\u89C4\u8303\u8981\u6C42\uFF0C\u6240\u6709\u7684\u57DF\u90FD\u5E94\u8BE5\u662F\u539F\u5B50\u6027\u7684\uFF0C
    \u5373\u6570\u636E\u5E93\u8868\u7684\u6BCF\u4E00\u5217\u90FD\u662F\u4E0D\u53EF\u5206\u5272\u7684\u539F\u5B50\u6570\u636E\u9879\uFF0C\u800C\u4E0D\u80FD\u662F\u96C6\u5408\uFF0C\u6570\u7EC4\uFF0C\u8BB0\u5F55\u7B49\u975E\u539F\u5B50\u6570\u636E\u9879\u3002
    \u5373\u5F53\u5B9E\u4F53\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u6709\u591A\u4E2A\u503C\u65F6\uFF0C\u5FC5\u987B\u5C06\u5176\u62C6\u5206\u4E3A\u4E0D\u540C\u7684\u5C5E\u6027\u3002

    \u5728\u7B26\u5408\u7B2C\u4E00\u8303\u5F0F\uFF08<span class="token number">1</span>NF<span class="token punctuation">)</span>\u8868\u4E2D\u7684\u6BCF\u4E2A\u57DF\u503C\u53EA\u80FD\u662F\u5B9E\u4F53\u7684\u4E00\u4E2A\u5C5E\u6027\u6216\u4E00\u4E2A\u5C5E\u6027\u7684\u4E00\u90E8\u5206\u3002
    \u7B80\u800C\u8A00\u4E4B\uFF0C\u7B2C\u4E00\u8303\u5F0F\u5C31\u662F\u65E0\u91CD\u590D\u7684\u57DF\u3002

    \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u4EFB\u4F55\u4E00\u4E2A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\uFF0C\u7B2C\u4E00\u8303\u5F0F\uFF08<span class="token number">1</span>NF\uFF09\u662F\u5BF9\u5173\u7CFB\u6A21\u5F0F\u7684\u8BBE\u8BA1\u57FA\u672C\u8981\u6C42\uFF0C\u4E00\u822C\u8BBE\u8BA1\u65F6\u90FD\u5FC5\u987B\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F<span class="token punctuation">(</span><span class="token number">1</span>NF<span class="token punctuation">)</span>\u3002
    \u4E0D\u8FC7\u6709\u4E9B\u5173\u7CFB\u6A21\u578B\u4E2D\u7A81\u7834\u4E86<span class="token number">1</span>NF\u7684\u9650\u5236\uFF0C\u8FD9\u79CD\u79F0\u4E3A\u975E<span class="token number">1</span>NF\u7684\u5173\u7CFB\u6A21\u578B\u3002
    \u6362\u53E5\u8BDD\u8BF4\uFF0C\u662F\u5426\u5FC5\u987B\u6EE1\u8DB3<span class="token number">1</span>NF\u7684\u6700\u4F4E\u8981\u6C42\uFF0C\u4E3B\u8981\u4F9D\u8D56\u4E8E\u6240\u4F7F\u7528\u7684\u5173\u7CFB\u6A21\u578B\u3002
    \u4E0D\u6EE1\u8DB3<span class="token number">1</span>NF\u7684\u6570\u636E\u5E93\u5C31\u4E0D\u662F\u5173\u7CFB\u6570\u636E\u5E93\u3002\u6EE1\u8DB3<span class="token number">1</span>NF\u7684\u8868\u5FC5\u987B\u8981\u6709\u4E3B\u952E\u4E14\u6BCF\u4E2A\u5C5E\u6027\u4E0D\u53EF\u518D\u5206
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br></li><li><p>\u7B2C\u4E8C\u8303\u5F0F\uFF1A\u786E\u4FDD\u6570\u636E\u5E93\u8868\u4E2D\u7684\u6BCF\u4E00\u5217\u90FD\u548C\u4E3B\u952E\u76F8\u5173\uFF0C\u800C\u4E0D\u80FD\u53EA\u4E0E\u4E3B\u952E\u7684\u67D0\u4E00\u90E8\u5206\u76F8\u5173\uFF08\u4E3B\u8981\u9488\u5BF9\u8054\u5408\u4E3B\u952E\u800C\u8A00\uFF09</p><p>\u5373\u6307\u8BB0\u5F55\u7684<strong>\u552F\u4E00\u6027</strong>\u3002\u8981\u6C42\u6570\u636E\u5E93\u8868\u4E2D\u7684\u6BCF\u4E2A\u5B9E\u4F8B\u6216\u884C\u5FC5\u987B\u53EF\u4EE5\u88AB\u552F\u4E00\u5730\u533A\u5206\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">/</span><span class="token operator">*</span>\u7B2C\u4E8C\u8303\u5F0F\uFF08<span class="token number">2</span>NF\uFF09\u8981\u6C42\u6570\u636E\u5E93\u8868\u4E2D\u7684\u6BCF\u4E2A\u5B9E\u4F8B\u6216\u884C\u5FC5\u987B\u53EF\u4EE5\u88AB\u552F\u4E00\u5730\u533A\u5206\u3002
 \u4E3A\u5B9E\u73B0\u533A\u5206\u901A\u5E38\u9700\u8981\u4E3A\u8868\u52A0\u4E0A \u4E00\u4E2A\u5217\uFF0C\u4EE5\u5B58\u50A8\u5404\u4E2A\u5B9E\u4F8B\u7684\u552F\u4E00\u6807\u8BC6\u3002\u8FD9\u4E2A\u552F\u4E00\u5C5E\u6027\u5217\u88AB\u79F0\u4E3A\u4E3B\u5173\u952E\u5B57\u6216\u4E3B\u952E\u3001\u4E3B\u7801\u3002 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br></li><li><p>\u7B2C\u4E09\u8303\u5F0F\uFF1A\u5C5E\u6027\u4E0D\u4F9D\u8D56\u4E8E\u5176\u5B83\u975E\u4E3B\u5C5E\u6027 [ \u6D88\u9664\u4F20\u9012\u4F9D\u8D56 ]\u3002\u5373\u6307<strong>\u5B57\u6BB5\u4E0D\u8981\u5197\u4F59</strong>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BBER\u662F\u4E00\u4E2A\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\u6761\u4EF6\u7684\u5173\u7CFB\u6A21\u5F0F\uFF0CX\u662FR\u7684\u4EFB\u610F\u5C5E\u6027\u96C6\uFF0C\u5982\u679CX\u975E\u4F20\u9012\u4F9D\u8D56\u4E8ER\u7684\u4EFB\u610F\u4E00\u4E2A\u5019\u9009\u5173\u952E\u5B57\uFF0C\u79F0R\u6EE1\u8DB3\u7B2C\u4E09\u8303\u5F0F\uFF0C\u7B80\u8BB0\u4E3A3NF. 

\u6EE1\u8DB3 \u7B2C\u4E09\u8303\u5F0F\uFF083NF\uFF09\u5FC5\u987B\u5148\u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\uFF082NF\uFF09\u3002

\u7B2C\u4E09\u8303\u5F0F\uFF083NF\uFF09\u8981\u6C42\u4E00\u4E2A\u6570\u636E\u5E93\u8868\u4E2D\u4E0D\u5305\u542B\u5DF2\u5728\u5176\u5B83\u8868\u4E2D\u5DF2\u5305\u542B\u7684\u975E\u4E3B\u5173\u952E\u5B57\u4FE1\u606F\u3002 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><br><p>\u6CE8\uFF1A\u5173\u7CFB\u5B9E\u8D28\u4E0A\u662F\u4E00\u5F20\u4E8C\u7EF4\u8868\uFF0C\u5176\u4E2D\u6BCF\u4E00\u884C\u662F\u4E00\u4E2A\u5143\u7EC4\uFF0C\u6BCF\u4E00\u5217\u662F\u4E00\u4E2A\u5C5E\u6027</p><p>\u7B2C\u4E8C\u8303\u5F0F\uFF082NF\uFF09\u548C\u7B2C\u4E09\u8303\u5F0F\uFF083NF\uFF09\u7684\u6982\u5FF5\u5F88\u5BB9\u6613\u6DF7\u6DC6\uFF0C\u533A\u5206\u5B83\u4EEC\u7684\u5173\u952E\u70B9\u5728\u4E8E\uFF0C</p><p>2NF\uFF1A\u975E\u4E3B\u952E\u5217\u662F\u5426\u5B8C\u5168\u4F9D\u8D56\u4E8E\u4E3B\u952E\uFF0C\u8FD8\u662F\u4F9D\u8D56\u4E8E\u4E3B\u952E\u7684\u4E00\u90E8\u5206\uFF1B</p><p>3NF\uFF1A\u975E\u4E3B\u952E\u5217\u662F\u76F4\u63A5\u4F9D\u8D56\u4E8E\u4E3B\u952E\uFF0C\u8FD8\u662F\u76F4\u63A5\u4F9D\u8D56\u4E8E\u975E\u4E3B\u952E\u5217\u3002</p><br><p>\u5728\u5B9E\u9645\u7684\u5DE5\u4F5C\u4E2D\uFF0C\u8981\u4E0D\u8981\u53BB\u5197\u4F59\u5B57\u6BB5\u5462\uFF1F</p><blockquote><p>\u9002\u5F53\u7684\u5B57\u6BB5\u5197\u4F59\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u63D0\u9AD8\u67E5\u8BE2\u7684\u6548\u7387\uFF0C\u4F46\u662F\u4F1A\u5F71\u54CD\u5230\u589E\u5220\u6539\u7684\u6548\u7387\u3002</p><p>\u90A3\u4E48\u6211\u4EEC\u5197\u4F59\u5B57\u6BB5\u9700\u8981\u770B\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\uFF0C\u5047\u5982\u5728\u8FD9\u4E2A\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C</p><p><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>\u67E5\u8BE2\u7684\u9700\u6C42\u8FDC\u5927\u4E8E\u589E\u5220\u6539\u7684\u9700\u6C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u9002\u5F53\u7684\u53BB\u5197\u4F59\u6570\u636E</strong></span>\uFF1B</p><p>\u5047\u5982\u589E\u5220\u6539\u7684\u9700\u6C42\u6BD4\u67E5\u8BE2\u7684\u9700\u6C42\u6BD4\u91CD\u8981\u9AD8\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u65F6\u5019\u5C31\u4E0D\u5E94\u8BE5\u5197\u4F59\u6570\u636E\u3002</p><p>\u5197\u4F59\u5B57\u6BB5\u7684\u8BBE\u8BA1\uFF1A\u53CD\u8303\u5F0F\u5316\u8BBE\u8BA1\u3002</p></blockquote><br><h3 id="_3-\u591A\u8868\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_3-\u591A\u8868\u8BBE\u8BA1" aria-hidden="true">#</a> 3. \u591A\u8868\u8BBE\u8BA1</h3><br><h2 id="\u56DB-\u4E8B\u52A1transaction" tabindex="-1"><a class="header-anchor" href="#\u56DB-\u4E8B\u52A1transaction" aria-hidden="true">#</a> \u56DB \u4E8B\u52A1Transaction</h2><p><strong>\u4E8B\u52A1\uFF08Transaction\uFF09</strong>\uFF1A\u662F\u7531\u4E00\u7CFB\u5217\u5BF9\u6570\u636E\u5E93\u4E2D\u6570\u636E\u8FDB\u2F8F\u8BBF\u95EE\uFF08\u67E5\u8BE2\uFF09\u4E0E\u66F4\u65B0\uFF08\u589E\u5220\u6539\uFF09\u7684\u64CD\u4F5C\u6240\u7EC4\u6210\u7684\u2F00\u4E2A\u7A0B\u5E8F\u6267\u884C\u903B\u8F91\u5355\u5143</p><p>\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u8981\u4E48\u90FD\u6210\u529F\uFF0C\u8981\u4E48\u90FD\u4E0D\u6210\u529F\u3002</p><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code>-- \u4E8B\u52A1\u76F8\u5173\u547D\u4EE4\uFF1A
begin;                -- \u5F00\u59CB\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u4E0B\u5217\u8BED\u6CD5\uFF1A
start transaction; 
commit;               -- \u63D0\u4EA4\uFF1A\u4F7F\u5F97\u5F53\u524D\u7684\u4FEE\u6539\u786E\u8BA4
rollback;             -- \u56DE\u6EDA\uFF1A\u4F7F\u5F97\u5F53\u524D\u7684\u4FEE\u6539\u88AB\u653E\u5F03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-\u4E8B\u52A1\u7684acid\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u4E8B\u52A1\u7684acid\u7279\u6027" aria-hidden="true">#</a> 1. \u4E8B\u52A1\u7684ACID\u7279\u6027</h3><ul><li><p><strong>\u539F\u5B50\u6027\uFF08Atomicity\uFF09</strong>\uFF1A\u4E8B\u52A1\u5FC5\u987B\u662F\u2F00\u4E2A\u539F\u5B50\u7684\u64CD\u4F5C\u5E8F\u5217\u5355\u5143</p><p>\u4E8B\u52A1\u4E2D\u5305\u542B\u7684\u5404\u9879\u64CD\u4F5C\u5728\u2F00\u6B21\u6267\u2F8F\u8FC7\u7A0B\u4E2D\uFF0C\u53EA\u5141\u8BB8\u51FA\u73B0\u4E24\u79CD\u72B6\u6001\u4E4B\u4E00\uFF1A\uFF081\uFF09\u5168\u90E8\u6267\u884C\u6210\u529F \uFF082\uFF09\u5168\u90E8\u6267\u884C\u5931\u8D25</p><p>\u4E8B\u52A1\u5F00\u59CB\u540E\u6240\u6709\u64CD\u4F5C\uFF0C\u8981\u4E48\u5168\u90E8\u505A\u5B8C\uFF0C\u8981\u4E48\u5168\u90E8\u4E0D\u505A\uFF0C\u4E0D\u53EF\u80FD\u505C\u6EDE\u5728\u4E2D\u95F4\u73AF\u8282\u3002</p><p>\u4E8B\u52A1\u6267\u2F8F\u8FC7\u7A0B\u4E2D\u51FA\u9519\uFF0C \u4F1A\u56DE\u6EDA\u5230\u4E8B\u52A1\u5F00\u59CB\u524D\u7684\u72B6\u6001\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u5C31\u50CF\u6CA1\u6709\u53D1\u2F63\u4E00\u6837\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\u4E8B\u52A1\u662F\u2F00\u4E2A\u4E0D\u53EF\u5206\u5272\u7684\u6574\u4F53\uFF0C\u5C31\u50CF\u5316\u5B66\u4E2D\u5B66\u8FC7\u7684\u539F\u5B50\uFF0C\u662F\u7269\u8D28\u6784\u6210\u7684\u57FA\u672C\u5355\u4F4D\u3002</p><br></li><li><p><strong>\u2F00\u81F4\u6027\uFF08Consistency\uFF09</strong> \uFF1A\u4E00\u4E2A\u4E8B\u52A1\u5728\u6267\u2F8F\u4E4B\u524D\u548C\u6267\u884C\u4E4B\u540E\uFF0C\u6570\u636E\u5E93\u90FD\u5FC5\u987B\u5904\u4E8E\u2F00\u81F4\u6027\u72B6\u6001\u3002</p><p>\u5373\u4E8B\u52A1\u5FC5\u987B\u662F\u6570\u636E\u5E93\u4ECE\u4E00\u4E2A\u4E00\u81F4\u6027\u72B6\u6001\u5230\u53E6\u5916\u4E00\u4E2A\u4E00\u81F4\u6027\u72B6\u6001\u3002</p><p>\u6BD4\u5982\uFF1A\u5982\u679C\u4ECEA\u8D26\u6237\u8F6C\u8D26\u5230B\u8D26\u6237\uFF0C\u4E0D\u53EF\u80FD\u56E0\u4E3AA\u8D26\u6237\u6263\u4E86\u94B1\uFF0C\u2F7DB\u8D26\u6237\u6CA1\u6709\u52A0\u94B1\uFF08\u4E24\u4E2A\u8D26\u53F7\u7684\u603B\u91D1\u989D\u8981\u4FDD\u6301\u4E00\u81F4\u72B6\u6001\uFF09</p><br></li><li><p><strong>\u9694\u79BB\u6027\uFF08Isolation\uFF09</strong> \uFF1A\u5728\u5E76\u53D1\u73AF\u5883\u4E2D\uFF0C\u5E76\u53D1\u7684\u4E8B\u52A1\u662F\u4E92\u76F8\u9694\u79BB\u7684\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u540C\u7684\u4E8B\u52A1\u5E76\u53D1\u64CD\u4F5C\u76F8\u540C\u7684\u6570\u636E\u65F6\uFF0C\u6BCF\u4E2A\u4E8B\u52A1\u90FD\u6709\u5404\u81EA\u5B8C\u6574\u7684\u6570\u636E\u7A7A\u95F4\u3002</p><p>\u2F00\u4E2A\u4E8B\u52A1\u5185\u90E8\u7684\u64CD\u4F5C\u53CA\u4F7F\u7528\u7684\u6570\u636E\u5BF9\u5176\u5B83\u5E76\u53D1\u4E8B\u52A1\u662F\u9694\u79BB\u7684\uFF0C\u5E76\u53D1\u6267\u884C\u7684\u5404\u4E2A\u4E8B\u52A1\u662F\u4E0D\u80FD\u4E92\u76F8\u5E72\u6270\u7684\u3002</p><p>\u5728\u4E8B\u52A1\u4E2D\uFF0C\u6709\u9694\u79BB\u7EA7\u522B\u7684\u5B9A\u4E49\uFF0C\u4E0D\u540C\u7684\u9694\u79BB\u7EA7\u522B\u6709\u4E0D\u540C\u7684\u5F71\u54CD\u7684\u7A0B\u5EA6\u3002</p><br></li><li><p><strong>\u6301\u4E45\u6027\uFF08Durability\uFF09</strong>\uFF1A\u4E8B\u52A1\u2F00\u65E6\u63D0\u4EA4\u540E\uFF0C\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u5FC5\u987B\u88AB\u6C38\u4E45\u7684\u4FDD\u5B58\u4E0B\u6765\u3002</p><p>\u5373\u4F7F\u670D\u52A1\u5668\u7CFB\u7EDF\u5D29\u6E83\u6216\u670D \u52A1\u5668\u5B95\u673A\u7B49\u6545\u969C\u3002\u53EA\u8981\u6570\u636E\u5E93\u91CD\u65B0\u542F\u52A8\uFF0C\u90A3\u4E48\u4E00\u5B9A\u80FD\u591F\u5C06\u5176\u6062\u590D\u5230\u4E8B\u52A1\u6210\u529F\u7ED3\u675F\u540E\u7684\u72B6\u6001</p></li></ul><br><h3 id="_2-\u4E8B\u52A1\u7684\u5E76\u53D1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8B\u52A1\u7684\u5E76\u53D1\u95EE\u9898" aria-hidden="true">#</a> 2. \u4E8B\u52A1\u7684\u5E76\u53D1\u95EE\u9898</h3>`,70),w=s("-- \u8BE6\u60C5\uFF1A"),U={href:"https://blog.csdn.net/drizzletowne/article/details/120928779?app_version=4.17.0&code=app_1562916241&uLinkId=usr1mkqgl919blen",target:"_blank",rel:"noopener noreferrer"},z=s("MySQL\u4E8B\u52A1\u5E76\u53D1\u95EE\u9898"),F=l('<ul><li><p><strong>\u810F\u8BFB\uFF08Dirty Read\uFF09</strong>\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u8BFB\u53D6\u5230\u4E86\u53E6\u5916\u4E00\u4E2A\u4E8B\u52A1\u8FD8\u6CA1\u63D0\u4EA4\u7684\u6570\u636E\u3002</p><p>\u4E8B\u52A1A\u8BFB\u53D6\u4E86\u4E8B\u52A1B\u66F4\u65B0\u4F46\u672A\u63D0\u4EA4\u7684\u6570\u636E\uFF08\u810F\u6570\u636E\uFF09</p><p><em>\u810F\u6570\u636E</em>\uFF1A\u662F\u6307\u4E8B\u52A1\u5BF9\u7F13\u51B2\u6C60\u4E2D\u884C\u8BB0\u5F55\u7684\u4FEE\u6539\uFF0C\u5E76\u4E14\u8FD8\u6CA1\u6709\u88AB\u63D0\u4EA4\uFF08commit\uFF09</p><p>\u810F\u8BFB\u53D1\u751F\u7684\u6761\u4EF6\u662F\u9700\u8981\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B\u4E3A <code>READ UNCOMMITTED</code></p><br></li><li><p><strong>\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF08Nonrepeatable Read\uFF09</strong>\uFF1A\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u5185\uFF0C\u9488\u5BF9\u540C\u4E00\u4E2A\u6570\u636E\uFF0C\u524D\u540E\u8BFB\u53D6\u7684\u6570\u636E\u4E0D\u4E00\u6837</p><p>\u53EF\u80FD\u539F\u56E0\uFF1A\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u5185\uFF0C\u8BFB\u53D6\u5230\u4E86\u522B\u7684\u4E8B\u52A1\u4FEE\u6539\u7684\u6570\u636E\u3002\u5982\uFF1A\u4E8B\u52A1 A \u591A\u6B21\u8BFB\u53D6\u540C\u4E00\u6570\u636E\uFF0C\u4E8B\u52A1 B \u5728\u4E8B\u52A1A \u591A\u6B21\u8BFB\u53D6\u7684 \u8FC7\u7A0B\u4E2D\uFF0C\u5BF9\u6570\u636E\u505A\u4E86\u66F4\u65B0\u5E76\u63D0\u4EA4\uFF0C\u5BFC\u81F4\u4E8B\u52A1A\u591A\u6B21\u8BFB\u53D6\u540C\u4E00\u6570\u636E\u65F6\uFF0C\u7ED3\u679C\u4E0D\u4E00\u81F4\u3002</p><p><em>\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u810F\u8BFB\u7684\u533A\u522B</em> \u662F\uFF1A\u810F\u8BFB\u662F\u8BFB\u5230\u672A\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u800C\u4E0D\u53EF\u91CD\u590D\u8BFB\u8BFB\u5230\u7684\u5374\u662F\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E</p><p>\u6709\u65F6\u5019\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB\u7684\u95EE\u9898\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\uFF0C\u56E0\u4E3A\u5176\u8BFB\u5230\u7684\u662F\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u672C\u8EAB\u5E76\u4E0D\u4F1A\u5E26\u6765\u5F88\u5927\u7684\u95EE\u9898</p></li></ul><br><ul><li><p><strong>\u5E7B\u8BFB\uFF08Phantom Read\uFF09</strong>\uFF1A\u5728\u4E00\u4E2A\u4E8B\u52A1\u5185\uFF0C\u8BFB\u53D6\u6570\u636E\u8BB0\u5F55\u6761\u6570\u524D\u540E\u4E0D\u4E00\u81F4 \uFF0C</p><p>\u53EF\u80FD\u539F\u56E0\uFF1A\u5728\u4E00\u4E2A\u4E8B\u52A1\u5185\uFF0C\u8BFB\u53D6\u5230\u4E86\u522B\u7684\u4E8B\u52A1\u63D2\u5165\uFF08\u5220\u9664\uFF09\u7684\u6570\u636E</p><p>\u5373\u5728\u91CD\u590D\u67E5\u8BE2\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6570\u636E\u53D1\u2F63\u4E86\u91CF\u7684\u53D8\u5316\uFF08\u884C\u6570\u591A\u4E86\u6216\u5C11\u4E86\uFF09\u5982\uFF1A</p><ol><li>\u4E8B\u52A1 A \u91CC\u6709\u4E00\u4E2A\u6761\u4EF6\u67E5\u8BE2\u7684\u8BED\u53E5 <code>select * from student where age &gt; 10</code>\uFF0C\u5047\u8BBE\u67E5\u5230\u4E86 10 \u884C\u6570\u636E\uFF1B</li><li>\u7136\u540E\u4E8B\u52A1 B \u5F80\u91CC\u9762\u52A0\u5165\u4E86\u4E00\u6279\u6570\u636E \uFF08\u6216\u8005\u5220\u9664\u4E86\u4E00\u4E9B\u6570\u636E\uFF09</li><li>\u4E8B\u52A1 A \u518D\u67E5\u7684\u7528\u6761\u4EF6\u67E5\u8BE2\u8BED\u53E5\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u67E5\u5230\u4E8615\u6761 \uFF08\u5982\u679CB\u6267\u884C\u4E86\u5220\u9664\uFF0C\u90A3\u4E48\u5C06\u4F1A\u5C11\u4E8E10\u6761\u6570\u636E\uFF09</li></ol></li></ul><br><h3 id="_3-\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#_3-\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B" aria-hidden="true">#</a> 3. \u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B</h3><p>\u2751 Read Uncommitted\uFF08\u8BFB\u672A\u63D0\u4EA4\uFF09\uFF1A\u6700\u4F4E\u7684\u9694\u79BB\u7EA7\u522B\uFF0C\u4E5F\u662F\u552F\u4E00\u80FD\u8BFB\u5230\u810F\u6570\u636E\u7684\u9694\u79BB\u7EA7\u522B</p><p>\u2751 Read Committed\uFF08\u8BFB\u5DF2\u63D0\u4EA4\uFF09\uFF1A\u53EA\u80FD\u8BFB\u53D6\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E\u3001\u89E3\u51B3\u4E86\u810F\u8BFB\u95EE\u9898\uFF0C\u4F46\u662F\u8FD8\u662F\u89E3\u51B3\u4E0D\u4E86\u53EF\u91CD\u590D\u8BFB\u95EE\u9898</p><p>\u2751 Repeatable Read\uFF08\u53EF\u91CD\u590D\u8BFB\uFF09\uFF1A\u4FDD\u8BC1\u5728\u4E8B\u52A1\u5904\u7406\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u591A\u6B21\u8BFB\u53D6\u540C\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u8BE5\u6570\u636E\u7684\u503C\u662F\u4E00\u81F4\u7684</p><p>\u2751 Serializable\uFF08\u987A\u5E8F\u8BFB / \u53EF\u4E32\u884C\u5316 / \u5E8F\u5217\u5316\uFF09\uFF1A\u6700\u4E25\u683C\u7684\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u3001\u4E8B\u52A1\u53EA\u80FD\u4E00\u4E2A\u63A5\u4E00\u4E2A\u5730\u5904\u7406\uFF0C\u4E0D\u80FD\u5E76\u53D1</p><br><blockquote><p><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>read uncommitted \u6709\u810F\u8BFB\u3001\u4E0D\u53EF\u91CD\u590D\u8BFB\u3001\u865A\u5E7B\u8BFB\u7684\u95EE\u9898</strong></span> \u3001read uncommitted \u662F\u6700\u4E0D\u5B89\u5168\u7684\u9694\u79BB\u7EA7\u522B\u3002</p><p><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>read committed \u9694\u79BB\u7EA7\u522B\u6CA1\u6709 \u810F\u8BFB\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u6709\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u865A\u5E7B\u8BFB\u7684\u95EE\u9898\u3002</strong></span></p><p><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>repeatable read \u6CA1\u6709\u810F\u8BFB\u7684\u95EE\u9898\uFF0C\u6CA1\u6709\u4E0D\u53EF\u91CD\u590D\u8BFB\u7684\u95EE\u9898\uFF0C\u4E5F\u6CA1\u6709\u865A\u5E7B\u8BFB\u7684\u95EE\u9898\u3002\u8FD9\u4E2A\u9694\u79BB\u7EA7\u522B\u4E5F\u662FMySQL\u9ED8\u8BA4\u7684\u9694\u79BB\u7EA7\u522B\u3002</strong></span></p><blockquote><p>\u8BF4\u660E\uFF1A\u53EA\u6709\u5728MySQL\u4E2D\uFF0Crepeatable read \u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u6CA1\u6709\u865A\u5E7B\u8BFB\u7684\u95EE\u9898\u3002\u56E0\u4E3AMySQL\u7684\u5B58\u50A8\u5F15\u64CEInnoDB\u901A\u8FC7MVCC\uFF08\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF09 \u89E3\u51B3\u4E86\u53EF\u91CD\u590D\u8BFB\u9694\u79BB\u7EA7\u522B\u4E0B\u865A\u5E7B\u8BFB\u7684\u95EE\u9898\u3002</p></blockquote><p><span style="color:red;background:yellow;font-size:\u6587\u5B57\u5927\u5C0F;font-family:\u5B57\u4F53;"><strong>\u4E32\u884C\u5316\u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u6CA1\u6709 \u810F\u8BFB\u3001\u4E0D\u53EF\u91CD\u590D\u8BFB\u3001\u865A\u5E7B\u8BFB\u7684\u95EE\u9898\u3002\u4F46\u662F\u6709\u6548\u7387\u7684\u95EE\u9898\u3002</strong></span></p><p>\u4E32\u884C\u5316\u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u6307\u7684\u662F\uFF0C\u6570\u636E\u5E93\u5728\u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u4F1A\u4E00\u4E2A\u4E8B\u52A1\u3001\u4E00\u4E2A\u4E8B\u52A1\u7684\u5148\u540E\u6267\u884C\uFF0C\u4F1A\u4E25\u683C\u4FDD\u8BC1\u4E8B\u52A1\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u4E0D\u5B58\u5728\u591A\u4E2A\u4E8B\u52A1\u540C\u65F6\u6267\u884C\u60C5\u51B5\uFF0C\u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u6CA1\u6709\u4E8B\u52A1\u7684\u9694\u79BB\u95EE\u9898\uFF0C\u5F53\u7136\u4E5F\u6CA1\u6709\u4E0A\u9762\u7684\u5B89\u5168\u6027\u95EE\u9898\u3002</p></blockquote><br><p>\u4E0D\u540C\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u4E0B\u7684\u4E0D\u540C\u7684\u95EE\u9898\u603B\u7ED3\uFF1A</p><table><thead><tr><th>\u9694\u79BB\u7EA7\u522B \\ \u5E76\u53D1\u95EE\u9898</th><th style="text-align:center;">\u810F\u8BFB</th><th style="text-align:center;">\u4E0D\u53EF\u91CD\u590D\u8BFB</th><th style="text-align:center;">\u865A\u5E7B\u8BFB</th></tr></thead><tbody><tr><td>read uncommitted</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr><tr><td>read committed</td><td style="text-align:center;">X</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr><tr><td>repeatable read</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X(\u5728MySQL\u4E0B\u6CA1\u6709)</td></tr><tr><td>serializable</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td></tr></tbody></table><br><p><code>InnoDB</code> offers all four transaction isolation levels described by the SQL:1992 standard:</p>',16),P={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_read-uncommitted",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"READ UNCOMMITTED",-1),G=s(", "),K={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_read-committed",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"READ COMMITTED",-1),X=s(", "),H={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_repeatable-read",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"REPEATABLE READ",-1),W=s(", and "),j={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_serializable",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"SERIALIZABLE",-1),J=s("."),nn=s("The default isolation level for "),sn=n("code",null,"InnoDB",-1),an=s(" is "),en={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_repeatable-read",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"REPEATABLE READ",-1),tn=s("."),cn=n("p",null,[s("InnoDB\u5B58\u50A8\u5F15\u64CE\u9ED8\u8BA4\u652F\u6301\u7684\u9694\u79BB\u7EA7\u522B\u662F "),n("code",null,"REPEATABLE READ"),s("\uFF0C\u4F46\u662F\u4E0E\u6807\u51C6SQL\u4E0D\u540C\u7684\u662F\uFF0CInnoDB\u5B58\u50A8\u5F15\u64CE\u5728"),n("code",null,"REPEATABLE READ"),s("\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u4F7F\u7528 "),n("code",null,"Next-Key Lock "),s(" \u9501\u7684\u7B97\u6CD5\uFF0C\u56E0\u6B64\u907F\u514D\u4E86\u5E7B\u8BFB\u7684\u4EA7\u751F")],-1),on=n("p",null,"MySQL\u6570\u636E\u5E93\u4E2D\u7684InnoDB\u548CFalcon\u5B58\u50A8\u5F15\u64CE\u901A\u8FC7MVCC\uFF08Multi-Version Concurrent Control\uFF0C\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF09\u673A\u5236\u89E3\u51B3\u4E86\u53EF\u91CD\u590D\u8BFB\u9694\u79BB\u7EA7\u522B\u4E0B\u865A\u5E7B\u8BFB\u7684\u95EE\u9898\u3002",-1),dn=n("p",null,"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u591A\u7248\u672C\u53EA\u662F\u89E3\u51B3\u4E0D\u53EF\u91CD\u590D\u8BFB\u95EE\u9898\uFF0C\u800C\u52A0\u4E0A\u95F4\u9699\u9501\uFF08\u4E5F\u5C31\u662F\u5B83\u8FD9\u91CC\u6240\u8C13\u7684\u5E76\u53D1\u63A7\u5236\uFF09\u624D\u89E3\u51B3\u4E86\u5E7B\u8BFB\u95EE\u9898\u3002",-1),pn=n("br",null,null,-1);function rn(vn,mn){const a=o("ExternalLinkIcon");return t(),c("div",null,[v,n("p",null,[m,n("a",u,[b,e(a)])]),n("p",null,[k,n("a",_,[y,e(a)])]),g,n("p",null,[h,n("a",f,[q,e(a)])]),L,E,n("p",null,[M,n("a",T,[N,e(a)])]),S,I,A,R,O,n("p",null,[D,Q,n("a",x,[B,e(a)])]),C,n("p",null,[w,n("a",U,[z,e(a)])]),F,n("p",null,[n("a",P,[Y,e(a)]),G,n("a",K,[V,e(a)]),X,n("a",H,[Z,e(a)]),W,n("a",j,[$,e(a)]),J]),n("p",null,[nn,sn,an,n("a",en,[ln,e(a)]),tn]),cn,on,dn,pn])}var kn=i(r,[["render",rn],["__file","mysql.html.vue"]]);export{kn as default};
