import React, {useState} from 'react'
import img1 from "./website.jpg"
import img2 from "./website2.jpg"
import img3 from "./website3.jpg"

const cimgstyle={
    marginTop: 100,
    height: 300,
    width: 600
}
const imgstyle={
    
    height: 300,
    width: 600
}
export default function About() {
    const [theme,setTheme]=useState({
        dark:false,
        color:"black",
        backgroundColor:"white"
    })

    const changed = () =>{
        if(!(theme.dark)){
            setTheme({
                dark:true,
                color:"white",
                backgroundColor:"black"
                })
        }else{
            setTheme({
                dark:false,
                color:"black",
                backgroundColor:"white"
                })
        }

    }
  return (
    <div style={theme}>

      <div id="carouselExampleFade" style={cimgstyle} class="container carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} style={imgstyle} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} style={imgstyle} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} style={imgstyle} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="container">    
<div class="form-check form-switch textct">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={changed}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Dark mode</label>
</div>
</div>
    </div>
  )
}
