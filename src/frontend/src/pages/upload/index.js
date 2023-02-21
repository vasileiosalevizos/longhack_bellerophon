import React, { useEffect, useState } from "react";
import { Header } from "../../Component";
import { Grid, Box, Typography } from "@mui/material";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
const Index = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);

  // const inputRef = useRef();

  // console.log("files", selectedImage.name);

  // fetchapi
  const api = async () => {
    await fetch("https://example.com/api/resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New Resource",
        description: "This is a new resource",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (selectedImage) {
      const fileName = setImageUrl(URL.createObjectURL(selectedImage));

      localStorage.setItem("imge", imageUrl);
      localStorage.setItem("name", selectedImage.name);
    }
    api();
  });
  return (
    <Grid
      container
      height="100vh"
      backgroundColor="#f1f1f1"
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Grid item md={12} xs={12}>
        <Header />
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
          <Grid
            item
            align="center"
            md={12}
            xs={12}
            mt="50px"
            sx={{
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
                mb: "30px",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              ATHANASIA ATHANASIA ATHANASIA
            </Typography>

            {imageUrl ? (
              <img
                alt=""
                src={imageUrl}
                style={{
                  borderRadius: "100px",
                  width: "100px",
                  height: "100px",
                }}
              />
            ) : (
              <Box
                sx={{
                  backgroundColor: "lightgray",
                  height: "130px",
                  borderRadius: "18px",
                  width: "130px",
                }}
              >
                <Person2RoundedIcon sx={{ fontSize: "130px" }} />
              </Box>
            )}

            <Box mt="100px" ml="120px">
              <FileUploadRoundedIcon
                sx={{
                  fontSize: "100px",
                  cursor: "pointer",
                  position: "absolute",
                  
                }}
              />
              <input
                accept="image/*"
                type="file"
                id="select-image"
                name="Upload a file"
                style={{
                  width: "220px",
                  cursor: "pointer",
                  opacity: "0",
                  marginTop: "35px",
                  position: "relative",
                }}
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </Box>
            <Box mt="30px">
              <Typography
                sx={{
                  fontSize: "40px",
                }}
              >
                Add Data
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
