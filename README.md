# Paylocity Bug Challenge

Defects found as a result of testing Paylocity Benefits Dashboard application:

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
### Bug 10. No informational message when creating/modifying/deleting a record
* * *
**Priority:** Low

**Description:**

UI doesn't show an informational message when creating/modifying/deleting a record.

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
