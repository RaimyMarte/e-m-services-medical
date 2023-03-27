import { Link } from "react-scroll"
import Typography from '@mui/material/Typography'
import { EmpresaLinks } from "./linksHelperFooter"

const TypographySx = {
    fontSize: {
        xs: 14,
        sm: 16,
    },
    mt: {
        xs: 1.5,
        sm: 1.5,
    },
    cursor: 'pointer',
    '&:hover': {
        color: '#198e6f'
    },
}
export const CompanyFooter = () => {
    return (
        <>
            <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                <strong> Empresa </strong>
            </Typography>
            {
                EmpresaLinks.map(link => (
                    <Link
                        activeClass="active"
                        to={link.ref}
                        spy={true}
                        smooth={true}
                        offset={link.offSet}
                        duration={800}
                        key={link.title}
                    >
                        <Typography sx={TypographySx}>{link.title}</Typography>
                    </Link>
                ))
            }
        </>
    )
}