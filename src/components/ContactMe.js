import styled from '@emotion/styled';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


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
        width: "300px",
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
        width: "300px",
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

}))
const CustomTextBox = styled('textarea')(({ theme }) => ({
    width: "100%",
    fontSize: "1rem",
    background: "#fcf2f2",
    borderRadius: "10px",
    height: "50px",
    padding: "10px",
    fontFamily: "sans-serif"

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
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_76pq5xc', 'template_tl2zhve', form.current, '3QEV8gF97twCkS0nJ')
            .then((result) => {
                // <Alert severity="success">Got your message!! I'll reach you soon😉</Alert>
                alert("Email is sent, I'll get back to you soon😉")
                e.target.reset()
            }, (error) => {
                // <Alert severity="warning">{error.text}</Alert>
                alert(error.text)

            });


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

            <FormContainer ref={form} onSubmit={sendEmail}>
                {small && (<SubContainer>
                    <CustomInput label="Name" placeholder='Name' style={{ height: "30px", }} name="from_name" required />
                    <CustomInput label="email" placeholder='email' style={{ height: "30px" }} name="from_email" required />
                </SubContainer>)}
                {!small && (<CustomInput label="Name" placeholder='Name' style={{ height: "30px", }} name="from_name" required />)}
                {!small && <CustomInput label="email" placeholder='email' style={{ height: "30px" }} name="from_email" required />}
                <CustomInput label="subject" placeholder='subject' style={{ height: "30px" }} name='subject' required />
                <CustomTextBox label="message" placeholder='message' style={{ height: "100px" }} name='message' required />
                <CustomButton type="submit">
                    <Typography variant='p' color="white" fontWeight='100' padding='5PX 5px'>Send
                    </Typography>
                    <FontAwesomeIcon icon={faPaperPlane} beatFade size="sm"
                        style={{ color: "white" }} />
                </CustomButton>

            </FormContainer>

        </RootContainer>
    )
}

export default ContactMe