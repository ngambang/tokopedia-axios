const axios = require("axios")
var fs = require('fs');
var page = 1;
var keyword = "laptop";

axios({
  url: 'https://gql.tokopedia.com/',
  method: 'post',
  data: 
    {
        "operationName":"SearchProductQueryV4",
        "variables":{"params":`device=desktop&navsource=home&ob=23&page=${page}&q=${keyword}&related=true&rows=60&safe_search=false&scheme=https&shipping=&source=search&st=product&start=0&topads_bucket=true&user_postCode=&variants=`},
        "query":
            `query SearchProductQueryV4($params: String!) {
                    ace_search_product_v4(params: $params) {
                        header {
                        totalData
                        totalDataText
                        processTime
                        responseCode
                        errorMessage
                        additionalParams
                        keywordProcess
                        componentId
                        __typename
                        }
                        data {
                        isQuerySafe
                        ticker {
                            text
                            query
                            typeId
                            componentId
                            trackingOption
                            __typename
                        }
                        redirection {
                            redirectUrl
                            departmentId
                            __typename
                        }
                        related {
                            position
                            trackingOption
                            relatedKeyword
                            otherRelated {
                            keyword
                            url
                            product {
                                id
                                name
                                price
                                imageUrl
                                rating
                                countReview
                                url
                                priceStr
                                wishlist
                                shop {
                                city
                                isOfficial
                                isPowerBadge
                                __typename
                                }
                                ads {
                                adsId: id
                                productClickUrl
                                productWishlistUrl
                                shopClickUrl
                                productViewUrl
                                __typename
                                }
                                badges {
                                title
                                imageUrl
                                show
                                __typename
                                }
                                ratingAverage
                                labelGroups {
                                position
                                type
                                title
                                url
                                __typename
                                }
                                componentId
                                __typename
                            }
                            componentId
                            __typename
                            }
                            __typename
                        }
                        suggestion {
                            currentKeyword
                            suggestion
                            suggestionCount
                            instead
                            insteadCount
                            query
                            text
                            componentId
                            trackingOption
                            __typename
                        }
                        products {
                            id
                            name
                            ads {
                            adsId: id
                            productClickUrl
                            productWishlistUrl
                            productViewUrl
                            __typename
                            }
                            badges {
                            title
                            imageUrl
                            show
                            __typename
                            }
                            category: departmentId
                            categoryBreadcrumb
                            categoryId
                            categoryName
                            countReview
                            discountPercentage
                            gaKey
                            imageUrl
                            labelGroups {
                            position
                            title
                            type
                            url
                            __typename
                            }
                            originalPrice
                            price
                            priceRange
                            rating
                            ratingAverage
                            shop {
                            shopId: id
                            name
                            url
                            city
                            isOfficial
                            isPowerBadge
                            __typename
                            }
                            url
                            wishlist
                            sourceEngine: source_engine
                            __typename
                        }
                        __typename
                        }
                        __typename
                    }
                }`
    }
  ,
  headers: {
    'Content-Type': 'application/json',
    "accept":"*/*",
    "origin": "https://www.tokopedia.com"
  }
}).then((result) => {
    fs.writeFile(`./tokopedia.json`, JSON.stringify(result.data), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
    
});