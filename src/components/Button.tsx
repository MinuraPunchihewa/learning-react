import { ReactNode } from "react"

interface ButtonProps {
    // the ? makes this a optional parameter
    // to control what the type can be set to; they can be specified like this
    type?: 'primary' | 'secondary' | 'danger'
    children: string
    onClick: () => void
}

function Button({ type = 'primary', children, onClick }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${type}`} onClick={onClick}>{children}</button>
  )
}

export default Button
