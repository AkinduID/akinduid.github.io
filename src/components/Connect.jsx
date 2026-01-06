import React from 'react';
import SectionHeader from './SectionHeader';
import ConnectCard from './ConnectCard';
import './Connect.css';

// Social Icons
import email from '../assets/images/social/email.png';
import linkedin from '../assets/images/social/linkedin.png';
import github from '../assets/images/social/github.png';
import instagram from '../assets/images/social/instagram.png';
import twitter from '../assets/images/social/twitter.png';
import behance from '../assets/images/social/behance.png';
import facebook from '../assets/images/social/facebook.png';
import discord from '../assets/images/social/discord.png';
import flickr from '../assets/images/social/flickr.png';

const Connect = () => {
  return (
    <div className="connect-container">
      <SectionHeader title="Let's Connect" />
      
      <p className="section-subtitle">
        Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or collaboration opportunities.
      </p>
      
      <div className="connect-grid">
        <ConnectCard icon={email} title="Email" handle="akinduid@gmail.com" link="mailto:akinduid@gmail.com" />
        <ConnectCard icon={linkedin} title="LinkedIn" handle="@akinduid" link="https://linkedin.com/in/akinduid" />
        <ConnectCard icon={github} title="GitHub" handle="@AkinduID" link="https://github.com/AkinduID" />
        <ConnectCard icon={instagram} title="Instagram" handle="@akinduid" link="https://instagram.com/akinduid" />
        <ConnectCard icon={twitter} title="Twitter" handle="@akinduid" link="https://twitter.com/akinduid" />
        <ConnectCard icon={behance} title="Behance" handle="@akinduid" link="https://behance.net/akinduid" />
        <ConnectCard icon={facebook} title="Facebook" handle="@akinduid" link="https://facebook.com/akinduid" />
        <ConnectCard icon={discord} title="Discord" handle="@akinduid" link="https://discord.com/users/akinduid" />
        <ConnectCard icon={flickr} title="Flickr" handle="@akinduid" link="https://flickr.com/people/akinduid" />
      </div>

      <div className="contact-form-section">
        <h2 className="major gradient-text">Contact</h2>
        <form method="post" action="#">
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="primary" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Connect;
