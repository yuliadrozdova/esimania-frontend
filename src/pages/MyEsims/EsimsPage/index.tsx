import * as React from "react";
import PurchasedEsim from "../../../components/Product/PurchasedEsim/index.tsx";
import { myEsims } from "../../../API/config/config.tsx";

const EsimsPage: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // const products = myEsims;
  // const products1 = [
  //   {
  //     id: 1,
  //     name: '12 GB for 7 Day',
  //     href: '#',
  //     imageSrc: '',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     country: 'Georgia',
  //   },
  //   {
  //     id: 2,
  //     name: '12 GB for 7 Day',
  //     href: '#',
  //     imageSrc: '',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     country: 'Georgia',
  //   },
  //   {
  //     id: 3,
  //     name: '12 GB for 7 Day',
  //     href: '#',
  //     imageSrc: '',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     country: 'Georgia',
  //   },
  //   {
  //     id: 1,
  //     name: '12 GB for 7 Day',
  //     href: '#',
  //     imageSrc: '',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     country: 'Georgia',
  //   },
  //   {
  //     id: 2,
  //     name: '12 GB for 7 Day',
  //     href: '#',
  //     imageSrc: '',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     country: 'Georgia',
  //   },
  //   {
  //     id: 3,
  //     name: '12 GB for 7 Day',
  //     href: '#',
  //     imageSrc: '',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     country: 'Georgia',
  //   },
  //   {
  //     id: 1,
  //     name: '12 GB for 7 Day',
  //     href: '#',
  //     imageSrc: '',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     country: 'Georgia',
  //   },
  //   {
  //     id: 2,
  //     name: '12 GB for 7 Day',
  //     href: '#',
  //     imageSrc: '',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     country: 'Georgia',
  //   },
    
  // ]
  return (
    <React.Fragment>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-xl font-bold tracking-tight">Your eSIMs</h2> */}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {myEsims.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 h-full w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
                {/* <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                /> */}
                <div className="h-full w-full object-cover object-center lg:h-full lg:w-full h-20">
                <PurchasedEsim props={product}/>
                {/* {globalEsims?.map((pack, id) => {
                  return <PackageInfo props={pack} />;
                })} */}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a> */}
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.country}</p> */}
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </React.Fragment>
  );
};
export default EsimsPage;
