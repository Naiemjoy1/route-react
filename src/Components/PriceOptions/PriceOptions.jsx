import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions =[
        {
            "id": 1,
            "name": "Basic",
            "price": "$29.99",
            "features": [
              "Access to cardio area",
              "Standard gym equipment",
              "Locker room access"
            ]
          },
          {
            "id": 2,
            "name": "Standard",
            "price": "$49.99",
            "features": [
              "Access to cardio area",
              "Full gym equipment",
              "Locker room access",
              "Group fitness classes (limited)"
            ]
          },
          {
            "id": 3,
            "name": "Premium",
            "price": "$79.99",
            "features": [
              "Access to cardio area",
              "Full gym equipment",
              "Locker room access",
              "Unlimited group fitness classes",
              "Personal trainer session (1/month)"
            ]
          }
    ];

    return (
        <div className=" m-12">
            <h2 className=' text-5xl'>Best Price in the town</h2>
           <div className=" grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
           </div>
        </div>
    );
};

export default PriceOptions;