import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import Search from '@/components/searchBar';
import Calendar from '@/components/calendar';

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
                    <span className={styles.search}>
                        <Search />
                    </span>
                    <Link to="/course/add"> 新增课程</Link>
                </div>
                <div>
                    <Calendar />
                </div>
                <Link to="/course/edit"> 编辑课程</Link>
                默认页面
            </div>
        );
    }
}

export default Index;
