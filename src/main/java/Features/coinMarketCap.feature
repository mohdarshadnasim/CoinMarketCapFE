Feature: List of Cryptocurrencies
  Background:
    Given User present on list of cryptocurrencies page
    When Title of login page is Cryptocurrency Prices, Charts And Market Capitalizations CoinMarketCap


  Scenario: Display of cryptocurrencies
    Then User verifies that 100 results are displayed

  Scenario: Add cryptocurrencies to watchlist and verify
    Then Select between 5 and 10 random crypto currencies add them to watchlist
    Then Open the watchlist in a different browser tab
    Then verify the added cryptocurrencies are available in the watchlist

  Scenario: Apply filter and check against the recorded data
    Then Display the dropdown menu on the Cryptocurrencies tab
    Then Click any of the three Full List options on this menu
    Then Record the data on the current page
    Then Apply any combination of filters
    Then Check against the data recorded
