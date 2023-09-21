import { useEffect, useState } from "react";
import { RestaurentComponent } from "../components/restaurentcompo";
import Shimmmer from "./shimmer"
import { Link } from "react-router-dom";
//import { RestaurentData } from "../utilities/RestaurebtData" ; 
export const Bodycomponent = () => {

  console.log('rendered')

  //  alert("click here to render compoent")
  let [Resdata1, FilterAvil] = useState([]);

  let [RestaurentData, FilterD] = useState([]);

  let [REsdata2, FilterIceCream] = useState([]);


  //USESTATE  FOR  SEARCH DATA

  let [SEARCH, SetSearch] = useState();


  useEffect(() => {

    FirstAPi()

  }, []);

  let FirstAPi = async () => {
    let APIDAta = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3730432&lng=78.4260555&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let REstApiData = await APIDAta;
    // let ApiRES = REstApiData.formData.cards[2].card.card.gridElements.infoWithStyle.restaurants ;
    // let  us store api data manually bcoz swigggy data is difficult to read
    let ApiStaticJsonData = [

      {

        id: "1590",
        name: "Sarvi Restaurant",
        cloudinaryImageId: "ds6nasa6qpxunkhglz5g",
        locality: "Road 11",
        areaName: "Banjara Hills",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor",
          "Desserts"
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "1590",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8600
        },
        parentId: "4623",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 7.6,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "7.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-14 00:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}


      },
      {

        id: "262087",
        name: "Imperial Multi Cuisine Restaurant",
        cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
        locality: "Banjara Hills",
        areaName: "Redhills",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor"
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "262087",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8600
        },
        parentId: "19253",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 7.2,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "7.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-14 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/imperial-multi-cuisine-restaurant-banjara-hills-redhills-hyderabad-262087",
          type: "WEBLINK"
        }
      },
      {

        id: "34634",
        name: "Shah Ghouse Cafe & Restaurant",
        cloudinaryImageId: "ks4d93rjtcbitkzkbqx0",
        locality: "Tolichowki",
        areaName: "Tolichowki",
        costForTwo: "₹350 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Chinese",
          "Mughlai",
          "Tandoor"
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "34634",
          fees: [
            {
              name: "BASE_TIME"
            },
            {
              name: "BASE_DISTANCE",
              fee: 4900
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4900
          ,
          parentId: "18992",
          avgRatingString: "4.1",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "22 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-13 23:59:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/shah-ghouse-cafe-and-restaurant-tolichowki-hyderabad-34634",
          type: "WEBLINK"
        }
      },
      {

        id: "28108",
        name: "Al Rabea Al Arabi Cafeteria",
        cloudinaryImageId: "jnzmscxd37rbjmgciwt5",
        locality: "Pillar no 37",
        areaName: "Mehdipatnam",
        costForTwo: "₹250 for two",
        cuisines: [
          "Arabian",
          "Lebanese"
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "28108",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4100
        },
        parentId: "7582",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-14 01:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/al-rabea-al-arabi-cafeteria-pillar-no-37-mehdipatnam-hyderabad-28108",
          type: "WEBLINK"
        }
      },
      {

        id: "335331",
        name: "Natural Ice Cream",
        cloudinaryImageId: "umjvqe3zld6hmzvmnffz",
        locality: "Manikonda",
        areaName: "Shaikpet",
        costForTwo: "₹150 for two",
        cuisines: [
          "Ice Cream",
          "Desserts"
        ],
        avgRating: 4.3,
        veg: true,
        feeDetails: {
          restaurantId: "335331",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8100
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8100
        },
        parentId: "2093",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 6.8,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "6.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/natural-ice-cream-manikonda-shaikpet-hyderabad-335331",
          type: "WEBLINK"
        }
      },
      {

        id: "378344",
        name: "Theobroma",
        cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
        locality: "Impero Estate",
        areaName: "Banjara Hills",
        costForTwo: "₹600 for two",
        cuisines: [
          "Desserts"
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "378344",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 9100
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 9100
          ,
          parentId: "1040",
          avgRatingString: "4.4",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 7.8,
            serviceability: "SERVICEABLE",
            slaString: "29 mins",
            lastMileTravelString: "7.8 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-14 00:00:00",
            opened: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet"
              }
            ]
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png"
                    }
                  }
                ]
              },
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹159",
            discountTag: "FLAT DEAL"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/theobroma-impero-estate-banjara-hills-hyderabad-378344",
          type: "WEBLINK"
        }
      },
      {

        id: "140111",
        name: "Imperial Multi-Cusine Restaurant",
        cloudinaryImageId: "yeednzto1jusnnhswke0",
        locality: "Tolichowki",
        areaName: "Toli Chowki",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor"
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "140111",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4900
          ,
          parentId: "19254",
          avgRatingString: "4.1",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 4.4,
            serviceability: "SERVICEABLE",
            slaString: "23 mins",
            lastMileTravelString: "4.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-13 23:59:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/imperial-multi-cusine-restaurant-tolichowki-toli-chowki-hyderabad-140111",
          type: "WEBLINK"
        }
      },
      {

        id: "27739",
        name: "Cafe Niloufer Classic",
        cloudinaryImageId: "67ca79626844963d6979835661ac45a0",
        locality: "Oshiwara",
        areaName: "Oshiwara",
        costForTwo: "₹150 for two",
        cuisines: [
          "Bakery",
          "Beverages",
          "Snacks",
          "Desserts"
        ],
        avgRating: 4.5,
        feeDetails: {
          restaurantId: "27739",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8600
          ,
          parentId: "19273",
          avgRatingString: "4.5",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            slaString: "29 mins",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-14 00:30:00",
            opened: true
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/cafe-niloufer-classic-oshiwara-hyderabad-27739",
          type: "WEBLINK"
        }
      },
      {

        id: "82407",
        name: "Hotel Rumaan",
        cloudinaryImageId: "a8pbvrbxjkor9ehq5jec",
        locality: "Tolichowki",
        areaName: "Tolichowki",
        costForTwo: "₹300 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor"
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "82407",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4900
        },
        parentId: "9008",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-14 00:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/hotel-rumaan-tolichowki-hyderabad-82407",
          type: "WEBLINK"
        }
      },
      {

        id: "228215",
        name: "Cafe Niloufer Premium Lounge",
        cloudinaryImageId: "cb10067437534e45c47338f61d2b7d96",
        locality: "Ivine Banjara Hno8-2",
        areaName: "Banjara Hills",
        costForTwo: "₹200 for two",
        cuisines: [
          "Bakery",
          "Beverages",
          "Snacks",
          "Desserts"
        ],
        avgRating: 4.5,
        feeDetails: {
          restaurantId: "228215",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8600
        },
        parentId: "19242",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 7.4,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "7.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available"
                  }
                }
              ]
            }
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/cafe-niloufer-premium-lounge-ivine-banjara-hno8-2-banjara-hills-hyderabad-228215",
          type: "WEBLINK"
        }
      },
      {

        id: "22260",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "salar jung Colony",
        areaName: "Toli Chowki",
        costForTwo: "₹300 for two",
        cuisines: [
          "Desserts"
        ],
        avgRating: 4.1,
        veg: true,
        feeDetails: {
          restaurantId: "22260",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4600
          ,
          parentId: "5588",
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "21 mins",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2023-09-14 05:00:00",
            opened: true
          },
          badges: {},
          isOpen: false,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹1000",
            discountTag: "FLAT DEAL"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-salar-jung-colony-toli-chowki-hyderabad-22260",
          type: "WEBLINK"
        }
      },
      {

        id: "24766",
        name: "Istah - The Mediterranean Way",
        cloudinaryImageId: "67d4a416bf932f850b0a15ad33aae762",
        locality: "Puppalguda",
        areaName: "Manikonda",
        costForTwo: "₹250 for two",
        cuisines: [
          "Mediterranean",
          "Snacks",
          "Biryani",
          "Grill",
          "Kebabs",
          "Arabian",
          "Lebanese",
          "Beverages",
          "Desserts",
          "Italian",
          "Turkish"
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "24766",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8600
        },
        parentId: "3518",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 7.5,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "7.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: false,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available"
                  }
                }
              ]
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "EVERY ITEM",
          subHeader: "@ ₹139"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-puppalguda-manikonda-hyderabad-24766",
          type: "WEBLINK"
        }
      },
      {

        id: "355748",
        name: "Grameen Kulfi",
        cloudinaryImageId: "mhnyikva9hdujja1vo10",
        locality: "OU Colony manikonda",
        areaName: "Shaikpet",
        costForTwo: "₹120 for two",
        cuisines: [
          "Ice Cream",
          "Desserts"
        ],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "355748",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 7600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 7600
        },
        parentId: "12175",
        avgRatingString: "4.5",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 6.8,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "6.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹749",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/grameen-kulfi-ou-colony-manikonda-shaikpet-hyderabad-355748",
          type: "WEBLINK"
        }
      },
      {

        id: "367769",
        name: "Lucky Restaurant",
        cloudinaryImageId: "qems028i3da5rxf81rbp",
        locality: "Banjara Hills",
        areaName: "MasabTank",
        costForTwo: "₹300 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Tandoor"
        ],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "367769",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8600
        },
        parentId: "293683",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 7,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "7.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-14 01:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹399",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/lucky-restaurant-banjara-hills-masabtank-hyderabad-367769",
          type: "WEBLINK"
        }
      },
      {

        id: "168402",
        name: "NIC Ice Creams",
        cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
        locality: "Hakeempet",
        areaName: "Toli Chowki",
        costForTwo: "₹120 for two",
        cuisines: [
          "Ice Cream",
          "Desserts"
        ],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "168402",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4900
        },
        parentId: "6249",
        avgRatingString: "4.5",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 4.5,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "4.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/nic-ice-creams-hakeempet-toli-chowki-hyderabad-168402",
          type: "WEBLINK"
        }
      },
      {

        id: "80487",
        name: "The Bowl Company",
        cloudinaryImageId: "bb6049fae59b8a2413a9177eb0338b49",
        locality: "alkapoor",
        areaName: "Sri Ram Nagar Colony",
        costForTwo: "₹300 for two",
        cuisines: [
          "Pan-Asian",
          "Continental",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "80487",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8600
        },
        parentId: "4317",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 7.5,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "7.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/the-bowl-company-alkapoor-sri-ram-nagar-colony-hyderabad-80487",
          type: "WEBLINK"
        }
      },
      {

        id: "57211",
        name: "Faasos - Wraps & Rolls",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Hydershahkot Village",
        areaName: "Sun City",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "57211",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4900
        },
        parentId: "21809",
        avgRatingString: "3.9",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available"
                  }
                }
              ]
            }
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-hydershahkot-village-sun-city-hyderabad-57211",
          type: "WEBLINK"
        }
      },
      {

        id: "63016",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId: "znwcdvf5up2ceqnivapw",
        locality: "Hydershahkot Village",
        areaName: "Sun City",
        costForTwo: "₹200 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4,
        feeDetails: {
          restaurantId: "63016",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4900
        },
        parentId: "4925",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹399",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-hydershahkot-village-sun-city-hyderabad-63016",
          type: "WEBLINK"
        }
      },
      {

        id: "312149",
        name: "Wow! Momo",
        cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹300 for two",
        cuisines: [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "312149",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 8600
        },
        parentId: "1776",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 7.8,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "7.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-14 01:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "EVERY ITEM",
          subHeader: "@ ₹99"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/wow-momo-banjara-hills-hyderabad-312149",
          type: "WEBLINK"
        }
      },
      {

        id: "156122",
        name: "The Good Bowl",
        cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
        locality: "Hydershahkote Village",
        areaName: "Sun City",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4,
        feeDetails: {
          restaurantId: "156122",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          totalFee: 4900
        },
        parentId: "7918",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2023-09-13 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
        ,
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/the-good-bowl-hydershahkote-village-sun-city-hyderabad-156122",
          type: "WEBLINK"
        }
      }
    ];
    FilterAvil(ApiStaticJsonData)

    FilterD(ApiStaticJsonData);
    FilterIceCream(ApiStaticJsonData);
    //   SetSearch(ApiStaticJsonData);                      
  };



  if (RestaurentData == 0) {
    return <Shimmmer />

  }
  return (<div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <button className="btn filterbutton col-md-6"
          onClick={() => {
            let TopRated = RestaurentData.filter((filtR) => filtR.avgRating >= 4.5);
            FilterD(TopRated);
            console.log(TopRated)
          }}>Click here for Top Rated Restaurents</button>
      </div>
      <div className="col-md-6">
        <button className="btn filterbutton col-md-6"
          onClick={() => {
            let availablehotels = Resdata1.filter((filtR) => filtR.isOpen == true);

            FilterAvil(availablehotels);
            console.log(availablehotels);

          }}> Hotels Available Now</button>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button className="btn filterbutton"
            onClick={() => {
              let IceCreamParlours = REsdata2.filter((filtR) => filtR.veg == true);
              FilterD(IceCreamParlours);
              console.log(IceCreamParlours)
            }}> CLick here to Order ICe Creams</button>  </div>
        <div className="col-md-6">
          <input type="search"
            value={SEARCH} placeholder="search your fav restaurents here"
            onChange={(e) => {
              SetSearch(e.target.value)

            }} />
          <button className="btn search" onClick={
            () => {
              let SearchFood = RestaurentData.filter((s) => s.cuisines.includes(SEARCH));
              FilterD(SearchFood);
              console.log(SearchFood);
            }}>
            SEARCH
          </button>
        </div>
      </div>


    </div>

    <div className="rest"> {
      RestaurentData.map((details) => (
        <Link to={"menu/" + details.id} ><RestaurentComponent d={details} /> </Link>
      ))
    }
    </div>
  </div>

  )
}