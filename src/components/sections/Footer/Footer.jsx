import { Box, Container, Grid, styled, Typography } from "@mui/material"
import { CompanyFooter } from "./CompanyFooter"
import { SocialMediaLinks } from "./SocialMediaLinks"
import { UsefulLinks } from "./UsefulLinks"


const Img = styled('img')({
  height: 70,
  marginBottom: 5
})


const TypographySx = {
  fontSize: {
    xs: 14,
    sm: 16,
  },
  mt: {
    xs: 1.5,
    sm: 1.5,
  }
}


export const Footer = () => {
  return (
    <Box sx={{ background: '#171717', color: 'white' }}>
      <Container>
        <Grid container mb={2}>

          <Grid item xs={12} md={6} mt={3}>
            <Img src='./logo2.png' />

            <Typography sx={TypographySx}>
              <strong> Dirección: </strong>
              Santo Domingo
            </Typography>
            <Typography sx={TypographySx}>
              <strong> Teléfono: </strong>
              809-671-9823
            </Typography>
            <Typography sx={TypographySx}>
              <strong> Email: </strong>
              example@EMServicesMedical
            </Typography>

            <SocialMediaLinks />

          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ mt: { xs: 5, sm: 7 } }}>
            <UsefulLinks />
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ mt: { xs: 5, sm: 7 } }}>
            <CompanyFooter />
          </Grid>
        </Grid>

        <hr />

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          mt={3}
          pb={3}
        >
          <Grid item>
            <Typography sx={{ fontSize: { xs: 12, sm: 14, } }}>
              © Copyright 2023
              <strong> E&M Services Medical </strong>.
              All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}