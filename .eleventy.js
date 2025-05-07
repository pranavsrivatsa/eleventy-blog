export default function (eleventyConfig) {
  eleventyConfig.addFilter("uppercase", function (value) {
    return value.toUpperCase();
  });

  // Copy the processed CSS directory to the output
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.setTemplateFormats("html,liquid,njk,md");

  eleventyConfig.addCollection("tagList", function (collectionApi) {
    let tagSet = new Set();
    collectionApi.getAll().forEach((item) => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") {
          tags = [tags];
        }
        tags.forEach((tag) => tagSet.add(tag));
      }
    });
    return [...tagSet].sort();
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
