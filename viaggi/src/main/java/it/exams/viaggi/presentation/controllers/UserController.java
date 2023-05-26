package it.exams.viaggi.presentation.controllers;

import it.exams.viaggi.persistence.entities.Booking;
import it.exams.viaggi.persistence.entities.User;
import it.exams.viaggi.presentation.dto.BookingDTO;
import it.exams.viaggi.presentation.dto.UserDTO;
import it.exams.viaggi.presentation.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    private UserDTO convertToDto(User user) {
        return modelMapper.map(user, UserDTO.class);
    }

    private User convertToEntity(UserDTO dto){
        return modelMapper.map(dto, User.class);

    }

    private BookingDTO convertToBookingDto(Booking booking ){
        return modelMapper.map(booking, BookingDTO.class);
    }

    @GetMapping
    public List<UserDTO> getUsers() {
        return userService.getAll()
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable long id) {
        return convertToDto(userService.getById(id));
    }

    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO newUser){
        User user = convertToEntity(newUser);
        user = userService.create(user);
        return  convertToDto(user);
    }

    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable long id, @RequestBody UserDTO updateUser){
        User user = convertToEntity(updateUser);
        user = userService.update(id,user);
        return convertToDto(user);
    }

    @DeleteMapping("/{id}")
    public UserDTO deleteUser (@PathVariable long id) {
        return  convertToDto(userService.delete(id));
    }

    @GetMapping("/{id}/booking")
    public List<BookingDTO> getUsers(@PathVariable long id){
        User users = userService.getById(id);
        return users.getBookings()
                .stream()
                .map(this::convertToBookingDto)
                .toList();
    }
}
