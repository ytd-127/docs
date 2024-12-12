import{u as p,c as h,a0 as o,j as a,t as n,k as i,a as e,o as d}from"./chunks/framework.BGabeMLJ.js";const u=JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}'),k={name:"api-examples.md"},f=Object.assign(k,{setup(m){const{site:g,theme:t,page:l,frontmatter:r}=p();return(b,s)=>(d(),h("div",null,[s[0]||(s[0]=o(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;script setup&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Results</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Theme Data</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Page Data</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Page Frontmatter</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>`,6)),a("pre",null,n(i(t)),1),s[1]||(s[1]=a("h3",{id:"page-data",tabindex:"-1"},[e("Page Data "),a("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1)),a("pre",null,n(i(l)),1),s[2]||(s[2]=a("h3",{id:"page-frontmatter",tabindex:"-1"},[e("Page Frontmatter "),a("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1)),a("pre",null,n(i(r)),1),s[3]||(s[3]=a("h2",{id:"more",tabindex:"-1"},[e("More "),a("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1)),s[4]||(s[4]=a("p",null,[e("Check out the documentation for the "),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),e(".")],-1))]))}});export{u as __pageData,f as default};
