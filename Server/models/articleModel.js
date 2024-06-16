const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  authorName: String,
  article_date: String,
  url: String
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;