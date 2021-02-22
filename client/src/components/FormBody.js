import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Arvick"
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onButtonClick(this.state.name);
    }

    changeHandle = (e) => {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={this.state.name} onChange={this.changeHandle}/>
                <Button variant="outlined" type="submit">Submit</Button>
            </form>
        );
    }
}

export default FormBody;