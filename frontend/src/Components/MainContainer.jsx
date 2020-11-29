import React,{useState} from 'react'
import Header from './Header'
import DrawerBox from './DrawerBox'

import {Hidden, makeStyles} from '@material-ui/core'


const styles= makeStyles(theme=>({
    root: {
        display:'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}))

const MainContainer = () => {

    const classes = styles()
    const [open,setOpen]= useState(false)
    const openAction=()=>{
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <Header openAction={openAction}/>
            <Hidden >
                <DrawerBox
                    variant="temporary"
                    open={open}
                    onClose={openAction}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At fugit alias eum nostrum corporis tempore ut a placeat minus nemo!
            </div>
            
        </div>
    )
}

export default MainContainer
