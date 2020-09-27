(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(t,s,n){"use strict";n.r(s);var a=n(20),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),n("h3",{attrs:{id:"环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[t._v("#")]),t._v(" 环境:")]),t._v(" "),n("ul",[n("li",[t._v("Node.js")]),t._v(" "),n("li",[t._v("webpack")]),t._v(" "),n("li",[t._v("Npm")])]),t._v(" "),n("h3",{attrs:{id:"build"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/CodFrm/cxmooc-tools.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" cxmooc-tools\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发模式请使用")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包生成crx和油猴脚本")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run tampermonkey\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请注意,打包crx需要拥有一个pem密钥")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run pack\n")])])]),n("h3",{attrs:{id:"构建之后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建之后"}},[t._v("#")]),t._v(" 构建之后")]),t._v(" "),n("blockquote",[n("p",[t._v("能够体验到最新的功能,需要按照"),n("a",{attrs:{href:"#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"}},[t._v("准备工作")]),t._v("的方法步骤配置本地环境,可能会存在一些BUG。")])]),t._v(" "),n("ol",[n("li",[t._v("执行"),n("code",[t._v("npm run build")]),t._v(",此时会在"),n("code",[t._v("build/cxmooc-tools")]),t._v("目录下生成插件文件。")]),t._v(" "),n("li",[t._v("打开Chrome浏览器的更多工具选项，打开扩展程序页面并启用开发者模式。")]),t._v(" "),n("li",[t._v("加载已解压的扩展程序，路径选择"),n("code",[t._v("build/cxmooc-tools")])])]),t._v(" "),n("h3",{attrs:{id:"项目结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("|cxmooc-tools\n├─tests               # 单元测试\n|   ├─hook.test.ts\n|   ├─utils.test.ts\n|   ├─extension\n├─src                 # 插件源码\n|  ├─background.ts\n|  ├─config.ts\n|  ├─mooc.ts\n|  ├─popup.ts\n|  ├─start.ts\n|  ├─views            # 视图文件\n|  ├─tampermonkey     # 油猴打包文件\n|  ├─mooc             # 平台源码\n|  ├─internal         # 内部软件包\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);