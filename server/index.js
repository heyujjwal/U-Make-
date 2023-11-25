import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from 'cors'
import Routes from "./routes/route.js";
import Connection from "./Database/db.js";
import DefaultData from "./default.js";
import { v4 as uuid } from 'uuid';

////
const app=express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extented:true}))
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Routes)



const PORT=8000;
const UserName=process.env.DB_USERNAME;
const Password=process.env.DB_PASSWORD;

Connection(UserName,Password);

app.listen(PORT,()=> console.log(`Server running on Port ${PORT} `));

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};

paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),

paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'guptaujjwal259@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'





DefaultData();