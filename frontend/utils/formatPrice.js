export const formatPrice = (price) => {
  if (price !== undefined && price !== null) {
    price = price.toString();
    const parts = price.split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return parts.join('.');
  } else {
    return "";
  }
}