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
    outputPath: "/feed.xml",
    collection: {
      name: "podcast",
      limit: 10,
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

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/podcast-feed.xml",
    collection: {
      name: "podcast_episode",
      limit: 0,
    },
    metadata: {
      language: "en",
      title: "The Eleventy Podcast",
      subtitle:
        "Exploring the world of static site generation with Eleventy - discussing performance, SEO, and modern web development best practices.",
      base: "https://eleventy-blog-gamma.vercel.app/",
      author: {
        name: "Pranav Srivatsa",
        email: "p@g.co",
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
