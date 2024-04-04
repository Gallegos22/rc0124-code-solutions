update "films"
set "rating" = 'G'
where "rating" = 'NC-17';

select "rating"
from "films"
where "rating" = 'G';
