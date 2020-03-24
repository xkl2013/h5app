import React from 'react';
import Footer from '@/components/TabBar';
import styles from './styles.less';
import Setting from '../../../config/setting';

function ContentLayout(props) {
    return (
        <div className={styles.contentWrap} style={{ paddingBottom: Setting.tabBarHeight }}>
            <div className={styles.pageContainer}>{props.children}</div>
            <Footer />
        </div>
    );
}

export default ContentLayout;
