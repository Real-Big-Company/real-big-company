const allReports = require("../../data-lake/reports/all/page-1.json");
const syndicatedNews = require("../../data-lake/news/aggregate/syndicate/true/page-1.json");

module.exports = {
  eleventyComputed: {
    syndicatedNews: syndicatedNews.values,
    reports: allReports.values,
  },
};
