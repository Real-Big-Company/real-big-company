const allReports = require("../../data-lake/reports/all/page-1.json");
const allNews = require("../../data-lake/news/all/page-1.json");

module.exports = {
  eleventyComputed: {
    aggregateNews: allNews.values,
    reports: allReports.values,
  },
};
