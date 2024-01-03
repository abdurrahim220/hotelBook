import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "../DetailsSection/DetailsSection";
import TypesSection from "../TypesSection/TypesSection";
import FacilitiesSection from "../FacilitiesSection/FacilitiesSection";
import GuestSection from "../GuestSection/GuestSection";
import ImageFiels from "../ImageFiels/ImageFiels";
import { HotelType } from "../../../config/hotel-options-config";
import { useEffect } from "react";

export type HotelFromData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  imageUrls: string[];
  adultCount: number;
  childCount: number;
};

type Props = {
  hotel?: HotelType;
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};

const ManageHotelForms = ({ onSave, isLoading, hotel }: Props) => {
  const formMethods = useForm<HotelFromData>();

  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  const onSubmit = handleSubmit((formDataJson: HotelFromData) => {
    // create new formData object & call our api
    // console.log(formDataJson)
    const formData = new FormData();

    if (hotel) {
      formData.append("hotelId", hotel._id);
    }

    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());

    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });


    // []
    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    // console.log(formData)

    onSave(formData);
  });

  return (
    <div>
      <FormProvider {...formMethods}>
        <form className="flex flex-col gap-10" onSubmit={onSubmit}>
          <DetailsSection />
          <TypesSection />
          <FacilitiesSection />
          <GuestSection />
          <ImageFiels />
          <span className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-md bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:bg-gray-500"
            >
              {isLoading ? "Saving.." : "Save"}
            </button>
          </span>
        </form>
      </FormProvider>
    </div>
  );
};

export default ManageHotelForms;
