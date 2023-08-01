---
title: 使用hexo创建github博客
tags:
  - github
  - markdown
  - 博客
categories:
  - 前端周边
comments: true
date: 2018-08-13 15:10:45
updated: 2018-08-13 15:10:45
---

1：要先拥有一个https://username.github.io 空间, 这个很简单，请自行百度。

---
2：安装node，yarn(不必须，用npm 也可以)

---
3：安装 **hexo-cli**   `yarn global add hexo-cli`
      安装一些插件
```
yarn add hexo-server hexo-deployer-git hexo-generator-archive hexo-generator-category hexo-generator-index hexo-generator-json-content@2.2.0 hexo-generator-tag
yarn add hexo-renderer-ejs hexo-renderer-less hexo-renderer-jade hexo-renderer-maked hexo-renderer-stylus
```
---
4：创建项目
`hexo init <项目名称> `新建一个网站
`cd <项目名称>`
`yarn install`

---
5，网站的配置文件 **_config.yml**
详细参数参见https://hexo.io/zh-cn/docs/configuration

---
6，上传配置
在 **_config.yml** 中修改参数，一个正确的部署配置中至少要有 type 参数

同时使用多个 deployer，Hexo 会依照顺序执行每个 deployer，repo即上传地址
```
deploy:
  -type: git
   repo: https://github.com/username/username.github.io.git
   branch: master
  -type: heroku
   repo:
   branch:
```
---
7，主题配置
从 https://hexo.io/themes/ 下载主题；
根据主题的说明进行安装。
主题文件夹要放在themes文件夹下，跟landscape并列
**_config.yml**的theme字段要改为自定义主题的文件夹名称

---
8，评论
有很多种类型，这里只介绍valine评论的设置

valine评论     配置文档 https://valine.js.org/configuration.html

valine是基于leancloud的。
在https://leancloud.cn 注册并登录，创建应用。在leancloud的设置-应用key，复制appid和appkey，填到valine的设置里。设置-安全中心-web安全域名填写自己的域名，否则评论组件会显示403权限问题。
valine使用gravatar头像系统 https://en.gravatar.com 。在基于valine的评论中，你选用的邮箱会自动去匹配在gravatar中设置的头像。

```
valine:
   enable: true
   appId: mgCAdSHToEJRc2FoFbWnWl3h-gzGzoHsz
   appKey: 2u5UYgTFA3DjKyruRKb6X9FH
   placeholder: 说点什么吧
   notify: false   邮箱通知
   verify: false   验证码
   avatar: robohash   系统头像之一，有自定义头像会替换这个默认头像
   meta: nick,mail,link   评论框顶部显示"昵称\邮箱\网址"
   pageSize: 15
   visitor: true 访问量统计
```
---
9：命令 
创建文章：
`hexo new [layout] <title>`  使用指定的布局新建一篇文章，layout布局，title文章名称。layout指向 /scaffolds目录下的布局文件的文件名,即post.md,draft.md,page.md,以及自定义的布局。
如果没有设置 layout 的话，默认使用 _config.yml 中的 default_layout 参数代替。如果标题包含空格的话，请使用引号括起来。
使用post布局生成的文件会出现在source/_posts中，使用draft布局生成的文件会出现在source/_draft中，使用page布局及自定义布局生成的文件，都直接出现在source文件夹中。

`hexo publish post 草稿文件名` 将草稿文件从source/_drafts移动到source/_posts

`hexo generate` 生成静态文件 可以简写为hexo g。参数： -d, --deploy 文件生成后立即部署网站     -w, --watch 监视文件变动。

`hexo publish [layout] <filename>`   发表草稿

`hexo server`   启动服务器，默认4000端口。参数：-p, --port重设端口。-s, --static只使用静态文件。-l, --log启动日记记录，使用覆盖记录格式

`hexo deploy`   部署网站。参数：-g, --generate，部署之前要先生成静态文件。简写hexo d。上传的位置是config.yml中的deploy下面的repo字段的地址

`hexo render <file1> [file2]` ... 渲染文件。参数：  -o, --output设置输出路径。

`hexo clean`   清除缓存文件 (db.json) 和已生成的静态文件 (public)。在某些情况（尤其是更换主题后），您可能需要运行该命令。

`hexo list <type>` 列出网站资料。

`hexo version` 显示 Hexo 版本。

`hexo --draft`  显示 source/_drafts 文件夹中的草稿文章


**总结一下，最常用的命令是：**
`hexo server`  启动服务器
`hexo clean && hexo g -w` 清除缓存，生成静态文件，监听文件变化
`hexo new [layout] <title>`  使用指定的布局新建一篇文章
`hexo d` 上传部署到网站上

由于生成的文章是markdown语法的.md文件，所以编辑文章的话，需要对markdown语法有一定了解。markdown语法使用的简单教程,请看下一篇文章。