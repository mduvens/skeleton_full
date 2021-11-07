const fs = require('fs');
const cors = require('cors')
const express = require('express');
const mongoose = require('./mongoose/index')

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const log = (msg) => process.stdout.write(msg + '\n')

const middleware = (req, res, next) => {
    // implement token verification or any other security measure for DB ops
    next()
}
/**
 * PRODUCT
 */
app.route('/product')
    .post( async function (req, res) {
        // post products
        const product = req.body;
        const result = await mongoose.saveProduct(product)
        
        res.json(result)
    })
    .get(async function (req, res) {
        // if query has name, retrive that product. if not, retrive all products
        if('name' in req.query){
            const result = await mongoose.getProduct(req.query.name);
            
            res.json(result)
            return
        }

        const result = await mongoose.getProducts();
        res.json(result)


    })
    .delete(async function (req, res) {
        // delete products
       const data = req.body
        if(data.name){
            const result = await mongoose.deleteProduct(data.name);
            res.json(result)
        }
      
        else{
            await mongoose.deleteAll()
            res.json(222)
        }
    })
    .put(async function (req,res){
        const data = req.body;
        const filter = data.filter
        const update = data.product

        if(filter){
            const result = await mongoose.updateProduct(filter, update);
            res.json(result)
        }
        res.json()
    })

/**
 * CATEGORY
 */
 app.route('/category')
 .post( async function (req, res) {
     // post categories
     const category = req.body;
     const result = await mongoose.saveCategory(category)
     
     res.json(result)
 })
 .get(async function (req, res) {
     // if query has name, retrive that category. if not, retrieve all categories
     if('name' in req.query){
         const result = await mongoose.getCategory(req.query.name);
         
         res.json(result)
         return
     }

     const result = await mongoose.getCategories();
     res.json(result)


 })
 .delete(async function (req, res) {
     // delete categorys
    const data = req.body
     if(data.name){
         const result = await mongoose.deleteCategory(data.name);
         res.json(result)
     }
   
     else{
         await mongoose.deleteAll()
         res.json(222)
     }
 })
 .put(async function (req,res){
     const data = req.body;
     const filter = data.filter
     const update = data.category

     if(filter){
         const result = await mongoose.updateCategory(filter, update);
         res.json(result)
     }
     res.json()
 })


// Static folder
app.use(express.static(__dirname + '/public/'))

// Handle SPA (Vue Router)
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(PORT, () => {
    console.log(`E-Commerce APP @ PORT ${PORT}`)
})