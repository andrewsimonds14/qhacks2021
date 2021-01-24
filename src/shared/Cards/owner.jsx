import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AwesomeButton } from 'react-awesome-button';
import useStyles from './gyms.styles.js';

const Owner = ({ owner }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}> 
            <CardMedia className={classes.media} image={owner.img} title={owner.name} />
            <CardContent>
                <div className ={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        Name: {owner.name}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    Gym Name: {owner.gymName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Account Created: {owner.dateAccountCreated}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Charging price per hour: ${owner.pricePerHour}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Owner;