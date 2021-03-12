import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, Divider, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    width: '100%'
  },
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%' // 16:9
  // },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: blue[500]
  },
  divider: {
    height: 20,
    margin: '0px 15px'
  },
  skillbox: {
    backgroundColor: '#F3F9FC',
    justify: 'center',
    width: 100,
    // padding: '2px 8px',
    marginRight: 10
  }
}));

export default function CardContainer(props) {
  const { title, skills } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Posted by: IGP User"
        subheader="October 19, 2021"
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography
              variant="h3"
              color="primary"
              style={{ fontWeight: 800 }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item style={{ display: 'flex' }}>
            <Typography variant="body2" color="textSecondary" component="p">
              Deadline Date: 2022-01-01
            </Typography>
            <Divider className={classes.divider} orientation="vertical" />
            <Typography variant="body2" color="textSecondary" component="p">
              Budget: $1000
            </Typography>
          </Grid>
          <Grid item style={{ display: 'flex' }}>
            {skills.map((skill) => (
              <Paper key={skill.id} className={classes.skillbox} elevation={0}>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  align="center"
                >
                  {skill.name}
                </Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="outlined"
          color="primary"
          style={{ width: 100, margin: '0 10px 0 7px' }}
        >
          Apply
        </Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: 'red' }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontWeight: 600 }}>
            Description:
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            perspiciatis?
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            sequi velit eum delectus asperiores numquam quidem facilis
            cupiditate amet nisi ad debitis aperiam autem consequatur excepturi
            natus quia facere adipisci atque molestias. Nulla cumque cupiditate
            numquam saepe, natus modi. Aperiam.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            minima necessitatibus quam nesciunt tempora inventore laboriosam,
            amet possimus. Ad, veniam?
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

CardContainer.propTypes = {
  title: PropTypes.string,
  skills: PropTypes.array
};
