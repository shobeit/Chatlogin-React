import React from 'react';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';
const firebase = require ("firebase");

class SignupComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            passwordConfirmation: null,
            signupError: ''

        };
    }

    render() {

        const { classes } = this.props;

        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        Sign Up!
                    </Typography>
                    <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-email-input'> Enter Your Email</InputLabel>
                            <Input autoComplete='email' onChange={(e) => this.userTyping('email', e)} 
                            autoFocus id='signup-email-input'></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-input'> Create A Password</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('password', e)} 
                            autoFocus id='signup-password-input'></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-confirmation-input'>Verify Password</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('passwordConfirmation', e)} 
                            autoFocus id='signup-password-confirmation-input'></Input>
                        </FormControl>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                    </form>
                    {
                        this.state.signupError ?
                        <Typography className={classes.errorText} component='h5' variant='h6'>
                            {this.state.signupError}
                        </Typography> :
                        null
                    }
                    <Typography component='h5' variant='h6' className={classes.hasAccountHeader}>Already Have An Account?</Typography>
                    <Link className={classes.logInLink} to='/login'>Login</Link>
                </Paper>
            </main>

        );
    }

    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({ email: e.target.value });
                break;
            case 'password':
                this.setState({ password: e.target.value });
                break;
            case 'passwordConfirmation':
                this.setState({ passwordConfirmation: e.target.value });
                break;
            
            default:
                break;
        }
    }

    submitSignup = (e) => {
        console.log('submitting');
    }

}

export default withStyles(styles)(SignupComponent);