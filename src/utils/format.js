export function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getBasePrice(product) {
  return product.size[0]?.price ?? 0;
}

export function formatPriceRange(product) {
  const prices = product.size.map((variant) => variant.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  if (minPrice === maxPrice) {
    return formatPrice(minPrice);
  }

  return `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
}

export function renderStars(rating) {
  const fullStars = Math.round(rating);
  return `${"★".repeat(fullStars)}${"☆".repeat(5 - fullStars)}`;
}

export function iconForCategory(category) {
  switch (category) {
    case "Laundry Care":
      return "Laundry";
    case "Kitchen Care":
      return "Kitchen";
    case "Personal Care":
      return "Fresh";
    case "Bathroom Care":
      return "Shield";
    case "Home Care":
      return "Floor";
    default:
      return "Clean";
  }
}

export function expandedDescription(product) {
  return `${product.description} Designed for busy homes, this RR26 formula works fast without leaving behind overpowering residue. It balances cleaning strength with everyday practicality, helping you keep spaces fresh, neat, and easy to maintain.`;
}
