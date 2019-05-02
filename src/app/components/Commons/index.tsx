import * as React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

// @ts-ignore
import styled from "styled-components";
import * as Icon from "react-feather";
import InputAdornment from "@material-ui/core/InputAdornment";

const Wrapstyle1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  border: 0.5px solid #bfbfbf;
  box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: white;
  margin: auto;
`;

const WrapstyleDone = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  border: 0.5px solid #bfbfbf;
  border-radius: 3px;
  background: transparent;
  margin: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 24px 0px 32px;
`;

const Linestyle = styled.div`
  border-top: 0.5px solid lightgrey;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1px;
  width: 100%;
`;

const Headerstyle = styled.div`
  color: #39302a;
  font-size: 27px;
  font-weight: 400;
  line-height: 90%;
  margin-top: 16px;
  margin-bottom: 24px;
  font-family: "roboto";
`;

const RHcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: nowrap;
  flex-grow: 1;
  font-family: "roboto";
`;

const H2 = styled.div`
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 24px;
  flex-grow: 8;
  font-family: "roboto";
`;

const Result = styled.div`
  font-size: 16px;
  color: #00ac3e;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const Button = styled.div`
  font-size: "18px";
  font-family: "Roboto";
  color: #008091;
  border: 2px solid #008091;
  border-radius: 6px;
  padding: 16px 24px;
  margin-right: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  min-width: 180px;
  text-align: center;
  font-weight: 700;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 8px 24px 0px 32px;
