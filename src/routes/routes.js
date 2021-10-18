import { addnewProduct,
        getProducts,
        getProductWithID,
        updateProduct } from '../controllers/controllers';

const routes = (app) => {
  app.route('/products')
    .get(getProducts)

    // Post endpoint
    .post(addnewProduct);

  app.route('/products/:ProductID')
    // get a specific Product
    .get(getProductWithID);

  app.route('products/:ProductID')
    // update a specific Product
    .put(updateProduct);

  app.route('products/:ProductID')
    // delete a specific Product
    .delete(deleteProduct);
  }

export default routes;