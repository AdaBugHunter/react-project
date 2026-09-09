import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';

function App() {
  return (
    <div>
      <Header />

      <ProductCard
        title="Chocolate Cupcake"
        price="$6"
        category="Cupcake"
      />

      <ProductCard
        title="Vanilla Cupcake"
        price="$5"
        category="Cupcake"
      />

      <ProductCard
        title="Red Velvet Cake"
        price="$30"
        category="Cake"
      />
    </div>
  );
}

export default App;