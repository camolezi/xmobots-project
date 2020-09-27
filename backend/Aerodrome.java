package backend;

import java.time.LocalDateTime;
import java.util.List;

public class Aerodrome {

    private int id;
    private String name;
    private String city;
    private LocalDateTime createdAt;
    private String description;
    private List<Runway> runways;

    public Aerodrome(int id, String name, String city, LocalDateTime createdAt, String description,
            List<Runway> runways) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.createdAt = createdAt;
        this.description = description;
        this.runways = runways;
    }

    public int getID() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCity() {
        return city;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public String getDescription() {
        return description;
    }

    public List<Runway> getRunways() {
        return runways;
    }
}
