import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const QRCodeGenerator = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const [inputText, setInputText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const generateQrCode = () => {
    const encodedText = encodeURIComponent(inputText);
    const qrUrl = `https://quickchart.io/qr?text=${encodedText}&size=300&margin=1&dark=000000&light=ffffff&ecLevel=M`;
    setQrCodeUrl(qrUrl);
  };

  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Typography variant="h3">QR Code Generator</Typography>
      <TextField
        label="Enter Text for QR Code"
        placeholder="Enter your text or URL"
        multiline
        fullWidth
        margin="normal"
        value={inputText}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{ mt: 2, color: "white" }}
        onClick={generateQrCode}
      >
        Generate QR Code
      </Button>

      {qrCodeUrl && (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <img
            src={qrCodeUrl}
            alt="Generated QR Code"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 5,
            }}
          />
        </Card>
      )}
    </Box>
  );
};

export default QRCodeGenerator;
