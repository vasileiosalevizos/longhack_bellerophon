import React, { useState } from "react";
import { Header, Input } from "../../Component";
import { Grid, Box, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { useNavigate } from "react-router-dom";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const Index = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = () => {
    return signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/user");
    });
  };
  console.log("email", email + password);
  const navigate = useNavigate();
  return (
    <Grid
      container
      backgroundColor="#f1f1f1"
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <Grid
        item
        xs={11.5}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          item
          align="center"
          md={12}
          xs={12}
          mt="80px"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: "700",
            }}
          >
            ATHANASIA
          </Typography>
          <Typography
            sx={{
              mb: "40px",
              fontSize: "15px",
              fontWeight: "700",
            }}
          >
            ATHANASIA ATHANASIA ATHANASIA
          </Typography>
          <Box
            sx={{
              backgroundColor: "lightgray",
              height: "130px",
              borderRadius: "18px",
              width: "130px",
            }}
          >
            <Person2RoundedIcon style={{ fontSize: "130px" }} />
          </Box>
          <Box mt="20px">
            <Input
              type="email"
              width="360px"
              border="1px solid gray"
              placeholder="email"
              backgroundColor="white"
              borderRadius="10px"
              onChange={(e) => setEmail(e.target.value)}
              inputIcon={<EmailRoundedIcon />}
            />
          </Box>
          <Box mt="20px">
            <Input
              type="password"
              width="360px"
              border="1px solid gray"
              placeholder="password"
              backgroundColor="white"
              borderRadius="10px"
              onChange={(e) => setPassword(e.target.value)}
              inputIcon={<KeyRoundedIcon />}
            />
          </Box>
          <Box mt="30px" onClick={signIn}>
            <LoginRoundedIcon style={{ fontSize: "100px" }} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
