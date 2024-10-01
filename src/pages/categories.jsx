import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { FilterByPrice, ForFilterByBrands, ForGetBrands, ForSearchByProductName, GetCategory, GetCategotyById, GetProducts } from '../api/forProductsApi';
import CustomCard from '../components/cards/customCard';
import { Accordion, AccordionDetails, AccordionSummary, Slider, TextField } from '@mui/material';
import { setProductName } from '../redusers/productSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from 'antd';

const Categories = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {categoriesById,products,categories,ProducTName,brands}= useSelector((state)=>state.forProductSlice)
    const [forRange, setForRange] =useState([0,9999])
    useEffect(()=>{
      if(id){

        dispatch(GetCategotyById(id))
      }
        dispatch(ForSearchByProductName(ProducTName))
        dispatch(GetCategory())
        dispatch(ForGetBrands())
    },[id,forRange])
    const forApplyPrises= ()=>{
      dispatch(FilterByPrice({min:forRange[0],max:forRange[1]}))
    }
    console.log(products)
    console.log(ProducTName)
    console.log(brands)
    
  return (
    <div>
<div>
  {id && categoriesById ? (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-[40px] rounded-lg shadow-lg">
      <div className="flex gap-[40px] justify-center items-center py-[20px] border-4  rounded-lg shadow-md flex-wrap bg-white ">
        <img 
          src={import.meta.env.VITE_APP_FILE_URL + categoriesById?.data?.categoryImage} 
          className="h-[200px]  border-4  shadow-lg" 
          alt="" 
        />
        <div className="">
          <p className="font-bold text-[30px]  ">{categoriesById?.data?.categoryName}</p>
          <div className=" text-blue-800 flex gap-[20px] flex-wrap cursor-pointer">
            {categoriesById?.data?.subCategories?.map((el) => (
              <p className="py-[5px] text-[18px]">{el.subCategoryName}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    null
  )}
</div>
      <div className='flex items-start py-[80px] p-[20px] sm:flex-wrap sm:gap-[20px]  w-[100%]'>
        
          <div>
            <Accordion>
              <AccordionSummary aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
                    Category
              </AccordionSummary>
              {categories.map((el)=>{
              return  <Link to={`/categories/${el.id}`}>
                            <AccordionDetails key={el.id}>{el.categoryName}</AccordionDetails>
                      </Link>
                      })}
             </Accordion>
             <Accordion defaultExpanded>
              <AccordionSummary aria-controls='panel2-content' expandIcon={<ExpandMoreIcon/>}>
                    Brands
              </AccordionSummary>
              <AccordionDetails sx={{color:"red", fontWeight:"bold", cursor:"pointer", "&:hover":{backgroundColor:"lightgray"} }} onClick={()=>dispatch(GetProducts())}>ALL products</AccordionDetails>
                      {brands?.map((el)=>{
                        return <AccordionDetails key={el.id}   sx={{
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "lightgray" 
                          }
                        }}  onClick={()=>dispatch(ForFilterByBrands(el.id))}>{el.brandName}</AccordionDetails>
                      })}
                      
             </Accordion>
             <Accordion defaultExpanded>
                  <AccordionSummary aria-controls='panel3-content' expandIcon={<ExpandMoreIcon/>}>
                   Price range
                  </AccordionSummary>
                  <AccordionDetails>
                    <Slider valueLabelDisplay='auto' min={0} max={9999} value={forRange} onChange={(e)=>setForRange(e.target.value)}/>
                    <div className='flex justify-between'>
                      <TextField placeholder='min'  sx={{width:"100px"}} value={forRange[0]} onChange={(e)=>setForRange([e.target.value,forRange[1]])}/>
                      <TextField placeholder='max' sx={{width:"100px"}} value={forRange[1]} onChange={(e)=>setForRange([forRange[0],e.target.value])}/>
                    </div>
                    
                     <div className='py-[20px]'>
                        <Button className='w-[100%] p-[25px_20px] text-[24px]' ghost danger onClick={forApplyPrises}>Apply</Button>
                     </div>
                      
                    
                  </AccordionDetails>
             </Accordion>
          </div>
         
          <div className='w-[80%]'>
            <div className='pb-[50px] pl-[20px]'>
              <TextField placeholder='ProductName' size='small' onChange={(e)=>dispatch(ForSearchByProductName(e.target.value))}/>
            </div>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1  justify-items-center justify-between items-start gap-[40px] '>
            {products?.map((product)=>{
              return <CustomCard  productName={product.productName} price={product.price} discountPrice={product.discountPrice} image={product.image} ID={product.id} />
            })}
          </div>
          </div>
      </div>
    </div>
  )
}

export default Categories


{/* <div>{categoriesById?.data?.subCategories?.map((el)=>{
  return <span>{el.subCategoryName}</span>
})}
</div> */}