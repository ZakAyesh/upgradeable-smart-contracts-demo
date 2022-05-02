// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = 'FILL_ME_IN'
    const TeslaV2 = await ethers.getContractFactory("TeslaPowerV2")
    console.log("Preparing upgrade...")
    const teslaV2Address = await upgrades.prepareUpgrade(proxyAddress, TeslaV2)
    console.log("BoxV2 at:", teslaV2Address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })