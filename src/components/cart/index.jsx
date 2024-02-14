import styles from './cart.module.css';

const Cart = () => {
  const items = [
    { id: 1, title: "Title", price: 547, quantity: 1 },
    { id: 2, title: "Title", price: 547, quantity: 1 },
    { id: 3, title: "Title", price: 547, quantity: 1 }
  ];

  return (
    <div className={styles["cart-modal"]}>
      <header>
        <h2>Shopping Bag</h2>
      </header>
      <div className={styles["cart-modal-body"]}>
        {items.map(item => (
          <div className={styles["cart-item"]} key={item.id}>
            <button>x</button>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <h4>{item.title}</h4>
            <div className={styles["quantity"]}>
              <button>+</button>
              {item.quantity}
              <button>-</button>
            </div>
            <p className={styles["price"]}>${item.price}</p>
          </div>
        ))}
      </div>
      <footer>
        <h3>Total: ${items.reduce((total, item) => total + item.price, 0)}</h3>
      </footer>
    </div>
  )
}

export default Cart;
