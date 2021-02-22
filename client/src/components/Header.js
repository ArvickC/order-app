import React from 'react';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#2c2c2c', display: 'flex', flexDirection: 'row'}}>

                <h1 style={{color: "white", marginLeft: 20, fontFamily: 'Lato', flex: 1}}>Header</h1>
                <Button href="/order" style={{color: 'white', fontFamily: "Lato", fontSize: 25, marginRight: 20}}>Order</Button>
                <Button href="/about" style={{color: 'white', fontFamily: "Lato", fontSize: 25, marginRight: 20}}>About</Button>
                <Button href="/contact" style={{color: 'white', fontFamily: "Lato", fontSize: 25, marginRight: 20}}>Contact</Button>
                <Button href="/" style={{color: 'white', fontFamily: "Lato", fontSize: 25, marginRight: 20}}>Home</Button>
            </div>
        );
    }
}

export default Header;