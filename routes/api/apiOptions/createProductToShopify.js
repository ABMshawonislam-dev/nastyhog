function createProductToShopify(
  title,
  body_html,
  vendor,
  product_type,
  created_at,
  updated_at,
  handle,
  status,
  tags,
  variants
) {
  // console.log(variants)
  return {
    method: "POST",
    url: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@nastyhogdev.myshopify.com/admin/api/2023-04/products.json`,

    data: JSON.stringify({
      product: {
        title: `${title} ${variants.size} ${variants.color}`,
        body_html,
        vendor,
        product_type,
        created_at,
        updated_at,
        handle,
        status,
        tags,
        variants: [
          {
            price: variants.price,
          },
        ],
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
}

module.exports = createProductToShopify;
