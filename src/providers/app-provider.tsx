"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { getStorageData, isInArray, setStorageData } from "@/lib/utils";
import { apiService } from "@/lib/api-service";
import { BookType, TQuiz } from "@/types";
import { toast } from "sonner";
type AppContextType = {
  addToCart: (item: any) => void;
  removeFromCart: (item: any) => void;
  addToWishlist: (item: any, resourceType: "book" | "quiz") => void;
  removeFromWishlist: (item: any) => void;
  cart: (BookType | TQuiz)[];
  wishlist: any[];
};
const initialState = {
  addToCart: () => {},
  removeFromCart: () => {},
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  cart: [],
  wishlist: [],
};
const AppContext = createContext<AppContextType>(initialState);

type Props = React.PropsWithChildren & {};

const AppDataProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState<(BookType | TQuiz)[]>([]);
  const [wishlist, setWishlist] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const addToCart = (item: any) => {
    const itemInCart = isInArray(cart, "_id", item._id);
    if (itemInCart) {
      toast.info("Item Already Added To cart");
      return;
    }
    const prevCart = cart;
    const newCart = [...prevCart, item];
    setCart(newCart);
    setStorageData("cart", newCart);
    toast.success("Item Added successfully");
    // setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
    toast.success("Item deleted Successfully");
  };

  // Wishlist actions
  const addToWishlist = (item: any, resourceType: "book" | "quiz") => {
    const newWishlist = [...wishlist, { resource: item, resourceType }];
    setWishlist(newWishlist);
    toast.success("Added To wishlist");
  };

  const removeFromWishlist = (itemId: any) => {
    setWishlist((prevWishlist: any) =>
      prevWishlist.filter((item: any) => item.resource._id !== itemId)
    );
    toast("Item removed from  wishlist");
  };

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
        }
        //  else {
        //   const [cartResponse, wishlistResponse] = await Promise.all([
        //     apiService({ url: "/api/" }),
        //     apiService({ url: "/wishlist" }),
        //   ]);
        //   setCart(cartResponse.data);
        //   setWishlist(wishlistResponse.data);
        //   setStorageData("cart", JSON.stringify(cartResponse.data));
        //   setStorageData("wishlist", JSON.stringify(wishlistResponse.data));
        // }
      }
    };

    initializeState();
  }, []);
  return (
    <AppContext.Provider
      value={{
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        cart,
        wishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within the app provider");
  }
  return context;
};

export default AppDataProvider;
