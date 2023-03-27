import { Grid, Typography, styled, Container } from "@mui/material"
import { motion } from "framer-motion"
import { SectionsStyles } from "./SectionsStyles"

const textSx = {
    mb: 3,
    fontSize: {
        xs: 16,
        sm: 18
    }
}

const Img = styled('img')({
    width: '85%',
    borderRadius: '10px',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;',
})


export const About = () => {
    const { ContainerSx, SectionTitleSx } = SectionsStyles

    return (
        <Container sx={ContainerSx} >
            <Typography color="initial" sx={SectionTitleSx}>¿Quiénes Somos?</Typography>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Grid container columnSpacing={3} >
                    <Grid item xs={10} md={5} lg={6}>
                        <Typography color="initial" sx={textSx}>En E&M Services Medical, nos dedicamos a proporcionar a nuestros clientes los mejores productos y servicios para sus análisis clínicos.
                        </Typography>
                        <Typography color="initial" sx={textSx}>
                            Contamos con una amplia gama de equipos de laboratorio, incluyendo microscopios, centrífugas, analizadores de Hematología, y más. También ofrecemos una variedad de reactivos de laboratorio clínico, como kits de diagnóstico que se adaptan a las necesidades específicas de cada cliente.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5.5} sx={{ ml: { xs: 0, lg: 3 }, mt: { xs: 0, lg: -1.5 } }}>
                        <Img src="./about.jpg" />
                    </Grid>
                </Grid>
            </motion.div>
        </Container>
    )
}