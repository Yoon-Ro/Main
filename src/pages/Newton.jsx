import React from 'react'
import Image1 from '../assets/Newton_prototype.png';
import table from '../assets/table.png';
import journey from '../assets/USERJOURNEY.png';
import sketch from '../assets/Sketch.png';



const Newton = () => {
  return (
    <div className='w-[1420px] mx-auto mt-32'>
        <div className='w-[1024px] mx-auto px-8 pt-32 pb-8 rounded-[2rem] bg-red-50'>
     <h1 className=' text-xl tracking-wider  w-fit px-8 py-2 bg-white rounded-full'>IPHONE PRICE INDICE
     </h1>
     <h1 className=' w-fit text-6xl py-4 leading-[4rem] font-bold'>Pricing old iphones easier <br/>with Newton Index.</h1>
     <h1 className=' text-3xl tracking-wide  w-fit'>Find your price without wasting time
     </h1>
     <img src={Image1} alt="/" className=' mx-auto mt-32 hover:shadow-lg hover:scale-105 rounded-3xl transition-all duration-200'/>

    

</div>
 {/* OVERVIEW */}
 <div className='w-[1024px] my-16 mx-auto px-8'>
<h1 className='text-3xl w-fit font-medium'>Overview
     </h1>

<div className='py-8 text-md leading-[2rem]'>With Newton Index, we take pride in providing our users with the most accurate and up-to-date information. We aim to equip our users with the knowledge they need to make informed decisions while purchasing used iPhones.</div>
<div className='grid grid-cols-3 gap-8 '>
<div className='col-span-1 border-l-2 pl-4 border-[#9B526E]'>
        <h1 className='text-xl border-b-1  py-2 text-'>Participants</h1> <br/>
        Yoon Ro <br/>
        Jiwoo Shim
    </div>
    <div className='col-span-1 border-l-2 pl-4 border-[#9B526E]'>
        <h1 className='text-xl border-b-1  py-2'>Timeline</h1> <br/>
        Jan 2023 ~ Mar 2023
    </div>
    <div className='col-span-1 border-l-2 pl-4 border-[#9B526E]'>
        <h1 className='text-xl border-b-1  py-2'>Platform</h1> <br/>
        Web <br/>
        Tablet
    </div>
</div>
</div>


{/* PROBLEM */}
<div className='w-[1024px] my-32 mx-auto px-8'>

<h1 className='text-3xl w-fit font-medium'>Problem Finding
     </h1>

     <h1 className='rounded-3xl text-center  mx-auto text-6xl py-16 leading-[4rem] px-8 bg-[#9b526E] my-8 text-white'>To find a good price, user spends a significant amount of time to search and filter.</h1>

<div className='grid grid-cols-3 gap-8'>
<div className='col-span-1 group relative overflow-y-clip'>
  
    <h1 className='text-4xl py-8'>Opague & Uncertain</h1>
    <p className='text-md leading-[2rem]'>The information on pricing for used iPhones is not transparent and there are too many price ranges that differ from one another.</p>
    </div>
    <div className='col-span-1 group relative overflow-y-clip'>
  
    <h1 className='text-4xl py-8'>Time-consuming</h1>
    <p className='text-md leading-[2rem]'>There is no quick information available at a glance, which takes time to choose the best price and product.</p>
    </div>
    <div className='col-span-1 group relative overflow-y-clip'>
  
    <h1 className='text-4xl py-8'>Platform diversity</h1>
    <p className='text-md leading-[2rem]'>Each platform has different purposes and methods, and they list related products rather than a specific product.</p>
    </div>
</div>

</div>

{/* COMPETITVE */}
<div className='w-[1024px] my-32 mx-auto px-8'>

<h1 className='text-3xl w-fit font-medium py-8'>Research
     </h1>
     <h1 className='text-md leading-[2rem]'>We looked at three types of products to compare them. We checkex how the chart works and looks in a table. All three products have similar basic functions and information, but they have some differences. The interactive chart did not work perfectly. <span className='bg-[#9b526E]  p-1 rounded-xl transition-all duration-150 text-white'>None of the products allowed us to compare prices by model or specifications.</span></h1>

     <img src={table} alt="/" className='mx-auto my-16 rounded-xl shadow-xl hover:scale-105 transition-all duration-300'/>

   {/* USER INTERVIEW  */}
     <h1 className='text-md leading-[2rem] pb-16'>We conducted user interviews to understand users' issues, needs, and experiences when searching for used iPhones online. The interviews revealed that users often need help finding good deals, limited selection, spend excessive time searching, and sometimes encounter fraudulent listings.</h1>

     <div className='grid grid-cols-5 gap-4  mx-auto py-8'>
    {/* top */}
    <div className='col-span-2'>

        <h1  className='py-8 bg-[#9b526E]/30 px-4  rounded-full text-sm'>"I was looking for a used iPhone online, but all of the listings were really expensive. Unfortunately, I couldn't find a good deal."</h1>
    
    </div>
    <div className='col-span-2'>
        
        <h1  className='py-8 bg-[#9b526E]/30 px-4  rounded-3xl text-sm'>"I had a tough time searching for used iPhones online. The selection was really limited and I couldn't find one that met my criteria. Unfortunately, I had to end up buying a new phone."</h1>
  
    </div>
    <div className='col-span-1'></div>
    {/* bottom */}
    <div className='col-span-1'></div>

    <div className='col-span-2'>
 
        <h1  className='py-8 bg-[#9b526E]/30 px-4  rounded-xl text-sm'>"I spent hours searching for a used iPhone online, and I wasn’t sure the price was reasonable."</h1>

    </div>
    <div className='col-span-2'>
       
        <h1  className='py-8 bg-[#9b526E]/30 px-4  rounded-full text-sm'>"I found a used iPhone online that seemed too good to be true, and unfortunately it wasn’t."</h1>
           </div>
</div>
 {/* USER INTERVIEW  */}
 <h1 className='text-md leading-[2rem] py-16'>We developed a persona in order to gain a thorough understanding of the user experience. The highlighted section in yellow, located in the middle of the document, signifies the focus area that we can address through our understanding of the user's needs. The highlighted areas that we identified include the following: "Visits multiple websites and compares prices and features of different models," "Becomes frustrated with the time it takes to search and compare prices on so many websites," "Closes the tab and opens another one, this time on a classifieds website. Scrolls through the listings, but becomes discouraged when he sees that most of the phones are in poor condition or overpriced," and "Closes the laptop and stands up, looking defeated. However, he pauses and turns back to the laptop, determined to find a solution." </h1>
<img src={journey} alt="/" className='mx-auto rounded-xl hover:scale-125 transition-all duration-150 hover:shadow-xl'/>


     </div>

     <div className='w-[1024px] my-32 mx-auto px-8'>

<h1 className='text-3xl w-fit font-medium py-8'>Ideation
     </h1>
     <img src={sketch} alt="/" className='mx-auto rounded-xl '/>

     </div>







    </div>
  )
}

export default Newton