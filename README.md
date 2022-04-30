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
### Bug 3. UI doesn't show an error when trying to add more than 32 dependencies
* * *
**Priority:** Medium

**Description:**

UI doesn't show an error when trying to add more than 32 dependencies, but API response shows that error "The field Dependants must be between 0 and 32" should be displayed.

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
