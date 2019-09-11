# trivia-trove
a fortuitous haphazard game


# Project Overview
This project is a trivia game app that asks a series of questions and keeps track of score and streak. Answers are in the form of true fals, or multiple choice. Questions can be categorized or randomized. This project will include html, css, and javascript code, with the implementation of some API. 

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sep 10th| get API keys API source| Complete
|Sep 11th| javascript and HTML coding | Incomplete
|Sep 12th| MVP, Core Application Structure (HTML, CSS, etc.)| Incomplete
|Sep 13th| Coding | Incomplete
|Sep 14th| Fully Functioning App  | Incomplete
|Sep 15th| Final touch ups on css, debugging etc| incomplete
|Sep 16th| Present | Incomplete


## Project Description

This is a quiz app to test your knowledge of movie release dates and relateable information regarding movies. The functionality is a simple multiple choice style quice with a question, an image of the movie in question and four possible answer choices below.

## Wireframes

https://cloudinary.com/console/media_library/folders/all/movie-wars

this is the layout for the movie wars app

## Priority Matrix

A. Get api key
B. Get api loaded
C. Build the html layout -- flex, media queries, links etc.
D. Create the app.js file buttons, querySelector's, api get request, functions.
E. CSS styling
F. Git add . commits -m "" git push 


## API Data Sample

{
    "response_code": 0,
    "results": [
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The Great Wall of China is visible from the moon.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What alcoholic drink is made from molasses?",
            "correct_answer": "Rum",
            "incorrect_answers": [
                "Gin",
                "Vodka",
                "Whisky"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is &quot;dabbing&quot;?",
            "correct_answer": "A dance",
            "incorrect_answers": [
                "A medical procedure",
                "A sport",
                "A language"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is on display in the Madame Tussaud&#039;s museum in London?",
            "correct_answer": "Wax sculptures",
            "incorrect_answers": [
                "Designer clothing",
                "Unreleased film reels",
                "Vintage cars"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who is depicted on the US hundred dollar bill?",
            "correct_answer": "Benjamin Franklin",
            "incorrect_answers": [
                "George Washington",
                "Abraham Lincoln",
                "Thomas Jefferson"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;",
            "correct_answer": "Print",
            "incorrect_answers": [
                "Digest",
                "Look",
                "Read"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What was the first ever London Underground line to be built?",
            "correct_answer": "Metropolitan Line",
            "incorrect_answers": [
                "Circle Line",
                "Bakerloo Line",
                "Victoria Line"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Dihydrogen Monoxide was banned due to health risks after being discovered in 1983 inside swimming pools and drinking water.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What machine element is located in the center of fidget spinners?",
            "correct_answer": "Bearings",
            "incorrect_answers": [
                "Axles",
                "Gears",
                "Belts"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which sign of the zodiac comes between Virgo and Scorpio?",
            "correct_answer": "Libra",
            "incorrect_answers": [
                "Gemini",
                "Taurus",
                "Capricorn"
            ]
        }
    ]
}

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
-build all the html form layout
- use of ajax axios library
- Find and use external api 
- Render data on page 
- create html model design
- build the skeleton for html through javascript
- implement css flex design

#### PostMVP 

- Use local storage to save user results
- add event listeners that can make the app more dynamic
- look into update features to add to the app



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API KEYS    |  H     | 4HRS           |
| API LOADED  |  H     | 4HRS           |
| BUILD JS    |  H     | 8HRS           |
| GIT COMMITS |  H     | 2HR            |
| HTML FORMS  |  M     | 4HRS           |
| CSS STYLES  |  M     | 7HRS           |
| DEBUGGING   |  M     | 5HRS           |
| PREP PRESENT|  M     | 2HRS           |
| Total       |          35hrs          |               

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  