import showData from './ShoeData';

const Show = (props) => {
    const {updateCart} = props;
    return ( 
        <div className="show">
           {showData.map((item,index)=>{
               return (
                   <div key={index} className='card'>
                       <div className="imgContainer">
                           <img src={item.img} alt="shoe" />
                       </div>
                       <div className="cardInfo">
                           <div>${item.price}</div>
                           <button onClick={()=>updateCart(item.img,item.price)}>Add to cart</button>  
                       </div> 
                       
                   </div>
               )
           })}
        </div>
     );
}
 
export default Show;