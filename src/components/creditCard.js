import React from 'react';
import visa from '../img/visa.png';
import masterCard from './master.png';
import MasterCard from './svgFormater';

function CreditCard (props) {
    // 
    const type = () => {

        if (props.type === 'Visa') {
          return <img src={visa}/>;
        } else {
            return <MasterCard/>;
        }
    };
    
    const number = () => {
        const number = props.number;
        const lastFour = number.slice(-4);
    
        return `•••• •••• •••• ${lastFour}`;
    }

    const expiration = () => {
        const month = props.expirationMonth.toString().padStart(2, '0');
        const year = props.expirationYear.toString().slice(-2);
    
        return `Expires ${month}/${year}`;
    }

        return (
            <div className='box CreditCard' style={{ backgroundColor: `#${props.bgColor}`, color: `${props.color}` }}>
                <div className='type'>{type()}</div>
                <div className='number'>{number()}</div>
                <div className='expires-bank'><span>{expiration()}</span><span>{props.bank}</span></div>
                <div className='owner'>{props.owner}</div>
            </div>
        ) 
    }


// import visaImage from '../img/visa.png';
// function CreditCard() {
//   return (
//     <div>
//       <p>jjj</p>
//       <img  src={visaImage} />
//     </div>
//   )
// }
export default CreditCard;