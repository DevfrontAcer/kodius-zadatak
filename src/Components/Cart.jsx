import {React, useState} from 'react'

function Cart(props) {
    const {cartItems, onAdd, onRemove}=props;
    const [twentyPer, setTwentyPer] = useState(false);
    const [fivePer, setFivePer] = useState(false);
    const [twentyOff, setTwentyOff] = useState(false);

    const onAddPromo=(event)=>{
        event.preventDefault();
        var enteredPromo=event.target.value;
        if(enteredPromo==="20OFF"){
            setTwentyOff(enteredPromo);
        }else if(enteredPromo==="5%OFF"){
            setFivePer(enteredPromo)
        }else if(enteredPromo==="20%OFF"){
            setTwentyPer(enteredPromo)
        }else{
            alert("This promo does not exist")
        } 
    }

    
    const promoFunc=(itemsPrice)=>{
        itemsPrice=cartItems.reduce((a, c)=>a+c.price*c.qty,0);
        if((twentyOff===true) && (fivePer===false) &&( twentyPer===false)){
            return  itemsPrice= itemsPrice -20;
        }else if((twentyOff===false) && (fivePer===true) && (twentyPer===false)){
            return   itemsPrice=itemsPrice *0.95;
        }else if((twentyOff===true) && (fivePer===true) && (twentyPer===false)){
            return   itemsPrice= (itemsPrice*0.95)-20;
        }else if((twentyOff===false) &&(fivePer===false) && (twentyPer===true)){
            return   itemsPrice= itemsPrice * 0.8;
        }else if(((twentyOff===true) && (fivePer===true) && (twentyPer===true)) || ((twentyOff===true) && (fivePer===false) && (twentyPer===true)) || ((twentyOff===true) && (fivePer===true) && (twentyPer===false))){
            return    alert("This combination of promos is impossible") 
        }else{
            return itemsPrice;
        }
    }

    return (
        <aside className="block col-1">
            <h2>Cart items:</h2>
            <div>
                {cartItems.length=== 0 && <div>Cart is empty</div>}
                {cartItems.map((item)=>(
                    <div key={item.id} className='row'>
                        <div className='col-2'>{item.name}</div>
                        <div className='col-2'>
                            <button onClick={()=>onRemove(item)} className='remove'>-</button>
                            <button onClick={()=>onAdd(item)} className='add'>+</button>
                        </div>
                        <div className='col-2 text-right'>
                            {item.qty} x {item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {cartItems.length!==0 && (
                    <>
                    <hr />
                    <div className='row'>
                        <div className='col-2'><strong>Total: </strong></div>
                            <div className='col-1 text-right'>{promoFunc()}€</div>
                    </div>
                    <div className='row'>
                        <form action='' onSubmit={(event)=>onAddPromo(event)} className='col-2'>Promotions: 
                        <input type="text" />
                    <input type="submit" value="Add promo" />
                        </form>
                    </div>
                    <hr />
                    </>
                )}
            </div>
        </aside>
    )
}

export default Cart
