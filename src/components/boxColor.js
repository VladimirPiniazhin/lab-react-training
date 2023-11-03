import React from 'react';

function BoxColor (props) {

    
    const rgbToHex = (r, g, b) => {
        const red = r.toString(16).padStart(2, '0');
        const green = g.toString(16).padStart(2, '0');
        const blue = b.toString(16).padStart(2, '0');
        
        return `#${red}${green}${blue}`;
    }
    const hex = rgbToHex(props.r, props.g, props.b);
    
    return (
        <div className='box color' style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}>
                rgb &#40; {props.r}, {props.g}, {props.b} &#41;
                <br/>
            {hex}
        </div>
    )

}

export default BoxColor;