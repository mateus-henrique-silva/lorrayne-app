import React from 'react'

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

const Tab1: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  

const UpImgs = () => {
  return (
    <div>
         <IonButton onClick={openScanner}>Scan barcode</IonButton>

    </div>
  )
}

export default UpImgs