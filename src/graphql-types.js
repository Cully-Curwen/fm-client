import gql from 'graphql-tag';

// Querys
export const CUSTOMER_DATA_QUERY = gql`
  query {
    customerData {
      id
      email
      firstName
      lastName
      shoppingCarts {
        market {
          id
          name
        }
        items {
          traderCardId
          itemId
          name
          description
          price
          quantity
        }
      }
    }
  }
`;

export const MARKET_ADMIN_DATA_QUERY = gql`
  query {
    administeredMarkets {
      id
      admins
      name
      blurb
      address
      geoLocation {
        coordinates
      }
      directions
      imgUrl
      openHours {
        openTime
        closeTime
        tradingDay
      }
    }
  }
`;

export const TRADER_ADMIN_DATA_QUERY = gql`
  query {
    administeredTraders {
      id
      admins
      market {
        id
      }
      name
      blurb
      imgUrl
      links {
        website
      }
      produceTags
      inventory {
        id
        name
        description
        stock
        price
      }
    }
  }
`;

export const MARKET_LIST_QUERY = gql`
  query { 
    marketsList {
      id
      name
      blurb
      address
      geoLocation {
        coordinates
      }
      directions
      imgUrl
      openHours {
        openTime
        closeTime
        tradingDay
      }
    }
  }
`;

export const MARKET_DETAILS_QUERY = gql`
  query marketDetails($marketId: ID!) {
    marketDetails(marketId: $marketId) {
      id
      admins
      name
      blurb
      address
      geoLocation {
        coordinates
      }
      directions
      imgUrl
      openHours {
        openTime
        closeTime
        tradingDay
      }
      traders {
        id
        admins
        name
        blurb
        imgUrl
        links {
          website
        }
        produceTags
      }
    }
  }
`;

export const TRADER_CARD_DETAILS_QUERY = gql`
  query traderCardDetails($traderCardId: ID!) {
    traderCardDetails(traderCardId: $traderCardId) {
      id
      admins
      market {
        id
      }
      name
      blurb
      imgUrl
      links {
        website
      }
      produceTags
      inventory {
        id
        name
        description
        stock
        price
      }
    }
  }
`;

export const MARKET_NAME_QUERY = gql`
  query marketDetails($marketId: ID!) {
    marketDetails(marketId: $marketId) {
      id
      name
    }
  }
`;

export const TRADER_MARKET_NAME_QUERY = gql`
  query traderCardDetails($traderCardId: ID!) {
    traderCardDetails(traderCardId: $traderCardId) {
      id
      market {
        id
        name
      }
    }
  }
`;

// Mutations
export const CUSTOMER_REGISTER_MUTATION = gql`
  mutation customerRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
  ) {
    customerRegister(
      email: $email, 
      firstName: $firstName, 
      lastName: $lastName, 
      password: $password
    ) {
      token
      customer {
        id
        email
        firstName
        lastName
        shoppingCarts {
          market {
            id
            name
          }
          items {
            traderCardId
            itemId
            name
            description
            price
            quantity
          }
        }
      }
    }
  }
`;

export const CUSTOMER_LOGIN_MUTATION = gql`
  mutation customerLogin($email: String!, $password: String!) {
    customerLogin(email: $email, password: $password) {
      token
      customer {
        id
        email
        firstName
        lastName
        shoppingCarts {
          market {
            id
            name
          }
          items {
            traderCardId
            itemId
            name
            description
            price
            quantity
          }
        }
      }
    }
  }
`;

export const CUSTOMER_UPDATE_MUTATION = gql`
  mutation customerUpdate(
    $email: String, 
    $firstName: String, 
    $lastName: String, 
    $password: String!, 
    $newPassword: String
  ) {
    customerUpdate(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      newPassword: $newPassword,
    ) {
      id
      email
      firstName
      lastName
      shoppingCarts {
        market {
          id
          name
        }
        items {
          traderCardId
          itemId
          name
          description
          price
          quantity
        }
      }
    }
  }
`;

export const MARKET_ADMIN_REGISTER_MUTATION = gql`
  mutation marketAdminRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
  ) {
    marketAdminRegister(
      email: $email, 
      firstName: $firstName, 
      lastName: $lastName, 
      password: $password
    ) {
      token
      marketAdmin {
        id
        email
        firstName
        lastName
      }
      markets {
        id
        admins
        name
        blurb
        address
        geoLocation {
          coordinates
        }
        directions
        imgUrl
        openHours {
          openTime
          closeTime
          tradingDay
        }
        traders {
          id
          name
          blurb
        }
      }
    }
  }
`;

