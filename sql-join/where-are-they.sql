select "a"."line1" as addresses,
        "a"."district",
        "cty"."name" as cities,
        "c"."name" as countries
        from "addresses" as "a"
        join "cities" as "cty" using ("cityId")
        join "countries" as "c" using ("countryId");
