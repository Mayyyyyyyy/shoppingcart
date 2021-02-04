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
               <p>total price:${totalPrice}</p>
               <p>total item:{num}</p>
            </div>
        </div>
     );
}
 
export default Cart;