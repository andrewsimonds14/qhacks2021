import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from '@material-ui/core';
import useStyles from './gyms.styles.js';

const Gym = ({ gym }) => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image={gym.img} title={gym.name} />
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant='h5' gutterBottom>
						{gym.name}
					</Typography>
					<Typography variant='h5' gutterBottom>
						{gym.price}
					</Typography>
				</div>
				<Typography variant='body2' color='textSecondary'>
					{gym.des}
				</Typography>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton aria-label='Add to Cart'></IconButton>
			</CardActions>
		</Card>
	);
};

export default Gym;
