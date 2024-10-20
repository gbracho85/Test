const puppeteer = require('puppeteer');

describe('Mi prueba de login', () => {
  it('Debe abrir y cerrar el navegador correctamente', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 0,  // Velocidad de las acciones
      devtools: false,
      defaultViewport: {
        width: 2100,
        height: 1080,
      },
      args: [
        // '--window-size=1920,1080', // tamaño de la ventana (opcional)
      ],
      defaultViewport: null,
    });

    try {
      const page = await browser.newPage();
      await page.goto('https://www.google.com/', {
        waitUntil: 'networkidle2',
        timeout: 60000  // Asegúrate de dar tiempo suficiente para que cargue la página
      });

    
      await page.waitForSelector('#APjFqb', { visible: true });
      await page.type('#APjFqb', 'pruebas');


      // Asegúrate de que el botón de entrar esté disponible y luego haz clic en él
      await page.waitForSelector('#submit', { visible: true });
      await page.click('#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > button');
   
      // Espera a que la navegación termine después del login
      await page.waitForNavigation({
        waitUntil: 'networkidle2',
        timeout: 60000
      });
        // Verifica la URL después del login
        const currentUrl = await page.url();
        console.log('URL después del login:', currentUrl);
      // Capturar el contenido de la página después del login
      const pageContent = await page.content();
+
      // Captura de pantalla
      await page.screenshot({ path: 'resultado_pagina_lenta.png' });

    } catch (error) {
      console.error('Error en la prueba:', error);
    } finally {
      await browser.close();
    }
  }, 60000);  // Timeout de la prueba
});
