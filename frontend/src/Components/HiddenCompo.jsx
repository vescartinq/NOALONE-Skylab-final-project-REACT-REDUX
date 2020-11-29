import React from 'react'
import {withWidth, Typography, Hidden, Button} from '@material-ui/core'

function HiddenCompo(props){
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho:{props.width}
            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="primary">
                    BUTTON
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(HiddenCompo)
