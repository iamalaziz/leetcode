SELECT s.student_id, s.student_name, sb.subject_name, COUNT(e.student_id) AS attended_exams FROM Students s
CROSS JOIN Subjects sb
LEFT JOIN Examinations e ON e.student_id = s.student_id AND e.subject_name = sb.subject_name
GROUP BY sb.subject_name, s.student_id, s.student_name
ORDER BY s.student_id, sb.subject_name