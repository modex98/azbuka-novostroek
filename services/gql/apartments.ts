import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const GQL_FOR_DETAIL = `
id
number
price
price_area
final_price
final_price_area
area_total
count_rooms
is_studio
is_assignment
has_discounts
step_over_color
step_over_name
assignment_agreement
assignment_status
assignment_contact
assignment_phone
assignment_info
layout_url
sale_price
area_total
area_calculated
area_without_balconies
area_living
area_kitchen
count_loggias
count_balconies
area_loggias
area_balconies
is_grow_last_price
difference_last_price
created_at

apartmentPrices {
  id
  price
  difference
  created_at
}

assignmentPhotos {
  id
  url
}

entrance {
  name
}

floor {
  number
}

decors {
  id
  name
  full_price
  full_price_area
}

status {
  name
  color
  is_disabled
  is_free
  hide_price
}
`;

export function apartmentsData(options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
            query apartmentsData {
                apartmentsData {
                    count_rooms
                    min_price
                    max_price
                    min_area_total
                    max_area_total
                    decors
                    balcony_types
                    bathrooms
                }
            }
        `,
        null,
        options
    );
}

export function apartment(id, data = "number", options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
      query apartment($id: ID) {
        apartment(id: $id) {
          ${data}
        }
      }`,
        () => ({ id }),
        options
    );
}