import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/principal');
    };

    return (
        <Container maxWidth="lg" sx={{ 
            minHeight: '100vh',        
            display: 'flex',           
            flexDirection: 'column',   
            justifyContent: 'center',  
            alignItems: 'center'       
        }}>
            <Grid container spacing={1}>
                <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, }}>
                    <Typography variant="h1">Welcome to AlimentAI </Typography>
                </Grid>
                <Grid size={12} sx={{m:5}}>
                    <Button variant="outlined" color="primary" endIcon={<SendIcon />} 
                    onClick={handleNext}>
                        <Typography variant="h4">Next</Typography>
                    </Button>
                </Grid>
                
            </Grid>
            
            
        </Container>
    );
}
export default Home;