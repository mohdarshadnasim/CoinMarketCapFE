package Utility;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class UtilityClass {

    public static void pageLoadWait(WebDriver driver) {
        driver.manage().timeouts().pageLoadTimeout(600, TimeUnit.SECONDS);
    }

    public static WebElement explicitWait(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 80);
        WebElement waitElement = wait.until(ExpectedConditions.visibilityOf(element));
        return waitElement;
    }

    public static WebElement explicitWaitClickable(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 80);
        WebElement waitElement = wait.until(ExpectedConditions.elementToBeClickable(element));
        return waitElement;
    }


    public static WebElement explicitWaitVisibility(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 120);
        WebElement waitElement = wait.until(ExpectedConditions.visibilityOf(element));
        return waitElement;

    }
}
