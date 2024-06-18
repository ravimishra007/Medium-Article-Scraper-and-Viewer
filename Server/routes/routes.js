const express=require("express");
const { createScrapArticle, getArticles } = require("../controllers/articleScrapper");
const articleScrapperRouter= express.Router()


articleScrapperRouter.post('/scrape',createScrapArticle)
articleScrapperRouter.get('/articles',getArticles)
  
  module.exports ={articleScrapperRouter}