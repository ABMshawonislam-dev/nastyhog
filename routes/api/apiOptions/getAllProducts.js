function getAllProducts() {
  return {
    method: "GET",
    url: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@nastyhogdev.myshopify.com/admin/api/2023-04/products.json`,
    headers: {
      "Content-Type": "application/json",
    },
  };
}

module.exports = getAllProducts;
