import { Grid, Box, Typography } from '@material-ui/core'

import React from 'react'

function Home() {
    return (
        <div style={{ minHeight: "100vh", marginTop: "50px" }}>
            <Grid container >

                <Grid item xs={6}>
                    <Box display="flex" alignItems="center" sx={{ width: '100%', height: '100%' }}>
                        <Box display="flex" justifyContent="center">
                            <Box>
                                <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="initial">Bem vindo ao blog!</Typography>
                                </Box>

                                <Box p={2}>
                                    <Typography variant="body1" color="initial">Olá pessoal, bem vindes ao meu Blog Pessoal. Aqui vou abordar vários assunto da minha vida e compartilhar com vocês para um intereação melhor com meus colegas, amigos e curiosos por ai, aproveite.</Typography>
                                </Box>
                            </Box>


                        </Box>


                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box display="flex" justifyContent="center" mt={2} >
                        <img src="https://i.imgur.com/EcUJeAH.png" alt="" style={{ width: "100%" }} />
                    </Box>
                </Grid>


            </Grid>
        </div>
    )
}

export default Home