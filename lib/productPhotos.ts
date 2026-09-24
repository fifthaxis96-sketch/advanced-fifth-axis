// Manufacturer reference photos, matched to specific product pages. Missing variants intentionally have no photo.
export type ProductPhoto = { image: string; source: string; maker: string };
export const productPhotos: Record<string, Record<string, ProductPhoto>> = {
  "roller-bits": {
    "MH-1 Classic": {
      "image": "/products/roller-bits-0.webp",
      "source": "https://meclead.com/roller-bit/mh-1-roller-bit/",
      "maker": "Meclead"
    },
    "MH-2 Traditional": {
      "image": "/products/roller-bits-1.webp",
      "source": "https://meclead.com/roller-bit/mh-2/",
      "maker": "Meclead"
    },
    "MH-3 Flagship": {
      "image": "/products/roller-bits-2.webp",
      "source": "https://meclead.com/roller-bit/mh-3/",
      "maker": "Meclead"
    }
  },
  "bullet-teeth": {
    "B47K22H": {
      "image": "/products/bullet-teeth-7.webp",
      "source": "https://meclead.com/bullet-teeth/b47k22h/",
      "maker": "Meclead"
    },
    "C31HD": {
      "image": "/products/bullet-teeth-8.webp",
      "source": "https://meclead.com/bullet-teeth/c31hd/",
      "maker": "Meclead"
    },
    "M50-22x27S": {
      "image": "/products/bullet-teeth-9.webp",
      "source": "https://meclead.com/bullet-teeth/m50-22x27s/",
      "maker": "Meclead"
    },
    "M60-22x27": {
      "image": "/products/bullet-teeth-10.webp",
      "source": "https://meclead.com/bullet-teeth/m60-22x27/",
      "maker": "Meclead"
    },
    "78-95 Holder": {
      "image": "/products/bullet-teeth-12.webp",
      "source": "https://meclead.com/bullet-teeth/78-95-holder/",
      "maker": "Meclead"
    },
    "B43 Holder": {
      "image": "/products/bullet-teeth-13.webp",
      "source": "https://meclead.com/bullet-teeth/b43holder/",
      "maker": "Meclead"
    }
  },
  "bauer-teeth": {
    "BFZ70": {
      "image": "/products/bauer-teeth-15.webp",
      "source": "https://meclead.com/bauer-teeth/bfz70/",
      "maker": "Meclead"
    },
    "BFZ72": {
      "image": "/products/bauer-teeth-16.webp",
      "source": "https://meclead.com/bucket-teeth/bfz72/",
      "maker": "Meclead"
    },
    "BFZ80": {
      "image": "/products/bauer-teeth-17.webp",
      "source": "https://meclead.com/bucket-teeth/bfz80/",
      "maker": "Meclead"
    }
  },
  "bucket-teeth": {
    "V20": {
      "image": "/products/bucket-teeth-18.webp",
      "source": "https://meclead.com/bucket-teeth/v20-bucket-teeth/",
      "maker": "Meclead"
    },
    "25T": {
      "image": "/products/bucket-teeth-19.webp",
      "source": "https://meclead.com/bucket-teeth/25t-bucket-teeth/",
      "maker": "Meclead"
    },
    "25RC-12": {
      "image": "/products/bucket-teeth-20.webp",
      "source": "https://meclead.com/bucket-teeth/25rc-12-bucket-teeth/",
      "maker": "Meclead"
    }
  },
  "rock-augers": {
    "Straight Rock Auger": {
      "image": "/products/rock-augers-21.webp",
      "source": "https://meclead.com/auger/straight-rock-auger/",
      "maker": "Meclead"
    },
    "Conical Rock Auger": {
      "image": "/products/rock-augers-22.webp",
      "source": "https://meclead.com/auger/conical-rock-auger/",
      "maker": "Meclead"
    }
  },
  "drilling-buckets": {
    "Bucket with soil teeth": {
      "image": "/products/drilling-buckets-23.webp",
      "source": "https://meclead.com/drilling-bucket/soil-bucket/",
      "maker": "Meclead"
    },
    "Bucket with rock teeth": {
      "image": "/products/drilling-buckets-24.webp",
      "source": "https://meclead.com/drilling-bucket/rock-bucket/",
      "maker": "Meclead"
    },
    "Cleaning bucket": {
      "image": "/products/drilling-buckets-25.webp",
      "source": "https://meclead.com/drilling-bucket/cleaning-bucket/",
      "maker": "Meclead"
    }
  },
  "core-barrels": {
    "Core barrel with bullet teeth": {
      "image": "/products/core-barrels-26.webp",
      "source": "https://meclead.com/core-barrel-with-bullet-teeth/",
      "maker": "Meclead"
    },
    "Core barrel with roller bit": {
      "image": "/products/core-barrels-27.webp",
      "source": "https://meclead.com/core-barrel-with-roller-bit/",
      "maker": "Meclead"
    }
  },
  "casing": {
    "Double wall casing": {
      "image": "/products/casing-28.webp",
      "source": "https://meclead.com/piling-casing/double-wall-casing/",
      "maker": "Meclead"
    },
    "Casing drive": {
      "image": "/products/casing-29.webp",
      "source": "https://meclead.com/piling-casing/casing-drive/",
      "maker": "Meclead"
    },
    "Casing shoe": {
      "image": "/products/casing-30.webp",
      "source": "https://meclead.com/piling-casing/casing-shoe/",
      "maker": "Meclead"
    }
  },
  "cfa": {
    "Continuous flight auger": {
      "image": "/products/cfa-31.webp",
      "source": "https://meclead.com/cfa-auger/continuous-flight-auger/",
      "maker": "Meclead"
    }
  }
};