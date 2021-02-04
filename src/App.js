import React, { useState ,useEffect,useRef} from 'react';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Show from './components/Show';
import {v4 as uuidv4} from 'uuid';


function App() {
  const [listItem,setListItem] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [num,setNum] = useState(0);

  const updateCart = (img,price)=>{
    setNum(previousNum =>previousNum+1);
    setTotalPrice(previousTotalPrice=>previousTotalPrice+price);
    if(listItem.find(item=>item.img===img)){
      const result = listItem.find(item => item.img === img);
      result.itemcount++;
      return;
    }
    setListItem([...listItem,
      {img,price,id:uuidv4(),itemcount:1}
    ])
  }

  const removeItem = (id)=>{
    const filteredItems = listItem.filter(item => item.id !== id);
    setListItem(filteredItems);

    const numResult = filteredItems.reduce(
      (acc,val)=>(acc+= val.itemcount),0
    )
    setNum(numResult);

    const priceResult = filteredItems.reduce(
      (acc,val)=>(acc+= val.price*val.itemcount),0
    )
    setTotalPrice(priceResult);
  }

  return (
    <div className="App">
        <Nav />
        <div className="content">
          <Show  
           updateCart={updateCart}  
          />
          <Cart 
            listItem={listItem}
            removeItem={removeItem}
            totalPrice={totalPrice}
            num={num}
          />
        </div>
    </div>
  );
}

export default App;
