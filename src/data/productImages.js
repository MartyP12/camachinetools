const imageModules = import.meta.glob("../assets/product_images/**/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
});

export const productImages = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [
    path.replace("../assets/product_images/", ""),
    src,
  ])
);

export const getProductImage = (fileName) => {
  if (!fileName) return null;

  return productImages[fileName.replace(/^\/+/, "")] || null;
};

export const getProductImages = (fileNames = []) => {
  return fileNames.map(getProductImage).filter(Boolean);
};
