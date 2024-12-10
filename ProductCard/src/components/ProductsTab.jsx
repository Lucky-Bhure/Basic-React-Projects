import Product from "./Product";
import "./ProductTab.css"



const ProductsTab = () => {
    const productDetails = [
        {
           name : 'Laptop',
           discription : 'This page description contain Laptop Information',
           feature : {
               first : 'i5 14Gen',
               second : '512GB RAM',
           },
           price : {
               oldPrice: '69999/-',
               newPrice: '59999/-'
           }
        },
        {
           name : 'Mobile',
           discription : 'This page description contain Mobile Information',
           feature : {
               first : '8 Gen 1',
               second : '126GB ROM',
           },
           price : {
               oldPrice: '29999/-',
               newPrice: '25999/-'
           }
        },
        {
           name : 'Headphone',
           discription : 'This page description contain Headphone Information',
           feature : {
               first : '25ms Latency',
               second : '15m Range',
           },
           price : {
               oldPrice: '1999/-',
               newPrice: '1499/-'
           }
        },
        {
           name : 'Smart Watch',
           discription : 'This page description contain Smart Watch Information',
           feature : {
               first : 'OLED Screen',
               second : `1.96"`,
           },
           price : {
               oldPrice: '2999/-',
               newPrice: '1999/-'
           }
        },
       ];

    return(
        <div className="ProductTab">
            {
                productDetails.map((product) => <Product product = { product } />)
            }   
        </div>
    );

}

export default ProductsTab;