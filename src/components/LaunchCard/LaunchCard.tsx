import { Link } from 'react-router-dom';
import { Clock, Location } from 'tabler-icons-react';
import { Card, Center, Group, Text } from '@mantine/core';
import dayjs from 'dayjs';
import noImagePlaceholder from 'assets/no-image-placeholder.png';
import { useStyles } from './styles';
import type { LaunchCardProps } from './types';

export function LaunchCard({
  image, title, rocketName, launchDate, launchSite, link,
}: LaunchCardProps) {
  const {
    classes, theme,
  } = useStyles();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component={Link}
      to={link}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${image || noImagePlaceholder})`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {rocketName}
            </Text>

            <Group spacing="lg">
              <Center>
                <Clock size={16} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {dayjs(launchDate).format('DD/MM/YYYY')}
                </Text>
              </Center>
              <Center>
                <Location size={16} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {launchSite}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
