import './App.css';
import { useEffect, useState } from 'react';
import NavHeader from './components/NavHeader';
import ErrorComponent from './components/ErrorComponent';
import Card from './components/Card';

function App() {

  const [products, setProducts] = useState([]);

  
  function getProducts() {
    fetch('https://pg-delsur.herokuapp.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  //componentDidMount
  useEffect(() => {
    getProducts()
  }, []);

 console.log(products);
 console.log("Tamaño array es: ", products.length);

  return (
    <>
    <NavHeader />
      <div className="container-card">
            {
                products.length > 0
                ? products?.map(elem => {
                    return (
                        <div className="item-details">
                          <Card
                            productName={elem.name}
                            imageUrl={elem.image}
                            description={elem.description}
                            capacity={elem.capacity}
                            cost={elem.cost}
                            key={elem.id}
                          ></Card>
                        </div>
                    );
                }) 
                : <ErrorComponent message="No results found :(" />
            }
      </div>
    </>
  );
}

export default App;
