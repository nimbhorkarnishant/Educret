import React,{ useState,useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function progress_circle({status}){
    const percentage = status;
    return (
        <div style={{ width:70, height: 70 }}>
            <CircularProgressbar styles={{path:{stroke:'green'},text:{fill:'black'}}} value={percentage} text={`${percentage}%`} />
        </div>    
    )
}