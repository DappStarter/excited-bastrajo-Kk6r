require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace seek surge trip film birth maze common inner narrow fold thank'; 
let testAccounts = [
"0x66dad01444417a11f9cd12eb28f694f12eee94587cd59659f6cf893ef93163e0",
"0xaa356616c55025af6e53ee3ca12fc9495a1a431624df32b2df62933be7d2b37f",
"0xc767fe5ed07697bd38dd97d2bb8452136c179eeaf6693b8f8c72a0b069293a2c",
"0x7925d8f0da75174435a42c640aadb3cbb6a3a7e8e1dd43ad89588bb963d5f9d3",
"0x286a0ef8c9cf33ec1752ead40575c95d3c050c11f56572dc66fce2806a2acc63",
"0x98c49ab92e1f72676b38fcba7b93b14eda341be03a2279c3376b2b9bbf70a1a4",
"0xb7e19726dd49715a587024b9c249cc5b29347cadf5d5c9f65777832690902d80",
"0x47a7c61308559d280cbca42da0ff74bebfc95793db0c314001dc649133798826",
"0x9768382d2e41b5930948660acb103a0b7fe32460922b613a8e461bac78d38fe4",
"0x56b4e8f1c1f8d216ed4c5d93fce9a26df0b31f4cb7866985e4231e0cb85549cf"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


