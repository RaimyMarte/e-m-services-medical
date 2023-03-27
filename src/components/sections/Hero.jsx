import { Box, Container, } from '@mui/material'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-scroll';
import { navLinksHelper } from '../navbar';
import { motion } from "framer-motion"

const boxSx = {
  backgroundImage: 'url(./background.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
  height: '90vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
}

const buttonSx = {
  mt: 2,
  transform: 'Scale(1)',
  transition: 'transform 0.2s linear',
  '&:hover': {
    transform: 'Scale(1.06)',
    transition: 'transform 0.2s linear',
  }
}


export const Hero = () => {
  return (
    <Box sx={boxSx}>
      <Container
        maxWidth='sm'
        sx={{
          color: 'white',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Typography sx={{ mb: 1, fontSize: { xs: 40, sm: 55 } }}>
            E&M Services Medical
          </Typography>

          <Typography sx={{ mb: 2, fontSize: { xs: 18, sm: 20 } }}>
            Soluciones de laboratorio de alta calidad y eficaces, descubre nuestra gama de equipos y reactivos de laboratorio.
          </Typography>

          <Link
            activeClass="active"
            to={navLinksHelper[2].ref}
            spy={true}
            smooth={true}
            offset={navLinksHelper[2].offSet}
            duration={800}
          >
            <Button
              size="large"
              variant="contained"
              sx={buttonSx}
            >
              Ver Productos
            </Button>
          </Link>
        </motion.div>
      </Container>

    </Box >
  )
}