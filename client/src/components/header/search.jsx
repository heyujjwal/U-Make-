import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Box, InputBase,  List, ListItem, styled} from '@mui/material';
import { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from '../../redux/actions/productsAction.js'
import { Link } from 'react-router-dom';
const SearchContainer=styled(Box)`
   background:#fff;
   margin-left:-20px;
   margin-right:20px;

   border-radius:2px;
   width:35%;
   height:50%;
   display:flex;
`;

const ListWrapper = styled(List)`
position: absolute;
color: #000;
background: #FFFFFF;
margin-top: 36px;
`;

const InputSearch=styled(InputBase)`
width: 90%;
padding-left:15px;
font-size:unset;
`;
const SearchIconcontainer=styled(Box)`
color:#4B008B;
padding:2px;
`;

const Search = () => {

  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)

  const getText = (text) => {
      setText(text);
      setOpen(false)
  }

    const { products } = useSelector(state => state.getProducts);;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  return (
    <SearchContainer>
        <InputSearch
        placeholder='Search for products and Brands & more' 
        onChange={(e) => getText(e.target.value)}
        value={text}
        />
        <SearchIconcontainer>
            <SearchIcon />
        </SearchIconcontainer>
        {
              text && 
               <ListWrapper hidden={open} > 
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setText('')}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
    </SearchContainer>
  )
}

export default Search
