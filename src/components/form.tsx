import  { useState, } from 'react';
import { Link } from 'react-router-dom';

// Define an interface for the product details
interface ProductDetail {
  product: string;
  quantity: string;
  price: string;
  description: string;
}

const Form = () => {
  // Initialize productDetails state as an array of ProductDetail objects
  const [productDetails, setProductDetails] = useState<ProductDetail[]>([
    { product: '', quantity: '', price: '', description: '' }
  ]);

  // Function to add a new row of product details
  const addRow = () => {
    setProductDetails([
      ...productDetails,
      { product: '', quantity: '', price: '', description: '' }
    ]);
  };

  // Function to handle changes in product details inputs
  const handleProductChange = (index: number, field: keyof ProductDetail, value: string) => {
    const updatedDetails = [...productDetails];
    updatedDetails[index][field] = value;
    setProductDetails(updatedDetails);
  };
  return (
   <>
   <header className="bg-teal-900 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
			<img src="/brand.PNG"/>
		</div>
        {/* You can add more elements or links to the right side if needed */}
        <div className="flex flex-col">
          {/* Example of additional links or buttons on the right side */}
          <p  className="text-white hover:text-gray-200">+250 788 991 582</p>
		  <p className="text-white hover:text-gray-200">yourgranted@gmail.com</p>
          <p className="text-white hover:text-gray-200">Kigali - Nyarugenge</p>
        </div>
      </header>

	  <h1 className="text-3xl font-bold text-center text-teal-900 pt-10">INVOICE FORM</h1>
   <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
	<form  action="" className="container  flex flex-col mx-auto space-y-12">
	<fieldset className="grid grid-cols-4 dark:bg-gray-400 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-4 col-span-full lg:col-span-1">
				<p className="font-medium">Customer Details</p>
				<br/>
				<p className="font-medium">Invoice Details</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">Name</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 font-medium dark:text-teal-900 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Address</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 font-medium dark:text-teal-900  focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">City</label>
					<input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 font-medium dark:text-teal-900 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">Invoice No</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 font-medium dark:text-teal-900 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Date</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 font-medium dark:text-teal-900 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				
			</div>
		</fieldset>
		<div className="space-y-2 col-span-full lg:col-span-1 text-center text-4xl font-bold text-teal-900">
				<p className="font-medium">Product Details</p>
			</div>
		{productDetails.map((detail, index) => (
			
            <fieldset key={index} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 dark:bg-gray-400">
         
              <div className="col-span-full sm:col-span-2">
                <label htmlFor={`product-${index}`} className="text-sm">Product</label>
                <input
                  id={`product-${index}`}
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-teal-900 focus:dark:ring-violet-600 font-medium dark:text-teal-900"
                  value={detail.product}
                  onChange={(e) => handleProductChange(index, 'product', e.target.value)}
                />
              </div>
              {/* Quantity Input */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor={`quantity-${index}`} className="text-sm">Quantity</label>
                <input
                  id={`quantity-${index}`}
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 font-medium dark:text-teal-900"
                  value={detail.quantity}
                  onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                />
              </div>
              {/* Price Input */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor={`price-${index}`} className="text-sm">Price</label>
                <input
                  id={`price-${index}`}
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 font-medium dark:text-teal-900"
                  value={detail.price}
                  onChange={(e) => handleProductChange(index, 'price', e.target.value)}
                />
              </div>
              {/* Description Textarea */}
              <div className="col-span-full">
                <label htmlFor={`description-${index}`} className="text-sm text-center">Description</label>
                <textarea
                  id={`description-${index}`}
                  placeholder=""
                  className="w-[50%] ml-5 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 font-medium dark:text-teal-900"
                  value={detail.description}
                  onChange={(e) => handleProductChange(index, 'description', e.target.value)}
                />
              </div>
            </fieldset>
          ))}

          {/* Button to Add Row */}
          <div className="flex space-x-4 justify-end">
            <button
              type="button"
              className="bg-teal-900 text-white px-4 py-2 rounded-md mt-4"
              onClick={addRow}
            >
              Add Row
            </button>
			<Link to="/invoice">
			<button
              type="button"
              className="bg-teal-900 text-white px-4 py-2 rounded-md mt-4"
            >
              save
            </button>
			</Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;