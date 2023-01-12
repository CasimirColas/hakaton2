import React from "react";
import Image from "next/image";
import { Typography, Box, Paper, Button, Modal } from "@mui/material";
import "@fontsource/righteous";
import imageWCS from "../../public/images/wscImage.png";
import CompanyInfoEdit from "./companyInfoEdit";
import AddAVehicle from "./addAVehicle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HiredNow from "./hiredNow";

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
        overflow: "scroll",
      }}
    >
      <CompanyInfoEdit />
      <Box
        className="companyInformation"
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
            Company Name
          </Typography>
        </Paper>
      </Box>
      <HiredNow companyName="BSP%20Auto" />
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "80vh",
            width: "95vw",
            bgcolor: "primary.main",
            borderRadius: "10px",
          }}
        >
          <AddAVehicle />
        </Box>
      </Modal>
    </Box>
  );
}

export default CompanyProfile;
