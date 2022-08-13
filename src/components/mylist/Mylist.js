import './mylist.scss'

const Mylist = ({setOpen}) => { 
  
  return (
    <div className="mylist" onClick={()=>setOpen(false)}>
      <div className="triangle">
      </div>  
      <div className="wrapper">     
      <div className="item">
        <div className="image"><img src="http://htmlbeans.com/html/schon/images/products/img12.jpg" alt="" srcset="" /></div>
        <div className="description">
          <div className="title">Marvelous Modern 3 Seater</div>
          <div className="price">$ 599,00</div>
        </div>
        <div className="close">x</div>
      </div>
      <div className="item">
        <div className="image"><img src="http://htmlbeans.com/html/schon/images/products/img12.jpg" alt="" srcset="" /></div>
        <div className="description">
          <div className="title">Marvelous Modern 3 Seater</div>
          <div className="price">$ 599,00</div>
        </div>
        <div className="close">x</div>
      </div>
      <div className="item">
        <div className="image"><img src="http://htmlbeans.com/html/schon/images/products/img12.jpg" alt="" srcset="" /></div>
        <div className="description">
          <div className="title">Marvelous Modern 3 Seater</div>
          <div className="price">$ 599,00</div>
        </div>
        <div className="close">x</div>
      </div>
    <div className="line"></div>
    <div className="add">
      <div className="text-add">Add them all</div>
      <button>add to cart</button>
    </div>
      </div>
      
    </div>
  )
}

export default Mylist