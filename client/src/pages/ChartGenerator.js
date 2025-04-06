import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card } from '@mui/material';

const ChartGenerator = () => {
    const [description, setDescription] = useState('');
    const [chartUrl, setChartUrl] = useState('');
    const [error, setError] = useState('');

    const generateChart = (e) => {
        e.preventDefault();

        if (!description) {
            setError('Please enter a chart description.');
            return;
        }

        const encodedDescription = encodeURIComponent(description);
        const url = `https://quickchart.io/natural/${encodedDescription}`;

        setChartUrl(url);
        setError('');
    };

    return (
        <Box
            width="80%"
            p={3}
            m="2rem auto"
            borderRadius={5}
            sx={{ boxShadow: 5, backgroundColor: 'background.alt' }}
        >
            <Typography variant="h4" mb={2}>
                Generate a Chart from Natural Language
            </Typography>
            <form onSubmit={generateChart}>
                <TextField
                    label="Enter chart description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {error && (
                    <Typography variant="body2" color="error" mt={1}>
                        {error}
                    </Typography>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Generate Chart
                </Button>
            </form>

            {chartUrl && (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        borderRadius: 5,
                        borderColor: 'natural.medium',
                        bgcolor: 'background.default',
                        textAlign: 'center',
                        padding: 2,
                    }}
                >
                    <Typography variant="h6" mb={2}>
                        Generated Chart:
                    </Typography>
                    <img src={chartUrl} alt="Generated Chart" style={{ width: '100%', maxHeight: '500px' }} />
                </Card>
            )}
        </Box>
    );
};

export default ChartGenerator;
