import React from 'react'
import SingleCard from './SingleCard'
import '../css/style.css'
import Sdata from './SeriesData'
import Footer from '../footer/Footer'

function AllCards(){
    return(
        <React.Fragment>
             <h1 className="heading_style">List of top NetFlix Series in 2020</h1>
             {
                Sdata.map( (cval)=>{
                 return(
                    <SingleCard imgsrc ={cval.imgsrc} title = {cval.title} sname = {cval.sname} link = {cval.link}>

                    </SingleCard>

                 )

             })
             }
             

        </React.Fragment>
    )
}

export default AllCards