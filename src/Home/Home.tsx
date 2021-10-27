import { Grid, Box, Typography } from '@material-ui/core'
import { height } from '@mui/system'

import React from 'react'

function Home() {
    return (
        <div style={{ minHeight: "100vh", marginTop: "50px", backgroundColor: "#0C5CCD" }}>
            <Grid container >

            <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" mt={2} >
                        <img src="https://besthqwallpapers.com/Uploads/28-7-2017/17208/thumb2-4k-space-lion-art-galaxy.jpg" alt="" style={{ width: "100%"  }} />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box display="flex" alignItems="center" sx={{ width: '100%', height: '100%' }}>
                        <Box display="flex" justifyContent="center">
                            <Box>
                                <Box display="flex" justifyContent="left">
                                    <Typography variant="h4" color="initial" p={2}>Bem vindo ao meu Blog Pessoal!</Typography>
                                </Box>

                                
                                <Box p={2}>
                                    <Typography variant="body1" color="initial" justifyContent="left">Olá pessoal, bem vindes ao meu Blog Pessoal. Aqui vou abordar vários assunto da minha vida e compartilhar com vocês para um intereação melhor com meus colegas, amigos e curiosos por ai, aproveite.</Typography>
                                </Box>
                            </Box>


                        </Box>


                    </Box>
                </Grid>
                


            </Grid>
        </div>
    )
}

export default Home