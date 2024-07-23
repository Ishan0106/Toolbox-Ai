import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    TextField,
    Button,
    Alert,
    Collapse,
    Card,
} from "@mui/material";

const Grammer = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    //media
    const isNotMobile = useMediaQuery("(min-width: 1000px)");

    const [error, setError] = useState("");
    const [input, setInput] = useState('');
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        setQuestion(`${input}. Please correct any grammatical mistakes in the above text.`);
    }, [input]);

    async function generateAnswer(e) {
        e.preventDefault();
        setAnswer("Loading your answer... \n It might take up to 10 seconds");
        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC_XE0NDHPKp4jBBdGqHplfoCHyicXbHUA",
                method: "post",
                data: {
                    contents: [{ parts: [{ text: question }] }],
                },
            });

            console.log(response.data);
            setAnswer(
                response.data.candidates[0].content.parts[0].text
            );
        } catch (error) {
            console.log(error);
            setAnswer("Sorry - Something went wrong. Please try again!");
        }
    }

    return (
        <Box
            width={isNotMobile ? "40%" : "80%"}
            p={"2rem"}
            m={"2rem auto"}
            borderRadius={5}
            sx={{ boxShadow: 5 }}
            backgroundColor={theme.palette.background.alt}
        >
            <Collapse in={error}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            </Collapse>
            <form onSubmit={generateAnswer}>
                <Typography variant="h3">Provide text to correct grammatical mistakes</Typography>

                <TextField
                    placeholder="Add your text"
                    type="text"
                    multiline={true}
                    required
                    margin="normal"
                    fullWidth
                    value={input}
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ color: "white", mt: 2 }}
                >
                    Submit
                </Button>
                <Typography mt={2}>
                    Not this tool? <Link to="/">GO BACK</Link>
                </Typography>
            </form>

            {answer ? (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography p={2}>{answer}</Typography>
                </Card>
            ) : (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography
                        variant="h5"
                        color="natural.main"
                        sx={{
                            textAlign: "center",
                            verticalAlign: "middle",
                            lineHeight: "450px",
                        }}
                    >
                        Corrected text will appear here
                    </Typography>
                </Card>
            )}
        </Box>
    );
};

export default Grammer;
