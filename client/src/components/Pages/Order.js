import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const url = "http://localhost:4000";

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            product: '',
            amount: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post(url + '/orders/create-order', this.state)
            .then(res => {
                this.props.history.push('/thanks')
            });
    }

    handleFNameChange = (e) => {
        this.setState({fname: e.target.value})
    }

    handleLNameChange = (e) => {
        this.setState({lname: e.target.value})
    }

    handleProductChange = (e) => {
        this.setState({product: e.target.value})
    }

    handleAmountChange = (e) => {
        this.setState({amount: e.target.value})
    }

    render() {
        return (
            <div style={{width: '100%', textAlign: 'center', height: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField onChange={this.handleFNameChange} id="outlined-fname" label="First Name" variant="outlined" style={{marginTop: 12,}} InputProps={{style: {fontSize: 50}}} InputLabelProps={{style: {fontSize: 30}}}/>
                        <TextField onChange={this.handleLNameChange} id="outlined-lname" label="Last Name" variant="outlined" style={{marginTop: 12, marginLeft: 12}} InputProps={{style: {fontSize: 50}}} InputLabelProps={{style: {fontSize: 30}}}/>
                    </div>
                    <div>
                        <TextField onChange={this.handleProductChange} id="outlined-prod" label="Product" variant="outlined" style={{marginTop: 12}} InputProps={{style: {fontSize: 50}}} InputLabelProps={{style: {fontSize: 30}}}/>
                        <TextField onChange={this.handleAmountChange} id="outlined-amt" label="Amount" variant="outlined" style={{marginTop: 12, marginLeft: 12}} InputProps={{style: {fontSize: 50}}} InputLabelProps={{style: {fontSize: 30}}}/>
                    </div>
                    <div>
                        <Button id="submit-button" type="submit" variant="contained" color='secondary' style={{marginTop: 12, fontSize: 50}}>Submit</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Order;