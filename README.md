# Web Development Project 3 - *Flashcards! Part 2*

Submitted by: **Hafsa Sarker**

This web app: **An extension of the previous flashcard application with added features. Users can guess the answer before flipping the card. Users can also go back and forward in the array of study set.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [X] A shuffle button is used to randomize the order of the cards
- [X] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [X] User can view which card number they are currently on.
* [X] User can view their answer when card is flipped, without editing their answer

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='C:\Users\Hafsa\Desktop\Project-3\flashcards\public\Project3Demo.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCAP  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

    While building this app, I struggled with the back and forward button. I thought it would be easy, we just increment or decrement the index, considering edge cases of course. However, when clicking the next button, the state variable I used to store my index, was not updating immedietly. I reasearched why this was happening and found something out about state being asynchronous. For now, I added a +1 to the variable but for this exact reason, I was not able to imlement the streak feature. 

## License

    Copyright [2023] [Hafsa Sarker]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
