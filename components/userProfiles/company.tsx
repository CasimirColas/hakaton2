import React from "react";
import Image from "next/image";
import { Typography, Box, Paper } from "@mui/material";
import "@fontsource/righteous";
import imageWCS from "../../public/images/wscImage.png";
import CompanyInfoEdit from "../companyProfil/companyInfo";

function CompanyProfile() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <CompanyInfoEdit />
      <Box
        className="companyInformation"
        sx={{
          height: "25vh",
          display: "flex",
          paddingTop: "10vh",
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
            marginBottom: "1rem",
            boxShadow: "1px 1px 6px 1px rgba(0,0,0,0.69)",
          }}
        >
          <Typography align="center" variant="h3">
            Company Name
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default CompanyProfile;
