require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember coast gesture seek foster gasp'; 
let testAccounts = [
"0xa16cc7abe3e7af7eb4b5cfd081145a8847c6aa631924d569cae0a71e3f234d28",
"0x982119efd87a6bf82b22a7818264247e64975e08c23734c00911b32cf7d920f9",
"0x318762fd9cdb5582ec14fb16f630cffae35debcf7af269dfa89f4bda8aa3942a",
"0xddb90fad7dfce8dd01c022d3466e44e580a4209eb3e893acf22bd684268e1d41",
"0x9b5ebd6f3afd5af8e6dc272c69525904fc8e73fae6e49d367f5c837fc793334a",
"0x44331cb40f4c15e02caa876f33b86349cef77a65ede865a2bd08319cf8fdd4de",
"0x58ac3a762612f00f06eef32ff991da9e3e483fa6704c21dd759e500a7f05c6d1",
"0x021638109f9581166c228cb618d13b8734caa71031774e853be2fcf15fdf7e93",
"0xc960ebbc026a5f10a8656bf8124f23f7e422ec11f61d97fc0b358644a7f2d044",
"0xdc3d874de98a21d3d5277ef3c92ea5ffc820abe1df909186c7a7ade2c7a32d2b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

