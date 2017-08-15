\c hotel_db

UPDATE room SET available = false FROM booking WHERE booking.check_in <= CURRENT_DATE AND booking.check_out >= CURRENT_DATE AND booking.room_id = room.id;

UPDATE room SET available = true FROM booking WHERE booking.check_in <= CURRENT_DATE AND booking.check_out <= CURRENT_DATE AND booking.room_id = room.id;
