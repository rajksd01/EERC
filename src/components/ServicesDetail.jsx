import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import services from "../API/services.json";
function ServicesDetail() {
  return (
    <>
      {/* Heading section for Services */}
      <div
        data-aos=" justify zoom-in"
        className="mx-1 text-5xl font-extrabold bg-slate-200 h-60"
      >
        <div className="title py-4 font-extrabold text-7xl  tracking-wide ">
          <h1 className="text-center"> Our Services</h1>{" "}
        </div>
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the most innovative teams
        </h2>
      </div>

      {/* Content section for rendering services from JSON  */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.services.map((service) => {
         
          return (
            //

            <div  key={service.serviceId}className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105">
              <div className="p-4 flex-1">
                <h3 className="flex items-center text-xl font-semibold text-black mb-2">
                  <i className="mr-2 fas fa-wrench"></i>
                  {service.name}
                </h3>
                <p className="text-back-200">{service.description}</p>
              </div>
              <div className="p-4">
                <div className="relative">
                  <img
                    src="../../public/images/services/1.png"
                    alt="Service 1"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            // </div>
          );
        })}
      </div>
    </>
  );
}

export default ServicesDetail;
