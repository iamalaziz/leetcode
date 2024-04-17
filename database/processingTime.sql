SELECT a.machine_id, AVG(ROUND((b.timestamp - a.timestamp), 3)) AS processing_time FROM Activity a
JOIN Activity b ON a.process_id = b.process_id AND a.machine_id = b.machine_id
WHERE a.activity_type = 'start' AND b.activity_type = 'end'
GROUP BY machine_id