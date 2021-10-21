const ROUTER1 = artifacts.require('UniswapV2Router01.sol')
const ROUTER2 = artifacts.require('UniswapV2Router02.sol')
const MIGRATOR = artifacts.require('UniswapV2Migrator.sol')

const factory = '0x0Dea90EC11032615E027664D2708BC292Bbd976B'
const testnetfactory = '0x663eeee1CcE3754799351cc707C34b5F0fc0A11A'


const wone = '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a'
const wonetest = '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2'



module.exports = async function(deployer, network) {
  if (network === 'mainnet0') {
    // await deployer.deploy(ROUTER1, factory, wone)

    await deployer.deploy(ROUTER2, factory, wone)

    const routerinteract = await ROUTER2.deployed()

    await console.log('ROUTER', routerinteract.address)
  } else {
    // await deployer.deploy(ROUTER1, testnetfactory, wonetest)

    await deployer.deploy(ROUTER2, testnetfactory, wonetest)

    const routerinteract = await ROUTER2.deployed()

    await console.log('ROUTER', routerinteract.address)
  }

  // await deployer.deploy(MIGRATOR, )
}
