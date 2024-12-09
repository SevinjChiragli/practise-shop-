function ProductItem( {
    product_name,
    product_description,
    product_price,
    url
 }) {
    
    return(
       <li>
         <p>{product_name}</p>
         <p>{product_description}</p>
         <p>{product_price}</p>
         <img src={url}/>
       </li>
      )
  }
  export default ProductItem;
  