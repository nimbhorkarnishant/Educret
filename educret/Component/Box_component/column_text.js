import React from 'react';


export default function column_text({text}){
    
    return(
        <div class="mt-5 grid grid-rows-2 grid-flow-col gap-4">
            <div class="row-span-2">
                <b className="text-gray-900 px-3 py-2 text-base font-medium">{text}</b>
            </div>
            <div>
                <a href="#" className="text-gray-900 px-3 py-2 rounded-md text-base font-medium">See All</a>
            </div>
        </div>
    )
}