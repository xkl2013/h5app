import React, { useEffect, useCallback } from 'react';
import { connect } from 'dva';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd-mobile';
import ContentLayout from '../contentLayout';
/**
 *
 * @param {children} props 用于分发子页面
 * 工程统一设置模块在此页面处理
 */

function BasicLayout(props) {
    const { pathname } = props.location;
    const { menuMap = {} } = props || {};
    const initMenuData = useCallback(() => {
        props.dispatch({ type: 'global/initMenu', payload: { routes: props.route } });
    }, []);
    useEffect(() => {
        initMenuData();
    }, []);

    const renderContent = () => {
        const hasTabBar = (menuMap[pathname] || {}).TabBar;
        console.log(hasTabBar);
        if (!hasTabBar) return props.children;
        return <ContentLayout>{props.children}</ContentLayout>;
    };
    return <LocaleProvider locale={zhCN}>{renderContent()}</LocaleProvider>;
}

export default connect(({ global }) => {
    return { menuMap: global.menuMap };
})(BasicLayout);
