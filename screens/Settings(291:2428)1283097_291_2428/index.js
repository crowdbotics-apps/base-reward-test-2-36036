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
      <View style={styles.View_291_2554} />
      <View style={styles.View_291_2625} />
      <View style={styles.View_291_2575} />
      <View style={styles.View_291_2555} />
      <TouchableOpacity
        style={styles.TouchableOpacity_291_2593}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_3459"))
        }
      />
      <View style={styles.View_291_2611} />
      <View style={styles.View_291_2433} />
      <View style={styles.View_291_2434}>
        <View style={styles.View_291_2435}>
          <Text style={styles.Text_291_2435}>9:41</Text>
        </View>
        <View style={styles.View_291_2436}>
          <View style={styles.View_291_2437}>
            <View style={styles.View_291_2438} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6e9d0d7-9b49-4830-9298-3ce144e83625"
              }}
              style={styles.ImageBackground_291_2439}
            />
            <View style={styles.View_291_2440} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/509a2501-d170-46dc-a255-9ae5072ce2e1"
              }}
              style={styles.ImageBackground_291_2441}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9610934-b6fd-4963-9099-cb945b79c2a9"
              }}
              style={styles.ImageBackground_291_2442}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11ca4df3-fddf-4aa2-af4d-4e8b32ca3bf1"
              }}
              style={styles.ImageBackground_291_2443}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/894bdd08-ca04-4c65-8235-f7bcd69d578a"
              }}
              style={styles.ImageBackground_291_2444}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e590a2f-0600-4bfa-a993-f38b0f29e573"
              }}
              style={styles.ImageBackground_291_2445}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ad99c2e-6bef-494b-8618-63f407e825f4"
              }}
              style={styles.ImageBackground_291_2446}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e744c8c5-b410-4f0f-ba24-f58e38fcbd5b"
              }}
              style={styles.ImageBackground_291_2447}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_291_2448}>
        <Text style={styles.Text_291_2448}>Settings</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4483227c-3d56-4254-a8ad-b76245bb0988"
        }}
        style={styles.ImageBackground_291_2536}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fceec8c-b987-42ce-bf01-c916e1ac58fe"
        }}
        style={styles.ImageBackground_291_2626}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25af6032-5ff7-499e-8397-cb3cf4363fc4"
        }}
        style={styles.ImageBackground_291_2576}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/265facf8-2c5f-4948-90e3-a56dca6c2dea"
        }}
        style={styles.ImageBackground_291_2592}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f82714ef-1ab0-43b9-8387-114b05b28909"
        }}
        style={styles.ImageBackground_291_2556}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe6ce73e-abc7-4de6-939a-ce7f84b2990f"
        }}
        style={styles.ImageBackground_291_2627}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d20f8ac0-4f40-474c-8b38-a88403128f56"
        }}
        style={styles.ImageBackground_291_2577}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d96c73a5-6a0f-4005-83a3-122e74a5da69"
        }}
        style={styles.ImageBackground_291_2615}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6b0e0f4-ec9a-48f2-995d-aa1f2fd9bd99"
        }}
        style={styles.ImageBackground_291_2557}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c131888-e6bf-40dc-a5ae-dcc0c8c46770"
        }}
        style={styles.ImageBackground_291_2538}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0380f9ef-6b64-4b72-a7e7-7adf21220201"
        }}
        style={styles.ImageBackground_436_726}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e3e96a3-603c-42c3-94b0-61227119f059"
        }}
        style={styles.ImageBackground_291_2628}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8c0f492-3bbb-405b-98cf-1d3b7719a00f"
        }}
        style={styles.ImageBackground_291_2558}
      />
      <View style={styles.View_291_2629}>
        <Text style={styles.Text_291_2629}>Fees &amp; Limits</Text>
      </View>
      <View style={styles.View_291_2597}>
        <Text style={styles.Text_291_2597}>Notification Settings</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_487_239}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_2640"))
        }
      >
        <View style={styles.View_291_2541}>
          <Text style={styles.Text_291_2541}>Name, phone, email</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c642be82-b129-41e5-8b34-affe83929bac"
          }}
          style={styles.ImageBackground_291_2542}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/325ffffe-d35c-456b-9846-b955f2514830"
        }}
        style={styles.ImageBackground_291_2630}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_487_255}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_3155"))
        }
      >
        <View style={styles.View_291_2579}>
          <Text style={styles.Text_291_2579}>Passcode Settings</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cc200c3-6a5a-4d78-a4f7-f2ad54326a8e"
          }}
          style={styles.ImageBackground_291_2580}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef6bb8d3-7309-4dd1-ae0d-d2457aff9f1c"
        }}
        style={styles.ImageBackground_291_2598}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_487_263}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("294_275"))
        }
      >
        <View style={styles.View_291_2612}>
          <Text style={styles.Text_291_2612}>Help Center</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2f462e7-7850-4f46-b65a-04939d187593"
          }}
          style={styles.ImageBackground_291_2613}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_487_265}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("296_93"))
        }
      >
        <View style={styles.View_291_2616}>
          <Text style={styles.Text_291_2616}>Contact Support</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bffbee0d-44ef-4018-be5a-5a2d91405ee5"
          }}
          style={styles.ImageBackground_291_2617}
        />
      </TouchableOpacity>
      <View style={styles.View_291_2631}>
        <Text style={styles.Text_291_2631}>Term &amp; Conditions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c959cf4d-6ae6-4077-bfa7-a099a2245ca2"
        }}
        style={styles.ImageBackground_291_2632}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_487_257}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_3224"))
        }
      >
        <View style={styles.View_291_2581}>
          <Text style={styles.Text_291_2581}>Change Passcode</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c3b0563-ee67-4228-bc33-805b8e9ecc16"
          }}
          style={styles.ImageBackground_291_2582}
        />
      </TouchableOpacity>
      <View style={styles.View_291_2633}>
        <Text style={styles.Text_291_2633}>Privacy Notice</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_487_243}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_2712"))
        }
      >
        <View style={styles.View_291_2547}>
          <Text style={styles.Text_291_2547}>Bank Details</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99a05d27-228d-47f6-be12-2e751673413d"
          }}
          style={styles.ImageBackground_291_2548}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b42be99-44e5-41c1-ba6c-7c3b4265b7ed"
        }}
        style={styles.ImageBackground_291_2634}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_487_259}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_3290"))
        }
      >
        <View style={styles.View_291_2583}>
          <Text style={styles.Text_291_2583}>2-Factor Authentication</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ea41b4c-2ebc-4e4c-86c3-208fd2c62e8e"
          }}
          style={styles.ImageBackground_291_2584}
        />
      </TouchableOpacity>
      <View style={styles.View_291_2635}>
        <Text style={styles.Text_291_2635}>Visit Our Website</Text>
      </View>
      <View style={styles.View_291_2638}>
        <Text style={styles.Text_291_2638}>App Version 1.000 0</Text>
      </View>
      <View style={styles.View_291_2565}>
        <Text style={styles.Text_291_2565}>Dark Mode</Text>
      </View>
      <View style={styles.View_291_2588}>
        <Text style={styles.Text_291_2588}>Unlock with Biometric</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_487_247}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_2773"))
        }
      >
        <View style={styles.View_291_2550}>
          <Text style={styles.Text_291_2550}>Transaction History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebf8b935-054f-44c2-8165-e4f83d02a839"
          }}
          style={styles.ImageBackground_291_2551}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_487_235}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("436_729"))
        }
      >
        <View style={styles.View_436_727}>
          <Text style={styles.Text_436_727}>Contacts</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce45b344-913f-4214-b3ec-f961b0e5c2ea"
          }}
          style={styles.ImageBackground_436_728}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28d7b51a-27ee-43d5-9ffe-50b81d8c1333"
        }}
        style={styles.ImageBackground_291_2636}
      />
      <View style={styles.View_291_2552}>
        <Text style={styles.Text_291_2552}>Profile</Text>
      </View>
      <View style={styles.View_291_2637}>
        <Text style={styles.Text_291_2637}>About Base Reward</Text>
      </View>
      <View style={styles.View_291_2587}>
        <Text style={styles.Text_291_2587}>Security</Text>
      </View>
      <View style={styles.View_291_2567}>
        <Text style={styles.Text_291_2567}>App</Text>
      </View>
      <View style={styles.View_291_2604}>
        <Text style={styles.Text_291_2604}>Notification</Text>
      </View>
      <View style={styles.View_291_2614}>
        <Text style={styles.Text_291_2614}>Support</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_487_249}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_2926"))
        }
      >
        <View style={styles.View_291_2559}>
          <Text style={styles.Text_291_2559}>Launch Screen</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec599423-4cd8-4db9-9805-f7243f3d8e7b"
          }}
          style={styles.ImageBackground_291_2560}
        />
        <View style={styles.View_291_2568}>
          <Text style={styles.Text_291_2568}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_487_251}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_2985"))
        }
      >
        <View style={styles.View_291_2561}>
          <Text style={styles.Text_291_2561}>Language</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e03b979-1fa4-4b12-b426-3548f63cb22f"
          }}
          style={styles.ImageBackground_291_2562}
        />
        <View style={styles.View_291_2569}>
          <Text style={styles.Text_291_2569}>English</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_487_253}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("291_3050"))
        }
      >
        <View style={styles.View_291_2563}>
          <Text style={styles.Text_291_2563}>Currency</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28453446-4118-487a-93ac-c93d33397a05"
          }}
          style={styles.ImageBackground_291_2564}
        />
        <View style={styles.View_291_2570}>
          <Text style={styles.Text_291_2570}>USD</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_291_2573}>
        <View style={styles.View_291_2571} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d841552-47bb-4d9b-9fb8-114bbf999ad1"
          }}
          style={styles.ImageBackground_291_2572}
        />
      </View>
      <View style={styles.View_291_2589}>
        <View style={styles.View_291_2590} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5554b70-91ba-4820-bb07-32366d90f048"
          }}
          style={styles.ImageBackground_291_2591}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_505_469}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("296_93"))
        }
      >
        <View style={styles.View_505_470}>
          <View style={styles.View_505_471} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3251ca00-ae9d-4321-b16f-8173d36e7e91"
            }}
            style={styles.ImageBackground_505_472}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_505_473}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("230_589"))
        }
      >
        <View style={styles.View_505_474}>
          <View style={styles.View_505_475}>
            <View style={styles.View_505_476} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8485d2b3-834c-4027-a198-4777723d627f"
          }}
          style={styles.ImageBackground_505_477}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_505_478}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("294_34"))
        }
      >
        <View style={styles.View_505_479}>
          <View style={styles.View_505_480} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/490beb1d-9658-4715-8a90-3aad1321a25b"
          }}
          style={styles.ImageBackground_505_481}
        />
      </TouchableOpacity>
      <View style={styles.View_499_422}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/293da465-0a4a-44c0-b73e-5390a42e34cf"
          }}
          style={styles.ImageBackground_499_423}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_499_427}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("285_362"))
          }
        >
          <View style={styles.View_499_428}>
            <Text style={styles.Text_499_428}>Reward</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74842a22-9f04-4278-8a1c-acbbf8e25166"
            }}
            style={styles.ImageBackground_499_429}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_499_430}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("285_1736"))
          }
        >
          <View style={styles.View_499_431}>
            <Text style={styles.Text_499_431}>Card</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/382b02c0-f983-4bb6-9161-1a18130e51fa"
            }}
            style={styles.ImageBackground_499_432}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_499_433}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("230_65"))
          }
        >
          <View style={styles.View_499_434}>
            <View style={styles.View_499_435}>
              <Text style={styles.Text_499_435}>Wallet</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a72d078a-4417-49a5-b7b9-28eeb4ccf389"
            }}
            style={styles.ImageBackground_499_436}
          />
        </TouchableOpacity>
        <View style={styles.View_499_437}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0d72451-01b4-46d0-a319-32f36c8e74f1"
            }}
            style={styles.ImageBackground_499_438}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72056f54-f09b-4ea5-8839-a25841427633"
            }}
            style={styles.ImageBackground_499_439}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_499_440}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("272_164"))
          }
        >
          <View style={styles.View_499_441}>
            <Text style={styles.Text_499_441}>Market</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b5d729a-5143-4eeb-a02a-55d7ee62b07e"
            }}
            style={styles.ImageBackground_499_442}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("230%") },
  View_291_2554: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("27%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_291_2625: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("180%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_291_2575: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("103%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_291_2555: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("65%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_291_2593: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("142%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_291_2611: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("157%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_291_2433: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_291_2434: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_291_2435: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_291_2435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_291_2436: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  View_291_2437: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_291_2438: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_291_2439: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_291_2440: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_291_2441: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_291_2442: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_291_2443: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_291_2444: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_291_2445: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_291_2446: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_291_2447: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_291_2448: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_291_2448: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2536: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%")
  },
  ImageBackground_291_2626: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("188%")
  },
  ImageBackground_291_2576: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("120%")
  },
  ImageBackground_291_2592: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("112%")
  },
  ImageBackground_291_2556: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("73%")
  },
  ImageBackground_291_2627: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("195%")
  },
  ImageBackground_291_2577: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("127%")
  },
  ImageBackground_291_2615: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("165%")
  },
  ImageBackground_291_2557: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("81%")
  },
  ImageBackground_291_2538: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("42%")
  },
  ImageBackground_436_726: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("50%")
  },
  ImageBackground_291_2628: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("203%")
  },
  ImageBackground_291_2558: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("88%")
  },
  View_291_2629: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("183%"),
    justifyContent: "center"
  },
  Text_291_2629: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2597: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("145%"),
    justifyContent: "center"
  },
  Text_291_2597: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_487_239: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("30%")
  },
  View_291_2541: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2541: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2542: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_291_2630: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  TouchableOpacity_487_255: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("114%")
  },
  View_291_2579: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2579: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2580: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_291_2598: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  TouchableOpacity_487_263: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("160%")
  },
  View_291_2612: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2612: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2613: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  TouchableOpacity_487_265: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("167%")
  },
  View_291_2616: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2616: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2617: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_291_2631: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("190%"),
    justifyContent: "center"
  },
  Text_291_2631: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2632: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  TouchableOpacity_487_257: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("122%")
  },
  View_291_2581: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2581: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2582: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_291_2633: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("198%"),
    justifyContent: "center"
  },
  Text_291_2633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_487_243: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("37%")
  },
  View_291_2547: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2547: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2548: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_291_2634: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  TouchableOpacity_487_259: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("130%")
  },
  View_291_2583: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2583: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2584: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_291_2635: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("206%"),
    justifyContent: "center"
  },
  Text_291_2635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2638: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("214%"),
    justifyContent: "flex-start"
  },
  Text_291_2638: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2565: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_291_2565: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2588: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("106%"),
    justifyContent: "center"
  },
  Text_291_2588: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_487_247: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("45%")
  },
  View_291_2550: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2550: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2551: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  TouchableOpacity_487_235: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("53%")
  },
  View_436_727: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_436_727: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_436_728: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_291_2636: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  View_291_2552: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_291_2552: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2637: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("175%"),
    justifyContent: "flex-start"
  },
  Text_291_2637: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2587: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_291_2587: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2567: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_291_2567: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2604: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("137%"),
    justifyContent: "flex-start"
  },
  Text_291_2604: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2614: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("153%"),
    justifyContent: "flex-start"
  },
  Text_291_2614: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_487_249: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("68%")
  },
  View_291_2559: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2559: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2560: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_291_2568: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2568: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_487_251: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("75%")
  },
  View_291_2561: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2561: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2562: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_291_2569: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2569: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_487_253: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("83%")
  },
  View_291_2563: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2563: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_291_2564: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_291_2570: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_291_2570: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_291_2573: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("91%")
  },
  View_291_2571: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  ImageBackground_291_2572: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_291_2589: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("106%")
  },
  View_291_2590: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  ImageBackground_291_2591: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  TouchableOpacity_505_469: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("9%")
  },
  View_505_470: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_505_471: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_505_472: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_505_473: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("9%")
  },
  View_505_474: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_505_475: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_505_476: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_505_477: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_505_478: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  View_505_479: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_505_480: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_505_481: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_499_422: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("217%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_499_423: {
    width: wp("100%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_499_427: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  View_499_428: {
    width: wp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_499_428: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_499_429: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_499_430: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_499_431: {
    width: wp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_499_431: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_499_432: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_499_433: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_499_434: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_499_435: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_499_435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_499_436: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_499_437: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_499_438: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_499_439: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    resizeMode: "cover"
  },
  TouchableOpacity_499_440: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%")
  },
  View_499_441: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_499_441: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_499_442: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
