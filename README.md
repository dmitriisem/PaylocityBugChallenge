# Paylocity Bug Challenge

Defects found as a result of testing Paylocity Benefits Dashboard application:

[Bug 1. First name and Last name are displayed incorrectly](#bug-1-first-name-and-last-name-are-displayed-incorrectly)

[Bug 2. The size of table fields changes after adding an employee](#bug-2-the-size-of-table-fields-changes-after-adding-an-employee)

[Bug 3. UI doesn't show an error when trying to add more than 32 Dependants](#bug-3-ui-doesnt-show-an-error-when-trying-to-add-more-than-32-dependants)

[Bug 4. No error message when trying to add a negative or non-integer number in the "Dependants" field](#bug-4-no-error-message-when-trying-to-add-a-negative-or-non-integer-number-in-the-dependants-field)

[Bug 5. No error message shown when using special characters in the "Last Name" and "First Name" fields](#bug-5-no-error-message-shown-when-using-special-characters-in-the-last-name-and-first-name-fields)

[Bug 6. No error message shown when using too long string in the "Last Name" and "First Name" fields](#bug-6-no-error-message-shown-when-using-too-long-string-in-the-last-name-and-first-name-fields)

[Bug 7. The aesthetic appearance of the table is deformed when too long string used for "Last Name" or "First Name" fields](#bug-7-the-aesthetic-appearance-of-the-table-is-deformed-when-too-long-string-used-for-last-name-or-first-name-fields)

[Bug 8. No error message shown when "Last Name" or "First Name" field is empty](#bug-8-no-error-message-shown-when-last-name-or-first-name-field-is-empty)

[Bug 9. No error message shown when "Dependants" field is empty](#bug-9-no-error-message-shown-when-dependants-field-is-empty)

[Bug 10. No UI or API informational message when creating/modifying/deleting a record](#bug-10-no-ui-or-api-informational-message-when-creatingmodifyingdeleting-a-record)

[Bug 11. App randomly logs out current user](#bug-11-app-randomly-logs-out-current-user)

[Bug 12. API HTTP code 500 when adding Not A Number to request body](#bug-12-api-http-code-500-when-adding-not-a-number-to-request-body)

[Bug 13. API allows to add additional fields to POST and PUT requests body and not throws an error](#bug-13-api-allows-to-add-additional-fields-to-post-and-put-requests-body-and-not-throws-an-error)

[Bug 14. API allows to DELETE the same record multiple times](#bug-14-api-allows-to-delete-the-same-record-multiple-times)

[Bug 15. API allows to use GET method on deleted record](#bug-15-api-allows-to-use-get-method-on-deleted-record)

[Bug 12. API HTTP code 500 when adding Not A Number to request body](#bug-12-api-http-code-500-when-adding-not-a-number-to-request-body)

* * *  
### Bug 1. First name and Last name are displayed incorrectly
* * *
**Priority:** Medium

**Description:**

The first and Last names are displayed incorrectly in the Employees table. Last name is displayed instead of First name and vice versa.

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Fill out opened form with your First Name, Last Name and Dependants number;
3) Click "Add" button;

**Expected result:**
All the data in the Employee table is displayed correctly and the content of each column corresponds to its name.

**Actual result:**
First name and Last name are displayed incorrectly. Column "First Name" shows actual Last Name and column "Last Name" shows actual First Name.

**Attachments:**

![Preview](/images/Bug1.gif)

* * *  
### Bug 2. The size of table fields changes after adding an employee
* * *
**Priority:** Low

**Description:**

The size of the table fields changes after adding an employee and the field names are shifted

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Fill out opened form with your First Name, Last Name and Dependants number;
3) Click "Add" button;

**Expected result:**
The size of the table fields does not change and table fields don't move after adding a new employee to it.

**Actual result:**
Table field names are shifted after adding a new employee to the table.

**Attachments:**

![Preview](/images/Bug2.gif)

* * *  
### Bug 3. UI doesn't show an error when trying to add more than 32 Dependants
* * *
**Priority:** Medium

**Description:**

UI doesn't show an error when trying to add more than 32 dependencies, but API throws HTTP code "400" and response body shows that error "The field Dependants must be between 0 and 32" should be displayed.

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Fill out "First Name" and "Last Name" fields and type any number in the "Dependants" field between 33 and infinity;
3) Click "Add" button;

**Expected result:**
An error message should appear "The field Dependants must be between 0 and 32".

**Actual result:**
Error message does not appear. 

**Attachments:**

![Preview](/images/Bug3.gif)

* * *  
### Bug 4. No error message when trying to add a negative or non-integer number in the "Dependants" field
* * *
**Priority:** Medium

**Description:**

UI doesn't show an error when trying to add a negative or non-integer number in the "Dependants" field. 
For example if adding a new employee and typing numbers like "15.5" or "-25" in the "Dependants" field - UI won't show an error message and won't add a new employee.
If adding a number that starts from 0 ( like 0003) - UI won't show an error message and add a new employee to the table.

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Fill out "First Name" and "Last Name" fields and type non integer number in the "Dependants" field (e.g 15.5 or - 21 or 00025)
3) Click "Add" button;

**Expected result:**
An error message should appear and a new employee was not added to the table.

**Actual result:**
Error message does not appear and a new employee is added to the table if a zero-based number was used.

**Attachments:**

![Preview](/images/Bug4.gif)

* * *  
### Bug 5. No error message shown when using special characters in the "Last Name" and "First Name" fields
* * *
**Priority:** High

**Description:**

UI doesn't show an error when using special characters or numbers (e.g %#$) in the "First Name" and "Last Name" fields and allows to add a new employee to the table

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Use special characters and numbers when filling "First Name" and "Last Name" fields
3) Click "Add" button;

**Expected result:**
An error message should appear and a new employee was not added to the table.

**Actual result:**
Error message does not appear and a new employee is added to the table.

**Attachments:**

![Preview](/images/Bug5.gif)

* * *  
### Bug 6. No error message shown when using too long string in the "Last Name" and "First Name" fields
* * *
**Priority:** Medium

**Description:**

UI doesn't show an error when using too long string in the "Last Name" and "First Name" fields, but API throws HTTP code "400" and response body shows that error "The field FirstName/LastName must be a string with a maximum length of 50" should be displayed.

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Use string over 50 symbols when filling "First Name" and "Last Name" fields
3) Click "Add" button;

**Expected result:**
An error message "The field FirstName/LastName must be a string with a maximum length of 50" should appear

**Actual result:**
Error message does not appear.

**Attachments:**

![Preview](/images/Bug6.gif)

* * *  
### Bug 7. The aesthetic appearance of the table is deformed when too long string used for "Last Name" or "First Name" fields
* * *
**Priority:** Medium

**Description:**

The aesthetic appearance of the table is deformed when too long string used for "Last Name" or "First Name" fields when adding new employee

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Use long string (e.g 40 symbols) when filling "First Name" and "Last Name" fields;
3) Click "Add" button;

**Expected result:**
The size of the table fields does not change and table fields don't move after adding a new employee to it.

**Actual result:**
Size of tables and the general view of the table changes.

**Attachments:**

![Preview](/images/Bug7.gif)

* * *  
### Bug 8. No error message shown when "Last Name" or "First Name" field is empty
* * *
**Priority:** Medium

**Description:**

UI doesn't show an error when leave "Last Name" or "First Name" field empty during new employee adding, but API throws HTTP code "400" and response body shows that error "The FirstName/LastName field is required." should be displayed.

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Leave "Last Name" or/and "First Name" field empty;
3) Click "Add" button;

**Expected result:**
An error message "The FirstName/LastName field is required." should appear

**Actual result:**
Error message does not appear.

**Attachments:**

![Preview](/images/Bug8.gif)

* * *  
### Bug 9. No error message shown when "Dependants" field is empty
* * *
**Priority:** Medium

**Description:**

UI doesn't show an error when leave "Dependants" field empty and adds a new employee with 0 dependants.

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Leave "Dependants" field empty;
3) Click "Add" button;

**Expected result:**
An error message should appear and a new employee should not be added to the table.

**Actual result:**
Error message does not appear and a new employee is added to the table with 0 dependants.

**Attachments:**

![Preview](/images/Bug9.gif)

* * *  
### Bug 10. No UI or API informational message when creating/modifying/deleting a record
* * *
**Priority:** Low

**Description:**

UI and API doesn't show an informational message when creating/modifying/deleting a record.

**Preconditions:**
Logged in user with valid credentials;

**Steps to reproduce:**
1) Click on "Add Employee" button;
2) Fill out opened form with your First Name, Last Name and Dependants number;
3) Click "Add" button;

**Expected result:**
informational message like "New record was added to the table" is shown

**Actual result:**
Informational message not shown.

**Attachments:**

![Preview](/images/Bug10.gif)

* * *  
### Bug 11. App randomly logs out current user
* * *
**Priority:** High

**Description:**

Application randomly logging out user. Sometimes after page reload, sometimes after a few minutes of inactivity. No error message shown.

**Steps to reproduce:**
1) Log in to application using valid credentials;
2) Wait for a few minutes (e.g 5 min);
3) After 5 min try to add a new employee or delete existing record;

**Expected result:**
User able to add a new record or modify existing one and no API errors.

**Actual result:**
User logged out from the app and API "401" HTTP response code shown.

**Attachments:**

![Preview](/images/Bug11.gif)

* * *  
### Bug 12. API HTTP code 500 when adding Not A Number to request body
* * *
**Priority:** Low

**Description:**

Postman throws API HTTP response code "500" when adding Not A Number or A Number with decimal part. Should throw "400" code and an error message.

**Steps to reproduce:**
1) Create POST request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees" end point;
2) Add Headers: "Content-Type application/json" and "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
3) Add an JSON Object: " {
   "firstName": "Dmitrii",
   "lastName": "Semm",
   "dependants": 15.5
   }"
