import { Calendar } from 'antd-mobile';

const now = new Date();
export default function (props) {
    return (
        <Calendar
            visible={true}
            // onCancel={this.onCancel}
            // onConfirm={this.onConfirm}
            // onSelectHasDisableDate={this.onSelectHasDisableDate}
            // getDateExtra={this.getDateExtra}
            defaultDate={now}
            minDate={new Date(+now - 5184000000)}
            maxDate={new Date(+now + 31536000000)}
        />
    );
}
