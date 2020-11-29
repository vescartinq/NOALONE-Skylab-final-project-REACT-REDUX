import React from 'react'
import {makeStyles, Drawer, Divider} from '@material-ui/core'
import DataList from './DataList'

const styles = makeStyles(theme=>({
    drawer:{
        width: 240,
        flexShrink:0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
}))

const DrawerBox = (props) => {

    const classes= styles()

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider/>
            <DataList/>
        </Drawer>
    )
}

export default DrawerBox
