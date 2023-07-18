import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <div id="root"></div>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script>
          const { NavigationContainer, DrawerNavigator } = ReactNavigation;
          const AppNav = () => {
            return (
              <NavigationContainer>
                <DrawerNavigator />
              </NavigationContainer>
            );
          };
          ReactDOM.render(React.createElement(AppNav), document.getElementById('root'));
        </script>
      </body>
    </html>
  `);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <div id="root"></div>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script>
          const { NavigationContainer, DrawerNavigator } = ReactNavigation;
          const App = () => {
            return (
                <Provider store={store}>
                    <AppNav />
                </Provider>
            );
          };
          ReactDOM.render(React.createElement(AppNav), document.getElementById('root'));
        </script>
      </body>
    </html>
  `);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
