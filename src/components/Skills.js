import React from 'react'
import { skills } from '../data/Texts'
import styled from "@emotion/styled";
import { Typography, useTheme } from '@mui/material';



const Container = styled('div')(({ theme }) => ({

    padding: "80px 80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
    gap: "40px",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
        padding: "80px 20px",
    },

}))

const Wrapper = styled('div')(({ theme }) => ({

    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1100px",
    gap: "30px",

}))

const Desc = styled(Typography)(({ theme }) => ({

    color: theme.palette.text.secondary,
    textAlign: "center"

}))

const SkillsContainer = styled('div')(({ theme }) => ({

    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "30px",
    gap: "40px",
    justifyContent: "center",

}))

const Skill = styled('div')(({ theme }) => ({

    width: "100%",
    maxWidth: "500px",
    border: "0.1px solid #6c6c37",
    boxShadow: "rgb(107 99 48 / 80%) 0px 0px 20px",
    borderRadius: "16px",
    [theme.breakpoints.down("md")]: {
        maxWidth: "400px",
        padding: "10px 36px",
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: "330px",
        padding: "10px 36px",
    },

}))

const SkillTitle = styled('div')(({ theme }) => ({

    fontSize: "28px",
    fontWeight: 600,
    color: theme.palette.text.secondary,
    marginBottom: "20px",
    textAlign: "center",

}))

const SkillList = styled('div')(({ theme }) => ({

    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "20px",

}))

const SkillItem = styled('div')(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 400,
    color: `${theme.palette.text.secondary}80`,
    border: `1px solid ${theme.palette.text.secondary}80`,
    borderRadius: '12px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    '@media (max-width: 768px)': {
        fontSize: '14px',
        padding: '8px 12px',
    },
    '@media (max-width: 500px)': {
        fontSize: '14px',
        padding: '6px 12px',
    },
}));

const SkillImage = styled('img')({
    width: '24px',
    height: '24px',
});


function Skills() {

    const theme = useTheme();
    return (
        <Container id="skills">
            <Wrapper>
                <Typography
                    variant="h4"
                    color={theme.palette.text.heading}
                    fontWeight="500"
                >
                    Skills
                </Typography>
                <Desc variant='p'>Here are some of my skills on which I have been working on for the past 3 years.
                </Desc>
                <SkillsContainer>
                    {skills.map((skill) => (
                        <Skill key={skill.title}>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item) => (
                                    <SkillItem key={item.name}>
                                        <SkillImage src={item.image} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}

                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills