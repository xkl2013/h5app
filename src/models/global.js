// import { message } from 'antd';

export default {
    namespace: 'global',
    state: {
        menuMap: {}, // 路由
    },
    effects: {
        * initData(_, { put }) {
            // 全局调用
            yield put({
                type: 'save',
            });
        },
    },
    reducers: {
        initMenu(state, { payload }) {
            const { routes } = payload || {};
            const menuMap = {};
            const formateData = (data) => {
                const item = { ...data };
                delete item.routes;
                menuMap[data.path] = item;
                if (data.routes && Array.isArray(data.routes)) {
                    data.routes.map((router) => {
                        return formateData(router);
                    });
                }
            };
            formateData(routes);
            return { ...state, menuMap };
        },
        save(state, { payload }) {
            return { ...state, ...payload };
        },
    },
};
