# Pomodor App

This repo contains all the code for a simple Pomodoro application.

This app can be discovered live at [this address](https://wandocode.github.io/pomodoro/)

## Getting Started

Clone and install nodes modules.
Then,

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main features

- Different themes (colors - typos)
- React context API for global states
- Modal management with Context API
- Lightweighted (minimal dependencies)

## About this project

This project was an easy educational project where I focused on writing a clear, maintainable and reusable code.

The project idea and design come from [Frontend Mentor](https://www.frontendmentor.io/profile/Wandole).

The app is fully responsive and accessible with keyboard.

### Themes

The theme switch (color/typo) has been handled with CSS variable updated via Javascript.

### State management

The application is small but needs a lot of state to works correctly. That's why I've chose to use the React Context API in this application.
