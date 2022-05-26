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
    this.menu_control();
    this.selected();
    
  }
  menu_control(){
    const btnmenu=document.getElementById("btnMenu");
    const sidebar=document.querySelector(".sidebar");
    btnmenu?.addEventListener("click",()=>{
        sidebar?.classList.toggle("expand");
    });
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
      });
    }     
  }
  selected(){
    const item_menu=document.querySelectorAll(".item-menu a");
    for(let i=0;i<item_menu.length;i++){
      item_menu[i].addEventListener("click",()=>{
        for(let i=0;i<item_menu.length;i++){
          item_menu[i].classList.remove("selected");
        }        
        item_menu[i].classList.add("selected");
      }); 
    }    
  }
  
  
}
