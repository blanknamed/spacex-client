import { Box, Grid, LoadingOverlay } from '@mantine/core';
import { useGetAllLaunchesQuery } from 'generated/graphql';
import { useStyles } from './styles';
import { LaunchCard } from '../../components/LaunchCard';

export const Launches = () => {
  const { data } = useGetAllLaunchesQuery();
  const reversedList = data?.getAllLaunches || [];
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <LoadingOverlay
        visible={!reversedList.length}
        loaderProps={{
          size: 'sm',
          variant: 'bars',
        }}
        overlayOpacity={0.1}
        overlayColor="#c5c5c5"
      />
      <Grid gutter="lg" grow>
        {reversedList.map((launch) => (
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
              launchSite={launch.launchpad || ''}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
