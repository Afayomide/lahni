import Cards from "../clothes/clothes"
import CapsData from "./capsdata"
function Cap (){
    return(
        <div className=" shopping-bg type-container">
    {CapsData.map(Cards)}
        </div>
    )
}

export default Cap