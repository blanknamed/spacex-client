import { api } from 'api';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export interface Capsule {
  __typename?: 'Capsule';
  dragon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  landLandings?: Maybe<Scalars['Float']>;
  lastUpdate?: Maybe<Scalars['String']>;
  launches: Array<Scalars['String']>;
  reuseCount: Scalars['Float'];
  serial?: Maybe<Scalars['String']>;
  status: CapsuleStatus;
  type: DragonTypeEnum;
  waterLandings: Scalars['Float'];
}

export interface CapsuleQuery {
  __typename?: 'CapsuleQuery';
  docs: Array<Maybe<Capsule>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export enum CapsuleStatus {
  Active = 'active',
  Destroyed = 'destroyed',
  Retired = 'retired',
  Unknown = 'unknown',
}

export interface CargoInfo {
  __typename?: 'CargoInfo';
  solarArray: Scalars['Float'];
  unpressurizedCargo: Scalars['Boolean'];
}

export interface CompanyInfo {
  __typename?: 'CompanyInfo';
  ceo: Scalars['String'];
  coo: Scalars['String'];
  cto: Scalars['String'];
  ctoPropulsion: Scalars['String'];
  employees: Scalars['Int'];
  founded: Scalars['Int'];
  founder: Scalars['String'];
  headquarters: Headquarters;
  id: Scalars['String'];
  launchSites: Scalars['Int'];
  links: InfoLinks;
  name: Scalars['String'];
  testSites: Scalars['Int'];
  valuation: Scalars['Float'];
  vehicles: Scalars['Int'];
}

export interface CompositeFairing {
  __typename?: 'CompositeFairing';
  diameter: SizeUnits;
  height: SizeUnits;
}

export interface Core {
  __typename?: 'Core';
  asdsAttempts: Scalars['Int'];
  asdsLandings: Scalars['Int'];
  block?: Maybe<Scalars['Int']>;
  lastUpdate?: Maybe<Scalars['String']>;
  launches: Array<Scalars['String']>;
  reuseCount: Scalars['Int'];
  rtlsAttempts: Scalars['Int'];
  rtlsLandings: Scalars['Int'];
  serial: Scalars['String'];
  status: CoreStatus;
}

export interface CoreQuery {
  __typename?: 'CoreQuery';
  docs?: Maybe<Array<Core>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export enum CoreStatus {
  Active = 'active',
  Expended = 'expended',
  Inactive = 'inactive',
  Lost = 'lost',
  Retired = 'retired',
  Unknown = 'unknown',
}

export interface Crew {
  __typename?: 'Crew';
  agency: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  launches: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  status: CrewStatus;
  wikipedia?: Maybe<Scalars['String']>;
}

export interface CrewQuery {
  __typename?: 'CrewQuery';
  docs: Array<Maybe<Crew>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export enum CrewStatus {
  Active = 'active',
  Inactive = 'inactive',
  Retired = 'retired',
  Unknown = 'unknown',
}

export enum DatePrecision {
  Day = 'day',
  Half = 'half',
  Hour = 'hour',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year',
}

export interface Dragon {
  __typename?: 'Dragon';
  active: Scalars['Boolean'];
  crewCapacity: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  diameter: SizeUnits;
  dryMassKg: Scalars['Float'];
  dryMassLb: Scalars['Float'];
  firstFlight: Scalars['String'];
  flickrImages: Array<Maybe<Scalars['String']>>;
  heatShield: HeatShield;
  heightWTrunk: SizeUnits;
  id: Scalars['String'];
  launchPayloadMass: MassUnits;
  launchPayloadVol: VolumeUnits;
  name: Scalars['String'];
  orbitDurationYr?: Maybe<Scalars['Float']>;
  returnPayloadMass: MassUnits;
  returnPayloadVol: VolumeUnits;
  sidewallAngleDeg?: Maybe<Scalars['Float']>;
  thrusters: Array<Thrusters>;
  trunk: TrunkInfo;
  type: Scalars['String'];
  wikipedia?: Maybe<Scalars['String']>;
}

export interface DragonPayload {
  __typename?: 'DragonPayload';
  capsule?: Maybe<Scalars['String']>;
  flightTimeSec?: Maybe<Scalars['Float']>;
  landLanding?: Maybe<Scalars['Boolean']>;
  manifest?: Maybe<Scalars['String']>;
  massReturnedKg?: Maybe<Scalars['Float']>;
  massReturnedLbs?: Maybe<Scalars['Float']>;
  waterLanding?: Maybe<Scalars['Boolean']>;
}

export interface DragonQuery {
  __typename?: 'DragonQuery';
  docs?: Maybe<Array<Dragon>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export enum DragonTypeEnum {
  CargoDragon = 'CargoDragon',
  CargoDragon2 = 'CargoDragon2',
  CrewDragon = 'CrewDragon',
}

export interface Engines {
  __typename?: 'Engines';
  engineLossMax: Scalars['Int'];
  isp: Isp;
  layout: Scalars['String'];
  number: Scalars['Int'];
  propellant1: Scalars['String'];
  propellant2: Scalars['String'];
  thrustSeaLevel?: Maybe<ThrustUnits>;
  thrustToWeight?: Maybe<Scalars['Float']>;
  thrustVacuum?: Maybe<ThrustUnits>;
  type: Scalars['String'];
  version: Scalars['String'];
}

export interface Failure {
  __typename?: 'Failure';
  altitude?: Maybe<Scalars['Int']>;
  reason: Scalars['String'];
  time?: Maybe<Scalars['Int']>;
}

export interface Fairings {
  __typename?: 'Fairings';
  recovered?: Maybe<Scalars['Boolean']>;
  recoveryAttempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  ships?: Maybe<Array<Scalars['String']>>;
}

export interface FlickrLinks {
  __typename?: 'FlickrLinks';
  original: Array<Scalars['String']>;
  small: Array<Scalars['String']>;
}

export interface Headquarters {
  __typename?: 'Headquarters';
  address: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
}

export interface HeatShield {
  __typename?: 'HeatShield';
  devPartner: Scalars['String'];
  material: Scalars['String'];
  sizeMeters: Scalars['Float'];
  tempDegrees: Scalars['Float'];
}

export interface Isp {
  __typename?: 'ISP';
  seaLevel: Scalars['Float'];
  vacuum: Scalars['Float'];
}

export interface InfoLinks {
  __typename?: 'InfoLinks';
  elonTwitter: Scalars['String'];
  flickr: Scalars['String'];
  twitter: Scalars['String'];
  website: Scalars['String'];
}

export interface LandPad {
  __typename?: 'LandPad';
  details: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['String'];
  landingAttempts: Scalars['Float'];
  landingSuccesses: Scalars['Float'];
  latitude: Scalars['Float'];
  launches: Array<Maybe<Scalars['String']>>;
  locality: Scalars['String'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
  region: Scalars['String'];
  status: LandPadStatus;
  type: LandPadType;
}

export enum LandPadStatus {
  Active = 'active',
  Inactive = 'inactive',
  Lost = 'lost',
  Retired = 'retired',
  UnderConstruction = 'under_construction',
  Unknown = 'unknown',
}

export enum LandPadType {
  Asds = 'ASDS',
  Rtls = 'RTLS',
}

export interface LandingLegs {
  __typename?: 'LandingLegs';
  material: Scalars['String'];
  number: Scalars['Int'];
}

export enum LandingType {
  Asds = 'ASDS',
  None = 'None',
  Ocean = 'Ocean',
  Rtls = 'RTLS',
}

export interface LandpadQuery {
  __typename?: 'LandpadQuery';
  docs: Array<Maybe<LandPad>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export interface Launch {
  __typename?: 'Launch';
  autoUpdate?: Maybe<Scalars['Boolean']>;
  capsules: Array<Maybe<Scalars['String']>>;
  cores: Array<Maybe<LaunchCore>>;
  crew: Array<Maybe<Scalars['String']>>;
  dateLocal?: Maybe<Scalars['String']>;
  datePrecision?: Maybe<DatePrecision>;
  dateUnix?: Maybe<Scalars['String']>;
  dateUtc?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  failures: Array<Maybe<Failure>>;
  fairings?: Maybe<Fairings>;
  flightNumber?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  launchpad?: Maybe<Scalars['String']>;
  links?: Maybe<LaunchLinks>;
  name?: Maybe<Scalars['String']>;
  net?: Maybe<Scalars['Boolean']>;
  payloads: Array<Maybe<Scalars['String']>>;
  rocket: Rocket;
  ships: Array<Maybe<Scalars['String']>>;
  staticFireDateUnix?: Maybe<Scalars['String']>;
  staticFireDateUtc?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  tbd?: Maybe<Scalars['Boolean']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  window?: Maybe<Scalars['Int']>;
}

export interface LaunchCore {
  __typename?: 'LaunchCore';
  /** use Core queries to get more info */
  core?: Maybe<Scalars['ID']>;
  flight?: Maybe<Scalars['Float']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  landingAttempt?: Maybe<Scalars['Boolean']>;
  landingSuccess?: Maybe<Scalars['Boolean']>;
  landingType?: Maybe<LandingType>;
  landpad?: Maybe<Scalars['ID']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
}

export interface LaunchLinks {
  __typename?: 'LaunchLinks';
  article?: Maybe<Scalars['String']>;
  flickr?: Maybe<FlickrLinks>;
  patch?: Maybe<PatchLinks>;
  presskit?: Maybe<Scalars['String']>;
  reddit?: Maybe<RedditLinks>;
  webcast?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  youtubeId?: Maybe<Scalars['String']>;
}

export interface LaunchPad {
  __typename?: 'LaunchPad';
  details: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['String'];
  latitude: Scalars['Float'];
  launchAttempts: Scalars['Float'];
  launchSuccesses: Scalars['Float'];
  launches: Array<Maybe<Scalars['String']>>;
  locality: Scalars['String'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
  region: Scalars['String'];
  rockets: Array<Maybe<Scalars['String']>>;
  status: LaunchPadStatus;
  timezone: Scalars['String'];
  wikipedia: Scalars['String'];
}

export interface LaunchPadQuery {
  __typename?: 'LaunchPadQuery';
  docs: Array<Maybe<LaunchPad>>;
}

export enum LaunchPadStatus {
  Active = 'active',
  Inactive = 'inactive',
  Lost = 'lost',
  Retired = 'retired',
  UnderConstruction = 'under_construction',
  Unknown = 'unknown',
}

export interface LaunchQuery {
  __typename?: 'LaunchQuery';
  docs?: Maybe<Array<Launch>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export interface MassUnits {
  __typename?: 'MassUnits';
  kg: Scalars['Float'];
  lb: Scalars['Float'];
}

export interface PatchLinks {
  __typename?: 'PatchLinks';
  large?: Maybe<Scalars['String']>;
  small?: Maybe<Scalars['String']>;
}

export interface Payload {
  __typename?: 'Payload';
  apoapsisKm?: Maybe<Scalars['Float']>;
  argOfPericenter?: Maybe<Scalars['Float']>;
  customers?: Maybe<Array<Scalars['String']>>;
  dragon: DragonPayload;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inclinationDeg?: Maybe<Scalars['Float']>;
  launch: Launch;
  lifespanYears?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  manufacturers?: Maybe<Array<Scalars['String']>>;
  massKg?: Maybe<Scalars['Float']>;
  massLbs?: Maybe<Scalars['Float']>;
  meanAnomaly?: Maybe<Scalars['Float']>;
  meanMotion?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  nationalities?: Maybe<Array<Scalars['String']>>;
  noradIds?: Maybe<Array<Scalars['Float']>>;
  orbit?: Maybe<Scalars['String']>;
  periapsisKm?: Maybe<Scalars['Float']>;
  periodMin?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  referenceSystem?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  reused: Scalars['Boolean'];
  semiMajorAxisKm?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
}

export interface PayloadQuery {
  __typename?: 'PayloadQuery';
  docs: Array<Maybe<Payload>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export interface PayloadWeights {
  __typename?: 'PayloadWeights';
  id: Scalars['String'];
  kg: Scalars['Int'];
  lb: Scalars['Int'];
  name: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  getAllCapsules: Array<Capsule>;
  getAllCores: Array<Core>;
  getAllCrew: Array<Crew>;
  getAllDragons: Array<Dragon>;
  getAllLandPads: Array<LandPad>;
  getAllLaunchPads: Array<LaunchPad>;
  getAllLaunches: Array<Launch>;
  getAllPayloads: Array<Payload>;
  getAllRockets: Array<Rocket>;
  getCapsuleById: Capsule;
  getCapsuleByQuery: CapsuleQuery;
  getCompanyInfo: CompanyInfo;
  getCoreById: Core;
  getCoreByQuery: CoreQuery;
  getCrewById: Crew;
  getCrewByQuery: CrewQuery;
  getDragonById: Dragon;
  getDragonByQuery: DragonQuery;
  getLandPadById: LandPad;
  getLandPadByQuery: LandpadQuery;
  getLatestLaunch: Launch;
  getLaunchById: Launch;
  getLaunchPadById: LaunchPad;
  getLaunchPadByQuery: LaunchPadQuery;
  getNextLaunch: Launch;
  getPaginatedLaunch: LaunchQuery;
  getPastLaunches: Array<Launch>;
  getPayloadById: Payload;
  getPayloadByQuery: PayloadQuery;
  getRoadsterInfo: Roadster;
  getRocketById: Rocket;
  getRocketByQuery: RocketQuery;
  getUpcomingLaunches: Array<Launch>;
}

export type QueryGetCapsuleByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetCapsuleByQueryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryGetCoreByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetCoreByQueryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryGetCrewByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetCrewByQueryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryGetDragonByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetDragonByQueryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryGetLandPadByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetLandPadByQueryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryGetLaunchByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetLaunchPadByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetLaunchPadByQueryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryGetPaginatedLaunchArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryGetPayloadByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetPayloadByQueryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryGetRocketByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetRocketByQueryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export interface RedditLinks {
  __typename?: 'RedditLinks';
  campaign?: Maybe<Scalars['String']>;
  launch?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  recovery?: Maybe<Scalars['String']>;
}

export interface Roadster {
  __typename?: 'Roadster';
  apoapsisAu: Scalars['Float'];
  details: Scalars['String'];
  earthDistanceKm: Scalars['Float'];
  earthDistanceMi: Scalars['Float'];
  eccentricity: Scalars['Float'];
  epochId?: Maybe<Scalars['Float']>;
  flickrImages: Array<Scalars['String']>;
  inclination: Scalars['Float'];
  launchDateUnix: Scalars['String'];
  launchDateUtc: Scalars['String'];
  launchMassKg: Scalars['Float'];
  launchMassLbs: Scalars['Float'];
  longitude: Scalars['Float'];
  marsDistanceKm: Scalars['Float'];
  marsDistanceMi: Scalars['Float'];
  name: Scalars['String'];
  noradId: Scalars['Float'];
  orbitType: Scalars['String'];
  periapsisArg: Scalars['Float'];
  periapsisAu: Scalars['Float'];
  periodDays: Scalars['Float'];
  semiMajorAxisAu: Scalars['Float'];
  speedKph: Scalars['Float'];
  video: Scalars['String'];
  wikipedia: Scalars['String'];
}

export interface Rocket {
  __typename?: 'Rocket';
  active: Scalars['Boolean'];
  booster?: Maybe<Scalars['Int']>;
  company: Scalars['String'];
  compositeFairing?: Maybe<CompositeFairing>;
  costPerLaunch: Scalars['Int'];
  country: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  diameter: SizeUnits;
  engines: Engines;
  firstFlight: Scalars['String'];
  firstStage: RocketStage;
  flickrImages: Array<Maybe<Scalars['String']>>;
  height: SizeUnits;
  id: Scalars['ID'];
  landingLegs: LandingLegs;
  mass: MassUnits;
  name: Scalars['String'];
  payloadWeights: Array<Maybe<PayloadWeights>>;
  secondStage: RocketStage;
  stages: Scalars['Int'];
  successRatePct: Scalars['Int'];
  type: Scalars['String'];
  wikipedia?: Maybe<Scalars['String']>;
}

export interface RocketQuery {
  __typename?: 'RocketQuery';
  docs: Array<Rocket>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export interface RocketStage {
  __typename?: 'RocketStage';
  burnTimeSec: Scalars['Float'];
  engines: Scalars['Float'];
  fuelAmountTons: Scalars['Float'];
  reusable: Scalars['Boolean'];
  thrustSeaLevel?: Maybe<ThrustUnits>;
  thrustVacuum?: Maybe<ThrustUnits>;
}

export interface SizeUnits {
  __typename?: 'SizeUnits';
  feet: Scalars['Float'];
  meters: Scalars['Float'];
}

export interface ThrustUnits {
  __typename?: 'ThrustUnits';
  kN: Scalars['Float'];
  lbf: Scalars['Float'];
}

export interface Thrusters {
  __typename?: 'Thrusters';
  amount: Scalars['Int'];
  fuel1: Scalars['String'];
  fuel2: Scalars['String'];
  isp: Scalars['Int'];
  pods: Scalars['Int'];
  thrust: ThrustUnits;
  type: Scalars['String'];
}

export interface TrunkInfo {
  __typename?: 'TrunkInfo';
  cargo?: Maybe<CargoInfo>;
  trunkVolume: VolumeUnits;
}

export interface VolumeUnits {
  __typename?: 'VolumeUnits';
  cubicFeet: Scalars['Float'];
  cubicMeters: Scalars['Float'];
}

export type GetAllLaunchesQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAllLaunchesQuery = { getAllLaunches: Array<{ __typename?: 'Launch', id: string, name?: string | null, launchpad?: string | null, dateUtc?: string | null, links?: { __typename?: 'LaunchLinks', patch?: { __typename?: 'PatchLinks', large?: string | null } | null } | null, rocket: { __typename?: 'Rocket', name: string } }> };

export type GetLaunchByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetLaunchByIdQuery = { getLaunchById: { __typename?: 'Launch', name?: string | null } };

export const GetAllLaunchesDocument = `
    query getAllLaunches {
  getAllLaunches {
    id
    name
    links {
      patch {
        large
      }
    }
    launchpad
    rocket {
      name
    }
    dateUtc
  }
}
    `;
export const GetLaunchByIdDocument = `
    query getLaunchById($id: String!) {
  getLaunchById(id: $id) {
    name
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllLaunches: build.query<GetAllLaunchesQuery, GetAllLaunchesQueryVariables | void>({
      query: (variables) => ({
        document: GetAllLaunchesDocument, variables,
      }),
    }),
    getLaunchById: build.query<GetLaunchByIdQuery, GetLaunchByIdQueryVariables>({
      query: (variables) => ({
        document: GetLaunchByIdDocument, variables,
      }),
    }),
  }),
});

export { injectedRtkApi as api };
export const {
  useGetAllLaunchesQuery,
  useLazyGetAllLaunchesQuery,
  useGetLaunchByIdQuery,
  useLazyGetLaunchByIdQuery,
} = injectedRtkApi;
