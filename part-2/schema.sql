DROP DATABASE IF EXISTS hotel_db;
CREATE DATABASE hotel_db;

\c hotel_db

CREATE TABLE guest (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email TEXT
);

CREATE TABLE room (
  id SERIAL PRIMARY KEY,
  room_number VARCHAR(2),
  capacity INT
);

CREATE TABLE booking (
  id SERIAL PRIMARY KEY,
  room_id INT REFERENCES room(id),
  guest_id INT REFERENCES guest(id),
  check_in DATE,
  check_out DATE
);
