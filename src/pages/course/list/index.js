import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import Search from './components/search';
// import Calendar from './components/Calendar';
import ListView from '../components/listView';

import styles from './styles.less';

const now = new Date();

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
                <div>{/* <Calendar/> */}</div>
                {/* listView区域 */}
                <ListView />
                <Link to="/course/edit"> 编辑课程</Link>
                默认页面
            </div>
        );
    }
}

export default Index;
