const express  = require('express');
const newsss= express.Router();
const axios = require('axios')

newsss.get("/",async(req,res)=>{
    // res.write("This is node modules");
    // res.send();
    try{
        let url = 'http://api01.quotes.rest/quote/random?'+'language=en'+'&limit=1';
        const news_get = await axios.get(url);
        const articless= news_get.data.articles;
        //console.log(articless);
        res.render('news',{
            articless:news_get.data.articles,
        });
    }catch(error){
        if(error.response){
            console.log(error);
        }
    }
})

newsss.get("/tech",async(req,res)=>{
    // res.write("This is node modules");
    // res.send();
    try{
        let url = 'https://newsapi.org/v2/top-headlines?'+'category=technology&language=en'+'&apiKey=f5e9ae7370974ee6985487ea2649d36f';
        const news_get = await axios.get(url);
        const articless= news_get.data.articles;
        //console.log(articless);
        res.render('news',{
            articless:news_get.data.articles,
        });
    }catch(error){
        if(error.response){
            console.log(error);
        }
    }
})

newsss.get("/business",async(req,res)=>{
    // res.write("This is node modules");
    // res.send();
    try{
        let url = 'https://newsapi.org/v2/top-headlines?'+'category=business&language=en'+'&apiKey=f5e9ae7370974ee6985487ea2649d36f';
        const news_get = await axios.get(url);
        const articless= news_get.data.articles;
        //console.log(articless);
        res.render('news',{
            articless:news_get.data.articles,
        });
    }catch(error){
        if(error.response){
            console.log(error);
        }
    }
})

newsss.get("/sports",async(req,res)=>{
    // res.write("This is node modules");
    // res.send();
    try{
        let url = 'https://newsapi.org/v2/top-headlines?'+'category=sports&language=en'+'&apiKey=f5e9ae7370974ee6985487ea2649d36f';
        const news_get = await axios.get(url);
        const articless= news_get.data.articles;
        //console.log(articless);
        res.render('news',{
            articless:news_get.data.articles,
        });
    }catch(error){
        if(error.response){
            console.log(error);
        }
    }
})

newsss.get("/entertainment",async(req,res)=>{
    // res.write("This is node modules");
    // res.send();
    try{
        let url = 'https://newsapi.org/v2/top-headlines?'+'category=entertainment&language=en'+'&apiKey=f5e9ae7370974ee6985487ea2649d36f';
        const news_get = await axios.get(url);
        const articless= news_get.data.articles;
        //console.log(articless);
        res.render('news',{
            articless:news_get.data.articles,
        });
    }catch(error){
        if(error.response){
            console.log(error);
        }
    }
})

newsss.post("/search", async(req,res)=>{
 
    const query= req.body.search;
 
try{
 
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=bd382aa8ab3543d29d1e6e9d7ccbb32d`;
    const news_get= await axios.get(url);
   
 
    // console.log(articless);
    res.render('news',{
      articless: news_get.data.articles,
    });
  }catch(error){
     if(error.response){
         console.log(error);
     }
  }
 
})


module.exports=newsss