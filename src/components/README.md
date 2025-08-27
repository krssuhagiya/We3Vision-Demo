# Preloader Component

A reusable preloader component with sequential animations that can be used across different pages.

## Usage

```jsx
import React, { useState } from 'react';
import Preloader from '../components/Preloader';

const YourPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <div className="your-page-content">
          {/* Your page content here */}
        </div>
      )}
    </>
  );
};
```

## Features

- **Sequential Animation**: Shows "Building Immersive Worlds" → Reveal Box → "We3vision Private Limited"
- **Smooth Transitions**: Fade-in/fade-out effects between stages
- **Responsive Design**: Works on all screen sizes
- **Reusable**: Can be used on any page
- **Customizable**: Easy to modify timing and content

## Animation Stages

1. **Stage 1 (0.5s)**: "Building Immersive Worlds" with staggered text animation
2. **Stage 2 (1s)**: Reveal box with gradient slider and character-by-character text
3. **Stage 3 (1s)**: "We3vision Private Limited" with fade-in animation
4. **Stage 4 (0.5s)**: Transition to main content

## Props

- `onComplete`: Callback function called when preloader animation finishes

## Files

- `Preloader.js` - Main component
- `Preloader.css` - All preloader styles and animations 