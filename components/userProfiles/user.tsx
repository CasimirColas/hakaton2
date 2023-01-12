import React from "react";
import Image from "next/image";
import { Typography, Box, Paper } from "@mui/material";
import imageWCS from "../../public/images/wscImage.png";
import UserInfoEdit from "./userInfoEdit";

function UserProfile() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <UserInfoEdit />
      <Box
        className="UserInformation"
        sx={{
          height: "45vh",
          display: "flex",
          paddingTop: "5vh",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={imageWCS}
          alt="Picture of a company"
          width="150"
          height="150"
          style={{ borderRadius: "100px", border: "2px solid #D65A00" }}
        />
        <Paper
          sx={{
            height: "auto",
            p: ".5rem",
            bgcolor: "transparent",
            margin: "1rem",
            boxShadow: "1px 1px 6px 1px rgba(0,0,0,0.69)",
          }}
        >
          <Typography align="center" variant="h3">
            LastName <br />
            FirstName
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default UserProfile;
