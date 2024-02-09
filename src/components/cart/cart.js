import { uniqueArray } from "../clothes/clothes"
import { useState, useEffect, useRef } from "react"
import CartCard from "./cartcard"
import { PaystackButton } from "react-paystack"
import "./cart.css"
import { ItemContext } from "../filecontext"
import { useContext } from "react"
import emailjs from '@emailjs/browser';
import { usePaystackPayment } from 'react-paystack';


function Cart () { 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yyeo66h', 'template_e3plaus', form.current, '-uGNesM2dn2b2lqIY')
      .then(function(result){
          alert("Message sent Successfuly, await our call or text to confirm.")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const [show, setShow] = useState();

  const ToggleData = () => {
    setShow(!show);
  };

  const [addVisibility, seeAddress] = useState(false);

  const ToggleAddress = () => {
    seeAddress(true);
  };

  const HideAddress = () => {
    seeAddress(false)
  }


  const {setItems, items} = useContext(ItemContext)
const stringItems = JSON.stringify(items)

var total = ""
 
if(items){
   total = items.reduce((accumulator,obj) =>{
        return accumulator + obj.price;
        }, 0)
}
else{
   total = 0
}
    
    const publicKey = "pk_live_64ab49dbefa528ad8839acc8c31848823f65b1c6"
    const amount = total + "00"
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const come ="Pick Up Station"
    const delivery = "Home delivery"
    const inputRef = useRef(null)
 
    function handleChange(event) {
           setEmail(event.target.value)
    }
  //   function cartmeta(props){
  //     const{i,price,name} = props
  // return(
  //     <>
            
  //                 cart:{name}, 
  //           'name': {price},
  //     </>
  // )
  // }


  const config = {
    reference: (new Date()).getTime().toString(),
    email,
    amount,
    publicKey,
};

  const onSuccess = () => {
        console.log("Success")
        emailjs.sendForm('service_yyeo66h', 'template_e3plaus', form.current, '-uGNesM2dn2b2lqIY')
        localStorage.removeItem("item");
        ToggleData()
        setItems([])
      };
    // Implementation for whatever you want to do with reference and after success call.

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  const [phoneWarning, setPhoneWarning] = useState()
  const [emailWarning, setEmailWarning] = useState()
  const [RadioWarning, setRadioWarning] = useState()
  const[addressWarning, setAddressWarning] = useState()
  const [disable, setDisable] = useState()
 const [radioval , setRadioVal] = useState("")
const handleRadio = (event) => {
  setRadioVal(event.target.value)
} 

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
function flashWarning(e) {
  if(phone == ""){
    setPhoneWarning("warning")
  }
  if(phone !==""){
    setPhoneWarning("")
  }
  if(email == ""){
    setEmailWarning("warning")
  }
  if(email !==""){
    setEmailWarning("")
  }
  if(radioval == ""){
    setRadioWarning("warning")
  }
  if(radioval !== "") {
    setRadioWarning("")
  }
  if(addVisibility == true && address == "") {
    setAddressWarning("warning")
  }
  if(address !==  ""){
    setAddressWarning("")
  }
  if(phone !== ""  && email !=="" && radioval !==""){
    if(addVisibility == true && address!== "" || addVisibility == false){
      initializePayment(onSuccess, onClose)
    }
    // if (addVisibility== false){
    //   initializePayment(onSuccess, onClose)
    // }
  }
}

    return (
      <div>
          <button className="checkout-button" disabled={disable} type="button" onClick={() => {
            flashWarning()
          }}>Checkout</button>
      </div>
    );
};

    return(
        <div className="carts-container type-container">
                <h4>Your Cart</h4> 
            <p>Total: ₦{total}</p>

            {show ? <strong className="thank-you"> Thank You For Shopping With Us </strong> : ""}
            <a className="checkout-button tocheckout" href="#checkout">Checkout</a>

        {items.map(CartCard)}


{/* <p className="cart-p">Please fill the following form before checkout</p> */}

<form id="checkout" ref={form} className="max-w-md mx-auto cart-form">
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" onChange={handleChange} value={email} name="email" id="email" class={ `${emailWarning} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " required />
      <label for="floating_email" class={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email address</label>
      {emailWarning == "warning" ? <small className="warning-text"> please fill this field </small> : ""}

  </div>

  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input onChange={(e) => setName(e.target.value)} type="text" value={name} name="name" id="floating_first_name" class={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
  
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input  onChange={(e) => setPhone(e.target.value)} type="tel" value={phone} name="phone" id="floating_phone" class={`${phoneWarning} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
        {phoneWarning == "warning" ? <small className="warning-text"> please fill this field </small> : ""}
    </div>
  </div>
   
  <div>
    <input
     type="radio" 
     id="free_delivery"
      name="pickup" 
      value={delivery}
      checked={radioval === delivery}
      onChange={handleRadio} required
      onClick={ToggleAddress}
      />
    <label for="free_delivery">Home Delivery <small>(ususally takes within 2 to 3 days)</small></label>
  </div>
{addVisibility ? <div class="grid md:grid-cols-2 md:gap-6">
    <div class=" relative z-0 w-full mb-5 group" >
        <textarea onChange={(e) => setAddress(e.target.value)} type="text" value={address} name="address" id="floating_address" class={`${addressWarning} address block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " required />
        <label for="floating_address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Delivery Address</label>
        {addressWarning == "warning" ? <small className="warning-text">Please fill this field</small> : ""}
    </div>
    </div> : ""}
  

  <div>
          <input 
          id="pickup_station" 
          type= "radio" 
          name="pickup" 
          value={come} 
          checked={radioval === come}
          onChange={handleRadio} required
          onClick={HideAddress}
          />
    <label for="pickup_station">Pickup Station <small>(same day pick up available)</small></label>
    <br/>
     {RadioWarning == "warning" ? <small className="warning-text"> please select one from the above options </small> : ""}
<br/> 
<div className="pickup-address">
    <small> Ekiti Address: No 28 Olora Layout,
along housing Road,
Adebayo Ado Ekiti,
Ekiti State</small>
</div> 
  </div>

   <input className="items-input" value={stringItems} name="message"/>
   <p className="total">Items Total = ₦{total}</p>
<div className="button-container">
     <PaystackHookExample type="submit" />

</div>
</form>

        

        </div>
    )
}

export default Cart