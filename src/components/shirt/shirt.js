import ShirtData from "./shirtsdata"
import Cards from "../clothes/clothes"
 
 function Shirt (){
    return(
        <div className="shopping-bg">
    <div
    className="type-container">
    {ShirtData.map(Cards)}
        </div>
        </div>
    )
}

export default Shirt