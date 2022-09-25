import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as d,a as n,b as s,d as e,e as v,r}from"./app.024849fa.js";const c={},u=n("h1",{id:"kubernetes\u7684\u5E94\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kubernetes\u7684\u5E94\u7528","aria-hidden":"true"},"#"),e(" kubernetes\u7684\u5E94\u7528")],-1),t=n("h2",{id:"\u4E00-\u5B89\u88C5kubernetes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E00-\u5B89\u88C5kubernetes","aria-hidden":"true"},"#"),e(" \u4E00 \u5B89\u88C5kubernetes")],-1),m=n("p",null,"kubernetes\u7B80\u79F0k8s\u3002\u662F\u7528\u4E8E\u81EA\u52A8\u90E8\u7F72\uFF0C\u6269\u5C55\u548C\u7BA1\u7406\u5BB9\u5668\u5316\u5E94\u7528\u7A0B\u5E8F\u7684\u5F00\u6E90\u7CFB\u7EDF\u3002",-1),o=e("\u4E2D\u6587\u5B98\u7F51\uFF1A"),b={href:"https://kubernetes.io/Zh/",target:"_blank",rel:"noopener noreferrer"},p=e("https://kubernetes.io/Zh/"),k=e(" \u4E2D\u6587\u793E\u533A\uFF1A"),f={href:"https://www.kubernetes.org.cn/",target:"_blank",rel:"noopener noreferrer"},h=e("https://www.kubernetes.org.cn/"),g=e(" \u5B98\u65B9\u6587\u6863\uFF1A"),y={href:"https://kubernetes.io/zh/docs/home/",target:"_blank",rel:"noopener noreferrer"},q=e("https://kubernetes.io/zh/docs/home/"),_=e(" \u793E\u533A\u6587\u6863\uFF1A"),x={href:"https://docs.kubernetes.org.cn/",target:"_blank",rel:"noopener noreferrer"},P=e("https://docs.kubernetes.org.cn/"),E=n("p",null,"\u642D\u5EFAKubernetes\u96C6\u7FA4\u73AF\u5883\u6709\u4E09\u79CD\u65B9\u5F0F",-1),M=n("ol",null,[n("li",null,"Minikube\u5B89\u88C5\u65B9\u5F0F")],-1),N=e("Minikube\u662F\u4E00\u4E2A\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5728\u672C\u5730\u5FEB\u901F\u8FD0\u884C\u4E00\u4E2A\u5355\u70B9\u7684Kubernetes\uFF0C\u5C1D\u8BD5Kubernetes\u6216\u65E5\u5E38\u5F00\u53D1\u7684\u7528\u6237\u4F7F\u7528\u3002\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u4EC5\u53EF\u7528\u4E8E\u5B66\u4E60\u548C\u6D4B\u8BD5\u90E8\u7F72\uFF0C\u4E0D\u80FD\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002"),A={href:"https://kubernetes.io/docs/setup/minikube/",target:"_blank",rel:"noopener noreferrer"},w=e("https://kubernetes.io/docs/setup/minikube/"),D=n("ol",{start:"2"},[n("li",null,"Kubeadm\u5B89\u88C5\u65B9\u5F0F(\u672C\u6B21\u57FA\u4E8E\u8BE5\u65B9\u5F0F)")],-1),S=n("p",null,"kubeadm\u662F\u4E00\u4E2Akubernetes\u5B98\u65B9\u63D0\u4F9B\u7684\u5FEB\u901F\u5B89\u88C5\u548C\u521D\u59CB\u5316\u62E5\u6709\u6700\u4F73\u5B9E\u8DF5\uFF08best practice\uFF09\u7684kubernetes\u96C6\u7FA4\u7684\u5DE5\u5177\uFF0C\u63D0\u4F9Bkubeadm init\u548Ckubeadm join\uFF0C\u7528\u4E8E\u5FEB\u901F\u90E8\u7F72Kubernetes\u96C6\u7FA4\u3002\u76EE\u524Dkubeadm\u8FD8\u5904\u4E8Ebeta \u548Calpha\u72B6\u6001\uFF0C\u4E0D\u63A8\u8350\u7528\u5728\u751F\u4EA7\u73AF\u5883\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u5B66\u4E60\u8FD9\u79CD\u90E8\u7F72\u65B9\u6CD5\u6765\u4F53\u4F1A\u4E00\u4E9B\u5B98\u65B9\u63A8\u8350\u7684kubernetes\u6700\u4F73\u5B9E\u8DF5\u7684\u8BBE\u8BA1\u548C\u601D\u60F3\u3002",-1),I=n("p",null,"kubeadm\u7684\u76EE\u6807\u662F\u63D0\u4F9B\u4E00\u4E2A\u6700\u5C0F\u53EF\u7528\u7684\u53EF\u4EE5\u901A\u8FC7Kubernetes\u4E00\u81F4\u6027\u6D4B\u8BD5\u7684\u96C6\u7FA4\uFF0C\u6240\u4EE5\u5E76\u4E0D\u4F1A\u5B89\u88C5\u4EFB\u4F55\u9664\u6B64\u4E4B\u5916\u7684\u975E\u5FC5\u987B\u7684addon\u3002kubeadm\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5E76\u4E0D\u4F1A\u5B89\u88C5\u4E00\u4E2A\u7F51\u7EDC\u89E3\u51B3\u65B9\u6848\uFF0C\u6240\u4EE5\u7528kubeadm\u5B89\u88C5\u5B8C\u4E4B\u540E\uFF0C\u9700\u8981\u81EA\u5DF1\u6765\u5B89\u88C5\u4E00\u4E2A\u7F51\u7EDC\u7684\u63D2\u4EF6\u3002\u6240\u4EE5\u8BF4\uFF0C\u76EE\u524D\u7684kubeadm\u662F\u4E0D\u80FD\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684",-1),O={href:"https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/",target:"_blank",rel:"noopener noreferrer"},C=e("https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/"),F=n("ol",{start:"3"},[n("li",null,"\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5\u65B9\u5F0F\uFF08\u751F\u4EA7\u90E8\u7F72\u7684\u63A8\u8350\u65B9\u5F0F\uFF09")],-1),R=n("p",null,"\u4ECE\u5B98\u65B9\u4E0B\u8F7D\u53D1\u884C\u7248\u7684\u4E8C\u8FDB\u5236\u5305\uFF0C\u624B\u52A8\u90E8\u7F72\u6BCF\u4E2A\u7EC4\u4EF6\uFF0C\u7EC4\u6210Kubernetes\u96C6\u7FA4\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u7B26\u5408\u4F01\u4E1A\u751F\u4EA7\u73AF\u5883\u6807\u51C6\u7684Kubernetes\u96C6\u7FA4\u73AF\u5883\u7684\u5B89\u88C5\uFF0C\u53EF\u7528\u4E8E\u751F\u4EA7\u65B9\u5F0F\u90E8\u7F72\u3002",-1),U={href:"https://github.com/kubernetes/kubernetes/releases",target:"_blank",rel:"noopener noreferrer"},L=e("https://github.com/kubernetes/kubernetes/releases"),V={href:"https://www.cnblogs.com/kevingrace/category/839227.html",target:"_blank",rel:"noopener noreferrer"},T=e("https://www.cnblogs.com/kevingrace/category/839227.html"),K=e(" #\u53C2\u8003"),j=v(`<h3 id="_1-\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1-\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> 1. \u73AF\u5883\u51C6\u5907</h3><p>Kubernetes\u5B89\u88C5\u8981\u6C42\uFF1ALinux\u5185\u68383.10+\u62164+ (OS\uFF1Acentos7)</p><p>\u4EE5\u4E0B\u7B2C\u4E00\u3001\u4E8C\u6B65\u64CD\u4F5C\u5B8C\u6BD5\u540E\u518D\u514B\u9686\u865A\u62DF\u673A\uFF0C\u514B\u9686\u5B8C\u6BD5\u540E\u518D\u6BCF\u53F0\u72EC\u7ACB\u4FEE\u6539\u4E3B\u673A\u540D\u548C\u7F51\u5361UUID</p><ol><li>\u5173\u95ED\u9632\u706B\u5899\u3001selinux\u3001swap \uFF08\u4E91\u670D\u52A1\u5668\u9ED8\u8BA4\u72B6\u6001\uFF09</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u9632\u706B\u5899</span>
firewall-cmd --state
systemctl stop firewalld.service <span class="token operator">&amp;&amp;</span> systemctl disable firewalld.service

<span class="token comment">#selinux</span>
<span class="token function">cat</span> /etc/selinux/config  <span class="token operator">|</span> <span class="token function">grep</span> -w <span class="token string">&quot;SELINUX&quot;</span>
setenforce <span class="token number">0</span>
<span class="token function">sed</span> -ri <span class="token string">&#39;s/SELINUX=enforcing/SELINUX=disabled/&#39;</span> /etc/selinux/config

<span class="token comment">#swap</span>
<span class="token function">free</span> -m
swapoff -a
<span class="token function">sed</span>  -i -r <span class="token string">&#39;/swap/s/^/#/&#39;</span> /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4FEE\u6539\u65F6\u533A\u3001\u5185\u6838\u53C2\u6570\u3001\u4E3B\u673A\u540D</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BBE\u7F6E\u65F6\u533A</span>
timedatectl
timedatectl set-timezone Asia/Shanghai

<span class="token comment">#\u5185\u6838\u53C2\u6570</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
net.bridge.bridge-nf-call-iptables=1
net.bridge.bridge-nf-call-ip6tables=1
net.ipv4.ip_forward=1
EOF</span>

sysctl -p /etc/sysctl.d/k8s.conf

lsmod <span class="token operator">|</span> <span class="token function">grep</span> br_netfilter                       <span class="token comment">#\u67E5\u770B\u7F51\u6865\u8FC7\u6EE4\u6A21\u5757\u662F\u5426\u52A0\u8F7D\u6210\u529F</span>
modprobe br_netfilter                           <span class="token comment">#\u52A0\u8F7D\u7F51\u6865\u8FC7\u6EE4\u6A21\u5757</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;modprobe br_netfilter&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile


<span class="token comment">#kube-proxy\u5F00\u542Fipvs\u7684\u524D\u7F6E\u6761\u4EF6</span>
<span class="token comment">#\u5B89\u88C5ipset\u548Cipvsadm</span>
yum <span class="token function">install</span> ipset ipvsadm -y

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /etc/sysconfig/modules/ipvs.modules 
<span class="token comment">#!/bin/bash</span>
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4
EOF

<span class="token function">chmod</span> <span class="token number">755</span> /etc/sysconfig/modules/ipvs.modules <span class="token operator">&amp;&amp;</span> <span class="token function">bash</span> /etc/sysconfig/modules/ipvs.modules  <span class="token comment">#\u6DFB\u52A0\u6743\u9650\uFF0C\u6267\u884C\u811A\u672C</span>
lsmod <span class="token operator">|</span> <span class="token function">grep</span> -e ip_vs -e nf_conntrack_ipv4                                                 <span class="token comment">#\u67E5\u770B\u5BF9\u5E94\u6A21\u5757\u662F\u5426\u52A0\u8F7D\u6210\u529F</span>

<span class="token comment">#\u4E3B\u673A\u540D\uFF08\u6A21\u62DF\u57DF\u540D\uFF09</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;&gt;</span> /etc/hosts
<span class="token number">192.168</span>.16.12     k8s-master01
<span class="token number">192.168</span>.16.13     k8s-node01
<span class="token number">192.168</span>.16.14     k8s-node02
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5B89\u88C5Docker\u3001kubelet\u3001 kubeadm\u3001 kubectl</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BBE\u7F6E\u955C\u50CF\u6E90</span>
yum <span class="token function">install</span> -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment">#\u67E5\u770B\u5F53\u524D\u955C\u50CF\u6E90\u652F\u6301\u7684docker\u7248\u672C</span>
yum list docker-ce --showduplicates
<span class="token comment">#\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684docker-ce \uFF08\u5FC5\u987B\u6307\u5B9A--setopt=obseletes=0\uFF0C\u5426\u5219\u4F1A\u81EA\u52A8\u5B89\u88C5\u6700\u65B0\u7248\uFF09</span>
yum <span class="token function">install</span> --setopt<span class="token operator">=</span>obseletes<span class="token operator">=</span><span class="token number">0</span> docker-ce-18.06.3.ce-3.el7 -y

<span class="token comment">#\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6\uFF08\u4F7F\u7528systemd\u6765\u4EE3\u66FFcgroupfs\uFF09</span>
<span class="token function">mkdir</span> /etc/docker
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
&quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
&quot;registry-mirrors&quot;:[&quot;https://kn0t2bca.mirror.aliyuncs.com&quot;]
}
EOF</span>

<span class="token comment"># \u91CD\u542Fdocker\u670D\u52A1</span>
systemctl daemon-reload <span class="token operator">&amp;&amp;</span> systemctl restart <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>


<span class="token comment">#\u5B89\u88C5kubelet kubeadm kubectl \uFF08\u5148\u914D\u7F6E\u955C\u50CF\u6E90\u3001\u518D\u5B89\u88C5\u6307\u5B9A\u7248\u672C\uFF09</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>

<span class="token comment">#\u67E5\u770Bkubelet kubeadm kubectl\u7248\u672C</span>
yum list kubelet kubeadm kubectl  --showduplicates<span class="token operator">|</span><span class="token function">sort</span> -r

yum <span class="token function">install</span> -y --setopt<span class="token operator">=</span>obseletes<span class="token operator">=</span><span class="token number">0</span> kubelet-1.18.9-0 kubeadm-1.18.9-0 kubectl-1.18.9-0 

<span class="token comment">#\u914D\u7F6Ekubelet\u7684cgroup</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysconfig/kubelet <span class="token operator">&lt;&lt;</span><span class="token string">EOF
KUBELET_CGROUP_ARGS=&quot;--cgroup-driver=systemd&quot;
KUBE_PROXY_MODE=&quot;ipvs&quot;
EOF</span>

systemctl <span class="token builtin class-name">enable</span> kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">\u89D2\u8272</th><th style="text-align:left;">IP\u5730\u5740</th><th style="text-align:left;">\u7EC4\u4EF6</th></tr></thead><tbody><tr><td style="text-align:left;">k8s-master01</td><td style="text-align:left;">192.168.16.12</td><td style="text-align:left;">docker\uFF0Ckubectl\uFF0Ckubeadm\uFF0Ckubelet</td></tr><tr><td style="text-align:left;">k8s-node01</td><td style="text-align:left;">192.168.16.13</td><td style="text-align:left;">docker\uFF0Ckubectl\uFF0Ckubeadm\uFF0Ckubelet</td></tr><tr><td style="text-align:left;">k8s-node02</td><td style="text-align:left;">192.168.16.14</td><td style="text-align:left;">docker\uFF0Ckubectl\uFF0Ckubeadm\uFF0Ckubelet</td></tr></tbody></table><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4EE5\u4E0B\u8BBE\u7F6E\u6BCF\u53F0\u865A\u62DF\u673A\u5FC5\u987B\u5355\u72EC\u4FEE\u6539\uFF1A</span>
<span class="token comment">#\u4FEE\u6539\u4E3B\u673A\u540D</span>
hostnamectl status               <span class="token comment"># cat /etc/hostname       hostnamectl --static</span>
hostnamectl set-hostname master

<span class="token comment">#\u865A\u62DF\u673A\u7F51\u5361UUID\u8BBE\u7F6E</span>
nmcli con show
<span class="token function">sed</span> -i <span class="token string">&quot;/UUID/c UUID=<span class="token variable"><span class="token variable">$(</span>uuidgen<span class="token variable">)</span></span>&quot;</span> /etc/sysconfig/network-scripts/ifcfg-ens33
systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u90E8\u7F72kubernetes" tabindex="-1"><a class="header-anchor" href="#_2-\u90E8\u7F72kubernetes" aria-hidden="true">#</a> 2. \u90E8\u7F72Kubernetes</h3><ol><li>\u521D\u59CB\u5316\u4E3B\u8282\u70B9\uFF08Master\u4E3B\u8282\u70B9\u64CD\u4F5C\uFF09</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubeadm init --apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.16.12 <span class="token punctuation">\\</span>
--image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--kubernetes-version v1.18.9 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/12 <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16

<span class="token function">mkdir</span> -p <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> -i /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -g<span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>node\u8282\u70B9\u52A0\u5165\u4E3B\u8282\u70B9</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5728\u5404\u4E2Anode\u5B50\u8282\u70B9\u6839\u636Ekubeadm init \u6267\u884C\u540E\u7684\u63D0\u793A\u6267\u884C</span>
kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.16.12:6443 --token j2qk59.f2dpymcn6n00c856 <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:8af68da415b54f1cc2bbdd97cfe219f65c87de5338e16a1ae15250bff9450c13 

<span class="token comment">#\u5728\u4E3B\u8282\u70B9\u67E5\u770Bnodes\u4FE1\u606F</span>
kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u90E8\u7F72\u7F51\u7EDC-flannel</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u79D1\u5B66\u4E0A\u7F51\u53EF\u4EE5\u76F4\u63A5\u7528\uFF1A\uFF08\u5426\u5219\u81EA\u5EFAkube-flannel.yml\uFF09</span>
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

<span class="token comment">#\u4F7F\u7528\u672C\u5730\u7684kube-flannel.yml\uFF08\u5728kube-flannel.yml\u6240\u5728\u76EE\u5F55\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A\uFF09</span>
kubectl apply -f kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>kube-flannel.yml</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-flannel.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: psp.flannel.unprivileged
  annotations:
    seccomp.security.alpha.kubernetes.io/allowedProfileNames: docker/default
    seccomp.security.alpha.kubernetes.io/defaultProfileName: docker/default
    apparmor.security.beta.kubernetes.io/allowedProfileNames: runtime/default
    apparmor.security.beta.kubernetes.io/defaultProfileName: runtime/default
spec:
  privileged: false
  volumes:
    - configMap
    - secret
    - emptyDir
    - hostPath
  allowedHostPaths:
    - pathPrefix: &quot;/etc/cni/net.d&quot;
    - pathPrefix: &quot;/etc/kube-flannel&quot;
    - pathPrefix: &quot;/run/flannel&quot;
  readOnlyRootFilesystem: false
  # Users and groups
  runAsUser:
    rule: RunAsAny
  supplementalGroups:
    rule: RunAsAny
  fsGroup:
    rule: RunAsAny
  # Privilege Escalation
  allowPrivilegeEscalation: false
  defaultAllowPrivilegeEscalation: false
  # Capabilities
  allowedCapabilities: [&#39;NET_ADMIN&#39;]
  defaultAddCapabilities: []
  requiredDropCapabilities: []
  # Host namespaces
  hostPID: false
  hostIPC: false
  hostNetwork: true
  hostPorts:
  - min: 0
    max: 65535
  # SELinux
  seLinux:
    # SELinux is unused in CaaSP
    rule: &#39;RunAsAny&#39;
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: flannel
rules:
  - apiGroups: [&#39;extensions&#39;]
    resources: [&#39;podsecuritypolicies&#39;]
    verbs: [&#39;use&#39;]
    resourceNames: [&#39;psp.flannel.unprivileged&#39;]
  - apiGroups:
      - &quot;&quot;
    resources:
      - pods
    verbs:
      - get
  - apiGroups:
      - &quot;&quot;
    resources:
      - nodes
    verbs:
      - list
      - watch
  - apiGroups:
      - &quot;&quot;
    resources:
      - nodes/status
    verbs:
      - patch
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: flannel
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: flannel
subjects:
- kind: ServiceAccount
  name: flannel
  namespace: kube-system
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: flannel
  namespace: kube-system
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: kube-flannel-cfg
  namespace: kube-system
  labels:
    tier: node
    app: flannel
data:
  cni-conf.json: |
    {
      &quot;name&quot;: &quot;cbr0&quot;,
      &quot;cniVersion&quot;: &quot;0.3.1&quot;,
      &quot;plugins&quot;: [
        {
          &quot;type&quot;: &quot;flannel&quot;,
          &quot;delegate&quot;: {
            &quot;hairpinMode&quot;: true,
            &quot;isDefaultGateway&quot;: true
          }
        },
        {
          &quot;type&quot;: &quot;portmap&quot;,
          &quot;capabilities&quot;: {
            &quot;portMappings&quot;: true
          }
        }
      ]
    }
  net-conf.json: |
    {
      &quot;Network&quot;: &quot;10.244.0.0/16&quot;,
      &quot;Backend&quot;: {
        &quot;Type&quot;: &quot;vxlan&quot;
      }
    }
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-ds-amd64
  namespace: kube-system
  labels:
    tier: node
    app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: beta.kubernetes.io/os
                    operator: In
                    values:
                      - linux
                  - key: beta.kubernetes.io/arch
                    operator: In
                    values:
                      - amd64
      hostNetwork: true
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni
        image: quay.io/coreos/flannel:v0.11.0-amd64
        # image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: quay.io/coreos/flannel:v0.11.0-amd64
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        resources:
          requests:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
          limits:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
        securityContext:
          privileged: false
          capabilities:
            add: [&quot;NET_ADMIN&quot;]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      volumes:
        - name: run
          hostPath:
            path: /run/flannel
        - name: cni
          hostPath:
            path: /etc/cni/net.d
        - name: flannel-cfg
          configMap:
            name: kube-flannel-cfg
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-ds-arm64
  namespace: kube-system
  labels:
    tier: node
    app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: beta.kubernetes.io/os
                    operator: In
                    values:
                      - linux
                  - key: beta.kubernetes.io/arch
                    operator: In
                    values:
                      - arm64
      hostNetwork: true
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni
        image: quay.io/coreos/flannel:v0.11.0-arm64
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: quay.io/coreos/flannel:v0.11.0-arm64
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        resources:
          requests:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
          limits:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
        securityContext:
          privileged: false
          capabilities:
             add: [&quot;NET_ADMIN&quot;]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      volumes:
        - name: run
          hostPath:
            path: /run/flannel
        - name: cni
          hostPath:
            path: /etc/cni/net.d
        - name: flannel-cfg
          configMap:
            name: kube-flannel-cfg
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-ds-arm
  namespace: kube-system
  labels:
    tier: node
    app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: beta.kubernetes.io/os
                    operator: In
                    values:
                      - linux
                  - key: beta.kubernetes.io/arch
                    operator: In
                    values:
                      - arm
      hostNetwork: true
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni
        image: quay.io/coreos/flannel:v0.11.0-arm
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: quay.io/coreos/flannel:v0.11.0-arm
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        resources:
          requests:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
          limits:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
        securityContext:
          privileged: false
          capabilities:
             add: [&quot;NET_ADMIN&quot;]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      volumes:
        - name: run
          hostPath:
            path: /run/flannel
        - name: cni
          hostPath:
            path: /etc/cni/net.d
        - name: flannel-cfg
          configMap:
            name: kube-flannel-cfg
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-ds-ppc64le
  namespace: kube-system
  labels:
    tier: node
    app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: beta.kubernetes.io/os
                    operator: In
                    values:
                      - linux
                  - key: beta.kubernetes.io/arch
                    operator: In
                    values:
                      - ppc64le
      hostNetwork: true
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni
        image: quay.io/coreos/flannel:v0.11.0-ppc64le
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: quay.io/coreos/flannel:v0.11.0-ppc64le
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        resources:
          requests:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
          limits:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
        securityContext:
          privileged: false
          capabilities:
             add: [&quot;NET_ADMIN&quot;]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      volumes:
        - name: run
          hostPath:
            path: /run/flannel
        - name: cni
          hostPath:
            path: /etc/cni/net.d
        - name: flannel-cfg
          configMap:
            name: kube-flannel-cfg
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-ds-s390x
  namespace: kube-system
  labels:
    tier: node
    app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: beta.kubernetes.io/os
                    operator: In
                    values:
                      - linux
                  - key: beta.kubernetes.io/arch
                    operator: In
                    values:
                      - s390x
      hostNetwork: true
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni
        image: quay.io/coreos/flannel:v0.11.0-s390x
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: quay.io/coreos/flannel:v0.11.0-s390x
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        resources:
          requests:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
          limits:
            cpu: &quot;100m&quot;
            memory: &quot;50Mi&quot;
        securityContext:
          privileged: false
          capabilities:
             add: [&quot;NET_ADMIN&quot;]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      volumes:
        - name: run
          hostPath:
            path: /run/flannel
        - name: cni
          hostPath:
            path: /etc/cni/net.d
        - name: flannel-cfg
          configMap:
            name: kube-flannel-cfg
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3-\u90E8\u7F72nginx-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-\u90E8\u7F72nginx-\u6D4B\u8BD5" aria-hidden="true">#</a> 3. \u90E8\u7F72nginx \u6D4B\u8BD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl create deployment nginx --image<span class="token operator">=</span>nginx:1.14-alpine                   <span class="token comment">#\u90E8\u7F72nginx</span>

kubectl expose deployment nginx --port<span class="token operator">=</span><span class="token number">80</span> --type<span class="token operator">=</span>NodePort                   <span class="token comment">#\u66B4\u9732\u7AEF\u53E3</span>

<span class="token comment">#\u67E5\u770B\u670D\u52A1\u72B6\u6001\uFF08\u53EF\u5206\u522B\u67E5\u770Bpod\u548Cservice\uFF1Akubectl get pod\uFF0Ckubectl get svc\uFF09</span>
kubectl get pod,svc  <span class="token comment">#\u53EF\u901A\u8FC7\uFF1A192.168.16.12:port \u8BBF\u95EEnginx\u4E3B\u9875\uFF08port\u901A\u8FC7kubectl get svc\u67E5\u770B\u83B7\u53D6\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function G(B,z){const i=r("ExternalLinkIcon");return a(),d("div",null,[u,t,m,n("p",null,[o,n("a",b,[p,s(i)]),k,n("a",f,[h,s(i)]),g,n("a",y,[q,s(i)]),_,n("a",x,[P,s(i)])]),E,M,n("p",null,[N,n("a",A,[w,s(i)])]),D,S,I,n("p",null,[n("a",O,[C,s(i)])]),F,R,n("p",null,[n("a",U,[L,s(i)])]),n("p",null,[n("a",V,[T,s(i)]),K]),j])}var X=l(c,[["render",G],["__file","kubernetes.html.vue"]]);export{X as default};
