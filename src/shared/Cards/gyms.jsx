import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Gym from './gym';

const Gyms = ({ gyms }) => {
	return (
		<main style={{ margin: '4em 0' }}>
			<Grid container justify='center' spacing={4}>
				{gyms.map((gym) => (
					<Grid item key={gym.id} xs={12} sm={6} md={4} lg={3}>
						<Gym gym={gym} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

const mapStateToProps = (state) => ({
	gyms: state.reducer.userList.owners,
});

export default connect(mapStateToProps)(Gyms);
