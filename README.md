## **DevStack React Project**

DevStack is a modern and responsive technology stack builder built with React, TypeScript, and Tailwind CSS. It allows developers to explore different technologies, view their details, and select technologies to build their ideal development stack.

The project focuses on creating a clean, user-friendly interface inspired by a Figma design while following modern React development practices.

## **View Live Site on this project**
https://dev-stack-005.netlify.app/

**Features:**

1.Dynamic "Your Stack" section.
2.Toast notification when add/remove technologies.
3.Sticky navigation bar.

**Technologies Used:**

Vite
React
TypeScript
Tailwind CSS
JSON
React Hooks (useState, useEffect)
Git & GitHub
Netlify

**React Questions & Answers:**

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.
React uses JSX to make it easier to create and understand UI components.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState lets a React component store and update data.

In this project, I used it for things like the selected technologies, mobile menu state, and UI interactions.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders or when its dependencies change.

I used it to load the technology JSON data when the application starts and then store that data in state.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. This allows React to efficiently detect which items were added, removed, or changed.

Example:

{technologies.map((technology) => (
  <div key={technology.id}>
    {technology.name}
  </div>
))}

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, I used it to show an empty-stack message when no technology has been selected.

{selectedStack.length === 0 ? (
  <p>Your Stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props.

If the child needs to send something back, the parent can pass a function as a prop. The child calls that function when an action happens.