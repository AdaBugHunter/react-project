import { useState, useEffect } from 'react';

function ProductCrud() {
  // ============================
  // STATES
  // ============================
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Form state (Create + Update dono ke liye)
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });

  // Edit mode ke liye (null = create mode, warna id = update mode)
  const [editingId, setEditingId] = useState(null);

  // ============================
  // READ: Data fetch karo
  // ============================
  useEffect(() => {
    setLoading(true);
    fetch('/products.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load products');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ============================
  // Form input change handler
  // ============================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ============================
  // Form reset
  // ============================
  const resetForm = () => {
    setFormData({ name: '', category: '', price: '', quantity: '' });
    setEditingId(null);
  };

  // ============================
  // CREATE + UPDATE: Form submit
  // ============================
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.category.trim()) return;
    if (!formData.price || Number(formData.price) <= 0) return;
    if (formData.quantity === '' || Number(formData.quantity) < 0) return;

    if (editingId !== null) {
      // ---------- UPDATE ----------
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingId
            ? {
                ...product,
                name: formData.name,
                category: { ...product.category, name: formData.category },
                price: { ...product.price, amount: Number(formData.price) },
                stock: {
                  ...product.stock,
                  quantity: Number(formData.quantity),
                  status:
                    Number(formData.quantity) === 0
                      ? 'out-of-stock'
                      : Number(formData.quantity) < 5
                      ? 'low-stock'
                      : 'available',
                },
              }
            : product
        )
      );
    } else {
      // ---------- CREATE ----------
      const newProduct = {
        id: Date.now(), // unique id
        name: formData.name,
        category: { id: 1, name: formData.category },
        price: { amount: Number(formData.price), currency: 'USD' },
        stock: {
          quantity: Number(formData.quantity),
          status:
            Number(formData.quantity) === 0
              ? 'out-of-stock'
              : Number(formData.quantity) < 5
              ? 'low-stock'
              : 'available',
        },
        supplier: { name: 'Sweet House', city: 'Lahore' },
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    resetForm();
  };

  // ============================
  // EDIT: Form mein values load karo
  // ============================
  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      category: product.category.name,
      price: product.price.amount,
      quantity: product.stock.quantity,
    });
  };

  // ============================
  // DELETE: Ek product hatao
  // ============================
  const handleDelete = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  // ============================
  // RENDER: Loading
  // ============================
  if (loading) return <p>Loading...</p>;

  // RENDER: Error
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  // ============================
  // RENDER: Main UI
  // ============================
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Product CRUD Manager</h1>

      {/* ---------- FORM ---------- */}
      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid #ccc',
          padding: '15px',
          marginBottom: '20px',
          borderRadius: '8px',
        }}
      >
        <h3>{editingId !== null ? 'Edit Product' : 'Add New Product'}</h3>

        <input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId !== null ? 'Update Product' : 'Add Product'}
        </button>

        {editingId !== null && (
          <button type="button" onClick={resetForm} style={{ marginLeft: '8px' }}>
            Cancel
          </button>
        )}
      </form>

      {/* ---------- PRODUCT LIST ---------- */}
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ddd',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '8px',
              }}
            >
              <h3>{product.name}</h3>
              <p>Category: {product.category.name}</p>
              <p>
                Price: {product.price.amount} {product.price.currency}
              </p>
              <p>Quantity: {product.stock.quantity}</p>
              <p>Status: {product.stock.status}</p>
              <p>
                Supplier: {product.supplier.name} ({product.supplier.city})
              </p>

              <button onClick={() => handleEdit(product)}>Edit</button>
              <button
                onClick={() => handleDelete(product.id)}
                style={{ marginLeft: '8px', color: 'red' }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCrud;