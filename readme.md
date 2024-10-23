环境配置：
    VScode 插件
        Live Server
        vscode-icons

        Vue Snippets 作者：hollowtree
    Chrome插件
        Vue Devtools

快捷键：
    删除行：ctrl+shift+k
    打开终端：ctrl+shift+`

安装Vue脚手架(CLI)
    
    1、全局安装：npm install -g @vue/cli
    2、切换到你要创建项目的目录，然后使用命令创建项目
        vue create xxxx
    3、启动项目
        npm run serve
    
    备注：
        1、如果出现下载缓慢请配置npm淘宝镜像：npm config set registry http://registry.npm.taobao.org
        2、Vue脚手架隐藏了所有webpack相关的配置，若想查看具体的webpack配置，请执行：vue inspect > output.js

