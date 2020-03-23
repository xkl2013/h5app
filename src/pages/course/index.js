import React from 'react';
// import { Button } from 'antd-mobile';
import { connect } from 'dva';
// import Header from '@/components/header';
// import Footer from '@/components/footer';

// import styles from './index.less';

@connect((global) => {
    return { global };
})
class Index extends React.Component {
    render() {
        return <div>默认页面</div>;
    }
}

export default Index;
