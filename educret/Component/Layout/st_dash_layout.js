import React from "react";
import Project_stat from '../Box_component/project_stat_box';
import Calendar from '../Calender/calender';
import Bar_chart from '../Graphs/bar';
import Column_text from '../Box_component/column_text';
import Schedule_comp from '../Box_component/Schedule_comp';

export default function st_dash_layout({items}){
    return(
        <div id="main_col" class="grid grid-cols-1 lg:grid-cols-3 ">
          <div id="main_col-col_1-2" class="col-span-2 ">
            <div class="border-b-2 mt-10">
              {/* <Bar_chart/> */}
            </div>
            <div id="col_1-2-main" class="grid grid-cols-1 lg:grid-cols-2 ">
              <div id="col_1-2-main-a">
                {/* Column Text Code  */}
                <Column_text text={"Course Statistics"}/>
                {/* Colum text code ended */}
                {/* Column Content start*/}
                <div><Project_stat it={items.course}/></div>
                {/* Column Content End */}
              </div>
              <div id="col_1-2-main-b">
                {/* Column Text Code  */}
                <Column_text text={"Assignment Statistics"}/>
                {/* Colum text code ended */}
                {/* Column Content start*/}
                <div><Project_stat it={items.assignment}/></div>
               
                {/* Column Content End */}
              </div>
            </div>
          </div>
          <div id="main_col-3" className="lg:border-l-2 h-full border-gray-300">
            <div className="mt-7">
            <b className="text-gray-900 px-3 py-2 text-base font-medium" >Calender</b>
              <Calendar/>
            </div>
            <div className="mt-7">
            <b className="text-gray-900 px-3 py-2 text-base font-medium">Todays Schedule</b>
            <div className="overflow-auto h-64">
              <div><Schedule_comp it={items.today_schedule} /></div>
            </div>
            </div>
          </div>  
      </div>
      
    )
}


export async function getStaticProps(context) {
  // Call an external API endpoint to get posts
  // console.log("Iam here");
  // const posts=[]


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: 
    {
      
      column_text:[{"column_text_name":"Course Statistics"},
                    {"column_text_name":"Assignment Statistics"},
                  ]
  }
  }
}