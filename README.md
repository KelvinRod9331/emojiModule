# Emojis Module
A simple to use Emoji's Module that can be used for any Javascript project. Using React as the framework with the use of Ant Design, you can use this module to display a wide variety of sorted emojis'. Users' can also search for any particular emoji with the emoji search bar.

### Here's an example where I utilized my Emoji Module for my messaging app Universal Chat
![fig 1. Emoji Module](/ReadMeImg/emoji-display.png)
 [Universal Chat](https://uchat-universal.herokuapp.com/) 

# Background
While developing a passion project of mine, I came to a roadblock where I wanted to implement emoji's to my messaging app but couldn't find an easier way to display all the emoji's and have it categorized by groups. Searching for days I couldn't find the perfect module so I decided to make my own. I gather all the emojis and created a JSON file to store each character and title of the emoji and group them together by the type of emoji it belong to. With the use of  [React](https://reactjs.org/) and [Ant.Design](https://ant.design/) I created a module that can be implemented in any Javascript project built on React Framework. Very simple to install and used.


# Features
## You can search for any emoji simply by typing the name of the emoji.
![fig 2.](/ReadMeImg/emoji-search.png)

## A Wide Variety of Emojis All Categorized

![fig .3](/ReadMeImg/smiley_people.png)

![fig .4](/ReadMeImg/animals_nature.png)

![fig .5](/ReadMeImg/food_drinks.png)

# Install

**You Must Have React Installed**
```$ npm install react```

**After Installing React**
```$ npm install emoji.module```

# Usage

You must first import the component from the file
```Import { Emojis } from 'emojiModule'```
Then you can use the **Emojis** component anywhere the developer chooses

```
Import React, {Component} from 'react'
Import { Emojis } from 'emojiModule'

class Example from Components{
render(){
    <div>
    <Emojis />
    </div>
}
}

```

## Passing Props
To retrieve the emoji the user selected, the developer **MUST** pass a function as a prop. The function needs to take in an argument that will be assign to the emoji selected and within the function a state or a variable must be set to hold the value. Once function has been created pass the function the prop named 
``getEmoji``

``` 

Import React, {Component} from 'react'
Import { Emojis } from 'emojiModule'

class Example extends Components {
    
    state = {
        emoji: null
    }

//This Function is going to be passed as a prop

emojiSelected = value => {
    this.setState({
        emoji: value
    })
}


render(){
    const { emojiSelected } = this
    return (
        <div>
        <Emoji getEmoji={emojiSelected}>
        </div>
    )
} 
}

```

## Props
| Property      | Description   | Type  | Default |
| ------------- |:-------------:|:-----:|--------:|
| getEmoji     | Use to get the emoji user selected| function | true |
| useDefaultStyle     | Default Style      |   boolean | true |
| eClass | Class name for the emoji search bar    | string |-|
|eStyle| Custom style for emoji search bar|object|-|

### Below Are Ant.Design props used for this project please visit **Ant.Design** [Link](https://ant.design/)for more amazing styling components ###

| Property      | Description   | Type  | Default |
| ------------- |:-------------:|:-----:|--------:|
|overlayStyle|Style of the tooltip card|object|-|
|trigger|Tooltip trigger mode| `hover`  `focus`  `click`  `contextMenu` | `click` |
|placement|The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`|string|topRight|
|overlayClass|Class name of the tooltip card|string|-|
|autoAdjustOverflow|Whether to adjust popup placement automatically when popup is off screen|boolean|true|
|arrowPointAtCenter|Whether the arrow is pointed at the center of target, supported after antd@1.11+|boolean|false|


# Contributers
- **React.js** [Link](https://reactjs.org/) 
- **Ant.Design** [Link](https://ant.design/)
- **Node.js** [Link](https://nodejs.org/en/)

# Version
```1.0```

# Author
- Kelvin Rodriguez

# License
This project is licensed under the MIT License - see the LICENSE.md file for details