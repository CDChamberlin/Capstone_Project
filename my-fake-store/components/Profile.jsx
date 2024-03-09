import { Button } from "@mui/material";
import { useUser } from "context/UserContext";

export default function Profile(user) {
const { currentUser } = useUser()
return (
    <>
      <h1>{currentUser.name}</h1>
      <Button onClick='#'>Cart</Button>
    </>
  );
}