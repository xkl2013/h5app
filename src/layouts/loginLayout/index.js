import React, { forwardRef } from 'react';

/**
 * 
 * @param {children} props 用于分发子页面
 * 工程统一设置模块在此页面处理
 */

function Login(props, ref) {
    return (
        <div ref={ref}>
            {props.children}
        </div>
    );

}

export default forwardRef(Login);