import React from 'react';
import { TabBar } from 'antd-mobile';
import styles from './styles.less';
import Setting from '../../../config/setting';

class FooterTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
        };
    }

    render() {
        return (
            <div className={styles.tabWrap} style={{ height: Setting.tabBarHeight }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    noRenderContent={true}
                >
                    <TabBar.Item
                        title="课程"
                        key="Life"
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) 
                                        center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) 
                                        center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    />
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `
                                    url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) 
                                        center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `
                                    url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) 
                                        center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        title="学习"
                        key="Koubei"
                        badge="new"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    />
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) 
                                        center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) 
                                        center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        title="作业"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    />
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    />
                </TabBar>
            </div>
        );
    }
}
export default FooterTabBar;
