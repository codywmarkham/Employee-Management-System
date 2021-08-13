USE em_system_db;

INSERT INTO department (dept_name)
VALUES  ("Marketing"),
        ("General Management"),
        ("Operations"),
        ("Finance");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Reseacher", 50000, 1),
        ("GM", 250000 , 2),
        ("Intermediary", 35000 , 3),
        ("Analyst", 55000 , 4),
        ("Jr Analyst", 30000 , 4),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Ken", "Dover", 1, 1),
        ("Cody", "Markham", 2, 2),
        ("John", "Smith", 3, 3),
        ("Luke", "Bryan", 4, 4),
        ("Kurgan", "Slaughter", 4, 4),




