import { TextField, Button, Grid, Box } from "@mui/material"

const buttonSx = {
    mt: 1,
    transform: 'Scale(1)',
    transition: 'transform 0.2s linear',
    '&:hover': {
        transform: 'Scale(1.06)',
        transition: 'transform 0.2s linear',
    }
}

const BoxSx = {
    mt: {
        sx: 2,
        sm: 3
    }
}

const ContainerSx = {
    mb: 1
}

export const FormForEmail = () => {
    return (
        <Box sx={BoxSx}>
            <Grid
                container
                columnSpacing={4}
                rowSpacing={1}
                sx={ContainerSx}
            >
                <Grid item xs={6} md={6}>
                    <TextField
                        id="Nombre"
                        label="Nombre"
                        type='text'
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6} md={6}>
                    <TextField
                        id="Email"
                        label="Email"
                        type='email'
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Grid
                container
                sx={ContainerSx}
                rowSpacing={1}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12} md={12}>
                    <TextField
                        id="Asunto"
                        label="Asunto"
                        type='text'
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={12}>
                    <TextField
                        id="Mensaje"
                        label="Mensaje"
                        type='text'
                        multiline
                        rows={5}
                        fullWidth
                    />
                </Grid>

                <Grid item>
                    <Button variant="contained" color="primary" sx={buttonSx}>
                        Enviar Mensaje
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}