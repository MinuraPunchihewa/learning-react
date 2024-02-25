import { useState } from 'react';

interface ListGroupProps {
    // you can define the props that the component receives here
    // this can also include functions
    items: string[]
    heading: string
    // in the context of this component, this function will be called when an item is selected
    onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    // Props Vs State
    // props are inputs passed to a Component -> similar to function arguments
    // state is data managed by a Component -> similar to local variables
    // props should be treated as immutable, however, state can change over time
    // changes made to any of these will cause the Component to be re-rendered
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        // in React, a component cannot return multiple elements, so we wrap the elements in a fragment
        // the https://getbootstrap.com/docs/4.1/components/ section in Bootstrap's documentation has examples of how to use the components
        <>
            <h1>{heading}</h1> 
            {/* {items.length === 0 ? <p>No items to display</p> : null} */}
            {items.length === 0 && <p>No items to display</p> }
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                        key={index}
                        // when your function consists of multiple lines, it is better to use a handler function defined separately
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(item)
                        }}
                        className={`list-group-item ${index === selectedIndex ? 'active' : ''}`}
                    >
                        {item}
                    </li> 
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
