import React from 'react'
import styled from "@emotion/styled";
import {
    Grid,
    Grow,
    Tab,
    Tabs,
    Typography,
    useTheme,
} from "@mui/material";
import { useState } from "react";

import { projects } from "../data/Texts";

const buttons = [
    { name: "All", filter: "All" },
    { name: "Frontend", filter: "frontend" },
    { name: "Backend", filter: "backend" },
    { name: "Full Stack", filter: "fullstack" },
];

const CostomTab = styled(Tabs)(({ theme }) => ({
    flexGrow: 1,
    gap: "30px",
    "& .MuiTab-root": {
        color: "white",
        fontSize: "15px",
        fontWeight: "50",
        marginRight: "20px",
        textTransform: "none",
        [theme.breakpoints.down('sm')]: {
            marginRight: "10px"
        }
    },
    "& .MuiTabs-indicator": {
        backgroundColor: theme.palette.text.heading, // Customize the color of the tab indicator
    },
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

const ProjectCard = styled("div")(({ theme }) => ({
    borderRadius: "4px",
    width: "100%",
}));

function TestProject() {

    const [value, setValue] = useState(1);
    const [filter, setFilter] = useState("All");
    const theme = useTheme();
    // Update the state directly based on the result of the useMediaQuery hook

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
            <CostomTab
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                {buttons.map((button, index) => (
                    <Tab key={index + 1} value={index + 1} label={button.name}></Tab>
                ))}
            </CostomTab>
            <Grid container spacing={4}>
                {projects.map((project, index) => (


                    filter === 'All' || project.stack === filter ? (
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1500} key={index}>
                            <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                                <ProjectCard>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={project.images}
                                            alt={project.title}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                borderRadius: "4px",
                                            }}
                                        />
                                    </a>
                                </ProjectCard>
                            </Grid></Grow>) : null

                ))}

            </Grid>

        </RootContainer>
    )
}

export default TestProject