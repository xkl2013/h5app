import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';

import styles from './styles.less';

@connect((global) => {
    return { global };
})
class Index extends React.Component {
    render() {
        return (
            <div className={styles.wrap}>
                <Link to="/course/add"> 新增课程</Link>
                <Link to="/course/edit"> 编辑课程</Link>
                默认页面
            </div>
        );
    }
}

export default Index;
