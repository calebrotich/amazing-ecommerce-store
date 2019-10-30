import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Paper, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../App.css';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    button: {
      backgroundColor: '#66CCF5',
      border: '1px solid #66CCF5',
      '&:hover': {
        backgroundColor: '#FFFFFF',
        border: '1px solid #66CCF5',
        color: '#66CCF5'
      }
    },
    box: {

    }
  }),
);

const ItemDetails = ({ product }) => {
const classes = useStyles();
const [price, setPrice] = useState(product.prices[1].price);


useEffect(() => {
  setPrice(product.prices[1].price)
}, [product.prices])

const handleChange = (event) => {
  setPrice(event.target.value);
};

  return (
    <Paper style={{padding: '50px'}}>
    <Grid container>
      <Grid item xs={5}>
        <img src={require(`../images/${product.image_url}`)} alt="shoes" />
      </Grid>
      <Grid item xs={7}>
        <table>
          <thead>
          <tr>
            <td>
              <Typography variant="h4">
                {product.name}
              </Typography>
            </td>
          </tr>
          <tr>
          <td>
                <Rating value={product.rating} readOnly />
            </td>
          </tr>
          </thead>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
              <FormControl>
                <NativeSelect
                  value={price}
                  onChange={handleChange}
                  input={<BootstrapInput name="price" />}
                >
                  {
                    product.prices.map((price) => (
                      <option value={price.price}>{price.currency}</option>
                    ))
                  }
              </NativeSelect>
             </FormControl>
              </td>
              <td><Typography variant="h5">{price}</Typography></td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
          <tr>
              <td className="DescriptionHolder">
                {product.description}
              </td>
            </tr>
            <tr>
            <td className="CartButtonHolder">
              <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        ADD TO CART
      </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
    </Paper>
  );
}

export default ItemDetails;
