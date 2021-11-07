// getting-started.js
const mongoose = require('mongoose');

const STATUS = {
    SUCCESS: 222,
    ERROR: 444
}

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// Category
const categorySchema = new mongoose.Schema({
    name: String
});

const Category = mongoose.model('Category', categorySchema);

// Product
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    categories: Array
  });

const Product = mongoose.model('Product', productSchema);

async function deleteProduct(name){
    if(name){
        const result = await Product.deleteOne({name: name});
    
        return result.deletedCount > 0 ? STATUS.SUCCESS : STATUS.ERROR
        
    }
    return STATUS.ERROR
}

async function deleteAll(){
    try{
        await Product.deleteMany({});

        return STATUS.SUCCESS
    }
    catch(e){
        return STATUS.ERROR
    }
    
}

async function updateProduct(filter, product){
    delete product._id
    
    if(filter){
        const before = await Product.findOneAndUpdate(filter,product);
        
        const after = await Product.findOne();
        
        if(before !== after){
            return STATUS.SUCCESS
        }

        return STATUS.ERROR

    }

    return STATUS.ERROR
}
async function saveProduct(product){
    console.log(product)
    if(product && 'name' in product && 'price' in product){
        const result = await Product.find({name: product.name}).exec()
        console.log(result)
        if(!result.length){
            await new Product({
                name: product.name,
                price: product.price,
                categories: product.categories
                
            }).save();

            return STATUS.SUCCESS
        }
    }

    console.log("Error saving product " + product.name);
    return STATUS.ERROR
}
async function getProduct(name){
    const result = await Product.findOne({name:name})
    return result
}

async function getProducts(){
    const result = await Product.find();
    return result
}

///////////// CATEGORY ////////////////////
async function deleteCategory(name){
    if(name){
        const result = await Category.deleteOne({name: name});
    
        return result.deletedCount > 0 ? STATUS.SUCCESS : STATUS.ERROR
        
    }
    return STATUS.ERROR
}
async function updateCategory(filter, category){
    delete category._id
    
    if(filter){
        const before = await Category.findOneAndUpdate(filter,category);
        
        const after = await Category.findOne();
        
        if(before !== after){
            return STATUS.SUCCESS
        }

        return STATUS.ERROR

    }
    
    return STATUS.ERROR
}
async function saveCategory(category){
    if(category && 'name' in category){
        const result = await Category.find({name: category.name}).exec()
        
        if(!result.length){
            await new Category({
                name: category.name
                
            }).save();
            return STATUS.SUCCESS
        }
    }

    console.log("Error saving category " + category.name);
    return STATUS.ERROR
}
async function getCategory(name){
    const result = await Category.findOne({name:name})
    return result
}

async function getCategories(){
    const result = await Category.find();
    return result
}
module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct,
    getCategory,
    getCategories,
    saveCategory,
    updateCategory,
    deleteCategory,
    deleteAll
}