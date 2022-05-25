export default class Country {
  constructor({
    name,
    cca3Code,
    capitals,
    continents,
    languages,
    latitude,
    longitude,
    borders,
    area,
    map,
    population,
    flag,
  }) {
    this.name = name;
    this.cca3 = cca3Code;
    this.capitals = capitals;
    this.continents = continents;
    this.languages = languages;
    this.latitude = latitude;
    this.longitude = longitude;
    this.borderCounties = borders;
    this.area = area;
    this.map = map;
    this.population = population;
    this.flagImage = flag;
  }
}