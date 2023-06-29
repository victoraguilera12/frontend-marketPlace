import { createContext  } from "react";

const CategoryContext = createContext({
    categories:[],
    setCategories: (cat) =>{},
});


export default CategoryContext;