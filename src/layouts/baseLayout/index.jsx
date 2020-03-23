import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {
    LocaleProvider
} from 'antd-mobile';
import Content from '../_components/contentLayout';
import { checkAuth } from '@/utils/auth';
/**
 * 
 * @param {children} props 用于分发子页面
 * 工程统一设置模块在此页面处理
 */

class BasicLayout extends React.Component {
    // UNSAFE_componentWillMount() {
    //     // 做相关业务模块登录判断
    //     const isLogin = checkAuth();
    //     if (true) {
    //         // this.props.history.replace('/login')
    //     }
    // }
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                {this.props.children}
            </LocaleProvider>
        );
    }

}

export default BasicLayout;