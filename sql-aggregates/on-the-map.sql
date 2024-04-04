select count("cityId") as "numberOfCities", -- we are counting the number of cities
      "countries"."name" as "country" -- per country
      from "cities" -- grabbing our data from cities table
      join "countries" using ("countryId") -- adding countryId to cities table so we can get the number of cities per country
      group by "countryId"; -- grouping by each countryId
