export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  components: true,
  plugins: ["~/plugins/worker.client.js"],
  build: {
    // publicPath: "https://cdn.nuxtjs.org/",
    extend(config, { isClient }) {
      config.output.globalObject = "this";

      if (isClient) {
        config.module.rules.push({
          test: /\.worker\.(c|m)?js$/i,
          use: [
            {
              loader: "worker-loader",
              options: {
                publicPath: "/worker-not-from-default/"
              }
            }
          ],
          exclude: /(node_modules)/
        });
      }
    }
  }
};
