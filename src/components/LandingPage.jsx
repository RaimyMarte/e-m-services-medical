import { Navbar } from "./navbar";
import { Box } from "@mui/material";
import { About, Contact, Footer, Hero, Products, Services } from "./sections";
import { motion } from "framer-motion"

export const LandingPage = () => {


    return (
        <>
            <Navbar />

            <Box id='inicioRef'>
                <Hero />
            </Box>

            <Box id='sobreNosotrosRef'>
                <About />
            </Box>

            <Box id='productosRef'>
                <Products />
            </Box>

            <Box id='serviciosRef'>
                <Services />
            </Box>

            <Box id='contactoRef'>
                <Contact />
            </Box>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Footer />
            </motion.div>
        </ >
    )
}


