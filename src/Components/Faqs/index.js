import React from "react";
import "./style.css";

export function Faqs(props){
    return( 
        <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id={props.id}>
            <h2 class="accordian_para mb-0">
                <span class="accordain_bullet"><i class="fa-solid fa-circle"></i></span>
              <button class="accordian_button" type="button" id="faq_button_01" data-toggle="collapse" data-target={props.target} aria-expanded={props.expanded}  aria-controls="collapseOne">
               <span> {props.title}</span>
                {/* <!-- <span><i class="fa-solid fa-plus"></i></span> --> */}
              </button>
            </h2>
          </div>
      
          <div id="collapseOne" class="collapse" aria-labelledby={props.labelledb} data-parent="#accordionExample">
            <div class="card-body">
              <p>
{props.descripction}
              </p>
            </div>
          </div>
        </div>
        </div>
    )
}