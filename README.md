# Restaurant Feedback Form

This is a simple feedback form designed for a restaurant, allowing customers to provide feedback by rating their experience. The form consists of a set of emoji buttons representing different levels of satisfaction. The total score for all three ratings is displayed at the bottom.

## Preview

![Screen Shot 2023-06-29 at 10 26 13](https://github.com/Ethan-LN/Feedback-Form/assets/71419743/43eac11f-06c5-4b39-a452-00de9bd35552)

## Components

The feedback form is built using two components: `FeedbackForm` and `HappinessPicker`. The `HappinessPicker` component can be reused in other parts of the application as well.

### HappinessPicker Component

The `HappinessPicker` component displays five emoji buttons, each representing a score ranging from 0 (very unhappy face) to 4 (grinning face). This component does not manage its own state and relies on two props:

- `currentValue`: Represents the current selected value of the happiness rating.
- `onChange`: A function to be called when the value of the happiness rating changes.

### FeedbackForm Component

The `FeedbackForm` component represents the overall feedback form. It includes three instances of the `HappinessPicker` component for collecting ratings in different categories. The form calculates and displays the total score based on the selected ratings.

## Usage

To use the feedback form in your application, follow these steps:

1. Import the `FeedbackForm` and `HappinessPicker` components into your project.
2. Render the `FeedbackForm` component in the desired location of your application.
3. Handle the `onChange` function in the `FeedbackForm` component to capture and process the updated ratings.

Here's an example of how you could use the feedback form:

```jsx
import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';

function App() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);

  const handleRatingChange1 = (value) => {
    setRating1(value);
  };

  const handleRatingChange2 = (value) => {
    setRating2(value);
  };

  const handleRatingChange3 = (value) => {
    setRating3(value);
  };

  return (
    <div>
      <h1>Restaurant Feedback</h1>
      <FeedbackForm
        rating1={rating1}
        rating2={rating2}
        rating3={rating3}
        onRatingChange1={handleRatingChange1}
        onRatingChange2={handleRatingChange2}
        onRatingChange3={handleRatingChange3}
      />
    </div>
  );
}

export default App;
```

In the example above, the `App` component renders the `FeedbackForm` component and handles the rating changes by updating the state values `rating1`, `rating2`, and `rating3` accordingly.

Feel free to customize the `FeedbackForm` component and the handling of rating changes according to your specific application requirements.
