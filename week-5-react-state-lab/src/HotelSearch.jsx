import { useState } from "react";

export default function HotelSearch() {
    const hotels = [
        {
            name: "Harbour Hotel",
            price: 85,
            swimmingPool: false,
            breakfast: true
        },

        {
            name: "Riverside Hotel",
            price: 125,
            swimmingPool: true,
            breakfast: true
        },

        {
            name: "City Budget Hotel",
            price: 70,
            swimmingPool: false,
            breakfast: false
        }
    ];

    const [activeFilters, setActiveFilters] = useState([]);

    function toggleUnder100() {
        if (activeFilters.includes("under100")) {
            setActiveFilters(
                activeFilters.filter((filter) => filter !== "under100")
            );
        } else {
            setActiveFilters([...activeFilters, "under100"]);
        }
    }

    function toggleSwimmingPool() {
        if (activeFilters.includes("swimmingPool")) {
            setActiveFilters(
                activeFilters.filter((filter) => filter !== "swimmingPool")
            );
        } else {
            setActiveFilters([...activeFilters, "swimmingPool"]);
        }
    }

    function toggleBreakfast() {
        if (activeFilters.includes("breakfast")) {
            setActiveFilters(
                activeFilters.filter((filter) => filter !== "breakfast")
            );
        } else {
            setActiveFilters([...activeFilters, "breakfast"]);
        }
    }

    const filteredHotels = hotels.filter((hotel) => {
        if (
            activeFilters.includes("under100") &&
            hotel.price >= 100
        ) {
            return false;
        }

        if (
            activeFilters.includes("swimmingPool") &&
            !hotel.swimmingPool
        ) {
            return false;
        }

        if (
            activeFilters.includes("breakfast") &&
            !hotel.breakfast
        ) {
            return false;
        }

        return true;
    });

    return (
        <div>
            <h2>Available Hotels</h2>

            <button onClick={toggleUnder100}>
                Under £100
            </button>

            <button onClick={toggleSwimmingPool}>
                Swimming Pool
            </button>

            <button onClick={toggleBreakfast}>
                Breakfast Included
            </button>

            {filteredHotels.map((hotel) => (
                < p key={hotel.name}>
                    {hotel.name} - £ {hotel.price}
                </p>
            ))}
        </div>
    );
}