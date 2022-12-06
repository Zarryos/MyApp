# Awesome chat app

[![React Native Version](https://img.shields.io/badge/react--native-0.69.X-green)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This app is designed to be the the starter app of a chat, easily modifiable to add more features in the future.  

It shows some basics of ReactNative development, and demonstrate my way of doing it.

## Features
 - [x] A chat screen, with a list of messages
 - [x] A text input, to add more messages
 
## Notes on project development  
### Some context
This project have been completed for Amplement, as a technical test

### Technical choices
As precised in the description, a [boilerplate](https://github.com/thecodingmachine/react-native-boilerplate) have been used  with the latest libraries.
Redux is used as store managment and the api/data is emulated for this MVP project

### Project structure
This project followed the coding machine boilerplate, with the addition of the component organization I enjoy : Atoms (small components, cannot be broke down any further), Molecules (a larger component, eventually using some Atoms components) and Organisms (the largest component, using some Molecules components)

### Versionning
This basic app beign really light, the commits have been done directly on master. Please do not do that at work, as it might hurts my feelings.

### Project possible improvements

#### UI/UX  
Well, let's say a lot can be done there. Display the messages in a bubble, different colors & theme, user avatars... and a lot more!

### Features
All the classic chat features are to be added: Like a message, quote, edit, delete, add an image/gif, audio recording, received indicator...

### Tests
Having a more advanced project would justify testing some methods and add some validation on messages that could be tested

## Time spent
The repartition of time used to make this project is the following : 
- [x] 1.5 hour initial setup, update of dependencies and project versionning
- [x] 2 hours for the flatlist, messages setup & boilerplate usage
- [x] 3 hours for redux, the fake data generator and some UI
