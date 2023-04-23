# 1. What the simple list component does

  i) There are two functions in List component <SingleListItem /> and <List /> component both returning JSX, <SingleListItem /> is used in List component itself each          function is wrapped in React.memo() so as to make it more efficient towards re-rendering.
  
  ii) The <List /> component is basically rendering the list of elements as format of <SingleListItem /> function returning JSX where the props are passed to it for         each list.
  
  iii) <List /> component takes 'items' as argument which is an array of object of 'text:' property to be displayed on the screen using items.map() function, whenever        we click on any item it turn 'green' because of 'selectedIndex' is changed and the component re-renders wiht new properties.
  
# 2. What problems / warnings are there with code? (Note: The Line numbers are from my modified code)

  i) Line 9 : The 'onClickHandler' should be called as a new callback function passed in 'onClick' event as (onClick = {() => onClickHandler(index)}) to work because        using (onClick = {onClickHandler(index)} will run on prev values (stale values) and the state does not change to new ones because sometimes in JS the states or        variable know their scope in which environment they are create and never get changed, instead use a callback which is wrapping the passed event handler function.
  
  ii) Line 27 (Syntax Error) : Declaration of useState() hook was not correct.
  
  iii) Line 41 (Warning) : The unique 'key' props should be passed to each list elements so as to uniquely identify the list rendered otherwise the warning will be            displayed.
  
  iv) Line 43 (Warning) : The props is denoting whether the item is selected or not so we have to use boolean expression (selectedIndex === index).
  
  v) Line 44 (Warning) : The 'onClickHandler' prop is expecting the event handler function as its value but in the code it is invoking the function directly.
  
  vi) Line 53 (Syntax Error) : The correct way to define props of array type is to use 'PropTypes.arrayOf' rather than 'PropTypes.array' which is not a valid propType       for defining the array of specified shape.
  
  vii) Line 59 (Error) : The 'items: null' it assigns the value to null and as there is no elements in the items array the 'items.map()' function will raise an error             that we are looping through a null object which is invalid. Instead pass some dummy 'array of objects' or an 'empty array' is also fine based on propTypes.
  
  # 3. Please fix, optimize, and/or modify the component as much as you think is necessary.
  
  See the code 'List.js'
  
  
