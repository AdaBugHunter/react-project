import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import Counter from './components/Counter';
import MessageToggle from './components/MessageToggle';

function App() {
  return (
    <div>
      <h1>React State Practice</h1>

      {/* State Components */}
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>Message Toggle</h2>
        <MessageToggle />
      </section>

      {/* UI Components */}
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