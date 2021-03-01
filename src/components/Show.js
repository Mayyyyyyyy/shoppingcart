import shoeone from '../images/1.png';
import shoetwo from '../images/2.png';
import shoethree from '../images/3.png';
import shoefour from '../images/4.png';
import shoefive from '../images/5.png';
import shoesix from '../images/6.png';


const showData =[
    {
        img:shoeone,
        price:699
    },
    {
        img: shoetwo,
        price: 599
    },
    {
        img: shoethree,
        price: 499
    },
    {
        img: shoefour,
        price: 399
    },
    {
        img: shoefive,
        price: 299
    },
    {
        img: shoesix,
        price: 199
    },
]



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