module.exports = {
  devServer: {
    proxy: {
      "^/users": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "^/products": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "^/orders": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};
