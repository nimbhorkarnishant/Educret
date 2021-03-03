import React,{ useState,useEffect } from 'react';
import Progress_circle from '../progress_bar/progress_circle';

export default function project_stat(){
    return (
        <div class="p-6 max-w-sm mx-6  bg-white rounded-xl shadow-md flex items-center space-x-4 my-10 
        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div class="flex-shrink-0">
                <Progress_circle/>
            </div>
            <div>
                <div class="text-xl font-medium text-black">Math 8th Course</div>
                <p class="text-gray-500">Course ended on 12 march 2021 (11.59 PM)</p>
            </div>
        </div>
    )
}