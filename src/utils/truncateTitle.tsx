const truncateTitle = (productTitle: string, titleLength: number) => {
  if (productTitle.length > titleLength) {
    productTitle = productTitle.substring(0, titleLength) + "...";
  }
  return productTitle;
};

export default truncateTitle;
