const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 开启代理服务器（方式一）
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }

  // 关闭语法检查
  // lintOnSave:false,

  // 开启代理服务器（方式二）
  devServer:{
    proxy:{
        //前缀，url中前缀为/atguigu的都会通过代理服务器转发到服务器中
        '/atguigu':{
            // 服务器地址
            target:'http://localhost:5000',
            // 重写路径，去掉url中的/atguigu
            pathRewrite:{'^/atguigu':''},
            // ws:true,// 用于支持websocket
            // changeOrigin:true //用于控制请求头中的host值
        },
        '/demo':{
            // 服务器地址
            target:'http://localhost:5001',
            // 重写路径，去掉url中的/demo
            pathRewrite:{'^/demo':''},
            // ws:true,// 用于支持websocket
            // changeOrigin:true //用于控制请求头中的host值
        }
    }
  }
})
