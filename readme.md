This is an easy localhost server to connect to a database and find the tables, then the rows

1. In the terminal do 'npm i' to make sure all the correct packges are properly installed

2. Create a .env file and add the following

DATABASE_PASSWORD =
DATABASE_URL =

3. Add your database password and URL to the above lines. Make sure to include your database password in the URL

4. To find the table names submit a get request to localhost:8080/table-names. The table names will appear in the console (You can submit this get request through postman)

5. To find the rows/column names, change the 'moods' const on line 43 to the name of the table you want to get the information from. The information will appear in the console

When you start the server, the console log should say 'Connected to DB'. If it doesn't, please check that you have input the database url into your env file correctly
