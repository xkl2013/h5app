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
    uglifyJSOptions: (opts) => {
        opts.uglifyOptions.mangle.safari10 = true;
        return opts;
    },
    proxy: {
    },
};
