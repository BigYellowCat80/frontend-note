#### 回到顶部

```js
// 瞬间回到顶部
button.onclick = function(){
  document.documentElement.scrollTop = document.body.scrollTop = 0; // 已兼容
}
```



```js
// 平滑回到顶部 缺点：IE不支持、safari电脑或ios都不支持
button.onclick = function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
```



#### 底部加载更多事件触发

```js
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let bottomHeight = document.body.scrollHeight - scrollTop - document.documentElement.clientHeight;
  if (bottomHeight < 100) { console.log("load more"); }
}
```



#### 文档碎片的使用

```js
const fragment = document.createDocumentFragment();
for (var i = 0; i < 10000; i++) {
  fragment.appendChild(document.createElement('div'));
}
document.body.appendChild(fragment);
```



#### 关闭窗口前让用户确认

```js
window.onbeforeunload = () => '';
```





#### [省市案例](./demos/省市案例.html)

#### [卡号输入控件](./demos/卡号输入控件.html)

#### [全选](./demos/全选.html)

#### [权限选择管理](./demos/权限选择管理.html)

#### [放大镜](./demos/放大镜/放大镜.html)





#### 获取DOM元素

- getElementById  document上的方法
- getElementsByName  document上的方法  返回Nodelist
- querySelector  document和element上都有这个方法 IE9或以上支持
- querySelectorAll  document和element上都有这个方法 返回Nodelist
- getElementsByTagName  document和element上都有这个方法 返回HTMLCollection
- getElementsByClassName  document和element上都有这个方法 返回HTMLCollection



#### Node接口

##### 属性

```html
<div id="box">
  hello world
</div>

nodeType: 1
nodeName: DIV
textContent:

    hello world
 
```

```js
parentNode  返回父元素DOM，没有返回null
parentElement  跟parentNode差不多，也是获取父元素DOM，有一点小差异，但是一般可以通用

其他的firstChild，lastChild，previousSibling，nextSibling用的真不多，因为包含了文本节点等等，建议直接使用Element上的API
```

##### 方法

```js
// 增
appendChild
insertBefore
cloneNode

// 删
removeChild

// 改
replaceChild

// 查
contains // 返回布尔值
hasChildNodes // 返回布尔值
```

- [cloneNode方法](./demos/cloneNode方法.html)

```html
<div id="parent">
  <div class="child" style="background: #f44;"></div>
  <div class="child" style="background: #4f4;"></div>
  <div class="child" style="background: #44f;"></div>
  <div class="child" style="background: #ff4;"></div>
</div>

const parent = document.getElementById('parent');
const result = parent.cloneNode();

// 默认只拷贝第一层即parent，样式拷贝，事件不拷贝
<div id="parent"></div>

// deep为true时，子元素层层拷贝，样式拷贝，事件不拷贝
<div id="parent">...</div>
```



#### Element接口

##### 属性

```js
Element.attributes
Element.childElementCount 子元素个数
Element.classList 返回class值的数组
Element.className 返回class值的字符串
Element.id
Element.tagName
Element.innerHTML
Element.outerHTML 自身及后代


布局类
Element.clientHeight 元素高度 包括padding不包括border
Element.clientWidth 不包括滚动条的宽度(17)
Element.clientTop border-top宽度
Element.clientLeft border-left宽度
Element.scrollHeight 如果有滚动条的话 就是展开来总高度 如果没有滚动条 跟clientHeight一样
Element.scrollWidth
Element.scrollTop 有滚动条后 滚动到上面遮住的高度
Element.scrollLeft


节点关系
Element.children
Element.firstElementChild
Element.lastElementChild
Element.previousElementSibling
Element.nextElementSibling
```



##### 方法

```js
获取节点 有加Element的才是Element的方法
Element.getElementsByTagName() // 返回NodeList
Element.getElementsByClassName() // 返回NodeList
Element.querySelector()
Element.querySelectorAll()

Attribute相关
Element.hasAttribute(attr)
Element.getAttribute(attr)
Element.setAttribute(attr,value)
Element.removeAttribute(attr)
Element.getAttributeNames() 返回一个数组 每一项是数组的属性
  // Element.getAttributeNames()
  console.log(list.getAttributeNames()); // (3) ["id", "class", "bigcat"]
Element.toggleAttribute(attr)


增
Element.append(child) 跟Node节点里的Node.appendChild(child)一样 IE不兼容
Element.prepend() 从最前面加入
Element.after(Node/String)
Element.before(Node/String)

删
Element.remove()

改
Element.replaceChild(newnode, oldnode) 拿新的取取代旧的 新的本身的位置也没有了
Oldnode.replaceWith(newnode) 用括号里的去换掉括号外的

查
还是可以用Node接口的方法
```



#### HTMLElement接口

##### 属性

```js
HTMLElement.innerText IE8 谷歌 火狐都支持

offset类
HTMLElement.offsetHeight padding和border都算
HTMLElement.offsetWidth
HTMLElement.offsetTop 相对于offsetParent
HTMLElement.offsetLeft 相对于offsetParent
HTMLElement.offsetParent
```

##### innerText和textContent

用innerText多，不包含换行，没有兼容问题

textContent不兼容IE6-8



#### 事件对象event

##### 属性

```js
e.altKey
e.ctrlKey
e.shiftKey
e.button
e.keyCode
e.clientX
e.clientY
e.screenX
e.screenY
e.bubbles
e.currentTarget
e.target
e.srcElement
e.eventPhase 1none | 2捕获阶段 | 3处于目标阶段 | 4冒泡阶段
e.type
e.cancelBubble
e.returnValue
```



##### 方法

```js
e.initEvent() 跟EventTarget的dispatchEvent()联系
e.stopPropagation()
e.preventDefault()
```





#### 各种兼容

- e.which

```js
const keyCode = e.which || e.keyCode || e.charCode
```

- 数字文本框

```js
const keyCode = e.which || e.keyCode || e.charCode;
if ((keyCode < 48 || (keyCode > 57 && keyCode < 96) || keyCode > 105)
    && keyCode != 8 && keyCode != 37 && keyCode != 39 && keyCode != 110 && keyCode != 190) {
  return false;
}
```

- 鼠标左中右键

```js
function getButton(e) {
  if (e) { return e.button }
  switch (event.button) {
    case 1: return 0;
    case 4: return 1;
    case 2: return 2;
  }
}
```

- addEventListener

```js
function addEventListener(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, fn);
  } else {
    element["on" + type] = fn;
  }
}

function removeEventListener(element, type, fn) {
  if (element.addEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.detachEvent("on" + type, fn);
  } else {
    element["on" + type] = null;
  }
}
```

- document.loaded(callback)

```js
(function (doc) {
  doc.loaded = function (callback) {
    if (doc.addEventListener) {
      doc.addEventListener("DOMContentLoaded", callback);
    } else if (doc.attachEvent) {
      doc.attachEvent("onreadystatechange", function () {
        if (doc.readyState == "complete") {
          callback();
        }
      });
    } else {
      window.onload = callback;
    }
  };
})(document);
```

