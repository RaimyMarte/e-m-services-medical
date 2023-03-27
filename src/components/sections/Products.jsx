import { Container, Grid, Typography } from "@mui/material"
import { CardComponent } from "../CardComponent"
import { productsHelper } from "./helpers"
import { SectionsStyles } from "./SectionsStyles"





export const Products = () => {
    const { ContainerSx, SectionTitleSx } = SectionsStyles

    return (
        <Container sx={ContainerSx} >
            <Typography color="initial" sx={SectionTitleSx}>Productos</Typography>

            <Grid container columnSpacing={5} rowSpacing={4} >
                <Grid item xs={10} md={4} lg={4}>
                    <CardComponent title={productsHelper[0].title} subtitle={productsHelper[0].description} img={productsHelper[0].img} />
                </Grid>

                <Grid item xs={10} md={4} lg={4}>
                    <CardComponent title={productsHelper[1].title} subtitle={productsHelper[1].description} img={productsHelper[1].img} />
                </Grid>

                <Grid item xs={10} md={4} lg={4}>
                    <CardComponent title={productsHelper[2].title} subtitle={productsHelper[2].description} img={productsHelper[2].img} />
                </Grid>
            </Grid>
        </Container>
    )
}
