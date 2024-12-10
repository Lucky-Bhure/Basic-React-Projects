import "./Product.css"
import Price from "./Price"

const Product = ({product}) => {

    let {name, discription,feature, price} = product;

    return (
        <div className="Product" >
            <h2 style={{color: "red"}}>{name}</h2>
            <p >{discription}</p>
            <p>{feature.first}</p>
            <p>{feature.second}</p>
            <Price price = {price}/>
        </div>
    )
}

export default Product;