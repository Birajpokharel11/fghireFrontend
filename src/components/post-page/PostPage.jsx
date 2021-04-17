import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';

import DatePicker from './DatePicker';
import AttachFile from './AttachFile';
import Validation from './Validation';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginLeft: '20%',
    marginRight: '30%',
    marginTop: '6%'
  },
  paper: {
    padding: '3%'
  }
}));

const PostPage = () => {
  const classes = useStyles();
  const skillName = ['React', 'Angular', 'Photoshop', 'MongoDB'];

  const [category, setCategory] = React.useState('');
  const [subCategory, setSubCategory] = React.useState('');

  const [skill, setSkill] = React.useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const subCatChange = (event) => {
    setSubCategory(event.target.value);
  };

  const skillChange = (event) => {
    setSkill(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={3}>
        <Grid container direction="column" spacing={5}>
          <Grid item xs="12">
            <Paper elevation={0}>
              <Typography variant="h2" gutterBottom="true">
                Post a Job
              </Typography>
            </Paper>

            <Grid item xs="12">
              <Paper elevation={0}>
                <Typography>Project Title</Typography>
                <TextField
                  variant="outlined"
                  multiline
                  placeholder="eg:Fullstack Developer"
                  size="small"
                  fullWidth="true"
                  margin="dense"
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={0}>
              <Typography>Category</Typography>
              <FormControl
                className={classes.formControl}
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth="true"
              >
                <Select value={category} onChange={handleChange}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Front end designer</MenuItem>
                  <MenuItem value={20}>Fullstack developer</MenuItem>
                  <MenuItem value={30}>DevOps</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={0}>
              <Typography>Sub Category</Typography>
              <FormControl
                className={classes.formControl}
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth="true"
              >
                <Select value={subCategory} onChange={subCatChange}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Category A</MenuItem>
                  <MenuItem value={2}>Category B</MenuItem>
                  <MenuItem value={3}>Category C</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={0}>
              <Typography>Project Description</Typography>
              <TextField
                variant="outlined"
                multiline
                rows={6}
                placeholder="Enter description here"
                fullWidth="true"
                margin="dense"
              />
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={0}>
              <Typography>Required Skills</Typography>

              <FormControl size="small" margin="dense" fullWidth="true">
                <Select
                  multiple
                  value={skill}
                  onChange={skillChange}
                  variant="outlined"
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )}
                >
                  {skillName.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item xs="12" sm="4">
              <Paper elevation={0}>
                <Typography>Budget(USD)</Typography>
                <TextField
                  variant="outlined"
                  fullWidth="True"
                  margin="dense"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    )
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs="12" sm="4">
              <Paper elevation={0}>
                <Typography>Project Duration(In Days)</Typography>
                <TextField
                  variant="outlined"
                  fullWidth="True"
                  margin="dense"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">days</InputAdornment>
                    )
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs="12" sm="4">
              <Paper elevation={0}>
                <Typography>Bidding Deadline</Typography>
                <DatePicker />
              </Paper>
            </Grid>
          </Grid>
          <AttachFile />
        </Grid>
        <Grid container direction="column" spacing={5}>
          <Grid item xs="12">
            <Validation />
          </Grid>

          <Grid item xs="12">
            <Button
              variant="contained"
              color="primary"
              fullWidth="True"
              disableElevation
              disableRipple="True"
            >
              Post Project
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PostPage;
