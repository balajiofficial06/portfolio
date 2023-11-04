import React from 'react'
import styled from '@emotion/styled'
import { AppBar, Button, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CustomAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.default,
}))

const CustomToolBar = styled(Toolbar)(({ theme }) => ({
    margin: '0px 70px',
    height: '80px',
    [theme.breakpoints.down('sm')]: {
        margin: '0px 20px',
    },
}))

const ButtonDiv = styled('div')(() => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "20px",

}))


const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    textTransform: "None",
    fontSize: '14px'


}))


function Topbar() {

    const actions = [
        { name: "Home", link: '/' },
        { name: "About", link: '/about' },
        { name: "Projects", link: '/projects' },
        { name: "Contact", link: '/contact' },
    ]

    const theme = useTheme()

    const isMdOrUp = useMediaQuery(theme.breakpoints.up('md'))


    return (
        < CustomAppBar position='sticky' id='Topbar'>
            <CustomToolBar>
                <a style={{ color: "white" }} href='https://github.com/balajiofficial06'>
                    <FontAwesomeIcon icon={faGithub} flip size='2xl' />
                </a>
                {isMdOrUp && <ButtonDiv >
                    {actions.map((action, index) => {
                        return <CustomButton key={index} href={action.link}>{action.name}</CustomButton>
                    })}
                </ButtonDiv>}
                {!isMdOrUp && <ButtonDiv>
                    <MenuIcon style={{
                        fontSize: "32px",
                    }} />
                </ButtonDiv>

                }
            </CustomToolBar>

        </ CustomAppBar>

    )
}

export default Topbar