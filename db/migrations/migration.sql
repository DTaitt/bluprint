\connect bluprint_development

CREATE TABLE IF NOT EXISTS bootcamps (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  career_id INTEGER REFERENCES careers(id),
  price INTEGER,
  length INTEGER,
  location_id INTEGER REFERENCES locations(id)
);

CREATE TABLE IF NOT EXISTS careers (
  id BIGSERIAL PRIMARY KEY,
  field VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS locations (
  id BIGSERIAL PRIMARY KEY,
  city VARCHAR(255)
);

