
const path = require("path")

function resolve(pathname){
    return path.resolve(__dirname,pathname)
}

module.exports = {
    configureWebpack: config => {
        // console.log(config)
        config.resolve.alias = {
            ...config.resolve.alias,
            home:resolve('./src/views/home'),
            common: resolve('./src/components/common'),
            assets:resolve('./src/assets'),
            utils:resolve('./src/utils')
        }
    },
    //反向代理
    devServer:{
        proxy:{
            '/api':{
                target:'https://webservice.juanpi.com',
                changeOrigin: true
            }
        }
    }
}