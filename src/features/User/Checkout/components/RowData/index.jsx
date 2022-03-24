import { Grid } from '@material-ui/core';
import React from 'react';

RowData.propTypes = {

};

function RowData({ title, data }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Grid item xs={3}>
                <h1>{title}</h1>
            </Grid>
            <Grid item xs={7}>
                <h1>{data}</h1>
            </Grid>
        </div>
    );
}

export default RowData;