import React, { Component } from 'react';
import { ListView ,Button} from 'antd-mobile';
import styles from './styles.less';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  }
];
const NUM_ROWS = data.length;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }


  render() {
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <div style={{ lineHeight: 1 ,flex:1}}>
                <div style={{ marginBottom: '8px',fontSize: '14px', color: '#101010' }}>{obj.des}</div>
                <div>
                    <span style={{ fontSize: '12px', color: '#9F9D9D' ,marginRight:'40px'}}>{obj.title}</span>
                    <span style={{ fontSize: '12px', color: '#9F9D9D' }}>{obj.title}</span>
                </div>
            </div>
            <Button size="small" type="primary">编辑</Button>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>未开始（1）</span>}
        renderRow={row}
        className="am-list"
        useBodyScroll
      />
    );
  }
}
export default Demo