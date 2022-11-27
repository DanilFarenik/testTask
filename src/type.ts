export interface LocationRequest {
  message: string,
  timestamp: number,
  iss_position: {
    latitude: string,
    longitude: string
  }
}

export interface People {
  name: string,
  craft: string
}

export interface PeopleRequest {
  message: string,
  number: number,
  people: People[],
}
