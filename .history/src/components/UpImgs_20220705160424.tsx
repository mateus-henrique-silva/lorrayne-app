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

const Tab1: React.FC = () => {
    const openScanner = async () => {
      const data = await BarcodeScanner.scan();
      console.log(`Barcode data: ${data.text}`);
    };
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonButton onClick={openScanner}>Scan barcode</IonButton>
        </IonContent>
      </IonPage>
    );
  };

  export