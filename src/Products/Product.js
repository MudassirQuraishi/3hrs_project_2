const Product = ({ name, description, price }) => {
    // State for quantity

    return (
        <li className='product'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <label htmlFor='quantity'>Quantity:</label>
            <input type='number' id='quantity' />
            <button>Add to Cart</button>
        </li>
    );
};
export default Product;
