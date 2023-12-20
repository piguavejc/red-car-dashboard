'use client';
import { useLaboratoryController, useProductController, useTab } from '@/hooks';
import { CustomButton, CustomItem } from '@/atomic/elements';
import { types, data, images } from '@/constants';
import { CustomTabs } from '@/atomic/components';
import { useRouter } from 'next/navigation';
import { Oval } from 'react-loader-spinner';
import Image from 'next/image';
import React from 'react';

const { header, loading } = data.screens.product;

export default function Category({ params: { name } }: { params: { name: string } }) {
 const navigate = useRouter();
 const { tab, handlerTab } = useTab('Todos');
 const { laboratories, isLoadingSearch: isLoad } = useLaboratoryController(name, undefined);
 const { products, detail, isLoadingSearch, handlerDetail } = useProductController(name, tab, {
  search: '',
 });

 const handlerGoBack = () => {
  navigate.back();
 };

 if (detail) {
  return (
   <section className="w-full p-4 flex-col-stretch-center ">
    <h2 className="header-2"> {detail.product} </h2>
    <Image
     className="flex-row-center-center"
     src={detail.photo as string}
     width={150}
     height={300}
     alt={`${detail.product}`}
    />
    <CustomItem title={'Descripcion'} text={detail.features as string} />
    <CustomItem title={'Componentes'} text={detail.summary as string} />
    <CustomItem title={'Dosis'} text={detail.dosage as string} />
   </section>
  );
 }
 return (
  <div className="w-full bg-helper flex-col-stretch-center space-y-12">
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
    isLoading={isLoad}
    itemFocus={tab}
    className={'pl-4'}
    items={laboratories.map((laboratory) => laboratory.name as string)}
    returnItem={handlerTab}
   />
   {/* products */}
   {isLoadingSearch && products.length === 0 ? (
    <div className="w-[90%] component-loading flex-col-center-center">
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
     className="w-full p-4 bg-helper"
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
      <button
       key={i}
       title={product.name}
       onClick={() => handlerDetail(product.id as number)}
       className="bg-slate-200 p-4 rounded-xl flex-col-start-center cursor-pointer"
      >
       <Image
        className="flex-row-center-center"
        src={product.photo as string}
        width={150}
        height={300}
        alt={`${product.name}`}
       />
       <p className="default-text-bold">{product.name}</p>
      </button>
     ))}
    </section>
   )}
  </div>
 );
}
