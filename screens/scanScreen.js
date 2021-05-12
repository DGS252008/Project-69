import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component() {
  constructor(){
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal'
    }
  }
}

getCameraPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({
    hasCameraPermissions: status === 'granted',
    buttonState: 'clicked',
    scanned: false,1
  });
};

handleBarCodeScanner = async({type, data}) =>{
  this.setState({
    scanned: true,
    scannedData: data,
    buttonState: 'normal'
  })
}

render() {
  const hasCameraPermission = this.state.hasCameraPermissions;
  const isScanned = this.state.scanned;
  const isButtonState = this.state.buttonState;

  if (isButtonState === 'clicked' && hasCameraPermission) {
    return (
      <BarCodeScanner
        onBarCodeScanned={isScanned ? undefined : this.handleBarCodeScanner}
        style={StyleSheet.absoluteFillObject}
      />
    )
  }


  else if(isButtonState === 'normal'){
  return (
    <View style={styles.container}>
      <Text style={styles.displayText}>
        {hasCameraPermission === true? this.state.scannedData :"Please Allow Camera Permission"}
      </Text>
      <TouchableOpacity
        style={styles.scanButton}
        onPress={this.getCameraPermissions}>
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  )
  }
}