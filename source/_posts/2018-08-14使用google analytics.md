---
title: 使用google analytics
tags:
  - 前端周边
categories:
  - 前端周边
comments: true
date: 2018-08-14 13:20:17
updated:
---
*前提：需要能科学上网*

注册
https://marketingplatform.google.com/about/analytics/
点击 start for free

![点击 start for free](/clipboard.png '点击 start for free')

点击注册
![](/clipboard2.png '点击注册')

填写你要进行分析的网站
![](/clipboard3.png '根据需求填写')

选择跟踪代码
![](/clipboard4.png '选择跟踪代码')

复制跟踪ID
![](/clipboard5.png '复制跟踪ID')

接下来就是根据你的网站的情况，结合api使用说明来使用google analytics。

如果跟我一样是github博客，并且使用了hexo框架，并且安装的主题支持analytics(大部分都支持)的话，接下来的操作应该是这样的：
找到你的项目下的thems文件夹下主题文件夹里的_config.yml文件

![](/clipboard6.png '复制跟踪ID')

找到里面analytics的配置，把google analytics的跟踪ID填到对应的位置。
![](/clipboard7.png '复制跟踪ID')

最后，别忘了hexo clean && hexo g -d 推送到博客网站上。
然后，你就可以看到用户数据了。

![](/clipboard8.png '复制跟踪ID')







