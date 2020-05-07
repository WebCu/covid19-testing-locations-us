import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const weekdays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));

export default function Schedule(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                Schedule
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Day</TableCell>
                            <TableCell>Hours</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.schedule.map((day) => (
                            <TableRow key={day.weekday}>
                                <TableCell component="th" scope="row">
                                    {weekdays[day.weekday]}
                                </TableCell>
                                <TableCell>{day.opens_at} - {day.closes_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};
