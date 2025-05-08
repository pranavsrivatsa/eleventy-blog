import { feedPlugin } from "@11ty/eleventy-plugin-rss";

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

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // or "rss", "json"
    feed: {
      ttl: 60,
    },
    outputPath: "/feed.xml",
    collection: {
      name: "post", // iterate over `collections.post`
      limit: 10, // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Blog Title",
      subtitle: "This is a longer description about your blog.",
      base: "https://eleventy-blog-gamma.vercel.app/",
      author: {
        name: "PS",
        email: "p@g.co", // Optional
      },
    },
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
