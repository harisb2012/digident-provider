import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
  KeyboardAvoidingView
} from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const BG_IMAGE = require('./login_background.jpg')

const TabSelector = ({ selected }) => {
  return (
    <View style={styles.selectorContainer}>
      <View style={selected && styles.selected} />
    </View>
  )
}

export class LoginScene extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }


  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  login() {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut()
    }, 1500)
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <View>
            <KeyboardAvoidingView
              contentContainerStyle={styles.loginContainer}
              behavior="position"
            >
              <View style={styles.titleContainer}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.titleText}>Welcome to digIDENT</Text>
                </View>
              </View>

              <View style={styles.formWrapper}>
                <TextField label="Email" autoCapitalize={false} />
                <TextField
                  label="Password"
                  secureTextEntry={true}
                  autoCapitalize={false}
                />
              </View>

              <Button
                buttonStyle={styles.loginButton}
                containerStyle={{ marginTop: 32, flex: 0 }}
                activeOpacity={0.8}
                title={'LOGIN'}
                onPress={this.login}
                titleStyle={styles.loginTextButton}
              />
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowSelector: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center'
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  loginButton: {
    backgroundColor: 'rgba(232, 147, 142, 1)',
    borderRadius: 10,
    height: 50,
    width: 200
  },
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'light',
    backgroundColor: 'transparent',
    opacity: 0.54
  },
  titleText: {
    color: 'white',
    fontSize: 30
  },
  formWrapper: {
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 50,
    marginBottom: 15,
    width: SCREEN_WIDTH - 30,
    backgroundColor: '#fff'
  }
})
