import React from "react";
import { BottomMenu, Header } from "../../Component";
import { Grid, Typography } from "@mui/material";
import { TabMenu } from "../../Component";
import metter from "../../assets/meter.png";

const Meeter = () => {
  return (
    <Grid container backgroundColor="#ffe6e6">
      <Grid item xs={12} md={12} height={{ md: "100vh", xs: "100vh" }}>
        <Header />
        <Grid item md={12} sx={{mt:"80px", display: "flex", justifyContent: "center" }}>
          <TabMenu />
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            display: { md: "flex", xs: "none" },
            alignItems: "center",
            ml:"130px",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Grid item md={4} alignItems="center">
            <img src={metter} style={{ width: "300px", height: "300px" }} />
            <Typography
              style={{
                fontSize: "25px",
                marginLeft: "60px",
                fontWeight: "600",
              }}
            >
              Mental Status
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            alignItems="center"
            style={{ padding: { md: "20px 0px 0px 80px", xs: "0px" } }}
          >
            <img src={metter} style={{ width: "300px", height: "300px" }} />
            <Typography
              style={{
                fontSize: "25px",
                marginLeft: "60px",
                fontWeight: "600",
              }}
            >
              Physical Status
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            alignItems="center"
            style={{ padding: { md: "20px 0px 0px 80px", xs: "0px" } }}
          >
            <img src={metter} style={{ width: "300px", height: "300px" }} />
            <Typography
              style={{
                fontSize: "25px",
                marginLeft: "60px",
                fontWeight: "600",
              }}
            >
              Diabetes Status
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: { md: "none", xs: "flex" },
            alignItems: "center",
            ml: "30px",

            flexDirection: { md: "row", xs: "row" },
          }}
        >
          <Grid item md={4} xs={6}>
            <img src={metter} style={{ width: "100px", height: "100px" }} />
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Mental Status
            </Typography>
          </Grid>

          <Grid item md={4} xs={6} alignItems="center">
            <img src={metter} style={{ width: "100px", height: "100px" }} />
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
            Physical Status
            </Typography>
          </Grid>
        </Grid>
        <Grid ml="30px"   sx={{
              display: { md: "none", xs: "flex" },
            }}>
          <Grid
            item
            xs={12}
            md={4}
            alignItems="center"
          
          >
            <img src={metter} style={{ width: "100px", height: "100px" }} />
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
             Diabetes Status
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={12} sx={{  display: { md: "none", xs: "flex" },justifyContent: "center",mt:"240px" }}>
          <BottomMenu home />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Meeter;
