import React from 'react';
import { Grid } from '@material-ui/core';

import Gym from './gym';

const gyms = [
    {
        gid: 1, name: "Ronnie's Palace", price: "21.00", des: "LIGHT WEIGHT", img: "https://www.muscleandfitness.com/wp-content/uploads/2019/02/ronnie-coleman-squat-barbell-1109.jpg?quality=86&strip=all"
    },
    {
        gid: 2, name: "The Meat Factory", price: "19.00", des: "Beat ya", img: "https://p6r9a9v8.stackpathcdn.com/wp-content/uploads/2018/09/RoveFit-Katie-Rodgers-Cover-Photo.jpg"
    },
];

const Gyms = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {gyms.map((gym) => (
                    <Grid item key={gym.id} xs={12} sm={6} md={4} lg={3}>
                        <Gym gym={gym}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Gyms;