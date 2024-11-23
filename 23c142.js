"use strict";(self.webpackChunk_pidoc_core=self.webpackChunk_pidoc_core||[]).push([[163],{3163:(s,a,n)=>{n.r(a),n.d(a,{default:()=>c});var t=n(4041),p=n(189),o={title:"Custom",description:"Information about providing a custom generator.",audience:"Everyone",level:"Beginner",section:"Generators"};const c=function(){return t.createElement(p.ContentPage,null,t.createElement(p.PageLayout,{name:"default",meta:o},t.createElement(p.PageContent,{meta:o},t.createElement(p.Markdown,{content:'\n<h1 id="custom-generators" tabindex="-1">Custom Generators</h1>\n<p>A custom generator transforms files according to your rules and logic. This can be used to teach pidoc about a new file type (e.g., transforming ASCIIDoc or similar).</p>\n<p>Let\'s say you have a folder structure like this:</p>\n<pre><code class="hljs language-plain">docs/\ndocs/foo/content.ascii\ndocs.config.json\n</code></pre>\n<p>A sitemap section in <em>docs.config.json</em> to cover this would be:</p>\n<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>\n  <span class="hljs-comment">// ...</span>\n  <span class="hljs-attr">&quot;sitemap&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n    <span class="hljs-attr">&quot;example&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n      <span class="hljs-attr">&quot;title&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Example&quot;</span><span class="hljs-punctuation">,</span>\n      <span class="hljs-attr">&quot;sections&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>\n        <span class="hljs-punctuation">{</span>\n          <span class="hljs-attr">&quot;generator&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;custom&quot;</span><span class="hljs-punctuation">,</span>\n          <span class="hljs-attr">&quot;path&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/path/to/custom/generator.js&quot;</span><span class="hljs-punctuation">,</span>\n          <span class="hljs-attr">&quot;segment&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&quot;</span><span class="hljs-punctuation">,</span>\n          <span class="hljs-attr">&quot;dir&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;foo&quot;</span>\n        <span class="hljs-punctuation">}</span>\n      <span class="hljs-punctuation">]</span>\n    <span class="hljs-punctuation">}</span>\n  <span class="hljs-punctuation">}</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n<p>This will look up the <em>.ascii</em> files in the <code>foo</code> directory below the <code>docs</code> documentation root directory.</p>\n<div class="box tip"><p class="box-title">Use packages</p>\n<p>Custom generators can also be deployed in npm packages. In this case you can reference them via their package name, e.g.:</p>\n<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>\n  <span class="hljs-comment">// ...</span>\n  <span class="hljs-attr">&quot;sitemap&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n    <span class="hljs-attr">&quot;example&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n      <span class="hljs-attr">&quot;title&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Example&quot;</span><span class="hljs-punctuation">,</span>\n      <span class="hljs-attr">&quot;sections&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>\n        <span class="hljs-punctuation">{</span>\n          <span class="hljs-attr">&quot;generator&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;custom&quot;</span><span class="hljs-punctuation">,</span>\n          <span class="hljs-attr">&quot;path&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;name-of-custom-generator-package&quot;</span><span class="hljs-punctuation">,</span>\n          <span class="hljs-attr">&quot;segment&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&quot;</span><span class="hljs-punctuation">,</span>\n          <span class="hljs-attr">&quot;dir&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;foo&quot;</span>\n        <span class="hljs-punctuation">}</span>\n      <span class="hljs-punctuation">]</span>\n    <span class="hljs-punctuation">}</span>\n  <span class="hljs-punctuation">}</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n<p>where <code>name-of-custom-generator-package</code> is the name of the package.</p>\n</div>\n',link:"https://github.com/smapiot/pidoc/tree/develop/packages/example-app/docs/generators/90-custom.md",editLabel:"Edit on GitHub"}))))}}}]);
//# sourceMappingURL=23c142.js.map