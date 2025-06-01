import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { isValidEmail, isValidWebsite } from "@/lib/utils";

const ContactComponent = () => {
  const [loader, setLoader] = useState(false);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = async () => {
    const fullName = fullNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const website = websiteRef.current?.value || "";
    const message = messageRef.current?.value || "";

    const YOUR_SERVICE_ID = "service_8yly24d";
    const YOUR_TEMPLATE_ID = "template_kepf33p";
    const YOUR_PUBLIC_KEY = "lE7lQ9QlyJ5B4qION";

    if (!isValidEmail(email)) {
      const toastId = toast.error("Invalid Email Address");
      setTimeout(() => toast.dismiss(toastId), 3000);
      return;
    }

    if (!isValidWebsite(website)) {
      const toastId = toast.error("Invalid Website Address");
      setTimeout(() => toast.dismiss(toastId), 3000);
      return;
    }

    const formData = {
      from_name: fullName,
      from_email: email,
      to_name: "Bidyut Sikder",
      website: website,
      message: message,
    };

    try {
      setLoader(true);
      await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, {
        publicKey: YOUR_PUBLIC_KEY,
      });
      setLoader(false);
      const toastId = toast.success("Your Message has been sent successfully");
      setTimeout(() => toast.dismiss(toastId), 3000);

      if (fullNameRef.current) fullNameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (websiteRef.current) websiteRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } catch (error) {
      setLoader(false);
      const toastId = toast.error("Failed to send message. Try again later.");
      setTimeout(() => toast.dismiss(toastId), 3000);
    }
  };

  return (
    <motion.div
      className="mt-10 space-y-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Contact Form */}
      <Card className="dark:bg-card">
        <CardContent className="p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-btn dark:text-white">
            Let’s Chat<span className="text-theme">!</span>
          </h1>
          <p className="text-sm  mt-2">
            Feel free to contact us through Email or LinkedIn if you prefer!
          </p>

          <div className="grid gap-4 mt-6 md:grid-cols-2">
            <div>
              <label className="block mb-1 font-semibold text-sm text-muted-foreground">
                Full Name
              </label>
              <Input
                type="text"
                
                placeholder="John Doe"
                ref={fullNameRef}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-sm text-muted-foreground">
                Your Email
              </label>
              <Input
                type="email"
                
                placeholder="example@email.com"
                ref={emailRef}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1 font-semibold text-sm text-muted-foreground">
              Website Link
            </label>
            <Input
              type="text"
             
              placeholder="https://example.com"
              ref={websiteRef}
            />
          </div>

          <div className="mt-4">
            <label className="block mb-1 font-semibold text-sm text-muted-foreground">
              Message
            </label>
            <Textarea
              
              placeholder="Write your message here..."
              rows={6}
              ref={messageRef}
            />
          </div>

          <div className="mt-6">
            <Button
              disabled={loader}
              onClick={sendMessage}
              className="rounded-full px-6"
            >
              {loader ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Map Section */}
      <Card className="dark:bg-card">
        <CardContent>
          <iframe
            width="100%"
            className="sm:h-[500px] h-[300px] rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58762.28736611795!2d89.77806332577585!3d23.00015318141063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc29c3b07af57%3A0x1b95b14d7eebbcd1!2sGopalganj!5e0!3m2!1sen!2sbd!4v1732084515576!5m2!1sen!2sbd"
          ></iframe>
        </CardContent>
      </Card>

      {/* Contact Info Section */}
      <Card className="dark:bg-card shadow-xl rounded-2xl border border-border/50">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-btn dark:text-white">
            Need Help with a Project?
          </h2>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 text-sm text-text">
            <div>
              <p className="text-muted-foreground">Full Name</p>
              <p className="font-medium text-btn dark:text-white mt-1">
                Bidyut Sikder
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Email Address</p>
              <p className="font-medium text-btn dark:text-white mt-1">
                developerbidyut5@gmail.com
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Home Address</p>
              <p className="font-medium text-btn dark:text-white mt-1">
                Gopalgonj, Bangladesh
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Available for</p>
              <p className="font-medium text-btn dark:text-white mt-1">
                Remote & On-site Projects
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Expertise</p>
              <p className="font-medium text-btn dark:text-white mt-1">
                TypeScript, React, Expo, Next.js, Express.js
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Preferred Contact Method</p>
              <p className="font-medium text-btn dark:text-white mt-1">
                Email or LinkedIn
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40">
            <p className="text-sm text-muted-foreground">
              I’m open to freelance or full-time opportunities. Feel free to
              reach out with project ideas, collaborations, or job offers!
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactComponent;


//////////////////////
// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
// import { motion } from "framer-motion";

// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";


// import { isValidEmail, isValidWebsite } from "@/lib/utils";

// const ContactComponent = () => {
//   const [loader, setLoader] = useState(false);

//   const fullNameRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const websiteRef = useRef<HTMLInputElement>(null);
//   const messageRef = useRef<HTMLTextAreaElement>(null);

//   const sendMessage = async () => {
//     const fullName = fullNameRef.current?.value || "";
//     const email = emailRef.current?.value || "";
//     const website = websiteRef.current?.value || "";
//     const message = messageRef.current?.value || "";

//     const YOUR_SERVICE_ID = "service_8yly24d";
//     const YOUR_TEMPLATE_ID = "template_kepf33p";
//     const YOUR_PUBLIC_KEY = "lE7lQ9QlyJ5B4qION";

//     if (!isValidEmail(email)) {
//       const toastId = toast.error("Invalid Email Address");
//       setTimeout(() => toast.dismiss(toastId), 3000);
//       return;
//     }

//     if (!isValidWebsite(website)) {
//       const toastId = toast.error("Invalid Website Address");
//       setTimeout(() => toast.dismiss(toastId), 3000);
//       return;
//     }

//     const formData = {
//       from_name: fullName,
//       from_email: email,
//       to_name: "Bidyut Sikder",
//       website: website,
//       message: message,
//     };

//     try {
//       setLoader(true);
//       await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, {
//         publicKey: YOUR_PUBLIC_KEY,
//       });
//       setLoader(false);
//       const toastId = toast.success("Your Message has been sent successfully");
//       setTimeout(() => toast.dismiss(toastId), 3000);

//       if (fullNameRef.current) fullNameRef.current.value = "";
//       if (emailRef.current) emailRef.current.value = "";
//       if (websiteRef.current) websiteRef.current.value = "";
//       if (messageRef.current) messageRef.current.value = "";
//     } catch (error) {
//       setLoader(false);
//       const toastId = toast.error("Failed to send message. Try again later.");
//       setTimeout(() => toast.dismiss(toastId), 3000);
//     }
//   };

//   return (
//     <motion.div
//       className="mt-10 space-y-8"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {/* Contact Form */}
//       <Card className="dark:bg-card">
//         <CardContent className="p-6">
//           <h1 className="text-4xl md:text-6xl font-bold text-btn dark:text-white">
//             Let’s Chat<span className="text-theme">!</span>
//           </h1>
//           <p className="text-sm  mt-2">
//             Feel free to contact us through Email or Linkedin if you prefer!
//           </p>

//           <div className="grid gap-4 mt-6 md:grid-cols-2">
//             <Input
//               type="text"
//               className="font-semibold"
//               placeholder="Full Name"
//               ref={fullNameRef}
//             />
//             <Input
//               type="email"
//               className="font-semibold"
//               placeholder="Your Email"
//               ref={emailRef}
//             />
//           </div>

//           <div className="mt-4">
//             <Input
//               type="text"
//               className="font-semibold"
//               placeholder="Website Link"
//               ref={websiteRef}
//             />
//           </div>

//           <div className="mt-4">
//             <Textarea
//               className="font-semibold"
//               placeholder="Write your message here..."
//               rows={6}
//               ref={messageRef}
//             />
//           </div>



//           <div className="mt-6">
//             <Button
//               disabled={loader}
//               onClick={sendMessage}
//               className="rounded-full px-6"
//             >
//               {loader ? "Sending..." : "Send Message"}
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Map Section */}
//       <Card className="dark:bg-card">
//         <CardContent className="">
//           <iframe
//             width="100%"
//             // height="500px"
//             className="  sm:h-[500px] h-[300px] rounded-lg"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58762.28736611795!2d89.77806332577585!3d23.00015318141063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc29c3b07af57%3A0x1b95b14d7eebbcd1!2sGopalganj!5e0!3m2!1sen!2sbd!4v1732084515576!5m2!1sen!2sbd"
//           ></iframe>
//         </CardContent>
//       </Card>

