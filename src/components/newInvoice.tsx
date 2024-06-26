import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

const newInvoice = () => {
  const location = useLocation();
  const componentRef = useRef(null);
  const { name, No, date, products } = location.state;
  // Calculate total amount by iterating over products
  const total = products.reduce(
    (acc: number, curr: { price: string; quantity: string }) =>
      acc + parseInt(curr.price) * parseInt(curr.quantity),
    0
  );

  return (
    <>
      <div id="File" className="w-full h-full  bg-gray-900 dark:bg-gray-900">
        <div className="sm:w-11/12 lg:w-3/4 mx-auto">
          <div
            className="flex flex-col  bg-white shadow-md rounded-xl dark:bg-gray-100"
            ref={componentRef}
          >
            <header className="bg-[#0D6064] dark:bg-[#0D6064] p-4 flex justify-between items-center ">
              <Link to="/">
                <div className="text-white font-bold text-xl w-[200px]">
                  <img src="/logo.png" />
                </div>
              </Link>
              {/* You can add more elements or links to the right side if needed */}
              <div className="flex flex-col">
                {/* Example of additional links or buttons on the right side */}
                <p className="text-white hover:text-gray-200">
                  +250 788 991 582
                </p>
                <p className="text-white hover:text-gray-200">
                  yourgranted@gmail.com
                </p>
                <p className="text-white hover:text-gray-200">
                  Kigali - Nyarugenge
                </p>
              </div>
            </header>

            <br />
            <div className="flex flex-row justify-between p-6 px-20 dark:text-gray-900 ">
              <div>
                <h3 className="font-medium text-gray-900 text-2xl">
                  Quotation{" "}
                </h3>
                <p className="">{name}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-2xl">
                  Quotation No
                </h3>
                <p className="">{No}</p>
                <p className="">{date}</p>
              </div>
            </div>

            <div className="mt-6 p-4">
              <div className="border border-gray-200 p-4 rounded-lg space-y-4 overflow-x-hidden overflow-y-hidden dark:border-gray-700 h-[350px]">
                <div className="hidden sm:grid sm:grid-cols-5">
                  <div className="sm:col-span-2 text-xs font-medium text-black uppercase">
                    PRODUCT
                  </div>
                  <div className="text-start text-xs font-medium text-black uppercase">
                    Qty
                  </div>
                  <div className="text-start text-xs font-medium text-black uppercase">
                    Price
                  </div>
                  <div className="text-end text-xs font-medium text-black uppercase">
                    Amount
                  </div>
                </div>

                {products.map(
                  (
                    product: {
                      product?: string;
                      quantity?: string;
                      price?: string;
                      description?: string;
                    },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="grid grid-cols-3 sm:grid-cols-5 gap-2"
                    >
                      <div className="col-span-full sm:col-span-2">
                        <p className="font-normal text-black dark:text-black ">
                          {product.product}
                          <p className="font-normal">{product.description}</p>
                        </p>
                      </div>
                      <div>
                        <p className="text-black dark:text-black font-medium ">
                          {product.quantity}
                        </p>
                      </div>
                      <div>
                        <p className="text-black dark:text-black font-medium">
                          {product.price}
                        </p>
                      </div>
                      <div>
                        {product.quantity && product.price && (
                          <p className="sm:text-end text-black dark:text-black ">
                            {parseInt(product.price) *
                              parseInt(product.quantity)}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
           {/* Total Amount */}
<div className="ml-10 flex sm:justify-end p-2 ">
  <div className="w-full max-w-2xl sm:text-end space-y-2 ">
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2 ">
      <dl className="grid sm:grid-cols-5 gap-x-10 flex flex-col justify-between ">
        <dt className="col-span-3 row-span-3 font-semibold text-black dark:text-black">
          Total
        </dt>
        <dd className="col-span-2 text-black bg-[#0D6064] text-white p-3 w-40 text-center font-medium">
          {total.toLocaleString()} RWF
        </dd>
      </dl>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>

            <div className="flex flex-row  justify-between p-4 px-17 dark:text-gray-900  p-10">
              <div>
                <div className="">
                  <h3 className="font-medium text-teal-900 text-2xl">
                    Taxpayer Identification Number{" "}
                  </h3>
                  <p className="">119563451</p>
                </div>
                <div>
                  <h3 className="font-medium text-teal-900 text-2xl">
                    Bank account
                  </h3>
                  <p className="">GRANTED LTD</p>
                  <p>100070437974 - RWF</p>
                </div>
              </div>
              <div>
                <div className="">
                  <h3 className="font-medium text-teal-900 text-2xl">
                    Delivery time{" "}
                  </h3>
                  <p className="">1 day</p>
                </div>
                <div>
                  <h3 className="font-medium text-teal-900 text-2xl">
                    Terms & Condition
                  </h3>
                  <p className="">
                    This price (Frw) includes VAT 18% & Delivery fee
                  </p>
                </div>
              </div>
            </div>
            <footer className="p-4 dark:bg-[#0D6064] bg-[#0D6064] dark:text-white text-center bottom-0">
              <h1 className="font-medium text-white text-2xl">
                Graphics design - Printing services - Branding - General supply
              </h1>
            </footer>
          </div>
          <br />
          <ReactToPrint
            trigger={() => {
              return (
                <a
                  className="py-2 px-3 inline-flex items-left gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#0D6064] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect width="12" height="8" x="6" y="14" />
                  </svg>
                  Print
                </a>
              );
            }}
            content={() => componentRef.current}
          />
        </div>
      </div>
    </>
  );
};

export default newInvoice;
