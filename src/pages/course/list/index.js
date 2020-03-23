import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import Search from './components/search';

import styles from './styles.less';

@connect((global) => {
    return { global };
})
class Index extends React.Component {
    getCourseList = () => {};

    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <Search className={styles.search} />
                    <Link to="/course/add"> 新增课程</Link>
                </div>
                <Link to="/course/edit"> 编辑课程</Link>
                默认页面
            </div>
        );
    }
}

export default Index;
