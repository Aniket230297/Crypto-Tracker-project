
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open , setOpen] = useState(false);

  
  return (
    <div>
      
          <IconButton onClick={()=>setOpen(true)}>
                    <MenuRoundedIcon className='link'/>
        </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className='drawer-div'>
          <a href='#'><p className='link'>Home</p></a>
          {/* <a href='#'><p className='link'>Watchlist</p></a> */}
          <Link to="/dashboard" className="link responsive-header-link">Dashboard</Link>
          
          </div>
          </Drawer>
       
      
    </div>
  );
}