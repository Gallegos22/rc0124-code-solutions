insert into "actors" ("firstName","lastName")
values ('Mark','Hamill')
returning *;

select *
from "actors"
where "lastName" = 'Hamill';
