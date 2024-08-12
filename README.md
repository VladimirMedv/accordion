Accessible Accordion Component

This project features a reusable and fully accessible accordion component built with HTML, CSS, and JavaScript. The accordion is designed to comply with WCAG 2.1 AA standards, ensuring it is usable by a wide range of users, including those relying on assistive technologies.

Features
1. Accordion Structure:
The accordion component consists of multiple items, each with a title and expandable content.
The content is dynamically generated based on an array of objects, simulating data retrieval from a database.
2. Functionality:
Toggle Behavior: Clicking on a title expands or collapses its associated content.
Single Open Item: Only one accordion item can be open at a time. When a new item is opened, any previously opened item is automatically closed.
3. Accessibility:
ARIA Attributes: The accordion utilizes ARIA attributes (aria-expanded and aria-controls) to indicate the expanded/collapsed state of each item and to associate controls with their corresponding content.
Keyboard Navigation: Users can navigate the accordion using the keyboard. The Enter and Space keys toggle the expansion of an item.
Focus Management: Proper focus indicators are implemented to enhance keyboard navigation.
Screen Reader Compatibility: The use of ARIA attributes ensures compatibility with screen readers, allowing visually impaired users to interact with the accordion effectively.
4. Styling:
The accordion is styled to be visually appealing and responsive, with a focus on sufficient color contrast and clarity.
5. Performance Optimization:
Event Delegation: The script uses event delegation to handle clicks efficiently, minimizing the number of event listeners and improving performance, especially with a large number of items.
Document Fragment: The accordion items are appended to the DOM using a DocumentFragment to reduce reflows and repaints, enhancing performance.
6. Cross-Browser Compatibility:
The accordion is tested and works consistently across modern browsers, including Chrome, Firefox, Safari, and Edge.
How to Use
To implement this accordion component in your project:

Include the provided HTML structure in your page.
Link the CSS file for styling.
Include the JavaScript file to enable functionality.
Feel free to customize the styles and extend the functionality as needed.
