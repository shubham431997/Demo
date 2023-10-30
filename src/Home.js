import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/products');
      if (response.status === 200) {
        this.setState({ products: response.data });
      } else {
        console.error('Error fetching products');
      }
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        <section>
          <div className="container-fluid">
            <div className="row  justify-content-center align-content-center banner">
              <h1 className="display-2 text-capitalize">
              <span className="text-warning" style={{ textAlign: "center" }}>Wire Harness Manufacturer</span>

                
              </h1>
              <h4 className="font-weight-light font-italic text-dark">
                A Leading Custom Made Cable & Connectors Manufacturer & Supplier
                Making The Perfect Connection
              </h4>
            </div>
          </div>
        </section>
        <section className="bg-light p-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center mb-3">
                <h1 className="text-warning display-2">Products</h1>
                <p className="lead text-secondary text-capitalize">
                  We provide the best service for your products. We offer a variety of products to meet your needs.
                </p>
              </div>
            </div>
            <div className="row text-center">
              {products.map((product) => (
                <div key={product.id} className="col-lg-4 col-sm-10 mx-auto mb-5">
                  <img src={`http://localhost:4000/${product.image}`} alt="Product" width="100" height="100" />
                  <h1 className="text-secondary">{product.name}</h1>
                  <p className="text-muted my-4">{product.description}</p>
                  <a href="/" className="btn btn-outline-warning">
                    Show Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
