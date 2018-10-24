import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionLogin from "./Sections/SectionLogin.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
import {Animated} from "react-animated-css";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Mykonos Pearls"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                  <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        Mykonos Pearls 
</Animated>
                  </h1>
                  <h3 className={classes.subtitle}>
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
        A Test App by thanos 
</Animated>
                  </h3>
                  
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionCarousel />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
