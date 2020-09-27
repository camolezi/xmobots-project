--DB SQL TABLE SCHEMA
--This is for PostgreSQL

CREATE TABLE aerodromes(
    id SERIAL PRIMARY KEY, --auto increment key type
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    description TEXT 
);

CREATE TABLE runways(
    aerodrome INTEGER NOT NULL,
    designation VARCHAR(5) NOT NULL,
    width INTEGER NOT NULL,
    length INTEGER NOT NULL,

    PRIMARY KEY (aerodrome,designation),
    FOREIGN KEY (aerodrome) REFERENCES aerodromes(id) ON DELETE CASCADE
);


