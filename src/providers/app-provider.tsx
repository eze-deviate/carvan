import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import { getStorageData, setStorageData } from "@/lib/utils";
import { apiService } from "@/lib/api-service";
const initialState = {};
const AppContext = createContext<any>(initialState);
type Props = {};

const AppDataProvider = (props: Props) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeState = async () => {
      if (typeof window !== "undefined") {
        const storedUserData = getStorageData("user");
        const storedCart = getStorageData("cart");
        const storedWishlist = getStorageData("wishlist");

        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
          setIsAuthenticated(true);
        }

        if (storedCart && storedWishlist) {
          setCart(JSON.parse(storedCart));
          setWishlist(JSON.parse(storedWishlist));
          setLoading(false);
        } else {
          const [cartResponse, wishlistResponse] = await Promise.all([
            apiService({ url: "/api/" }),
            apiService({ url: "/wishlist" }),
          ]);
          setCart(cartResponse.data);
          setWishlist(wishlistResponse.data);
          setStorageData("cart", JSON.stringify(cartResponse.data));
          setStorageData("wishlist", JSON.stringify(wishlistResponse.data));
        }
      }
    };

    initializeState();
  }, []);
  return <AppContext.Provider value={{}}></AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within the app provider");
  }
  return context;
};

export default AppDataProvider;
