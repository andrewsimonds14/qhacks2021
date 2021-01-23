import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AwesomeButton } from 'react-awesome-button';
import useStyles from './gyms.styles.js';

const Session = ({ session }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}> 
            <CardMedia className={classes.media} image={session.img} title={session.name} />
            <CardContent>
                <div className ={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {session.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {session.price}
                    </Typography>
                </div>
                <div className ={classes.cardContent}>
                <Typography variant="body2" color="textSecondary">
                    Date: {session.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Time: {session.startTime}
                </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    Duration: {session.timeDuration}mins
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Session;
