/* eslint-disable @typescript-eslint/no-unused-vars */
import NavBar from "../components/navigation/NavBar";
import NavigationTab from "../components/navigation/NavigationTab";
import Footer from "../components/Home/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { products } from "../Redux/dataApi";
import useDecrementOrRemoveFromCard from "../hooks/decrementOrRemoveFromCard";
import useDischargeTheCard from "../hooks/dischargeTheCard";
import { Link } from "react-router-dom";

const headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "UVNMdFFCZlFpeWZIMmRBbll1MjdnZ0lLaDNRbW1pZUY5bWR0MjBLVQ=="
);

const requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow" as RequestRedirect,
};

interface Country {
  name: string;
  iso2: string;
}

interface State {
  name: string;
  iso2: string;
}

interface City {
  name: string;
}

function formatNumber(num: number) {
  // Ensure the number has at least three decimal places
  const fixedNum = num.toFixed(3);
  // Remove unnecessary trailing zeros
  const formattedNum = parseFloat(fixedNum);
  return formattedNum.toString();
}

const calculateTotalPrice = (products: products[]): number => {
  return products.reduce((total, product) => {
    let productTotal = product.price * product.quantity!;
    if (product.coupon !== undefined && product.coupon !== null) {
      productTotal -= productTotal * (product.coupon / 100);
    }
    return total + productTotal;
  }, 0);
};

