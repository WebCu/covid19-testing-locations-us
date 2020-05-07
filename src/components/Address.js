import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    link: {
        marginLeft: theme.spacing(1),
    },
}));

export default function Address(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2" gutterBottom>
                Address
            </Typography>
            {props.addresses.map(address => (
                <>
                    <Typography variant="body1" component="span">
                        <IconButton aria-label="share">
                            <RoomIcon />
                        </IconButton>
                        {address.address_1} {address.city} {address.state_province} {address.postal_code}
                        <Link
                            className={classes.link}
                            href={`https://www.google.com/maps/place/${address.address_1} ${address.city} ${address.state_province} ${address.postal_code}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on map
                        </Link>
                    </Typography>
                </>
            ))}

        </div>
    )
};
