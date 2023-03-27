import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import { Link } from 'react-scroll'
import { navLinksHelper } from './'

const boxSx = {
    width: 280,
    textAlign: 'center',
    bgcolor: '#117255',
    color: 'white',
    height: '100vh',
}

export const NavListDrawer = ({ handleOnClose }) => {

    return (
        <Box sx={boxSx}>
            <nav>
                <List>
                    <ListItem sx={{ mt: 1, mb: 2, }} >
                        <img src='./logo1.png' style={{ width: 140 }} />
                    </ListItem>

                    {
                        navLinksHelper.map(link => (
                            <ListItem
                                disablePadding
                                sx={{ mt: 0.5, mb: 0.5, }}
                                key={link.title}
                            >
                                <Link
                                    activeClass="active"
                                    to={link.ref}
                                    spy={true}
                                    smooth={true}
                                    offset={link.offSet}
                                    duration={500}
                                    onClick={handleOnClose}
                                >
                                    <ListItemButton>
                                        <ListItemText primary={link.title} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
    )
}