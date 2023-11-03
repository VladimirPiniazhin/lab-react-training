import React from 'react';

class Random extends React.Component {
    render() {
        return (
            <div className='box inbox'>Random value between {this.props.min} and {this.props.max} =&gt; {this.result()}</div>
        )
    }
    result() {
        return Math.floor(Math.random() * (this.props.max - this.props.min) + this.props.min);
    }
}

export default Random;