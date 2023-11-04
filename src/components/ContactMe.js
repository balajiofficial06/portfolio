import styled from '@emotion/styled';
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
// import emailjs from '@emailjs/browser';


const RootContainer = styled("div")(({ theme }) => ({

    padding: "80px 80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
        padding: "80px 20px",
    },
}));

const FormContainer = styled('form')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    width: "600px",
    [theme.breakpoints.down("sm")]: {
        width: "400px",
    },

}))

const SubContainer = styled('div')(({ theme }) => ({
    padding: "none",
    maring: "none",
    width: "620px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        margin: "none",
        width: "400px",
        flexDirection: "column",
        gap: "5px"
    },
}))

const CustomInput = styled('input')(({ theme }) => ({
    width: "100%",
    fontSize: "1rem",
    background: "#fcf2f2",
    borderRadius: "10px",
    height: "50px",
    padding: "10px"
    // background: "#fcf2f2",
    // '& label.Mui-focused': {
    // },
    // '& .MuiInput-underline:after': {
    //     borderBottomColor: 'yellow',
    // },
    // '& .MuiOutlinedInput-root': {
    //     '& fieldset': {
    //         borderColor: '#E0E3E7',
    //     },
    //     '&:hover fieldset': {
    //         borderColor: 'black',
    //     },
    //     '&.Mui-focused fieldset': {
    //         borderColor: '#6F7E8C',
    //     },
    // },
    // '& .Mui'
}))
/* your custom styles here */
const CustomButton = styled(Button)({
    width: "100%",
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


function ContactMe() {

    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.up("sm"));
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <RootContainer>
            <Typography
                variant="h4"
                color={theme.palette.text.heading}
                fontWeight="500"
            >
                Let's talk
            </Typography>

            <FormContainer onSubmit={handleSubmit}>
                {small && (<SubContainer>
                    <CustomInput label="Name" onChange={handleChange} placeholder='Name' style={{ height: "30px", }} />
                    <CustomInput label="email" onChange={handleChange} placeholder='email' style={{ height: "30px" }} />
                </SubContainer>)}
                {!small && (<CustomInput label="Name" onChange={handleChange} placeholder='Name' style={{ height: "30px", }} />)}
                {!small && <CustomInput label="email" onChange={handleChange} placeholder='email' style={{ height: "30px" }} />}
                <CustomInput label="subject" onChange={handleChange} placeholder='subject' style={{ height: "30px" }} />
                <CustomInput label="message" onChange={handleChange} placeholder='message' style={{ height: "100px" }} />
                <CustomButton type="submit">
                    <Typography variant='p' color="white" fontWeight='100' padding='5PX 25PX'>Send</Typography>
                </CustomButton>

            </FormContainer>

        </RootContainer>
    )
}

export default ContactMe