import express from  'express';
import { userSignup,userLogin } from '../controllers/user-controller.js';
import { getProduct,getProductById } from '../controllers/product-controller.js';
import { addPaymentGateway,paymentResponse } from '../controllers/payment-controller.js';

const router = express.Router();


router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProduct)
router.get('/product/:id',getProductById)
router.post('/payment',addPaymentGateway)
router.post('/callback',paymentResponse)
export default router;




