import React, { useState } from 'react';
import { 
    Container, 
    Typography, 
    Button, 
    Grid, 
    Box, 
    TextField, 
    Paper, 
    List, 
    ListItem, 
    ListItemText,
    IconButton,
    Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import AccountMenu from '../components/Header';

function Principal() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! Soy tu asistente de AlimentAI. ¿En qué puedo ayudarte?", isBot: true }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const handleBack = () => {
        navigate('/');
    };

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            // Agregar mensaje del usuario
            const userMessage = {
                id: messages.length + 1,
                text: inputMessage,
                isBot: false
            };
            
            // Agregar respuesta del bot (simulada)
            const botMessage = {
                id: messages.length + 2,
                text: "Gracias por tu mensaje. Estoy procesando tu consulta...",
                isBot: true
            };

            setMessages([...messages, userMessage, botMessage]);
            setInputMessage('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };
    
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Box sx={{ 
                p: 2, 
                borderBottom: 1, 
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant="h6" textAlign="center">AlimentAI</Typography>
                <AccountMenu />
            </Box>

            {/* Chat Interface */}
            <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', py: 2 }}>
                {/* Chat Header */}
                <Box sx={{ mb: 2, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                        Chat con AlimentAI
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pregúntame sobre nutrición, recetas y más
                    </Typography>
                </Box>

                {/* Messages Area */}
                <Paper 
                    elevation={2} 
                    sx={{ 
                        flex: 1, 
                        mb: 2, 
                        p: 2, 
                        overflow: 'auto',
                        maxHeight: '60vh',
                        backgroundColor: 'background.default'
                    }}
                >
                    <List>
                        {messages.map((message) => (
                            <ListItem 
                                key={message.id}
                                sx={{
                                    flexDirection: 'column',
                                    alignItems: message.isBot ? 'flex-start' : 'flex-end',
                                    mb: 1
                                }}
                            >
                                <Paper
                                    elevation={1}
                                    sx={{
                                        p: 2,
                                        maxWidth: '70%',
                                        backgroundColor: message.isBot ? 'primary.light' : 'secondary.light',
                                        color: message.isBot ? 'primary.contrastText' : 'secondary.contrastText'
                                    }}
                                >
                                    <Typography variant="body1">
                                        {message.text}
                                    </Typography>
                                </Paper>
                            </ListItem>
                        ))}
                    </List>
                </Paper>

                {/* Input Area */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Escribe tu mensaje..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        sx={{ backgroundColor: 'background.paper' }}
                    />
                    <IconButton 
                        color="primary" 
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        sx={{ 
                            backgroundColor: inputMessage.trim() ? 'primary.main' : 'action.disabledBackground',
                            color: inputMessage.trim() ? 'white' : 'action.disabled',
                            minWidth: 56,
                            height: 56,
                            '&:hover': {
                                backgroundColor: inputMessage.trim() ? 'primary.dark' : 'action.disabledBackground'
                            },
                            '&:disabled': {
                                backgroundColor: 'action.disabledBackground',
                                color: 'action.disabled'
                            }
                        }}
                    >
                        <SendIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                </Box>

                {/* Back Button */}
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button 
                        variant="outlined" 
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBack}
                    >
                        Volver al Inicio
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Principal;