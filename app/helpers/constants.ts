import type { SampleTableNamesType } from './utils';

const QUERY_1 = {
  name: 'Employee Photo Index Update',
  query: `CREATE TABLE dbo.EmployeePhoto (
  EmployeeId INT NOT NULL PRIMARY KEY, 
  Photo VARBINARY(MAX) FILESTREAM NULL, 
  MyRowGuidColumn UNIQUEIDENTIFIER NOT NULL ROWGUIDCOL UNIQUE DEFAULT NEWID()
);
GO 
/*
  text_of_comment
  /* nested comment */
*/ -- line comment
CREATE NONCLUSTERED INDEX IX_WorkOrder_ProductID ON Production.WorkOrder(ProductID) WITH (
  FILLFACTOR = 80, PAD_INDEX = ON, DROP_EXISTING = ON
);
GO WHILE (
  SELECT 
    AVG(ListPrice) 
  FROM 
    Production.Product
) < $300 BEGIN 
UPDATE 
  Production.Product 
SET 
  ListPrice = ListPrice * 2 
SELECT 
  MAX(ListPrice) 
FROM 
  Production.Product IF (
    SELECT 
      MAX(ListPrice) 
    FROM 
      Production.Product
  ) > $500 BREAK ELSE CONTINUE END PRINT 'Too much for the market to bear';
MERGE INTO Sales.SalesReason AS [Target] USING (
  VALUES 
    ('Recommendation', 'Other'), 
    ('Review', 'Marketing'), 
    ('Internet', 'Promotion')
) AS [Source] ([NewName], NewReasonType) ON [Target].[Name] = [Source].[NewName] WHEN MATCHED THEN 
UPDATE 
SET 
  ReasonType = [Source].NewReasonType WHEN NOT MATCHED BY TARGET THEN INSERT ([Name], ReasonType) 
VALUES 
  ([NewName], NewReasonType) OUTPUT $action INTO @SummaryOfChanges;
SELECT 
  ProductID, 
  OrderQty, 
  SUM(LineTotal) AS Total 
FROM 
  Sales.SalesOrderDetail 
WHERE 
  UnitPrice < $5.00 
GROUP BY 
  ProductID, 
  OrderQty 
ORDER BY 
  ProductID, 
  OrderQty OPTION (HASH GROUP, FAST 10);
  
  `
};

const QUERY_2 = {
  name: 'Recursive Employee Manager Hierarchy',
  query: `WITH RECURSIVE EmployeeHierarchy AS (
  SELECT 
    id, 
    name, 
    manager_id, 
    0 AS level 
  FROM 
    employees 
  WHERE 
    manager_id IS NULL 
  UNION ALL 
  SELECT 
    e.id, 
    e.name, 
    e.manager_id, 
    eh.level + 1 
  FROM 
    employees e 
    JOIN EmployeeHierarchy eh ON e.manager_id = eh.id
) 
SELECT 
  id, 
  name, 
  manager_id, 
  level 
FROM 
  EmployeeHierarchy;
  `
};

const QUERY_3 = {
  name: 'Employee Salary Rank By Department',
  query: `SELECT 
  id, 
  name, 
  department, 
  salary, 
  RANK() OVER (
    PARTITION BY department 
    ORDER BY 
      salary DESC
  ) AS salary_rank 
FROM 
  employees;

`
};

const QUERY_4 = {
  name: 'High volume customers last month',
  query: `SELECT 
  customer_id 
FROM 
  (
    SELECT 
      customer_id, 
      COUNT(*) AS num_orders 
    FROM 
      orders 
    WHERE 
      order_date >= DATE_SUB(
        CURRENT_DATE(), 
        INTERVAL 1 MONTH
      ) 
    GROUP BY 
      customer_id
  ) AS order_counts 
WHERE 
  num_orders > 3;
`
};

export const DEFAULT_QUERY = (type: SampleTableNamesType) => {
  return `SELECT * FROM ${type}`;
};

export const SAVED_QUERIES = [QUERY_1, QUERY_2, QUERY_3, QUERY_4];
export const SAMPLE_DATA_URL = (type: SampleTableNamesType) => {
  return `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${type}.csv`;
};
export const SAMPLE_TABLE_NAMES = [
  'categories',
  'customers',
  'employee_territories',
  'employees',
  'order_details',
  'orders',
  'products',
  'regions',
  'shippers',
  'suppliers',
  'territories'
] as const;
