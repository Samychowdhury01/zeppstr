import React from "react";
import logo from "../../assets/home/logo.png";
import postImg from "../../assets/home/post-img.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="gradient-bg px-8 md:px-28 py-10">
      <footer className="footer text-base-content">
        <div>
          <img src={logo} alt="logo" />
          <p>
            FindBestSEO has ranked PageTraffic <br /> among the top 10 SEO
            companies for 2020.
          </p>
          <div className="text-4xl text-secondary flex gap-10 mt-10">
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
        <div>
          <span className="footer-title text-secondary text-2xl font-semibold">
            Company
          </span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">Resources</a>
          <a className="link link-hover">Blog</a>
        </div>
        <div>
          <span className="footer-title text-secondary text-2xl font-semibold">
            Latest news
          </span>
          <div>
            <div className="flex gap-5 mb-5">
              <img src={postImg} alt="new-post" />
              <div>
              <h4 className="text-secondary text-lg font-medium mb-2">Per Click Management</h4>
              <p className="text-xs">PageTraffic is a premier Search Engine Marketing ( SEM).</p>
              <li className="text-xs text-primary list-disc mt-4">15 April 2021</li>
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <img src={postImg} alt="new-post" />
              <div>
              <h4 className="text-secondary text-lg font-medium mb-2">Per Click Management</h4>
              <p className="text-xs">PageTraffic is a premier Search Engine Marketing ( SEM).</p>
              <li className="text-xs text-primary list-disc mt-4">15 April 2021</li>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
      <div className="flex justify-between mt-20">
        <p>
          <span>&copy;</span>
          2023 Zeppstr. Patent Pending. All Rights Reserved.
        </p>
        <p>Privacy | Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
