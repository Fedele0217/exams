package it.exams.viaggi.presentation.controllers;


import it.exams.viaggi.persistence.entities.Booking;
import it.exams.viaggi.persistence.entities.Travel;
import it.exams.viaggi.persistence.entities.User;
import it.exams.viaggi.presentation.dto.BookingDTO;
import it.exams.viaggi.presentation.dto.TravelDTO;
import it.exams.viaggi.presentation.dto.UserDTO;
import it.exams.viaggi.presentation.services.BookingService;
import it.exams.viaggi.presentation.services.TravelService;
import it.exams.viaggi.presentation.services.UserService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:3000")

public class BookingController {


    @Autowired
    private BookingService bookingService;

    @Autowired
    private TravelService travelService;

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;


    private BookingDTO convertToDto(Booking booking){
        return modelMapper.map(booking, BookingDTO.class);
    }
    private Booking convertToEntity(BookingDTO dto){
        Booking booking = modelMapper.map(dto,Booking.class);
        Travel bookingTravel= travelService.getById(dto.getIdTravel());
        User bookingUser = userService.getById(dto.getIdUser());

        booking.setUser(bookingUser);
        booking.setTravel(bookingTravel);
        return booking;
    }

    private UserDTO convertToUserDTO(User user){
        return modelMapper.map(user,UserDTO.class);
    }

    private TravelDTO convertToTravelDto(Travel travel ){
        return modelMapper.map(travel,TravelDTO.class);
    }
    @GetMapping
    public List<BookingDTO> getBook(){
        return bookingService.getAll()
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    @GetMapping("/{id}")
    public BookingDTO getBookingById(@PathVariable long id) {
        return convertToDto(bookingService.getById(id));
    }

    @PostMapping
    public BookingDTO createBooking(@RequestBody BookingDTO newBooking){
        Booking booking = convertToEntity(newBooking);
        booking = bookingService.create(booking);
        return  convertToDto(booking);
    }

    @PutMapping("/{id}")
    public  BookingDTO updateBooking(@PathVariable long id, @RequestBody BookingDTO updateBooking ){
        Booking booking = convertToEntity(updateBooking);
        booking = bookingService.update(id,booking);
        return  convertToDto(booking);
    }

    @DeleteMapping("/{id}")
    public BookingDTO deleteBooking (@PathVariable long id){
        return convertToDto(bookingService.delete(id));
    }

    @GetMapping("/{id}/user")
    public UserDTO getUser(@PathVariable long id){
        Booking booking = bookingService.getById(id);
        return convertToUserDTO(booking.getUser());
    }

    @GetMapping("/{id}/travel")
    public TravelDTO getTravel(@PathVariable long id) {
        Booking booking = bookingService.getById(id);
        return convertToTravelDto(booking.getTravel());
    }
}

