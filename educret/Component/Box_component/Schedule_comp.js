import React,{ useState,useEffect } from 'react';

export default function schedule_comp({it}){
    return it.map(item => (
        <div className="p-5 sm mx-6  bg-white rounded-sm  flex items-center space-x-2  mb-1 border-b-2" >
        <div>
            <div className={"rounded-full h-10 w-10 flex items-center justify-center bg-"+item.color+"-500"}>{item.course_name.charAt(0)}</div>
        </div>
        <div>
            <div className="text-sm font-medium text-black">{item.course_name}</div>
            <small className="text-gray-500">{item.course_desc}</small>
        </div>
    </div>
    ));

    
}