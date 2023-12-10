import './style.css';

function index() {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker<span style={{color:"blue"}}>.</span></h1>

        <div className='links'>
          <a href='#'><p className='link'>Home</p></a>
          <a href='#'><p className='link'>Watchlist</p></a>
          <a href='#'><p className='link'>Compare</p></a>
          <a href='#'><p className='link'>Dashboard</p></a>
          
        </div>
    </div>
  )
}

export default index