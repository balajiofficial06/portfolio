import styled from '@emotion/styled';
import { TextField, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'

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

const FormContainer = styled('div')(({ theme }) => ({
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
        gap: "10px"
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


function ContactMe() {

    const theme = useTheme();
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

            <form >
                <FormContainer>
                    <SubContainer>
                        <CustomInput label="Name" onChange={handleChange} placeholder='Name' style={{ height: "30px", }} />
                        <CustomInput label="email" onChange={handleChange} placeholder='email' style={{ height: "30px" }} />
                    </SubContainer>
                    <CustomInput label="subject" onChange={handleChange} placeholder='subject' style={{ height: "30px" }} />
                    <CustomInput label="message" onChange={handleChange} placeholder='message' style={{ height: "100px" }} />
                </FormContainer>
            </form>

        </RootContainer>
    )
}

export default ContactMe