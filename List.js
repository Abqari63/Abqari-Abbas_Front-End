
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// 1. 

// Single List Item
const WrappedSingleListItem = ({index, isSelected, onClickHandler, text }) => {
    return (
        <li
            style={{ backgroundColor: isSelected ? 'green' : 'red' }}
            onClick={onClickHandler(index)}
        >
            {text}
        </li>
    );
};

WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({items}) => {
    const [ selectedIndex, setSelectedIndex ] = useState(null); // declaration of useState() hook of selectedIndex was not correct

    useEffect(() => {
        setSelectedIndex(null);
    }, [items]);

    const handleClick = index => {
        setSelectedIndex(index);
    };

    return (
        <ul style={{ textAlign: 'left' }}>
            {items.map((item, index) => (
                <SingleListItem
                    index={index}
                    isSelected={selectedIndex === index} // here expects the boolean value that means the selectedIndex equal to index then it means the item is selected
                    onClickHandler={handleClick} //here we should pass the function reference not invoke the function
                    text={item.text}
                />
            ))}
        </ul>
    )
};

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ // correct format for defining the array of object of specified shape
        text: PropTypes.string.isRequired,
    })),
};

WrappedListComponent.defaultProps = {
    items: [
        { text: 'some dummy text' },
        { text: 'some dummy text' },
        { text: 'some dummy text' },
        { text: 'some dummy text' },
        { text: 'some dummy text' },
    ] // set the default value for the text as an array format
};

const List = memo(WrappedListComponent);

export default List;

