import Head from 'next/head'
import Navbar from '../Component/header/navbar';
import Footer from '../Component/footer/footer';
import St_dash_layout from '../Component/Layout/st_dash_layout';

export default function Home({data}) {
  return (
    <div>
      <head>
        <title>Dashboard</title>
      </head>
      <div>
        <Navbar nav_status={"dashboard"}/>
      </div >
        <St_dash_layout items={data}/>
      <div>
        <Footer/>
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
    
      data:{
        course:[
        {"course_name":"Math 8th Course","course_desc":"Course ended on 12 march 2021 (11.59 PM)","status":75},
        {"course_name":"physics 8th Course","course_desc":"Course ended on 15 march 2021 (11.59 PM)","status":85},
      ],
      assignment:[
        {"course_name":"Physics Circular Motion","course_desc":"Assignemt last date 12 march 2021 (11.59 PM)","status":20},
        {"course_name":"Maths Quadratic Equation","course_desc":"Assignemt last date  15 march 2021 (11.59 PM)","status":60} 
      ],
      today_schedule:[
        {"course_name":"Algebra","course_desc":"Chapter 2-3","color":"green"},
        {"course_name":"Physics","course_desc":"Chapter 1-2","color":"pink"},
        {"course_name":"Geometry","course_desc":"Chapter 3-5","color":"yellow"}

      ],
    }
      
  }
  }
}