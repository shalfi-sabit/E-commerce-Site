import ContactMailIcon from "../../../assets/icons/ContactMailIcon";
import ContactPhoneIcon from "../../../assets/icons/ContactPhoneIcon";

const ContactInfo = () => {
  return (
    <div className="w-full lg:w-[30%] flex lg:flex-col justify-between items-start gap-4  shadow-md p-[3%] text-[10px] xs:text-[12px] md:text-sm text-wrap">
      <div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 font-semibold">
          <ContactPhoneIcon />
          <h3 className="text-[12px] sm:text-sm lg:text-lg">Call To Us</h3>
        </div>
        <div className="flex flex-col gap-3 my-[5%] font-medium pb-5">
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
      </div>

      <div className="w-[1px] lg:w-full h-[150px] lg:h-[1px] bg-slate-300"></div>

      <div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 font-semibold">
          <ContactMailIcon />
          <h3 className="text-[12px] sm:text-sm md:text-base lg:text-lg">
            Write To US
          </h3>
        </div>
        <div className="flex flex-col gap-3 my-[5%] font-medium">
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
