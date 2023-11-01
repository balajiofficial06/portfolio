import styled from '@emotion/styled';
import { Button, Tab, Tabs, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'

const buttons = [{ name: "All", filter: "" }, { name: "Frontend", filter: "frontend" }, { name: "Backend", filter: "Backend" }, { name: "Full Stack", filter: "fullstack" }]

const ProjectButton = styled(Button)({
    width: 'auto',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    // border: '2px solid',
    lineHeight: 1.5,
    backgroundColor: 'none',
    borderColor: 'none',
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


const ButtonDiv = styled('div')({
    paddingRight: '10px',
    display: "flex",
    flexDirection: "row",
    gap: "20px"

})

const CustomTab = styled('Tab')(({ theme }) => ({

}))

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



function Projects() {
    const [value, setValue] = useState(1)
    const theme = useTheme()

    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return (
        <RootContainer>
            <Typography variant='h4' color={theme.palette.text.heading} fontWeight='500' >Projects</Typography>
            <Tabs
                value={value}
                onChange={handleChange}

                aria-label="secondary tabs example" >

                {buttons.map((button, index) =>
                    <CustomTab key={index + 1} label={button.name} value={index + 1} />
                )}
            </Tabs>

        </RootContainer>
    )
}

export default Projects