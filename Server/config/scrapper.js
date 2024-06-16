const puppeteer = require('puppeteer');

const scrapeArticle = async (topic) => {
  const browser = await puppeteer.launch();
  const pageInstance = await browser.newPage();
  
  await pageInstance.goto(`https://medium.com/search/posts?q=${topic}`, {
    waitUntil: 'networkidle2',
    timeout: 60000
  });

  const scrapedArticles = await pageInstance.evaluate(() => {
    const extractPublishDate = (dateString) => {


      
      // Log the dateString for debugging
      console.log('dateString:', dateString);

      // Attempt to match "MMM DD YYYY" format
      const dateMatch = dateString.match(/\b[A-Za-z]{3}\s\d{1,2},\s\d{4}\b/);
      if (dateMatch) {
        return dateMatch[0];
      }

      // If no match, return "No Date available"
      return "No Date available";
    };

    const articles = Array.from(document.querySelectorAll("article"), (element) => ({
      title: element.querySelector("h2") 
        ? element.querySelector("h2").innerText 
        : "No Title",
        authorName: element.querySelector("p") 
        ? element.querySelector("p").innerText 
        : "No Author name",
        article_date: element.querySelector("span") 
        ? extractPublishDate(element.querySelector("span").innerText)
        : "No Date available",
        url: element.querySelector('div[data-href]')
        ? element.querySelector('div[data-href]').getAttribute('data-href')
        : "No url available",
    }));


   // Limit to 5 articles
    return articles.slice(0, 5); 
  });

  await browser.close();

  return scrapedArticles;
}

module.exports = { scrapeArticle };
