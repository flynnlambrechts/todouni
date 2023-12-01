import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import SubjectBlock from "../components/SubjectBlock"

function GridView() {

    return (<Grid container spacing={2}>
        <SubjectBlock />
        <SubjectBlock />
        <SubjectBlock />
        <SubjectBlock />
    </Grid>);
}

export default GridView;
