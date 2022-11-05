import { Button, Card, Grid, Image, Text } from "@nextui-org/react";
import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <Grid.Container
        className={styles.background}
        justify="center"
        gap={2}
        alignItems="center"
        wrap="wrap"
        alignContent="center"
      >
        <Grid xs={12}>
          <Card variant="flat">
            <Card.Header className={styles.center}>
              <Text
                h1
                size={100}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  marginRight: 20,

                }}
                weight="bold"
              >
                Merin&apos;s
              </Text>
              <Text
                h1
                size={100}
                css={{
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
                blockquote
              >
                Tutoring
              </Text>
            </Card.Header>
          </Card>
        </Grid>
        <Grid >
          <Button shadow color="gradient" auto>
              Contact me
            </Button>
        </Grid>
        <Grid >
          <Button color="success" auto>
              Learn more
            </Button>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Banner;
