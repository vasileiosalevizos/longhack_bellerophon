import React from "react";
import { BottomMenu, Header } from "../../Component";

import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import {
  Grid,
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { TabMenu, Accordion } from "../../Component";
import profile from "../../assets/profile.png";

const Meter = () => {
  return (
    <Grid
      container
      height="100vh"
      // pb="100px"
      backgroundColor="#ffe6e6"
     
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Grid item md={12}  height="100vh">
        <Header />
        <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
          <TabMenu />
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            mt: "30px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Transfer Files
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            mt: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
              width: { md: "500px", xs: "100%" },
              height: "300px",
              border: "3px dashed gray",
            }}
          >
            <Typography
              style={{
                fontSize: "27px",
              }}
            >
              Drag and Drop
              <br /> Or
              <br />
              Browser
            </Typography>{" "}
          </Box>
          <Grid item md={12} mt="30px">
            <Button
              sx={{
                textTransform: "capitalize",
                fontSize: "20px",
                fontWeight: "500",
                padding: "0px 140px",
                color: "#ff6666",
                border: "1px solid black",
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
          <Grid
          item
          md={12}
          sx={{
            mt: "40px",
            display: { md: "none", xs: "flex" },
            justifyContent: "center",
          }}
        >
          <BottomMenu  home />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Meter;
