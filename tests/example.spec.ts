
// import { _android as android } from '@playwright/test';

// (async () => {
//   // Connect to the device.
//   const [device] = await android.devices();
//   console.log(`Model: ${device.model()}`);
//   console.log(`Serial: ${device.serial()}`);
//   // Take screenshot of the whole device.
//   await device.screenshot({ path: 'device.png' });

//   {
//     // --------------------- WebView -----------------------

//     // Launch an application with WebView.
//     await device.shell('am force-stop org.chromium.webview_shell');
//     await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');
//     // Get the WebView.
//     const webview = await device.webView({ pkg: 'org.chromium.webview_shell' });

//     // Fill the input box.
//     await device.fill({ res: 'org.chromium.webview_shell:id/url_field' }, 'github.com/microsoft/playwright');
//     await device.press({ res: 'org.chromium.webview_shell:id/url_field' }, 'Enter');

//     // Work with WebView's page as usual.
//     const page = await webview.page();
//     await page.waitForNavigation({ url: /.*microsoft\/playwright.*/ });
//     console.log(await page.title());
//   }

//   {
//     // --------------------- Browser -----------------------

//     // Launch Chrome browser.
//     await device.shell('am force-stop com.android.chrome');
//     const context = await device.launchBrowser();

//     // Use BrowserContext as usual.
//     const page = await context.newPage();
//     await page.goto('https://webkit.org/');
//     console.log(await page.evaluate(() => window.location.href));
//     await page.screenshot({ path: 'page.png' });

//     await context.close();
//   }

//   // Close the device.
//   await device.close();
// })();

import { test, expect, devices } from '@playwright/test';

(async () => {
  // Connect to the device.
  const [device] = await devices(android).discover();

  test('has title', async ({ page }) => {
    await page.goto('App/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('Ajouter link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the Ajouter link.
    await page.getByRole('link', { name: 'Ajouter' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });

  // Take screenshot of the whole device.
  await device.screenshot({ path: 'device.png' });

  // Run the tests on the device.
  await devices(android).persistPermissions().run();
})();
