import { FavoriteBorderOutlined, MenuOutlined, SearchOutlined} from '@material-ui/icons'
import {ShoppingBagOutlined} from '@mui/icons-material';
import { useState } from 'react';
import Mylist from '../mylist/Mylist';
import Mycart from '../mycart/Mycart';
import Search from '../search/Search';
import './navbar.scss'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [openMylist, setOpenMylist] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openMyCart, setOpenMyCart] = useState(false)
  window.onscroll=()=>{
    setIsScroll(window.pageYOffset===0 ? false : true)
    return ()=>window.onscroll=null
  }

  const handleSearch=()=>{
    setOpenModal(true)
  }
  const handleMyList=()=>{
    setOpenMylist(true)
  }
  const handleMyCart=()=>{
    setOpenMyCart(true)
  }
  return (
    <>
    <div className={isScroll?"navbar shadow":"navbar"}>
      <div className="container">     
        <div className="left">                  
            <img src="http://htmlbeans.com/html/schon/images/mt-logo.png" alt=""/>         
        </div>
        <div className="right">
          <div className="links">
          <span>HOME</span>
          <span>PRODUCTS</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
          </div>
          <div className="icons">
            <span onClick={handleSearch}><SearchOutlined /></span>
            <div className="numbered" onClick={handleMyList}>
              <span ><FavoriteBorderOutlined/></span>
              <div className="number">5</div>
            </div>
            <div className="numbered" onClick={handleMyCart}>
              <span><ShoppingBagOutlined/></span>
              <div className="number">5</div>
            </div>       
            <span><MenuOutlined/></span>
          </div>
        </div>      
      </div>
      
    </div>
    {openModal && <Search setOpen={setOpenModal}/>}
    {openMylist && <Mylist setOpen={setOpenMylist}/>}
    {openMyCart && <Mycart setOpen={setOpenMyCart}/>}
    </>
  )
}

export default Navbar