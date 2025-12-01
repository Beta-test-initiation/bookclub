# Bookclub - 3D Book Shelf

A React + Three.js application featuring an interactive 3D bookshelf with Ghibli-inspired aesthetics.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000/`

### Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

Alternatively, if you need to kill the server process:

```bash
# Find the process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)
```

Or kill all node processes:

```bash
killall node
```

### Build for Production

```bash
npm run build
```

## Features

- 3D interactive bookshelf rendered with Three.js
- Hover over books to see them pull out from the shelf
- Scroll vertically to pan the camera horizontally and view all books
- Smooth animations and transitions
- Forest green Ghibli-inspired color palette

## Tech Stack

- React 19.2.0
- Vite 7.2.6
- Three.js 0.181.2
- Tailwind CSS 4.1.17
