import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
import { styled,Box } from '@mui/material'
import {getProducts} from '../../redux/actions/productsAction'
const Component=styled(Box)`
  padding:8px;
  background:#F1F2F4;
`;
const Home = () => {

  const {products}=useSelector(state=>state.getProducts)
  // console.log(products)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts()) 
  },[dispatch])

  
  return (
    <>
        <NavBar />
        <Component>
                <Banner />
                <MidSlide 
                    products={products} 
                    title='Deals of the Day'
                    timer={true} 
                    // multi={true} 
              />
                <MidSection />
                <Slide
                    products={products} 
                    title='Discounts for You'
                    timer={false} 
                    // multi={true} 
                />
                <Slide
                    products={products} 
                    title='Suggested Items'
                    timer={false} 
                    // multi={true} 
                />
                <Slide
                    products={products} 
                    title='Top Selection'
                    timer={false} 
                    // multi={true} 
                />
                <Slide
                    products={products} 
                    title='Recommended Items'
                    timer={false} 
                    // multi={true} 
                />
            </Component>
        
    </>
   
  )
}

export default Home
