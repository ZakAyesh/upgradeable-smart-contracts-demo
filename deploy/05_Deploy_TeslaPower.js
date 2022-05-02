async function main() {
    const Tesla = await ethers.getContractFactory("TeslaPower")
    console.log("Deploying TeslaPower, ProxyAdmin, and then Proxy...")
    const proxy = await upgrades.deployProxy(Tesla, [600], { initializer: 'setHorsePower' })
    console.log("Proxy of TeslaPower deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })