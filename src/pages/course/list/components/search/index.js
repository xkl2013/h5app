import React from 'react';
import { SearchBar } from 'antd-mobile';
// import styles from './styles.less';

export default function (props) {
    return <SearchBar title="标题" placeholder="搜索" prefixCls="7777" className={props.className} />;
}
