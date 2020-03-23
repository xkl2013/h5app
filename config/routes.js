export const routes = [
    // 主要业余模块
    {
        path: '/',
        component: '../layouts/baseLayout',
        routes: [
            {
                path: '/',
                redirect: '/course',
            },
            {
                path: '/course',
                component: '../components/renderRouter',
                title: ' 课程',
                TabBar: true,
                routes: [
                    {
                        path: '/course',
                        redirect: '/course/list',
                    },
                    {
                        path: '/course/list',
                        component: './course/list',
                        TabBar: true,
                        title: '课程',
                    },
                    {
                        path: '/course/add',
                        component: './course/add',
                        TabBar: true,
                        title: '添加课程',
                    },
                    {
                        path: '/course/edit',
                        component: './course/edit',
                        TabBar: true,
                        title: '编辑课程',
                    },
                    {
                        path: '/course/search',
                        component: './course/search',
                        TabBar: true,
                        title: '搜索',
                    },
                ],
            },
        ],
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
        ],
    },
];
