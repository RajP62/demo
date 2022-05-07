import { navbar, footer } from "../components/navbar"





document.getElementById("navbar").innerHTML = navbar()

 document.getElementById("footer").innerHTML = footer()
//  document.getElementById("footerBottom").innerHTML =  




let cartIcon = document.getElementById("cartIcon")
 cartIcon.addEventListener("click",()=>{
     window.location.href = "../cart.html"
 })
    