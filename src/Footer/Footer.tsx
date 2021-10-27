import { Box, Grid, Typography } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <>
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'>Me sigam nas redes sociais </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.instagram.com/vitu.sr/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/vitorsantana03/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2021 Copyright: Vitor Santana</Typography>
                    </Box>
                    <Box>
                        
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default Footer
