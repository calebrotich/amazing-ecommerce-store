import React, { Fragment } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { products } from '../data/inventory.json';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ItemDetails from './details';
import '../App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: 'white',
      border: '1px solid white',
      color: '#66CCF5',
      fontWeight: '700',
      '&:hover': {
        backgroundColor: '#66CCF5',
        color: 'white'
      }
    }
  }),
);

const  CarouselItems = () => {
  const [selectedItem, setSelectedItem] = React.useState(products[0]);
  const classes = useStyles();

  return (
    <Fragment>
 <Slider autoplay={1000}>
    {products.map((item, index) => {
      let item_image = item.image_url
      return (
      <div
       key={index}
       >
        <Grid className="CarouselContent" container>
          <Grid item xs={4}  className="CarouselLeft">
          <Paper elevation={0}>
            <img src={require(`../images/${item_image}`)} alt="No item" />
          </Paper>
        </Grid>
        <Grid container xs={8} className="CarouselRight">
          <Grid item xs={12}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend" variant="h4">{item.name}</Typography>
              <Rating value={item.rating} readOnly />
            </Box>
          </Grid>
        </Grid>
        <Grid container className="ButtonContainer">
          <Button
           variant="contained"
           color="primary"
           className={classes.button}
           onClick={() => {
            setSelectedItem(item);
            document.getElementById('detail')
              .scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }}
          >
            Details
          </Button>
        </Grid>
        </Grid>
    </div>
    )})}
  </Slider>
  <div className="DetailHolder" id="detail">
    <ItemDetails product={selectedItem} />
  </div>
  </Fragment>
  );
}

export  default  CarouselItems;
