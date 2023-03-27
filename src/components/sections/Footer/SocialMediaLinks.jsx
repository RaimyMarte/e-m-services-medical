import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';


const SocialMediaSx = {
    fontSize: {
        xs: '20px',
        sm: '22px'
    },
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0px 10px 10px rgba(0,0,0,0.1)',
    background: '#252526',
    mr: 2,
    mt: 5,

    '&:hover': {
        background: '#117255'
    },
}

export const SocialMediaLinks = () => {
    return (
        <>
            <Link href="https://www.twitter.com/" target="_blank">
                <TwitterIcon sx={SocialMediaSx} />
            </Link>
            <Link href="https://www.facebook.com/" target="_blank">
                <FacebookIcon sx={SocialMediaSx} />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
                <InstagramIcon sx={SocialMediaSx} />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
                <LinkedInIcon sx={SocialMediaSx} />
            </Link>
        </>
    )
}