package it.exams.viaggi.presentation.dto;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import java.io.IOException;

public class TravelDTO {

    private long id;
    private String destination;

    @JsonDeserialize(using = CustomDateDeserializer.class)
    private Date dateStart;

    @JsonDeserialize(using = CustomDateDeserializer.class)
    private Date dateReturn;

    private String meansTransport;
    private String departureCity;

    private double price;
    public byte[] imageTravel;


    private boolean isDeleted;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Date getDateStart() {
        return dateStart;
    }

    public void setDateStart(Date dateStart) {
        this.dateStart = dateStart;
    }

    public Date getDateReturn() {
        return dateReturn;
    }

    public void setDateReturn(Date dateReturn) {
        this.dateReturn = dateReturn;
    }

    public String getMeansTransport() {
        return meansTransport;
    }

    public void setMeansTransport(String meansTransport) {
        this.meansTransport = meansTransport;
    }

    public byte[] getImageTravel() {
        return imageTravel;
    }

    public void setImageTravel(byte[] imageTravel) {
        this.imageTravel = imageTravel;
    }

    public String getDepartureCity() {
        return departureCity;
    }

    public void setDepartureCity(String departureCity) {
        this.departureCity = departureCity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public static class CustomDateDeserializer extends JsonDeserializer<Date> {
        private static final SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd");
        private static final SimpleDateFormat dateFormat2 = new SimpleDateFormat("yyyy-MM-d");

        @Override
        public Date deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
            String dateAsString = jsonParser.getText();

            try {
                return dateFormat1.parse(dateAsString);
            } catch (ParseException e1) {
                try {
                    return dateFormat2.parse(dateAsString);
                } catch (ParseException e2) {
                    throw new RuntimeException(e2);
                }
            }
        }
    }

}

