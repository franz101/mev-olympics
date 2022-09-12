---
layout: post
title:  "Master of the leading zeroes address"
date:   2022-08-25 00:00:00 +1000
categories: mev discipline
---

![image-title-here](/assets/images/DALL·E_2022-09-11_08.40.53.png){: width="250" }


The champion of this disclipline will be awarded with the NFT for having the most leading zeores in the address.

The smart contract for the allowlist features the following function:

{% highlight javascript %}
function getLeadingZeroes(address addr) public view returns (uint) {
        bytes20 bytesAdr = bytes20(addr);
        uint counter = 0;
        for (uint i = 0; i < 20; i++) {
            if (uint8(bytesAdr[i]) == 0) {
                counter++;
            } else {
                break;
            }
        }
        return counter;
    }
{% endhighlight %}

Claim your NFT under this address on ropsten:
```0xE9764B5e3A9471fa68504c0Af96bbBF08236f0B6```


More resources:

[Github](https://github.com/franz101/mev-olympics-nft/blob/0d61d6bd6763585d53c57ca2d69816f6315362c9/contracts/MevOlympics.sol#L48)
[Etherscan](https://ropsten.etherscan.io/address/0xE9764B5e3A9471fa68504c0Af96bbBF08236f0B6)
[Profanity](https://github.com/johguse/profanity)
