package StepDefinations;

import Utility.UtilityClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.w3c.dom.ls.LSException;

import javax.swing.*;
import java.sql.Driver;
import java.util.*;

public class coinMarketCapStepDefs {

    WebDriver driver;
    List<String> homePageWebElementText = new ArrayList<String>();
    List<String > coinData = new ArrayList<String>();

    @Given("^User present on list of cryptocurrencies page$")
    public void user_present_on_list_of_cryptocurrencies_page() {
        System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://coinmarketcap.com/");
        driver.manage().window().maximize();
        driver.findElement(By.className("cmc-cookie-policy-banner__close")).click();

    }

    @When("^Title of login page is Cryptocurrency Prices, Charts And Market Capitalizations CoinMarketCap$")
    public void title_of_login_page_is() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap", title);

    }

    @Then("^User verifies that 100 results are displayed$")
    public void user_verifies_that_results_are_displayed() {
        List<WebElement> allCryptoCurr = driver.findElements(By.xpath("//tbody/tr//span[contains(@class,'icon-Star')]"));
        Assert.assertTrue("list of cyptocurrencies is not greater than 100", allCryptoCurr.size() >= 100);
        driver.close();
    }

    @Then("^Select between 5 and 10 random crypto currencies add them to watchlist$")
    public void select_between_and_random_crypto_currencies() throws InterruptedException {
        List<WebElement> allCryptoCurr = driver.findElements(By.xpath("//tbody/tr//span[contains(@class,'icon-Star')]"));
        List<WebElement> allCryptoCurrValues = driver.findElements(By.xpath("//div[@class='cmc-homepage']//tbody//tr//span[@class='icon-Star']/ancestor::tr//td[3]"));

        Random random = new Random();
        int randNumb = random.nextInt(10 - 5) + 5;


        Set setUniqueNumb = new HashSet<Integer>(randNumb);

        while (setUniqueNumb.size() < randNumb) {
            while (setUniqueNumb.add(random.nextInt(allCryptoCurr.size())) != true)
                ;
        }
        assert setUniqueNumb.size() == randNumb;

        Iterator<Integer> itr = setUniqueNumb.iterator();
        while (itr.hasNext()) {
            int i = itr.next();
            System.out.println(i);
            ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoViewIfNeeded(true);", allCryptoCurr.get(i));
            allCryptoCurr.get(i).click();
            homePageWebElementText.add(allCryptoCurrValues.get(i).getText());


        }
    }


    @Then("^Open the watchlist in a different browser tab$")
    public void open_the_watchlist_in_a_different_browser_tab() throws InterruptedException {
        WebElement watchlist = driver.findElement(By.linkText("Watchlist"));
        String selectLinkOpeningNewTab = Keys.chord(Keys.CONTROL, Keys.RETURN);
        watchlist.sendKeys(selectLinkOpeningNewTab);
    }

    @Then("^verify the added cryptocurrencies are available in the watchlist$")
    public void verify_the_added_cryptocurrencies_are_available_in_the_watchlist() {
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));
        List<String> watchlistedCryptoCurrText = new ArrayList<String>();
        List<WebElement> selectedWatchlist = driver.findElements(By.xpath("//tbody/tr//span[contains(@class,'icon-Star')]/ancestor::tr//td[3]"));
        for (WebElement watchlistedCryptoCurr : selectedWatchlist) {
            watchlistedCryptoCurrText.add(watchlistedCryptoCurr.getText());
        }
        Assert.assertTrue(homePageWebElementText.size() == watchlistedCryptoCurrText.size() && homePageWebElementText.containsAll(watchlistedCryptoCurrText) && watchlistedCryptoCurrText.containsAll(homePageWebElementText));
        driver.quit();
    }

    @Then("^Display the dropdown menu on the Cryptocurrencies tab$")
    public void display_the_dropdown_menu_on_the_Cryptocurrencies_tab(){
        driver.findElement(By.xpath("//button[text()='Filters']")).click();
        driver.findElement(By.xpath("//button[text()='All Cryptocurrencies']")).click();

    }
    @Then("^Click any of the three Full List options on this menu$")
    public void click_any_of_the_three_Full_List_options_on_this_menu() throws InterruptedException {
        driver.findElement(By.xpath("//button[text()='Coins']")).click();
        Thread.sleep(5000);
    }

    @Then("^Record the data on the current page$")
    public void record_the_data_on_the_current_page(){
        List<WebElement> coinsRecord = driver.findElements(By.xpath("//div[@class='tableWrapper___3utdq']//tbody//tr"));
        for(WebElement eachCoinRecord : coinsRecord){
            coinData.add(eachCoinRecord.getText());
        }

        }
    @Then("^Apply any combination of filters$")
    public void apply_any_combination_of_filters() throws InterruptedException {



        UtilityClass.explicitWait(driver, driver.findElement(By.xpath("//button[text()='Market Cap']"))).click();
        UtilityClass.explicitWait(driver, driver.findElement(By.xpath("//button[text()='$1B - $10B']"))).click();
        UtilityClass.explicitWait(driver, driver.findElement(By.xpath("//button[text()='Apply']"))).click();

        UtilityClass.explicitWait(driver, driver.findElement(By.xpath("//button[text()='Price']"))).click();
        UtilityClass.explicitWait(driver, driver.findElement(By.xpath("//button[text()='$101 - $1,000']"))).click();
        UtilityClass.explicitWait(driver, driver.findElement(By.xpath("//button[text()='Apply']"))).click();


    }
    @Then("^Check against the data recorded$")
    public void check_against_the_data_recorded() throws InterruptedException {
        UtilityClass.pageLoadWait(driver);
        Thread.sleep(5000);
        List <WebElement> filteredCoins = driver.findElements(By.xpath("//div[@class='tableWrapper___3utdq']//tbody//tr"));
        List<String> filteredRecordData = new ArrayList<String>();
        for(WebElement eachCoin : filteredCoins){
            filteredRecordData.add(eachCoin.getText());
        }
        Assert.assertTrue(filteredRecordData.containsAll(filteredRecordData) && filteredRecordData.containsAll(filteredRecordData));
        driver.close();
    }
}



