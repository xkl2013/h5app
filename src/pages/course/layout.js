import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'dva';
import Header from '@/components/header';
import Footer from '@/components/footer';

import styles from './index.less';

@connect((global) => ({ global }))
class Index extends React.Component {
    render() {
        return (
           <div>
               <Header/>
               sdfsl
               <Footer/>
             
           </div>
        );
    }
}

export default Index