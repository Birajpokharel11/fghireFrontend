import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Avatar, Box, Typography, Chip, Grid } from '@material-ui/core';
import BusinessSharpIcon from '@material-ui/icons/BusinessSharp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import ScheduleSharpIcon from '@material-ui/icons/ScheduleSharp';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '200ch',
    backgroundColor: theme.palette.background.paper
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  listItem: {
    padding: '22px 30px'
  },
  TypographyMargin: {
    marginLeft: '3%'
  },
  IcButton: {
    padding: '0px'
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem style={{ padding: '20px 30px' }}>
        <br />
        <WorkOutlineOutlinedIcon color="primary" />
        <Typography className={classes.TypographyMargin} variant="h4">
          Bookmarked Jobs
        </Typography>
        <br />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Barista and Cashier"
          secondary={
            <>
              <Box display="flex" justifyContent="flex-start">
                <Grid container>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<BusinessSharpIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<LocationOnOutlinedIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<WorkOutlineOutlinedIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<ScheduleSharpIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Box display="flex" justifyContent="flex-start">
                <Grid container>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<BusinessSharpIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<LocationOnOutlinedIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<WorkOutlineOutlinedIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<ScheduleSharpIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Box display="flex" justifyContent="flex-start">
                <Grid container>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<BusinessSharpIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<LocationOnOutlinedIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<WorkOutlineOutlinedIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Chip
                        icon={<ScheduleSharpIcon />}
                        label="coffee"
                        variant="outlined"
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </>
          }
        />
      </ListItem>
    </List>
  );
}
