'use client';
import { useCategoryController, useProductController, useTab } from '@/hooks';
import { types, data, images } from '@/constants';
import { CustomTabs } from '@/atomic/components';
import { CustomButton } from '@/atomic/elements';
import { useRouter } from 'next/navigation';
import { Oval } from 'react-loader-spinner';
import Image from 'next/image';
import React from 'react';

const { header, loading } = data.screens.product;

export default function Category({ params: { name } }: { params: { name: string } }) {
 const { tab, handlerTab } = useTab(name);
 const navigate = useRouter();
 const { categories } = useCategoryController();
 const { products, isLoadingSearch } = useProductController(tab, { search: '' });
 const handlerGoBack = () => {
  navigate.back();
 };
 return (
  <div className="w-full bg-helper flex-col-stretch-start space-y-12">
   {/* header */}
   <header className="w-full p-4 bg-primary flex-row-between-center">
    <CustomButton
     title={header.button}
     type={types.button.icon}
     icon={types.icon.goBack}
     handlerPress={handlerGoBack}
    />
    <h1 className="header-2 color-secondary"> {name} </h1>
    <Image src={images.redCar.src} width={50} height={50} alt="" />
   </header>
   {/* Tabs */}
   <CustomTabs
    itemFocus={tab}
    className={'pl-4'}
    items={categories.map((category) => category.name as string)}
    returnItem={handlerTab}
   />
   {/* products */}
   {isLoadingSearch ? (
    <div className="w-full p-8 bg-helper flex-col-center-center">
     <h2 className="header-2 text-center">{loading.title}</h2>
     <p className="default-text text-center">{loading.text}</p>
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
     className="w-full bg-helper"
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
     {products.map((product, i) => (
      <figure className="bg-slate-200 p-4 rounded-xl flex-col-start-center" key={i}>
       <Image
        className="flex-row-center-center"
        src={product.photo as string}
        width={150}
        height={300}
        alt=""
       />
       <figcaption className="default-text-bold">{product.name}</figcaption>
      </figure>
     ))}
    </section>
   )}
  </div>
 );
}
