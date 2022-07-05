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



function Tab1() {
    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        console.log(`Barcode data: ${data.text}`);



        return (
            <div>
                <IonButton onClick={openScanner}>Scan barcode</IonButton>

            </div>
        );
    };
}

export default Tab1