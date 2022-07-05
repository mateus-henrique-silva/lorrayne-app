import React from 'react'
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  } from "@ionic/react"

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

interface 

const ButtonTest: React.FC<{}>= ( ) => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  


  return (
    <div>
         <IonButton onClick={openScanner}>Scan barcode</IonButton>

    </div>
  )
}}

export default ButtonTest;