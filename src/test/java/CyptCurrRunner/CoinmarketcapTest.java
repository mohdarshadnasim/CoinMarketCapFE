package CyptCurrRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = "./src/main/java/Features",
            glue = {"StepDefinations"},
            plugin = {"pretty", "html:target/cucumber-reports"},
            monochrome = true




    )
    public class CoinmarketcapTest {

    }
