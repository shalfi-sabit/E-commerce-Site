type productCardProps = {
  id: number;
  imageSource: string;
  className?: string;
  productName: string;
  price: number;
  prevPrice?: number;
  rating: number;
  count: number;
  showDeleteIcon?: boolean;
  showAddToWishlistIcon?: boolean;
  showSeeDetailsIcon?: boolean;
  discount?: number;
};

export default productCardProps;
