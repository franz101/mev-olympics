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
```0xc310800fbad7fe91acf195dac428430e4c847e6a```


More resources:

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
