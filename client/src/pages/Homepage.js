import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Box p={2}>
      <Stack direction="row" spacing={2}>
        <Box>
          <Typography variant="h4" mb={2} fontWeight="bold">
            TEXT GENERATOR
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Paragraph generator
              </Typography>
              <Typography variant="h6">
                Generate a paragraph on your topic
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box>
          <Typography variant="h4" mb={2} fontWeight="bold">
            CHATBOT
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                ChatBot
              </Typography>
              <Typography variant="h6">
                Ask Me Anything
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box>
          <Typography variant="h4" mb={2} fontWeight="bold">
            SUMMARISE TEXT
          </Typography>
          <Card
            onClick={() => navigate("/Shortme")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                TEXT SUMMARY
              </Typography>
              <Typography variant="h6">
                Summarize long text into short sentences
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box>
          <Typography variant="h4" mb={2} fontWeight="bold">
            STORY GENERATOR
          </Typography>
          <Card
            onClick={() => navigate("/Story")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Generate Story
              </Typography>
              <Typography variant="h6">
                Generate story as per your content
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box>
          <Typography variant="h4" mb={2} fontWeight="bold">
            GRAMMERLY
          </Typography>
          <Card
            onClick={() => navigate("/Grammer")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Grammatical Corrections
              </Typography>
              <Typography variant="h6">
                generate text with grammatical corrections
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box>
          <Typography variant="h4" mb={2} fontWeight="bold">
            CODE LOGIC
          </Typography>
          <Card
            onClick={() => navigate("/Code")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                CODING ALGORITHMS
              </Typography>
              <Typography variant="h6">
                generate a coding logic for the problem statement
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Homepage;

