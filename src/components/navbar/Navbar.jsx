import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Drawer, styled, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavListDrawer, navLinksHelper, useSidebar } from './';
import { Link } from 'react-scroll';


const Img = styled('img')({
    height: 70,
    marginRight: 'auto',
    cursor: 'pointer',
})

const MenuButtonSx = {
    ml: 'auto',
    display:
    {
        xs: 'flex',
        sm: 'flex',
        md: 'none'
    },
    color: 'black',
}

const navLinksSx = {
    fontSize: '14px',
    background: 'transparent',
    border: 'none',
    padding: '1em 1.5em',
    color: 'black',
    transition: '.5s ease',

    ' &::before': {
        content: "''",
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: '2px',
        width: 0,
        backgroundColor: '#117255',
        transition: '.5s ease',
    },

    '&::after': {
        content: "''",
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 0,
        width: '100%',
        backgroundColor: '#117255',
        transition: '.4s ease',
        zIndex: '-1',
    },

    '&:hover': {
        color: 'white',
        transitionDelay: '.5s',
    },

    '&:hover::before': {
        width: '100%',
    },

    '&:hover::after': {
        height: '100%',
        transitionDelay: '0.4s',
    }
}


export const Navbar = () => {

    const { open, handleOnOpen, handleOnClose } = useSidebar()

    return (

        <AppBar position="sticky" sx={{ background: 'white' }} >
            <Toolbar sx={{ gap: 1 }} >

                <Box
                    sx={{
                        flexGrow: 0.5,
                        ml: { xs: 1, sm: 5, md: 15, lg: 30 }
                    }}
                >
                    <Link
                        activeClass="active"
                        to='inicioRef'
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <Img src='./logo2.png' />
                    </Link>
                </Box>

                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                    {
                        navLinksHelper.map(link => (
                            <Link
                                activeClass="active"
                                to={link.ref}
                                spy={true}
                                smooth={true}
                                offset={link.offSet}
                                duration={800}
                                key={link.title}
                            >
                                <Button sx={navLinksSx}>{link.title}</Button>
                            </Link>
                        ))
                    }
                </Box>

                <IconButton
                    size="large"
                    aria-label="menu"
                    edge='end'
                    onClick={handleOnOpen}
                    sx={MenuButtonSx}
                >
                    <MenuIcon sx={{ fontSize: { xs: '30px', sm: '35px' } }} />
                </IconButton>

                <Drawer
                    anchor="left"
                    open={open}
                    onClose={handleOnClose}
                    sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}
                >
                    <NavListDrawer handleOnClose={handleOnClose} />
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}
