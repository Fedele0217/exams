package it.exams.viaggi.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TravelConfiguration {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}