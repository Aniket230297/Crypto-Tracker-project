import './style.css';
import TemporaryDrawer from './drawer';
import Button from '../Buttons/Button';

function index() {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker<span style={{color:"blue"}}>.</span></h1>

        <div className='links'>
          <a href='#'><p className='link'>Home</p></a>
          <a href='#'><p className='link'>Watchlist</p></a>
          <a href='#'><p className='link'>Compare</p></a>
          <a href='#'><Button text={"Dashboard"} /></a>
          
        </div>

        <div className='mobile-drawer'>
            <TemporaryDrawer />
        </div>
    </div>
    
  )
}

export default index