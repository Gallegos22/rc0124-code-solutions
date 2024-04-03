update "actors"
set "firstName" = 'Baby',
"lastName" = 'Yoda'
where "actorId" = 15;

select "actorId",
"firstName",
"lastName"
from "actors";
