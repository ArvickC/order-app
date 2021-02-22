import React from 'react';

class ThankYou extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{color: 'green', fontFamily: "Lato", fontSize: 150, textAlign: 'center'}}>Thank you for shopping at localhost:3000</p>
            </div>
        );
    }
}

export default ThankYou;