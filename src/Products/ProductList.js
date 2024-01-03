import Product from "./Product";
const Products = () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Description of Product 1",
            price: 19.99,
            quantity: 5,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description of Product 2",
            price: 29.99,
            quantity: 8,
        },
        // Add more products as needed
    ];
    return (
        <ul className='products'>
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
        </ul>
    );
};
export default Products;
