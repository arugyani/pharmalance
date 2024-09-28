"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Microscope,
  Pill,
  Stethoscope,
  TrendingUp,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { NavMobile } from "./nav-mobile";

export const routes = [
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Fellowship",
    path: "#fellowship",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Newsletter",
    path: "#newsletter",
  },
];

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1efff]">
      <header className="fixed left-0 right-0 md:inline-block">
        <div className="flex px-4 lg:px-6 h-16 items-center bg-white shadow-sm">
          <Link className="flex items-center justify-center" href="#">
            <Microscope className="h-8 w-8 text-[#9b91fc]" />
            <span className="ml-2 text-2xl font-bold text-[#9b91fc]">
              Pharmalance
            </span>
          </Link>

          <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
            {routes.map((route, i) => (
              <Link
                key={i}
                href={route.path}
                className="text-sm font-medium hover:text-[#9b91fc]"
              >
                {route.title}
              </Link>
            ))}
          </nav>

          <NavMobile />
        </div>
      </header>
      <main className="mt-12 md:mt-0 flex-1">
        <section className="w-full py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Precision Medicine & Biomarker Consulting
              </h1>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                Empowering the future of healthcare through expert guidance in
                precision medicine, biomarker development, and innovative drug
                discovery strategies.
              </p>
              <Button className="bg-[#9b91fc] hover:bg-[#8478d3] text-white rounded-full px-8 py-3 text-lg">
                Get Started
              </Button>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-48 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Pill className="h-12 w-12 text-[#9b91fc]" />
                <h3 className="text-xl font-bold">
                  Precision Medicine Strategy
                </h3>
                <p className="text-gray-600">
                  Tailored approaches for developing targeted therapies and
                  personalized treatment plans.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Stethoscope className="h-12 w-12 text-[#9b91fc]" />
                <h3 className="text-xl font-bold">Biomarker Development</h3>
                <p className="text-gray-600">
                  Identification and validation of biomarkers for drug efficacy
                  and patient selection.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <TrendingUp className="h-12 w-12 text-[#9b91fc]" />
                <h3 className="text-xl font-bold">
                  Market Analysis & Strategy
                </h3>
                <p className="text-gray-600">
                  In-depth analysis of the precision medicine landscape and
                  strategic planning for market entry.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="fellowship" className="w-full py-48 bg-[#9b91fc]-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <GraduationCap className="h-12 w-12 text-[#9b91fc]" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Undergraduate Fellowship Program
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Coming Soon: Our innovative fellowship program for
                undergraduates passionate about precision medicine and biomarker
                research.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Program Highlights:</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>
                    • Hands-on experience in cutting-edge precision medicine
                    research
                  </li>
                  <li>
                    • Mentorship from industry experts in biomarker development
                  </li>
                  <li>
                    • Exposure to various aspects of targeted drug development
                  </li>
                  <li>
                    • Networking opportunities with leading pharmaceutical
                    companies
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-500 italic">
                Stay tuned for more details and application information.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-48 bg-[#9b91fc] text-white">
          <div className="container flex justify-center items-center min-h-[300px] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
                Contact Us
              </h2>
              <p className="max-w-[600px] text-[#9b91fc]-100 md:text-xl">
                Ready to transform your precision medicine research? Get in
                touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Mail className="h-6 w-6" />
                  <span>info@pharmalance.io</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-6 w-6" />
                  <span>+1 (555) 555-5555</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6" />
                  <span>123 Pharma St, Research City, PC 12345</span>
                </div>
              </div>
              <Button
                className="bg-white text-[#9b91fc] hover:bg-[#bcb2fc] hover:text-white rounded-full px-8 py-3 text-lg mt-6"
                onClick={() => alert("Coming Soon!")}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
        <section id="newsletter" className="w-full py-48 bg-[#9b91fc]-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Stay Informed
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Subscribe to our newsletter for the latest updates in precision
                medicine, biomarker research, and industry insights.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex gap-2">
                  <Input
                    className="flex-1 rounded-full"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-[#9b91fc] text-white hover:bg-[#9687f9] rounded-full px-6"
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms & Conditions and
                  Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">
          © 2024 Pharmalance. All rights reserved.
        </p>
      </footer>
      <footer className="py-1 text-sm font-thin bg-[#fff] w-full text-center">
        Built by Viatus Media
      </footer>
    </div>
  );
}
