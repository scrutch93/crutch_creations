import React from 'react';
import { Grid } from '@material-ui/core'

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Sweaters', description: "Awko Taco Sweater", price: '$30', image: 'https://mockup-api.teespring.com/v3/image/8M0LBlcftn9ftOxgnGQGQ1gnUtw/800/800.jpg'},
    { id: 2, name: 'T-shirts', description: "Awko Taco T-shirts", price: '$10', image: 'https://mockup-api.teespring.com/v3/image/OZ8X3Bj5gh_NxxQOjM1dpYwJi44/800/800.jpg'},
    

];

const Products = ()=> {
    return(
    <main>
        <Grid container justify ="center" spacing={4}>
            {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>

                        <Product product={product} />
                    </Grid>
            ))}


        </Grid>

    </main>
    )
    

}


export default Products;