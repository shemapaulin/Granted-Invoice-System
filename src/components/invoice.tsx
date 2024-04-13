import React from 'react';
import { Link } from 'react-router-dom';
const Invoice = () => {
  return (
    <>
      {/* Header Navbar */}
      <header className="bg-teal-900 p-4 flex justify-between items-center">
        <Link to='/'>
        <div className="text-white font-bold text-xl">
			<img src="/brand.PNG"/>
		</div>
        </Link>
        {/* You can add more elements or links to the right side if needed */}
        <div className="flex flex-col">
          {/* Example of additional links or buttons on the right side */}
          <p  className="text-white hover:text-gray-200">+250 788 991 582</p>
		  <p className="text-white hover:text-gray-200">yourgranted@gmail.com</p>
          <p className="text-white hover:text-gray-200">Kigali - Nyarugenge</p>
        </div>
      </header>
        
      

      {/* Main Title */}
      <h1 className="text-3xl font-bold text-center text-black pt-10">QUOTATION</h1>

      <div className="flex flex-row justify-between p-6 px-20 dark:text-gray-900 ">
      <div>
          <h3 className="font-medium text-gray-900 text-2xl">Quotation </h3>
          <p className="">VSO</p>
      </div>
        <div>
          <h3 className="font-medium text-gray-900 text-2xl">Quotation No</h3>
          <p className="">2024/074</p>
          <p className=''> Date February 22, 2024</p>
          </div>
         
        </div>
      {/* Table Section */}
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-black text-white dark:bg-black">
              <th className="border px-4 py-2">No.</th>
              <th className="border px-4 py-2">Product and Description</th>
              <th className="border px-4 py-2">Qty</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody className="" >
            {/* Sample rows (replace with dynamic data) */}
            <tr className="border">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">Product A - Description</td>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">$50.00</td>
              <td className="px-4 py-2">$100.00</td>
            </tr>
            <tr className="border">
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">Product B - Description</td>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">$80.00</td>
              <td className="px-4 py-2">$80.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
          {/* Total Row */}
          <tfoot>
            <tr className="bg-gray-200 dark:bg-gray-300">
              <td className="border px-4 py-2" colSpan={4}>Total</td>
              <td className="border px-4 py-2  bg-teal-900 text-white">$180.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
    <br/>
    <br/>
    <br/>
    <div className="flex flex-row justify-between p-6 px-20 dark:text-gray-900 ">
      <div>
        <div className=''>
          <h3 className="font-medium text-teal-900 text-2xl">Taxpayer Identification Number </h3>
          <p className="">119563451</p>
          </div>
          <div>
          <h3 className="font-medium text-teal-900 text-2xl">Bank account</h3>
          <p className="">GRANTED LTD</p>
           <p>100070437974 - RWF</p>
          </div>
      </div>
        <div >
        <div className=''>
          <h3 className="font-medium text-teal-900 text-2xl">Delivery time </h3>
          <p className="">2 days</p>
          </div>
          <div>
          <h3 className="font-medium text-teal-900 text-2xl">Terms & Condition</h3>
          <p className="">This price (Frw) includes VAT 18% & Delivery fee</p>
          </div>
          </div>
         
        </div>
   <footer className="p-6 dark:bg-teal-900 dark:text-white text-center">
<h1 className='font-medium text-white text-2xl'>Graphics design - Printing services - Branding - General supply</h1>
   </footer>
 
    </>
  );
}

export default Invoice;
