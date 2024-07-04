# Simon Says Game

A web-based Simon Says game with a light/dark theme toggle.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a simple implementation of the classic "Simon Says" game using HTML, CSS, and JavaScript. The game challenges players to remember and repeat increasingly complex sequences of button presses. Additionally, the game includes a light/dark theme toggle for a better user experience.

## Features

- Interactive Simon Says game with colored buttons
- Light/Dark mode toggle
- Score tracking and game over message
- Responsive design

## Setup

To run the Simon Says game locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/simon-says-game.git
    ```
2. Navigate to the project directory:
    ```bash
    cd simon-says-game
    ```
3. Open the `index.html` file in your web browser.

## Usage

- Press any key to start the game.
- Watch the sequence of button flashes.
- Repeat the sequence by clicking the buttons in the correct order.
- If you make a mistake, the game will show a "Game Over" message and your score.
- Click the "Restart" button to start a new game.

## Customization

### Light/Dark Theme

To toggle between light and dark themes, use the switch button in the navbar. The theme state is controlled by JavaScript and CSS.

### Styles

To customize the styles, edit the `styles.css` file. Key sections include:

- `.header` for the navbar
- `.container` for the game layout
- `.boxbtn` for the game buttons
- `.modal` for the game over popup

### JavaScript

To modify the game logic, edit the `app.js` file. Key functions include:

- `levelup()` to advance to the next level
- `checkseq(index)` to check the user's input
- `flashbtn(btn)` and `userflash(btn)` for button flash effects
- `reset()` to reset the game state

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
