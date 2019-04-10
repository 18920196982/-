const HDWalletprovider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
const provider = new HDWalletprovider(
  'appear tower embrace liberty large omit stay soft inhale retreat arrow million',
  'https://ropsten.infura.io/v3/9e0681cf65f44529ade09d20750d02ca'
);
const web3 = new Web3(provider);
const deploy = async()=>{
  console.log(interface);
const accounts = await web3.eth.getAccounts();
const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:'0x'+bytecode})
 //上式中helloworld合约中有参数，所以是{data:'0x'+bytecode,arguments:['jonson']}
 //而Lottery合约中是构造函数，所以是{data:'0x'+bytecode}
  .send({from:accounts[0],gas:'1000000'});
  console.log('contract deployed to',result.options.address);
}
deploy();
// 0xbd19A604c769552a169E00DEb3e2a9265927e86D
