/*1*/
SELECT 
	*
FROM
	students
WHERE
	students.age = 19;
/*2*/
SELECT 
	*
FROM 
	students
WHERE 
	students.group_id = 1;
/*3*/
SELECT
	students.name,
    students.surname,
    students_group.id AS Group_Number,
    faculty.name AS Faculty_Name
FROM
	students
LEFT JOIN students_group ON students.group_id = students_group.id
LEFT JOIN faculty ON students_group.faculty_id = faculty.id
WHERE
	faculty.name = 'ICT';
/*4*/
SELECT
	students.name,
    students.surname,
    students_group.id AS Group_Number,
    faculty.name AS Faculty_Name
FROM
	students
LEFT JOIN students_group ON students.group_id = students_group.id
LEFT JOIN faculty ON students_group.faculty_id = faculty.id
WHERE
	students.name = 'st1';