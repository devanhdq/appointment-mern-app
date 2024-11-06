import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        {/* left section */}
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Totam facere aperiam suscipit architecto maxime a quae tempora
            molestias illum eveniet. Error illo ut fugiat non qui animi
            temporibus quod hic tenetur est. Numquam similique voluptates qui
            nam recusandae!
          </p>
        </div>

        {/* center section */}
        <div className="">
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* right section */}
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+123 123 123</li>
            <li>about@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copy right */}
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">Copyright © 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
