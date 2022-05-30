import { Box, Grid, LoadingOverlay } from '@mantine/core';
import { useGetAllLaunchesQuery } from 'generated/graphql';
import { LaunchCard } from 'components/LaunchCard';
import { useStyles } from './styles';

export const Launches = () => {
  const { classes } = useStyles();

  const { data } = useGetAllLaunchesQuery();

  const launchesList = data?.getPaginatedLaunch.docs || [];

  return (
    <Box className={classes.container}>
      <LoadingOverlay
        visible={!launchesList.length}
        loaderProps={{
          size: 'sm',
          variant: 'bars',
        }}
        overlayOpacity={0.1}
        overlayColor="#c5c5c5"
      />
      <Grid gutter="lg">
        {launchesList.map((launch) => (
          <Grid.Col
            span={3}
            key={launch.id}
          >
            <LaunchCard
              link={launch.id}
              image={launch?.links?.patch?.large || ''}
              title={launch.name || ''}
              rocketName={launch.rocket.name}
              launchDate={launch.dateUtc || ''}
              launchSite={launch.launchpad.name || ''}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