`;

const Iconselected = styled.div`
  line-height: 110px;
  background-color: #008091;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 0.5px solid grey;
  color: white;
  text-align: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const IconUnselected = styled.div`
  line-height: 110px;
  background-color: #f3f4f5;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 0.5px solid grey;
  color: white;
  text-align: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "16px",
    margin: "16px"
  },
  textField: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const productgroup = [
  {
    value: "Domestic small letter",
    label: "DOM SMALL LETTER"
  },
  {
    value: "Domestic large letter",
    label: "DOM LARGE LETTER"
  }
];

const primaryproduct = [
  {
    value: "Express post",
    label: "Express post"
  },
  {
    value: "Parcel post",
    label: "Parcel post"
  }
];

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class OutlinedTextFields extends React.Component {
  state = {
    name: "Placeholder",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
    productgroup: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Wrapstyle1>
          <HeaderContainer>
            <Headerstyle>What type of assessment is required?</Headerstyle>
            <Icon.ChevronDown color="#008091" size={26} />
          </HeaderContainer>
          <Linestyle />
          <Content>
            <Button>Single item</Button>
            <Button>Bulk assessment</Button>
          </Content>
        </Wrapstyle1>

        <br />
        <br />

        <WrapstyleDone>
          <HeaderContainer>
            <H2>What type of assessment is required?</H2>
            <RHcontainer>
              <Result>Single item</Result>
              <Icon.ChevronDown color="#008091" size={26} />
            </RHcontainer>
          </HeaderContainer>
        </WrapstyleDone>

        <br />
        <br />

        <Wrapstyle1>
          <HeaderContainer>
            <Headerstyle>Item details</Headerstyle>
            <Icon.ChevronDown color="#008091" size={26} />
          </HeaderContainer>
          <Linestyle />
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-select-currency"
              select
              fullWidth
              label="Product group"
              className={classes.textField}
              value={this.state.productgroup}
              onChange={this.handleChange("productgroup")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText=""
              margin="normal"
              variant="outlined"
            >
              {productgroup.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              disabled
              id="outlined-disabled"
              fullWidth
              label="Item weight (kg)"
              defaultValue="1.200"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-select-currency"
              select
              fullWidth
              label="Primary product"
              className={classes.textField}
              value={this.state.primaryproduct}
              onChange={this.handleChange("primaryproduct")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText=""
              margin="normal"
              variant="outlined"
            >
              {primaryproduct.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="outlined-with-placeholder"
              label="Recipient name"
              fullWidth
              placeholder="Enter recipient name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-with-placeholder"
              label="Destination"
              fullWidth
              placeholder="Search for destination"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </form>
        </Wrapstyle1>

        <br />
        <br />

        <Wrapstyle1>
          <HeaderContainer>
            <Headerstyle>Optional extras</Headerstyle>
            <Icon.ChevronDown color="#008091" size={26} />
          </HeaderContainer>
          <Linestyle />
          <Content>
            <div>
              <Iconselected>
                <Icon.DollarSign size={42} />
              </Iconselected>
              <p align="center">Extra cover</p>
            </div>

            <div>
              <IconUnselected>
                <Icon.Edit2 color="black" size={42} />
              </IconUnselected>
              <p align="center">
                Signature <br />
                on delivery
              </p>
            </div>

            <div>
              <IconUnselected>
                <Icon.Tag color="black" size={42} />
              </IconUnselected>
              <p align="center">
                Prepaid <br />
                barcode label
              </p>
            </div>

            <div>
              <IconUnselected>
                <Icon.Navigation color="black" size={42} />
              </IconUnselected>
              <p align="center">Tracking</p>
            </div>
          </Content>
          <Content>
            <div>
              <IconUnselected>
                <Icon.Users color="black" size={42} />
              </IconUnselected>
              <p align="center">
                Person
                <br />
                to person
              </p>
            </div>

            <div>
              <IconUnselected>
                <Icon.Truck color="black" size={42} />
              </IconUnselected>
              <p align="center">
                Delivery
                <br />
                confirmation
              </p>
            </div>

            <div>
              <IconUnselected>
                <Icon.DollarSign color="black" size={42} />
              </IconUnselected>
              <p align="center">
                cash on
                <br />
                delivery
              </p>
            </div>

            <div>
              <IconUnselected>
                <Icon.Calendar color="black" size={42} />
              </IconUnselected>
              <p align="center">
                Saturday
                <br />
                delivery
              </p>
            </div>
          </Content>
        </Wrapstyle1>

        <br />
        <br />

        <Wrapstyle1>
          <HeaderContainer>
            <Headerstyle>Extra cover</Headerstyle>
            <p>$2.50</p>
            <Icon.ChevronDown color="#008091" size={26} />
          </HeaderContainer>
          <Linestyle />
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-with-placeholder"
              label="Article value"
              fullWidth
              placeholder="Enter AUD value"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </form>
        </Wrapstyle1>
        <br />
        <br />
        <Wrapstyle1>
          <HeaderContainer>
            <Headerstyle>Comliance</Headerstyle>
            <Icon.ChevronDown color="#008091" size={26} />
          </HeaderContainer>
          <Linestyle />
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-with-placeholder"
              label="Part paid amount"
              fullWidth
              placeholder="Enter part paid amount"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-with-placeholder"
              label="Underpaid fine"
              fullWidth
              placeholder="Underpaid fine"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-with-placeholder"
              label="Quantity"
              fullWidth
              placeholder="Quantity"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </form>
        </Wrapstyle1>

        <br />
        <br />

        <Wrapstyle1>
          <HeaderContainer>
            <Headerstyle>Lodgement</Headerstyle>
            <Icon.ChevronDown color="#008091" size={26} />
          </HeaderContainer>
          <Linestyle />
          <Content>
            <Button>Lodge at counter</Button>
            <Button>Lodge later</Button>
          </Content>
        </Wrapstyle1>

        <br />
        <br />

        <Wrapstyle1>
          <HeaderContainer>
            <Headerstyle>Stamp or label</Headerstyle>
            <Icon.ChevronDown color="#008091" size={26} />
          </HeaderContainer>
          <Linestyle />
          <Content>
            <Button>Stamp</Button>
            <Button>Label</Button>
          </Content>
        </Wrapstyle1>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
