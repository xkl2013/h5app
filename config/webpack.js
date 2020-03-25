import px2rem from 'postcss-plugin-px2rem';
import theme  from './theme';

// 处理umi对应的webpack配置
export const webpack = {
    publicPath: '/',
    define: {
        'process.env.ENV': process.env.ENV, // 开发环境
        'process.env.BUILD_ENV': process.env.BUILD_ENV, // 构建环境
    },
    alias: {
        '@': require('path').resolve(__dirname, 'src'),
    },
    theme:theme,
    uglifyJSOptions: (opts) => {
        opts.uglifyOptions.mangle.safari10 = true;
        return opts;
    },
    extraPostCSSPlugins: [
        px2rem({
            rootValue: 100, //开启hd后需要换算：rootValue=designWidth*100/375,此处设计稿为375，所以375*100/375=100
            propBlackList: [
                'border',
                'border-top',
                'border-left',
                'border-right',
                'border-bottom',
                'border-radius',
                'font-size',
            ], //这些属性不需要转换
            selectorBlackList: ['am', 'react-calendar'], //以包含antd的class不需要转换
        }),
    ],
    proxy: {},
};
