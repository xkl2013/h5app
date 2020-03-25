import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import styles from './styles.less'

function Header() {
    return  <NavBar
                className={styles.headerNav}
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                <Icon key="1" type="ellipsis" />,
                ]}
            >导航</NavBar>;
}

export default Header;
