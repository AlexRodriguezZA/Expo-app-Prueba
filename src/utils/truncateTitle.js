//Fucnión que nos permite truncar el título del prodcto que nos llega a la card principal del ecommerce 


export const truncateTitle = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };
  