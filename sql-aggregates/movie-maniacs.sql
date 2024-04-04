select "firstName",
      "lastName",
      sum("p"."amount") as "totalPaid"
  from "customers"
  join "payments" as "p" using ("customerId")
  group by "customerId"
  order by "totalPaid" desc;
