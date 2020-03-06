import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/button'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3rem"
    },
    logo: {
        height: "7rem"
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"

    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "10px",
        marginRight: "10px",
        height: "45px"

    }
}))

const Header = () => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)

    const handleChange = (e, value) => {
        setValue(value)
    }
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }
    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4)
        } else if (window.location.pathname === "/estimates" && value !== 5) {
            setValue(5)
        }
    }, [value])
    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary">
                <Toolbar disableGutters>
                    <Button component={Link} to="/" onClick={() => setValue(0)} disableRipple className={classes.logoContainer}>
                        <img alt="company logo" className={classes.logo} src={logo} />
                    </Button>
                    <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
                        <Tab className={classes.tab} component={Link} to="/" label="Home" />
                        <Tab className={classes.tab} aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} onMouseOver={event => handleClick(event)} component={Link} to="/services" label="Services" />
                        <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                        <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                        <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                    </Tabs>
                    <Button variant="contained" color="secondary" component={Link} to="/estimate" className={classes.button}>
                        Free Estimate
                    </Button>
                    <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
                        <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/services">Services</MenuItem>
                        <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/customsoftware">Custom Software Development</MenuItem>
                        <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/mobileapps">Mobile App Development</MenuItem>
                        <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/websites">Website Development</MenuItem>
                    </Menu>
                </Toolbar>

            </AppBar>
            <div className={classes.toolbarMargin} />
        </React.Fragment >
    )
}

export default Header
