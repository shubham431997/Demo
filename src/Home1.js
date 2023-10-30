import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; 
import 'bootstrap/dist/css/bootstrap.css';

class Home1 extends Component {
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
      const response = await axios.get('http://localhost:9999/products');
      if (response.data.status === 'success') {
        this.setState({ events: response.data.data });
      } else {
        console.error('Error fetching events');
      }
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        <Navbar /> 
        <section>
          <div className="container-fluid">
            <div className="row  justify-content-center align-content-center banner">
            <h1 className="display-2 text-capitalize">
                      <span className="text-warning">Event Management </span>
                      <span className="text-primary"> Website</span>
                    </h1>
                    <h4 className="font-weight-light font-italic text-dark">
                         Every event has beautiful story, but yours should be unique.
                    </h4>
            </div>
          </div>
        </section>
        <section className="bg-light p-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center mb-3">
                <h1 className="text-warning display-2">Services</h1>
                <p className="lead text-secondary text-capitalize">
                  we provide the best service for your events. We organize all kinds of events for you. Where your enjoyment is our priority.
                </p>
              </div>
            </div>
            <div className="row text-center">
              {products.map((product) => (
                <div key={product.id} className="col-lg-4 col-sm-10 mx-auto mb-5">
                  <img src={`http://localhost:9999/${product.image}`} alt="Event" width="100" height="100" />
                  <h1 className="text-secondary">{product.name}</h1>
                  <p className="text-muted my-4">{product.description}</p>
                  <a href="#" className="btn btn-outline-warning">
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

export default Home1;