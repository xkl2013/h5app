import React, { forwardRef } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import styles from './styles.less'

function SelfCalendar(props, ref) {
    const tileContent=({ date, view,activeStartDate ,...others})=>{
        console.log(moment(activeStartDate).date(),others)
        return  <div className={styles.ceil}>
            <span className={styles.date}>{moment(date).date()}</span>
            {props.tileContent?props.tileContent():<span className={styles.des}> 2节课</span>}
           </div>
    }
    return <Calendar 
    locale="zh" 
    ref={ref} 
    className={styles.calendar}
    tileContent={tileContent}
    tileClassName={[styles.tileClassName,styles.activeTileClassName]}
    view={props.view||"month"}
    {...props}
    />;
}
export default forwardRef(SelfCalendar);
