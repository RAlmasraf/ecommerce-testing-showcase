# ecommerce-testing-showcase
 demo

# Install dependencies

npm ci

# Install dependencies

npx playwright install --with-deps

# Run the Test

npx playwright test

# Pass credentials inline on powershell

$env:USERNAME="standard_user"
>> $env:PASSWORD="secret_sauce"
>> npx playwright test

# Pass credentials inline on bash

USERNAME=standard_user PASSWORD=secret_sauce npx playwright test

# Run in headed mode or debug

npx playwright test --headed
npx playwright test --debug

