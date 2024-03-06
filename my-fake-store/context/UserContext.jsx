"use client";
import api from "@/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  const login = (userData) => {
    // Logic to handle login
    // Circle Back after MVP
    setCurrentUser(userData);
  };
  const logout = () => {
    setCurrentUser(null);
    router.push("/");
  };

  const createAccount = async (userData) => {
    try {
      // Send a POST request to the backend API endpoint to create a new user
      const response = await api.post("/users/create", userData);
      setCurrentUser(userData);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Rethrow the error to handle it in the component
    }
  };
  const updateUser = async (userData) => {
    try {
      const response = await api.put(`/users/${currentUser.email}`, userData);
    } catch (error) {
      console.error("Error updating user: ", error);
      throw error;
    }
  };

  const deleteUser = async (email) => {
    try {
      const response = await api.delete(`/users/${email}`);
      setCurrentUser(null)
      router.push("/")
    } catch (error) {
      console.error("Error deleting user: ", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
        login,
        createAccount,
        logout,
        updateUser,
        deleteUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
