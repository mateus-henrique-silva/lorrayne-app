import React from 'react'

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

interface buttonImport

const Tab1: React.FC = () => {
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