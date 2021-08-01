import React from 'react'
import {createUseStyles} from 'react-jss'
import SignupButton from './SignupButton'

function CalendarSelection(props) {
    const classes = useStyles({...props})

    return (
        <div>
            <div className={classes.tooltip}>
                <div className={classes.tooltipContent}>
                    <div>Google Calendar</div>
                    <div>Apple Calendar</div>
                    <div>Outlook</div>
                    <SignupButton />
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles(() => ({
    tooltip: {
        margin: 'auto',
        display: 'inline-block',
        position: 'relative',
        
        '&:focus-within': {
            '& div': {
                visibility: 'visible',
            }
        },
    },
    tooltipContent: {
        visibility: 'hidden',
        top: '-136px',
        left: '50%',
        width: '220px',
        bottom: '180%',
        height: '120px',
        padding: '0',
        zIndex: '1',
        position: 'absolute',
        backgroundColor: '#fff',
        textAlign: 'center',
        marginLeft: '-175px',
        borderRadius: '8px',
        boxShadow: '1px 1px 1px #BDBDBD',
        '& div': {
            height: '40px',
            width: '100%',
            fontSize: '2rem',
            textAlign: 'center',
            paddingTop: '5px',
            '&:hover': {
                backgroundColor: '#BDBDBD',
                borderRadius: '8px',
            }
        },
        '&::after': {
            content: ' ',
            position: 'absolute',
            top: '100%',
            left: '50%',
            marginLeft: '-10px',
            borderWidth: '10px',
            borderStyle: 'solid',
            borderColor: 'black transparent transparent transparent',
        },
    },
}))

export default CalendarSelection
