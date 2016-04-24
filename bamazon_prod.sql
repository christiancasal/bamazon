create table products(
  item_id int auto_increment primary key,
  product_name varchar(30) not null,
  dept_name varchar(30) not null,
  price decimal(9,2) not null,
  stock int not null
);

insert into products (product_name, dept_name, price, stock) values
  ('baseball_cards', 'antiques', 200.00, 5),
  ('game_boy_color', 'antiques', 50.00, 2),
  ('atari', 'antiques', 1.00, 200),
  ('batteries (AA)', 'antiques', 324.00, 500),
  ('mechanical_tie', 'sharper_image', 499.99, 1000),
  ('time_machine', 'sharper_image', 31234.00, 1),
  ('steven_tyler\'s_hair', 'sharper_image', 50.00, 1),
  ('anti-gravity thing-a-majig', 'sharper_image', 3.99, 12),
  ('potent_potables', 'its_late_dude', 75.99, 7),
  ('day_old_worms', 'its_late_dude', 0.07, 9);
