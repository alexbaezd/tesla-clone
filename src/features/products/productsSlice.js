import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  accessories: [
    {
      id: 0,
      title: "Lowest Cost Solar Panels in America",
      description: "Money-back guarantee",
      image: "solar-panel",
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      id: 1,
      title: "Solar for New Roofs",
      description: "Solar Roof Less Than a New Roof Plus Solar Panels",
      image: "solar-roof",
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      id: 2,
      title: "Accessories",
      description: "",
      image: "accessories",
      rightButtonText: "Shop Now",
    },
  ],
}

const Products = createSlice({
  name: "products",
  initialState,
  reducers: {},
})

export const selectedNameAccessories = state =>
  state.products.accessories.map(accessory => accessory.title)
export const selectedAccessories = state => state.products.accessories

export default Products.reducer
