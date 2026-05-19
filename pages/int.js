If I were interviewing a mid/senior Playwright automation engineer, these are the questions that actually separate people who’ve shipped tests from people who’ve only read docs:

What exactly happens when await page.click() runs, and where can it fail?

A test passes locally but flakes in CI — how do you debug it without changing the test first?

When do you use getByRole vs data-testid?

How do you isolate tests that share mutable state?

How do you handle flows that require MFA in tests?

How do you mock one API call without affecting others on the same domain?

A test suite takes 40 minutes — how do you find the bottleneck?

Why prefer locator() over page.$()?

If they do well, go into shadow DOM, iframes, and wait strategy nuances.


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Hi everyone 👋

Over the last few months, I’ve attended around 10–15 interviews focused on Playwright automation testing. During this process, I maintained a list of commonly asked Playwright-specific questions. I’m sharing only Playwright concepts, not programming-language-specific questions, since those vary (JavaScript, Java, Python, etc.). Hopefully, this helps others preparing for Playwright interviews.

📌 Playwright Interview Questions (Frequently Asked)

Core Concepts

Playwright Architecture Playwright Framework Project Structure What are locators? What are multiple locators? Difference between browser and browserName fixture

Browser & Context Handling

Code to open a browser How to handle multiple windows or tabs How to run tests in serial mode How to run multiple tests

Element Handling

How to handle dynamic elements How to select multiple options in a dropdown How to check a checkbox in a table (best approach using XPath) File Handling

How to upload a file How to download a file Page Object Model (POM) Did you use POM? How do you reuse code in your tests? Create a POM for a login page

Configuration & Execution

What is package.json? Difference between npm and npx Playwright config file – different configurations Default test timeout and how to change it Command to check/play reports

Advanced Playwright

What are fixtures? How to create custom fixtures What are annotations? How to handle dialog boxes (alerts, confirms, prompts)

Debugging & Tools

What is Codegen? How to use Codegen and its command How to open Playwright Inspector How to open and analyze traces

Assertions & Error Handling

What are assertions? How do you use them? How do you resolve conflicts or errors in tests?

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

https://www.youtube.com/watch?v=JBzjbpAzWH8&t=1s

https://www.youtube.com/watch?v=OOC-ypVnHAY