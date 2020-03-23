import { Button } from 'antd-mobile';
import styles from './index.less';

export default function Login() {
    return (
        <div className={styles.normal}>
            <Button type="primary" size="small" inline>登录</Button>
        </div>
    );
}
