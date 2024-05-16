# Pair Programming Project

## Introduction

This project is a fun and interactive pair programming application that showcases different "pear" characters with unique stories. It consists of a frontend built with React and a backend built with Express.js. The application fetches data from the backend and displays information about various pear characters, including images and unique stories.

## Table of Contents

- [Frontend](#frontend)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [File Structure](#file-structure)
- [Backend](#backend)
  - [Features](#features-1)
  - [Installation](#installation-1)
  - [Usage](#usage-1)
  - [Endpoints](#endpoints)
  - [File Structure](#file-structure-1)
  - [Example JSON Data](#example-json-data)
- [Contributing](#contributing)
- [License](#license)

## Frontend

### Features

- Displays a list of pear characters with their names and images.
- Clicking on a pear character shows detailed information about the character.
- Fetches data from the backend server.
- Uses React Router for navigation between pages.

### Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>

2. Navigate to the frontend directory:
   ```sh
   cd pear-programming/frontend


3. Install the dependencies:
   ```sh
   npm install

### Usage

1. Start the React development server:
   ```sh
   npm start


2. Open your browser and navigate to:
   ```sh
   http://localhost:3000


## File Structure

```javascript
frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── Commponent/
│   │   ├── PearCard/
│   │   │   ├── PearCard.js
│   │   │   └── PearCard.scss
│   │   ├── PearPage/
│   │   │   ├── PearPage.js
│   │   │   └── PearPage.scss
│   └── ...
├── package.json
└── ...

```

