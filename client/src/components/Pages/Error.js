import React from 'react';

class Error extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{color: 'red', fontFamily: "Lato", fontSize: 200, textAlign: 'center'}}>404</p>
            </div>
        );
    }
}

export default Error;