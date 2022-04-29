package com.filipefonseca.endpoints;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "cars")
public class Cars {
    private List<Car> cars = new ArrayList<>();

    // Car
    @RequestMapping(
            method = RequestMethod.GET
    )
    public List<Car> findCars() {
        return this.cars;
    }

    @GetMapping(path = "{id}")
    public Car findById(
            @PathVariable final String id) {
        final var car =  this.cars.stream().filter(item -> id.equals(item.getId())).findFirst().orElse(null);
        if (car == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            return car;
        }
    }

    @PostMapping
    public Car createCar(
            @RequestBody
            Car car) {
        car.setId(UUID.randomUUID().toString());
        this.cars.add(car);
        return car;
    }

    @DeleteMapping(path = "{id}")
    public void deleteCar(
            @PathVariable
            String id) {
        this.cars = this.cars.stream().filter(item -> !id.equals(item.getId())).toList();
    }
}
