# IPTV Player

由于国行三星电视应用商店非常垃圾，没有IPTV的应用，老款电视也不能安装安卓应用，因此参考官方avPlayer写了一个iptv程序.

Due to the poor quality of the Samsung TV app store in China, which lacks IPTV applications, and the inability to install Android apps on older TVs, I wrote an IPTV program based on the official avPlayer.

## 如何安装 How to Install the IPTV application

【准备工作】安装需要电视开启开发者模式，在商店界面用遥控器输入12345，打开开发者模式，提示输入ip，把IP设为你电脑的ip，重启电视。
接下来用2中方法安装：
(推荐)1.利用Jellyfin4Tizen安装工具（下载地址：https://github.com/jellyfin/jellyfin-tizen），不要选择任何jellyfin，在选项中设置自己的安装包（IPTV.wgt），软件会自动搜索你电视的ip，然后安装就可以了。
2.下载Tizen Studio, 可以通过CLI版的命令行安装，也可以通过IDE版的调试模式安装。需要申请三星开发者账号，登录后才能安装，非常麻烦。具体过程可以参考：[https://github.com/jellyfin/jellyfin-tizen](https://www.bilibili.com/opus/733480835510960145)

[Preparation] For installation, you need to enable developer mode on the TV. Enter 12345 with the remote control in the store interface to open developer mode. It will prompt you to enter the IP address. Set the IP to the IP address of your computer, and then restart the TV.
Next, use the two methods mentioned to install:
(Recommended) 1. Use the Jellyfin4Tizen installation tool (download link: https://github.com/jellyfin/jellyfin-tizen). Do not select any jellyfin, and set your own installation package (IPTV.wgt) in the options. The software will automatically search for your TV's IP, and then the installation will proceed.

## 平台版本支持 Supported platforms

电视平台按照Tizen2.4开发，理论上2.4以上的都支持，基本上是2018年后的都支持。新款的都支持IPTV，也就不用了。
IPTV内置的m3u8列表仅浙江移动可用，如果需要替换，请手动更改channelData.js内的内容。

The TV platform is developed according to Tizen 2.4, theoretically supporting all versions above 2.4, and basically supporting all versions after 2018. The new models all support IPTV, so there's no need for it.
The built-in m3u8 list in IPTV is only available for Zhejiang Mobile. If replacement is needed, please manually change the content in channelData.exe.

## 手动更改m3u8准备工作 Prerequisites

将m3u文件打开，把内部的m3u8地址按照channelData.js内的内容格式调整。然后下载Tizen studio自己打包程序安装。

Open the m3u file and adjust the internal m3u8 address according to the content format in channelData.js. Then download Tizen Studio and install the self packaged program.

## 定制服务 Customize Service

如果你不会修改，也可以联系作者有偿修改。
If you don't know how to make changes, you can also contact the author for paid modifications.

Wechat:Kasim-zy
