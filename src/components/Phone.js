import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    link: {
        marginLeft: theme.spacing(1),
    }
}));

export default function Phone(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2" gutterBottom>
                Phone numbers
            </Typography>
            {props.phones.map(phone => (
                <Typography variant="body1" component="p">
                    <IconButton aria-label="share">
                        <PhoneIcon />
                    </IconButton>
                    {phone.number}
                    <Link className={classes.link} href={`tel:${phone.number}`}>
                        Call
                    </Link>
                </Typography>
            ))}
        </div>
    )
};
