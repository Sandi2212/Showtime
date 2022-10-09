import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Stack,Col } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor:'white',
    height:'800px',
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    title: 'No annoying focus ring',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

export default function Web3page() {
    console.log('in web3page')
  const { classes } = useStyles();

  const items = features?.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        {/* <feature.icon size={26} stroke={1.5} /> */}
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Choose Your Hub
          </Title>
        </Col>
        <Col span={12} md={7}>
          <Stack cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </Stack>
        </Col>
      </Grid>
    </div>
  );
}