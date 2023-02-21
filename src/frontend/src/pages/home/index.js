import React, { useEffect, useState } from "react";
import {  Header } from "../../Component";
import { Grid,  Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
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
      <Grid item xs={12} md={12} backgroundColor="#f1f1f1">
        <Header />
        <Grid
          item
          align="center"
          onClick={() => navigate("/login")}
          md={12}
          xs={12}
          style={{
            cursor:"pointer",
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              fontSize: "60px",
              fontWeight: "700",
            }}
          >
            ATHANASIA
          </Typography>
          <Typography
            style={{
              fontSize: "15px",
              fontWeight: "700",
            }}
          >
            ATHANASIA ATHANASIA ATHANASIA
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
