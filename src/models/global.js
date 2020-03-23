// import { message } from 'antd';


export default {
    namespace: 'global',
    state: {
        departmentsList: [], // 组织结构
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
        save(state, { payload }) {
            return { ...state, ...payload };
        },
    }
};
