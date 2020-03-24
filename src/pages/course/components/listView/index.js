import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import styles from './styles.less';

const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: "McDonald's invites you",
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];
export default class listView extends Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        const getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[rowID];
        };

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => {
                return row1 !== row2;
            },
            sectionHeaderHasChanged: (s1, s2) => {
                return s1 !== s2;
            },
        });

        this.state = {
            des: 'changliebiaos',
            dataSource,
            isLoading: false,
            height: (document.documentElement.clientHeight * 3) / 4,
        };
    }

    render() {
        return (
            <div>
                {' '}
                {this.state.des}
                <ListView
                    className={styles.list}
                    ref={(el) => {
                        return (this.lv = el);
                    }}
                    dataSource={this.state.dataSource}
                    renderHeader={() => {
                        return <span>header</span>;
                    }}
                    renderFooter={() => {
                        return (
                            <div style={{ padding: 30, textAlign: 'center' }}>
                                {this.state.isLoading ? 'Loading...' : 'Loaded'}
                            </div>
                        );
                    }}
                    // renderRow={row}
                    // renderSeparator={separator}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    onScroll={() => {
                        console.log('scroll');
                    }}
                    scrollRenderAheadDistance={500}
                    // onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                >
                    长列表封装
                </ListView>
            </div>
        );
    }
}
