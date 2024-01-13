import React from 'react';
import '../List/style.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function List({ coin }) {
  const isPricePositive = coin.price_change_percentage_24h > 0;

  return (
    <tr className='list-row responsive-list-row'>
      <td className='info-flex responsive-flex'>
        <img src={coin.image} className='coin-logo responsive-logo' alt='img' />
        <div className='coin-info responsive-info'>
          <p className='coinSymbol  responsive-symbol'>{coin.symbol}</p>
          <p className='coinName  responsive-name'>{coin.name}</p>
        </div>
      </td>

      <td className='chip-flex responsive-chip-flex'>
        <td className={`coin-percentage responsive-coin-percentage ${isPricePositive ? 'coin-percentage-hovering-green' : 'coin-red coin-percentage-hovering-red'}`}>
          {coin.price_change_percentage_24h.toFixed(2)}% 
        </td>
        {isPricePositive ? (
          <TrendingUpRoundedIcon className='trending-icon coin-percentage-hovering-green responsive-icon-green' />
        ) : (
          <TrendingDownRoundedIcon className='trending-icon down-icon coin-percentage-hovering-red responsive-icon-red' />
        )}
      </td>

      <td className=' info-list-container responsive-info-list-container'>
        <td>
          <h3 className={` responsive-coin-price coin-price ${isPricePositive ? '' : 'coin-price-red'}`}>
            ${coin.current_price.toLocaleString()}
          </h3>
        </td> 
        <td className='total-volume'>
          <p className='vol responsive-vol'> {coin.total_volume.toLocaleString()}</p>
        </td>
        <td className='total-volume '>
          <p className='vol responsive-total-volume'> {coin.market_cap.toLocaleString()}</p>
        </td>
      </td>
    </tr>
  );
}

export default List;
