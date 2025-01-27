# whiteSpace Automation Engineer Assessment

**Task for Candidate:** Automate Recruitment Workflow with CRUD Operations  
**Objective:** Automate the workflow for adding, editing, verifying, and deleting a job candidate for the position of "QA Automation Engineer (Mid-Level)" using the OrangeHRM Demo website.

Website Details:  
Website:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Credentials:  
Username: Admin  
Password: admin123

## Steps to Automate:

1. Login to the OrangeHRM system:

- Navigate to the login page and enter the provided credentials.
- Verify that login is successful by checking that the user is redirected to the dashboard.

2. Create (Add a New Candidate):

- Navigate to the Recruitment module from the left-side menu.
- Click on the "Add" button.
- Fill out the candidate details:
  - First Name: John
  - Last Name: Doe
  - Email: johndoe@example.com
  - Contact Number: 1234567890
  - Job Vacancy: QA Automation Engineer Mid-Level
  - Resume: Add a short note like "Experienced in Cypress automation."
- Save the candidate.
- Verify that the candidate is successfully added by checking the candidates list for "John Doe."

3. Read (Verify Candidate Details):

- Search for the candidate "John Doe" in the candidates list.
- Verify that the candidate's details (e.g., name, job title, and email) are displayed correctly.

4. Update (Edit Candidate Details):

- Select the candidate "John Doe" from the candidates list.
- Click the Edit button to modify the candidate's details.
- Update the following details:
  - Change the Last Name to "Smith."
  - Update the Contact Number to "9876543210."
- Save the changes.
- Verify that the changes are reflected in the candidates list.

5. Delete (Remove the Candidate):

- Search for the updated candidate "John Smith."
- Select the candidate and click the Delete button.
- Confirm the deletion in the confirmation popup.
- Verify that the candidate is no longer listed in the candidates table.

## Expected Deliverables:

- A Cypress test script (.js or .ts) that automates all the above steps.  
  &nbsp;&nbsp;&nbsp;&nbsp;OR  
  A Selenium test script (.js or .ts) that automates all the above steps.
- Include meaningful assertions at every step to validate:
  - Successful login.
  - Candidate addition, editing, and deletion.
  - Correct display of data in the candidates list.
