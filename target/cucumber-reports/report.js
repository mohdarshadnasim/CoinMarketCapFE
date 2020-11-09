$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("coinMarketCap.feature");
formatter.feature({
  "line": 1,
  "name": "List of Cryptocurrencies",
  "description": "",
  "id": "list-of-cryptocurrencies",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User present on list of cryptocurrencies page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of login page is Cryptocurrency Prices, Charts And Market Capitalizations CoinMarketCap",
  "keyword": "When "
});
formatter.match({
  "location": "coinMarketCapStepDefs.user_present_on_list_of_cryptocurrencies_page()"
});
formatter.result({
  "duration": 21957892900,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.183)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EK7ECLP\u0027, ip: \u0027192.168.28.195\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\MOHDAR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50209}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a6709ae354405b8af1e8310865a95a37\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat StepDefinations.coinMarketCapStepDefs.user_present_on_list_of_cryptocurrencies_page(coinMarketCapStepDefs.java:30)\r\n\tat ✽.Given User present on list of cryptocurrencies page(coinMarketCap.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "coinMarketCapStepDefs.title_of_login_page_is()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 7,
  "name": "Display of cryptocurrencies",
  "description": "",
  "id": "list-of-cryptocurrencies;display-of-cryptocurrencies",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User verifies that 100 results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "coinMarketCapStepDefs.user_verifies_that_results_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User present on list of cryptocurrencies page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of login page is Cryptocurrency Prices, Charts And Market Capitalizations CoinMarketCap",
  "keyword": "When "
});
formatter.match({
  "location": "coinMarketCapStepDefs.user_present_on_list_of_cryptocurrencies_page()"
});
formatter.result({
  "duration": 21403798700,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.183)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EK7ECLP\u0027, ip: \u0027192.168.28.195\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\MOHDAR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50271}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5804068d709fb368fe672fbbeb7e56d4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat StepDefinations.coinMarketCapStepDefs.user_present_on_list_of_cryptocurrencies_page(coinMarketCapStepDefs.java:30)\r\n\tat ✽.Given User present on list of cryptocurrencies page(coinMarketCap.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "coinMarketCapStepDefs.title_of_login_page_is()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Add cryptocurrencies to watchlist and verify",
  "description": "",
  "id": "list-of-cryptocurrencies;add-cryptocurrencies-to-watchlist-and-verify",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Select between 5 and 10 random crypto currencies add them to watchlist",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Open the watchlist in a different browser tab",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify the added cryptocurrencies are available in the watchlist",
  "keyword": "Then "
});
formatter.match({
  "location": "coinMarketCapStepDefs.select_between_and_random_crypto_currencies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "coinMarketCapStepDefs.open_the_watchlist_in_a_different_browser_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "coinMarketCapStepDefs.verify_the_added_cryptocurrencies_are_available_in_the_watchlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User present on list of cryptocurrencies page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of login page is Cryptocurrency Prices, Charts And Market Capitalizations CoinMarketCap",
  "keyword": "When "
});
formatter.match({
  "location": "coinMarketCapStepDefs.user_present_on_list_of_cryptocurrencies_page()"
});
formatter.result({
  "duration": 13421776700,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d86.0.4240.183)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EK7ECLP\u0027, ip: \u0027192.168.28.195\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x009EC013+3194899]\n\tOrdinal0 [0x008D6021+2056225]\n\tOrdinal0 [0x0076F4B0+586928]\n\tOrdinal0 [0x00765894+546964]\n\tOrdinal0 [0x00765F2C+548652]\n\tOrdinal0 [0x00767175+553333]\n\tOrdinal0 [0x0076241E+533534]\n\tOrdinal0 [0x00770620+591392]\n\tOrdinal0 [0x00712A0C+207372]\n\tOrdinal0 [0x00711D0D+204045]\n\tOrdinal0 [0x0070FC1B+195611]\n\tOrdinal0 [0x006F3B7F+80767]\n\tOrdinal0 [0x006F4B4E+84814]\n\tOrdinal0 [0x006F4AD9+84697]\n\tOrdinal0 [0x008ECE64+2149988]\n\tGetHandleVerifier [0x00B5BE95+1400773]\n\tGetHandleVerifier [0x00B5BB61+1399953]\n\tGetHandleVerifier [0x00B631FA+1430314]\n\tGetHandleVerifier [0x00B5C69F+1402831]\n\tOrdinal0 [0x008E3D61+2112865]\n\tOrdinal0 [0x008EE5CB+2155979]\n\tOrdinal0 [0x008EE6F5+2156277]\n\tOrdinal0 [0x008FF26E+2224750]\n\tBaseThreadInitThunk [0x76B6FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x775575F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x775575C4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat StepDefinations.coinMarketCapStepDefs.user_present_on_list_of_cryptocurrencies_page(coinMarketCapStepDefs.java:28)\r\n\tat ✽.Given User present on list of cryptocurrencies page(coinMarketCap.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "coinMarketCapStepDefs.title_of_login_page_is()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Apply filter and check against the recorded data",
  "description": "",
  "id": "list-of-cryptocurrencies;apply-filter-and-check-against-the-recorded-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Display the dropdown menu on the Cryptocurrencies tab",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click any of the three Full List options on this menu",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Record the data on the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Apply any combination of filters",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Check against the data recorded",
  "keyword": "Then "
});
formatter.match({
  "location": "coinMarketCapStepDefs.display_the_dropdown_menu_on_the_Cryptocurrencies_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "coinMarketCapStepDefs.click_any_of_the_three_Full_List_options_on_this_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "coinMarketCapStepDefs.record_the_data_on_the_current_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "coinMarketCapStepDefs.apply_any_combination_of_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "coinMarketCapStepDefs.check_against_the_data_recorded()"
});
formatter.result({
  "status": "skipped"
});
});