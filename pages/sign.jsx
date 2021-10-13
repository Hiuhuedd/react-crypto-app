import  { useState } from "react";
import { Grid,  Avatar, Typography, TextField,  } from '@material-ui/core'
import { Person} from "@material-ui/icons";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import styles from '../styles/sign.module.css'

const Signup = () => {
    const [switchToggled, setSwitchToggled] = useState(false)


    const handleToggle=()=>{
        switchToggled? setSwitchToggled(false):setSwitchToggled(true)
        console.log(switchToggled);
    }


    return (
    
    <div className={styles.body}>


        <div className={styles.customShape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={switchToggled?styles.shapeFill:styles.switchedShapeFill}></path>
            </svg>
        </div>
        
        

        <Grid className={ styles.Container}>

            <div className={switchToggled ? styles.signUpContainer : styles.switchedSignUpContainer }>
                <form className={styles.form}>
                <Grid align='center'>
                        <Avatar className={styles.avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                        <h2 className={styles.headerStyle}>Create your account </h2>
                    <br />
                </Grid>
                    <Typography variant='caption' gutterBottom> Phone | Email </Typography>
                 
                        <TextField className={styles.input} fullWidth label='Email' placeholder="Enter your email" />
                        <TextField className={styles.input} fullWidth label='Password' placeholder="Enter your password" />
                        <TextField className={styles.input}fullWidth label='Confirm Password' placeholder="Confirm your password" />
                  <br />
                  <br />
                
                    <button className={styles.button} type='submit'  >Sign up
                    </button>
                    <br />
                        <span onClick={handleToggle} className={styles.signPrompt}> Sign in</span>
                </form>
                </div>

            <div className={switchToggled ? styles.signInContainer : styles.switchedSignInContainer}>
                    <form className={styles.form}>
                        <Grid align='center'>
                            <Avatar className={styles.avatarStyle}>
                                <Person />
                            </Avatar>
                            <h2 className={styles.headerStyle}>Sign in to account</h2>
                            <br />
                        </Grid>
                        <Typography variant='caption' gutterBottom> Phone | Email </Typography>

                        <TextField className={styles.input} fullWidth label='Email' placeholder="Enter your email" />
                        <TextField className={styles.input} fullWidth label='Password' placeholder="Enter your password" />
                    <br />
                    <br />

                        <button className={styles.button} type='submit'  >Sign in
                        </button>
                        <br />
                        <span onClick={handleToggle} className={styles.signPrompt}>new to Coinflex? Sign up now</span>
                    </form>
                </div>


            <div className={switchToggled ? styles.overlayContainer  : styles.switchedOverlayContainer }>
                <div className={switchToggled ? styles.switchedOverlay : styles.overlay }>
                        <div className={styles.bg}>
                        <div className={switchToggled ?styles.switchedOverlayLeft  :styles.overlayLeft }>
                                <h1>Welcome Back !</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className={styles.ghost} onClick={handleToggle}>Sign up</button>
                            </div>
                        <div className={switchToggled ? styles.switchedOverlayRight : styles.overlayRight  }>
                                <h1>Hello, Trader !</h1>
                                <p>Sign up with us and start trading crypto quick and easy</p>
                                <button className={styles.ghost} onClick={handleToggle}>Sign in</button>
                            </div>
                        </div>
                        </div>
                </div>
            
        </Grid>
    </div>
    )
}

export default Signup;