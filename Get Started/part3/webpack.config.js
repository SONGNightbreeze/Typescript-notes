// webpack就可以使用，还要对ts进行编译，还要一个文件对ts的编译规范， tsconfig.json
// 在package.json 中的 "scripts":{ "build": "webpack",} 表示通过bulid命令执行webpack
// 引入一个包
const path = require('path');  // node的一个模块   帮助拼接路径

// 对自动创建的html插件进行配置 
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');  // 引入到plugins对插件进行生效

// 引入clean插件   在plugins 的数组里面引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),   //  "./dist/..."  或者用path.resolve()完成的拼出来路径
        // 打包后文件的文件名
        filename: "bundle.js",

        // 告诉webpack不使用箭头  因为在ie中没有箭头函数，为了兼容ie
        environment:{
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,  // 以ts结尾的文件
                // 要使用的loader   新加一个加载器loader，也是对.ts生效，将use变成数组，再增加一个即可 
                use: [
                     
                    // 加载器的执行顺序从后往前执行，要先用'ts-loader'将.ts转换成.js
                    // 然后再用babel将新版本的js转换为旧版本的js
                    // 兼容不同版本的浏览器  'babel-loader',  要用一些复杂的配置信息
                    // 配置babel   使用对象{}配置
                     {
                         // 指定加载器
                         loader:"babel-loader",
                         // 设置babel
                         options: {
                             // 设置预定义的环境   假设在哪些浏览器运行
                             presets:[
                                 [
                                     // 指定环境的插件
                                     "@babel/preset-env",
                                     // 配置信息   
                                     //  在package.json里面已经下载好的配置进来 根据需要选择
                                     {
                                         // 要兼容的目标浏览器
                                         targets:{
                                             "chrome":"58",
                                             "ie":"11"
                                         },
                                         // 指定corejs的版本
                                         "corejs":"3",
                                         // 使用corejs的方式 "usage" 表示按需加载 
                                         "useBuiltIns":"usage"
                                     }
                                 ]
                             ]
                         }
                     },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),     // 这样npm run build 后会先情况dist文件再创建,避免有旧文件
        new HTMLWebpackPlugin({     // npm run build  对项目进行一个构建，生成了一个html文件
            // title: "这是一个自定义的title"
            template: "./src/index.html"  // 按照这个网页的模板生成新的网页
        }),
    ],

    // 用来设置引用模块   哪些文件可以作为模块
    resolve: {
        extensions: ['.ts', '.js']   // 以.ts  .js 结尾作为扩展名的都可以作为模块使用
    }

};