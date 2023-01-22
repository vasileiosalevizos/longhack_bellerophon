import React, { useEffect, useState } from "react";
import { BottomMenu, Header } from "../../Component";
import { Grid, Box, Typography } from "@mui/material";
import { TabMenu } from "../../Component";
import profile from "../../assets/profile.png";

const Home = () => {
  const [imgProfile, setProfile] = useState(null);
  const [name, setName] = useState(null);

  console.log("imgs", imgProfile);
  useEffect(() => {
    const getPrifile = localStorage.getItem("imge");
    const getName = localStorage.getItem("name");

    setProfile(getPrifile);
    setName(getName);
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} md={12} height="100vh" backgroundColor="#ffe6e6">
        <Header />
        <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
          <TabMenu />
        </Grid>
        <Grid
          item
          md={12}
          style={{ display: "flex", padding: "20px 0px 0px 80px" }}
        >
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
          style={{ display: "flex", padding: "30px 0px 0px 20px" }}
        >
          <img
            src={imgProfile}
            style={{ borderRadius: "100px", width: "50px", height: "50px" }}
          />
          <Box sx={{ width: "auto" }}>
            <Typography
              style={{
                margin: "20px 0px 0px 10px",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {name}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            pt: "270px",
            // alignSelf:"end",
            display: { md: "none", xs: "flex" },
            justifyContent: "center",
          }}
        >
          <BottomMenu File home record id />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
