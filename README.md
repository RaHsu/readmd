# readmd

一个依赖于浏览器的markdown阅读器。

### 介绍
readmd是一个依赖于浏览器的markdown阅读器，它将markdown文件转换为html文件并使用浏览器对其进行阅读。

### 安装
请全局安装这个应用，这样你可以在任何目录快捷的使用readmd阅读markdown文件的。
```
$ npm install -g readmd
```

### 如何使用
在全局安装readmd以后，你可以在任意目录运行readmd：
```
$ readmd
```
这个命令将会找出当前目录的所有markdown文件，并在命令行显示出来，你可以通过键盘方向键选择你要阅读的文件。
```
$ readmd
? 你想阅读哪个markdown文件？
> 1.md
> 2.md
> 3.md
```

选择好阅读的文件之后，readmd会在当前目录生成1个HTML文件（该文件会在10秒钟之后删除），并使用chrome浏览器打开该文件（为了最好的应用体验，强烈建议你安装chrome浏览器）。

### 其他
作为一个markdown重度依赖症患者，几乎我所有的文档都是用markdown写成的，我时常需要阅读它们，但是在网络上并没有找到markdown的阅读器（都是markdown编辑器，有的附带阅读功能，但我只想要纯粹的阅读功能），于是就写了这个应用，应该有不少人和我一样有相同的困扰吧。
