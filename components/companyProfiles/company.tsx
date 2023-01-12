import React from "react";
import Image from "next/image";
import { Typography, Box, Paper, Button, Modal } from "@mui/material";
import "@fontsource/righteous";
import imageWCS from "../../public/images/wscImage.png";
import CompanyInfoEdit from "./companyInfoEdit";
import AddAVehicle from "./addAVehicle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function CompanyProfile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CompanyInfoEdit />
      <Box
        className="companyInformation"
        sx={{
          height: "45vh",
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
      <Button
        sx={{
          bgcolor: "secondary.main",
          position: "fixed",
          m: "2rem 1rem",
          p: ".5rem",
          right: 0,
          bottom: 0,
        }}
        onClick={() => handleOpen()}
      >
        <Typography>Add a vehicle</Typography>
        <AddCircleIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <AddAVehicle />
      </Modal>
    </Box>
  );
}

export default CompanyProfile;
