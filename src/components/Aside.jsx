import {
  RiChat3Line,
  RiMap2Line,
  RiPhoneLine,
  RiFacebookBoxLine,
  RiTwitterXFill,
  RiLinkedinBoxLine,
} from "react-icons/ri";

function Aside() {
  const contactInfo = [
    {
      id: 0,
      title: "Chat to us",
      description: "Our friendly team",
      action: "hi@untitledui.com",
      icon: RiChat3Line,
    },
    {
      id: 1,
      title: "Visit us",
      description: "Come say hello at our office HQ",
      action: "100 Smith Street Collingwood VIC 3066 AU",
      icon: RiMap2Line,
    },
    {
      id: 2,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "+1 (555) 000-0000",
      icon: RiPhoneLine,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between">
      {/* contact info */}
      <section>
        <div className="mb-5">
          {contactInfo.map((info) => {
            return (
              <div className="mb-3" key={info.id}>
                <info.icon size={25} />
                <h3 className="text-lg font-bold">{info.title}</h3>
                <p className="mb-1 text-slate-700">{info.description}</p>
                <p className="mb-3">{info.action}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* social */}
      <section className="flex gap-2 text-lime-700">
        <RiFacebookBoxLine size={25} />
        <RiTwitterXFill size={25} />
        <RiLinkedinBoxLine size={25} />
      </section>
    </div>
  );
}

export default Aside;
