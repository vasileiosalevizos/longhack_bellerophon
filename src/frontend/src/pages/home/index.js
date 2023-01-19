import React from "react";
import { BottomMenu, Header } from "../../Component";
import { Grid, Box, Typography } from "@mui/material";
import { TabMenu } from "../../Component";
import profile from "../../assets/profile.png";

const Home = () => {
  return (
    <Grid container backgroundColor="#ffe6e6">
      <Grid item xs={12} md={12} height="100vh">
        <Header />
        <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
          <TabMenu />
        </Grid>
        <Grid style={{ display: "flex", padding: "20px 0px 0px 80px" }}>
          <img
            src={profile}
            style={{ borderRadius: "100px", width: "100px", height: "100px" }}
          />
          <Typography
            style={{
              margin: "60px 0px 0px 10px",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Maggie_32
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            mt: "360px",
            display: { md: "none", xs: "flex" },
            justifyContent: "center",
          }}
        >
          <BottomMenu home record id />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
