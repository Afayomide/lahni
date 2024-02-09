import { Link } from "react-router-dom"
import {BsTelephone} from "react-icons/bs"
import {BsPinMap} from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import "./footer.css"


function Footer () {
    return(
    <footer>
    <section className="footer-first-section">
     <h2>
     LÁHNÍ
     </h2>
     <ul>
    
     </ul>

     <div className="address ">
        <BsPinMap className="icon"/>
        <p>
        Lagos Address: 13A,<br/>
         Akinyemi Street Ahmadiyyah<br/>
Lagos Opposite Micom Cable<br/>
Company Ahmadiyyah Bus Stop<br/>

</p>
     </div>

     <div className="address ">
     <BsPinMap className="icon"/>
      <p>
      Ekiti Address: No 28 Olora Layout,<br/>
       along housing Road, <br/>
       Adebayo  Ado Ekiti,<br/>
        Ekiti State<br/>
      </p>
     </div>

     <div className="icons">     
     <div className="contacts-link">
        <BsTelephone className="icon"/>
        <a href="tel:+2349134117885">Telephone:+2349134117885</a>
     </div>
     <div className="contacts-link">
         <BsWhatsapp className="icon"/>
          <a href="https://wa.link/lwv983">WhatsApp:+2349134117885</a>
     </div>
     <div className="contacts-link">
        <BsInstagram className="icon"/>
         <a href="https://instagram.com/shoplahni">shoplahni</a>
     </div>

     </div>
     </section>
        
     <section className="second-section">
        <hr/>
        <p>
        © 2021 LÁHNÍ. All rights reserved.<br/>
Reproduction, in whole or in part, is prohibited.
        </p>
     </section>   
     
    </footer>
    )                        
}

export default Footer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           