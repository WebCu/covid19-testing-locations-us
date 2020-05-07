import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TestingLocationCard from "./TestingLocationCard";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function TestingLocations() {
  const classes = useStyles();
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");

  function handleStateChange(e) {
    setState(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  //   Note: the empty deps array [] means
  //   this useEffect will run once
  //   similar to componentDidMount()
  useEffect(() => {
    fetch("https://covidtracking.com/api/states/info")
      .then(res => res.json())
      .then(
        result => {
          setStates(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {}
      );
  }, []);

  useEffect(() => {
    if ("" === state) {
      setLocations([]);
      return;
    }
    fetch(
      "https://covid-19-testing.github.io/locations/" + state + "/complete.json"
    )
      .then(res => res.json())
      .then(
        result => {
          setLocations(result);
          setLocation("");
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {}
      );
  }, [state]);

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h2" component="h1" gutterBottom>
          COVID-19 Testing Locations in US
        </Typography>
        <form className={classes.form} noValidate>
          <FormControl className={classes.formControl}>
            <InputLabel id="states-label">State</InputLabel>
            <Select
              labelId="states-label"
              id="states-select"
              value={state}
              onChange={handleStateChange}
            >
              {states.map(state => (
                <MenuItem
                  key={state.name}
                  value={state.name.toLowerCase().replace(/ /g, "-")}
                >
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="locations-label">Testing Location</InputLabel>
            <Select
              labelId="locations-label"
              id="locations-select"
              value={location}
              onChange={handleLocationChange}
            >
              {locations.map(location => (
                <MenuItem key={location.id} value={location.id - 1}>
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
        {"" !== location && (
          <TestingLocationCard location={locations[location]} />
        )}
      </div>
    </Container>
  );
}
