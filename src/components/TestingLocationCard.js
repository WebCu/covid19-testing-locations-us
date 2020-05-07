import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Address from "./Address";
import Schedule from "./Schedule";
import Phone from "./Phone";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        flexGrow: 1,
    },
}));

export default function TestingLocationCard(props) {
    const classes = useStyles();
    const { name, description, phones, physical_address, regular_schedule } = props.location;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Typography variant="h4" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {description}
                        </Typography>
                        <Address addresses={physical_address} />
                        <Phone phones={phones} />
                    </Grid>
                    <Grid item xs={4}>
                        <Schedule schedule={regular_schedule} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};