import React, { forwardRef } from 'react';
import { SearchBar } from 'antd-mobile';
import styles from './styles.less';

function Search(props, ref) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <SearchBar {...props} className={styles.search} ref={ref} />;
}
export default forwardRef(Search);
