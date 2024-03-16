async function setPriceAlert(pair, targetPrice, notificationMethod) {
    const tx = await dexContract.setPriceAlert(pair, targetPrice, notificationMethod);
    await tx.wait();
    return tx.hash;
  }
  