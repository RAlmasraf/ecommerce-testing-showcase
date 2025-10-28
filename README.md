# E-commerce Testing Showcase

A demonstration project for automated testing of e-commerce applications using Playwright.

## Prerequisites

- Node.js (version 20.18)
- npm
- github account https://github.com/RAAlmasraf/ecommerce-testing-showcase

## Installation

1. Install project dependencies:
```bash
npm ci
```

2. Install Playwright browsers:
```bash
npx playwright install --with-deps
```

## Running Tests

### Basic test execution:
```bash
npx playwright test
```

### With credentials:

**PowerShell:**
```powershell
$env:USERNAME="standard_user"
$env:PASSWORD="secret_sauce"
npx playwright test
```

**Bash/Linux/Mac:**
```bash
USERNAME=standard_user PASSWORD=secret_sauce npx playwright test
```

### Debug modes:
```bash
# Run tests in headed mode
npx playwright test --headed

# Run tests in debug mode
npx playwright test --debug
```

## Configuration

The tests expect the following environment variables:
- `USERNAME` - Login username (default: username)
- `PASSWORD` - Login password (default: password)