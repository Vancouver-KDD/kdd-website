import React from 'react'
import {createUseStyles} from 'react-jss'
import {useCollection} from 'store'

export default function Footer() {
    const classes = useStyles()
    const {data} = useCollection({name: 'statistics'})

    return (
        <footer className={classes.footer}>
            <p>
                Developed by{' '}
                {data?.developers?.map?.(({name, link}, i) => (
                    <a key={i} href={link}>
                        {name}
                    </a>
                ))}
            </p>
            <p>
                Special thanks to{' '}
                {data?.supporters?.map?.(({name, link}, i) => (
                    <a key={i} href={link}>
                        {name}
                    </a>
                ))}
            </p>
        </footer>
    )
}

const useStyles = createUseStyles({
    footer: {
        height: 'auto',
        padding: '1rem',
        color: 'hsla(240, 52%, 11%, 1)',
        fontWeight: '900',
        textAlign: 'center',
        '& p': {
            fontSize: '1.2rem',
            marginTop: 10,
        },
        '& a': {
            padding: '0.5rem',
            fontSize: '1.2rem',
            color: 'hsla(240, 52%, 11%, 1)',
        },
        '@media (min-width: 800px)': {
            padding: '3rem',
            '& p': {
                fontSize: '1.6rem',
            },
            '& a': {
                padding: '0.75rem',
                fontSize: '1.6rem',
            },
        },
        '@media (min-width: 1024px)': {
            padding: '6rem',
            '& p': {
                fontSize: '2rem',
            },
            '& a': {
                padding: '0.75rem',
                fontSize: '2rem',
            },
        },
    },
})
