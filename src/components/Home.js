import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { bio } from '../data/Texts'
// import Urls from '../data/Urls'

const RootContainer = styled('div')(({ theme }) => (
    {
        padding: "100px 80px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.background.default,
        gap: "30px",
        [theme.breakpoints.down("sm")]: {
            padding: "80px 20px",
        },
    }
))

const CustomText = styled('div')(({ theme }) => ({
    fontSize: "32px",
    color: "#e0a80d",
    fontWeight: "600",
    textAlign: "center",
}))

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    backgroundColor: 'none',
    borderColor: '#e0a80d',
    borderRadius: '2rem',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#e0a80d',
        borderColor: '#e0a80d',
        boxShadow: 'none',
    },

})


function Home() {


    return (
        <RootContainer id='home'>
            <Typography variant='p' fontSize='25px' fontWeight='300' color='white'>I'm Balaji</Typography>
            {/* <CustomText variant='h3'>Software developer</CustomText> */}
            <CustomText>
                <Typewriter options={{
                    loop: true,
                    strings: bio,
                    autoStart: true,
                    delay: '40',
                    deleteSpeed: '30'
                }} />
            </CustomText>
            <Typography variant='p' color="white" textAlign="center">
                Diligent software developer adept at crafting efficient, innovative solutions through <br /> proficient coding and problem-solving skills.
            </Typography>
            <CustomButton href='' target='_blank' onClick={() => { window.location.href = '#contactme' }}>
                <Typography variant='p' color="white" fontWeight='100' padding='5PX 25PX'>Hire Me</Typography>
            </CustomButton>
        </RootContainer>
    )
}

export default Home