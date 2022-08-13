import { createTheme } from '@material-ui/core';
import { CloseOutlined, SearchOutlined } from '@material-ui/icons'
import './search.scss'

const Search = ({setOpen}) => {
  
  return (
    <div className="search">
      <form action="" method="post">
        <input type="search" name="" id="" placeholder="Search..."/>
        <button type="submit" className="search_button"><SearchOutlined /></button>
      </form>
      <span className="search_close"><CloseOutlined  onClick={()=>setOpen(false)}/></span>
    </div>
  )
}

export default Search