4) Send request;

**Expected result:**
HTTP Code "400" "Bad Request" and error message shown in response body.

**Actual result:**
HTTP Code "500" shown and no error message.

**Attachments:**

![Preview](/images/Bug12.gif)

* * *  
### Bug 13. API allows to add additional fields to POST and PUT requests body and not throws an error
* * *
**Priority:** Low

**Description:**

POST and PUT requests allows to add additional field to its request body. Requests with additional field are successful and show code "200". Additional fields are ignored in the response body.

**Steps to reproduce:**
1) Create POST request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees" end point;
2) Add Headers: "Content-Type application/json" and "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
3) Add an JSON Object: " {
   "firstName": "Dmitrii",
   "lastName": "Semm",
   "Age": 27,
   "dependants": 15
   }"
4) Send request;

**Expected result:**
HTTP Code "400" "Bad Request" and error message shown in response body.

**Actual result:**
HTTP Code "200" shown and no error message.

**Attachments:**

![Preview](/images/Bug13.gif)

* * *  
### Bug 14. API allows to DELETE the same record multiple times
* * *
**Priority:** Medium

**Description:**

DELETE method allows to delete the same record multiple times without any errors. API always shows "200" success response code.

**Steps to reproduce:**
1) Create POST request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees" end point;
2) Add Headers: "Content-Type application/json" and "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
3) Add JSON Object to the request body: " {
   "firstName": "Dmitrii",
   "lastName": "Semm",
   "dependants": 15
   }"
