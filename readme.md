1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: All of the above functions are use to target html elements. Inside () you put your target tag name, id, classes etc. 
getElementById(): From the name you can guess it targets the element with the id gives inside parentheses. It only targets one element from the whole html file.
getElementsByClassName: it works file getElementById but can target multiple elements. Multiple class name can be given inside parentheses and the elements that matches the classes will be targeted.
querySelector(): this will target the 1st matched element. Multiple selector as well as multiple values can be given. If multiple elements matches the same target then only the 1st element will be accessed and if no match is found it will return null.
querySelectorAll(): same as the querySelector but it targets all the matching elements. Return a node list of all the matching elements. If no element matches the target then it will return a empty node list.

2. How do you create and insert a new element into the DOM?
Answer: To create a new element and insert it into the DOM. You can use createElement() and then .appendChild() with these two you can easily create and insets element to the targeted parent.
But instead of using appendChild() i would prefer to use insertAdjacentHTML(). This gives me more functionality. I can chose weather to add the new element as the child or sibling. As well as i can control if element get inserted as the first child or last. If i want to add a element as sibling then i can also control weather it get inserted before for after the targeted element.

3. What is Event Bubbling and how does it work?
Answer: Don't know what is event bubbling, searched it online but it was to complicated for me. But i know how it works.
Basically when a event(click, scroll, hover, swipe etc.) occur in any element of the DOM file the event is triggered and bubbles upwards triggering all the events form its parent and its parent and its parent until it hits the document tag. For example a section has a div and inside that div there is a button. So, our DOM tree looks like this:
<section>
    <div>
        <button></button>
    </div>
</section>
All the elements have event listener to them and the button is clicked then the event listener inside the button gets triggered then it goes upwards the its parent element the div then triggers the div elements event listener then finally it goes to the div elements parent section element and triggers its event listener too. And this is called event bubbling🙂.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Did not understand very well, Might need a conceptual section for it.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: The difference between preventDefault() and stopPropagation() is one stops a elements default behavior and another stops event bubbling from going up wards.
preventDefault(): Assume a have a button inside a from the document assigns that from as submit button and whenever someone clicks on the button it reloads the page and all the input fields values are gone. Therefor all the value need to be give again. To stop the reload from happening we use preventDefault() ro stop the default behavior.
stopPropagation(): By the name you guess it stops event propagation. What is event propagation? Event propagation is the process of event bubbling. In 3rd question we learned that how an event bubbles triggers all the event bubbling up wards. To stop that we use stopPropagation(). This prevents event bubbling.