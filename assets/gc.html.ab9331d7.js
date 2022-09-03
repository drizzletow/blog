const e=JSON.parse('{"key":"v-8746e28a","path":"/Java/jvm/gc.html","title":"Jvm\u5783\u573E\u56DE\u6536","lang":"zh-CN","frontmatter":{"summary":"Jvm\u5783\u573E\u56DE\u6536 \u4E00 \u5783\u573E\u6536\u96C6\u6982\u8FF0 \u5783\u573E\u6536\u96C6\uFF08Garbage Collection\uFF0C\u4E0B\u6587\u7B80\u79F0GC\uFF09\u9700\u8981\u5B8C\u6210\u7684\u4E09\u4EF6\u4E8B\u60C5\uFF1A\\r\u54EA\u4E9B\u5185\u5B58\u9700\u8981\u56DE\u6536\uFF1F \u5806\u548C\u65B9\u6CD5\u533A; \\r\u4EC0\u4E48\u65F6\u5019\u56DE\u6536\uFF1F ; \\r\u5982\u4F55\u56DE\u6536\uFF1F ; 1. \u751F\u5B58\u8FD8\u662F\u6B7B\u4EA1 \u5728\u5806\u91CC\u9762\u5B58\u653E\u7740Java\u4E16\u754C\u4E2D\u51E0\u4E4E\u6240\u6709\u7684\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u5783\u573E\u6536\u96C6\u5668\u5728\u5BF9\u5806\u8FDB\u884C\u56DE\u6536\u524D\uFF0C\u7B2C\u4E00\u4EF6\u4E8B\u60C5\u5C31\u662F\u8981\u786E\u5B9A\u8FD9\u4E9B\u5BF9\u8C61\u4E4B\u4E2D\u54EA\u4E9B\u8FD8\u201C\u5B58\u6D3B\u201D\u7740\uFF0C\u54EA\u4E9B\u5DF2\u7ECF\u201C\u6B7B\u53BB\u201D\uFF08\u201C\u6B7B","head":[["meta",{"property":"og:url","content":"https://www.itdrizzle.cn/Java/jvm/gc.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Jvm\u5783\u573E\u56DE\u6536"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.itdrizzle.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Jvm\u5783\u573E\u56DE\u6536"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00 \u5783\u573E\u6536\u96C6\u6982\u8FF0","slug":"\u4E00-\u5783\u573E\u6536\u96C6\u6982\u8FF0","children":[{"level":3,"title":"1. \u751F\u5B58\u8FD8\u662F\u6B7B\u4EA1","slug":"_1-\u751F\u5B58\u8FD8\u662F\u6B7B\u4EA1","children":[]},{"level":3,"title":"2. \u5F15\u7528\u7684\u5206\u7C7B","slug":"_2-\u5F15\u7528\u7684\u5206\u7C7B","children":[]},{"level":3,"title":"3. \u56DE\u6536\u65B9\u6CD5\u533A","slug":"_3-\u56DE\u6536\u65B9\u6CD5\u533A","children":[]}]},{"level":2,"title":"\u4E8C \u5783\u573E\u6536\u96C6\u7B97\u6CD5","slug":"\u4E8C-\u5783\u573E\u6536\u96C6\u7B97\u6CD5","children":[{"level":3,"title":"1. \u5206\u4EE3\u6536\u96C6\u7406\u8BBA","slug":"_1-\u5206\u4EE3\u6536\u96C6\u7406\u8BBA","children":[]},{"level":3,"title":"2. \u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5","slug":"_2-\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5","children":[]},{"level":3,"title":"3. \u6807\u8BB0-\u590D\u5236\u7B97\u6CD5","slug":"_3-\u6807\u8BB0-\u590D\u5236\u7B97\u6CD5","children":[]},{"level":3,"title":"4. \u6807\u8BB0-\u6574\u7406\u7B97\u6CD5","slug":"_4-\u6807\u8BB0-\u6574\u7406\u7B97\u6CD5","children":[]}]},{"level":2,"title":"\u4E09 Hotspot\u7B97\u6CD5\u7EC6\u8282","slug":"\u4E09-hotspot\u7B97\u6CD5\u7EC6\u8282","children":[{"level":3,"title":"1. \u6839\u8282\u70B9\u679A\u4E3E","slug":"_1-\u6839\u8282\u70B9\u679A\u4E3E","children":[]}]}],"git":{},"readingTime":{"minutes":22.19,"words":6656},"filePathRelative":"Java/jvm/gc.md"}');export{e as data};
