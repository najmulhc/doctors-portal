import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[url('https://i.ibb.co/gj29FvF/footer.png')] w-full">
      <div class="footer p-10 text-accent container mx-auto py-16">
        <div>
          <span class="footer-title">Services</span>
          <Link to="/" class="link link-hover">
            Branding
          </Link>
          <Link to="/" class="link link-hover">
            Design
          </Link>
          <Link to="/" class="link link-hover">
            Marketing
          </Link>
          <Link to="/" class="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to="/" class="link link-hover">
            About us
          </Link>
          <Link to="/" class="link link-hover">
            Contact
          </Link>
          <Link to="/" class="link link-hover">
            Jobs
          </Link>
          <Link to="/" class="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to="/" class="link link-hover">
            Terms of use
          </Link>
          <Link to="/" class="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" class="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="pt-10 pb-4">
        <p className="text-center">
          Copyright © 2022 - All right reserved by Doctors Portal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
