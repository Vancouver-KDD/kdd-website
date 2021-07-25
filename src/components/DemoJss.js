import React, {memo} from 'react'
import {createUseStyles} from 'react-jss'

// Simple Demo component that shows the usage of react-jss in a very simple way
function DemoJss() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.circle} />
        </div>
    )
}

const useStyles = createUseStyles({
    wrapper: {
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
    },
    circle: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#232323',
    },
})

export default memo(DemoJss)
