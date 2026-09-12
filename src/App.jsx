import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProductList from './components/ProductList.jsx';
import CourseList from './components/CourseList.jsx';
import Counter from './components/Counter';
import MessageToggle from './components/MessageToggle';
import NameInput from './components/NameInput';

function App() {
  const handleNameChange = (name) => {
    console.log('Name changed:', name);
  };

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

      <section>
        <h2>Name Input</h2>
        <NameInput onNameChange={handleNameChange} onChange={handleNameChange} />
      </section>

      {/* UI Components */}
      <Header />

      {/* Manual ProductCards*/}
      <section>
        <h2>Manual Product Cards</h2>
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
      </section>

      {/* ProductList*/}
      <section>
        <h2>Product List</h2>
        <ProductList />
      </section>

      {/* CourseList*/}
      <section>
        <h2>Course List</h2>
        <CourseList />
      </section>
    </div>
  );
}

export default App;