import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AwesomeButton } from 'react-awesome-button';
import useStyles from './gyms.styles.js';

const Booking = ({ booking }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}> 
            <CardMedia className={classes.media} image={booking.img} title={booking.gym} />
            <CardContent>
                <div className ={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {booking.gym}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {booking.price}
                    </Typography>
                </div>
                <div className ={classes.cardContent}>
                <Typography variant="body2" color="textSecondary">
                    Date: {booking.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Time: {booking.startTime}
                </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    Duration: {booking.timeDuration}mins
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Booking;
