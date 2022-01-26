import React from 'react'

export default function UnsplashImage(props) {

    const container = () => {
        if (props.filter !== undefined) {
            if (props.size !== undefined) {
                if (props.user !== undefined) {
                    return <img src={`https://source.unsplash.com/user/${props.user}/${props.size.w}x${props.size.h}/?${props.filter}`} alt={props.caption} />
                }
                else {
                    return <img src={`https://source.unsplash.com/random/${props.size.w}x${props.size.h}/?${props.filter}`} alt={props.caption} />
                }
            }
            else {
                if (props.user !== undefined) {
                    return <img src={`https://source.unsplash.com/user/${props.user}/?${props.filter}`} alt={props.caption} />
                }
                else {
                    return <img src={`https://source.unsplash.com/random/?${props.filter}`} alt={props.caption} />
                }
            }
        }
        else {
            if (props.size !== undefined) {
                if (props.user !== undefined) {
                    return <img src={`https://source.unsplash.com/user/${props.user}/${props.size.w}x${props.size.h}`} alt={props.caption} />
                }
                else {
                    return <img src={`https://source.unsplash.com/random/${props.size.w}x${props.size.h}`} alt={props.caption} />
                }
            }
            else {

                if (props.user !== undefined) {
                    return <img src={`https://source.unsplash.com/user/${props.user}`} />
                }
                else {
                    return <img src={`https://source.unsplash.com/random/`} alt={props.caption} />
                }
            }
        }
    }
    return (
        <div>
            {container()}
            {props.children}
        </div>
    )
}
