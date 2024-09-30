const mongoose=require("mongoose");
const schema = mongoose.Schema({
     
    //Write missing code here
        title:'String',
        author:'String',
        category:'String',
        content:'String',
        publishedDate: { 
            type: Date, default: Date.now
         }
    
});

//Write missing code here
const blogData = mongoose.model('blog',schema);

module.exports = blogData;
