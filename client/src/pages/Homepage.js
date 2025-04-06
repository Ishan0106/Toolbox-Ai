/*
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
        <Box>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Qr Code Generator
          </Typography>
          <Card
            onClick={() => navigate("/QRCodeGenerator")}
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
                QR GENERATOR
              </Typography>
              <Typography variant="h6">
                generate a Qr code for you!!!!
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Chart Generator
          </Typography>
          <Card
            onClick={() => navigate("/ChartGenerator")}
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
                CHART GENERATOR
              </Typography>
              <Typography variant="h6">
                generate a logic chart for you!!!!
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Homepage;
*/
/*
import React from "react";
import { Box, Typography, Card, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";

const Homepage = () => {
  const navigate = useNavigate();
  const tools = [
    {
      title: "TEXT GENERATOR",
      description: "Generate a paragraph on your topic",
      link: "/summary",
      label: "Paragraph generator",
    },
    {
      title: "CHATBOT",
      description: "Ask Me Anything",
      link: "/chatbot",
      label: "ChatBot",
    },
    {
      title: "SUMMARISE TEXT",
      description: "Summarize long text into short sentences",
      link: "/Shortme",
      label: "TEXT SUMMARY",
    },
    {
      title: "STORY GENERATOR",
      description: "Generate story as per your content",
      link: "/Story",
      label: "Generate Story",
    },
    {
      title: "GRAMMERLY",
      description: "Generate text with grammatical corrections",
      link: "/Grammer",
      label: "Grammatical Corrections",
    },
    {
      title: "CODE LOGIC",
      description: "Generate a coding logic for the problem statement",
      link: "/Code",
      label: "CODING ALGORITHMS",
    },
    {
      title: "Qr Code Generator",
      description: "Generate a QR code for you!!!!",
      link: "/QRCodeGenerator",
      label: "QR GENERATOR",
    },
    {
      title: "Chart Generator",
      description: "Generate a logic chart for you!!!!",
      link: "/ChartGenerator",
      label: "CHART GENERATOR",
    },
  ];

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography variant="h4" mb={2} fontWeight="bold">
              {tool.title}
            </Typography>
            <Card
              onClick={() => navigate(tool.link)}
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 190,
                width: "100%",
                backgroundColor: "#f0f0f0", // Grey color for the box
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
                  {tool.label}
                </Typography>
                <Typography variant="h6">{tool.description}</Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Homepage;
*/

import React from "react";
import { Box, Typography, Card, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";

const Homepage = () => {
  const navigate = useNavigate();
  const tools = [
    {
      title: "TEXT GENERATOR",
      description: "Generate a paragraph on your topic",
      link: "/summary",
      label: "Paragraph generator",
    },
    {
      title: "CHATBOT",
      description: "Ask Me Anything",
      link: "/chatbot",
      label: "ChatBot",
    },
    {
      title: "SUMMARISE TEXT",
      description: "Summarize long text into short sentences",
      link: "/Shortme",
      label: "TEXT SUMMARY",
    },
    {
      title: "STORY GENERATOR",
      description: "Generate story as per your content",
      link: "/Story",
      label: "Generate Story",
    },
    {
      title: "GRAMMERLY",
      description: "Generate text with grammatical corrections",
      link: "/Grammer",
      label: "Grammatical Corrections",
    },
    {
      title: "CODE LOGIC",
      description: "Generate a coding logic for the problem statement",
      link: "/Code",
      label: "CODING ALGORITHMS",
    },
    {
      title: "QR CODE GENERATOR",
      description: "Generate a QR code for you!!!!",
      link: "/QRCodeGenerator",
      label: "QR GENERATOR",
    },
    {
      title: "CHART GENERATOR",
      description: "Generate a logic chart for you!!!!",
      link: "/ChartGenerator",
      label: "CHART GENERATOR",
    },
  ];

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography variant="h4" mb={2} fontWeight="bold">
              {tool.title}
            </Typography>
            <Card
              onClick={() => navigate(tool.link)}
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 190,
                width: "100%",
                backgroundColor: "#f0f0f0", // Grey color for the box
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
                  {tool.label}
                </Typography>
                <Typography variant="h6">{tool.description}</Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Homepage;
