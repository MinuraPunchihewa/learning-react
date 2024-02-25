import { ReactNode } from "react"

// children is a prop that is supported by all Components
// this is, essentially, what is passed in the body of the element
// by setting the type to ReactNode, it becomes possible to also pass markdown as well
interface AlertProps {
    children: ReactNode
    onClose: () => void
}

function Alert({ children, onClose }: AlertProps) {
    // adding the dismissible classes to the alert will not add the functionality
    // only the styling
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {children}
            <button type="button" onClick={onClose} className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert
