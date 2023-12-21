'use client';
import { useCategoryController, useHeader } from '@/hooks';
import { CustomCarousel } from '@/atomic/components';
import { types, data, images } from '@/constants';
import { CustomButton } from '@/atomic/elements';
import { CustomHeader } from '@/atomic/designs';
import { Oval } from 'react-loader-spinner';
import { theme } from '@/atomic/theme';
import Image from 'next/image';
import Link from 'next/link';

const { secctions, footer, header } = data.screens.homepage;
const { pages } = data.screens.dashboard;

export default function Home() {
 const { headers, target, handlerTarger } = useHeader(secctions.headers);
 const { categories, isLoadingSearch, existError } = useCategoryController();

 /* error */

 if (existError)
  return (
   <div className="flex-col-center-center h-screen bg-slate-800 px-4 py-8  rounded-lg">
    <img className="max-w-[30%] rounded-xl" src="/not-found.svg" alt="" />
    <p className="error-text"> {pages.products.error} </p>
   </div>
  );

 return (
  <main className="w-full bg-helper flex-col-stretch-center space-y-12">
   {/* header */}
   <header className="w-full p-4 bg-secondary flex-row-between-center flex-initial ">
    <Image src={images.redCar.src} width={50} height={50} alt="" />
    <h1 className="header-2" style={{ color: theme.gray }}>
     {header.title}
    </h1>
    <div className="lg:hidden">
     <CustomButton title={header.button} type={types.button.icon} icon={types.icon.menu} />
    </div>
    <div className="hidden lg:block flex-1">
     <CustomHeader list={headers} target={target} hanlderTarget={handlerTarger} />
    </div>
   </header>
   <CustomCarousel />
   {/* categories */}
   {isLoadingSearch ? (
    <div className="w-[90%] component-loading flex-col-center-center lg:w-[80%]">
     <h2 className="header-2 text-center">{secctions.products.loading.title}</h2>
     <p className="default-text text-center">{secctions.products.loading.text}</p>
     <Oval
      height={80}
      width={80}
      color="gray"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#666"
      strokeWidth={5}
      strokeWidthSecondary={5}
     />
    </div>
   ) : (
    <section
     className="w-full bg-helper lg:w-[80%]"
     style={{
      gap: '2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr))',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center',
     }}
    >
     {categories.map((category, i) => (
      <Link key={i} href={`/category/${category.name}`} title={`categoria ${category.name}`}>
       <Image
        className="flex-row-center-center"
        src={category.photo as string}
        width={150}
        height={300}
        alt=""
       />
      </Link>
     ))}
    </section>
   )}
   {/* who we */}
   <section className="w-full py-12 px-4  bg-secondary flex-col-stretch-center space-y-8 lg:w-[80%] rounded-xl">
    <Image src={images.redCar.src} width={250} height={250} alt="" className="flex-1" />
    <article className="space-y-4 flex-1">
     <header>
      <h2 className="header-2">{secctions.quienesSomos.title}</h2>
     </header>
     <main>
      <p className="default-text">{secctions.quienesSomos.text}</p>
     </main>
    </article>
   </section>
   {/* contact */}
   <section className="w-full p-4 bg-helper space-y-16">
    <article className="space-y-8">
     <header>
      <h2 className="header-2">{secctions.contactanos.title}</h2>
     </header>
     <ul className="flex-row-center-center">
      <li>
       <Link href={secctions.contactanos.socialMedia.facebook.url} target="_blank">
        <CustomButton
         title={secctions.contactanos.socialMedia.facebook.title}
         type={types.button.icon}
         icon={types.icon.facebook}
        />
       </Link>
      </li>
      <li>
       <Link href={secctions.contactanos.socialMedia.whatsapp.url} target="_blank">
        <CustomButton
         title={secctions.contactanos.socialMedia.whatsapp.title}
         type={types.button.icon}
         icon={types.icon.whatsapp}
        />
       </Link>
      </li>
     </ul>
    </article>
   </section>
   {/* footer */}
   <footer className="w-full py-16 bg-slate-200 flex-row-center-center">
    <Link
     className="w-full p-2 block "
     href={footer.author.url}
     title={footer.author.title}
     target="_blank"
    >
     <p className="default-text-bold"> {footer.author.title} </p>
    </Link>
   </footer>
  </main>
 );
}
