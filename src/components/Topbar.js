import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AppBar, Button, Drawer, List, ListItem, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CustomAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.default,
}))

const CustomToolBar = styled(Toolbar)(({ theme }) => ({
    margin: '0px 70px',
    [theme.breakpoints.down('sm')]: {
        margin: '0px 20px',
    },
}))

const ButtonDiv = styled('div')(() => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "10px",

}))


const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textTransform: "None",
    fontSize: '13px'


}))

const CustomList = styled(List)(({ theme }) => ({
    background: theme.palette.background.default,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
}))

function Topbar() {

    const actions = [
        { name: "Home", link: '#home' },
        { name: "About", link: '#aboutme' },
        { name: "Projects", link: '#project' },
        { name: "Contact", link: '#contactme' },
        { name: "Skills", link: '#skills' },
    ]

    const theme = useTheme()

    const isMdOrUp = useMediaQuery(theme.breakpoints.up('md'))

    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawer(open);
    };


    return (
        < CustomAppBar position='sticky' id='Topbar'>
            <CustomToolBar>
                <a style={{ color: "white" }} href='https://github.com/balajiofficial06'>
                    <FontAwesomeIcon icon={faGithub} flip size='2xl' />
                </a>
                {isMdOrUp && <ButtonDiv >
                    {actions.map((action, index) => {
                        return <CustomButton key={index} onClick={() => {
                            window.location.href = action.link;
                        }}>
                            {action.name}
                        </CustomButton>
                    })}
                </ButtonDiv>}
                {!isMdOrUp && <ButtonDiv onClick={toggleDrawer(true)}>
                    <MenuIcon style={{
                        fontSize: "32px",
                    }} />
                </ButtonDiv>
                }
                <Drawer anchor='right' open={drawer} onClose={toggleDrawer(false)}>
                    <CustomList >
                        {actions.map((action, index) => {
                            return <ListItem key={index}>
                                <CustomButton onClick={() => {
                                    setDrawer(false)
                                    window.location.href = action.link;
                                }}>
                                    {action.name}
                                </CustomButton>
                            </ListItem>
                        })}
                    </CustomList>
                </Drawer>
            </CustomToolBar>

        </ CustomAppBar>

    )
}

export default Topbar