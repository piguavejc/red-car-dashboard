'use client';
import { useLaboratoryController, useProductController, useSearch, useTab } from '@/hooks';
import { CustomMessageError, CustomSearch, CustomTabs } from '@/atomic/components';
import { CustomButton, CustomItem, CustomPhoto } from '@/atomic/elements';
import { types, data, images } from '@/constants';
import { useRouter } from 'next/navigation';
import { Oval } from 'react-loader-spinner';
import { validate } from '@/validations';
import { theme } from '@/atomic/theme';
import Image from 'next/image';
import React from 'react';

const { header, loading, card } = data.screens.product;
const { pages, forms, list } = data.screens.dashboard;

export default function Category({ params: { name } }: { params: { name: string } }) {
 const navigate = useRouter();
 const { tab, handlerTab } = useTab('Todos');
 const { search, hanlderSearch } = useSearch();
 const { laboratories, isLoadingSearch: isLoad } = useLaboratoryController(name, undefined);
 const {
  products,
  detail,
  isLoadingSearch,
  existError,
  messageError,
  handlerDetail,
  handlerCloseDetail,
 } = useProductController(name, tab, search);

 const handlerGoBack = () => {
  navigate.back();
 };

 /* error */

 if (existError) return <CustomMessageError message={messageError} />;

 return (
  <div className="w-full bg-helper flex flex-col justify-stretch items-stretch space-y-12">
   {/* header */}
   <header className="w-full p-4 bg-primary flex-row-between-center lg:px-[5rem]">
    <CustomButton
     title={header.button}
     type={types.button.icon}
     icon={types.icon.goBack}
     handlerPress={handlerGoBack}
    />
    <h1 className="header-2 color-secondary" style={{ color: theme.white }}>
     {' '}
     {name}{' '}
    </h1>
    <Image src={images.redCar.src} width={50} height={50} alt="" />
   </header>
   <div className="flex-col-start-stretch">
    {/* Tabs */}
    <CustomTabs
     isLoading={isLoad}
     itemFocus={tab}
     className={'pl-4'}
     items={laboratories.map((laboratory) => laboratory.name as string)}
     returnItem={handlerTab}
    />
   </div>
   {/* input Search */}
   <div className="self-center">
    <CustomSearch
     placeholder={forms.products.search.placeholder}
     validationSchema={validate.search}
     handlerSubmit={hanlderSearch}
     entity={search}
    />
   </div>
   {products.length === 0 && !isLoadingSearch && (
    <div className="self-center flex-col-center-center bg-helper px-4 py-8  rounded-lg">
     <Image
      src={images.redCar.src.src}
      className="flex-1"
      height={300}
      width={300}
      title={''}
      alt=""
     />
     <p className="default-text-bold"> {list.empty} </p>
    </div>
   )}
   {/* products */}
   {isLoadingSearch && products.length === 0 ? (
    <div className="w-[90%] self-center component-loading flex-col-center-center lg:w-[80%]">
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
   ) : detail ? (
    <section className="w-[90%] self-center p-4 bg-secondary rounded-xl flex-col-stretch-center lg:w-[80%]">
     <CustomButton
      title={''}
      type={types.button.icon}
      icon={types.icon.close}
      handlerPress={handlerCloseDetail}
     />
     <h2 className="header-2"> {detail.product} </h2>
     <Image
      alt={`${detail.product}`}
      src={detail.photo as string}
      className="flex-row-center-center flex-1 object-contain bg-secondary p-2 rounded-xl"
     />
     <div
      style={{
       gap: '2rem',
       display: 'grid',
       gridTemplateColumns: 'repeat(auto-fill, minmax(45%, 1fr))',
       justifyContent: 'center',
       alignItems: 'center',
       alignContent: 'start',
       justifyItems: 'flex-start',
      }}
     >
      <CustomItem title={card.description} text={detail.features as string} />
      <CustomItem title={card.dosage} text={detail.dosage as string} />
      <CustomItem title={card.summary} text={detail.summary as string} />
     </div>
    </section>
   ) : (
    <>
     <section
      className="w-full self-center p-4 bg-helper lg:w-[80%]"
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
        className="bg-slate-200 p-8 flex-col-stretch-stretch rounded-xl space-y-4 cursor-pointer"
        style={{ height: '100%' }}
       >
        <Image
         className="flex-row-center-center flex-1 object-contain"
         src={product.photo as string}
         alt={`${product.name}`}
        />
        <p className="default-text-bold">{product.name}</p>
       </button>
      ))}
     </section>
    </>
   )}
  </div>
 );
}
