import { Typography } from "@mui/material";
import Link from "next/link";

export default function Copyright(props) {
    return(
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright ©'}
            <Link color="inherit" href="#">
                Cat and Mouse Collectibles
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography> 
    )
    
}