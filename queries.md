# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

```sql
SELECT p.productName, c.categoryName, c.categoryId
FROM [Products] as p
JOIN Categories as c
ON c.categoryId = p.categoryId
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

```sql
SELECT * from Orders
JOIN Shippers
ON Orders.ShipperID = Shippers.ShipperID
ORDER BY Orders.OrderDate < '1997-01-09' DESC
```


### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```
SELECT OrderDetails.ProductID, Products.ProductName, OrderDetails.Quantity, OrderDetails.OrderID FROM [OrderDetails]
JOIN Products
ON OrderDetails.ProductID = Products.ProductID
WHERE OrderDetails.OrderId = 10251
ORDER BY Products.ProductName
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```sql
SELECT Orders.OrderID, Customers.CustomerName, Employees.LastName FROM [Orders]
JOIN Customers
ON Orders.CustomerID = Customers.CustomerId
JOIN Employees
ON Orders.EmployeeID = Employees.EmployeeId
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

```sql
SELECT DISTINCT Products.categoryID, 
COUNT(Products.categoryID) as Count, categories.CategoryName
FROM Products
JOIN Categories
ON Products.categoryId = categories.categoryId
GROUP BY Products.categoryId;
```


### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

```sql
SELECT DISTINCT OrderID,  SUM(Quantity) as ItemCount FROM [OrderDetails]
GROUP BY OrderID
```






