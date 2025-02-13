import { TrackApi } from "./datasources/track-api";

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackApi;
  };
};
