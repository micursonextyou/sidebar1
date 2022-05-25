import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = 'sidebar4';
expanded=true;
  ngOnInit(): void {
  this.collapse();
    
  }
  collapse(){
  console.log("submenu");
  
    const btnsubmenu=document.querySelector(".container-submenu");
    const btn= document.getElementsByClassName("container-submenu");
     
    for(let i=0;i<btn.length;i++){
      btn[i].addEventListener("click",()=>{
        let submenu=btn[i].children.length;
        let sub=btn[i].children[2];
        sub.classList.toggle("collapse");
        console.log(submenu);
        console.log(sub);
        
        
      });
    }
    
   
  }
  
}
