const Cart = (props) => {
    const {listItem,removeItem,totalPrice,num} = props;
    return ( 
        <div className="cart">
            <div className="cartItem">
               {listItem.map(
                   (item) => {
                       return (
                           <div key={item.id} className='item'>
                                <div><img src={item.img} alt="shoe" /></div>
                                <div>${item.price}</div>
                                <div>{item.itemcount}</div>
                                <div><button onClick={()=>removeItem(item.id)}>delete</button></div>
                           </div>
                       )
                   }
               )}
            </div>
            <div className='cartInfo'>
               <h3>total price:${totalPrice}</h3>
               <h3>total item:{num}</h3>
            </div>
        </div>
     );
}
 
export default Cart;