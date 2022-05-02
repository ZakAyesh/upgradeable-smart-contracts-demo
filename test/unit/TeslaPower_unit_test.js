const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

let Tesla, tesla

// Start test block
describe('Tesla (proxy)', function () {
  beforeEach(async function () {
    Tesla = await ethers.getContractFactory("TeslaPower")
    tesla = await upgrades.deployProxy(Tesla, [600], { initializer: 'setHorsePower' })
  })
  it('retrieve returns a value previously initialized', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await tesla.retrieveHorsePower()).toString()).to.equal('600')
    expect(() => { tesla.incrementHorsePower() }).to.throw(TypeError)
  })
  it('upgrades', async function () {
    const TeslaV2 = await ethers.getContractFactory("TeslaPowerV2")
    teslaV2 = await upgrades.upgradeProxy(box.address, TeslaV2)
    await tesla.incrementHorsePower()
    let result = await box.retrieveHorsePower()
    expect(result).to.equal(601)
  })
})