\c hotel_db

/*replace FULL/PATH/TO/guests.csv with actual full path to guests.csv*/
COPY guest (id, name, email) FROM 'FULL/PATH/TO/guests.csv' DELIMITER ',' CSV HEADER;

/*replace FULL/PATH/TO/rooms.csv with actual full path to rooms.csv*/
COPY room (id, room_number, capacity) FROM 'FULL/PATH/TO/rooms.csv' DELIMITER ',' CSV HEADER;

/*replace FULL/PATH/TO/bookings.csv with actual full path to bookings.csv*/
COPY booking (id, room_id, guest_id, check_in, check_out) FROM 'FULL/PATH/TO/bookings.csv' DELIMITER ',' CSV HEADER;
