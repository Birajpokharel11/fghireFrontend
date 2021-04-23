import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Avatar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import ReactCountryFlag from 'react-country-flag';

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

export default function Freelancers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem style={{ padding: '20px 30px' }}>
        <br />
        <AcUnitIcon color="primary" />
        <Typography className={classes.TypographyMargin} variant="h4">
          Bookmarked Freelancers
        </Typography>
        <br />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Typography variant="h4">
                Keith Peterson
                <ReactCountryFlag
                  className="emojiFlag"
                  title="United kingdom"
                  countryCode="GB"
                  svg
                  style={{
                    fontSize: '1.5em',
                    marginLeft: '1%'
                    // lineHeight: '2em'
                  }}
                  aria-label="United kingdom"
                />
              </Typography>
            </>
          }
          secondary={
            <>
              IOS + Node Dev <br />{' '}
              <Rating name="size-medium" defaultValue={2} />
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
          primary={
            <>
              <Typography variant="h4">
                David Peterson
                <ReactCountryFlag
                  className="emojiFlag"
                  title="United kingdom"
                  countryCode="US"
                  svg
                  style={{
                    fontSize: '1.5em',
                    marginLeft: '1%'
                  }}
                  aria-label="United kingdom"
                />
              </Typography>
            </>
          }
          secondary={
            <>
              IOS + Node Dev <br />{' '}
              <Rating name="size-medium" defaultValue={2} />
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
          primary={
            <>
              <Typography variant="h4">
                Marcin Kowalski
                <ReactCountryFlag
                  className="emojiFlag"
                  title="United kingdom"
                  countryCode="GB"
                  svg
                  style={{
                    fontSize: '1.5em',
                    marginLeft: '1%'
                    // lineHeight: '2em'
                  }}
                  aria-label="United kingdom"
                />
              </Typography>
            </>
          }
          secondary={
            <>
              IOS + Node Dev <br />{' '}
              <Rating name="size-medium" defaultValue={2} />
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
