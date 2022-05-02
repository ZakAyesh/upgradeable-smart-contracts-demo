async function main() {
    const TeslaV2 = await ethers.getContractFactory("TeslaV2")
    let teslaV2= await upgrades.upgradeProxy("", TeslaV2)
    console.log("Your upgraded proxy is done!", teslaV2.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })