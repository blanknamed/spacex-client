import { Center, Title } from '@mantine/core';
import { useGetAllLaunchesQuery } from '../../generated/graphql';

export const Home = () => {
  const { data } = useGetAllLaunchesQuery();

  return (
    <Center>
      <Title order={1}>Home </Title>
      <Title order={5}>{JSON.stringify(data)}</Title>

    </Center>
  );
};
