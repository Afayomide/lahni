import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../filecontext";
import { uniqueArray } from "../clothes/clothes";
  
function CartCard (props) {
  const {items, setItems} = useContext(ItemContext)   
    function handleRemove(id) {
      const it = items.filter(item => item.id !== id);
      setItems(it)   
      localStorage.setItem('item', JSON.stringify(it));  
      }
    
   
    
    const{id,size,imgsrc,price} = props
    return(
        <div className="cart">
        <Link to={`/${id}`}>
  <img src={imgsrc} loading="lazy"/>
  </Link>

  <div className="remove-container">
  <div>
  <p>{price}</p>
  </div>
  <button type="button" onClick={()=> handleRemove(id)}>Remove from Cart</button>
        </div>
        </div>
    )
}

export default CartCard