export const MARKET_ADMIN_LOGIN_MUTATION = gql`
  mutation marketAdminLogin( $email: String!, $password: String! ) {
    marketAdminLogin(email: $email, password: $password) {
      token
      marketAdmin {
        id
        email
        firstName
        lastName
      }
      markets {
        id
        admins
        name
        blurb
        address
        geoLocation {
          coordinates
        }
        directions
        imgUrl
        openHours {
          openTime
          closeTime
          tradingDay
        }
        traders {
          id
          name
          blurb
        }
      }
    }
  }
`;

export const MARKET_ADMIN_UPDATE_MUTATION = gql`
  mutation marketAdminUpdate(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!,
    $newPassword: String!,
  ) {
    marketAdminUpdate(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      newPassword: $newPassword,
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const TRADER_ADMIN_REGISTER_MUTATION = gql`
  mutation traderAdminRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
  ) {
    traderAdminRegister(
      email: $email, 
      firstName: $firstName, 
      lastName: $lastName, 
      password: $password
    ) {
      token
      traderAdmin {
        id
        email
        firstName
        lastName
      }
      traderCards {
        id
        admins
        name
        blurb
        imgUrl
        links {
          website
        }
        produceTags
        inventory {
          id
          name
          description
          stock
          price
        }
      }
    }
  }
`;

export const TRADER_ADMIN_LOGIN_MUTATION = gql`
  mutation traderAdminLogin($email: String!, $password: String!) {
    traderAdminLogin(email: $email, password: $password) {
      token
      traderAdmin {
        id
        email
        firstName
        lastName
      }
      traderCards {
        id
        admins
        name
        blurb
        imgUrl
        links {
          website
        }
        produceTags
        inventory {
          id
          name
          description
          stock
          price
        }
      }
    }
  }
`;

export const TRADER_ADMIN_UPDATE_MUTATION = gql`
  mutation traderAdminUpdate(
    $email: String, 
    $firstName: String, 
    $lastName: String, 
    $password: String!, 
    $newPassword: String
  ) {
    traderAdminUpdate(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      newPassword: $newPassword,
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const MARKET_CREATE_MUTATION = gql`
  mutation marketCreate(
    $name: String!, 
    $blurb: String!, 
    $address: String, 
    $geoLocation: GeoPointInput!, 
    $directions: String,
    $imgUrl: String,
    $openHours: OpenHoursInput!,
  ) {
    marketCreate(
      name: $name,
      blurb: $blurb,
      address: $address,
      geoLocation: $geoLocation,
      directions: $directions,
      imgUrl: $imgUrl,
      openHours: $openHours,
    ) {
      id
      admins
      name
      blurb
      address
      geoLocation {
        coordinates
      }
      directions
      imgUrl
      openHours {
        openTime
        closeTime
        tradingDay
      }
      traders {
        id
        admins
        name
        blurb
        imgUrl
        links {
          website
        }
        produceTags
      }
    }
  }
`;

export const MARKET_UPDATE_MUTATION = gql`
  mutation marketUpdate(
    $id: ID!,
    $name: String, 
    $blurb: String, 
    $address: String, 
    $geoLocation: GeoPointInput, 
    $directions: String,
    $imgUrl: String,
    $openHours: OpenHoursInput,
  ) {
    marketUpdate(
      id: $id,
      name: $name,
      blurb: $blurb,
      address: $address,
      geoLocation: $geoLocation,
      directions: $directions,
      imgUrl: $imgUrl,
      openHours: $openHours,
    ) {
      id
      admins
      name
      blurb
      address
      geoLocation {
        coordinates
      }
      directions
      imgUrl
      openHours {
        openTime
        closeTime
        tradingDay
      }
      traders {
        id
        admins
        name
        blurb
        imgUrl
        links {
          website
        }
        produceTags
      }
    }
  }
`;

export const TRADER_CARD_CREATE_MUTATION = gql`
  mutation traderCardCreate(
    $name: String!,
    $blurb: String!,
    $imgUrl: String,
    $links: UrlLinksInput,
    $produceTags: [String!]!,
  ) {
    traderCardCreate(
      name: $name,
      blurb: $blurb,
      imgUrl: $imgUrl,
      links: $links,
      produceTags: $produceTags,
    ) {
      id
      admins
      name
      blurb
      imgUrl
      links {
        website
      }
      produceTags
      inventory {
        id
        name
        description
        stock
        price
      }
    }
  }
`;

export const TRADER_CARD_UPDATE_MUTATION = gql`
  mutation traderCardUpdate(
    $id: ID!,
    $name: String!,
    $blurb: String!,
    $imgUrl: String,
    $links: UrlLinksInput,
    $produceTags: [String!]!,
  ) {
    traderCardUpdate(
      id: $id,
      name: $name,
      blurb: $blurb,
      imgUrl: $imgUrl,
      links: $links,
      produceTags: $produceTags,
    ) {
      id
      admins
      name
      blurb
      imgUrl
      links {
        website
      }
      produceTags
      inventory {
        id
        name
        description
        stock
        price
      }
    }
  }
`;