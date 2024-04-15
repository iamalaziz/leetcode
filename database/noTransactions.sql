SELECT v.customer_id, COUNT(v.customer_id) AS count_no_trans FROM Transactions t
RIGHT JOIN Visits v ON v.visit_id = t.visit_id
WHERE t.visit_id IS NULL
GROUP BY v.customer_id