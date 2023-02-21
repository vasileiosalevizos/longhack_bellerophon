import React, { useEffect,  useState } from "react";
import { BottomMenu, Header } from "../../Component";

import {
  Grid,
  Box,
  Typography,

  Button,
} from "@mui/material";
import { TabMenu } from "../../Component";

const Transfer = () => {
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
  // const handleUploadClick = () => {
  //   // 👇 We redirect the click event onto the hidden input element
  //   inputRef.current?.click();
  // };
  // const handleFileChange = (e) => {
  //   if (!e.target.files) {
  //     return;
  //   }
  //   // setSelectedImage(e.target.files[0]);
  //   imageUrl(e.target.files[0]);
  //   localStorage.setItem("img", imageUrl);
  //   // 🚩 do the file upload here normally...
  // };

  return (
    <Grid
      container
      height="100vh"
      backgroundColor="#ffe6e6"
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Grid item md={12} xs={12} height="100vh">
        <Header />
        <Grid item xs={12}md={12} sx={{mt:"80px", display: "flex", justifyContent: "center" }}>
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
              <div>
                {/* <div>Upload a file:</div> */}

                {/* 👇 Our custom button to select and upload a file */}
                {/* {imageUrl && selectedImage && (
                  <Box mt={2} textAlign="center">
                  </Box>
                )}
                {imageUrl ? (
                  <img src={imageUrl} alt={selectedImage.name} height="100px" />
                ) : null} */}
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  name="Upload a file"
                  style={{
                    width:"220px",
                    opacity: "0",
                    marginTop: "8px",
                    position: "absolute",
                  }}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <button
                  style={{
                    fontSize: "27px",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  // onClick={handleFileChange}
                >
                  {/* browser */}
                  {imageUrl ? `Browser` : "Browser"}
                </button>
              </div>
              {/* Browser */}
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
          <BottomMenu home />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Transfer;