4) Save Id from the response body;
5) Create DELETE request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees"+ ID from the previous step end point;
6) Add Headers: "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
7) Send request;
8) Send the same DELETE request again;

**Expected result:**
One of the "400" error codes shown and error message in the response body.

**Actual result:**
Success "200" code shown.

**Attachments:**

![Preview](/images/Bug14.gif)

* * *  
### Bug 15. API allows to use GET method on deleted record
* * *
**Priority:** High

**Description:**

API allows to use GET method on deleted record. API shows "200" status code and shows and empty body of the deleted record.

**Steps to reproduce:**
1) Create POST request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees" end point;
2) Add Headers: "Content-Type application/json" and "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
3) Add JSON Object to the request body: " {
   "firstName": "Dmitrii",
   "lastName": "Semm",
   "dependants": 15
   }"
4) Save Id from the response body;
5) Create DELETE request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees"+ ID from the previous step end point;
6) Add Headers: "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
7) Send request;
8) Create GET request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees"+ ID from the previous step end point;
9) Add Headers: "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
10) Send request;

**Expected result:**
One of the "400" error codes shown and error message in the response body.

**Actual result:**
Success "200" code end empty response body shown.

**Attachments:**

![Preview](/images/Bug15.gif)

* * *  
### Bug 16. API allows to use PUT method on deleted record
* * *
**Priority:** High

**Description:**

API allows to use PUT method on deleted record. API shows "200" status code and shows and a response body with empty "salary" and "gross" fields + negative value in the "net" field.

**Steps to reproduce:**
1) Create POST request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees" end point;
2) Add Headers: "Content-Type application/json" and "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
3) Add JSON Object to the request body: " {
   "firstName": "Dmitrii",
   "lastName": "Semm",
   "dependants": 15
   }"
4) Save Id from the response body;
5) Create DELETE request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees"+ ID from the previous step end point;
6) Add Headers: "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
7) Send request;
8) Create PUT request using "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees";
9) Add Headers: "Content-Type application/json" and "Authorization Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080";
10) Add JSON Object to the request body: " {
    "firstName": "Dmitrii",
    "lastName": "Semm",
    "dependants": 15
    }"
11) Send request;

**Expected result:**
One of the "400" error codes shown and error message in the response body.

**Actual result:**
Success "200" code end a response body with empty "salary" and "gross" fields + negative value in the "net" field shown.

**Attachments:**

![Preview](/images/Bug16.gif)
