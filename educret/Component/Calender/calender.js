import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function calender (){
    const [value, onChange] = useState(new Date());
    return (
        <div className="m-5">
            <Calendar  className="shadow-xl"
            onChange={onChange}
            value={value}
                />
        </div>
    )
}