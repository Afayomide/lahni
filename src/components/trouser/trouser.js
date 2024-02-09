import PantsData from "./trousersdata"
import Cards from "../clothes/clothes"


function Trouser (){
    return(
        <div className="shopping-bg type-container">
          {PantsData.map(Cards)}
        </div>
    )
}

export default Trouser