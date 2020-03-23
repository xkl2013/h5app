export const routes = [
    // 主要业余模块
    {
        path: '/',
        component: '../layouts/baseLayout',
        routes: [
            {
                path: '/',
                redirect: '/index',
            },
            {
                path: '/index',
                component: '../layouts/contentLayout',
                routes: [
                    {
                        path: '/index',
                        component: './index',
                    },
                    {
                        path: '/study',
                        component: './study',
                    },
                ]
            },
            {
                path: '/login',
                redirect: '/login/signIn',
            },
            {
                path: '/login',
                component: '../layouts/loginLayout',
                routes: [
                    {
                        path: '/login/signIn',
                        component: './signIn',
                    },
                ]
            },
        ],
    }
];
