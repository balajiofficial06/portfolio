import styled from "@emotion/styled";
import {
    Button,
    Card,
    CardMedia,
    Grid,
    Tab,
    Tabs,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";

import todoImg from "./images/todo.png";
import { projects } from "../data/Texts";

const buttons = [
    { name: "All", filter: "All" },
    { name: "Frontend", filter: "frontend" },
    { name: "Backend", filter: "backend" },
    { name: "Full Stack", filter: "fullstack" },
];

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

const CustomCard = styled(Card)({
    margin: "20px",
    width: "400px",
    height: "300px",
    borderRadius: "0.8rem",
});

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
    width: "400px",
    height: "300px",
    transition: "0.8s",
    ":hover": {
        width: "425px",
        height: "325px",
    },
}));

function Projects() {
    const [value, setValue] = useState(1);
    const [filter, setFilter] = useState("All");
    const theme = useTheme();

    function handleChange(event, newValue) {
        var index = newValue - 1;
        setFilter(buttons[index].filter);
        setValue(newValue);
    }

    return (
        <RootContainer>
            <Typography
                variant="h4"
                color={theme.palette.text.heading}
                fontWeight="500"
            >
                Projects
            </Typography>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{
                    flexGrow: 1,
                    gap: "30px",
                    "& .MuiTab-root": {
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "50",
                        marginRight: "20px",
                        textTransform: "none", // Customize text style of the tab
                    },
                    "& .MuiTabs-indicator": {
                        backgroundColor: theme.palette.text.heading, // Customize the color of the tab indicator
                    },
                }}
            >
                {buttons.map((button, index) => (
                    <Tab key={index + 1} value={index + 1} label={button.name}></Tab>
                ))}
            </Tabs>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item sm={8} md={6} lg={4}>
                        <CustomCard>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <CustomCardMedia image={project.images} title={project.title}></CustomCardMedia>
                            </a>
                        </CustomCard>
                    </Grid>
                ))}
            </Grid>
        </RootContainer>
    );
}

export default Projects;
