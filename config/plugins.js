export const plugins = [
    [
        'umi-plugin-react',
        {
            antd: true,
            dva: true,
            dynamicImport: {
                webpackChunkName: true,
                // loadingComponent: '../src/components/spin/index.js',
            },
            title: 'guzheng',
            dll: true,
            routes: {
                exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\//],
            },
        },
    ],
    ['umi-plugin-polyfill'],
];
