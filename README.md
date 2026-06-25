# MAD Tours

Connect travellers with expert local tour guides at monuments and heritage sites across India.

## About

MAD Tours (Monument & Attraction Discovery) pairs curious travellers with verified, on-site guides who know each monument inside-out — from the Taj Mahal to Hampi. No generic audio tours, just real human expertise.

## Features

- Browse guides by monument or site
- View guide profiles, languages spoken, and specialisations
- Book a guided slot and pay securely
- Leave a review after your visit

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js + Express
- **Database**: PostgreSQL (planned)

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
npm install
```

### Running locally

```bash
npm start
```

The app runs at `http://localhost:3000`.

### Running tests

```bash
npm test
```

## Project Structure

```
mad-tours/
├── src/
│   ├── index.js        # Express server entry point
│   ├── routes/         # Route handlers
│   └── data/           # Seed data for guides and monuments
├── public/
│   ├── index.html      # Landing page
│   └── style.css       # Styles
└── tests/
    └── guides.test.js  # Unit tests
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request

## License

MIT
