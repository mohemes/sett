//import * as Reac from 'react';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

export const SidePanel= (props)=> {

    useEffect(() => {
        const tabs= document.querySelectorAll(".theside > li");

        // let tabheader= tabs.querySelector(".tab-header");
        // let tabbody= tabs.querySelector(".tab-body");
        // let tabheaderEs= tabs.querySelectorAll(".tab-header > div");

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click" , function(){
                let liac = document.querySelector(".active");
                if(liac != null){
                    liac.classList.remove("active");
                }
                tabs[i].classList.add("active");
        
            });
            
        }
      }, []);
    
    
  return (
    <div class='theside'>
      The header
      {/* <li><Link to={"/login"}>Login</Link></li> */}
      <li class="linkUsers" ><Link to={"/users"}>users</Link></li>
      <li class="linkSetting"><Link to={"/setting"}>settings</Link></li>
      <li class="linkSessions"><Link to={"/sessions"}>sessions</Link></li>
    </div>
  );
}
export default SidePanel