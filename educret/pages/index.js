import Head from 'next/head'
import Navbar from '../Component/header/navbar';
import Footer from '../Component/footer/footer';
import Project_stat from '../Component/Box_component/project_stat_box'

export default function Home() {
  return (
    <div>
      <head>
        <title>Dashboard</title>
      </head>
      <div>
        <Navbar/>
      </div >
      <div className="content-start">
          <div><Project_stat/></div>
          <div><Project_stat/></div>

      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
