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
VALUES  ('Ben', "Dover", 1, 0),
        ("Cody", "Markham", 2, 0),
        ("John", "Smith", 3, 0),
        ("Luke", "Bryan", 4, 1),
        ("Kurgan", "Slaughter", 4, 1),




