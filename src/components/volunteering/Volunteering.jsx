import React from 'react';
import VolunteeringCard from './VolunteeringCard';
import './Volunteering.css';
import ieeeRasLogo from '../../assets/images/organizations/RAS New Logo Color.png';
import ieeeSbLogo from '../../assets/images/organizations/IEEE STUDENT B LOGO.png';
import cseLogo from '../../assets/images/institutes/uomcse-448x212.png';
import uomLogo from '../../assets/images/institutes/University_of_Moratuwa_logo.png';
import sccAuLogo from '../../assets/images/organizations/SCCAU Logo.png';
import sccScoutLogo from '../../assets/images/organizations/new logo SCCSG.png';
import sccLogo from '../../assets/images/institutes/SCC Logo.png';

const Volunteering = () => {
  return (
    <div className="volunteering-container">
      {/* <p className="section-subtitle">
        Leadership roles and community engagement
      </p> */}

      <div className="volunteering-section">
        <h3 className="vol-section-title">University of Moratuwa</h3>
        
        <VolunteeringCard
            logo={ieeeRasLogo}
            organization="IEEE Robotics and Automation Society, UoM"
            details={[
                "<strong>Secretary</strong> | Oct 2024 – Oct 2025",
                "<strong>Vice Chairman</strong> | Oct 2023 – Oct 2024",
                "<strong>Design Committee Member</strong> | Oct 2022 – Oct 2023",
                "<strong>BotTalks 1.0 Co-Chair</strong> | Mar – Apr 2023"
            ]}
        />

        <VolunteeringCard
            logo={ieeeSbLogo}
            organization="IEEE Student Branch, UoM"
            details={[
                "Membership Development Committee | Nov 2023 – Nov 2024",
                "IEEE Open Week Volunteer | Feb – Mar 2024"
            ]}
        />

        <VolunteeringCard
            logo={cseLogo}
            organization="Department of CSE, UoM"
            details={[
                "CSE40 Marketing Committee | Jan – May 2025",
                "Hit The Grounds Marketing Committee | Dec 2024 – Jan 2025",
                "CSE Career Fair 2024 Company Coordination | Dec 2023 – Jan 2024"
            ]}
        />

        <VolunteeringCard
            logo={uomLogo}
            organization="Mora Hiking Club, UoM"
            details={[
                "Stridian 2025 Media Team | Jul – Sep 2025",
                "Stridian 2024 Health Team | Jul – Sep 2024"
            ]}
        />
      </div>
      <div className="volunteering-section">
        <h3 className="vol-section-title">Sivali Central College</h3>
        
        <VolunteeringCard
            logo={sccAuLogo}
            organization="Sivali Astronomy Union"
            details={[
                "<strong>President</strong> | Oct 2018 – Oct 2019"
            ]}
        />

        <VolunteeringCard
            logo={sccScoutLogo}
            organization="Sivali Scout Group"
            details={[
                "Senior Scout | Jul 2017 – Jul 2020",
                "Junior Scout | Jan 2014 – Jul 2017"
            ]}
        />

        <VolunteeringCard
            logo={sccLogo}
            organization="Sivali Prefects Guild"
            details={[
                "Junior Prefect | Jan 2017 – Jan 2018"
            ]}
        />
      </div>
    </div>
  );
};

export default Volunteering;
