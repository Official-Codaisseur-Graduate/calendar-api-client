import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Home extends React.Component{

    render(){
        const styles = {
            root: {
              width: '100%',
              maxWidth: 500,
            },
            bg:{
                backgroundColor: '#8BAADA',
                color: 'white'
            }
          };

        return(
            <div>
                <div styles={styles.bg}> 
                    <Typography component="h2" variant="h2" gutterBottom>
                        <u> Welcome to Calendar App</u>   
                    </Typography>
                    <br></br>
                    <div>
                        <Button variant="contained" color="primary" type='submit'> <Link to='/signup'>signup</Link></Button>
                    </div><br></br>
                    <div>
                        <Button variant="contained" color="primary" type='submit'> <Link to='/login'>Login</Link></Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;