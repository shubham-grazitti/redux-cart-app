import styles from './card.module.css';

const Card = ({ product }) => {
  const { thumbnail, title, brand, description, price, discountPercentage } = product;

  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={styles['card-body']}>
        <p className={styles.tag}>{brand}</p>
        <h3>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <p className={styles.price}>${price}<span>({discountPercentage}% off)</span></p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
