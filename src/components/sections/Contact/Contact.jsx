import { Container, Grid, Typography } from "@mui/material"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FormForEmail } from "./FormForEmail";
import { SectionsStyles } from "../SectionsStyles";
import { motion } from "framer-motion"

const contactsTitleSx = {
    mt: {
        xs: 2.5,
        sm: 2.7,
    },
    fontSize: {
        xs: 20,
        sm: 22,
    },
}

const contactsSubitleSx = {

    fontSize: {
        xs: 14,
        sm: 16,
    },
    mb: {
        xs: 3.5,
        sm: 3.5,
    }
}

const iconSx = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '35px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0px 10px 10px rgba(0,0,0,0.1)',
    color: 'white',
    background: '#117255',
    mt: {
        xs: 2,
        sm: 2.5,
    },
    mb: {
        xs: 3,
        sm: 4,
    }
}


export const Contact = () => {
    const { ContainerSx, SectionTitleSx } = SectionsStyles

    return (

        <Container sx={ContainerSx} >
            <Typography color="initial" sx={SectionTitleSx}>Contactos</Typography>
            
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Grid container>
                    <Grid item xs={2.5} sm={1.5} md={1}>
                        <LocationOnIcon sx={iconSx} />
                        <PhoneIphoneIcon sx={iconSx} />
                        <MailIcon sx={iconSx} />
                    </Grid>

                    <Grid item xs={4} sm={3} md={3} mr={3}>
                        <Typography sx={contactsTitleSx}>Dirección:</Typography>
                        <Typography sx={contactsSubitleSx}>Santo Domingo</Typography>
                        <Typography sx={contactsTitleSx}>Teléfono:</Typography>
                        <Typography sx={contactsSubitleSx}>809-671-9823</Typography>
                        <Typography sx={contactsTitleSx}>Email:</Typography>
                        <Typography sx={contactsSubitleSx}>example@EMServicesMedical</Typography>
                    </Grid>

                    <Grid item xs={10} sm={10} md={7}>
                        <FormForEmail />
                    </Grid>
                </Grid>
            </motion.div>
        </Container>


    )
}