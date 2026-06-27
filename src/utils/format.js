export function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function renderStars(rating) {
  const fullStars = Math.round(rating);
  return `${"★".repeat(fullStars)}${"☆".repeat(5 - fullStars)}`;
}

export function iconForCategory(category) {
  switch (category) {
    case "Dishwashing":
      return "Bubbles";
    case "Multi-Surface":
      return "Shine";
    case "Floors":
      return "Fresh";
    case "Bathroom":
      return "Foam";
    case "Kitchen":
      return "Citrus";
    default:
      return "Clean";
  }
}

export function expandedDescription(product) {
  return `${product.description} Designed for busy homes, this RR26 formula works fast without leaving behind overpowering residue. It tackles everyday messes with a balanced blend of cleaning strength and surface-friendly care. The result is a fresher, more polished space that feels easy to maintain day after day.`;
}
