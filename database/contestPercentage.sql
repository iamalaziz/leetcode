SELECT contest_id, 
ROUND(
    COUNT(DISTINCT user_id) / (SELECT COUNT(user_id) 
    FROM Users), 4) * 100 
AS percentage 
FROM Register
GROUP BY contest_id
ORDER  BY percentage DESC, contest_id
