import { FC, ReactNode } from 'react'

interface Props {
    children?: JSX.Element
    className?: string
    onClick?: () => {}
    iconStart?: ReactNode
    iconEnd?: ReactNode

}

const Button: FC<Props> = (props) => {
    const { className, children, onClick, iconStart, iconEnd } = props;
    return (
        <button onClick={onClick} className={` ${className} flex justify-center items-center `} type="button" >
            {iconStart}
            {children}
            {iconEnd}
        </button>
    )
}

export default Button

