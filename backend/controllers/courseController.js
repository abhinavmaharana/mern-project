const encode = require('base-64')
const fetch = require('node-fetch')
const catchAsyncError = require('../middleware/catchAsyncError');

require('dotenv').config({path: "backend/config/config.env"});

// Env vars
let URL = `https://www.udemy.com/api-2.0/courses/`
const UDEMY_CLIENT_ID = process.env.UDEMY_CLIENT_ID
const UDEMY_CLIENT_SECRET = process.env.UDEMY_CLIENT_SECRET

// console.log(UDEMY_CLIENT_ID);

// Get All Courses
exports.getAllCourse = catchAsyncError(async(req,res,next)=> {
    try {
        const apiRes = await fetch(URL, {
            method: 'GET',
            headers: new fetch.Headers({
                'Authorization': (UDEMY_CLIENT_ID + ":" + UDEMY_CLIENT_SECRET),
                'Content-Type': 'application/json'
            }),
        })
        const data = await apiRes.json();
        console.log(data);
    } catch (error) {
        res.status(500).json({error})
        console.log(error)
    }
})