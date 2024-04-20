
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactToPrint from 'react-to-print';



const newInvoice = () => {   const location = useLocation();
  const componentRef= useRef(null);
  const { name, No, date, products } = location.state;

  // Calculate total amount by iterating over products
  const total = products.reduce((acc: number, curr: { price: string; quantity: string; }) => acc + parseInt(curr.price) * parseInt(curr.quantity), 0);

  return (
    
    <>
    <ReactToPrint
    trigger={()=>{

      return <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
      Print
    </a>
    }}

  content={()=>componentRef.current}

    />
<div id="File" className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10 bg-gray-900" >
  <div className="sm:w-11/12 lg:w-3/4 mx-auto">
   
    <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-100" ref={componentRef}>
     
    <header className="bg-[#0D6064] p-4 flex justify-between items-center">
        <Link to='/'>
        <div className="text-white font-bold text-xl w-[200px]">
			<img src="/logo.png"/>
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
     
     
      <div className="flex flex-row justify-between p-6 px-20 dark:text-gray-900 ">
      <div>
          <h3 className="font-medium text-gray-900 text-2xl">Quotation </h3>
          <p className="">{name}</p>
      </div>
        <div>
          <h3 className="font-medium text-gray-900 text-2xl">Quotation No</h3>
          <p className="">{No}</p>
          <p className=''>{date}</p>
          </div>
         
        </div>
      

     
      <div className="mt-6 ">
        <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700 h-[350px]">
          <div className="hidden sm:grid sm:grid-cols-5">
            <div className="sm:col-span-2 text-xs font-medium text-black uppercase">PRODUCT</div>
            <div className="text-start text-xs font-medium text-black uppercase">Qty</div>
            <div className="text-start text-xs font-medium text-black uppercase">Price</div>
            <div className="text-end text-xs font-medium text-black uppercase">Amount</div>
          </div>

          <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>
          {/** Loop through products */}
          {products.map((product: { product: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }, index: Key | null | undefined) => (
                  <div key={index} className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <p className="font-medium text-black dark:text-black">{product.product}</p>
                    </div>
                    <div>
                      <p className="text-black dark:text-black">{product.quantity}</p>
                    </div>
                    <div>
                      <p className="text-black dark:text-black">{product.price}</p>
                    </div>
                    <div>
                      <p className="sm:text-end text-black dark:text-black"></p>
                    </div>
                  </div>
                ))}

          

        </div>
      </div>
     
      <div className="mt-5 flex sm:justify-end">
        <div className="w-full max-w-2xl sm:text-end space-y-2">
          
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            

            <dl className="grid sm:grid-cols-5 gap-x-3">
              <dt className="col-span-3 font-semibold text-black dark:text-black">Total:</dt>
              <dd className="col-span-2 text-black">RWF{total}</dd>
            </dl>

          </div>
          
        </div>
      </div>
      

      <div className="flex flex-row  justify-between p-6 px-20 dark:text-gray-900 ">
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
          <p className="">1 day</p>
          </div>
          <div>
          <h3 className="font-medium text-teal-900 text-2xl">Terms & Condition</h3>
          <p className="">This price (Frw) includes VAT 18% & Delivery fee</p>
          </div>
          </div>
         
        </div>
   <footer className="p-6 dark:bg-teal-900 bg-teal-900 dark:text-white text-center">
<h1 className='font-medium text-white text-2xl'>Graphics design - Printing services - Branding - General supply</h1>
   </footer>
    </div>
    
    <div className="mt-6 flex justify-end gap-x-3">
      <a download='newInvoice' className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Invoice PDF
      </a>
     
    </div>
   
  </div>
</div>

    </>
  )
}

export default newInvoice