import React from "react";
import { Grid, Box, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <>
      <Link to="/Medical">
        <Button>
          <Box
            sx={{
              marginLeft: { md: "0px ", xs: "120px" },
              marginRight: "15px",
              borderRadius: "20px",
              border: "4px solid gray",
              padding: "10px",
            }}
          >
            <VolunteerActivismIcon fontSize="large" style={{ color: "red" }} />
          </Box>
        </Button>
      </Link>
      <Link to="/Meter">
        <Button>
          <Box
            sx={{
              marginLeft: "15px",
              borderRadius: "20px",
              border: "4px solid gray",
              padding: "10px",
            }}
          >
            <NotificationsIcon fontSize="large" style={{ color: "red" }} />
          </Box>
        </Button>
      </Link>
    </>
  );
};

export default index;
