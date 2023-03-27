
import { Container, Grid, Typography } from "@mui/material"
import { servicesHelper } from "./helpers"
import { CardComponent } from "../CardComponent"
import { SectionsStyles } from "./SectionsStyles"


export const Services = () => {
  const { ContainerSx, SectionTitleSx } = SectionsStyles
  
  return (
    <Container sx={ContainerSx} >
      <Typography color="initial" sx={SectionTitleSx}>Servicios</Typography>

      <Grid container columnSpacing={5} rowSpacing={4} >
        <Grid item xs={10} md={4} lg={4}>
          <CardComponent title={servicesHelper[0].title} subtitle={servicesHelper[0].description} img={servicesHelper[0].img} />
        </Grid>

        <Grid item xs={10} md={4} lg={4}>
          <CardComponent title={servicesHelper[1].title} subtitle={servicesHelper[1].description} img={servicesHelper[1].img} />
        </Grid>

        <Grid item xs={10} md={4} lg={4}>
          <CardComponent title={servicesHelper[2].title} subtitle={servicesHelper[2].description} img={servicesHelper[2].img} />
        </Grid>
      </Grid>
    </Container>
  )
}