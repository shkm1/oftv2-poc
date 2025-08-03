   ## Screenshots

###  Deployment Success
![Deploy](images/Screenshot_2025-08-03_19_12_07.png)

###  Contract Deployed + FakeSender
![Deploy 2](images/Screenshot_2025-08-03_19_13_20.png)

###  Fake Message Triggered
![Fake Message](images/Screenshot_2025-08-03_19_23_37.png)

###  Exploit Launched
![Exploit](images/Screenshot_2025-08-03_19_23_54.png)

###  Attacker Balance After Exploit
![Balance](images/Screenshot_2025-08-03_19_24_07.png)

###  Final Balance Confirmation
![Final Balance](images/Screenshot_2025-08-03_19_25_04.png)
// Placeholder for README.md
    




This is a simple local proof of concept to show a vulnerability in the OFTV2 contract.

The idea is that the contract accepts fake lzReceive messages from a contract that is not actually trusted. This allows an attacker to mint tokens to any address they want.

The test was done on localhost using Hardhat.

First, I deployed the OFTV2 contract normally. Then I deployed a fake sender contract to simulate a remote call.

After that, I used a script to trigger a fake lzReceive call that mints tokens to an address of my choice. Then I checked the balance and it was updated, confirming that the exploit worked.

The balance of the attacker address increased even though no real cross-chain message was received.

This kind of issue happens because the contract doesn't verify that the sender is a real trusted remote. The validation of trustedRemote in lzReceive is missing or misconfigured.

I’ve included the scripts I used for deploying and running the fake message.

Everything is tested locally and shown through screenshots. You can repeat the steps using the same scripts.

Please note that this is only for educational purposes and to demonstrate the problem in a safe environment.

