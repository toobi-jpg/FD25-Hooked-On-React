import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logoIcon from '../assets/icons/logoIcon.svg'; 
import Switch from '@mui/material/Switch';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';



    function SimpleNavbar({ isDarkMode, setIsDarkMode }) {
        return (

        <Box sx={(theme) => ({mb: '1rem', boxShadow: 4,  borderRadius: 1, })}>
            <AppBar position="static" sx={(theme) => ({backgroundColor: theme.palette.customDefault.main, borderRadius: 1, 
            })}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: 1}}>
                <Box>
                    <IconButton size="small"  color="inherit" aria-label="logo"
                    onClick={() => window.location.reload()} >
                    <img src={logoIcon} alt="Logo"/>
                    </IconButton>
                    <Typography variant="h2" component="div" sx={{ display: 'flex', alignItems: 'center'}}> 
                        Hooked On React
                    </Typography>
                </Box>
            </Toolbar>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', position: 'absolute', top: 17, right: 25 }}>
                    <IconButton color="customDefault2" aria-label="toggle theme" sx={{ mr: 3}}
                        onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
                    </IconButton>
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        {isDarkMode ? 'Light mode' : 'Dark mode'}
                    </Typography>
                </Box>
            </AppBar>
        </Box>

        );
}

export default SimpleNavbar;