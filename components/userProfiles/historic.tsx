import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import HistoData from "./HistoData.json";

export default function Historic() {
  const rows = HistoData;
  return (
    <Box sx={{ m: "5vh 5vw" }}>
      <Typography variant="h3">Historic of hiring</Typography>
      <TableContainer sx={{ p: 0, marginBottom: "5vh" }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ bgcolor: "secondary.main", color: "white", p: "0.5rem" }}
              >
                Vehicle
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  p: "0.5rem 1rem",
                }}
                align="center"
              >
                Date
              </TableCell>
              <TableCell
                sx={{ bgcolor: "secondary.main", color: "white", p: "0.5rem" }}
                align="center"
              >
                Duration
              </TableCell>
              <TableCell
                sx={{ bgcolor: "secondary.main", color: "white", p: "0.5rem" }}
                align="center"
              >
                Rate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ p: "0.5rem" }} component="th" scope="row">
                  {row.vehicle}
                </TableCell>
                <TableCell sx={{ p: "0.5rem 1rem" }} align="center">
                  {row.date}
                </TableCell>
                <TableCell sx={{ p: "0.5rem" }} align="center">
                  {row.duration}
                </TableCell>
                <TableCell sx={{ p: "0.5rem" }} align="center">
                  {row.rating}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
