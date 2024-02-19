import React from "react";
import "./style.css";

export function Faqs(props){
    return( 
        <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id={props.id}>
            <h2 className="accordian_para mb-0">
                <span className="accordain_bullet"><i className="fa-solid fa-circle"></i></span>
              <button className="accordian_button" type="button" id="faq_button_01" data-toggle="collapse" data-target={props.target} aria-expanded={props.expanded}  aria-controls="collapseOne">
               <span> {props.title}</span>
                {/* <!-- <span><i className="fa-solid fa-plus"></i></span> --> */}
              </button>
            </h2>
          </div>
      
          <div id="collapseOne" className="collapse" aria-labelledby={props.labelledb} data-parent="#accordionExample">
            <div className="card-body">
              <p>
{props.descripction}
              </p>
            </div>
          </div>
        </div>
        </div>
    )
}