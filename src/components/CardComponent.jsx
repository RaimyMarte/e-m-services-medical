import { Typography, CardMedia, Card, CardContent, CardActions, Button, CardActionArea } from "@mui/material"
import { motion } from "framer-motion"

const cardSx = {
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;',
    transform: 'Scale(1)',
    transition: 'transform 0.2s linear',
    width: {
        sx: '100%',
        sm: '80%',
        md: '100%',
        lg: '100%',
    },

    '&:hover': {
        transform: 'Scale(1.06)',
        transition: 'transform 0.2s linear',
    },

    // '.cardButton': {
    //     transform: 'translateY(100%)',
    //     opacity: 0,
    //     transition: '0.3s ease-in-out',
    // },

    // '&:hover .cardButton': {
    //     transform: 'translateY(0)',
    //     opacity: 1,
    // }
}

const cardTitleSx = {
    whiteSpace: 'nowrap',
    fontSize: {
        xs: 22,
        sm: 24
    }
}

const cardSubtitleSx = {
    mt: 1,
    fontSize: {
        xs: 14,
        sm: 16
    }
}




export const CardComponent = ({ title, subtitle, img }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <Card sx={cardSx}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        title={title}
                        image={img}
                        sx={{ width: '100%', }} />

                    <CardContent sx={{ ml: { xs: 0.5, md: 1, lg: 2 } }}>
                        <Typography sx={cardTitleSx}>{title}</Typography>
                        <Typography color='text.secondary' sx={cardSubtitleSx}>{subtitle}</Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions sx={{ ml: { xs: 1, md: 2 }, mb: 1 }}>
                    <Button variant="contained" color="primary" size="small" className="cardButton">
                        Más detalles
                    </Button>
                </CardActions>
            </Card>
        </motion.div>
    )
}
