"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import api from "/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  const login = async (userData) => {
    console.log('UserContext: ', userData)
    try {
      const response = await api.post("/users/login", userData)
      console.log('User Context Login  response: ', response.data)
      setCurrentUser(response.data.user)
    } catch (error) {
      console.log(`Error in login from User Context: ${error}`)
    }
  };
  const logout = () => {
    setCurrentUser(null);
    router.push("/");
  };

  const createAccount = async (userData) => {
    try {
      // Send a POST request to the backend API endpoint to create a new user
      const response = await api.post("/users/create", userData);
      console.log(`User Context: ${JSON.stringify(response.data)}`)
      setCurrentUser(response.data.user);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Rethrow the error to handle it in the component
    }
  };
  const updateUser = async (userData) => {
    try {
      console.log(`Update User: currentUser ${JSON.stringify(currentUser)}`)
      const response = await api.put(`/users/${currentUser.email}`, userData);
      console.log('Update user response ', response.data.user)
      setCurrentUser(response.data.user)
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
