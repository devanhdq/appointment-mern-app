import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Appointment = () => {
  const { doctorId } = useParams();

  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === doctorId);

    setDocInfo(docInfo);

    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, doctorId]);

  return <div></div>;
};

export default Appointment;
