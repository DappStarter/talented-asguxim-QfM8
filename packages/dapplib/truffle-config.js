require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner arena bone table edge rare remain common guess profit bottom surface'; 
let testAccounts = [
"0xa42260a04fafb4aca570298942476afeb7c635bce0d5129764ef7f3d118e9ed2",
"0x2ccffe300d88c37ca1831e193b6f2f9c2cf521890a5710df1c5ef139e4157422",
"0xe7bf34b3c38cdc13421ebf19c408a601d74cd8fb9a09cc96c5973f13dc7e5366",
"0x0925e0eb7f8125e388fe48106d5d827448b573c59722d02f7c07dba158a63f86",
"0x166c8bf27b03b9d8e85b173128778c9a61afae9ab5234083c504f280e29c4b96",
"0x99986aaa86cd255e98e3e743645c50007cc08bcca6f6fbf2ce39af2acda225d0",
"0xef45edcf6c3018e1847ea56d302af1798434930a3732ad6c54b04c9289d3516d",
"0x52b671218be9100cc19c62b853d9f4d2294abdc821aed4203c5208d611aa61b0",
"0x8fd41b957990eae65b17ee95318d726558e6e94b06f8278e3d573aae578db457",
"0xbfdcccd7bc5b81d1830f2bbaf874e860649645c37d079af82bd2e9bd5ed1574d"
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


