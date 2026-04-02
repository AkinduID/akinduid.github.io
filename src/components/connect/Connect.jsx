import React from 'react';
import './Connect.css';
import CommonCard from '../layout/CommonCard';

// Social Icons
import email from '../../assets/images/social/email.png';
import linkedin from '../../assets/images/social/linkedin.png';
import github from '../../assets/images/social/github.png';
import instagram from '../../assets/images/social/instagram.png';
import twitter from '../../assets/images/social/twitter.png';
import behance from '../../assets/images/social/behance.png';
import facebook from '../../assets/images/social/facebook.png';
import discord from '../../assets/images/social/discord.png';

const Connect = () => {
  const connectItems = [
    { icon: email, title: 'Email', handle: 'akinduid@gmail.com', link: 'mailto:akinduid@gmail.com' },
    { icon: linkedin, title: 'LinkedIn', handle: '@akinduid', link: 'https://linkedin.com/in/akinduid' },
    { icon: github, title: 'GitHub', handle: '@AkinduID', link: 'https://github.com/AkinduID' },
    { icon: instagram, title: 'Instagram', handle: '@akinduid', link: 'https://instagram.com/akinduid' },
    { icon: twitter, title: 'Twitter', handle: '@akinduid', link: 'https://twitter.com/akinduid' },
    { icon: behance, title: 'Behance', handle: '@akinduid', link: 'https://behance.net/akinduid' },
    { icon: facebook, title: 'Facebook', handle: '@akinduid', link: 'https://facebook.com/akinduid' },
    { icon: discord, title: 'Discord', handle: '@akinduid', link: 'https://discord.com/users/akinduid' }
  ];

  return (
    <div className="connect-container">
      {/* <p className="section-subtitle">
        Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or collaboration opportunities.
      </p> */}
      
      <CommonCard className="connect-hub-card modern-card">
        <div className="connect-grid" role="list">
          {connectItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="connect-item"
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
            >
              <div className="connect-icon">
                <img src={item.icon} alt={item.title} loading="lazy" />
              </div>
              <div className="connect-info">
                <h4>{item.title}</h4>
                <p>{item.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </CommonCard>

      {/* <div className="contact-form-section">
        <h2 className="major gradient-text-card">Contact</h2>
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
      </div> */}
    </div>
  );
};

export default Connect;
