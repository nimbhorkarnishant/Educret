import React,{ useState,useEffect } from 'react';
import Progress_circle from '../progress_bar/progress_circle';



function project_stat({it}){
    return it.map(item => (
        <div className="p-5 sm mx-6  bg-white rounded-xl shadow-md flex items-center space-x-2  mb-2
        lg:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" >
           <div className="flex-shrink-0">
               <Progress_circle status={item.status}/>
           </div>
           <div>
               <div className="text-base font-medium text-black">{item.course_name}</div>
               <small className="text-gray-500">{item.course_desc}</small>
           </div>
       </div>
    ));
}




export default project_stat
