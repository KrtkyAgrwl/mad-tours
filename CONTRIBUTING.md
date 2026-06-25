# Contributing to MAD Tours

Thanks for your interest in contributing! Here's how to get started.

## Setting up locally

```bash
git clone https://github.com/KrtkyAgrwl/mad-tours.git
cd mad-tours
npm install
npm start
```

The app will be available at `http://localhost:3000`.

## Making a change

1. Create a branch off `master`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes.
3. Run the tests to make sure nothing is broken:
   ```bash
   npm test
   ```
4. Commit with a clear message:
   ```bash
   git commit -m "Add: short description of your change"
   ```
5. Push and open a pull request against `master`.

## What we're looking for

- New guide profiles in `src/data/guides.js`
- Bug fixes in the API routes (`src/routes/`)
- UI improvements in `public/`
- Additional test coverage in `tests/`

## Code style

- Use `const`/`let`, no `var`
- Descriptive variable names over abbreviations
- Keep functions small and focused

## Questions?

Open an issue and we'll get back to you.
