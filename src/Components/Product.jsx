import React from 'react'

function Product(props) {
    const {product,onAdd}=props;
    return (
        <div>
            <img src={product.image} alt={product.name} className="small" />
            <h3>{product.name}</h3>
            <div>{product.price} €</div>
            <div>
                <button onClick={()=>onAdd(product)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
