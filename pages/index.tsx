import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';

const Home: NextPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            LearnToCode
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Learning Platform</Navbar.Link>
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button> 
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Bạn muốn chọn vào</Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>nhóm nào khác?</Text>
          </Col>
        </Grid>
      </Grid.Container>

      {/* 3 Displaying Product Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={3}>
          <InfoCard
            label="Nhóm 1"
            title="Topic A"
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="4"
          />
        </Grid>
        <Grid xs={12} sm={3}>
          <InfoCard
            label="Nhóm 2"
            title="Topic B"
            imageURL="https://littlevisuals.co/images/sunset.jpg"
            studentCount="3"
          />
        </Grid>
        <Grid xs={12} sm={3}>
          <InfoCard
            label="Nhóm 3"
            title="Topic C"
            imageURL="https://littlevisuals.co/images/tail.jpg"
            studentCount="5"
          />
        </Grid>
        <Grid xs={12} sm={3}>
          <InfoCard
            label="Nhóm 4"
            title="Topic D"
            imageURL="https://littlevisuals.co/images/steam.jpg"
            studentCount="5"
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Home
