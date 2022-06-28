const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    '',
    'https://rinkeby.infura.io/v3/fcdd2608e7174fdea492b7103946b600'
);

const web3 = new Web3(provider);

const deploy  = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Account',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode, arguments: ['Hi there!']
    }).send({
        gas: '1000000', from: accounts[0]
    });

    console.log('Address',result.options.address);
    provider.engine.stop();
};
deploy();