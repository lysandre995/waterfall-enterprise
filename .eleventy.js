const fs = require("fs");

module.exports = function (eleventyConfig) {
    // copy content of these folders
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/lang");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "dist"
        },
        markdownTemplateEngine: "njk"
    };
};
