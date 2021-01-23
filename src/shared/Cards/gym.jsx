import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AwesomeButton } from 'react-awesome-button';
import useStyles from './gyms.styles.js';

const Gym = ({ gym }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}> 
            <CardMedia className={classes.media} image={gym.img} title={gym.gymName} />
            <CardContent>
                <div className ={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {gym.gymName}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {gym.pricePerHour}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {gym.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Gym;
