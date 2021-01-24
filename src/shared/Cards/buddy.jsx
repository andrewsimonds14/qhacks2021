import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AwesomeButton } from 'react-awesome-button';
import useStyles from './gyms.styles.js';

const Buddy = ({ buddy }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}> 
            <CardMedia className={classes.media} image={buddy.img} title={buddy.name} />
            <CardContent>
                <div className ={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        Name: {buddy.name}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    Account Created: {buddy.dateAccountCreated}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Buddy;