import React from "react";

import { Grid, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import { Link } from "react-router-dom";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const bottomMenu = ({ File, home, record, id, summary }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {" "}
      {home ? (
        <Grid item xs={3} align="center">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <HomeIcon />
            <Typography>Home</Typography>
          </Link>
        </Grid>
      ) : null}
      {File ? (
        <Grid item xs={3} align="center">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/TransferFile"
          >
            <PlagiarismIcon />
            <Typography>File Transfer</Typography>
          </Link>
        </Grid>
      ) : null}
      {record ? (
        <Grid item xs={3} align="center">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Medical"
          >
            <NoteAddIcon />
            <Typography>Medical Records</Typography>
          </Link>
        </Grid>
      ) : null}
      {id ? (
        <Grid item xs={3} align="center">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to=""
          >
            <AcUnitIcon />
            <Typography>Medical ID</Typography>
          </Link>
        </Grid>
      ) : null}
      {summary ? (
        <Grid item xs={3} align="center">
          <Link style={{ textDecoration: "none", color: "black" }} to="/Meter">
            <PlagiarismIcon />
            <Typography>Summary</Typography>
          </Link>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default bottomMenu;
