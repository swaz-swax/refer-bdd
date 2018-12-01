$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/userlogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SWARUP TALUKDAR"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "To check login details",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag3"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Title of your scenario",
  "description": "",
  "id": "login;title-of-your-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters accountNumber \u003cacno\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "password \u003cpass\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "open bank page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login;title-of-your-scenario;",
  "rows": [
    {
      "cells": [
        "acno",
        "pass"
      ],
      "line": 13,
      "id": "login;title-of-your-scenario;;1"
    },
    {
      "cells": [
        "56231",
        "5236"
      ],
      "line": 14,
      "id": "login;title-of-your-scenario;;2"
    },
    {
      "cells": [
        "236521",
        "12369"
      ],
      "line": 15,
      "id": "login;title-of-your-scenario;;3"
    },
    {
      "cells": [
        "15982",
        "523"
      ],
      "line": 16,
      "id": "login;title-of-your-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Title of your scenario",
  "description": "",
  "id": "login;title-of-your-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters accountNumber 56231",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "password 5236",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "open bank page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.user_is_in_Login_page()"
});
formatter.result({
  "duration": 3613805286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56231",
      "offset": 26
    }
  ],
  "location": "StepDefLogin.user_enters_accountNumber(String)"
});
formatter.result({
  "duration": 83825133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5236",
      "offset": 9
    }
  ],
  "location": "StepDefLogin.password(String)"
});
formatter.result({
  "duration": 70792888,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.clicks_on_login_button()"
});
formatter.result({
  "duration": 68838133,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.open_bank_page()"
});
formatter.result({
  "duration": 39603782,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Title of your scenario",
  "description": "",
  "id": "login;title-of-your-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters accountNumber 236521",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "password 12369",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "open bank page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.user_is_in_Login_page()"
});
formatter.result({
  "duration": 2548643650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "236521",
      "offset": 26
    }
  ],
  "location": "StepDefLogin.user_enters_accountNumber(String)"
});
formatter.result({
  "duration": 78662366,
  "error_message": "java.lang.AssertionError: valid 236521 expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat com.cg.trg.demo.StepDefLogin.user_enters_accountNumber(StepDefLogin.java:40)\r\n\tat ✽.When user enters accountNumber 236521(resources/userlogin.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12369",
      "offset": 9
    }
  ],
  "location": "StepDefLogin.password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLogin.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLogin.open_bank_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Title of your scenario",
  "description": "",
  "id": "login;title-of-your-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters accountNumber 15982",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "password 523",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "open bank page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.user_is_in_Login_page()"
});
formatter.result({
  "duration": 2423639856,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created exception\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.81 seconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027CHNSIPDT0T536\u0027, ip: \u002710.219.35.5\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse$$Lambda$189/18111834.apply(Unknown Source)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse$$Lambda$191/5056456.apply(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake$$Lambda$198/14908579.apply(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.cg.trg.demo.StepDefLogin.user_is_in_Login_page(StepDefLogin.java:28)\r\n\tat ✽.Given User is in Login page(resources/userlogin.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "15982",
      "offset": 26
    }
  ],
  "location": "StepDefLogin.user_enters_accountNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "523",
      "offset": 9
    }
  ],
  "location": "StepDefLogin.password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLogin.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLogin.open_bank_page()"
});
formatter.result({
  "status": "skipped"
});
});