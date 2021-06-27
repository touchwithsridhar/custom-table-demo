# custom-table-demo
Fetching the records from json file and display in a table
We can change the number of items per page 
Custom pagination with next and previous added
display of records from number to to number
This example is having 2 section -> section 1 display the selected item from the table --> section 2 displaying the records from json file.
Section 1  and section 2 are different components
When you select any checkbox from the table, the selected record details will be displayed in the first section with @Input Decorator and also it will display Refresh Table button
when you click on refresh Table , it will clear the selected checkbox item and reload the table -- > this was implemented with @Output  Decorator


Overall Implementation
1. Used Bootstrap table
2. Added bootstrap cdn's in the index.html file
3. Fetching records from json file, which is available  in assets folder
4. used model class for mapping the user object
5. user one service
6. used component interaction (@Input & @Output)
7. Custom Pagination
