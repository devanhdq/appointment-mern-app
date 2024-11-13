import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { doctorId } = useParams();

  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUD", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [doctorSlots, setDoctorSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === doctorId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDoctorSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment current time by 30minute
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDoctorSlots((pre) => [...pre, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, doctorId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {}, [doctorSlots]);
  return (
    docInfo && (
      <div>
        {/*  Doctor Detail*/}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              src={docInfo.image}
              alt=""
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>
          {/* Doctor information: name, degree, experience */}
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img src={assets.verified_icon} alt="" className="w-5" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 to-gray-600">
              <p className="">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* Doctor About */}
            <div className="">
              <p className="flex items-center gap-1 text-sm font-medium to-gray-900 mt-3 ">
                About
                <img src={assets.info_icon} alt="" className="" />
              </p>
              <p className="text-sm to-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:
              <span className="text-gray-600">
                {currencySymbol} {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium to-gray-700">
          <p className="">Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {doctorSlots.length &&
              doctorSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer 
                    ${
                      slotIndex === index
                        ? "bg-primary text-white"
                        : "border bg-gray-200"
                    }`}
                  key={index}
                >
                  <p className="">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p className="">{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {doctorSlots.length &&
              doctorSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book an appointment
          </button>
        </div>

        {/* Listing Related Doctors */}
        <RelatedDoctors docId={doctorId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
