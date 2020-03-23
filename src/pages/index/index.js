import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'dva';
import styles from './index.less';

@connect((global) => ({ global }))
class Index extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className={styles.normal}>
                首页是的规范的;构建
            <Button type="primary" size="small" inline>首页</Button>
            </div>
        );
    }
}

export default Index