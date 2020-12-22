import React from 'react'
import '../css/style.css'

function SingleCard(props){
    return(
        <div className="card">
           <img src={props.imgsrc} alt="not found" className="card_img" />
           <div className="card_info">
               <span className="card_category">{props.title}</span>
               <h3 className="card_title">{props.sname}</h3>
               <a href={props.link} target="_blank" className="a_tag">
                   <button>Watch Now</button>
               </a>
 
           </div>

        </div>
    )
}

export default SingleCard