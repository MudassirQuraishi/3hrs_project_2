const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access form data using refs or controlled components
    };

    return (
        <div className='form-section'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Input 1' />
                <input type='text' placeholder='Input 2' />
                <input type='text' placeholder='Input 3' />
                <input type='text' placeholder='Input 4' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};
export default AddProduct;
