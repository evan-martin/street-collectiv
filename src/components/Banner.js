import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
  },
});

export default function Banner() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://www.navinsarmaphotography.com/wp-content/uploads/2014/10/navin-sarma-Blue-Cherry-Blossom-Man-and-Nature-Moon-Panorama-sunrise-Twilight-Washington-DC.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}
