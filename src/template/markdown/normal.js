export default
`/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
.layout {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
p {
}

/* 一级标题 */
h1 {
}

/* 一级标题内容 */
h1 span {
}

/* 一级标题修饰 请参考有实例的主题 */
h1:after {
}

/* 二级标题 */
h2 {
  text-align: center;
}

/* 二级标题内容 */
h2 span {
  color: rgb(68, 153, 231);
  font-size: 20px;
}

/* 二级标题修饰 请参考有实例的主题 */
h2:after {
  content: ' /';
  color: rgb(68, 153, 231);
  font-size: 20px;
}

h2:before {
  content: '/ ';
  color: rgb(68, 153, 231);
  font-size: 20px;
}

/* 三级标题 */
h3 {
  border-left: 5px solid rgb(68, 153, 231);
  font-weight: bold;
  line-height: 16px;
  color: rgb(68, 153, 231);
  padding-right: 10px;
  padding-left: 10px;
  margin: 5px; 
  border-top-color: rgb(68, 153, 231); 
  border-bottom-color: rgb(68, 153, 231); 
  border-right-color: rgb(68, 153, 231);
}

/* 三级标题内容 */
h3 span {
  font-size: 16px;
}

/* 三级标题修饰 请参考有实例的主题 */
h3:after {
}

/* 列表内容 */
li {
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
blockquote {
  font-style: normal;
  padding: 10px;
  position: relative;
  line-height: 1.8;
  text-indent: 0;
  border: none;
  color: #888;
}

blockquote:before {
  content: "“";
  display: inline;
  color: #555555;
  font-size: 4em;
  font-family: Arial, serif;
  line-height: 1em;
  font-weight: 700;
}

/* 引用文字 */
blockquote p {
  font-family: "Biaodian Pro Serif GB","Numeral LF Serif",Georgia,"Times New Roman","Han Kaiti GB",cursive,serif
}

/* 链接 */
a {
  color: rgb(68, 153, 231);
}

/* 加粗 */
strong {
}

/* 斜体 */
em {
}

/* 加粗斜体 */
strong em {
}

/* 删除线 */
del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
img {
}

/* 图片描述文字 */
figcaption {
}

/* 行内代码 */
p code, li code {
  color: rgb(68, 153, 231);
  font-weight: 600;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
pre code {
}

/* 脚注文字 */
.footnote-word {
  color: rgb(68, 153, 231);
}

/* 脚注上标 */
.footnote-ref {
  color: rgb(68, 153, 231);
}`
