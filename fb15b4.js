"use strict";(self.webpackChunk_pidoc_core=self.webpackChunk_pidoc_core||[]).push([[466],{7466:(s,t,n)=>{n.r(t),n.d(t,{"default":()=>i});var a=n(2784),o=n(4302),e={title:"Configuration",description:"Details on the configuration.",audience:"Everyone",level:"Beginner",section:"Getting Started"};const i=function(){return a.createElement(o.ContentPage,null,a.createElement(o.PageLayout,{name:"default",meta:e},a.createElement(o.PageContent,{meta:e},a.createElement(o.Markdown,{content:'\n<h1 id="configuration">Configuration</h1>\n<p>The main piece for running <code>pidoc</code> is the <em>docs.config.json</em> file. It should be placed in your main directory, where you\'d run <code>piral-docs</code> (the command line utility for debugging and building the documentation).</p>\n<h2 id="example-configuration">Example Configuration</h2>\n<p>Below you\'ll find an example configuration.</p>\n<pre><code class="hljs language-json">{\n  <span class="hljs-attr">&quot;title&quot;</span>: <span class="hljs-string">&quot;Your title&quot;</span>,\n  <span class="hljs-attr">&quot;description&quot;</span>: <span class="hljs-string">&quot;Description for metadata.&quot;</span>,\n  <span class="hljs-attr">&quot;author&quot;</span>: <span class="hljs-string">&quot;Your name&quot;</span>,\n  <span class="hljs-attr">&quot;branch&quot;</span>: <span class="hljs-string">&quot;main&quot;</span>,\n  <span class="hljs-attr">&quot;repositoryUrl&quot;</span>: <span class="hljs-string">&quot;https://github.com/your-orga/your-repo&quot;</span>,\n  <span class="hljs-attr">&quot;docsDirName&quot;</span>: <span class="hljs-string">&quot;docs&quot;</span>,\n  <span class="hljs-attr">&quot;rootDir&quot;</span>: <span class="hljs-string">&quot;.&quot;</span>,\n  <span class="hljs-attr">&quot;outputDir&quot;</span>: <span class="hljs-string">&quot;./dist&quot;</span>,\n  <span class="hljs-attr">&quot;skipEditLabel&quot;</span>: <span class="hljs-literal">false</span>,\n  <span class="hljs-attr">&quot;sitemap&quot;</span>: {\n    <span class="hljs-attr">&quot;basics&quot;</span>: {\n      <span class="hljs-attr">&quot;title&quot;</span>: <span class="hljs-string">&quot;Basics&quot;</span>,\n      <span class="hljs-attr">&quot;sections&quot;</span>: [\n        {\n          <span class="hljs-attr">&quot;generator&quot;</span>: <span class="hljs-string">&quot;markdown&quot;</span>,\n          <span class="hljs-attr">&quot;segment&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,\n          <span class="hljs-attr">&quot;dir&quot;</span>: <span class="hljs-string">&quot;basics&quot;</span>\n        }\n      ]\n    }\n  }\n}\n</code></pre>\n<p>This configuration ends up with a single top-level section (called &quot;chapter&quot;) named &quot;basis&quot; (written on the page as &quot;Basics&quot;). It contains the content from a single section - everything in <code>docs/basics</code> will be consumed by the <code>markdown</code> generator. This is the most &quot;standard&quot; (or from a documentation-perspective &quot;expected&quot;) generator. It is capable of transforming Markdown files (<code>*.md</code>) to pages.</p>\n<p>More about generators can be found in the <a href="/basics/01-overview">generators section</a>.</p>\n<h2 id="configuration-typings">Configuration Typings</h2>\n<p>(tbd)</p>\n<h2 id="advanced-scenarios">Advanced Scenarios</h2>\n<p>(tbd)</p>\n',link:"https://github.com/smapiot/pidoc/tree/develop/packages/example-app/docs/basics/01-config.md",editLabel:"Edit on GitHub"}))))}}}]);
//# sourceMappingURL=fb15b4.js.map