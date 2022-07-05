import React from 'react'
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    
  } from "@ionic/react"

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

interface buttonImport{
    Tab1: string;
}

const Tab1: React.FC<buttonImport> = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  


  return (
    <div>
         <IonButton onClick={openScanner}>Scan barcode</IonButton>

    </div>
  )
}}

export default Tab1