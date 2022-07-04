import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_102_207}>
        <View style={styles.View_102_208} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d86cfc1-9764-4583-ab55-b3b98e659821"
        }}
        style={styles.ImageBackground_102_209}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_102_210}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("106_182"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_102_211}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("106_123"))
        }
      />
      <View style={styles.View_102_212}>
        <Text style={styles.Text_102_212}>Create New Account</Text>
      </View>
      <View style={styles.View_102_213}>
        <Text style={styles.Text_102_213}>Log in to existing account</Text>
      </View>
      <View style={styles.View_106_91}>
        <Text style={styles.Text_106_91}>Invited? Add Referral Code</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_102_207: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("28%")
  },
  View_102_208: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 231, 231, 1)"
  },
  ImageBackground_102_209: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("31%"),
    resizeMode: "cover"
  },
  TouchableOpacity_102_210: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("86%"),
    backgroundColor: "rgba(116, 116, 116, 1)"
  },
  TouchableOpacity_102_211: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("97%"),
    backgroundColor: "rgba(116, 116, 116, 1)"
  },
  View_102_212: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_102_212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_102_213: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_102_213: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_106_91: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_106_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