const CheckOut = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCountryIso2, setSelectedCountryIso2] = useState<string>("");
  const [selectedStateIso2, setSelectedStateIso2] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [valideFrom, setValideFrom] = useState<boolean>(false);

  const { card } = useSelector((state) => state.shoppingcard);
  const decrementOrRemoveFromCard = useDecrementOrRemoveFromCard();
  const dischargeTheCard = useDischargeTheCard();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "Select...",
    state: "Select...",
    city: "Select...",
    email: "",
    phone: "",
    zipCode: "",
  });
  const [formErrors, setFormErrors] = useState<any>({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://api.countrystatecity.in/v1/countries",
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.text();
        const data = JSON.parse(result);
        const countriesData = data.map((item: any) => ({
          name: item.name,
          iso2: item.iso2,
        }));
        setCountries(countriesData);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCheckboxChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleCountryChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedName = event.target.value;
    const selectedCountry = countries.find(
      (country) => country.name === selectedName
    );
    if (selectedCountry) {
      const iso2 = selectedCountry.iso2;
      setSelectedCountryIso2(iso2);
      setStates([]); // Reset states
      setCities([]); // Reset cities
      try {
        const response = await fetch(
          `https://api.countrystatecity.in/v1/countries/${iso2}/states`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.text();
        const data = JSON.parse(result);
        const statesData = data.map((item: any) => ({
          name: item.name,
          iso2: item.iso2,
        }));
        setStates(statesData);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const handleStateChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedName = event.target.value;
    const selectedState = states.find((state) => state.name === selectedName);
    if (selectedState) {
      const iso2 = selectedState.iso2;
      setSelectedStateIso2(iso2);
      setCities([]); // Reset cities
      try {
        const response = await fetch(
          `https://api.countrystatecity.in/v1/countries/${selectedCountryIso2}/states/${iso2}/cities`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.text();
        const data = JSON.parse(result);
        const citiesData = data.map((item: any) => ({
          name: item.name,
        }));
        setCities(citiesData);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const errors: any = {};

    if (!formValues.firstName) {
      errors.firstName = "First name is required";
    }
    if (!formValues.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!formValues.address) {
      errors.address = "Address is required";
    }
    if (!formValues.country || formValues.country === "Select...") {
      errors.country = "Country is required";
    }
    if (!formValues.state || formValues.state === "Select...") {
      errors.state = "State is required";
    }
    if (!formValues.city || formValues.city === "Select...") {
      errors.city = "City is required";
    }
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }
    if (!formValues.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formValues.phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!formValues.zipCode) {
      errors.zipCode = "Zip Code is required";
    } else if (!/^\d{5,10}$/.test(formValues.zipCode)) {
      errors.zipCode = "Zip Code is invalid";
    }

    console.log(errors);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      // Proceed to checkout
      setValideFrom(true);
      dischargeTheCard();
    }
  };

  const handleButtonClick = () => {
    document
      .getElementById("checkoutForm")
      .dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  };

  return (
    <>
      <NavBar />
      <NavigationTab main="Checkout" tab={["Shopping Card"]} />
      <div className="px-[26px] py-[72px] flex items-start gap-[25px] w-full justify-center">
        {!valideFrom ? (
          <>
            <form
              id="checkoutForm"
              onSubmit={handleSubmit}
              action=""
              method="post"
              className="w-[67.5%] flex flex-col gap-[40px]"
            >
              <div className="w-full flex flex-col gap-[25px]">
                <h3 className="w-full text-[#191C1F] text-[18px] font-semibold">
                  Billing Information{" "}
                </h3>
                <div className="w-full flex gap-[16px] flex-wrap">
                  <div className="flex gap-[16px] w-full items-end">
                    {" "}
                    <div className="flex flex-col items-start gap-[8px] ">
                      <label
                        htmlFor="firstName"
                        className="text-[14px] text-[#191C1F] leading-[20px]"
                      >
                        User name
                      </label>
                      <div className="flex items-start gap-[16px] w-full">
                        <div className="flex flex-col items-start gap-[9px] w-full">
                          <input
                            placeholder="First name"
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formValues.firstName}
                            onChange={handleInputChange}
                            className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px]"
                          />
                          {formErrors.firstName && (
                            <p className="text-red-500 text-sm">
                              {formErrors.firstName}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-start gap-[9px] w-full">
                          <input
                            placeholder="Last name"
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formValues.lastName}
                            onChange={handleInputChange}
                            className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] "
                          />
                          {formErrors.lastName && (
                            <p className="text-red-500 text-sm">
                              {formErrors.lastName}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[8px] w-[51%]">
                      <label
                        htmlFor="company"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        Company Name{" "}
                        <span className="text-[14px] text-[#929FA5] leading-[20px]">
                          (Optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[8px] w-full">
                    <label
                      htmlFor="address"
                      className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formValues.address}
                      onChange={handleInputChange}
                      className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full"
                    />
                    {formErrors.address && (
                      <p className="text-red-500 text-sm">
                        {formErrors.address}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-[16px] w-full">
                    <div className="flex flex-col items-start gap-[8px] w-[25%]">
                      <label
                        htmlFor="country"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        Country
                      </label>
                      <select
                        defaultValue={"Select..."}
                        name="country"
                        id="country"
                        value={formValues.country}
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full text-[#ADB7BC]"
                        onChange={(eo) => {
                          handleCountryChange(eo);
                          handleInputChange(eo);
                        }}
                      >
                        <option value="Select..." disabled>
                          Select...
                        </option>
                        {countries.map((country, index: number) => {
                          return (
                            <option key={index} value={country.name}>
                              {country.name}
                            </option>
                          );
                        })}
                      </select>
                      {formErrors.country && (
                        <p className="text-red-500 text-sm">
                          {formErrors.country}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-start gap-[8px] w-[25%]">
                      <label
                        htmlFor="region"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        Region/State
                      </label>
                      <select
                        defaultValue={"Select..."}
                        name="state"
                        id="state"
                        value={formValues.state}
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full text-[#ADB7BC]"
                        onChange={(eo) => {
                          handleStateChange(eo);
                          handleInputChange(eo);
                        }}
                      >
                        <option value="Select..." disabled>
                          Select...
                        </option>
                        {states.length !== 0 &&
                          states.map((state: State, index: number) => {
                            return (
                              <option value={state.name} key={index}>
                                {state.name}
                              </option>
                            );
                          })}
                      </select>
                      {formErrors.state && (
                        <p className="text-red-500 text-sm">
                          {formErrors.state}
                        </p>
                      )}
                    </div>{" "}
                    <div className="flex flex-col items-start gap-[8px] w-[25%]">
                      <label
                        htmlFor="city"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        City
                      </label>
                      <select
                        defaultValue={"Select..."}
                        name="city"
                        id="city"
                        value={formValues.city}
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full text-[#ADB7BC]"
                        onChange={(eo) => {
                          handleCountryChange(eo);
                          handleInputChange(eo);
                        }}
                      >
                        <option value="Select..." disabled>
                          Select...
                        </option>

                        {cities.length !== 0 &&
                          cities.map((city: City, index: number) => {
                            return (
                              <option value={city.name} key={index}>
                                {city.name}
                              </option>
                            );
                          })}
                      </select>
                      {formErrors.city && (
                        <p className="text-red-500 text-sm">
                          {formErrors.city}
                        </p>
                      )}
                    </div>{" "}
                    <div className="flex flex-col items-start gap-[8px] w-[25%]">
                      <label
                        htmlFor="zipCode"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        value={formValues.zipCode}
                        onChange={handleInputChange}
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full text-[#ADB7BC]"
                      />
                      {formErrors.zipCode && (
                        <p className="text-red-500 text-sm">
                          {formErrors.zipCode}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-[16px] w-full">
                    <div className="flex flex-col items-start gap-[8px] w-[50%]">
                      <label
                        htmlFor="email"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full"
                        value={formValues.email}
                        onChange={handleInputChange}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm">
                          {formErrors.email}
                        </p>
                      )}
                    </div>{" "}
                    <div className="flex flex-col items-start gap-[8px] w-[50%]">
                      <label
                        htmlFor="phone"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full"
                        value={formValues.phone}
                        onChange={handleInputChange}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[12px]">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="appearance-none cursor-pointer checked:border-[6px] checked:border-[#FA8232] w-[20px] h-[20px] rounded-[2px] border-[#C9CFD2] border-[1px]"
                  />
                  <span>Ship into different address</span>
                </div>
              </div>
              <div className="py-[20px] flex flex-col gap-[20px] border-[1px] border-[#E4E7E9] rounded-[4px]">
                <h3 className="px-[32px] w-full text-[#191C1F] text-[18px] font-semibold">
                  Payment Option{" "}
                </h3>
                <div className="border-t-[1px] border-[#E4E7E9] w-full"></div>
                <div className="px-[32px] flex items-center w-full justify-evenly">
                  <div className="flex flex-col gap-[16px] items-center">
                    <div className="flex flex-col gap-[8px] items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <g id="Regular/CurrencyDollar">
                          <path
                            id="Vector"
                            d="M16 3V29"
                            stroke="#FA8232"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            id="Vector_2"
                            d="M23 11C23 10.3434 22.8707 9.69321 22.6194 9.08658C22.3681 8.47996 21.9998 7.92876 21.5355 7.46447C21.0712 7.00017 20.52 6.63188 19.9134 6.3806C19.3068 6.12933 18.6566 6 18 6H13.5C12.1739 6 10.9021 6.52678 9.96447 7.46447C9.02678 8.40215 8.5 9.67392 8.5 11C8.5 12.3261 9.02678 13.5979 9.96447 14.5355C10.9021 15.4732 12.1739 16 13.5 16H19C20.3261 16 21.5979 16.5268 22.5355 17.4645C23.4732 18.4021 24 19.6739 24 21C24 22.3261 23.4732 23.5979 22.5355 24.5355C21.5979 25.4732 20.3261 26 19 26H13C11.6739 26 10.4021 25.4732 9.46447 24.5355C8.52678 23.5979 8 22.3261 8 21"
                            stroke="#FA8232"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      <span className="text-[#191C1F] text-[14px] leading-[20px] font-semibold w-[160px] text-center">
                        Cash on Delivery
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      id="cashOnDelivery"
                      checked={selectedOption === "cashOnDelivery"}
                      className="appearance-none cursor-pointer h-[20px] w-[20px] border border-[#C9CFD2] rounded-[50%] checked:border-[6px] checked:border-[#FA8232] focus:outline-none"
                      onChange={() => handleCheckboxChange("cashOnDelivery")}
                    />
                  </div>
                  <div className="h-[96px] w-[1px] bg-[#E4E7E9]"></div>
                  <div className="flex flex-col gap-[16px] items-center">
                    <div className="flex flex-col gap-[8px] items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <g id="Duotone/CreditCard">
                          <path
                            id="Vector"
                            opacity="0.2"
                            d="M4 13.1123H28V23.9998L4 23.9998L4 13.1123Z"
                            fill="#FA8232"
                            stroke="#FA8232"
                            strokeWidth="2"
                          />
                          <path
                            id="Vector_2"
                            d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z"
                            stroke="#FA8232"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            id="Vector_3"
                            d="M21 21H25"
                            stroke="#FA8232"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            id="Vector_4"
                            d="M15 21H17"
                            stroke="#FA8232"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            id="Vector_5"
                            d="M3 12.1123H29"
                            stroke="#FA8232"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      <span className="text-[#191C1F] text-[14px] leading-[20px] font-semibold w-[160px] text-center">
                        Debid/Credit Card
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="appearance-none cursor-pointer h-[20px] w-[20px] border border-[#C9CFD2] rounded-[50%] checked:border-[6px] checked:border-[#FA8232] focus:outline-none"
                      checked={selectedOption === "debitCreditCard"}
                      onChange={() => handleCheckboxChange("debitCreditCard")}
                    />
                  </div>
                </div>
                <div className="border-t-[1px] border-[#E4E7E9] w-full"></div>

                <div
                  className={`px-[32px] flex flex-wrap w-full gap-[16px] ${
                    selectedOption === "cashOnDelivery"
                      ? " text-gray-500 opacity-40 cursor-not-allowed pointer-events-none"
                      : null
                  }`}
                >
                  <div className="flex flex-col items-start gap-[8px] w-full">
                    <label
                      htmlFor="cardName"
                      className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      id="cardName"
                      className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[8px] w-full">
                    <label
                      htmlFor="cardName"
                      className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                    >
                      Card Number
                    </label>
                    <input
                      type="number"
                      name="cardNbr"
                      id="cardNbr"
                      className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full"
                    />
                  </div>
                  <div className="flex gap-[16px] w-full">
                    <div className="flex flex-col items-start gap-[8px] w-[50%]">
                      <label
                        htmlFor="expireDate"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        Expire Date
                      </label>
                      <input
                        type="date"
                        name="expireDate"
                        id="expireDate"
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full"
                      />
                    </div>{" "}
                    <div className="flex flex-col items-start gap-[8px] w-[50%]">
                      <label
                        htmlFor="cvc"
                        className="text-[14px] text-[#191C1F] leading-[20px] flex items-center gap-[5px]"
                      >
                        CVC
                      </label>
                      <input
                        type="number"
                        name="cvc"
                        id="cvc"
                        className="border-[1px] border-[#E4E7E9] rounded-[2px] px-[16px] py-[12px] w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[24px] w-full">
                <h3 className="w-full text-[#191C1F] text-[18px] font-semibold">
                  Additional Information{" "}
                </h3>
                <div className="flex flex-col gap-[8px] w-full">
                  <label
                    htmlFor=""
                    className="flex items-center gap-[5px] text-[#191C1F] text-[14px] leading-[20px] "
                  >
                    Order Notes{" "}
                    <span className="text-[#77878F] text-[14px] leading-[20px]">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows={5}
                    className="w-full border-[#E4E7E9] border rounded-[2px] py-[12px] px-[16px]"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  ></textarea>
                </div>
              </div>
            </form>
            <div className="w-[32.5% px-[24px] border-[#E4E7E9] border-[1px] rounded-[4px] flex flex-col items-center pb-[24px]">
              <h3 className="w-full  py-[20px] text-[#191C1F] text-[18px] font-semibold">
                Order Summery
              </h3>
              <div className="flex flex-col gap-[16px] pb-[24px]">
                {card.map((product: products, index: number) => {
                  return (
                    <div
                      className="flex items-center gap-[16px] w-full"
                      key={index}
                    >
                      <img
                        src={product.imageUrl}
                        alt="product"
                        className="w-[64px] h-[64px]"
                      />
                      <div className="flex flex-col items-start gap-[6px]">
                        <p className="text-[#191C1F] text-[14px] leading-[20px] w-[296px] text-ellipsis whitespace-nowrap overflow-hidden">
                          {product.desc}
                        </p>
                        <div className="flex items-center gap-[6px]">
                          <span
                            className="text-[#5F6C72] text-[14px] leading-[20px] cursor-pointer"
                            onClick={() => {
                              decrementOrRemoveFromCard(product.id);
                            }}
                          >
                            {product.quantity} x
                          </span>
                          <span className="text-[#2DA5F3] text-[14px] leading-[20px] font-semibold">
                            $
                            {product.coupon === null ||
                            product.coupon === undefined
                              ? product.price
                              : ((100 - product.coupon) *
                                  Number(product.price)) /
                                100}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className=" flex flex-col gap-[16px] pb-[24px] w-full">
                <div className="flex flex-col gap-[12px] w-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#5F6C72] text-[14px] leading-[20px]">
                      Sub-total
                    </span>
                    <span className=" text-[#191C1F] text-[14px] leading-[20px] font-semibold">
                      {formatNumber(calculateTotalPrice(card))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#5F6C72] text-[14px] leading-[20px]">
                      Shipping
                    </span>
                    <span className=" text-[#191C1F] text-[14px] leading-[20px] font-semibold">
                      Free
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#5F6C72] text-[14px] leading-[20px]">
                      Tax
                    </span>
                    <span className=" text-[#191C1F] text-[14px] leading-[20px] font-semibold">
                      ${formatNumber((calculateTotalPrice(card) * 2.5) / 100)}
                    </span>
                  </div>
                </div>
                <div className="w-full h-[1px] border-[#E4E7E9] border-[1px]"></div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#191C1F]">Total</span>
                  <span className=" text-[#191C1F] font-semibold">
                    $
                    {formatNumber(
                      calculateTotalPrice(card) +
                        (calculateTotalPrice(card) * 2.5) / 100
                    )}
                  </span>
                </div>
              </div>
              <button
                disabled={card.length !== 0 ? false : true}
                onClick={handleButtonClick}
                className={`rounded-[3px] flex items-center gap-[12px] leading-[56px] px-[32px] tracking-[0.192px] uppercase text-white ${
                  card.length !== 0
                    ? "bg-[#FA8232]"
                    : "bg-[#6c757d] cursor-not-allowed"
                } `}
              >
                Proceed to Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="Regular/ArrowRight">
                    <path
                      id="Vector"
                      d="M3.75 12H20.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-[32px] flex-col">
            <div className="flex items-center gap-[24px] flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
              >
                <g id="Duotone/CheckCircle">
                  <path
                    id="Vector"
                    opacity="0.2"
                    d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z"
                    fill="#2DB324"
                  />
                  <path
                    id="Vector_2"
                    d="M59.125 35.75L38.9469 55L28.875 45.375"
                    stroke="#2DB324"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z"
                    stroke="#2DB324"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <div className="flex items-center gap-[12px] flex-col">
                <h2 className="text-[#191C1F] text-[24px] font-semibold leading-[32px]">
                  Your order is successfully place
                </h2>
                <p className="w-[424px] text-[#5F6C72] text-[14px] leading-[20px] text-center">
                  Thank you for your order! We'll keep you updated on the status
                  of your shipment daily, ensuring you stay informed every step
                  of the way.
                </p>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <button className="rounded-[2px] flex items-center gap-[8px] border border-[#FFE7D6] px-[24px] leading-[48px] text-[#FA8232] text-[14px] tracking-[0.168px] uppercase font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g id="Regular/Stack" clip-path="url(#clip0_2504_1467)">
                    <path
                      id="Vector"
                      d="M2.5 13.75L10 18.125L17.5 13.75"
                      stroke="#FA8232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M2.5 10L10 14.375L17.5 10"
                      stroke="#FA8232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z"
                      stroke="#FA8232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2504_1467">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Go to Dashboard
              </button>
              <Link to="/">
                <button className="rounded-[2px] flex items-center gap-[8px] bg-[#FA8232] px-[24px] leading-[48px] text-white text-[14px] tracking-[0.168px] uppercase font-semibold">
                  Go back shopping
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="Regular/ArrowRight">
                      <path
                        id="Vector"
                        d="M3.125 10H16.875"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M11.25 4.375L16.875 10L11.25 15.625"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
