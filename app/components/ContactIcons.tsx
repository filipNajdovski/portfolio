"use client"
import Image from "next/image"
import call from "./../../images/icons/call.svg"
import mail from "./../../images/icons/email.svg"
import linkedIn from "./../../images/icons/linkedin.svg"
import whatsApp from "./../../images/icons/whatsapp.svg"


function ContactIcons() {
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-4 content-center">
        <div className="contact-card m-auto self-center w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] bg-gray-400/[0.6] rounded-xl flex justify-center items-center">
            <a href="tel:+38976737248" target="_blank">
                <Image src={call} width={150} height={150} alt={"call"} />
            </a>
        </div>
        <div className="contact-card m-auto self-center w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] bg-gray-400/[0.6] rounded-xl flex justify-center items-center">
            <a href="mailto:filipnajdovski95@gmail.com" target="_blank">
                <Image src={mail} width={200} height={200} alt={"mail"} />
            </a>
        </div>
        <div className="contact-card m-auto self-center w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] bg-gray-400/[0.6] rounded-xl flex justify-center items-center">
            <a href="https://wa.me/38976737248?text=I%20saw%20your%20profile%20and%20would%20like%20to%20cooporate" target="_blank">
                <Image src={whatsApp} width={200} height={200} alt={"whatsApp"} />
            </a>
        </div>
        <div className="contact-card m-auto self-center w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] bg-gray-400/[0.6] rounded-xl flex justify-center items-center">
            <a href="https://www.linkedin.com/in/filipnajdovski96/" target="_blank">
                <Image src={linkedIn} width={140} height={140} alt={"linkedIn"} />
            </a>
        </div>
    </div>
  )
}
export default ContactIcons