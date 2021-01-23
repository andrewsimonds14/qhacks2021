import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Booking from './booking';

const Bookings = ({ bookings }) => {
	return (
		<main>
			<Grid container justify='center' spacing={4}>
				{bookings.map((booking) => (
					<Grid item key={booking.bid} xs={12} sm={6} md={4} lg={3}>
						<Booking booking={booking} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

const mapStateToProps = (state) => ({
	bookings: state.reducer.userList.buddies[0].pastBookings,
});

export default connect(mapStateToProps)(Bookings);
