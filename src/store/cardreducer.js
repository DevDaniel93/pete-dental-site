// cartReducer.js
const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
        }; 










      case 'ADD_TO_CART':
        const { productId, variationId, quantity } = action.payload;
  
        // Check if the product already exists in the cart
        const existingProductIndex = state.items.findIndex((item) => item.product_id === productId);
  
        if (existingProductIndex !== -1) {
          // If the product exists, update the quantity and total price
          return {
            ...state,
            items: state.items.map((item, index) =>
              index === existingProductIndex
                ? {
                    ...item,
                    variations: item.variations.map((variation) =>
                      variation.variation_id === variationId
                        ? {
                            ...variation,
                            quantity: variation.quantity + quantity,
                            total_price: variation.total_price + quantity * variation.price,
                          }
                        : variation
                    ),
                  }
                : item
            ),
          };
        } else {
          // If the product doesn't exist, add a new entry to the cart
          return {
            ...state,
            items: [
              ...state.items,
              {
                product_id: productId,
                total_price: quantity * action.payload.product.price,
                variations: [
                  {
                    variation_id: variationId,
                    quantity: quantity,
                    price: action.payload.product_variation.price,
                    total_price: quantity * action.payload.product_variation.price,
                  },
                ],
              },
            ],
          };
        }
      default:
        return state;
      
    }
    
  };
  
  export default cartReducer;
  

 