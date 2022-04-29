package com.filipefonseca.endpoints;

import java.util.Objects;

public class Car {
    private String id;
    private String model;
    private String color;

    public Car(){}

    public String getId() {
        return id;
    }

    public Car setId(String id) {
        this.id = id;
        return this;
    }

    public String getModel() {
        final var car = new Car().setId("").setModel("");

        return model;
    }

    public Car setModel(String model) {
        this.model = model;
        return this;
    }

    public String getColor() {
        return color;
    }

    public Car setColor(String color) {
        this.color = color;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {return true;}
        if (o == null || getClass() != o.getClass()) {return false;}
        Car car = (Car) o;
        return Objects.equals(id, car.id) && Objects.equals(model, car.model) && Objects.equals(color, car.color);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, model, color);
    }
}
