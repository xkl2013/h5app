import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import Search from '@/components/searchBar';
import Calendar from '@/components/calendar';
import Header from '@/components/header';
import ListView from '@/components/listView'
import { Button } from 'antd-mobile';

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
                    <Header/>
                </div>
                <div className={styles.search}>
                    <span  className={styles.input}>
                        <Search/>
                    </span>
                    <Link to="/course/add" className={styles.linkStyle}>
                        <Button inline  size="small" className={styles.edit} type="primary">+ 课程</Button>
                    </Link>
                </div>
                <div className={styles.calendar}>
                    <div className={styles.week}>本周课程</div>
                    <Calendar />
                </div>
                <div className={styles.list}>
                    <ListView/>
                </div>
            </div>
        );
    }
}

export default Index;
