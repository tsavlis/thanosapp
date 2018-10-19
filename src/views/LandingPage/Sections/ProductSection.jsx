import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Home from "@material-ui/icons/Home";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk business</h2>
            <h5 className={classes.description}>
              By using this site you have unique privilages like promotional codes that you can redeem for a 20% discount of the original price.
              Also you can book a ride to your destination with our experienced and friendly drivers .
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Free Chat"
                description="With our app you can chat with the clients and direct communicate without any delay.Available on both Android and IOs"
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified payment"
                description="We ensure the enviroment for your deposition is safe and we also guarantee  a full recharge if for some reason there is any delay or problem with your reservation"
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Comfortable environment"
                description="Our villas have been reviwed as the best accomodation in Greece for the years 2014-2018,Feel free to read some of our reviews"
                icon={Home}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
