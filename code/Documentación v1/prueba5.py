from selenium import webdriver
from selenium.webdriver.common.by import By
from colorama import Fore, Style
import time

navegadores = ['Chrome', 'Firefox', 'Edge']  
asana = 'Adho Mukha Svanasana'

for nav in navegadores:
    if nav == 'Chrome':
        driver = webdriver.Chrome()
    elif nav == 'Firefox':
        driver = webdriver.Firefox()
    elif nav == 'Edge':
        driver = webdriver.Edge()

    driver.get("http://localhost:5173/")
    driver.maximize_window()
    time.sleep(0.5)

    try:
        entrada = driver.find_element(By.ID,'postureNameInput')
        entrada.send_keys(asana)
        
        boton = driver.find_element(By.ID,'submitButton')
        boton.click()
        
        traduccionIngles = driver.find_element(By.ID,"EnglishTranslationResult")
        traduccionEspaniol = driver.find_element(By.ID,"SpanishTranslationResult")

        if (traduccionIngles.text == 'Downward-Facing Dog' and traduccionEspaniol.text == 'Perro mirando hacia abajo'):
            print(f"{Fore.GREEN}\u2713 Prueba de traducción de asana exitosa en el navegador {Style.RESET_ALL}" + nav)
    except Exception as e:
        print(f"Error en el navegador {nav}: {e}")

    time.sleep(1)
    driver.quit()
