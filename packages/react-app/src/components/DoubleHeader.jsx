import { createStyles, Image, Container, Title, Button, Group, Text, List, ThemeIcon } from "@mantine/core";
// import { IconCheck } from '@tabler/icons';
import img2 from "../images/img2.png";
import img1 from "../images/img1.png";
import { Link } from "react-router-dom";

const useStyles = createStyles(theme => ({
  hero: { backgroundColor: "#56AEFF", height: "800px" },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },
  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  img2: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
      height: "1500px",
    },
  },
  img1: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export default function DoubleHeader() {
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Image src={img1} className={classes.img1} />
            <Text className={classes.description} size="xl" mt="xl">
              A decentralized marketplace for web3 educators to learn,earn and teach.
            </Text>

            <Group mt={30}>
              <Link to="/chooseHub">
                <Button radius="xl" size="md" className={classes.control}>
                  Get started
                </Button>
              </Link>
            </Group>
          </div>
          <Image src={img2} className={classes.img2} />
        </div>
      </Container>
    </div>
  );
}
