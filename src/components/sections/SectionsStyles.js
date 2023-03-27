export const SectionsStyles = {
    ContainerSx: {
        mt: {
            xs: 8,
            md: 15,
        },
        mb: {
            xs: 8,
            md: 15,
        }
    },
    SectionTitleSx: {
        mb: 4,
        fontSize: {
            xs: 28,
            sm: 32,
        },
        '&::after': {
            ml: 0.4,
            mt: 1,
            content: "''",
            display: 'block',
            width: '50px',
            height: '3px',
            background: '#198e6f',
        }
    }
}