import express from 'express';

const app=express();

const port=process.env.port||3000;


app.get('/api/products',(req,res)=>{
    const products=[
        {
            id:1,
            name:"table",
            price:200
        },
        {
            id:2,
            name:"glass",
            price:250
        },
        {
            id:3,
            name:"chair",
            price:100
        },
        {
            id:4,
            name:"phone",
            price:200
        },
        
    ]

    if(req.query.search){
       const filterProducts= products.filter(product=>product.name.includes(req.query.search))
       res.send(filterProducts);
       return;
    }

    setTimeout(()=>{
      res.send(products);
    },3000)
})

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});