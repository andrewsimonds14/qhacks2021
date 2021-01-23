import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Session from './session';

const Sessions = ({sessions}) => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {sessions.map((session) => (
                    <Grid item key={session.bid} xs={12} sm={6} md={4} lg={3}>
                        <Session session={session}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

const mapStateToProps = (state) => ({
	sessions: state.reducer.userList.owners[0].bookings,
});

export default connect(mapStateToProps)(Sessions);