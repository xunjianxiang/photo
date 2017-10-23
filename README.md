# 数盟照片墙

## 介绍

> 数盟照片墙是一个基于文件图片查看系统。

由于相机照片像素都比较大，浏览器渲染时会出现卡顿，暂且采用了预览缩略图，支持下载原图的方式。

## 依赖
### Node.js

#### Mac

(下载最新版本 pkg 安装包进行安装)[https://nodejs.org/dist/v6.11.4/node-v6.11.4.pkg]

#### Windows

(下载最新版本 exe 安装包进行安装)[https://nodejs.org/dist/v6.11.4/node-v6.11.4-x64.msi]

#### Linux

##### Ubuntu

```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

##### CentOS
```
$ curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
$ sudo yum -y install nodejs
```

####

### GraphicsMagick

> 图片处理依赖 graphicsmagick，请在系统初始化前确保 graphicsmagick 已经安装。

#### Mac

```
$ brew install graphicsmagick
```

#### Windows

(下载最新版本 exe 文件进行安装)[ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/]


#### Linux

##### Ubuntu

`$ sudo apt-get install graphicsmagick`


##### CentOS 7
###### 安装相关依赖

```
$ sudo yum install -y gcc libpng libjpeg libpng-devel libjpeg-devel ghostscript libtiff libtiff-devel freetype freetype-devel
```


###### 下载并解压到目录

```
$ wget https://jaist.dl.sourceforge.net/project/graphicsmagick/graphicsmagick/1.3.26/GraphicsMagick-1.3.26.tar.xz
$ tar -xvf GraphicsMagick-1.3.26.tar.gz -C /usr/local/
```

###### 编译并安装

```
$ cd /usr/local/GraphicsMagick-1.3.26
$ ./configure --prefix=/usr/local/GraphicsMagick-1.3.26 --enable-shared
$ sudo make
$ sudo make install
```

###### 添加环境变量

编辑 `~/.bash_profile`, 添加如下代码：
```
export GM_HOME=/usr/local/GraphicsMagick-1.3.26
export PATH=$PATH:$GM_HOME/bin
```

加载环境变量：

```
$ source ~/.bash_profile
```

###### 验证
```
$ gm version
```

## 快速开始

### 获取源代码

```
$ git clone https://github.com/xunjianxiang/photo.git
```

### 修改配置文件

编辑 server/config.js 中 root 字段为目标路径

### 安装依赖

```
$ npm install --production
```

### 图片预处理

> 为图片生成缩略图

* 在安装依赖完成后悔对图片进行一次预处理
* 手动执行`$ npm run install`会对图进行一次预处理
* 访问过程中，会检测图片缩略图，如果不存在，则会为当前图片生成缩略图

### 开启服务

```
$ npm run start
```
