import React, { forwardRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function SelfCalendar(props, ref) {
    return <Calendar locale="zh" ref={ref} />;
}
export default forwardRef(SelfCalendar);
