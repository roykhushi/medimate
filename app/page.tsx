import { Button } from "@/components/ui/button";
import { Clock, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Top Bar */}
      <div className="bg-emerald-900 text-white py-2 w-full">
        <div className="container mx-auto flex justify-center items-center text-sm px-4">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>1-800-123-456</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@medihelp.com</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>24/7 Emergency Room</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b w-full">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center py-4 px-4">
          <div className="text-2xl font-bold text-emerald-700 mb-4 sm:mb-0">MediMate</div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link href="#" className="text-gray-600 hover:text-emerald-600">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-600">Services</Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-600">About Us</Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-600">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-emerald-600">
        <div className="absolute inset-0">
          {/* <svg className="w-full h-full" width="1440" height="800" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor" fillOpacity="0.1"/>
          </svg> */}
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between py-16 gap-8">
            <div className="space-y-6 max-w-xl text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Take Care of Your Health
              </h1>
              <p className="text-emerald-50 text-lg">
                We provide high quality healthcare with modern equipment. You can easily reach us 24/7 at the numbers below.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
  <Button className="bg-white text-emerald-700 hover:bg-emerald-50">
    Get Started
  </Button>
  
  
  <a href="https://huggingface.co/spaces/Paulie-Aditya/MediMate" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" className="bg-transparent cursor-pointer border-white text-white hover:bg-white hover:text-emerald-700">
      Try Our AI Assistant
    </Button>
  </a>
</div>

            </div>
            <div className="relative w-full lg:w-1/2 h-[500px]">
              <Image
                src="/doctor-1.svg"
                alt="Healthcare Professional"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                Who We Are
                <span className="block h-1 w-20 bg-emerald-500 mt-2 mx-auto lg:mx-0"></span>
              </h2>
              <p className="text-gray-600">
  Our medical center provides comprehensive care with a team of experienced healthcare professionals. We&apos;re committed to delivering the highest quality medical services to our community.
</p>

              <ul className="space-y-3 inline-block text-left">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  Professional and experienced medical team
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  State-of-the-art medical equipment
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  24/7 emergency care services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
            <span className="block h-1 w-20 bg-emerald-500 mt-2 mx-auto"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {["👨‍⚕️ Qualified Doctors", "🏥 Emergency Care", "⏰ 24 Hour Service", "🔧 Operation Theater"].map(
              (feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{feature.split(" ")[0]}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.split(" ")[1]}
                  </h3>
                  <p className="text-gray-600">Description of the feature.</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>


      <section className="py-20 bg-white w-full">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Latest Blog Posts
        <span className="block h-1 w-20 bg-emerald-500 mt-2 mx-auto"></span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Understanding Healthcare", "Emergency Room Tips", "Healthy Living Practices"].map((title, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">
              Brief description of the blog post. Click to read more about {title}.
            </p>
            <Link href="#" className="text-emerald-600 hover:text-emerald-800">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-emerald-900 text-white w-full py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-emerald-300">MediMate</div>
        <div className="flex space-x-8 mt-4 sm:mt-0">
          <Link href="#" className="hover:text-emerald-500">Privacy Policy</Link>
          <Link href="#" className="hover:text-emerald-500">Terms of Service</Link>
          <Link href="#" className="hover:text-emerald-500">Contact</Link>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        <p>&copy; 2024 MediMate. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="text-emerald-500 hover:text-emerald-700">Facebook</Link>
          <Link href="#" className="text-emerald-500 hover:text-emerald-700">Twitter</Link>
          <Link href="#" className="text-emerald-500 hover:text-emerald-700">Instagram</Link>
        </div>
      </div>
    </div>
  </footer>


     
      
    </div>
  )
}

