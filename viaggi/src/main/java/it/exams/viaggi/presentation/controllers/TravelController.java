package it.exams.viaggi.presentation.controllers;

import it.exams.viaggi.persistence.entities.Booking;
import it.exams.viaggi.persistence.entities.Travel;
import it.exams.viaggi.presentation.dto.BookingDTO;
import it.exams.viaggi.presentation.dto.TravelDTO;
import it.exams.viaggi.presentation.services.TravelService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/travels")
@CrossOrigin(origins = "http://localhost:3000")

public class TravelController {

    @Autowired
    private TravelService travelService;

    @Autowired
    private ModelMapper modelMapper;

    private TravelDTO convertToDto(Travel travel) {
        return modelMapper.map(travel, TravelDTO.class);
    }

    private BookingDTO convertToBookingDto(Booking booking) {

        return modelMapper.map(booking,BookingDTO.class);
    }

    private Travel convertToEntity(TravelDTO dto) {
        return modelMapper.map(dto,Travel.class);
    }
    @GetMapping
    public List<TravelDTO> getTravel() {
        return travelService.getAll()
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    @GetMapping("/{id}")
    public TravelDTO getTypeById(@PathVariable long id)

    {
        return convertToDto(travelService.getById(id)) ;
    }

    @PostMapping
    public TravelDTO createTravel(@RequestBody TravelDTO newTravel) {
        Travel travel = convertToEntity(newTravel);
        travel= travelService.create(travel);
        return convertToDto(travel);
    }

    @PutMapping("/{id}")
    public TravelDTO updateTravel(@PathVariable long id, @RequestBody TravelDTO updateTravel) {
        Travel travel = convertToEntity(updateTravel);
        travel = travelService.update(id, travel);
        return convertToDto(travel);
    }

    @DeleteMapping("/{id}")
    public TravelDTO deleteTravel(@PathVariable long id) {
        return convertToDto(travelService.delete(id)) ;
    }

    @GetMapping("/{id}/booking")
    public List<BookingDTO> getBooking(@PathVariable long id) {
        Travel travel = travelService.getById(id);
        return travel.getBookings()
                .stream()
                .map(this::convertToBookingDto)
                .toList();
    }

}