//       <Card className="dark:bg-card shadow-xl rounded-2xl border border-border/50">
//         <CardContent className="p-6 space-y-6">
//           <h2 className="text-2xl font-semibold text-btn dark:text-white">
//             Need Help with a Project?
//           </h2>

//           <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 text-sm text-text">
//             <div>
//               <p className="text-muted-foreground">Full Name</p>
//               <p className="font-medium text-btn dark:text-white mt-1">
//                 Bidyut Sikder
//               </p>
//             </div>
//             <div>
//               <p className="text-muted-foreground">Email Address</p>
//               <p className="font-medium text-btn dark:text-white mt-1">
//                 developerbidyut5@gmail.com
//               </p>
//             </div>
//             <div>
//               <p className="text-muted-foreground">Home Address</p>
//               <p className="font-medium text-btn dark:text-white mt-1">
//                 Gopalgonj, Bangladesh
//               </p>
//             </div>
//             <div>
//               <p className="text-muted-foreground">Available for</p>
//               <p className="font-medium text-btn dark:text-white mt-1">
//                 Remote & On-site Projects
//               </p>
//             </div>
//             <div>
//               <p className="text-muted-foreground">Expertise</p>
//               <p className="font-medium text-btn dark:text-white mt-1">
//                 TypeScript, React, Expo, Next.js, Express.js
//               </p>
//             </div>
//             <div>
//               <p className="text-muted-foreground">Preferred Contact Method</p>
//               <p className="font-medium text-btn dark:text-white mt-1">
//                 Email or LinkedIn
//               </p>
//             </div>
//           </div>

//           <div className="pt-4 border-t border-border/40">
//             <p className="text-sm text-muted-foreground">
//               I’m open to freelance or full-time opportunities. Feel free to
//               reach out with project ideas, collaborations, or job offers!
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export default ContactComponent;
