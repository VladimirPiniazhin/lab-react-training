import React from 'react';

function Greetings(props) {
    
function greeting() {
    if (props.lang === 'de') {
        return 'Hallo';
    } else if (props.lang === 'fr') {
        return 'Bonjour';
    } else if (props.lang === 'es') {
        return 'Hola';
    } else {
        return 'Hello';
    }
}
    
    return (
        <div className='box inbox'>{greeting()} {props.children}</div>
    )
}

export default Greetings;