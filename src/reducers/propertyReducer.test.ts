import { propertyReducer } from "./propertyReducer";
import { savePropery, removeProperty } from "../actions/propertyActions";
import { PropertyState } from "../typings/propertyType";

const testInitialPropertyState : PropertyState = {
    "results": [{
        "price": "$726,500",
        "agency": {
            "brandingColors": {
                "primary": "#ffe512"
            },
            "logo": "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
        },
        "id": "1",
        "mainImage": "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    }, {
        "price": "$560,520",
        "agency": {
            "brandingColors": {
                "primary": "#fcfa3b"
            },
            "logo": "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"
        },
        "id": "2",
        "mainImage": "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    }],
    "saved": [{
        "price": "$526,500",
        "agency": {
            "brandingColors": {
                "primary": "#000000"
            },
            "logo": "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif"
        },
        "id": "4",
        "mainImage": "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
    }]
};

describe("Property Reducer", () => {
  it("should add a property to save list", () => {
    const expected = 
    {
        "results": [{
            "price": "$726,500",
            "agency": {
                "brandingColors": {
                    "primary": "#ffe512"
                },
                "logo": "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
            },
            "id": "1",
            "mainImage": "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
        }, {
            "price": "$560,520",
            "agency": {
                "brandingColors": {
                    "primary": "#fcfa3b"
                },
                "logo": "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"
            },
            "id": "2",
            "mainImage": "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
        }],
        "saved": [{
            "price": "$526,500",
            "agency": {
                "brandingColors": {
                    "primary": "#000000"
                },
                "logo": "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif"
            },
            "id": "4",
            "mainImage": "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
        },{
            "price": "$726,500",
            "agency": {
                "brandingColors": {
                    "primary": "#ffe512"
                },
                "logo": "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
            },
            "id": "1",
            "mainImage": "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
        }]
    }
     expect(propertyReducer(testInitialPropertyState, savePropery("1"))).toEqual(expected);
  });
  it("should remove a property from save list", () => {
    const expected = 
    {
        "results": [{
            "price": "$726,500",
            "agency": {
                "brandingColors": {
                    "primary": "#ffe512"
                },
                "logo": "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
            },
            "id": "1",
            "mainImage": "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
        }, {
            "price": "$560,520",
            "agency": {
                "brandingColors": {
                    "primary": "#fcfa3b"
                },
                "logo": "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"
            },
            "id": "2",
            "mainImage": "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
        }],
        "saved": []
    }
     expect(propertyReducer(testInitialPropertyState, removeProperty("4"))).toEqual(expected);
  });
});
