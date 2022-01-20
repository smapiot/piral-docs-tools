"use strict";(self.webpackChunk_pidoc_core=self.webpackChunk_pidoc_core||[]).push([[842],{2842:(e,s,n)=>{n.r(s),n.d(s,{"default":()=>i});var t=n(2784),l=n(4302),o='\n<h1 id="markdown-features">Markdown Features</h1>\n<p>To support your documentation in all possible ways the Markdown converter is quite feature rich.</p>\n<h2 id="basic-features">Basic Features</h2>\n<p>The basic features that you know are all in. For instance, unsorted lists:</p>\n<ul>\n<li>Just some bullet point</li>\n<li>Another bullet point</li>\n</ul>\n<pre><code class="hljs language-md"><span class="hljs-bullet">-</span> Just some bullet point\n<span class="hljs-bullet">-</span> Another bullet point\n</code></pre>\n<p>Also sorted lists are included:</p>\n<ol>\n<li>First</li>\n<li>Second</li>\n<li>Third</li>\n</ol>\n<pre><code class="hljs language-md"><span class="hljs-bullet">1.</span> First\n<span class="hljs-bullet">2.</span> Second\n<span class="hljs-bullet">3.</span> Third\n</code></pre>\n<p>Writing something in <strong>bold</strong> or <em>italic</em> is possible, too.</p>\n<pre><code class="hljs language-md">Writing something in <span class="hljs-strong">**bold**</span> or <span class="hljs-emphasis">*italic*</span> is possible, too.\n</code></pre>\n<p>If you want to make something &quot;sub&quot;-par you use <code>~</code> to enclose the text, likewise if you want to make it stand out (&quot;super&quot;) you\'d use <code>^</code> to enclose the text.</p>\n<ul>\n<li>H<sub>2</sub>0</li>\n<li>29<sup>th</sup></li>\n</ul>\n<pre><code class="hljs language-md"><span class="hljs-bullet">-</span> H~2~0\n<span class="hljs-bullet">-</span> 29^th^\n</code></pre>\n<p>You should have only one (1) top-level heading (&quot;h1&quot;, <code>#</code>) and multiple (n) second-level headings (&quot;h2&quot;, or <code>##</code> in Markdown).</p>\n<pre><code class="hljs language-md"><span class="hljs-section"># Markdown Features</span>\n\nTo support your documentation in all possible ways the Markdown converter is quite feature rich.\n\n<span class="hljs-section">## Basic Features</span>\n</code></pre>\n<p>Code blocks are also supported. Just have three ticks and there you go.</p>\n<pre><code class="hljs language-md"><span class="hljs-code">```js\nconsole.log(&#x27;Hello, World!&#x27;);\n```</span>\n</code></pre>\n<p>Note that a language can be given after the three ticks. For syntax highlighting the Highlight.js package is used. The code above would display like:</p>\n<pre><code class="hljs language-js"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;Hello, World!&#x27;</span>);\n</code></pre>\n<p>Tables are possible, too:</p>\n<div class="responsive-table"><table>\n<thead>\n<tr>\n<th>First</th>\n<th>Second</th>\n<th>Third</th>\n<th>Fourth</th>\n<th>Fifth</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n<td>4</td>\n<td>5</td>\n</tr>\n<tr>\n<td>6</td>\n<td>7</td>\n<td>8</td>\n<td>9</td>\n<td>10</td>\n</tr>\n<tr>\n<td>11</td>\n<td>12</td>\n<td>13</td>\n<td>14</td>\n<td>15</td>\n</tr>\n</tbody>\n</table></div>\n<p>The code for this table is shown below:</p>\n<pre><code class="hljs language-md">| First | Second | Third | Fourth | Fifth |\n|-------|--------|-------|--------|-------|\n| 1     | 2      | 3     | 4      | 5     |\n| 6     | 7      | 8     | 9      | 10    |\n| 11    | 12     | 13    | 14     | 15    |\n</code></pre>\n<p>Finally, you can put images to work with them automatically being bundled correctly.</p>\n<p><img src="'+n(4810)+'" alt="Some image description"></p>\n<p>Here\'s the code (note the relative file path):</p>\n<pre><code class="hljs language-md">![<span class="hljs-string">Some image description</span>](<span class="hljs-link">../assets/sample.png</span>)\n</code></pre>\n<h2 id="advanced-features">Advanced Features</h2>\n<p>Emojis are also support ⚡! This can boost your productivity 🚀.</p>\n<pre><code class="hljs language-md">Emojis are also support :zap:! This can boost your productivity :rocket:.\n</code></pre>\n<p>If you need foot notes then you got them<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p>\n<pre><code class="hljs language-md">If you need foot notes then you got them[^1].\n\n[<span class="hljs-symbol">^1</span>]: <span class="hljs-link">This is a foot note.</span>\n</code></pre>\n<p>Similarly, abbreviations may come in handy. Let\'s see an example:</p>\n<p>The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.</p>\n<p>The code for this snippet reads:</p>\n<pre><code class="hljs language-md"><span class="hljs-emphasis">*[HTML]: Hyper Text Markup Language\n*</span>[W3C]:  World Wide Web Consortium\n\nThe HTML specification is maintained by the W3C.\n</code></pre>\n<p>Another thing to make use is smart arrows. If you want to point out things you may use → arrows. Any any case ← they should look good, right?</p>\n<pre><code class="hljs language-md">... use --&gt; arrows. Any any case &lt;-- ...\n</code></pre>\n<p>We have six of them:</p>\n<ul>\n<li><code>--&gt;</code>: →</li>\n<li><code>&lt;--</code>: ←</li>\n<li><code>&lt;--&gt;</code>: ↔</li>\n<li><code>==&gt;</code>: ⇒</li>\n<li><code>&lt;==</code>: ⇐</li>\n<li><code>&lt;==&gt;</code>: ⇔</li>\n</ul>\n<p>Sometimes, a simple list is not enough. It should be a todo-style list:</p>\n<ul class="task-list">\n<li class="task-list-item"><input type="checkbox" id="cbx_0" disabled="true"><label for="cbx_0"> Apples</label></li>\n<li class="task-list-item"><input type="checkbox" id="cbx_1" checked="true" disabled="true"><label for="cbx_1"> Bananas</label></li>\n<li class="task-list-item"><input type="checkbox" id="cbx_2" disabled="true"><label for="cbx_2"> Cucumbers</label></li>\n</ul>\n<pre><code class="hljs language-md"><span class="hljs-bullet">-</span> [ ] Apples\n<span class="hljs-bullet">-</span> [x] Bananas\n<span class="hljs-bullet">-</span> [ ] Cucumbers\n</code></pre>\n<p>If you want to display a video then you\'ll find the video integration useful.</p>\n<p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item youtube-player" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></p>\n<p>Don\'t get Rick-rolled. Here\'s the code:</p>\n<pre><code class="hljs language-md">@[<span class="hljs-string">youtube</span>](<span class="hljs-link">dQw4w9WgXcQ</span>)\n</code></pre>\n<p>There are a couple of qualifiers:</p>\n<ul>\n<li><code>youtube</code></li>\n<li><code>vimeo</code></li>\n<li><code>vine</code></li>\n<li><code>osf</code></li>\n<li><code>prezi</code></li>\n</ul>\n<p>You can also include some content. Below is some text:</p>\n<p>This is some text. Nothing more.</p>\n<p>This text was inserted from some other file. The code for the line above was:</p>\n<pre><code class="hljs language-md"><span class="hljs-section">#include ../assets/foo.txt</span>\n</code></pre>\n<hr class="footnotes-sep">\n<section class="footnotes">\n<ol class="footnotes-list">\n<li id="fn1" class="footnote-item"><p>This is a foot note. <a href="#fnref1" class="footnote-backref">↩︎</a></p>\n</li>\n</ol>\n</section>\n',a={title:"Features",description:"Available features of the markdown processing.",audience:"Everyone",level:"Beginner",section:"Markdown"};const i=function(){return t.createElement(l.ContentPage,null,t.createElement(l.PageLayout,{name:"default",meta:a},t.createElement(l.PageContent,{meta:a},t.createElement(l.Markdown,{content:o,link:"https://github.com/smapiot/pidoc/tree/develop/packages/example-app/docs/basics/03-markdown.md",editLabel:"Edit on GitHub"}))))}},4810:(e,s,n)=>{e.exports=n.p+"0c1528806a4d5585ceb8.png"}}]);
//# sourceMappingURL=b56510.js.map