import {createStore,combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProductDetailsReducer } from './reducers/productReducers.js'
import { getProductsReducer } from './reducers/productReducers.js'
import {cartReducer} from './reducers/cartReducer'

const reducer= combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
})

const middleware = [thunk];

const store =createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)

export default store